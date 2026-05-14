# Open Source Campus Network (OSCN)

[![Laravel 13](https://img.shields.io/badge/Laravel-13.x-FF2D20?style=for-the-badge&logo=laravel)](https://laravel.com)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)

**Open Source Campus Network (OSCN)** adalah platform ekosistem akademik modern yang dirancang untuk menghubungkan Mahasiswa, Dosen, Alumni, dan Industri dalam satu jaringan yang cerdas dan terintegrasi. Dibangun dengan pondasi **Laravel 13 (AI-Native)**, platform ini mengedepankan kolaborasi, transparansi data akademik, dan efisiensi pelaporan berbasis AI.

---

## ✨ Fitur Utama

### 🔐 Multi-Institutional SSO
Sistem login tunggal (Single Sign-On) yang mendukung integrasi dengan provider kampus (Google Workspace, Microsoft 365, atau CAS) untuk keamanan dan kemudahan akses.

### 🌐 Social Network Engine (Feed & Network)
Mesin jejaring sosial yang memungkinkan civitas akademika untuk berbagi riset, pemikiran, dan pencapaian. Mendukung postingan teks, tautan, dan interaksi *real-time* antar pengguna.

### 🤖 AI-Driven Evidence Review (Upcoming)
Sistem peninjauan bukti aktivitas (magang, riset, pengabdian) yang didukung oleh AI untuk klasifikasi otomatis ke dalam Indikator Kinerja Utama (IKU) universitas.

### 🎓 Academic & Industry Hub
Ruang kolaborasi antara dunia akademik dan industri untuk pencarian bakat, lowongan magang, dan proyek riset bersama.

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

## 🗺️ Roadmap Pengembangan

### ✅ Tahap 1: Fondasi & Autentikasi (Selesai)
- [x] Inisialisasi Project Laravel 13 & React.
- [x] Implementasi Role-Based Access Control (RBAC).
- [x] Integrasi Single Sign-On (SSO) Kampus.
- [x] Desain Sistem & Branding Dinamis via `.env`.

### ✅ Tahap 2: Social Network Engine (Selesai)
- [x] Skema Database Social Feed (Post, Comment, Like).
- [x] Backend Controller & API Data Mapping.
- [x] UI Feed Dinamis dengan React & Inertia.js.
- [x] Fitur Unggah Media (Gambar & Dokumen).
- [x] Sistem Notifikasi Real-time.

### ✅ Tahap 3: AI-Driven Evidence Review (Selesai)
- [x] Modul Unggah Evidence (Bukti Magang/MBKM/Prestasi).
- [x] Integrasi AI Classifier Multi-provider (Gemini, OpenAI, Claude, Ollama).
- [x] Dashboard Reviewer untuk Dosen & Admin dengan fitur Override Kategori.
- [x] Sistem Pemetaan Otomatis ke 12 IKU Terbaru.

### ✅ Tahap 4: Talent & Marketplace (Selesai)
- [x] Modul Lowongan Kerja & Magang Industri.
- [x] Profil Talent Terverifikasi (IKU-based Portfolio).
- [x] Sistem Matchmaking AI untuk Karir Mahasiswa.
- [x] Fitur Lamaran Langsung & Tracking Status.

### ✅ Tahap 5: Network Analytics & Governance (Selesai)
- [x] Dashboard IKU Eksekutif (Rektorat/Dekanat).
- [x] Sinkronisasi Data ke Pangkalan Data Pendidikan Tinggi (PDDIKTI).
- [x] Laporan Kinerja Jaringan Kampus (untuk Network Mode).

### ✅ Tahap 6: Mobile Experience & Scale-up (Selesai)
- [x] Implementasi API Ecosystem & Mobile Auth (Sanctum).
- [x] Integrasi QR-Code Dinamis untuk Talent Portfolio.
- [x] Dokumentasi API untuk Integrasi Pihak Ketiga (API_DOCS.md).
- [x] Optimasi Mobile Accessibility.

---

## 📄 Lisensi
Proyek ini didistribusikan di bawah lisensi **MIT**. Silakan gunakan dan kembangkan untuk kemajuan ekosistem pendidikan tinggi.

---

**OSCN - Connecting Minds, Advancing Education.**
Developed by [Motiolabs Space](https://github.com/motiolabs-space)
