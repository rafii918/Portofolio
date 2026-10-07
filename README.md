# Portofolio — Muhammad Fadzli Nur Arrafi

Website portofolio statis (HTML, CSS, JavaScript) tanpa framework.

## Struktur

```
index.html   → isi halaman
style.css    → tampilan
script.js    → interaksi + daftar LINKS tombol
images/      → semua foto dan gambar proyek
```

## Cara menjalankan di VS Code

1. Buka folder ini di VS Code (`File → Open Folder`).
2. Pasang ekstensi **Live Server**, lalu klik kanan `index.html` → **Open with Live Server**.

## Mengisi link tombol

Buka `script.js`, isi objek `LINKS` di bagian atas (CV, laporan, desain Figma, YouTube, email, LinkedIn, GitHub).
Tombol yang linknya masih kosong akan menampilkan pesan "Link belum diisi".

## Menyambungkan ke GitHub

```bash
git init
git add .
git commit -m "Initial commit: portfolio website"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

## Menayangkan online (GitHub Pages)

Di repositori GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save**.
Beberapa menit kemudian situs tayang di `https://USERNAME.github.io/NAMA-REPO/`.
