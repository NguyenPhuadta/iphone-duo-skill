# Hướng dẫn designer/agent — layout SmartHue trên iPhone Duo

> Điểm bắt đầu riêng cho đầu việc Duo. Mỗi lượt liên quan, agent đọc toàn bộ file này trước; designer dùng như hướng dẫn nhận việc.

## Context

SmartHue điều khiển đèn từ nhiều hệ sinh thái. Đầu việc này thích ứng UI core cho Duo: Home, từng đèn, OB và kết nối thiết bị. Không có design system riêng để cung cấp. Đã có kit Community được đọc một phần; người dùng xác nhận đã setup đầy đủ component Duo trong file SmartHue `mklhEcafiTfj9FoGIUhA0M`, bắt buộc kiểm tra/reuse theo WF05; đã nhận Home và section Test đích; Home-A đã được duyệt và hoàn thiện demo hai cấu hình dark, xem [HOME_DEMO_HANDOFF.md](HOME_DEMO_HANDOFF.md). Các luồng khác chưa được duyệt.

Workflow đã cập nhật 2026-10-06: nhận link → hiểu mục đích/luồng/UI elements nguồn → kiểm tra UI Kit trước, đọc kỹ section Duo rules/safe area → HIG/rule → xem ảnh ref cuối để lấy taste/vibe → wireframe HTML thật đơn giản, làm nhanh → user duyệt phương án → layout hoàn thiện, review và bàn giao. Không tự thêm element UI ngoài nguồn/yêu cầu user; element mới cần được trình riêng và user duyệt rõ.

## File cần đọc

| File | Vai trò |
| --- | --- |
| [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) | Product context có liên quan đến layout. |
| [DESIGN_BRIEF.md](DESIGN_BRIEF.md) | Scope, material và điểm còn thiếu. |
| [WORKFLOW.md](WORKFLOW.md) | Trình tự và điều kiện duyệt. |
| [WORKFLOW_REVIEW.md](WORKFLOW_REVIEW.md) | Phản biện có bằng chứng và toàn bộ khuyến nghị đã chấp thuận. |
| [SCREEN_SPECS.md](SCREEN_SPECS.md) | Hiện trạng, UI elements, behavior và trạng thái. |
| [DESIGN_DECISIONS.md](DESIGN_DECISIONS.md) | Nguồn, đề xuất/phiên bản, quyết định và xác nhận. |
| [APPLE_UI_KIT_AUDIT.md](APPLE_UI_KIT_AUDIT.md) | Bắt đầu tại đây: component local, Duo templates và section `Safe Area Insets and Margins` (`24731:15441`); phân biệt geometry trong kit với runtime. |
| [HIG_RULES.md](HIG_RULES.md) và [IPHONE_DUO_RESEARCH.md](IPHONE_DUO_RESEARCH.md) | Đọc sau UI Kit; rule IDs, nguồn Apple và đặc điểm thiết bị. |
| [DUO_APP_REFERENCES.md](DUO_APP_REFERENCES.md) và [references/README.md](references/README.md) | Xem ảnh để hiểu taste/vibe trước khi làm. |
| [HOME_DEMO_PROPOSAL.md](HOME_DEMO_PROPOSAL.md) | Demo Home, nguồn/đích, phạm vi và trạng thái duyệt. |
| [DELIVERY_CHECKLIST.md](DELIVERY_CHECKLIST.md) | Ma trận kiểm tra và tiêu chí bàn giao để đưa vào đề xuất. |

## Quy tắc làm việc

- Nhận material thô, tự ghi context và nguồn; không bắt người giao việc điền toàn bộ mẫu. Đọc được gì báo đúng phần đó, thiếu quyền không giả vờ đã xem.
- Trả lại tóm tắt hiểu luồng trong đề xuất. Phân biệt hiện trạng, yêu cầu mới và giả thuyết; Figma tĩnh không xác nhận logic kết nối/lệnh đèn.
- Trước chọn bố cục, kiểm tra UI Kit trước HIG; đặc biệt mở section `Safe Area Insets and Margins` và rule/geometry Duo. Tách thông số trong kit khỏi safe area runtime; không suy từ bezel/pixel hoặc cố định mọi màn thành hai cột.
- Kit là tham chiếu. Không sửa kit nguồn, không tự mở rộng tính năng hoặc đổi navigation/hành vi ngoài phương án duyệt.
- Dùng công cụ/skill theo yêu cầu của môi trường đang chạy; package không yêu cầu một connector hoặc skill path riêng của máy tạo gói. Nếu không có công cụ đọc cấu trúc Figma, ghi giới hạn và dùng export/demo được cung cấp.
- Được dựng wireframe HTML thật đơn giản ở bước đề xuất, sau khi kiểm tra UI Kit → HIG/rule → ref; dùng khối/nhãn, ID/phiên bản và preview trong Codex; không dựng wireframe/hướng đề xuất trong Figma, không sửa nguồn/kit và không xin phép lại quyền đã chấp thuận. Không tự thêm UI element/action/label/state/navigation/shortcut/feature ngoài nguồn hoặc yêu cầu user; cần thêm thì trình riêng để duyệt rõ. Chỉ làm layout hoàn thiện sau xác nhận phương án/phạm vi cụ thể. Ghi xác nhận vào decision log; làm tiếp và sửa lỗi trong phạm vi đã duyệt, không xin lại từng thao tác. Thay đổi đáng kể phải duyệt phần thay đổi.
- Nêu lý do và trade-off theo mức ảnh hưởng thực tế; không cần bịa luận điểm kinh doanh cho một chỉnh sửa nhỏ. Không có baseline thì chỉ đề xuất metric/cách đo, không khẳng định cải thiện.
- Review có bằng chứng frame/prototype. Spec accessibility, command flow và resize chưa phải bằng chứng app hoạt động; phần runtime chuyển cho dev/QA kiểm tra.
- HIG recommendations không tự trở thành mọi yêu cầu App Store. Ghi rule ID/lý do khi có ngoại lệ. Chưa chốt không đổi thành đã duyệt.

## Duy trì

Scope/material → DESIGN_BRIEF; màn/elements/states → SCREEN_SPECS; đề xuất/xác nhận/giả định → DESIGN_DECISIONS; review → DELIVERY_CHECKLIST; kit/platform đổi → audit/research/HIG kèm nguồn/ngày. Cập nhật phiên bản bàn giao trong README khi gửi bản mới.

## Bổ sung visual refs — 2026-10-06

- Trước wireframe hoặc layout, đọc DUO_APP_REFERENCES.md và **mở/xem trực tiếp ảnh ref phù hợp** để hiểu taste và vibe. Không thay việc xem ảnh bằng đọc tên app, link hay mô tả. Ghi ref IDs, ảnh/video đã xem, hierarchy, mật độ, spacing, typography, màu, hình dạng và controls; nêu điểm học/không áp dụng cho SmartHue. Phân biệt quan sát, sở thích user và suy luận; ref không tự trở thành style đã duyệt. Nếu không mở được ảnh, báo giới hạn và không ghi đã xem.

## Rule preview HTML — 2026-10-06

**WF04 — Preview đề xuất bằng HTML trong Codex:** wireframe và hướng đề xuất bố cục phải được dựng bằng một file HTML đơn giản, làm nhanh và mở preview ngay trong Codex; không dựng, sửa hoặc đồng bộ bản đề xuất/wireframe vào Figma. Đọc Figma nguồn/kit vẫn được phép. Sau khi user duyệt phương án cụ thể mới làm layout hoàn thiện trong Figma theo phạm vi đã duyệt. Quyền làm HTML preview đã được yêu cầu, không xin phép lại.

## WF05 — Bắt buộc dùng component Duo đã setup, 2026-10-06

Người dùng xác nhận đã setup đầy đủ component iPhone Duo trong file SmartHue `mklhEcafiTfj9FoGIUhA0M`. Trước đề xuất/layout, agent phải kiểm tra tài nguyên trong chính file này, ghi node/main component, variant/properties và variables liên quan vào APPLE_UI_KIT_AUDIT.md; chưa kiểm tra thì ghi rõ, không coi là thiếu component. Khi làm layout hoàn thiện, **bắt buộc dùng linked instances của component đã setup phù hợp**, giữ bindings và dùng properties/variants được hỗ trợ; không tự vẽ lại component có sẵn, detach instance hoặc sửa main component/thư viện để tiện dựng màn. Kit Community là nguồn đối chiếu/bổ sung; lỗi import từ đó không chứng minh file SmartHue thiếu component. Nếu thiếu hoặc bị chặn, nêu component cụ thể, phạm vi đã kiểm tra, lỗi và phương án thay thế trước khi dựng thủ công; thay đổi đáng kể vẫn theo bước duyệt hiện có, không thêm vòng xin phép cho reuse trong scope đã duyệt. WF04 giữ nguyên: đề xuất/wireframe dùng HTML trong Codex, Figma chỉ đọc ở giai đoạn này.

## Home-A v2 — 2026-10-06

Đã tạo [preview HTML v2](demo-home/home-a-v2.html), audit component Duo trong file SmartHue và map template/tab bar/toolbar cho Home. Giữ cấu trúc Home-A đã duyệt; chưa tạo Figma v2 hoặc nghiệm thu user. Đọc [spec](SCREEN_SPECS.md), [audit](APPLE_UI_KIT_AUDIT.md) và raw evidence để biết scope/giới hạn mới; các ghi chú chưa audit phía trên là lịch sử.


## WF07 — Grid bội số 4 và feedback Home, 2026-10-07

- **Yêu cầu user:** spacing, cỡ text, corner radius, padding và thông số UI phải theo bội số 4. Dùng bước 4 cho token UI SmartHue; kiểm tra gap/padding/radius/font-size/line-height và kích thước custom card/container trước bàn giao. Đây là rule của user, không phải yêu cầu Apple HIG.
- **Home-A inner landscape:** hai vùng phòng/nhóm và đèn bằng nhau về chiều rộng trong usable content sau rail/margins. Không để grid đèn rộng hơn; không stretch card để lấp đầy chiều cao. User chốt cho Home, không tự áp hai cột lên mọi flow.
- **Xung đột với kit — cách xử lý hiện tại của agent:** giữ kích thước màn 951×669 / 466×678, safe-area/chrome và intrinsic của linked Apple controls, artwork, glyphs. Các số này có thể không chia hết cho4; không sửa main/detach/làm méo hình để ép grid. Ghi ngoại lệ cụ thể trong decision/spec, không tuyên bố mọi node đều chia hết cho4. Đây là cách dung hòa WF05, chưa có xác nhận riêng của user về ngoại lệ.
- Typography custom đang bind vào leading22 có thể được override trên instance và bind lại token custom24; giữ font/color bindings, không đổi variable chung của nguồn/Apple kit.
