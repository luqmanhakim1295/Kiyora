// Renders src/ad.html frame by frame and encodes it with ffmpeg.
//
//   node render.js                 -> out/kiyora-ad-30s.mp4 (+ no-music variant)
//   node render.js --stills 1,8,20 -> out/still-<t>.jpg previews only
const { chromium } = require('playwright');
const { spawn, execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const FPS = 30;
const DURATION = 30;
const W = 1080, H = 1920;
const ROOT = __dirname;
const OUT = path.join(ROOT, 'out');

async function openPage() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: W, height: H } });
  await page.goto('file://' + path.join(ROOT, 'src', 'ad.html'));
  await page.evaluate(() => window.ready);
  return { browser, page };
}

async function stills(times) {
  const { browser, page } = await openPage();
  for (const t of times) {
    await page.evaluate((t) => window.seek(t), t);
    await page.screenshot({ path: path.join(OUT, `still-${t}.jpg`), type: 'jpeg', quality: 85 });
  }
  await browser.close();
}

async function video() {
  const silent = path.join(OUT, 'video-silent.mp4');
  const { browser, page } = await openPage();
  const ff = spawn('ffmpeg', ['-v', 'error', '-y', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '18', '-pix_fmt', 'yuv420p', silent], { stdio: ['pipe', 'inherit', 'inherit'] });
  const frames = FPS * DURATION;
  for (let i = 0; i < frames; i++) {
    await page.evaluate((t) => window.seek(t), i / FPS);
    const buf = await page.screenshot({ type: 'jpeg', quality: 95 });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
    if (i % 150 === 0) console.log(`frame ${i}/${frames}`);
  }
  ff.stdin.end();
  await new Promise((r) => ff.on('close', r));
  await browser.close();

  const vo = path.join(ROOT, 'vo', 'vo-full.wav');
  const music = path.join(ROOT, 'src', 'music.wav');
  const enc = ['-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-movflags', '+faststart', '-shortest'];
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', silent, '-i', vo, ...enc, path.join(OUT, 'kiyora-ad-30s-tanpa-muzik.mp4')]);
  // Music ducks under the VO via sidechain compression.
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', silent, '-i', vo, '-i', music, '-filter_complex',
    '[1:a]asplit=2[vo][sc];[2:a]volume=0.55[m];[m][sc]sidechaincompress=threshold=0.03:ratio=8:attack=20:release=350[duck];' +
    '[vo][duck]amix=inputs=2:normalize=0,loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000[a]',
    '-map', '0:v', '-map', '[a]', ...enc, path.join(OUT, 'kiyora-ad-30s.mp4')]);
  fs.unlinkSync(silent);
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const i = process.argv.indexOf('--stills');
  if (i > -1) await stills(process.argv[i + 1].split(',').map(Number));
  else await video();
})();
