# Day 2: React Native Core Concepts & Setup

## 1. Konsep Dasar & New Architecture (v0.80)
- **Cross-Platform**: Satu codebase (JS/TS) untuk Android & iOS menggunakan native components (bukan WebView).
- **React Native vs React Web**: Web menggunakan DOM, RN menggunakan Native UI Elements (View, Text). RN tidak punya `<html>` atau `<div>`.
- **New Architecture**: Menggantikan "Bridge" dengan **JSI (JavaScript Interface)**.
  - **Fabric**: Rendering engine baru yang lebih cepat & sinkron.
  - **TurboModules**: Load module native hanya saat dibutuhkan (Lazy loading).
  - **Dampak**: Performa aplikasi mendekati native, animasi lebih mulus, dan startup time lebih cepat.

## 2. React Native CLI vs Expo
| Fitur | React Native CLI | Expo |
|-------|------------------|------|
| **Arsitektur** | Bare workflow (Akses penuh native code) | Managed workflow (Abstraksi native code) |
| **Proses Build** | Lokal (Perlu Android Studio/Xcode) | Cloud (EAS Build) atau Lokal |
| **Kelebihan** | Kontrol penuh & fleksibilitas library native | Cepat, mudah setup, tak perlu instal SDK berat |
| **Kekurangan** | Setup awal rumit & manual | Ukuran aplikasi lebih besar, limitasi modul native custom |

**Skenario:**
- **Pilih Expo**: Proyek MVP, aplikasi simpel, atau jika ingin deploy cepat tanpa pusing setup environment native.
- **Pilih CLI**: Aplikasi kompleks yang butuh integrasi hardware khusus atau library native yang tidak didukung Expo.

## 3. Komponen Android SDK
- **SDK Platforms (android-35)**: API dasar agar aplikasi bisa berjalan di versi Android tertentu. Jika absen: Build akan gagal karena target API tidak ditemukan.
- **Build Tools (35.0.0)**: Kumpulan tool untuk kompilasi (compiler, linker). Jika absen: Error saat proses packaging APK/AAB.
- **Platform Tools**: Tool komunikasi (seperti `adb`). Jika absen: VS Code tidak bisa mendeteksi emulator atau device fisik.

## 4. Prasyarat CLI v0.80
- **Node.js**: Runtime untuk menjalankan JavaScript & Metro Bundler.
- **Watchman**: Tool dari Facebook untuk memonitor perubahan file (File watching) agar Hot Reloading lancar.
- **Yarn**: Package manager yang sering lebih stabil dan cepat dibanding NPM dalam ekosistem RN.

## 5. Struktur Folder CLI
- **`android/`**: Source code native Android (Java/Kotlin, Gradle).
- **`ios/`**: Source code native iOS (Objective-C/Swift, Pods).
- **`App.tsx`**: Entry point utama aplikasi (UI & Logic).
- **`metro.config.js`**: Konfigurasi untuk packager/bundler JavaScript.
- **`index.js`**: Register komponen utama ke app registry native.

*Struktur ini memungkinkan pemisahan konfigurasi spesifik OS namun tetap berbagi logika utama di JS/TS.*
