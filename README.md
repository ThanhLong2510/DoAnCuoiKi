# 🌐 Blog Cá Nhân - Lê Võ Thành Long

Website portfolio cá nhân được xây dựng với React, Vite và Tailwind CSS v4.

## 📋 Mục lục

- [Giới thiệu](#giới-thiệu)
- [Công nghệ sử dụng](#công-nghệ-sử-dụng)
- [Cấu trúc dự án](#cấu-trúc-dự-án)
- [Hướng dẫn cài đặt](#hướng-dẫn-cài-đặt)
- [Cấu hình chi tiết](#cấu-hình-chi-tiết)
- [Scripts](#scripts)

---

## 🎯 Giới thiệu

Đây là website portfolio cá nhân với các trang:
- **Home**: Trang chủ giới thiệu bản thân
- **About**: Thông tin chi tiết về kỹ năng và hành trình
- **Blog**: Danh sách bài viết chia sẻ kiến thức
- **Certificates**: Các chứng chỉ chuyên môn

---

## 🛠 Công nghệ sử dụng

| Công nghệ | Phiên bản | Mô tả |
|-----------|-----------|-------|
| React | 19.2.3 | Thư viện UI |
| Vite | 7.3.0 | Build tool |
| Tailwind CSS | 4.1.18 | CSS framework |
| React Router DOM | 7.11.0 | Routing |
| Framer Motion | 12.23.26 | Animation |
| Lucide React | 0.562.0 | Icons |

---

## 📁 Cấu trúc dự án

```
blog-ca-nhan/
├── public/                     # Static assets
│   └── vite.svg               # Favicon
│
├── src/                        # Source code
│   ├── components/            # React components
│   │   └── Navbar.jsx         # Navigation bar component
│   │
│   ├── data/                  # Mock data
│   │   ├── blogData.js        # Dữ liệu bài viết blog
│   │   └── certificatesData.js # Dữ liệu chứng chỉ
│   │
│   ├── layouts/               # Layout components
│   │   └── Layout.jsx         # Main layout wrapper
│   │
│   ├── pages/                 # Page components
│   │   ├── Home.jsx           # Trang chủ
│   │   ├── About.jsx          # Trang giới thiệu
│   │   ├── Blog.jsx           # Trang blog
│   │   └── Certificates.jsx   # Trang chứng chỉ
│   │
│   ├── App.jsx                # Root component với routing
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles + Tailwind config
│
├── index.html                 # HTML template
├── package.json               # Dependencies và scripts
├── postcss.config.js          # PostCSS configuration
├── vite.config.js             # Vite configuration
└── README.md                  # Documentation
```

---

## 📄 Chi tiết từng file

### 🔧 Config Files

#### `package.json`
```json
{
  "scripts": {
    "dev": "vite",           // Chạy development server
    "build": "vite build",   // Build production
    "preview": "vite preview" // Preview production build
  }
}
```
- Quản lý dependencies
- Định nghĩa npm scripts

#### `vite.config.js`
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```
- Cấu hình Vite build tool
- Enable React plugin với Fast Refresh

#### `postcss.config.js`
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```
- Cấu hình PostCSS cho Tailwind CSS v4
- **Lưu ý**: Tailwind v4 dùng `@tailwindcss/postcss` thay vì `tailwindcss`

#### `index.html`
- HTML template chính
- Load Google Fonts (Inter, Poppins)
- Mount point cho React app (`<div id="root">`)

---

### 📂 Source Files

#### `src/main.jsx`
```javascript
// Entry point - Render App vào DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

#### `src/App.jsx`
```javascript
// Root component
// - Cấu hình React Router
// - Wrap tất cả pages trong Layout
// - Định nghĩa routes: /, /about, /blog, /certificates
```

#### `src/index.css`
```css
@import "tailwindcss";

@theme {
  /* Custom colors và fonts cho Tailwind v4 */
  --color-primary: #06b6d4;
  --color-bg-white: #ffffff;
  --font-heading: 'Poppins', sans-serif;
}

@layer utilities {
  /* Custom utilities: glow-effect, gradient-text, etc. */
}
```
- Import Tailwind CSS v4
- Định nghĩa theme variables
- Custom utility classes

---

### 🧩 Components

#### `src/components/Navbar.jsx`
| Chức năng | Mô tả |
|-----------|-------|
| Navigation | Menu điều hướng giữa các trang |
| Active indicator | Highlight trang hiện tại |
| Language switcher | Chuyển đổi VI/EN |
| Mobile menu | Responsive menu cho mobile |
| Animation | Framer Motion animations |

#### `src/layouts/Layout.jsx`
| Chức năng | Mô tả |
|-----------|-------|
| Wrapper | Bọc tất cả pages |
| Navbar | Include Navbar component |
| Padding | `pt-20` để tránh navbar fixed |

---

### 📄 Pages

#### `src/pages/Home.jsx`
- Hero section với avatar
- Giới thiệu ngắn
- Social links (GitHub, Email, Phone)
- Download CV button
- Animated decorative elements

#### `src/pages/About.jsx`
- Giới thiệu chi tiết
- Skills grid (AI/ML, Security, DevOps, etc.)
- Timeline hành trình
- Dark theme design

#### `src/pages/Blog.jsx`
- Blog posts grid
- Tags với màu sắc khác nhau
- Date formatting (Vietnamese)
- Read time display
- Hover animations

#### `src/pages/Certificates.jsx`
- Certificates grid
- Gradient headers theo issuer
- Stats section
- Hover effects

---

### 📊 Data Files

#### `src/data/blogData.js`
```javascript
export const blogPosts = [
  {
    id: 1,
    title: 'Tiêu đề bài viết',
    description: 'Mô tả ngắn',
    tags: ['Security', 'AI'],
    date: '2024-12-15',
    readTime: '8 phút đọc',
  },
  // ...
]
```

#### `src/data/certificatesData.js`
```javascript
export const certificates = [
  {
    id: 1,
    name: 'CCNA',
    issuer: 'Cisco',
    year: '2024',
    description: 'Mô tả chứng chỉ',
  },
  // ...
]
```

---

## 🚀 Hướng dẫn cài đặt

### Yêu cầu hệ thống
- Node.js >= 18.x
- npm >= 9.x hoặc yarn >= 1.22.x

### Bước 1: Clone repository
```bash
git clone <repository-url>
cd blog-ca-nhan
```

### Bước 2: Cài đặt dependencies
```bash
# Sử dụng npm
npm install

# Hoặc sử dụng yarn
yarn install
```

### Bước 3: Chạy development server
```bash
# Sử dụng npm
npm run dev

# Hoặc sử dụng yarn
yarn dev
```

### Bước 4: Mở trình duyệt
```
http://localhost:5173
```

---

## ⚙️ Cấu hình chi tiết

### Tailwind CSS v4 Configuration

Tailwind CSS v4 sử dụng CSS-based configuration thay vì `tailwind.config.js`:

```css
/* src/index.css */
@import "tailwindcss";

@theme {
  /* Colors */
  --color-primary: #06b6d4;
  --color-primary-dark: #0ea5e9;
  --color-accent-cyan: #06b6d4;
  --color-accent-blue: #0ea5e9;
  --color-accent-purple: #8b5cf6;
  --color-bg-white: #ffffff;
  --color-bg-light: #f8fbff;
  --color-bg-lighter: #e6f4ff;
  
  /* Fonts */
  --font-sans: 'Inter', sans-serif;
  --font-heading: 'Poppins', sans-serif;
}
```

### Sử dụng trong JSX
```jsx
// Colors
<div className="bg-primary text-white">...</div>
<div className="bg-bg-light">...</div>

// Fonts
<h1 className="font-heading">...</h1>
<p className="font-sans">...</p>

// Custom utilities
<div className="glow-effect">...</div>
<span className="gradient-text">...</span>
```

---

## 📜 Scripts

| Script | Lệnh | Mô tả |
|--------|------|-------|
| dev | `npm run dev` | Chạy development server với hot reload |
| build | `npm run build` | Build production vào thư mục `dist/` |
| preview | `npm run preview` | Preview production build locally |

---

## 🎨 Custom Utilities

| Class | Mô tả |
|-------|-------|
| `.glow-effect` | Box shadow với hiệu ứng glow cyan |
| `.glow-effect-hover` | Glow effect khi hover |
| `.gradient-border` | Border với gradient màu |
| `.gradient-text` | Text với gradient màu |
| `.line-clamp-3` | Giới hạn 3 dòng text |

---

## 📝 Ghi chú

1. **Tailwind CSS v4**: Dự án sử dụng Tailwind v4 với cú pháp mới
2. **React 19**: Sử dụng React phiên bản mới nhất
3. **Vite 7**: Build tool nhanh với HMR
4. **Responsive**: Hỗ trợ mobile, tablet, desktop

---

## 👤 Tác giả

**Lê Võ Thành Long**
- Kỹ sư An Ninh Mạng
- Email: contact@example.com
- GitHub: https://github.com

---

## 📄 License

MIT License
