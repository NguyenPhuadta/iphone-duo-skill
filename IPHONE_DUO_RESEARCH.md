# iPhone Duo — Research liên quan đến layout

> Nguồn Apple đã kiểm tra ngày 2026-10-06; trong lần đóng gói đã mở lại Newsroom, HIG Duo và Apple Design Resources. Các nguồn còn lại giữ phạm vi kiểm tra trong bản research ban đầu. Bản bàn giao lược bỏ giá bán, thông số vật lý không dùng cho layout và công việc App Store. Chưa kiểm thử SmartHue trên simulator hoặc máy thật.

## Thiết bị và nguồn

iPhone Duo có màn ngoài khi đóng và màn trong khi mở. Brief nhắm đến trải nghiệm thích ứng theo vùng app, không suy số frame/columns từ tên thiết bị. Nguồn: [Apple Newsroom](https://www.apple.com/newsroom/2026/09/apple-unveils-iphone-duo/).

Kích thước mẫu dùng thiết kế nằm trong [APPLE_UI_KIT_AUDIT.md](APPLE_UI_KIT_AUDIT.md); đây là canvas units Figma. Scale, safe areas và vùng runtime chưa xác minh. Không chia pixel phần cứng để thay frame kit hoặc dùng ảnh bezel làm content bounds.

## Hành vi bố cục cần hiểu

### Kích thước thay đổi và tính liên tục

Apple hướng dẫn bắt đầu từ compact width trên màn ngoài và regular width trên màn trong, dùng layout thích ứng, margins và safe areas. Giữ chức năng và trạng thái khi chuyển màn; màn lớn có thể hiện thêm một cấp thông tin. Không cần một thiết kế riêng cho mỗi tư thế.

Nguồn: [HIG — Designing for iPhone Duo](https://developer.apple.com/design/human-interface-guidelines/designing-for-iphone-duo).

### Điều hướng ở cạnh bên

Toolbar, tab bar và navigation controls chuyển sang cạnh bên trên màn ngoài và màn trong ngang. Màn trong dọc trở lại thanh ngang. Khi chạy hai app cạnh nhau, controls nằm ở cạnh ngoài tương ứng của từng app. Cần kiểm tra overflow và thứ tự ưu tiên actions; không tự chuyển toàn bộ controls trong nội dung sang cạnh bên.

Nguồn: [Raise the bar with iPhone Duo](https://developer.apple.com/videos/play/tech-talks/111462/).

### Vùng gập và camera

Reserved regions gồm vùng chia do gập và vùng camera che nội dung. Container hệ thống có thể thích ứng; UI custom cần xử lý riêng. Arrangement views hỗ trợ tổ chức hai vùng theo kiểu split hoặc overlay khi kích thước và vùng gập đổi. Một đường chia cố định giữa frame không thay thế cho hành vi này.

Nguồn: [Strike a pose with adaptive layouts](https://developer.apple.com/videos/play/tech-talks/111463/).

### Multitasking làm diện tích app nhỏ đi

Split View có thể chia màn trong cho hai app; PiP được ghim phía trên cũng làm app đổi kích thước. Vì vậy “đang ở màn trong” không đồng nghĩa SmartHue luôn có toàn màn hình. Thiết kế phải giữ tác vụ khi vùng sử dụng nhỏ lại.

Nguồn: [Design for iPhone Duo](https://developer.apple.com/videos/play/tech-talks/111466/).

### Trạng thái gập và nhiều màn hình là khả năng mở rộng

Apple có API quan sát trạng thái/góc gập và cơ chế scene accessories cho nội dung bổ sung trên màn khác. Đây là khả năng nền tảng, chưa phải yêu cầu cho SmartHue. Không mặc định cần sử dụng đồng thời cả hai màn.

Nguồn: [Leverage multiple displays and scenes](https://developer.apple.com/videos/play/tech-talks/111464/).

## Điều kiện triển khai và tài nguyên

- App cũ có thể chạy nhưng mức tận dụng màn hình phụ thuộc SDK. Apple mô tả iOS 27.1 SDK cho layout mở rộng và bars thích ứng.
- Kiểm tra bằng Xcode 27.1 và Device Hub: mở, đóng, xoay và gập trong simulator. Chưa thực hiện kiểm tra này cho SmartHue.
- Quyết định layout theo vùng app/size classes thay vì khóa theo model hoặc orientation; màn trong không tuân theo orientation hỗ trợ giống màn ngoài.

Nguồn: [Prepare your app for iPhone Duo](https://developer.apple.com/videos/play/tech-talks/111461/).

Apple cung cấp Figma/Sketch design kits cho Duo. Có thể dùng làm nền cho patterns hệ thống khi SmartHue chưa có design system riêng; vẫn cần định nghĩa visual rules và components đặc thù điều khiển đèn. Cập nhật ngày 2026-10-06: đã kiểm tra phần Duo của file Figma Community người dùng cung cấp, lưu trong [audit kit](APPLE_UI_KIT_AUDIT.md); chưa chạy simulator.

Nguồn: [Thông báo design kits](https://developer.apple.com/news/?id=nyuppv9r), [Apple Design Resources](https://developer.apple.com/design/resources/).

## Áp dụng vào scope SmartHue

Đề xuất bố cục dựa trên tác vụ và vùng sử dụng thực. Danh sách cạnh detail chỉ là một khả năng để cân nhắc sau khi đọc UI; chưa được duyệt. Giữ nội dung và controls core tiếp cận được khi vùng hẹp, selection/bước luồng/giá trị đang chỉnh có continuity. Behavior và giới hạn lệnh cần dev xác nhận; không mặc định resize gửi lại lệnh.

Đối chiếu [HIG_RULES.md](HIG_RULES.md) và dùng [DELIVERY_CHECKLIST.md](DELIVERY_CHECKLIST.md) để đề xuất coverage. Đặc điểm nền tảng không tự duyệt mọi cấu hình, states hoặc tính năng nhiều màn cho SmartHue.

Phần còn thiếu: UI nguồn, task/scope, stack/SDK, capability/permission theo integration và runtime bounds. Không dùng độ tuân thủ HIG hoặc hình thức layout làm bằng chứng hiệu quả người dùng; baseline/QA vẫn cần thu thập.
