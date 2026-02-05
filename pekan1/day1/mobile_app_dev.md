# Mobile App Development Overview

### 1. Definisi & Fokus Utama
*   **Definisi:** Mobile App Development adalah proses pembuatan perangkat lunak yang dirancang khusus untuk berjalan pada perangkat seluler (smartphone dan tablet).
*   **Fokus Utama:** Pengalaman pengguna (UX), responsivitas, efisiensi konsumsi baterai/memori, dan integrasi fitur perangkat.
*   **Output Teknis:** File instalasi binary (.apk/.aab untuk Android, .ipa untuk iOS).

### 2. Perbedaan Web vs. Mobile Development
| Aspek | Web Development | Mobile App Development |
| :--- | :--- | :--- |
| **Eksekusi** | Berjalan di dalam Browser | Berjalan langsung di atas OS |
| **Distribusi** | Diakses via URL langsung | Lewat App Store / Play Store |
| **Hardware** | Akses terbatas via API browser | Akses penuh ke sensor (GPS, Kamera, NFC) |
| **Offline** | Sangat terbatas | Sangat mumpuni dengan Local DB |

**Contoh Implikasi:** Aplikasi perbankan membutuhkan Mobile App karena fitur keamanan biometrik (FaceID/Fingerprint) lebih aman diakses secara native dibanding via web.

### 3. Discovery & Requirement
Tahap ini menentukan arah pengembangan:
*   **Target Platform:** Memilih Android/iOS atau keduanya berdasarkan demografis pengguna.
*   **Fitur Offline:** Menentukan apakah butuh sinkronisasi data lokal (misal: aplikasi peta yang bisa menyimpan area offline).

### 4. Arsitektur & Teknologi (React Native)
*   **State Management:** Krusial dalam sinkronisasi data antar layar tanpa harus reload (seperti Redux atau Zustand).
*   **Navigasi:** Mengelola tumpukan layar (Stack) agar perpindahan antar menu terasa halus.

### 5. Native vs. Hybrid Development
*   **Native (Java/Swift):** Performa terbaik, akses fitur OS tercepat, tapi biaya pengembangan tinggi karena butuh dua tim.
*   **Hybrid (Ionic/Cordova):** Berbasis web di dalam container. Cepat dibuat tapi performa sering terasa berat/ngelag.
*   **Framework Lain:** Xamarin (Microsoft), Kotlin Multiplatform.

### 6. Cross-Platform Native
Pendekatan yang menggabungkan efisiensi satu codebase dengan performa native (misal: React Native & Flutter). 
*   **Pro:** Hemat biaya, satu kali koding untuk dua platform. 
*   **Kontra:** Ukuran file sedikit lebih besar dibanding native murni.

### 7. React Native vs. ReactJS
React Native berada dalam posisi unik: menggunakan paradigma React untuk membuat aplikasi mobile asli.
*   **Target:** RN (Android/iOS) vs ReactJS (Browser).
*   **Sintaks:** RN menggunakan `<View>` & `<Text>` vs ReactJS menggunakan `<div>` & `<span>`.
*   **Styling:** RN menggunakan `StyleSheet` (mirip CSS tapi terbatas) vs ReactJS menggunakan CSS murni.

### 8. Tantangan Pengembangan Mobile
Tantangan utama adalah **Fragmentasi** (ribuan model HP dengan spek berbeda). React Native mengatasi ini dengan menyediakan komponen yang konsisten di berbagai perangkat dan fitur *Hot Reloading* untuk perbaikan cepat.

### 9. Build & Release
Proses akhir melibatkan:
1.  **Testing:** Memastikan tidak ada crash.
2.  **Signing:** Menandatangani aplikasi dengan sertifikat keamanan digital.
3.  **Release:** Distribusi ke Store (melewati fase review dari Apple/Google).

---

### Kesimpulan: Kenapa Pilih React Native?
React Native menjadi pilihan karena **efisiensi biaya dan waktu** (satu codebase untuk Android & iOS), memiliki **performa mendekati aplikasi native**, serta didukung oleh **komunitas raksasa** yang memudahkan pencarian solusi jika terjadi kendala.
