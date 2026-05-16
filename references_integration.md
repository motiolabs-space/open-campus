# 🔗 Proyek Referensi Integrasi OSCN
**Kompilasi Repositori GitHub untuk Sistem Pelaporan Nasional Kampus Indonesia**

Dokumen ini berisi daftar proyek open source yang digunakan sebagai acuan arsitektur dan standar integrasi platform OSCN.

---

## 1. 🟦 PDDIKTI NEO FEEDER INTEGRATION
Sistem pelaporan data akademik ke pangkalan data nasional.

*   **[oyasuryana/neo-feeder-integrator](https://github.com/oyasuryana/neo-feeder-integrator)**  
    *Fungsi:* Auto-sync data dari Excel ke Neo Feeder.  
    *Tech:* PHP, Web Service Client.  
    *Rekomendasi:* Gunakan sebagai standar pemetaan data Excel ke WS PDDIKTI.

*   **[masbudikusuma/neo-integrator](https://github.com/masbudikusuma/neo-integrator)**  
    *Fungsi:* Management tools untuk Neo Feeder sync.  
    *Tech:* PHP CodeIgniter.

*   **[virbo/yii2-wsfeeder](https://github.com/virbo/yii2-wsfeeder)**  
    *Fungsi:* Library WebService PDDIKTI Feeder.  
    *Tech:* Yii2 Framework.  
    *Rekomendasi:* Referensi logic Insert/Update/Delete data via WS.

---

## 🏫 2. SIAKAD (Sistem Informasi Akademik)
Sistem inti pengelolaan data internal kampus.

*   **[mjaya69703/neco-siakad](https://github.com/mjaya69703/neco-siakad)** — ⭐ **UTAMA / RECOMMENDED**  
    *Status:* Active Development (Jul 2025).  
    *Tech:* **Laravel 12**, MySQL.  
    *Rekomendasi:* OSCN akan mengadopsi model data dan arsitektur dari proyek ini karena menggunakan teknologi paling modern.

*   **[uninus-opensource/uninus-superapp](https://github.com/uninus-opensource/uninus-superapp)**  
    *Tech:* TypeScript, NestJS, NextJS (Monorepo).  
    *Rekomendasi:* Referensi untuk arsitektur enterprise/monorepo.

*   **[NathanaelGT/siamel](https://github.com/NathanaelGT/siamel)**  
    *Fungsi:* SIAKAD + E-Learning terpadu.

---

## 🎓 3. TRACER STUDY (Alumni Tracking)
Pemantauan karir lulusan (IKU 1).

*   **[AhmadMuzayyin/laravel-tracer-study](https://github.com/AhmadMuzayyin/laravel-tracer-study)**  
    *Rekomendasi:* Basis modul alumni OSCN.

---

## 🎯 4. Peluang Kontribusi (Missing Integrations)
Sistem-sistem berikut belum memiliki referensi integrasi open source yang kuat di GitHub. OSCN berpeluang mempublikasikan paket ini sebagai pionir:

1.  **SIMLITABMAS Integration**: Pengelolaan hibah riset nasional.
2.  **SIMKATMAWA Integration**: Pelaporan pemeringkatan kemahasiswaan.
3.  **SIPERKERMA (Laporkerma)**: Pelaporan kerjasama institusi.
4.  **SINTA Bilateral Sync**: Sinkronisasi dua arah skor SINTA dosen.
5.  **PISN Integration**: Penomoran Ijazah Sertifikat Nasional.

---

## 💡 Strategi Adopsi OSCN
1.  **Phase 1**: Pelajari pola integrasi `oyasuryana` dan `mjaya69703`.
2.  **Phase 2**: Bangun *Adapter Layer* di OSCN agar bisa terhubung ke model data SIAKAD yang ada.
3.  **Phase 3**: Publikasikan modul integrasi mandiri (misal: `oscn-pddikti-bridge`) sebagai kontribusi ke komunitas.

---
*Prepared by: Motiolabs Space (Mei 2026)*
