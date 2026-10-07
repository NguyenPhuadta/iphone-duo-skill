# Workflow SmartHue Duo — v1.9

## Chọn đường đi trước

- Review: xem source/ảnh → guide đúng chủ đề → findings có bằng chứng. Không cần HTML hoặc duyệt proposal để đưa nhận xét.
- Sửa trong scope đã duyệt: đọc decision/spec liên quan → kiểm tra nguồn đang sửa → sửa → review phần thay đổi. Giữ approval hiện có.
- Layout/proposal mới: thực hiện các bước bên dưới.
- Code/handoff runtime: đọc readiness; việc thiết kế không bắt đầu bằng cài SDK hoặc sửa build settings.

## Phương án mới

1. **Hiểu nguồn.** Tự đọc link/material, ghi mục đích, entry/exit, hierarchy, UI elements/action/state giữ nguyên. Phân biệt observed/inferred/confirmed; chỉ hỏi thông tin còn thiếu ảnh hưởng quyết định. Figma không chứng minh ACK/rollback/lệnh đèn.
2. **Kit local trước.** Đọc phần liên quan trong [APPLE_UI_KIT_AUDIT](APPLE_UI_KIT_AUDIT.md), kiểm tra component trong file SmartHue, đặc biệt `Safe Area Insets and Margins` node `24731:15441`. Ghi node/main ID, properties/variants, modes/bindings, ảnh đã xem. Dùng [safe-area v2](references/guides/iphone-duo-safe-area-guide.md) cho phép đo đúng pose/container; snapshot không thay kiểm tra nguồn khi kit đổi.
3. **HIG/rule.** Chọn rule liên quan trong [HIG_RULES](HIG_RULES.md), rồi guide adaptive/bars/panes theo vấn đề. Nguồn và ngày phải rõ; không biến recommendation thành yêu cầu bắt buộc hoặc coi bản Community là tài liệu Apple đã xác minh.
4. **Ảnh ref sau.** Xem ảnh phù hợp trong [DUO_APP_REFERENCES](DUO_APP_REFERENCES.md); ghi ref ID, hierarchy/mật độ/spacing/type/màu/control học được và phần không áp dụng. Có thể dùng ảnh đã xem trong cùng phiên bản; không khẳng định đã xem nếu chỉ đọc tên/link.
5. **HTML đề xuất (WF04).** File HTML riêng thật đơn giản, khối/nhãn, ID/version và nhãn trạng thái; mở preview. Ghi giữ/đổi, trade-off, cấu hình/state/đầu ra cần làm, phần chỉ spec/QA, dependencies. Không dựng hoặc sync wireframe vào Figma. Không tự thêm UI ngoài nguồn/yêu cầu; nếu cần thay đổi mới, trình riêng phần đó.
6. **Duyệt phạm vi cụ thể.** Ghi xác nhận vào [DESIGN_DECISIONS](DESIGN_DECISIONS.md). Chấp thuận workflow không đồng nghĩa duyệt mọi layout. Đã duyệt cùng scope thì làm tiếp, không xin lại từng thao tác; thay đổi đáng kể chỉ cần duyệt phần thay đổi.
7. **Figma hoàn thiện (WF05/WF07).** Reuse linked instances, giữ bindings. Gap/fallback cần nêu component, phạm vi đã kiểm tra, lỗi và phương án; không retry import mù. Áp grid 4 cho custom UI, Home hai pane bằng nhau/card gọn. Nếu custom leading đang bind22, có thể override instance/rebind token custom24 mà giữ font/color và không sửa variable Apple dùng chung; ghi thay đổi và xung đột kit cụ thể.
8. **Review/bàn giao.** Dùng [design-review](references/guides/design-review.md) và [DELIVERY_CHECKLIST](DELIVERY_CHECKLIST.md) cho phần đã làm. Ghi Đạt/Cần sửa/Không áp dụng/Chưa kiểm chứng cùng node/ảnh. Không nhân số frame bằng mọi cấu hình × mọi state. Không khẳng định hiệu quả kinh doanh nếu chưa có baseline.

## Duy trì tài liệu

Scope/material → DESIGN_BRIEF; màn/elements/states → SCREEN_SPECS; quyết định/approval/giả định → DESIGN_DECISIONS; component/geometry → APPLE_UI_KIT_AUDIT; kết quả → handoff/checklist. Mỗi update ghi ngày, phiên bản, trạng thái; giữ lịch sử nhưng không để đoạn cũ thành policy hiện hành. Không cần cập nhật tất cả tài liệu cho một sửa nhỏ.
