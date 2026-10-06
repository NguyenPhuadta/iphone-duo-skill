# Hướng dẫn trong gói SmartHue Duo

Áp dụng cho đầu việc layout SmartHue trên iPhone Duo trong folder này.

- Mỗi lượt bắt đầu hoặc tiếp tục đầu việc, đọc toàn bộ [AGENTS_IPHONE_DUO.md](AGENTS_IPHONE_DUO.md) trước khi phân tích, đề xuất, thiết kế hoặc review.
- Đọc [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) và các file theo hướng dẫn Duo; không cần tài liệu bên ngoài folder để hiểu brief.
- Theo thứ tự: kiểm tra UI Kit trước (đọc kỹ Duo rules/safe area) → HIG/rule → xem ref cuối để lấy taste/vibe. Wireframe HTML phải thật đơn giản, làm nhanh, chỉ dùng khối/nhãn và preview trong Codex; không dựng trong Figma. Không tự thêm element UI ngoài nguồn/yêu cầu user nếu chưa được duyệt. Giữ bước user duyệt phương án cụ thể trước layout hoàn thiện; quyền HTML preview đã chấp thuận. Không sửa UI nguồn/kit. Gửi link, im lặng hoặc chốt workflow không thay thế duyệt phương án cụ thể.
- Nêu bằng chứng, giả định, rủi ro và trade-off Tech/Business/UX liên quan; không bịa số liệu hoặc tuyên bố runtime từ ảnh Figma.

## Bổ sung visual refs — 2026-10-06

- Trước wireframe hoặc layout, đọc DUO_APP_REFERENCES.md và **mở/xem trực tiếp ảnh ref phù hợp** để hiểu taste và vibe. Không thay việc xem ảnh bằng đọc tên app, link hay mô tả. Ghi ref IDs, ảnh/video đã xem, hierarchy, mật độ, spacing, typography, màu, hình dạng và controls; nêu điểm học/không áp dụng cho SmartHue. Phân biệt quan sát, sở thích user và suy luận; ref không tự trở thành style đã duyệt. Nếu không mở được ảnh, báo giới hạn và không ghi đã xem.

## Rule preview HTML — 2026-10-06

**WF04 — Preview đề xuất bằng HTML trong Codex:** wireframe và hướng đề xuất bố cục phải được dựng bằng một file HTML đơn giản, làm nhanh và mở preview ngay trong Codex; không dựng, sửa hoặc đồng bộ bản đề xuất/wireframe vào Figma. Đọc Figma nguồn/kit vẫn được phép. Sau khi user duyệt phương án cụ thể mới làm layout hoàn thiện trong Figma theo phạm vi đã duyệt. Quyền làm HTML preview đã được yêu cầu, không xin phép lại.

## WF05 — Bắt buộc dùng component Duo đã setup, 2026-10-06

Người dùng xác nhận đã setup đầy đủ component iPhone Duo trong file SmartHue `mklhEcafiTfj9FoGIUhA0M`. Trước đề xuất/layout, agent phải kiểm tra tài nguyên trong chính file này, ghi node/main component, variant/properties và variables liên quan vào APPLE_UI_KIT_AUDIT.md; chưa kiểm tra thì ghi rõ, không coi là thiếu component. Khi làm layout hoàn thiện, **bắt buộc dùng linked instances của component đã setup phù hợp**, giữ bindings và dùng properties/variants được hỗ trợ; không tự vẽ lại component có sẵn, detach instance hoặc sửa main component/thư viện để tiện dựng màn. Kit Community là nguồn đối chiếu/bổ sung; lỗi import từ đó không chứng minh file SmartHue thiếu component. Nếu thiếu hoặc bị chặn, nêu component cụ thể, phạm vi đã kiểm tra, lỗi và phương án thay thế trước khi dựng thủ công; thay đổi đáng kể vẫn theo bước duyệt hiện có, không thêm vòng xin phép cho reuse trong scope đã duyệt. WF04 giữ nguyên: đề xuất/wireframe dùng HTML trong Codex, Figma chỉ đọc ở giai đoạn này.

## WF06 — Không tự thêm UI ngoài nguồn

Chỉ sắp xếp/trình bày lại elements đã thấy trong UI/flow gốc hoặc user yêu cầu. Không tự thêm action, shortcut, label, state, navigation hay feature theo HIG, ref, kit hoặc suy luận. Nếu thấy cần element mới, nêu riêng lý do/rủi ro; chỉ đưa vào wireframe/layout sau khi user chấp thuận rõ.
