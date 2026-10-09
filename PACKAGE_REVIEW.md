# Tối ưu skill v2.0 — 2026-10-10

## Thay đổi

| Vấn đề v1.9 | Xử lý v2.0 |
| --- | --- |
| Entry point chọn lọc nhưng file đích còn yêu cầu đọc rộng | Active brief/audit không còn lệnh đọc toàn bộ; hồ sơ cũ chuyển history và route riêng |
| Home v1/v2/v3 chen nhau | SCREEN_SPECS có current state v3, approval và nghiệm thu tách riêng; handoff giữ kết quả một lần |
| Custom grid4 và native kit nhập nhằng | Phân loại custom/native; override chỉ trong quyền hiện có, giữ link/bindings không liên quan; phần xung đột báo chưa đạt, không tự nghiệm thu ngoại lệ cũ |
| Equal pane thiếu content bounds | Guide safe-area khai báo content width/gutter/product padding, flat khác partial; không tự lấp phần dư hoặc dùng band giả |
| Workflow nhiều thủ tục | Năm chặng có evidence chuyển bước; review/fix bỏ chặng proposal; kiểm tra đúng components bị ảnh hưởng |
| Thiếu ref/source gây kẹt | Tiếp tục phần độc lập, ref nguồn UI hoặc ảnh phù hợp còn hiệu lực; ghi giới hạn, không giả đã xem |
| Test gate rộng | Read-back/render/bounds thuộc kiểm tra thiết kế; QA runtime theo scope được giao |
| Record nhân bản | Current/spec, approval, mapping và kết quả có nơi lưu riêng; các file khác liên kết |

WF04/WF05, thứ tự kit → HIG → ref, quyền user và feedback Home vẫn giữ. Geometry tables và upstream license không thay đổi. v1.9 gốc và ZIP được giữ riêng; history chứa hồ sơ trước tối ưu, điều chỉnh đường dẫn và gắn nhãn archive.

## Đối chiếu đường đi theo tình huống

Đây là kiểm tra thủ công nội dung hướng dẫn, không chạy agent end-to-end.

| Task | Đường đọc / điều kiện hoàn thành |
| --- | --- |
| Review ảnh Home | SKILL → design-review + current Home nếu cần → findings; không làm HTML/Figma |
| Sửa padding trong Home đã duyệt | Spec/quyền hiện có → node/property liên quan → sửa → read-back/render; không audit toàn file hoặc xin duyệt lại |
| Phương án màn mới | WORKFLOW → source → local kit → HIG → ảnh ref → HTML preview → duyệt scope → Figma → evidence |
| Card qua hinge | Safe-area/adaptive; flat chỉ là rủi ro partial; partial dùng bounds hoặc giả định được ghi nhãn |
| Toolbar thiếu chỗ | Bars + scope actions; safe-area khi geometry đổi; không mở readiness chỉ vì iPhone |
| Handoff dev | Checklist + readiness contract; không cài SDK hoặc claim runtime từ Figma |
| Kit leading22/grid4 | Custom property được phép có thể override; native không sửa library; xung đột không giải được báo số và phương án cho phần đó |

## Kiểm tra gói

- Frontmatter hai scalar fields name/description, tên/độ dài và một entrypoint được kiểm tra trực tiếp.
- Link Markdown local và anchor được rà cả active/history; không có đích thiếu sau tối ưu.
- Bảng geometry safe-area được đối chiếu nguyên văn với v1.9; license đối chiếu byte. Manifest/ZIP được kiểm tra hash và nội dung khi đóng gói.
- quick_validate.py không chạy được vì cả Python hệ thống và runtime bundled thiếu PyYAML. Kiểm tra trực tiếp ở trên không được gọi là đã chạy validator chuẩn.
- Không có hành vi agent, app hoặc geometry Figma được tái kiểm chứng từ việc kiểm tra package.

## Đo tuân thủ khi dùng tiếp

Thu task/scope/skill version, log hành động và artifact. Chấm đúng mode/source, discovery trước fallback, HTML/approval khi áp dụng, preservation linked instances và read-back sau sửa. Ghi hỏi approval lặp, đọc tài liệu thừa, thêm feature ngoài scope và claim thiếu evidence. Chỉ tính tiêu chí áp dụng; báo riêng lỗi nghiêm trọng. So thời gian tới artifact và vòng sửa trên task tương đương; chưa có baseline để claim v2.0 nhanh hơn hay agent tuân thủ tốt hơn.
