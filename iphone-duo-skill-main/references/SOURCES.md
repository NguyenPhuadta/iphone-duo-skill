# Nguồn và phạm vi biên tập

Năm guide design-review, adaptive-layout, vertical-bars, dual-pane-patterns và readiness được biên tập/rút gọn từ archive `iphone-duo-skills-main.zip`, package v1.5.0, tác giả Navid Mirzaaghazadeh. Giữ [MIT license và attribution](UPSTREAM_LICENSE.txt). Đây là tài liệu bên thứ ba, không phải chứng nhận của Apple; việc tích hợp không xác minh lại mọi claim SDK/hardware của upstream.

Guide safe-area v2 lấy từ file người dùng đang dùng trong workspace; giữ nội dung bảng/geometry và nguồn Figma ở trong guide. Không gọi giá trị snapshot là runtime constants. Gói v1.9 không kèm SDK, source app hay kết quả chạy simulator.

Guide ios27-duo-kit và liquid-glass-a11y (2026-10-12) tóm tắt PDF “iPhone Duo × iOS 27 — UI kit & reference” do user đặt cạnh gói (`../iPhone Duo × iOS 27 — UI kit & reference.pdf`, một trang 2996 × 14077 pt). PDF không đóng gói vào folder; tóm tắt giữ nhãn tin cậy Stable / Measure it / Unpublished của nguồn. Phần Foundations → Example screens đã xem bằng ảnh render; Accessibility, Library wiring, Assumptions đọc qua text trích xuất. PDF tự dẫn: Apple iOS 27 + iPadOS 27 Figma UI Kit (12/8/2026, chưa có template Duo), Apple Design Resources bezels (9/9/2026), HIG, SF Pro/SF Symbols, kit cộng đồng của Axel Bergqvist.

## Đầu mối nguồn upstream (cần xác minh khi dùng để triển khai)

- [HIG Designing for iPhone Duo](https://developer.apple.com/design/human-interface-guidelines/designing-for-iphone-duo)
- [Design talk 111466](https://developer.apple.com/videos/play/tech-talks/111466/)
- [Prepare talk 111461](https://developer.apple.com/videos/play/tech-talks/111461/)
- [Bars talk 111462](https://developer.apple.com/videos/play/tech-talks/111462/)
- [Adaptive layouts talk 111463](https://developer.apple.com/videos/play/tech-talks/111463/)
- [Microsoft dual-screen patterns](https://learn.microsoft.com/en-us/dual-screen/introduction)

Không bundle camera/games/framework-specific/hinge effects hoặc CI scripts; nếu scope mới cần chúng thì tra nguồn hiện hành sau. Không giữ đường dẫn sibling skill không tồn tại.
