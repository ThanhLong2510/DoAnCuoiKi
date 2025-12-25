# Blog Cá Nhân - Lê Võ Thành Long

Website blog cá nhân hiện đại dành cho Kỹ sư An Ninh Mạng, được xây dựng với React + Vite, Tailwind CSS và Framer Motion.

## 🚀 Tính năng

- **Trang chủ (Home)**: Hero section với thông tin cá nhân, tagline và các nút hành động
- **Về tôi (About)**: Giới thiệu chi tiết, timeline học tập/kinh nghiệm, và kỹ năng chuyên môn
- **Blog**: Danh sách bài viết dạng card với tags, ngày đăng và mô tả
- **Chứng chỉ (Certificates)**: Hiển thị các chứng chỉ chuyên môn dạng grid card
- **Responsive Design**: Tối ưu cho desktop, tablet và mobile
- **Modern UI/UX**: Giao diện hiện đại với gradient, glow effects và animations

## 🛠️ Công nghệ sử dụng

- **React 18** - UI Framework
- **Vite** - Build tool và dev server
- **React Router** - Điều hướng trang
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📦 Cài đặt

### Yêu cầu
- Node.js (v16 trở lên)
- npm hoặc yarn (khuyến nghị dùng yarn nếu npm gặp lỗi)

### Các bước cài đặt

1. **Cài đặt dependencies:**
```bash
# Sử dụng yarn (khuyến nghị)
yarn install

# Hoặc sử dụng npm
npm install
```

2. **Chạy development server:**

**Cách 1: Sử dụng script (Khuyến nghị)**
```bash
# Windows - Double click vào file
start-dev.bat

# Hoặc chạy trong PowerShell
.\start-dev.ps1
```

**Cách 2: Chạy trực tiếp**
```bash
# Với yarn
yarn dev

# Hoặc với npm
npm run dev
```

**Lưu ý:** Đảm bảo bạn đang ở đúng thư mục dự án khi chạy lệnh.

3. **Build cho production:**
```bash
# Với yarn
yarn build

# Hoặc với npm
npm run build
```

4. **Preview production build:**
```bash
# Với yarn
yarn preview

# Hoặc với npm
npm run preview
```

**Lưu ý:** Nếu gặp lỗi với npm, hãy sử dụng yarn thay thế.

## 📁 Cấu trúc thư mục

```
DoAnCuoiKi/
├── public/                 # Static files
├── src/
│   ├── components/         # Reusable components
│   │   └── Navbar.jsx     # Navigation bar
│   ├── layouts/           # Layout components
│   │   └── Layout.jsx     # Main layout wrapper
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Trang chủ
│   │   ├── About.jsx      # Trang về tôi
│   │   ├── Blog.jsx       # Trang blog
│   │   └── Certificates.jsx # Trang chứng chỉ
│   ├── data/              # Mock data
│   │   ├── blogData.js    # Dữ liệu blog posts
│   │   └── certificatesData.js # Dữ liệu certificates
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Màu sắc và Design System

### Màu chủ đạo
- **Background**: Trắng (#ffffff), Trắng xanh (#f8fbff), Xanh nhạt (#e6f4ff)
- **Primary**: Xanh cyan (#06b6d4), Xanh công nghệ (#0ea5e9)
- **Accent**: Gradient xanh - xanh neon, Gradient xanh - tím

### Typography
- **Font chính**: Inter (nội dung)
- **Font tiêu đề**: Poppins (headings, highlight)
- **Font weights**: 400 - 700

## 🔧 Tùy chỉnh

### Thay đổi thông tin cá nhân
Chỉnh sửa các file trong thư mục `src/pages/`:
- `Home.jsx`: Thông tin hero section
- `About.jsx`: Giới thiệu và timeline
- `Blog.jsx`: Cấu trúc blog (có thể kết nối CMS sau)
- `Certificates.jsx`: Danh sách chứng chỉ

### Thêm dữ liệu
- **Blog posts**: Thêm vào `src/data/blogData.js`
- **Certificates**: Thêm vào `src/data/certificatesData.js`

### Tùy chỉnh màu sắc
Chỉnh sửa `tailwind.config.js` để thay đổi color scheme.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel
```bash
npm run build
# Upload thư mục dist lên Vercel
```

### Netlify
```bash
npm run build
# Upload thư mục dist lên Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy thư mục dist lên GitHub Pages
```

## 📝 Ghi chú

- Dự án sử dụng mock data, có thể dễ dàng kết nối với CMS hoặc API backend sau
- Cấu trúc code được tổ chức rõ ràng, dễ mở rộng và bảo trì
- Tất cả animations sử dụng Framer Motion để đảm bảo hiệu suất tốt

## 📄 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

## 👤 Tác giả

**Lê Võ Thành Long**
- Kỹ sư An Ninh Mạng
- Email: contact@example.com
- GitHub: [github.com](https://github.com)

---

⭐ Nếu bạn thấy dự án này hữu ích, hãy cho một star!

