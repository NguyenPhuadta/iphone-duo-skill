# Review tích hợp v1.9 — 2026-10-08

Đây là review cấu trúc/nội dung của skill, không phải review lại Figma hay xác nhận runtime. Chỉ mở khi bảo trì skill.

## Những điểm đã xử lý

| Vấn đề | Cách xử lý |
| --- | --- |
| Chưa có SKILL.md; nhiều điểm bắt đầu yêu cầu đọc tất cả | Thêm name/description hẹp cho SmartHue; SKILL là điểm vào, AGENTS là alias; route theo loại việc |
| Năm skill ngoài có trigger rộng và dẫn sibling không kèm | Biên tập thành năm reference không có trigger riêng; bỏ vòng route sang camera/games/hinge/framework |
| Geometry rải nhiều nơi | Safe-area v2 là nguồn snapshot cho phép đo; guide khác chỉ liên kết, không sao bảng token |
| HIG, kit và runtime bị hiểu cùng loại nguồn | Ghi provenance và phạm vi; số Figma không là SDK constants, API phải xác minh khi code |
| Review/sửa nhỏ bị kéo qua proposal và SDK checklist | Tách review, fix trong scope, proposal mới, readiness; giữ approval đã có |
| Trạng thái v1/v2/v3 chồng nhau | Context tóm tắt mới; records gốc có banner lịch sử, đọc mốc liên quan |
| Home pane bằng nhau xung đột ví dụ upstream | Giữ rule Home; không nhập list300–320 hay band27 thành chuẩn |
| Scroll exemption/camera active quá rộng | Control quan trọng vẫn cần chạm được; phân biệt outer/inner camera theo mô hình nguồn |
| Grid4 xung đột intrinsic | Giữ WF05/WF07, ghi xung đột; không tự tuyên bố ngoại lệ được user duyệt |
| Manifest/link hứa asset không có | Liệt kê 25 thiếu, vô hiệu link local thiếu trong records, manifest mới theo file thật |
| Ý tưởng mới ngoài scope | Không nhập paywall/hinge reveal/close-to-save/notification flow |

## Review định tuyến bằng tình huống

Đây là đối chiếu thủ công hướng dẫn, không phải kết quả chạy agent end-to-end.

| Yêu cầu ví dụ | Đường đọc cần thiết | Điều tránh được |
| --- | --- | --- |
| Review Home screenshot | SKILL → design-review + spec Home; thêm safe-area khi đo | Không tự dựng HTML/đổi Figma |
| Card chạm nếp gập | SKILL → safe-area + adaptive; audit đúng template | Không lấy tâm flat làm defect hoặc hardcode band27 |
| Toolbar label bị chật | SKILL → vertical-bars; safe-area nếu đổi inset | Không đọc readiness/dual-pane vô cớ |
| Đề xuất layout đèn mới | SKILL → WORKFLOW + scope/spec → kit → HIG → ảnh ref; guide pane nếu cần | Không bỏ HTML/approval, không thêm action |
| Sửa padding24 trong Home đã duyệt | SKILL → decision/spec + rule4 | Không xin duyệt lại hoặc đọc mọi ref |
| Kiểm tra code resize | SKILL → readiness → source/SDK thực tế; adaptive khi liên quan | Không coi Figma là runtime evidence |
| Chỉ bàn giao thiết kế cho dev | SKILL → checklist + readiness phần contract | Không cài SDK/chạy test tự động |

## Giới hạn còn lại

Asset v1.8 thiếu chưa thể phục hồi. Nguồn Figma và link upstream không được tải lại trong lượt tích hợp; API/SDK không được compile. Guide v2 giữ provenance từ lần đối chiếu trước, không nâng thành đo lại hôm nay. Hồ sơ dài vẫn được giữ vì chứa quyết định/source IDs; agent tìm theo màn/rule/ngày và chỉ đọc đoạn liên quan.

## Kiểm tra đóng gói

Đã rà 7 tình huống định tuyến ở bảng trên; kiểm tra toàn bộ link Markdown local trỏ tới file tồn tại, chỉ một SKILL.md có frontmatter, và cấu trúc name/description đúng định dạng. Validator quick_validate.py của skill-creator không chạy được do Python hiện có thiếu PyYAML; kiểm tra cấu trúc tương đương cho frontmatter hai trường được thực hiện trực tiếp, không cài thêm dependency. Manifest và nội dung ZIP được đối chiếu byte/hash sau đóng gói. Chưa chạy agent end-to-end, app hoặc QA runtime.
