# Thích ứng vùng gập, camera và resize

Mở khi nội dung/control va chạm reserved region hoặc cần reflow. Bản biên tập từ iphone-duo-adaptive-layout; [nguồn](../SOURCES.md). Đọc [safe-area v2](iphone-duo-safe-area-guide.md) trước khi dùng số geometry; API cụ thể cần kiểm tra SDK khi triển khai.

## Quyết định thiết kế

- Phân biệt safe area (chrome), layout margin (khoảng cách nội dung), division region (chia vùng) và occlusion region (che một phần). Chuyển mọi bounds về cùng hệ tọa độ trước khi so giao nhau.
- Trong mô hình tài liệu nhập: fold tránh khi partial; outer camera là vùng cần tính thường trực, inner camera khi active. Không áp câu “camera chỉ active khi streaming” cho outer camera. Nếu runtime/source mới khác, dùng dữ liệu xác minh và ghi sự khác biệt.
- Flat không cần một dải cấm vĩnh viễn ở tâm. Tâm kit inner landscape x=475.5; inner portrait y=475.5. Đây là tọa độ tham chiếu, không phải chiều rộng vùng gập.
- Dùng bounds/size class và các region active hiện tại; không điều khiển layout bằng ngưỡng góc tự đặt hoặc bảng kích thước device cố định. Không giả định full inner luôn là regular khi app bị resize.
- Ưu tiên container/presentation hệ thống khi code hỗ trợ; mockup linked instance không chứng minh app tự tránh gập đúng.

## Thứ tự xử lý va chạm

1. Xác định cả visual bounds và hit region của control, cùng card/nhãn nó thuộc về.
2. Dịch/resize một nhóm liên quan trong cùng vùng đủ chỗ; tránh tách slider khỏi tên/giá trị đèn.
3. Nếu grid không đủ rộng, giảm cột hoặc reflow, giữ card trọn vẹn. Cột chẵn là lựa chọn có ích khi phù hợp, không lệnh bắt buộc cho mọi viewport.
4. Nếu vẫn thiếu chỗ, dùng scroll phù hợp để chức năng vẫn truy cập được; không coi control đang bị fold che là đạt chỉ vì container scroll được.
5. Giữ selection/value/bước luồng, tránh nhảy nhóm điều khiển xa khi gập. Tabletop chỉ đưa controls xuống phần dễ chạm nếu phù hợp nội dung và scope.

Với Home inner landscape, dùng [Home content bounds](iphone-duo-safe-area-guide.md#home-content-bounds) và giữ rule card theo nội dung. Nếu geometry fold thực tế không thể cùng thỏa pane bằng rộng/grid4/kit, ghi xung đột và đưa phương án cụ thể; không âm thầm bỏ một yêu cầu.

## Geometry không được suy đoán

Không lấy band27 của community thành phần cứng; không cộng clearance hai lần khi frame đã gồm margin. Không trừ reserved region khỏi safe area lần nữa nếu nó nằm hoàn toàn trong vùng inset đã loại. Nội dung nền có thể bleed; label/action quan trọng phải thấy và dùng được.

Đầu ra: before/after bounds, pose, nguồn vùng tránh, cách reflow, state cần giữ và phần runtime chưa xác nhận. Chỉ mở readiness nếu yêu cầu sang code/QA runtime.
