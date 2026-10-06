# Premium Minimalist Wedding Invitation Template

Template website undangan pernikahan digital berdesain premium, elegan, dan minimalis. Didesain secara spesifik menggunakan pendekatan *Mobile-First*, typography premium (Playfair Display & Montserrat), dan struktur HTML/CSS/JS murni (Vanilla) agar ringan serta mudah dikustomisasi.

## Fitur
- Desain *Luxury / Premium*
- Mobile First & Responsive
- Fullscreen Cover dengan Animasi Smooth
- Floating Audio Player
- Floating Bottom Navigation
- Section Interaktif: Countdown, Timeline Cerita, Gallery Lightbox
- Clipboard Copy (Rekening)
- Form RSVP terhubung langsung ke WhatsApp
- Konfigurasi Data Client Terpusat (Mudah diedit)

## Cara Menggunakan (Untuk Developer / Agency)

Semua data client terisolasi pada file `js/script.js` agar layout dan desain tidak tersentuh secara tidak sengaja. 

1. Buka folder `js/` dan edit file `script.js`.
2. Cari bagian paling atas berlabel `// ================= DATA CLIENT =================`.
3. Ganti data *placeholder* (seperti `[PRIA]`, `[TANGGAL]`, URL Maps) dengan data pengantin sungguhan.
4. Ganti foto-foto *placeholder* di file `index.html` dengan foto asli client. Simpan foto client di dalam folder `assets/images/` dan ubah atribut `src` pada tag `<img>`.
5. Untuk mengganti lagu, timpa file `assets/music/wedding-music.mp3` dengan lagu pilihan client.

## Cara Menjalankan Lokal

Karena tidak menggunakan *backend / database* khusus, Anda bisa langsung membukanya di browser:
1. Ekstrak atau *clone* folder.
2. Buka `index.html` dengan Chrome/Safari/Firefox, atau gunakan ekstensi VS Code **Live Server** untuk pengalaman development yang lebih baik.

## Cara Deploy Gratis ke GitHub Pages

1. Buat akun di [GitHub](https://github.com).
2. Buat repository baru (misal: `wedding-client-a`).
3. Upload seluruh isi folder `wedding-template` ke dalam repository tersebut.
4. Pergi ke tab **Settings** di repository tersebut.
5. Pada menu sebelah kiri, cari dan klik **Pages**.
6. Pada bagian *Source*, ubah *branch* dari `None` menjadi `main` (atau `master`), lalu klik **Save**.
7. Tunggu sekitar 1-2 menit. GitHub akan memberikan URL publik untuk undangan pernikahan tersebut (misal: `https://username.github.io/wedding-client-a/`).