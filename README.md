# SmartHue — Gói bàn giao layout iPhone Duo

> Snapshot v1.7 • 2026-10-06 • Ngôn ngữ: tiếng Việt.

Gửi toàn bộ folder này hoặc file ZIP đi kèm cho designer/agent. Các tài liệu và link nội bộ hoạt động khi folder được chuyển sang máy khác; không cần repository SmartHue hoặc lịch sử chat. Gói gồm hướng dẫn và Home-A v1 lịch sử và bản Home-A v2 Figma editable, PNG là bằng chứng render của v1 và v2. Chưa phải toàn bộ UI SmartHue hoàn chỉnh.

## Bắt đầu

1. Đọc [AGENTS_IPHONE_DUO.md](AGENTS_IPHONE_DUO.md) và [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md).
2. Đọc [DESIGN_BRIEF.md](DESIGN_BRIEF.md), [WORKFLOW.md](WORKFLOW.md) và [WORKFLOW_REVIEW.md](WORKFLOW_REVIEW.md).
3. Nhận link Figma, hiểu flow/elements nguồn; kiểm tra [APPLE_UI_KIT_AUDIT.md](APPLE_UI_KIT_AUDIT.md) trước (đặc biệt section `Safe Area Insets and Margins` và rule Duo), sau đó đọc [HIG_RULES.md](HIG_RULES.md)/[IPHONE_DUO_RESEARCH.md](IPHONE_DUO_RESEARCH.md), cuối cùng mở ảnh ref trong [DUO_APP_REFERENCES.md](DUO_APP_REFERENCES.md) để lấy taste/vibe.
4. Dùng [SCREEN_SPECS.md](SCREEN_SPECS.md) và [DESIGN_DECISIONS.md](DESIGN_DECISIONS.md) để ghi hiện trạng, đề xuất và xác nhận. Wireframe HTML phải thật đơn giản, làm nhanh, dùng khối/nhãn và preview trong Codex; không dựng trong Figma. Không tự thêm UI element ngoài UI gốc/yêu cầu user; element mới cần user duyệt riêng; chỉ làm layout hoàn thiện sau khi người giao việc duyệt phương án cụ thể.
5. Review theo phạm vi đã duyệt và [DELIVERY_CHECKLIST.md](DELIVERY_CHECKLIST.md).

Agent dùng AGENTS.md để định tuyến. Nếu ghép vào workspace đã có AGENTS.md, thêm rule dẫn đến hướng dẫn Duo vào file hiện có, không ghi đè quy tắc của workspace.

## Trạng thái bàn giao

- Workflow gốc sáu bước và toàn bộ khuyến nghị review đã được chấp thuận; bản hiện hành tách thứ tự kiểm tra thành các bước rõ ràng: UI Kit Duo → HIG → ref. Home-A proposal đã duyệt; layout v1 là lịch sử, v2 Figma đã dựng và chờ user review.
- Đã có link kit, audit đọc một phần kit, research và HIG chọn lọc. User xác nhận đã setup đầy đủ component Duo trong file SmartHue; WF05 inventory/read-back đã hoàn tất cho Home-A v2.
- Đã nhận Home nguồn và Test đích; xem HOME_DEMO_PROPOSAL.md. Phạm vi Home-A đã duyệt; xem [handoff/demo](HOME_DEMO_HANDOFF.md). Deadline và runtime behavior còn cần xác nhận.
- Chưa có số liệu baseline để đánh giá workflow hay tác động layout. Review hiện tại dựa trên cấu trúc tài liệu và giới hạn material, không phải kết quả usability test.
- Kèm ảnh wireframe, final board, hai cấu hình, state board và geometry evidence trong demo-home/; không kèm file .fig, ảnh ref offline, font, app/code hoặc quyền truy cập. Người nhận cần được cấp quyền đọc UI/kit và quyền sửa file đích trước giai đoạn thiết kế. Các link Figma chỉ là tham chiếu trực tuyến.

## Material cần bổ sung

Để bắt đầu đọc/phân tích: link Figma có node của một màn/luồng và màn đó nằm ở đâu trong app. Nên gửi kèm mục tiêu cần cải thiện và phần bắt buộc giữ.

Trước khi duyệt phương án: xác định phạm vi thay đổi, đầu ra/file đích, cấu hình và states cần hỗ trợ. Demo/spec hoặc xác nhận dev chỉ cần cho hành vi mà Figma không thể chứng minh và ảnh hưởng đến giải pháp. Logo/icon/màu hiện có được lấy từ UI nguồn nếu chưa có bộ riêng; không cần cung cấp một design system mới.

## Phạm vi gói

Chỉ có context làm layout Duo cho Home, điều khiển từng đèn, OB và kết nối thiết bị. Không kèm nghiên cứu tăng toggle, tracking plan, số liệu tăng trưởng, brainstorm tính năng hoặc persona/quy tắc xưng hô nội bộ.

Đây là snapshot bàn giao. Khi người nhận tiếp tục làm, cập nhật spec/decision trong bản đang dùng và ghi phiên bản mới; không giả định bản trong repository tự đồng bộ. MANIFEST.sha256 liệt kê checksum của các file tại thời điểm đóng gói.

## Lời giao việc có thể gửi kèm

> Hãy đọc AGENTS_IPHONE_DUO.md trước, sau đó các file trong gói theo hướng dẫn. Đọc link Figma màn/luồng tôi gửi, trình bày lại mục đích, flow và UI elements; kiểm tra UI Kit trong file SmartHue trước (đặc biệt Duo rules/safe area), ghi inventory/mapping theo WF05 và bắt buộc dùng linked instances phù hợp khi làm bản hoàn thiện; tiếp theo đối chiếu HIG/rule, cuối cùng mở và xem ảnh ref để hiểu taste/vibe. Chỉ dùng UI elements có trong UI gốc/yêu cầu của tôi, không tự thêm mới nếu chưa được tôi duyệt rõ. Rồi đề xuất phương án, wireframe HTML thật đơn giản bằng khối/nhãn, rủi ro, phạm vi và tiêu chí bàn giao. Dựng hướng đề xuất/wireframe bằng một file HTML đơn giản và nhanh, mở preview ngay trong Codex; không dựng hoặc sync bản đề xuất vào Figma. Quyền preview đã được yêu cầu; không sửa UI nguồn/kit. Chờ tôi chấp thuận phương án cụ thể trước khi làm layout hoàn thiện. Thông tin chưa biết hãy ghi rõ, không tự suy thành yêu cầu đã duyệt.

## Thay đổi v1.7 — 2026-10-06

Chốt thứ tự kiểm tra UI Kit Duo (kể cả phần rule/safe area) → HIG → ref để lấy taste/vibe; giới hạn HTML preview ở wireframe khối/nhãn thật đơn giản; cấm tự thêm UI ngoài source/yêu cầu đã duyệt. Đồng bộ workflow, agent guide, project context và audit; tạo lại manifest/ZIP.

## Thay đổi v1.1 — 2026-10-06

Áp dụng toàn bộ khuyến nghị review đã chấp thuận; cho wireframe đơn giản ở bước đề xuất, làm rõ tóm tắt hành vi, scope layout/UX, coverage và tiêu chí bàn giao. Đồng bộ quy tắc duyệt và decision log; gói vẫn độc lập, chưa có UI SmartHue nguồn.

## Thay đổi v1.2 — 2026-10-06

Bắt buộc xem ảnh ref trước wireframe/layout, ghi điểm học/giới hạn. Thêm [catalog ref](DUO_APP_REFERENCES.md), [folder ref](references/README.md) và [đề xuất demo Home](HOME_DEMO_PROPOSAL.md). Link ảnh cần mạng; gói chưa chứa ảnh ref offline. Home-A đã được duyệt và hoàn thiện demo; các màn tiếp theo vẫn cần chấp thuận phương án cụ thể.

Bản v1.2 cũng ghi approval Home-A và kèm [handoff](HOME_DEMO_HANDOFF.md), render cuối và geometry review. Không kèm offline ref hoặc quyền Figma.

## Thay đổi v1.3 — 2026-10-06

WF04: hướng đề xuất và wireframe dùng HTML đơn giản, làm nhanh và preview trong Codex; Figma chỉ đọc source/kit ở bước đề xuất và làm layout hoàn thiện sau duyệt. Đã đồng bộ agent rules, workflow, spec, checklist và decision log. Gói không chứa preview HTML mới vì lượt này chỉ cập nhật rule; ảnh wireframe Home-A cũ là lịch sử trước WF04.

## Thay đổi v1.4 — 2026-10-06

WF05: kiểm tra component Duo đã setup trong file SmartHue trước đề xuất và bắt buộc reuse linked instances phù hợp khi hoàn thiện; giữ properties/variants/variable bindings, không dựng lại component có sẵn. Bổ sung inventory/mapping, cách xử lý gap/import lỗi và kiểm chứng read-back. Đính chính chẩn đoán fallback Home-A; chưa audit local Duo hoặc sửa Figma trong lượt này. Preview đề xuất vẫn là HTML trong Codex theo WF04.

## Thay đổi v1.5 — 2026-10-06

Thêm [Home-A v2 HTML](demo-home/home-a-v2.html) độc lập theo WF04, ảnh inner/outer/offline, state checks và raw inventory/geometry Duo trong file SmartHue theo WF05. Mở file HTML trực tiếp hoặc phục vụ bằng server local và preview trong Codex. Kit local được audit một phần; chưa có final Figma v2, chưa nghiệm thu user hoặc kiểm thử runtime. Không ghi ảnh v1 thành đã reuse Duo chrome.


## Thay đổi v1.6 — 2026-10-06

Đã dựng [Home-A v2 trong Figma](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24764-3926) theo HTML v2 được user duyệt. Kèm render inner/outer/board và read-back. Local linked Duo instances, Dark bindings, source light cards và 26 target spec frames đã được xác minh ở mức thiết kế. Đang chờ user review; runtime chưa kiểm chứng.
