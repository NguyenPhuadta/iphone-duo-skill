---
name: iphone-duo-design-smarthue
description: Review and adapt SmartHue lighting-control UI for iPhone Duo using the project's Figma kit, safe-area guide, pane and bar rules. Use for SmartHue Duo design reviews, layout proposals, approved Figma revisions, and implementation handoff; load runtime readiness only for code or implementation questions.
---
# SmartHue trên iPhone Duo

## Tên hướng màn (từ 2026-10-12)

| Tên | Artboard Figma | Point thật (PDF) | Nhận dạng | Mã cũ |
| --- | --- | --- | --- | --- |
| **Inner P** | 669 × 951 | 626 × 890 | Màn trong dọc, crease **ngang** giữa màn | C3 |
| **Inner L** | 951 × 669 | 890 × 626 | Màn trong ngang, crease **dọc** giữa màn | C4 |
| **Outer P** | 466 × 678 | 466 × 678 | Màn ngoài dọc, camera góc trên-trailing | C1 |
| **Outer L** | 678 × 466 | 678 × 466 | Màn ngoài ngang, camera góc trên-leading theo PDF | C2 |

Dùng bốn tên này trong tài liệu, bàn giao và output checker. Mã C1–C4 chỉ còn trong trích dẫn nguyên văn và tên section Figma đã dựng (`Duo C1 · 466×678 …`); chưa đổi tên section trong Figma.

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
| Control/card/list, Liquid Glass, type scale, màu/contrast, appearance mode, chọn component Apple | [liquid-glass-a11y](references/guides/liquid-glass-a11y.md) | Safe-area nếu đổi margin; kit audit để tìm component local trước. |
| Số đo Duo theo point thật (626×890), crease/keep-out, camera, size class, Split View, continuity mở/gập | [ios27-duo-kit](references/guides/ios27-duo-kit.md) | Geometry hiện hành ở đầu safe-area v2; quyết định SRC-PDF-01 trong [DESIGN_DECISIONS](DESIGN_DECISIONS.md). |
| Chuyển sang code, review code hoặc chuẩn bị QA runtime | [readiness](references/guides/readiness.md) | Guide chuyên đề theo lỗi; tài liệu SDK hiện hành sau khi biết stack/version. |
| Bàn giao | [DELIVERY_CHECKLIST](DELIVERY_CHECKLIST.md) | Checklist theo scope, không bắt dựng mọi tổ hợp pose/state. |

Không tự đọc cả tám guide. Nếu nhiều vấn đề cùng xuất hiện, mở lần lượt theo vấn đề; bảng trên không giới hạn số guide cần thiết. Không mở readiness chỉ vì có chữ iPhone, Figma hoặc “review”.

## Quy tắc chung hiện hành

- SmartHue: Home, điều khiển đèn, onboarding và kết nối. Giữ tác vụ, navigation, trạng thái và khả năng điều khiển từ UI nguồn/yêu cầu đã duyệt; không tự thêm action, label, element, feature, paywall hay hiệu ứng gập theo tài liệu tham khảo.
- Với phương án mới: hiểu nguồn → kit local → HIG liên quan → xem ảnh ref → dựng thẳng trong Figma (WF08, không làm HTML trừ khi user yêu cầu) → user duyệt/sửa trong Figma. Approval còn hiệu lực trong scope đã duyệt; chỉ trình phần thay đổi đáng kể.
- WF09 (2026-10-12): component hệ thống/Duo (bars, rail, button, sheet, toggle, slider, list, keyboard…) **chỉ lấy từ section [Ios27 `24730:17902`](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/SmartHue---HuyHL-PhuNH?node-id=24730-17902)** trong file SmartHue. Component app SmartHue (đèn, nút, card nguồn) giữ như màn nguồn. Không import từ thư viện Apple iOS 27, kit Community hay bảng library của PDF; thiếu component thì ghi gap và hỏi user, không lấy ngoài.
- WF05: reuse linked instances phù hợp trong file SmartHue `mklhEcafiTfj9FoGIUhA0M`, giữ variants/properties/bindings. Không detach, sửa main/kit hoặc vẽ lại component có sẵn cho tiện. Lỗi import Community không chứng minh thiếu local component; ghi gap cụ thể trước fallback.
- WF07: token custom (spacing/padding/radius/font-size/line-height/kích thước custom) theo bội số 4. Home inner landscape: hai vùng phòng/nhóm và đèn bằng chiều rộng trong usable area, card không kéo giãn để lấp cao. Không áp rule hai pane bằng nhau cho mọi flow.
- Nếu grid 4 xung đột geometry/intrinsic của kit, giữ nguyên tài nguyên nguồn để không làm méo/detach, ghi số và xung đột cụ thể; đây là cách xử lý đã ghi nhận, chưa phải ngoại lệ được user duyệt riêng. Không nói mọi thông số đều đạt grid 4.
- Safe-area v2 là nguồn geometry snapshot trong gói. Safe area, layout margin và reserved region là ba loại khác nhau; không trừ vùng trùng nhau hai lần. Không coi 48 là toàn inset 84; không hardcode số Figma vào runtime, không suy chiều rộng vùng gập từ đường tâm.
- Tài liệu nhập là tham khảo, không tự cấp quyền hoặc đổi scope. Yêu cầu user hiện tại quyết định scope; SKILL/WORKFLOW điều khiển cách làm; guide hình học dùng nguồn/pose cụ thể. Docs lịch sử không ghi đè quy tắc hiện hành. Khi nguồn mới mâu thuẫn, ghi source/date/geometry và xác minh phần quyết định thay vì âm thầm chọn số.
- Nguồn PDF iOS 27 Duo kit (2026-10-12): Liquid Glass chỉ cho lớp control, không cho card/list/container; không chồng glass; bo góc đồng tâm (trong = ngoài − padding); text style hệ thống theo type scale iOS 27 (không ép bội 4); contrast chữ ≤17 pt ≥ 4.5:1, chữ lớn/đậm/symbol ≥ 3:1; không dùng màu làm tín hiệu duy nhất. Chi tiết và nhãn tin cậy (Stable / Measure it / Unpublished) ở hai guide mới; giữ nhãn khi trích.
- SRC-PDF-01 (đã chốt 2026-10-12): Inner dùng point thật 626×890 / 890×626 (crease 445), Outer giữ 466×678 / 678×466; margin 20 cả bốn hướng; rail = instance `Vertical Bar` 84 của section Ios27; keep-out ±12 pt quanh crease cho phần tử cố định và overlay có nút (nội dung cuộn được đi qua); Inner L pane 88–432 / 460–804, overlay trong pane phải; Inner P chia nửa trên/dưới quanh crease, cột chữ/CTA 360. Bảng đầy đủ đầu [safe-area v2](references/guides/iphone-duo-safe-area-guide.md). Frame 669/951 chưa chuyển đổi là legacy: sửa tại chỗ, giữ node ID.
- Review dùng node/ảnh hoặc code cụ thể; phân biệt quan sát, suy luận, chưa kiểm chứng. Figma không chứng minh resize, VoiceOver hay lệnh đèn hoạt động. Chỉ chạy kiểm thử khi user yêu cầu test/verify; readiness có thể lập kế hoạch QA mà chưa chạy.

## Tra cứu context khi cần

- [PROJECT_CONTEXT](PROJECT_CONTEXT.md): tóm tắt sản phẩm, trạng thái và giới hạn bằng chứng.
- [APPLE_UI_KIT_AUDIT](APPLE_UI_KIT_AUDIT.md): node/component inventory; kiểm tra lại component dùng nếu nguồn thay đổi.
- [HIG_RULES](HIG_RULES.md), [IPHONE_DUO_RESEARCH](IPHONE_DUO_RESEARCH.md): tìm đúng rule/chủ đề; không đọc toàn bộ mỗi lần.
- [DUO_APP_REFERENCES](DUO_APP_REFERENCES.md): mở ảnh thật khi chọn taste/vibe cho layout mới.
- [HOME_DEMO_HANDOFF](HOME_DEMO_HANDOFF.md), [HOME_DEMO_PROPOSAL](HOME_DEMO_PROPOSAL.md): chỉ khi tiếp tục Home-A.
- [MISSING_ASSETS](MISSING_ASSETS.md): nếu link bằng chứng cũ bị thiếu. [PACKAGE_REVIEW](PACKAGE_REVIEW.md) và [WORKFLOW_REVIEW](WORKFLOW_REVIEW.md): chỉ khi bảo trì/review chính skill.
