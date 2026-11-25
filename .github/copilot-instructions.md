# Instruksi proyek: Suara Kita, Musyawarah Kita

Website statis (HTML, CSS, JS, Tailwind CDN) untuk mengumpulkan aspirasi mahasiswa 1INFD, Informatika, UIN Prof. K.H. Saifuddin Zuhri Purwokerto. Data dikirim ke Google Sheets melalui Google Apps Script. Bahasa antarmuka: Bahasa Indonesia.

## Gaya

- Gaya noir editorial: hitam-putih murni, sudut 0px, garis 1px, bayangan blok keras tanpa blur.
- Warna latar: #000000 dan #0A0A0A. Panel: #141414 dan #1A1A1A.
- Garis: #262626 dan #333333. Teks: #FFFFFF atau #F4F4F4. Metadata: #888888 atau #AAAAAA.
- Dilarang memakai warna kromatik, warna merah, hijau, atau biru.
- Status dibedakan dengan teks [GAGAL], [SUKSES], atau [PROSES], serta inversi hitam-putih.
- Font: Syne untuk judul, Space Mono untuk label, dan Geist untuk isi minimal 16px.
- Mobile first pada lebar 360px. Tombol minimal 48px. Zoom tidak boleh dinonaktifkan.
- Hormati prefers-reduced-motion.

## Konten

- Jangan membuat klaim enkripsi atau keamanan yang tidak dapat dibuktikan.
- Jangan menulis "tanpa jejak", "100% terenkripsi", "blind-signature", "zero-trace", atau "RSA-4096".
- Jangan menyebut nama kampus lain, nomor pasal, tahun 2024, atau merek referensi Longshot/LF/Dispatch/On Air/Vol. 04.
- Tahun yang digunakan adalah 2026.
- Tidak boleh ada kolom nama, NIM, atau email.
- Tidak menyimpan IP atau data perangkat.
- Rekomendasi direncanakan disampaikan melalui Advomiba; jangan menjanjikan penyerahan ke Dekanat atau tenggat final.
- Tulis dengan santun dan tidak menyerang individu atau organisasi.
- Ticker wajib:
  `3-5 DES PENGUMPULAN ASPIRASI // 6-7 DES MUSYAWARAH // 8-12 DES REKOMENDASI // 15 DES PRESENTASI // KELOMPOK 5 PANCASILA`

## Kode

- JavaScript biasa tanpa framework.
- Berikan kode lengkap dan dapat dijalankan.
- Semua teks antarmuka dalam Bahasa Indonesia.
- Validasi sisi klien: aspirasi wajib 10-500 karakter; saran maksimal 300 karakter.
- Semua tombol, tautan, dan formulir harus memiliki label aksesibel.
- Gunakan sessionStorage dengan try/catch.
- Tambahkan honeypot bernama website.
- URL Apps Script disimpan di js/config.js.
