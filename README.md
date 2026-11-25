# Suara Kita, Musyawarah Kita

Website statis untuk mengumpulkan aspirasi mahasiswa 1INFD, Informatika, UIN Prof. K.H. Saifuddin Zuhri Purwokerto.

## Menjalankan

Buka `index.html` melalui Live Server atau host statis seperti GitHub Pages.

## Struktur

- `index.html`: beranda
- `form.html`: form aspirasi dua langkah
- `konfirmasi.html`: ringkasan dan pakta etika
- `terima-kasih.html`: status pengiriman
- `info.html`: informasi alur dan musyawarah
- `css/style.css`: gaya noir editorial
- `js/form.js`: validasi dan pengiriman
- `js/config.js`: URL Google Apps Script
- `apps-script/Code.gs`: penerima data Google Sheets

## Pengaturan Google Sheets

1. Buat Google Sheet dengan nama tab `Sheet1`.
2. Tambahkan judul kolom pada baris pertama: `waktu | pernah_keluhan | disampaikan_ke | ditanggapi | tahu_alur | kategori | aspirasi | saran`.
3. Tempel isi `apps-script/Code.gs` ke Google Apps Script.
4. Terapkan sebagai aplikasi web dengan akses `Siapa saja`.
5. Tempel URL deployment berakhiran `/exec` ke `js/config.js`.
