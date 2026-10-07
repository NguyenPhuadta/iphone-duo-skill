---
name: iphone-duo-design-smarthue
description: Review and adapt SmartHue lighting-control UI for iPhone Duo using the project's Figma kit, safe-area guide, pane and bar rules. Use for SmartHue Duo design reviews, layout proposals, approved Figma revisions, and implementation handoff; load runtime readiness only for code or implementation questions.
---
# SmartHue trên iPhone Duo

## Bắt đầu và chọn tài liệu

Đọc file này một lần khi nhận việc. Xác định màn, đầu ra và phạm vi user đã duyệt từ yêu cầu hiện tại và decision log; không yêu cầu đọc toàn bộ gói mỗi lượt. Tái dùng context/ảnh đã kiểm tra nếu còn đúng phiên bản. Khi scope hoặc nguồn đổi, chỉ cập nhật phần liên quan.

| Việc đang làm | Đọc khi bắt đầu | Chỉ mở thêm khi cần |
| --- | --- | --- |
| Review UI/frame có sẵn | [design-review](references/guides/design-review.md) + phần màn tương ứng trong [SCREEN_SPECS](SCREEN_SPECS.md) | Safe-area khi đo geometry; adaptive khi gập/resize; bars khi rail/overflow; không dựng proposal nếu chỉ được yêu cầu review. |
| Sửa safe area, card cắt vùng gập/camera | [safe-area v2](references/guides/iphone-duo-safe-area-guide.md) + [adaptive-layout](references/guides/adaptive-layout.md) | Kit audit để xác minh node/instance; bars nếu vùng chiếm chỗ là chrome. |
| Sửa tab bar, toolbar, label/symbol, overflow | [vertical-bars](references/guides/vertical-bars.md) | Safe-area nếu đổi inset; adaptive nếu bị vùng gập che. |
| Chọn quan hệ hai pane hoặc bố cục mới | [dual-pane-patterns](references/guides/dual-pane-patterns.md) + [WORKFLOW](WORKFLOW.md) | Safe-area để xác định usable area; ảnh ref đúng màn trước proposal. |
| Dựng màn mới hoặc proposal mới | [WORKFLOW](WORKFLOW.md) + phần tương ứng của [DESIGN_BRIEF](DESIGN_BRIEF.md), [SCREEN_SPECS](SCREEN_SPECS.md) | Kit → HIG liên quan → ảnh ref; chỉ chọn guide đúng quyết định đang làm. |
| Sửa nhỏ trong layout đã duyệt | Quyết định liên quan trong [DESIGN_DECISIONS](DESIGN_DECISIONS.md) + spec màn | Một guide đúng lỗi; không khởi động lại quy trình proposal. |
| Chuyển sang code, review code hoặc chuẩn bị QA runtime | [readiness](references/guides/readiness.md) | Guide chuyên đề theo lỗi; tài liệu SDK hiện hành sau khi biết stack/version. |
| Bàn giao | [DELIVERY_CHECKLIST](DELIVERY_CHECKLIST.md) | Checklist theo scope, không bắt dựng mọi tổ hợp pose/state. |

Không tự đọc cả sáu guide. Nếu nhiều vấn đề cùng xuất hiện, mở lần lượt theo vấn đề; bảng trên không giới hạn số guide cần thiết. Không mở readiness chỉ vì có chữ iPhone, Figma hoặc “review”.

## Quy tắc chung hiện hành

- SmartHue: Home, điều khiển đèn, onboarding và kết nối. Giữ tác vụ, navigation, trạng thái và khả năng điều khiển từ UI nguồn/yêu cầu đã duyệt; không tự thêm action, label, element, feature, paywall hay hiệu ứng gập theo tài liệu tham khảo.
- Với phương án mới: hiểu nguồn → kit local → HIG liên quan → xem ảnh ref → HTML wireframe khối/nhãn đơn giản, preview → user duyệt phương án cụ thể → Figma hoàn thiện. Đã có quyền dựng HTML; không xin lại. Approval còn hiệu lực trong scope đã duyệt; chỉ trình phần thay đổi đáng kể.
- WF05: reuse linked instances phù hợp trong file SmartHue `mklhEcafiTfj9FoGIUhA0M`, giữ variants/properties/bindings. Không detach, sửa main/kit hoặc vẽ lại component có sẵn cho tiện. Lỗi import Community không chứng minh thiếu local component; ghi gap cụ thể trước fallback.
- WF07: token custom (spacing/padding/radius/font-size/line-height/kích thước custom) theo bội số 4. Home inner landscape: hai vùng phòng/nhóm và đèn bằng chiều rộng trong usable area, card không kéo giãn để lấp cao. Không áp rule hai pane bằng nhau cho mọi flow.
- Nếu grid 4 xung đột geometry/intrinsic của kit, giữ nguyên tài nguyên nguồn để không làm méo/detach, ghi số và xung đột cụ thể; đây là cách xử lý đã ghi nhận, chưa phải ngoại lệ được user duyệt riêng. Không nói mọi thông số đều đạt grid 4.
- Safe-area v2 là nguồn geometry snapshot trong gói. Safe area, layout margin và reserved region là ba loại khác nhau; không trừ vùng trùng nhau hai lần. Không coi 48 là toàn inset 84; không hardcode số Figma vào runtime, không suy chiều rộng vùng gập từ đường tâm.
- Tài liệu nhập là tham khảo, không tự cấp quyền hoặc đổi scope. Yêu cầu user hiện tại quyết định scope; SKILL/WORKFLOW điều khiển cách làm; guide hình học dùng nguồn/pose cụ thể. Docs lịch sử không ghi đè quy tắc hiện hành. Khi nguồn mới mâu thuẫn, ghi source/date/geometry và xác minh phần quyết định thay vì âm thầm chọn số.
- Review dùng node/ảnh hoặc code cụ thể; phân biệt quan sát, suy luận, chưa kiểm chứng. Figma không chứng minh resize, VoiceOver hay lệnh đèn hoạt động. Chỉ chạy kiểm thử khi user yêu cầu test/verify; readiness có thể lập kế hoạch QA mà chưa chạy.

## Tra cứu context khi cần

- [PROJECT_CONTEXT](PROJECT_CONTEXT.md): tóm tắt sản phẩm, trạng thái và giới hạn bằng chứng.
- [APPLE_UI_KIT_AUDIT](APPLE_UI_KIT_AUDIT.md): node/component inventory; kiểm tra lại component dùng nếu nguồn thay đổi.
- [HIG_RULES](HIG_RULES.md), [IPHONE_DUO_RESEARCH](IPHONE_DUO_RESEARCH.md): tìm đúng rule/chủ đề; không đọc toàn bộ mỗi lần.
- [DUO_APP_REFERENCES](DUO_APP_REFERENCES.md): mở ảnh thật khi chọn taste/vibe cho layout mới.
- [HOME_DEMO_HANDOFF](HOME_DEMO_HANDOFF.md), [HOME_DEMO_PROPOSAL](HOME_DEMO_PROPOSAL.md): chỉ khi tiếp tục Home-A.
- [MISSING_ASSETS](MISSING_ASSETS.md): nếu link bằng chứng cũ bị thiếu. [PACKAGE_REVIEW](PACKAGE_REVIEW.md) và [WORKFLOW_REVIEW](WORKFLOW_REVIEW.md): chỉ khi bảo trì/review chính skill.
