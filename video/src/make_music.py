"""Synthesises a 30s royalty-free background track (music.wav) for the ad.

Upbeat pop bed at 100 BPM: C - G - Am - F pad, plucked arpeggio, soft kick and hats.
"""
import wave
from pathlib import Path

import numpy as np

SR = 48000
DUR = 30.0
BPM = 100
BEAT = 60 / BPM
BAR = BEAT * 4
t = np.arange(int(SR * DUR)) / SR
out = np.zeros_like(t)

CHORDS = [  # MIDI notes per bar
    [48, 55, 60, 64, 67],  # C
    [43, 55, 59, 62, 67],  # G
    [45, 57, 60, 64, 69],  # Am
    [41, 53, 57, 60, 65],  # F
]


def hz(m):
    return 440 * 2 ** ((m - 69) / 12)


def tone(f, n, bright=3):
    x = np.arange(n) / SR
    return sum(np.sin(2 * np.pi * f * k * x) / k ** 1.6 for k in range(1, bright + 1))


bar = 0
while bar * BAR < DUR:
    chord = CHORDS[bar % 4]
    start = int(bar * BAR * SR)
    n = min(int(BAR * SR), len(t) - start)
    env = np.minimum(1, np.arange(n) / (0.25 * SR)) * np.minimum(1, (n - np.arange(n)) / (0.3 * SR))
    pad = sum(tone(hz(m), n) + tone(hz(m) * 1.004, n) for m in chord[1:])
    out[start:start + n] += 0.035 * env * pad
    out[start:start + n] += 0.10 * env * tone(hz(chord[0] - 12), n, bright=2)  # bass
    for step in range(8):  # eighth-note arpeggio
        s = start + int(step * BEAT / 2 * SR)
        m = chord[1 + [0, 1, 2, 3, 2, 1, 2, 3][step]] + 12
        ln = min(int(0.4 * SR), len(t) - s)
        if ln <= 0:
            break
        out[s:s + ln] += 0.06 * np.exp(-np.arange(ln) / (0.09 * SR)) * tone(hz(m), ln, bright=4)
    bar += 1

beat = 0
rng = np.random.default_rng(7)
while beat * BEAT < DUR:
    s = int(beat * BEAT * SR)
    ln = min(int(0.25 * SR), len(t) - s)
    x = np.arange(ln) / SR
    out[s:s + ln] += 0.35 * np.exp(-x / 0.06) * np.sin(2 * np.pi * (45 + 90 * np.exp(-x / 0.02)) * x)  # kick
    h = s + int(BEAT / 2 * SR)
    hl = min(int(0.05 * SR), len(t) - h)
    if hl > 0:
        noise = np.diff(rng.standard_normal(hl + 1))
        out[h:h + hl] += 0.025 * np.exp(-np.arange(hl) / (0.012 * SR)) * noise  # hat
    beat += 1

out *= np.minimum(1, t / 0.6) * np.minimum(1, (DUR - t) / 1.5)
out = np.tanh(out * 1.4) / np.tanh(1.4)
out /= np.abs(out).max() / 0.8

with wave.open(str(Path(__file__).with_name('music.wav')), 'wb') as w:
    w.setnchannels(1)
    w.setsampwidth(2)
    w.setframerate(SR)
    w.writeframes((out * 32767).astype('<i2').tobytes())
