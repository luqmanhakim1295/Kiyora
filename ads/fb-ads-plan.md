# Pelan FB / IG Ads — KIYORA GLP-1i Patch

Bahan iklan untuk video 30s (`video/out/kiyora-ad-30s.mp4`). Harga **tidak** disebut di mana-mana.

---

## 0. Arahan untuk session Claude local (dengan Chrome)

> Baca fail ini dan setup iklan di Meta Ads Manager (https://adsmanager.facebook.com) guna Chrome.
>
> 1. Semak senarai **Prasyarat** (bahagian 1). Kalau ada yang belum siap, berhenti dan beritahu pengguna.
> 2. Cipta campaign, ad set dan ad **tepat seperti bahagian 2–4**. Nilai bertanda **[SAHKAN]** mesti ditanya kepada pengguna dulu.
> 3. Simpan semuanya dalam keadaan **OFF / paused**. **Jangan** tekan Publish, aktifkan campaign, atau masukkan maklumat pembayaran. Pengguna akan semak dan aktifkan sendiri.
> 4. Lalui **Senarai semak polisi** (bahagian 5) sebelum selesai, dan laporkan apa yang dicipta (nama campaign / ad set / ad).

---

## Keputusan terkini pengguna (mengatasi bahagian 2–4 jika bercanggah)

| Perkara | Nilai |
|---|---|
| Ad account | **160 \| Unlimited Spend Ads Acc** — `act_808762190838703` |
| Facebook Page | **KIYORA Official** — ⚠️ belum muncul dalam senarai Page yang boleh diiklankan oleh akaun ini (hanya *Raudhya by Ustazah Asma' Harun* `1187092341153994`, **jangan guna**) |
| Pixel | **kiyora anas** — `2168615980356523`, event PURCHASE |
| Objektif | Sales |
| Lokasi | Malaysia sahaja, umur 25–54, semua jantina |
| Bajet | **RM100/hari** di peringkat ad set — sahkan mata wang akaun; jika USD, tukar ke anggaran USD bersamaan |
| AI / automasi | **Semua OFF**: Advantage+ Audience off, Advantage+ Creative off (semua enhancement), CBO off, placement manual (FB Feed, Video Feeds, Stories, Reels + IG jika ada), multi-advertiser off, tiada dynamic creative |
| Ads | 3 ad dalam satu ad set — satu bagi setiap variasi teks (bahagian 4) |
| Video | `https://raw.githubusercontent.com/luqmanhakim1295/Kiyora/7b5f53058721091644aaedd7372aa7ae7c322306/video/out/kiyora-ad-30s.mp4` |
| Thumbnail | `https://raw.githubusercontent.com/luqmanhakim1295/Kiyora/claude/relaxed-pascal-rtg3nf/ads/thumbnail.jpg` |
| Status | Cipta **PAUSED**, tunjuk ringkasan, aktifkan hanya bila pengguna kata "on" |

---

## 1. Prasyarat (pengguna)

- [ ] Ad account Meta aktif dengan kaedah pembayaran
- [ ] Facebook Page KIYORA + akaun Instagram disambung ke ad account
- [ ] Meta Pixel dipasang di kiyora-official.com, event **Purchase** berfungsi (WooCommerce)
- [ ] Bajet harian disahkan

## 2. Campaign

| Tetapan | Nilai |
|---|---|
| Nama | `KIYORA – Video30s – Sales – 2026-11` |
| Objektif | **Sales** (event: Purchase). Kalau Pixel belum ada → **Traffic** (Landing page views) |
| Kategori iklan khas | Tiada |
| Advantage campaign budget | Off (bajet di peringkat ad set untuk ujian) |
| Status | **OFF** |

## 3. Ad set (2 set untuk A/B)

| Tetapan | Ad set A | Ad set B |
|---|---|---|
| Nama | `MY – Wanita 25-54 – Adv+ placements` | `MY – Semua 25-54 – Adv+ placements` |
| Lokasi | Malaysia | Malaysia |
| Umur | 25–54 (**minimum 18+ wajib** untuk produk berat badan) | 25–54 |
| Jantina | Wanita | Semua |
| Bahasa | Melayu, English | Melayu, English |
| Minat (pilihan) | Penurunan berat badan, Diet, Kesihatan & kecergasan | Sama |
| Placements | Advantage+ (video 9:16 sesuai Reels, Stories, Feed) | Sama |
| Bajet harian | **[SAHKAN]** cadangan RM50/hari | **[SAHKAN]** cadangan RM50/hari |
| Tempoh ujian | 7 hari, kemudian kekalkan set yang menang | |

## 4. Ad (sama untuk kedua-dua ad set, 3 variasi teks)

- **Video:** `video/out/kiyora-ad-30s.mp4` (1080×1920, 30s)
- **Thumbnail:** `ads/thumbnail.jpg` (shot produk)
- **Identiti:** Facebook Page KIYORA + Instagram KIYORA
- **URL:** `https://kiyora-official.com/?utm_source=facebook&utm_medium=paid&utm_campaign=kiyora_video30s&utm_content=v{1|2|3}`
- **Butang CTA:** Shop Now (Beli Sekarang)

### Variasi 1 — Masalah → penyelesaian (`utm_content=v1`)
**Primary text**
```
Ramai yang asyik lapar walaupun baru lepas makan 🍫

KIYORA GLP-1i Patch — tampal je kat lengan atau perut. Tak perlu telan pil, tak perlu jarum.
Formula herba (halia, kunyit, cassia seed & mugwort) bantu kawal selera makan sepanjang hari.

✅ Penghantaran percuma seluruh Malaysia
✅ Boleh COD
✅ Jaminan wang dikembalikan 60 hari
```
**Headline:** Tampal Je, Tak Perlu Pil
**Description:** Free delivery + COD seluruh Malaysia

### Variasi 2 — Pendek & mudah (`utm_content=v2`)
**Primary text**
```
Craving tak henti? Cara paling mudah — TAMPAL JE 🩹
KIYORA GLP-1i Patch bantu kawal selera makan, tanpa pil & tanpa jarum.
Free delivery + COD seluruh Malaysia 🇲🇾
```
**Headline:** Kawal Craving Dengan Mudah
**Description:** Jaminan wang dikembalikan 60 hari

### Variasi 3 — Bukti sosial (`utm_content=v3`)
**Primary text**
```
⭐ 4.9/5 dari pengguna KIYORA

"Selera makan makin kurang & tak cepat letih bila diet." — Kak Lieya

Tampal je KIYORA GLP-1i Patch kat lengan atau perut. Formula herba, tanpa pil, tanpa jarum.
✅ Free delivery ✅ COD ✅ Jaminan 60 hari

*Hasil berbeza mengikut individu.
```
**Headline:** 4.9⭐ Dari Pengguna Sebenar
**Description:** Order sekarang, bayar bila terima (COD)

## 5. Senarai semak polisi Meta (wajib)

- [ ] Umur ad set **18+** (pelan ini guna 25–54)
- [ ] **Tiada gambar before/after** dan tiada fokus pada bahagian badan untuk "menunjukkan" hasil
- [ ] Tiada dakwaan hasil spesifik atau pantas ("turun 10kg", "turun berat mendadak")
- [ ] Tiada dakwaan "Diluluskan KKM" / "Terbukti secara klinikal" (nombor `NOT…` ialah notifikasi, bukan kelulusan)
- [ ] Teks tidak menyatakan sifat peribadi penonton (elak "Anda gemuk?", "Berat badan anda…") — sebab itu Variasi 1 guna "Ramai yang…", bukan "Anda…"
- [ ] Testimoni disertakan penafian "Hasil berbeza mengikut individu"

**Nota:** perkataan "GLP-1" mungkin mencetuskan semakan tambahan (dikaitkan dengan ubat preskripsi). Kalau iklan ditolak atas sebab ini, cuba headline/teks tanpa "GLP-1i" (cth. "KIYORA Craving Patch") sebelum membuat rayuan.

## 6. Selepas aktif (pengguna)

- Semak selepas 3 hari: CTR (link) > 1%, kos per Landing Page View, kos per Purchase
- Hari ke-7: matikan ad set / variasi teks yang lemah, naikkan bajet set yang menang 20–30% setiap 2–3 hari
