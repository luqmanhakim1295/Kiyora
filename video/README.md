# Iklan Video KIYORA — 30s (9:16)

| Fail | Keterangan |
|---|---|
| `out/kiyora-ad-30s.mp4` | Video akhir 1080×1920, 30fps — VO + muzik latar (muzik direndahkan automatik bila VO bercakap) |
| `out/kiyora-ad-30s-tanpa-muzik.mp4` | Sama, VO sahaja — untuk tambah muzik trending dalam TikTok / CapCut / Meta |
| `vo/` | Klip VO Gemini (suara Sulafat) + skrip & masa — lihat `vo/README.md` |
| `src/ad.html` | Template animasi (semua babak, teks & caption) |
| `src/img/` | Aset produk & foto, dipotong dari kiyora-official.com |
| `src/make_music.py` | Jana `src/music.wav` (muzik latar sintesis, bebas hak cipta) |
| `render.js` | Render HTML → MP4 guna Playwright + ffmpeg |

## Render semula

```bash
python3 src/make_music.py           # sekali sahaja, jana src/music.wav
node render.js --stills 2,9,18,29   # pratonton cepat -> out/still-*.jpg
node render.js                      # video penuh -> out/*.mp4 (~2 minit)
```

Untuk tukar teks atau masa, edit `src/ad.html`. Setiap elemen guna `animation: <nama> <tempoh> <easing> <mula>s`,
di mana `<mula>` ialah saat dalam video. Masa caption mengikut `vo/README.md`.
