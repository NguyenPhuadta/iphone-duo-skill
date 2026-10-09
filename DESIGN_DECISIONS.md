# Quyết định và approval đang dùng

Tổng hợp từ record/chat được lưu trong gói; không thay xác nhận mới của user. Chỉ dùng approval cho đúng scope. Current artifact/version ở [SCREEN_SPECS](SCREEN_SPECS.md); policy thực hiện ở [SKILL](SKILL.md) và [WORKFLOW](WORKFLOW.md).

| ID / ngày | Xác nhận được ghi | Phạm vi / giới hạn |
| --- | --- | --- |
| WF01–02 / 2026-10-06 | User chốt workflow và chấp thuận khuyến nghị review | Proposal cụ thể trước final layout; một điểm duyệt. Không tự duyệt mọi màn |
| WF03 / 2026-10-06 | User yêu cầu xem ảnh ref để hiểu taste/vibe | Phương án mới xem ảnh thật; ảnh không thay task/source |
| DEMO01 / 2026-10-06 | “Duyệt Home-A, hoàn thiện demo” | Home inner landscape + outer portrait dark, controls trực tiếp, states/spec; không code/prototype hoàn thiện |
| WF04 / 2026-10-06 | User yêu cầu wireframe HTML đơn giản preview trong Codex | Thay phương tiện nháp, không dựng proposal trong Figma; không xin lại quyền HTML |
| WF05 / 2026-10-06 | User xác nhận local Duo components và yêu cầu reuse | Discovery local, linked instances, giữ main/variants/bindings; gap trước fallback |
| DEMO03 / 2026-10-06 | “ổn áp đó, design thử lại vào figma nhé” | HTML Home-A v2 được duyệt để dựng Figma trong scope Home-A |
| WF07 / 2026-10-06 | User chốt kit → HIG → ref, HTML tối giản, không tự thêm UI | Áp cho phương án mới; element mới cần trình riêng |
| RV02 / 2026-10-07 | User giao “xử lý các feedback này” | Home-A: hai pane inner bằng nhau, card gọn, custom grid4. Giao sửa khác với nghiệm thu v3 |
| OPT01 / 2026-10-09 | User “Tối ưu đi” sau review skill | Tối ưu policy/workflow/routing và phân tách hồ sơ. Không phải nghiệm thu thiết kế Figma hoặc các ngoại lệ cũ |

## Ghi quyết định tiếp theo

ID/ngày; nguồn xác nhận; màn/proposal version; phạm vi được duyệt; điều thay thế; giới hạn/câu hỏi còn lại. Chỉ thêm lý do/trade-off/metric khi giúp hiểu lựa chọn. Decision log giữ quyết định, handoff giữ kết quả.

Các ngoại lệ geometry intrinsic của Home-A v3 trước đây chưa có bằng chứng duyệt riêng; xem handoff. Lịch sử lời xác nhận và nguồn chi tiết: [archive](history/DESIGN_DECISIONS.md).
