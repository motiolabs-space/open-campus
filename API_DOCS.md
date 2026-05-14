# 📱 OSCN Mobile API Documentation

Selamat datang di dokumentasi API Open Source Campus Network. API ini dirancang untuk integrasi Mobile App (Android/iOS) dan pihak ketiga.

## 🔐 Autentikasi (Laravel Sanctum)

Semua endpoint dilindungi kecuali `/api/login`. Gunakan token Bearer untuk akses.

### 1. Login
- **URL**: `/api/login`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "email": "user@oscn.id",
    "password": "password",
    "device_name": "iPhone 15 Pro"
  }
  ```
- **Response**: `200 OK` (Mengembalikan token akses).

---

## 📡 Social Feed

### 1. Ambil Feed
- **URL**: `/api/feed`
- **Method**: `GET`
- **Response**: Paginated Social Posts.

### 2. Buat Postingan
- **URL**: `/api/feed`
- **Method**: `POST`
- **Body**: `{ "content": "Halo OSCN!" }`

---

## 🎓 Talent Portfolio

### 1. Direktori Talent
- **URL**: `/api/talents`
- **Method**: `GET`

### 2. Detail Talent & IKU
- **URL**: `/api/talents/{user_id}`
- **Method**: `GET`
- **Note**: Mengembalikan data profil lengkap beserta bukti IKU yang sudah terverifikasi.

---

## 🛠️ Fitur Ekosistem

### QR Profile Sync
Setiap profil talent memiliki endpoint QR dinamis:
`GET /talents/{id}/qr`
Digunakan oleh recruiter untuk melakukan pemindaian fisik pada portofolio mahasiswa saat bursa kerja/job fair.
