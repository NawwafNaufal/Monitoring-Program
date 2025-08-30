# Monitoring-Program

Aplikasi monitoring berbasis web yang dibangun dengan **React (Vite)** pada frontend dan **Node.js (Express)** di backend. Dirancang untuk menampilkan statistik dan data monitoring secara real-time dan responsif.

---

##  Fitur Utama
- Halaman dashboard interaktif untuk pemantauan data secara visual
- Routing menggunakan React Router (jika digunakan)
- Struktur komponen modular untuk kemudahan pengembangan
- Styling dengan Tailwind CSS (atau CSS module, postcss)
- Konsumsi API dari backend Express untuk mengambil dan menampilkan data monitoring
- File `.sql` (`monitoring.sql`) untuk setup database awal

---

##  Tech Stack
| Kategori     | Teknologi                          |
|--------------|------------------------------------|
| Frontend     | React, Vite, Tailwind CSS          |
| Backend      | Node.js, Express.js                |
| Database     | MySQL
| Utils        | ESLint, PostCSS, Vite              |

---

##  Instalasi & Setup
1. Clone repo:
   ```bash
   git clone https://github.com/NawwafNaufal/Monitoring-Program.git
   cd Monitoring-Program
2. Install dependencies frontend dan backend
   npm install
3. Jalankan database dan import monitoring.sql ke dalam sistem database kamu.
4. Siapkan environment:
   Buat file .env
5. Jalankan aplikasi:
   Frontend:
   npm run dev
   Backend:
   npm run start
6. Akses aplikasi di http://localhost:<port-frontend>

Monitoring-Program/
├── controller/
├── models/
├── routes/
├── view/ 
├── public/
├── libs/
├── config/
├── monitoring.sql
├── README.md
├── package.json
├── index.js

Database

File SQL: monitoring.sql — digunakan untuk membuat struktur tabel dan data awal.

Pastikan mengimport ke database sesuai masing-masing sistem

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Lisensi

Project ini dilisensikan di bawah MIT License.
