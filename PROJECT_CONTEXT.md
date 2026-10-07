# SmartHue — context hiện hành

SmartHue điều khiển đèn nhiều hệ sinh thái (định hướng Hue, WiZ, LIFX, Matter; chưa phải capability matrix đã xác minh). Phạm vi thiết kế Duo: Home, từng đèn, onboarding/OB và kết nối. Giữ nhận diện/UI nguồn, tác vụ điều khiển nhanh và trạng thái nhất quán; không tự xây design system toàn app, thêm growth flow hoặc đặt metric không có dữ liệu.

## Trạng thái được ghi trong gói v1.8

- Home-A cấu trúc đã được duyệt; v1 và v2 là lịch sử, v2 đã có layout Figma. v3 xử lý feedback grid4, hai vùng Home bằng nhau và card gọn; chưa có bằng chứng user nghiệm thu v3 hoặc QA runtime trong gói.
- Ghi chú v2 “chưa tạo Figma” trong các mục cũ đã được cập nhật bởi mục v2 Figma xuất hiện sau đó; không sử dụng mốc cũ như trạng thái hiện tại.
- Số 396/396, gutter24, cards inner188×208/outer164×208 là snapshot Home-A v3, không là template mọi flow. Kiểm tra node hiện tại khi tiếp tục.
- Quyền làm proposal HTML và approval cùng scope vẫn giữ hiệu lực. Quy trình hiện hành ở [WORKFLOW](WORKFLOW.md), quy tắc ở [SKILL](SKILL.md).
- Bộ tài liệu gốc thiếu 25 asset được kê trong manifest; xem [MISSING_ASSETS](MISSING_ASSETS.md). Có link Figma không đồng nghĩa đã mở được hoặc ảnh bằng chứng còn trong gói.

Đọc [SCREEN_SPECS](SCREEN_SPECS.md), [DESIGN_DECISIONS](DESIGN_DECISIONS.md), [HOME_DEMO_HANDOFF](HOME_DEMO_HANDOFF.md) đúng phần cần tiếp tục. Không có dữ liệu mới về nghiệm thu app, VoiceOver, lệnh đèn hay usability từ việc cập nhật skill v1.9.
