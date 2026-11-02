# HUJAN COLLECTIVE // RDYNM Workgroup Website

Website resmi komunitas & kelompok kerja teknis **Hujan Collective (`RDYNM Workgroup`)** — dibangun dengan arsitektur kode bersih, responsif, dan terstruktur tanpa kesan template AI generik.

## Struktur Folder Proyek

```text
hujan-collective-src/
├── index.html          # Struktur utama halaman (HOME, ABOUT, TEAM, PROJECTS, SERVICES, CONTACT)
├── css/
│   └── style.css       # Custom stylesheet (Grid arsitektural, crosshair, variabel tema, animasi)
├── js/
│   └── app.js          # Logika interaktif (Data anggota, filter proyek, modal preview, Command Palette ⌘K, WhatsApp)
├── assets/
│   ├── studio-hero.jpg
│   ├── project-pulse.jpg
│   ├── project-radar.jpg
│   └── project-monolith.jpg
└── README.md           # Dokumentasi penggunaan & kustomisasi
```

## Fitur Utama Sesuai Roadmap

1. **HOME (`#home`)**: Hero Section & identitas workgroup, Highlight 3 Proyek Terbaru, Ringkasan Tim Interaktif, dan Call to Action (Hubungi Kami).
2. **ABOUT (`#about`)**: Tentang Workgroup, Visi & 4 Pilar Misi, Sejarah Singkat (Timeline 2023–2026), dan Nilai / Value Engineering Tim.
3. **TEAM (`#team`)**: Daftar anggota lengkap (**Rafly, Defarel, Yanda, Nabil, Nadip, Maman, Hujan**) beserta foto/avatar, posisi, keahlian, deskripsi singkat, filter divisi, sakelar formasi **5 Core / 7 Full Roster**, serta fitur **Upload Foto Asli** dari perangkat.
4. **PROJECTS / PORTFOLIO (`#projects`)**: Daftar proyek lengkap dengan filter kategori, filter tahun (2024–2026), pencarian kata kunci, serta modal **Live Preview & Detail Arsitektur**.
5. **SERVICES (`#services`)**: 6 layanan teknis unggulan dengan rincian *deliverables*, *tech stack*, dan integrasi satu klik ke formulir konsultasi.
6. **CONTACT (`#contact`)**: Formulir diskusi proyek (dengan pembuatan tiket & pengiriman langsung ke WhatsApp), tombol salin Email & Nomor WhatsApp, Alamat Studio, serta tautan Social Media.

## Cara Menjalankan di Lokal (VS Code)

1. Ekstrak file `.zip` ini ke komputer Anda.
2. Buka folder di **Visual Studio Code**.
3. Klik kanan pada `index.html` lalu pilih **Open with Live Server** (atau buka `index.html` langsung di browser Chrome / Edge / Firefox / Safari).
4. Untuk mengubah data bawaan secara permanen, edit array `defaultMembers`, `defaultProjects`, dan `servicesData` di bagian atas file `js/app.js`.
