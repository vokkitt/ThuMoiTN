# Khắc Kiệt Graduation Ceremony Website 🎓

Trang web chính thức cho Lễ Tốt Nghiệp Khắc Kiệt

## 📋 Chi Tiết Sự Kiện

- **Tên Sự Kiện**: Khắc Kiệt Graduation Ceremony
- **Ngày**: Thứ Sáu, ngày 24 tháng 7, 2026
- **Giờ**: 7:30 - 10:30
- **Địa Điểm**: Hội trường B, 280 Ân Dương Vương, Phường 4, Quận 5, TP.HCM

## ✨ Tính Năng

- ✅ Hero section với animation đẹp
- ✅ Countdown timer real-time
- ✅ Chi tiết sự kiện với hình ảnh
- ✅ Google Maps & Google Calendar integration
- ✅ Form xác nhận tham gia (RSVP)
- ✅ Responsive design (mobile-friendly)
- ✅ Smooth animations & transitions
- ✅ Dark theme với accent color gold

## 📁 Cấu Trúc File

```
ThuMoiTN/
├── index.html              # Trang chính
├── admin.html              # Admin dashboard xem RSVP responses
├── style.css               # CSS styling
├── script.js               # JavaScript functionality
├── hcmue.webp              # Hình ảnh sự kiện
├── rsvp_responses.json     # JSON file lưu responses (auto-generate)
├── RSVP_STATS.txt          # Hướng dẫn thống kê
└── README.md               # File này
```

## 🎨 Công Nghệ Sử Dụng

- **HTML5** - Semantic markup
- **CSS3** - Modern styling, animations, gradients
- **JavaScript** - Vanilla JS (no framework)
- **Google Fonts** - Great Vibes, Montserrat
- **FontAwesome 6.4.0** - Icons
- **Formspree.io** - Email form handling

## 🚀 Deployment

### Local Development
```bash
# Simply open in browser
open index.html
# Or run a local server
python -m http.server 8000
# Then visit http://localhost:8000
```

### Online Hosting
- Upload files to GitHub Pages
- Or any web hosting service

## 📧 RSVP Form Setup

Form hiện đang sử dụng Formspree.io. Để hoạt động:

1. Đăng ký tại [formspree.io](https://formspree.io)
2. Tạo form mới
3. Copy endpoint ID
4. Cập nhật `index.html` dòng 106:
```html
action="https://formspree.io/f/YOUR_ENDPOINT_ID"
```

## 📊 Admin Dashboard - Xem RSVP Responses

### Truy cập:
```
Mở: admin.html
URL: file:///path/to/admin.html
```

### Tính năng:
✅ Thống kê: Tổng cộng, sẽ tham gia, không tham gia  
✅ Bảng chi tiết tất cả responses  
✅ Download JSON để push lên Git  
✅ Export CSV để dùng Excel  
✅ Xóa individual hoặc tất cả responses  
✅ Auto-refresh mỗi 5 giây  

### Download dữ liệu:
```bash
# Từ admin.html click:
- "Tải JSON" → rsvp_responses_YYYY-MM-DD.json
- "Xuất CSV" → rsvp-responses-TIMESTAMP.csv

# Hoặc từ Console:
getSavedRSVPs()
```

### Chia sẻ kết quả:
1. Download JSON từ admin dashboard
2. Commit lên Git: `git add rsvp_responses.json`
3. Push: `git push origin main`
4. Share link GitHub cho khách mời xem

👉 **Xem chi tiết:** [RSVP_STATS.txt](RSVP_STATS.txt)

## 🎯 Tính Năng Khác

- **Countdown Timer**: Đếm ngược tự động đến thời gian sự kiện
- **Google Maps Integration**: Nút "Cách đến đó" mở bản đồ
- **Calendar Integration**: Thêm sự kiện vào Google Calendar
- **Scroll Animations**: Animation khi scroll vào view
- **Accessibility**: Hỗ trợ prefers-reduced-motion

## 📱 Responsive Breakpoints

- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: 480px - 767px

## 👨‍💻 Author

Khắc Kiệt Graduation 2026

## 📝 License

MIT License - Sử dụng tự do cho mục đích cá nhân hoặc sự kiện
