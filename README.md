# Open Source Campus Network (OSCN)

[![Laravel 13](https://img.shields.io/badge/Laravel-13.x-FF2D20?style=for-the-badge&logo=laravel)](https://laravel.com)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)

**Open Source Campus Network (OSCN)** adalah platform ekosistem akademik modern yang dirancang untuk menghubungkan Mahasiswa, Dosen, Alumni, dan Industri dalam satu jaringan yang cerdas dan terintegrasi untuk mendukung penuh program **IKU PT dari Kemendiktisaintek Berdampak**. Platform ini dilengkapi dengan **OSCN Bridge**, sebuah infrastruktur integrasi canggih yang menghubungkan sistem internal kampus (SIAKAD) dengan sistem nasional (PDDIKTI, SISTER, SIMBELMAWA) secara otomatis. Dibangun dengan pondasi **Laravel 13 (AI-Native)**, platform ini mengedepankan kolaborasi, transparansi data akademik, dan efisiensi pelaporan berbasis AI untuk transformasi pendidikan tinggi Indonesia.

---

## 📸 Visual Showcase

Berikut adalah tampilan antarmuka premium OSCN Bridge 2.0:

| Dashboard Utama | Halaman Login Premium |
| :--- | :--- |
| ![Dashboard](screenshots/dashboard.png) | ![Login](screenshots/login.png) |

> [!TIP]
> Letakkan file gambar Anda di folder `screenshots/` dengan nama yang sesuai agar muncul otomatis di GitHub.

---

## 👥 Ekosistem Peran (Roles)

Platform OSCN mengintegrasikan berbagai pemangku kepentingan dalam satu ekosistem:

*   **Mahasiswa**: Membangun portofolio secara natural melalui postingan aktivitas, mengikuti program MBKM, dan terhubung dengan industri tanpa tekanan target angka.
*   **Dosen**: Mengelola riset kolaboratif, mendokumentasikan publikasi, dan berkegiatan di luar kampus sebagai bagian dari pengembangan diri dan rekognisi profesional.
*   **LPPM & Rektorat (Admin)**: Peran strategis di balik layar yang memantau rekapitulasi data antara target IKU tahunan dan realisasi lapangan, serta aktif mendorong civitas untuk mencapai target institusi.
*   **Mitra Industri**: Menyediakan tantangan proyek riset, membuka lowongan magang/kerja, dan mencari pakar (Expert Finder) untuk kebutuhan konsultasi bisnis.

---

## ✨ Fitur Utama Platform

### 🌐 Collaborative Research & Innovation Hub
Platform kolaborasi untuk mengerjakan proyek riset dan penelitian multidisiplin yang dapat berkolaborasi antar fakultas maupun institusi, dirancang khusus untuk menciptakan inovasi yang memberikan dampak nyata bagi masyarakat (Social Impact).

### 💼 Industry-Academic Integration
Menghubungkan dunia kampus secara langsung dengan kebutuhan industri untuk penyediaan tenaga kerja kompeten, program magang bersertifikat, dan kolaborasi penelitian bersama untuk hilirisasi inovasi.

### 🔐 AI-Native Governance & Compliance
Sistem pelaporan dan validasi bukti aktivitas yang didukung oleh AI untuk memastikan kepatuhan terhadap 12 Indikator Kinerja Utama (IKU) secara otomatis dan akurat.

### 📊 Executive Analytics Command Center
Dashboard analitik tingkat tinggi yang menyajikan matriks performa institusi secara transparan untuk pimpinan kampus dalam memantau dampak dan capaian target strategis.

---

## 🏛️ Kepatuhan 12 IKU PT (Kemendiktisaintek 2025)

OSCN memfasilitasi pelaporan 12 Indikator Kinerja Utama sesuai dengan kerangka **"Diktisaintek Berdampak"**:

| Indikator IKU | Penjelasan Singkat |
| :--- | :--- |
| **IKU 1: Efisiensi Edukasi** | Mengukur tingkat keberhasilan mahasiswa menyelesaikan studi tepat waktu (AEE). |
| **IKU 2: Kesiapan Lulusan** | Persentase lulusan yang bekerja, berwirausaha, atau studi lanjut dalam 1 tahun. |
| **IKU 3: Pengalaman Luar Kampus** | Mahasiswa yang berkegiatan (MBKM) atau berprestasi di luar program studi. |
| **IKU 4: Rekognisi Dosen** | Dosen yang memperoleh pengakuan internasional (Publikasi, Keynote, Paten). |
| **IKU 5: Luaran Kerja Sama** | Produk nyata, teknologi, atau lisensi hasil kerja sama dengan industri/startup. |
| **IKU 6: Publikasi Bereputasi** | Proporsi publikasi yang masuk indeks internasional bereputasi (Scopus/WoS). |
| **IKU 7: Dampak SDGs** | Keterlibatan institusi dalam program Sustainable Development Goals (SDG 1, 4, 17). |
| **IKU 8: Penyusunan Kebijakan** | Keterlibatan dosen/peneliti dalam penyusunan kebijakan nasional/daerah/industri. |
| **IKU 9: Kemandirian Finansial** | Persentase pendapatan non-pendidikan (Kerja sama industri, Royalti, Unit Usaha). |
| **IKU 10: Zona Integritas** | Jumlah unit kerja yang mengusulkan pembangunan Zona Integritas (WBK/WBBM). |
| **IKU 11: Tata Kelola & Integritas** | Pengelolaan organisasi yang transparan (WTP, SAKIP) dan integritas akademik. |
| **IKU 12: Kesejahteraan Dosen** | Ketersediaan perencanaan strategis peningkatan kesejahteraan finansial dosen. |

---

## 🔗 Peta Integrasi & Kesiapan (Integration Roadmap)

OSCN dirancang sebagai hub sentral yang menghubungkan sistem internal kampus dengan ekosistem nasional. Berikut adalah status kesiapan integrasi:

| Sistem | Tujuan Integrasi | Status | Protokol |
| :--- | :--- | :--- | :--- |
| **SIAKAD Internal** | Sinkronisasi data mahasiswa & nilai | ✅ Ready | REST API / Neco Adapter |
| **Neo Feeder PDDIKTI** | Pelaporan MBKM & Kelulusan (IKU 2) | ✅ Ready | Web Service (WS) |
| **SISTER (Kemdikbud)** | Sinkronisasi BKD & Portofolio Dosen | ✅ Ready | REST API (WS-Pro) |
| **SIMBELMAWA** | Pelaporan Prestasi Mahasiswa | 🟡 Planned | Web Scraper / API |
| **SINTA / Scopus** | Penarikan sitasi & publikasi dosen | ✅ Ready | Scraper / API |

### 🛠️ Sistem Integrasi yang Didukung (Supported Systems)

Kami menyediakan **OSCN Bridge**, sebuah layer integrasi berbasis *Adapter Pattern* yang mendukung sistem berikut secara *out-of-the-box*:

#### 1. 🟦 Sistem Kemdikbudristek (Nasional)
*   **Neo Feeder PDDIKTI (Reporting) [Testing]**: Sinkronisasi otomatis untuk data MBKM, riset, dan prestasi mahasiswa menggunakan protokol WebService (WS). Digunakan untuk pelaporan resmi institusi.
*   **PDDikti Discovery API (Real-time) [Testing]**: Integrasi dengan API publik (Ref: `ridwaanhall/api-pddikti`) untuk verifikasi instan profil dosen, riset nasional, dan riwayat mahasiswa.
*   **SISTER (Integrated) [Testing]**: Penarikan data portofolio dosen (BKD) untuk otomatisasi profil akademik civitas.
*   **SIMKATMAWA / SIMBELMAWA [On-progress]**: Modul pelaporan prestasi kemahasiswaan.

#### 2. 🟩 Sistem Akademik (SIAKAD)
*   **Neco Siakad [Testing]**: Integrasi penuh dengan sistem SIAKAD berbasis Laravel (Ref: [oyasuryana/neo-feeder-integrator](https://github.com/oyasuryana/neo-feeder-integrator)).
*   **Generic REST Adapter [Testing]**: Memungkinkan integrasi dengan SIAKAD kustom (SIAKAD 4.0, SIAKAD Cloud) melalui pemetaan field JSON yang fleksibel.

### Checklist Kesiapan Integrasi
- [x] Schema database kompatibel dengan standar PDDIKTI.
- [x] Middleware penanganan API SISTER (WS-Basic/Pro).
- [x] Adapter khusus untuk Neco Siakad (Laravel architecture).
- [/] Integrasi OAuth2 untuk SSO Kampus.
- [x] Sistem logging integrasi (Audit Trail) untuk pemantauan sinkronisasi.

---

## 📚 Referensi Integrasi (Tech References)

Kami menggunakan standar dan referensi dari komunitas pengembang sistem informasi kampus terbaik di Indonesia. Daftar lengkap repositori yang kami jadikan acuan (PDDIKTI, SIAKAD, Tracer Study, dll) dapat dilihat pada:

👉 **[references_integration.md](references_integration.md)**

---

## 🗺️ Roadmap Pengembangan

Strategi pengembangan OSCN dibagi menjadi 4 fase utama yang fokus pada otomatisasi pelaporan kementerian sebelum perluasan jejaring sosial:

1.  **Fase 1: Compliance Foundation** - Standarisasi data IKU & Riset (Selesai).
2.  **Fase 2: Deep Compliance Integration** - MBKM, SIPERKERMA, & SIMBELMAWA (In-Progress).
3.  **Fase 4: AI Synergy** - Validasi bukti berbasis AI & Analitik Prediktif.

Detail lengkap rencana pengembangan dapat dilihat pada [roadmap.md](roadmap.md).

---

## 🛠️ Arsitektur Teknologi

- **Backend**: Laravel 13.x (PHP 8.3+)
- **Frontend**: React 18 + Inertia.js (SPA Experience)
- **Styling**: Tailwind CSS 4.0 (Custom Design System)
- **Database**: MySQL / MariaDB
- **AI Engine**: Laravel AI SDK (Gemini/OpenAI Integration)
- **Role Management**: Spatie Laravel Permission

---

## 🚀 Persiapan Pengembangan (Local)

### Prasyarat
- **Laragon** (Sangat disarankan)
- **PHP 8.3**
- **Node.js & NPM**

### Instalasi
1. **Clone Repositori:**
   ```bash
   git clone https://github.com/motiolabs-space/open-campus.git
   cd open-campus
   ```

2. **Instalasi Dependensi:**
   ```bash
   composer install
   npm install
   ```

3. **Konfigurasi Environment:**
   Salin `.env.example` menjadi `.env` dan sesuaikan kredensial database serta AI API Key.
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **Migrasi & Seeding:**
   Bangun struktur database dan isi dengan data simulasi.
   ```bash
   php artisan migrate:fresh --seed
   ```

5. **Jalankan Aplikasi:**
   ```bash
   npm run dev
   # Akses melalui http://campusnetwork.test atau http://localhost:8000
   ```

---

## 📄 Lisensi
Proyek ini didistribusikan di bawah lisensi **MIT**. Silakan gunakan dan kembangkan untuk kemajuan ekosistem pendidikan tinggi.

---

**OSCN - Connecting Minds, Advancing Education.**
Developed by [Motiolabs Space](https://github.com/motiolabs-space)
