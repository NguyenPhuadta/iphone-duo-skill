---
name: iphone-duo-design-smarthue
description: Review and adapt SmartHue lighting-control UI for iPhone Duo. Use for Figma layout reviews, approved fixes, new layout proposals and design handoff. Routes to task-specific kit, geometry and bar guides; runtime guidance applies when working with code.
---
# SmartHue Duo — v2.0

## Chọn đường đi

Xác định màn/node, đầu ra và quyền hiện có từ yêu cầu user. Đọc phần màn tương ứng trong [SCREEN_SPECS](SCREEN_SPECS.md) khi cần context dự án; nguồn user gửi hiện tại có thể là bản mới hơn hồ sơ. Tái dùng context còn đúng phiên bản, chỉ đọc phần thay đổi.

| Task | Tài liệu cần đọc | Đường thực hiện |
| --- | --- | --- |
| Review UI có sẵn | [design-review](references/guides/design-review.md) | Nguồn/ảnh → findings; thêm guide theo lỗi |
| Fix trong scope đã duyệt | Spec màn + đúng guide cho lỗi | Nguồn liên quan → sửa → read-back/render; giữ approval |
| Phương án/layout mới | [WORKFLOW](WORKFLOW.md) + scope/spec liên quan | Nguồn → local kit → HIG → ảnh ref → HTML preview → duyệt scope → Figma |
| Handoff | [DELIVERY_CHECKLIST](DELIVERY_CHECKLIST.md) | Bàn giao phần đã làm; contract runtime nếu được giao |
| Code hoặc QA app | [readiness](references/guides/readiness.md) | Repo/stack/SDK thật → kiểm tra theo phạm vi |

Mở guide theo quyết định: [safe-area](references/guides/iphone-duo-safe-area-guide.md) khi đo usable bounds; [adaptive](references/guides/adaptive-layout.md) khi gập/resize/reflow; [bars](references/guides/vertical-bars.md) khi toolbar/rail/overflow; [panes](references/guides/dual-pane-patterns.md) khi chọn quan hệ hai vùng. Không đọc tất cả guide mặc định.

## Ràng buộc chung

- Giữ tác vụ, navigation, UI elements/actions và trạng thái của nguồn/phạm vi user duyệt. Không nhập feature, label/action mới, paywall hoặc hinge effects từ ref. Đổi cách xếp/group cùng elements là adaptation; thêm element/action vẫn phải trình riêng theo quyền hiện có.
- WF04: phương án mới dùng HTML khối/nhãn đơn giản, preview trong Codex. Đã có quyền dựng nháp; Figma hoàn thiện sau duyệt phương án cụ thể. Sửa nhỏ cùng scope không lặp proposal/approval. Đổi flow, actions, cấu hình hoặc đầu ra ngoài scope thì trình phần thay đổi.
- WF05: tìm/reuse linked local instances trong SmartHue `mklhEcafiTfj9FoGIUhA0M`; giữ main IDs, variants/properties/bindings. Không detach, sửa main/kit hay dựng lại component đã có cho tiện. Trước fallback phải có gap cụ thể; lỗi import Community không chứng minh local component thiếu.
- Grid4: áp cho token custom do SmartHue đặt (spacing/padding/radius/type/kích thước custom). Native geometry, artwork và token kit được phân loại riêng, không làm tròn toàn bộ library. Chỉ override property/token custom được phép trong instance, giữ link và bindings không liên quan; không sửa variable Apple dùng chung. Nếu không thể đạt grid4 mà giữ kit, giữ nguồn, báo số/property và phần chưa đạt; chỉ cần quyết định cho phần xung đột. Việc phân loại không xác nhận các ngoại lệ cũ đã được user nghiệm thu.
- Home inner landscape giữ hai pane bằng rộng và card theo nội dung, không stretch để lấp chiều cao. Định nghĩa content bounds và xử lý flat/partial ở [safe-area](references/guides/iphone-duo-safe-area-guide.md#home-content-bounds). Rule này không áp cho mọi flow hoặc tự chốt layout partial chưa có bằng chứng.
- Safe area, layout margin và reserved region khác nhau; không trừ vùng trùng hai lần. Geometry Figma chỉ đúng template/container/phiên bản đã ghi. Không lấy đường tâm flat làm fold width hoặc coi số snapshot là hằng số runtime.
- Review/read-back/render/bounds của phần sửa là kiểm tra kết quả thiết kế trong task. QA app/simulator/lệnh đèn/VoiceOver theo phạm vi được giao. Chỉ claim điều có bằng chứng; Figma không chứng minh runtime.

## Nơi lưu thông tin

[SCREEN_SPECS](SCREEN_SPECS.md) giữ current state từng màn; [DESIGN_DECISIONS](DESIGN_DECISIONS.md) giữ approval/quyết định; [APPLE_UI_KIT_AUDIT](APPLE_UI_KIT_AUDIT.md) giữ mapping; [HOME_DEMO_HANDOFF](HOME_DEMO_HANDOFF.md) giữ kết quả Home. Update đúng nơi, các file khác liên kết tới đó.

[HIG_RULES](HIG_RULES.md), [DUO_APP_REFERENCES](DUO_APP_REFERENCES.md) và [DESIGN_BRIEF](DESIGN_BRIEF.md) chỉ đọc phần cần. `history/` không thuộc đường đọc task thông thường; tra khi cần nguồn quyết định cũ. Tài liệu tham khảo không tự cấp quyền. Yêu cầu user hiện tại quyết định scope; SKILL/WORKFLOW điều khiển cách làm; guide giữ chi tiết chuyên đề. Nguồn mới mâu thuẫn thì xác minh phần ảnh hưởng quyết định.
