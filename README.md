# Portofolio Website Ahmad Rianul Qauliah

Website Portofolio Profesional ini dirancang khusus untuk **Ahmad Rianul Qauliah**, seorang lulusan baru Geofisika Universitas Hasanuddin yang berfokus pada analisis data bawah permukaan (*subsurface data*), pemetaan GIS, dan keteknikan migas.

Website ini menggunakan arsitektur Vanilla HTML, CSS, dan JavaScript modern sehingga memiliki performa muat sangat cepat, responsif di semua perangkat, memiliki animasi yang premium, serta sangat mudah di-hosting langsung melalui **GitHub Pages**.

---

## 🌟 Fitur Utama
1. **Desain Kebumian Premium (Earth-Inspired Theme)**: Tema default gelap (*dark theme*) yang elegan dengan aksen warna amber/gold (representasi energi/gelombang seismik) dan emerald/green, serta dilengkapi dengan sakelar Mode Terang (*light theme toggle*).
2. **Animasi Wavefront Dinamis**: Header latar belakang seismogram bergaya visual modern menggunakan SVG.
3. **Filter Interaktif Timeline**: Pengalaman dan proyek akademik dapat difilter secara interaktif (Semua, Proyek & Riset, Pekerjaan Lapangan & Asisten, Organisasi) tanpa memuat ulang halaman.
4. **Kecepatan & Responsivitas Maksimal**: Dibangun tanpa framework luar yang berat, responsif mulai dari layar ponsel (Mobile-friendly) hingga monitor desktop.
5. **Ramah SEO**: Dilengkapi dengan tag meta deskripsi, author, dan kata kunci relevan untuk mempermudah pencarian Google.

---

## 📂 Struktur Berkas
```text
portfolio-ahmad/
├── index.html     # Struktur halaman utama (SEO, navigasi, konten CV lengkap)
├── style.css      # Gaya visual (tema warna, grid responsif, animasi glassmorphic)
├── script.js      # Logika interaktif (mode gelap/terang, filter proyek, scroll-reveal)
└── README.md      # Panduan dokumentasi ini
```

---

## 🛠️ Cara Kustomisasi

### 1. Menambahkan Foto Profil Anda
1. Buat folder baru bernama `assets` di dalam direktori proyek Anda.
2. Di dalam folder `assets`, buat folder `images`.
3. Simpan foto profil Anda (misal: `profile.jpg`) ke dalam folder tersebut: `assets/images/profile.jpg`.
4. Buka file `index.html` dan cari baris berikut (sekitar baris 86):
   ```html
   <div class="profile-photo-placeholder">
       <i class="fas fa-user-tie"></i>
       <span>Foto Profil</span>
   </div>
   ```
5. Ganti blok kode di atas dengan tag gambar:
   ```html
   <img src="assets/images/profile.jpg" alt="Ahmad Rianul Qauliah" class="profile-photo">
   ```
6. Tambahkan sedikit CSS di `style.css` untuk mempercantik foto tersebut:
   ```css
   .profile-photo {
       width: 100%;
       height: 100%;
       object-fit: cover;
       border-radius: inherit;
   }
   ```

### 2. Mengganti Bukti Foto/Gambar Proyek & Lapangan
Pada bagian timeline (`index.html`), terdapat placeholder bukti foto proyek seperti ini:
```html
<div class="timeline-media-placeholder">
    <i class="far fa-image"></i>
    <span>Dokumentasi Seismogram Palu 2018 (Foto akan diupdate)</span>
</div>
```
Untuk memperbaruinya dengan foto asli:
1. Masukkan gambar proyek Anda ke folder `assets/images/` (contoh: `gempa-palu.jpg`).
2. Ubah kode di atas menjadi tag `<img>`:
   ```html
   <img src="assets/images/gempa-palu.jpg" alt="Dokumentasi Seismogram Palu 2018" style="width:100%; border-radius:8px; margin-top:1rem;">
   ```

### 3. Mengaktifkan Formulir Kontak Sungguhan (Formspree)
Agar formulir kontak di website Anda bisa benar-benar mengirimkan email ke kotak masuk Anda secara gratis:
1. Daftarkan email Anda di [Formspree](https://formspree.io/).
2. Buat Form baru dan salin tautan Endpoint Formspree Anda (misal: `https://formspree.io/f/xbjnqypo`).
3. Buka `index.html`, cari form kontak (sekitar baris 531) dan sesuaikan kodenya menjadi:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_ID_DI_FORMSPREE" method="POST">
   ```
4. Buka `script.js` pada bagian akhir berkas, lalu hapus atau sesuaikan logika `contactForm.addEventListener('submit', ...)` agar pengiriman data form dikelola secara langsung oleh Formspree.

---

## 🚀 Panduan Deploy ke GitHub Pages

Karena Anda menggunakan fitur GitHub Pages, berikut langkah-langkah mudah mempublikasikan website ini ke internet:

1. **Buat Repositori Baru di GitHub**:
   - Masuk ke akun GitHub Anda.
   - Buat repositori baru (misalnya dengan nama `portofolio` atau `username.github.io`).
   
2. **Unggah File Kode**:
   - Anda bisa menggunakan Git CLI atau mengunggah berkas secara langsung lewat browser di situs GitHub.
   - Pastikan berkas `index.html`, `style.css`, dan `script.js` berada di **akar utama (root directory)** repositori Anda (bukan di dalam folder tambahan).

3. **Aktifkan Fitur GitHub Pages**:
   - Di repositori GitHub Anda, klik tab **Settings** (Pengaturan).
   - Scroll ke bawah ke menu **Pages** di bilah kiri.
   - Di bawah bagian **Build and deployment**, pilih Source: **Deploy from a branch**.
   - Di bawah bagian Branch, pilih **main** (atau **master**), lalu pilih folder **/ (root)**.
   - Klik **Save**.

4. **Kunjungi Website Anda**:
   - Tunggu sekitar 1-2 menit.
   - Website Anda akan aktif di alamat: `https://username-github.github.io/nama-repositori/` (atau `https://username-github.github.io` jika nama repositori Anda menggunakan format tersebut).
