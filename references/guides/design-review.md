# Review thiết kế SmartHue Duo

Mở khi user yêu cầu review/critique UI. Đọc source và ảnh đúng phiên bản trước kết luận; review không mặc định cho phép sửa Figma hoặc thêm flow. Nội dung này được biên tập từ iphone-duo-design-review; xem [nguồn](../SOURCES.md).

## Cách review

1. Ghi frame/node, pose/viewport, nhiệm vụ và phần user yêu cầu. Thiếu screenshot hoặc geometry thì ghi giới hạn, không kết luận va chạm chỉ từ tên layer.
2. Kiểm tra cùng tác vụ/hierarchy giữa outer/inner; nội dung có thể reflow hoặc hiện thêm mức thông tin, chức năng đã có vẫn truy cập được. Selection, slider value, bước OB cần giữ khi đổi layout.
3. Kiểm tra usable area, controls/status/camera; khi có va chạm hoặc cần đo, đọc safe-area v2. Đường tâm cắt card ở trạng thái flat chỉ là rủi ro cần kiểm tra partial fold, chưa đủ kết luận lỗi.
4. Khi partial fold: xem bounds vùng tránh thực tế/giả định đã ghi nhãn; control phải nằm trọn vùng dùng được. Scroll không tự miễn trừ control quan trọng khỏi yêu cầu chạm được. Chuyển sang adaptive-layout nếu cần giải pháp.
5. Nếu có rail, toolbar hoặc overflow: mở vertical-bars. Nếu quyết định quan hệ hai vùng: mở dual-pane-patterns. Không ép mọi màn thành hai cột hoặc dồn control của pane vào rail xa nội dung.
6. Review sheet theo chính container/safe area của sheet, không lấy inset màn chính áp vào sheet. Split View trái/phải và resize/PiP chỉ có kết luận khi có evidence tương ứng.
7. Kiểm tra grid4 custom, Home pane bằng rộng, card gọn, reuse kit; accessibility nhìn được từ thiết kế (label/contrast/target spec). Dynamic Type/VoiceOver thực thi chuyển QA.

## Đầu ra

| Mức ảnh hưởng | Node/pose và bằng chứng | Quan sát / suy luận | Rule | Sửa đề xuất | Trạng thái kiểm chứng |
| --- | --- | --- | --- | --- | --- |
| Theo khả năng cản trở tác vụ | Link hoặc ảnh đo được | Phân biệt rõ | Nguồn/rule ID | Trong scope | Thiết kế / cần runtime |

Ưu tiên lỗi cản trở task rồi consistency/polish; không dùng số đo chưa xác minh làm “vi phạm HIG”. Ghi phần không review được. Không biến một checklist gợi ý thành yêu cầu dựng mọi frame mới.
