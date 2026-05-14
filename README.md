# Open Source Campus Network (OSCN)

[![Laravel 13](https://img.shields.io/badge/Laravel-13.x-FF2D20?style=for-the-badge&logo=laravel)](https://laravel.com)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)

**Open Source Campus Network (OSCN)** adalah platform ekosistem akademik modern yang dirancang untuk menghubungkan Mahasiswa, Dosen, Alumni, dan Industri dalam satu jaringan yang cerdas dan terintegrasi untuk mendukung penuh program **IKU PT dari Kemendiktisaintek Berdampak**. Dibangun dengan pondasi **Laravel 13 (AI-Native)**, platform ini mengedepankan kolaborasi, transparansi data akademik, dan efisiensi pelaporan berbasis AI untuk transformasi pendidikan tinggi Indonesia.

---

## 👥 Ekosistem Peran (Roles)

Platform OSCN mengintegrasikan berbagai pemangku kepentingan dalam satu ekosistem:

*   **Mahasiswa**: Membangun portofolio berbasis IKU, mengikuti program MBKM, dan melakukan rekrutmen berbasis AI Matchmaking.
*   **Dosen**: Mengelola riset, membimbing aktivitas luar kampus (MBKM), dan melaporkan kinerja tridharma yang berdampak.
*   **Admin Kampus / Rektorat**: Memantau capaian 12 IKU secara real-time melalui Executive Dashboard untuk kebijakan strategis.
*   **Mitra Industri**: Membuka peluang kerja/magang dan melakukan kurasi talent secara presisi berdasarkan kompetensi terverifikasi.

---

## ✨ Fitur Utama Platform

### 🔐 AI-Native Governance
Sistem pelaporan dan validasi bukti aktivitas yang didukung oleh AI untuk memastikan kepatuhan terhadap standar nasional secara otomatis.

### 🌐 Smart Social Network
Jejaring sosial profesional khusus civitas akademika untuk kolaborasi riset, publikasi, dan diseminasi inovasi yang berdampak luas.

### 🤖 Career & Talent Marketplace
Bursa kerja cerdas yang menggunakan AI untuk mempertemukan lulusan dengan industri berdasarkan "Lencana IKU" dan kompetensi riil.

### 📊 Executive IKU Analytics
Dashboard analitik tingkat tinggi yang menyajikan matriks performa institusi secara transparan dan akuntabel.

---

## 🏛️ Kepatuhan 12 IKU PT (Kemendiktisaintek 2025)

OSCN memfasilitasi pelaporan 12 Indikator Kinerja Utama sesuai dengan kerangka **"Diktisaintek Berdampak"**:

| Kategori | Indikator IKU | Penjelasan Singkat |
| :--- | :--- | :--- |
| **Wajib** | **IKU 1: Kesiapan Lulusan** | Persentase lulusan yang bekerja, berwirausaha, atau studi lanjut. |
| **Wajib** | **IKU 2: Pengalaman Luar Kampus** | Mahasiswa yang mendapat pengalaman minimal 20 SKS di luar kampus. |
| **Wajib** | **IKU 3: Dosen di Luar Kampus** | Dosen yang berkegiatan di industri atau kampus lain yang bereputasi. |
| **Wajib** | **IKU 4: Praktisi Mengajar** | Keterlibatan tenaga ahli industri dalam pembelajaran di kelas. |
| **Wajib** | **IKU 5: Hasil Kerja Dosen** | Rekognisi internasional dan pemanfaatan hasil riset oleh masyarakat. |
| **Wajib** | **IKU 6: Kemitraan Prodi** | Kerjasama program studi dengan mitra kelas dunia. |
| **Wajib** | **IKU 7: Kelas Kolaboratif** | Metode pembelajaran yang partisipatif dan berbasis proyek (Case Method/PBL). |
| **Wajib** | **IKU 8: Akreditasi Internasional** | Persentase program studi yang memiliki sertifikasi/akreditasi internasional. |
| **Pilihan** | **IKU 9: Dampak SDGs** | Kontribusi institusi terhadap Sustainable Development Goals dan masalah sosial. |
| **Pilihan** | **IKU 10: Hilirisasi Inovasi** | Jumlah produk inovasi yang berhasil dikomersialkan atau digunakan industri. |
| **Pilihan** | **IKU 11: Efisiensi Edukasi** | Optimalisasi proses bisnis kampus dan pemerataan akses pendidikan. |
| **Partisipatif** | **IKU 12: Inisiatif Kampus** | Program inovasi mandiri perguruan tinggi yang memberikan dampak nyata. |

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
