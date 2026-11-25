# Panduan Mulai Coding dengan GitHub Copilot: Website "Suara Kita, Musyawarah Kita"

Untuk Kelompok 5 (Pancasila, UAS). Stack: HTML, CSS, JavaScript, Tailwind (CDN), Google Sheets lewat Apps Script. Tanpa server, hosting gratis.

## 0. Keputusan yang sudah ditetapkan
- Gaya: noir editorial (hitam, tipografi besar, halftone, ticker, monospace). Referensi hanya inspirasi.
- Warna: **hitam-putih murni (achromatic)** sesuai berkas desain "Underground Noir" dari Stitch. Tidak ada biru, hijau, atau warna lain. Status dan interaksi dibedakan lewat inversi hitam-putih, bingkai tebal, dan awalan teks seperti `[GAGAL]`, `[SUKSES]`.
- Font: Syne (judul), Space Mono (label), Geist (isi).
- Semua teks mengikuti **bagian 3 (aturan konten)**. Teks hasil Stitch yang bertentangan harus diganti.

## 1. Persiapan (sekali saja)
1. Pasang **VS Code** (code.visualstudio.com).
2. Buat akun **GitHub**. Mahasiswa bisa mengajukan GitHub Student Developer Pack (education.github.com) untuk akses Copilot Pro gratis. Kalau belum disetujui, paket **Copilot Free** tetap cukup untuk proyek ini. Cek syarat terbaru di situs resmi GitHub.
3. Di VS Code, pasang ekstensi **GitHub Copilot** dan **GitHub Copilot Chat**, lalu masuk dengan akun GitHub.
4. Pasang **Git** dan ekstensi **Live Server** (untuk pratinjau).
5. Buat repositori GitHub `suara-kita` (public atau private), lalu clone ke komputer.

## 2. Struktur proyek
```
suara-kita/
├─ index.html          # beranda (parallax, ticker, 4 panel)
├─ form.html           # form aspirasi 2 langkah
├─ konfirmasi.html     # tinjau, pakta etika, kirim
├─ terima-kasih.html   # sukses
├─ info.html           # alur, sila ke-4, kontak
├─ css/style.css       # variabel warna dan gaya tambahan
├─ js/config.js        # URL Apps Script
├─ js/form.js          # validasi dan pengiriman
├─ js/motion.js        # parallax, ticker, scroll horizontal
├─ assets/             # ilustrasi SVG/PNG buatan sendiri
├─ apps-script/Code.gs # skrip penyimpan ke Sheets
├─ .github/copilot-instructions.md
└─ README.md
```

## 3. Aturan konten (WAJIB, Copilot harus mengikutinya)
Bagian ini juga masuk ke `copilot-instructions.md`.

**Jangan ditulis (tidak benar atau tidak bisa dibuktikan):**
- Klaim enkripsi: "RSA-4096", "blind-signature", "zero-knowledge", "zero-trace", "MD5", "100% terenkripsi", "audit terverifikasi".
- "Tanpa jejak digital yang mengarah ke identitas". Tulis yang jujur: "Kami tidak meminta nama, NIM, atau email."
- "Diserahkan ke Dekanat dan Pimpinan Jurusan", "tenggat 15 Desember", "dokumen publik". Tulis: "Rekomendasi direncanakan disampaikan melalui Advomiba." Sesuaikan jika Advomiba sudah menyetujui.
- Nama kampus lain (POLBAN, UIN Sunan Gunung Djati), nomor pasal tata tertib, "Konsili Musyawarah Rakyat Kampus Indonesia", dan tahun 2024. Tahun yang benar: 2026.
- Merek referensi: "Longshot", "LF", "Dispatch", "On Air", "Vol. 04". Pakai identitas kelompok.
- Citra "pengawasan", "drone", "interogasi". Pakai ilustrasi musyawarah.
- Tiket, nomor agenda, atau kutipan aspirasi contoh yang tampak seperti data nyata. Jika perlu contoh, beri label "CONTOH TAMPILAN".
- Jangan tulis klaim dampak yang tidak bisa dibuktikan.

**Boleh dan harus ada:**
- Ticker: `3–5 DES PENGUMPULAN ASPIRASI // 6–7 DES MUSYAWARAH // 8–12 DES REKOMENDASI // 15 DES PRESENTASI // KELOMPOK 5 PANCASILA`
- Identitas: Kelompok 5, kelas 1INFD, Informatika, UIN Prof. K.H. Saifuddin Zuhri Purwokerto, dosen Eko Ahmad Riyanto, S.Pd., M.Sc.
- Pemberitahuan tujuan di halaman pertama (tugas UAS Pancasila) dan jaminan jujur soal data.
- Kotak centang pakta: "Saya menyampaikan aspirasi ini dengan jujur dan santun, tanpa menyebut nama individu."
- Empat panel: Kenapa suara penting, Anonim dan aman (versi jujur), Dibahas bersama (sila ke-4), Jadi rekomendasi.

## 4. Berkas instruksi untuk Copilot
Buat `.github/copilot-instructions.md` dan tempel isi ini:

```markdown
# Instruksi proyek: Suara Kita, Musyawarah Kita

Website statis (HTML, CSS, JS, Tailwind CDN) untuk mengumpulkan aspirasi anonim
mahasiswa 1INFD, UIN Prof. K.H. Saifuddin Zuhri Purwokerto. Data dikirim ke
Google Sheets lewat Google Apps Script. Bahasa antarmuka: Bahasa Indonesia.

## Gaya
- Noir editorial, hitam-putih murni tanpa warna kromatik. Latar #000000 dan #0A0A0A,
  panel #141414 dan #1A1A1A, garis #262626 dan #333333, teks utama #FFFFFF atau #F4F4F4,
  metadata #888888 dan #AAAAAA. Dilarang memakai biru, hijau, merah, atau warna lain.
- Status dan error tanpa warna: pakai inversi (hitam jadi putih), bingkai putih 2px,
  dan awalan teks [GAGAL], [SUKSES], [PROSES]. Jangan mengandalkan warna saja.
- Bayangan hanya blok keras tanpa blur (4px 4px 0 #FFFFFF atau #262626).
- Font: Syne (judul), Space Mono (label, huruf kapital), Geist (isi, min 16px).
- Sudut 0px, garis 1px, tanpa bayangan blur. Hover dengan inversi warna.
- Mobile first (360px), tombol minimal 48px.
- Parallax dan scroll horizontal hanya di beranda dan info, jangan di form.
- Hormati prefers-reduced-motion. Di HP pakai scroll vertikal.
- Jangan memakai gambar, huruf, atau teks dari situs lain. Ilustrasi buatan sendiri.
- Jangan pakai user-scalable=no (zoom harus bisa).

## Aturan konten
- Jangan menulis klaim enkripsi, "zero-trace", "tanpa jejak", atau klaim keamanan
  yang tidak bisa dibuktikan. Tulis: "Kami tidak meminta nama, NIM, atau email."
- Jangan menyebut kampus lain, nomor pasal, tahun 2024, atau merek referensi.
- Jangan menjanjikan penyerahan ke Dekanat atau tenggat. Tulis: "Rekomendasi
  direncanakan disampaikan melalui Advomiba."
- Tidak ada kolom nama, NIM, email. Jangan simpan IP atau data perangkat.
- Bahasa santun, tidak menyerang individu atau organisasi.

## Kode
- JavaScript biasa (tanpa framework). Berikan kode lengkap, bukan potongan.
- Semua teks yang dilihat pengguna dalam Bahasa Indonesia.
- Validasi di sisi klien: kolom wajib, batas 500 karakter (aspirasi) dan 300 (saran).
- Tambahkan kolom jebakan (honeypot) tersembunyi untuk spam.
- URL Apps Script disimpan di js/config.js.
```

## 5. Alur kerja dengan Copilot (urutan tugas)
Gunakan **Copilot Chat** (mode Agent atau Edit) dan buka berkas terkait. Satu tugas per perintah, uji dulu sebelum lanjut. Setelah tiap tugas, buka Live Server dan cek di HP (lebar 360 px).

**Tugas 1: kerangka dan gaya**
```
Baca .github/copilot-instructions.md. Buat struktur berkas sesuai README, dan css/style.css
berisi variabel CSS untuk palet. Pasang Tailwind CDN dan font Syne, Space Mono, Geist
dari Google Fonts di setiap halaman. Belum perlu isi konten.
```

**Tugas 2: beranda**
```
Buat index.html: ticker berjalan di atas, wordmark besar "SUARA KITA", 4 panel
(Kenapa suara penting, Anonim dan aman, Dibahas bersama, Jadi rekomendasi) dengan teks
sesuai aturan konten, tombol "Sampaikan aspirasi" ke form.html, dan navigasi
kiri-bawah (info, kirim aspirasi). Placeholder ilustrasi di assets/. Scroll horizontal
untuk panel di desktop (>=1024px), vertikal di HP.
```

**Tugas 3: parallax dan gerak (js/motion.js)**
```
Tambahkan parallax 2-3 lapisan di hero memakai transform dan requestAnimationFrame.
Matikan semua animasi jika prefers-reduced-motion aktif. Ticker berhenti saat hover/sentuh.
```

**Tugas 4: form (form.html dan js/form.js)**
```
Buat form 2 langkah dengan indikator progres.
Langkah 1 (pilihan berbentuk kartu besar): pernah_keluhan (Ya/Tidak),
disampaikan_ke (Advomiba/HMPS/Dosen PA/Grup angkatan/Tidak disampaikan/Lainnya),
ditanggapi (Ya/Belum/Tidak tahu), tahu_alur (Tahu/Sedikit/Tidak tahu).
Langkah 2: kategori (Akademik/Fasilitas/Layanan administrasi/Lainnya),
aspirasi (textarea maks 500 dengan penghitung), saran (opsional maks 300),
honeypot tersembunyi bernama website.
Validasi sebelum lanjut. Simpan sementara di sessionStorage (dibungkus try/catch).
Teks bantuan: "Tulis kejadian dan sarannya, jangan menyebut nama orang."
```

**Tugas 5: konfirmasi, pengiriman, terima kasih**
```
Buat konfirmasi.html menampilkan ringkasan jawaban, kotak centang pakta etika (wajib),
tombol "Kirim aspirasi". Di js/form.js kirim data dengan fetch POST ke URL di
js/config.js memakai Content-Type text/plain dan mode no-cors. Tampilkan status:
loading, sukses (pindah ke terima-kasih.html), gagal (pesan "Belum terkirim, coba lagi").
Cegah kirim ganda dengan menonaktifkan tombol dan menandai di sessionStorage.
Hapus semua elemen simulator status dan klaim enkripsi.
```

**Tugas 6: info dan aksesibilitas**
```
Buat info.html: alur 4 langkah, penjelasan sila ke-4, kontak kelompok, tanpa klaim
berlebihan. Periksa kontras warna (min 4.5:1), label form, fokus keyboard, dan
tambahkan alt teks pada gambar.
```

## 6. Penyimpan data: Google Sheets + Apps Script
1. Buat Google Sheet baru. Baris 1 (judul kolom):
   `waktu | pernah_keluhan | disampaikan_ke | ditanggapi | tahu_alur | kategori | aspirasi | saran`
2. Menu **Ekstensi > Apps Script**, hapus isi, tempel kode berikut, lalu simpan.

```javascript
// apps-script/Code.gs
const SHEET_NAME = 'Sheet1'; // samakan dengan nama tab di Sheet

const OPSI = {
  pernah_keluhan: ['Ya', 'Tidak'],
  disampaikan_ke: ['Advomiba', 'HMPS', 'Dosen PA', 'Grup angkatan', 'Tidak disampaikan', 'Lainnya'],
  ditanggapi: ['Ya', 'Belum', 'Tidak tahu'],
  tahu_alur: ['Tahu', 'Sedikit', 'Tidak tahu'],
  kategori: ['Akademik', 'Fasilitas', 'Layanan administrasi', 'Lainnya']
};

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const d = JSON.parse(e.postData.contents);

    // Jebakan spam
    if (d.website) return out({ ok: true });

    // Validasi
    for (const k in OPSI) {
      if (d[k] && OPSI[k].indexOf(d[k]) === -1) return out({ ok: false, error: 'opsi' });
    }
    const aspirasi = String(d.aspirasi || '').trim();
    const saran = String(d.saran || '').trim();
    if (aspirasi.length < 10 || aspirasi.length > 500) return out({ ok: false, error: 'aspirasi' });
    if (saran.length > 300) return out({ ok: false, error: 'saran' });

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    sheet.appendRow([
      new Date(),
      d.pernah_keluhan || '', d.disampaikan_ke || '', d.ditanggapi || '', d.tahu_alur || '',
      d.kategori || '', clean(aspirasi), clean(saran)
    ]);
    return out({ ok: true });
  } catch (err) {
    return out({ ok: false, error: 'server' });
  } finally {
    lock.releaseLock();
  }
}

// Cegah rumus tersisip di Sheet
function clean(s) {
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. **Terapkan > Deployment baru > Jenis: Aplikasi web.** Jalankan sebagai: **Saya**. Akses: **Siapa saja**. Salin URL `/exec` ke `js/config.js`:
```javascript
// js/config.js
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/ISI_ID_DEPLOYMENT/exec';
```
4. Setiap kali kode skrip diubah, buat **deployment baru** atau perbarui versi, kalau tidak perubahan tidak aktif.
5. Sheet hanya dibagikan ke anggota kelompok (jangan "siapa saja yang punya tautan").

Catatan kejujuran data: skrip ini tidak menyimpan IP dan tidak meminta identitas. Pemilik Google tetap dapat melihat log eksekusi skrip. Karena itu tulis klaimnya sederhana (tidak meminta nama, NIM, email), jangan "tidak ada jejak sama sekali".

## 7. Pengujian sebelum disebar (target selesai 2 Desember)
- [ ] Kirim 5 aspirasi uji dari HP berbeda, cek baris masuk ke Sheet, lalu hapus baris uji.
- [ ] Kirim dengan koneksi dimatikan: pesan gagal muncul, tidak kirim ganda.
- [ ] Kolom kosong dan karakter berlebih ditolak.
- [ ] Teks aspirasi berawalan `=` tersimpan sebagai teks.
- [ ] Zoom HP bisa dipakai, kontras teks cukup, keyboard bisa menavigasi.
- [ ] Tangkapan layar tiap layar dan baris Sheet (tanpa isi sensitif) untuk bukti laporan.
- [ ] Semua teks sudah lolos aturan konten bagian 3.

## 8. Publikasi (gratis)
**GitHub Pages:** di repositori, Settings > Pages > Branch `main`, folder `/ (root)`. Alamat: `https://USERNAME.github.io/suara-kita/`. (Alternatif: Netlify, seret-dan-lepas folder.) Bagikan tautan lewat grup WhatsApp 1INFD pada 3 Desember.

## 9. Tips memakai Copilot dengan benar
- Beri konteks: buka berkas yang relevan, tulis tujuan dan batasannya. Perintah pendek menghasilkan kode generik.
- Satu tugas per perintah. Baca hasilnya, jangan langsung terima semua.
- Jalankan dan uji sendiri. Kode yang tampak benar belum tentu jalan.
- Cek teks yang dihasilkan terhadap aturan konten (Copilot cenderung menambah klaim keamanan atau kalimat dramatis).
- Jangan tempel data aspirasi asli ke Copilot.
- Commit kecil dan sering: `git add . && git commit -m "pesan" && git push`.
- Kamu tetap harus paham kode yang dikumpulkan. Siapkan penjelasan singkat cara kerjanya untuk presentasi.
- Catat penggunaan AI (Copilot, Stitch, Claude) di laporan sebagai transparansi.

## 10. Pembagian tugas
- Zii: koordinasi, Tugas 4 dan 5 (form dan pengiriman), Apps Script.
- Ahmad Hanif: Tugas 1, 2, 3 (kerangka, beranda, parallax).
- Syifa Aulia: ilustrasi, perapian desain di Stitch, kontras warna.
- Hafshah: dokumentasi, pengujian di HP, tangkapan layar.
- Faiz: konten teks (aturan bagian 3), info.html, laporan dan daftar pustaka.
