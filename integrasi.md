# Dokumentasi Integrasi OSCN (Compliance-First)
## Konsep: "Engagement-Driven Compliance"

Dokumen ini menjelaskan strategi integrasi data antara platform sosial OSCN dengan sistem kementerian (PDDIKTI, SISTER, SIMBELMAWA, BIMA) untuk mendukung capaian IKU (Indikator Kinerja Utama) Perguruan Tinggi.

---

## 1. Visi Integrasi: "Berdampak & Otomatis"
OSCN tidak hanya berfungsi sebagai alat pelaporan administratif, tetapi sebagai platform yang memanen data secara natural dari interaksi civitas akademika. 

**Prinsip Utama:**
- **Natural**: Dosen dan mahasiswa tidak merasa "mengisi laporan".
- **Smart**: AI mengekstrak data dari hashtag (#prestasi, #riset, #magang).
- **Verified**: Data yang dipanen masuk ke dashboard admin untuk divalidasi sebelum disinkronisasi ke kementerian.
- **Outcome-Oriented**: Fokus pada **Narasi Dampak**, bukan sekadar angka statistik.

---

## 2. Strategi Integrasi Data: "Impact-Driven Compliance"

Integrasi saat ini tidak hanya memindahkan data angka, tetapi juga **Narasi Dampak (Outcome)** untuk memperkuat branding institusi.

| Sistem Target | Status Integrasi | Data Raw Material Utama | Fitur "Berdampak" |
| :--- | :--- | :--- | :--- |
| **SISTER (BKD)** | Terintegrasi (Simulasi) | Kinerja Tridharma, SKS | Narasi Manfaat Riset/Pengabdian |
| **PDDIKTI (MBKM)** | Terintegrasi (Simulasi) | Aktivitas Mahasiswa, 20 SKS | Outcome Magang & Proyek Desa |
| **SIMBELMAWA** | Terintegrasi (Simulasi) | Prestasi, Sertifikat | Dampak Prestasi bagi Kampus |
| **IKU Dashboard** | Terintegrasi (Live) | 12 Poin IKU Terbaru | Impact Analytics Hub |
| **Social Feed** | Terintegrasi (AI) | Postingan Civitas, Hashtag | Smart Impact Extraction |

---

## 3. Matriks Kesiapan Data OSCN (Tracking)
| Kategori Data | Status di OSCN | Digunakan Oleh |
| :--- | :--- | :--- |
| Profil Akademik (PDDIKTI) | ✅ Ready | PDDIKTI, SIVIL |
| Riset ID (SINTA/Scopus) | ✅ Ready | SINTA, IKU 5 |
| Modul LPPM (Penelitian) | ✅ Ready | BIMA, PDDIKTI |
| Modul Kerjasama | ✅ Ready | SIPERKERMA, IKU 6 |
| Modul Prestasi Mahasiswa | ✅ Ready | SIMBELMAWA, IKU 2 |
| Modul BKD (SISTER) | ✅ Ready | SISTER, BKD Dosen |
| Impact Dashboard | ✅ Ready | Pimpinan, Branding Kampus |

---

## 4. Alur Kerja (Workflow)
1. **Submit**: Civitas posting di Campus Network dengan hashtag tertentu + Narasi Dampak.
2. **Harvest**: `DataHarvestingService` mendeteksi hashtag dan membuat draf di modul terkait + mengekstrak Impact Narrative.
3. **Review**: Admin (Operator/LPPM) memvalidasi draf di dashboard admin.
4. **Sync**: Klik tombol "Sync to SISTER/PDDIKTI" untuk melaporkan data secara resmi.

---
*Dokumen ini diperbarui secara berkala seiring perkembangan integrasi sistem kementerian.*
