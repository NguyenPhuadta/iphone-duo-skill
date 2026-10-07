> Hồ sơ kế thừa v1.8: đọc đúng phần/mốc cần thiết, không đọc toàn bộ mỗi lượt. Quy trình hiện hành ở [SKILL.md](SKILL.md) và [WORKFLOW.md](WORKFLOW.md); trạng thái tổng hợp ở [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md). Các mục cũ là lịch sử; claim về asset/bằng chứng không có file cần đối chiếu [MISSING_ASSETS.md](MISSING_ASSETS.md).

# SmartHue — Quyết định và nguồn thiết kế

> Ghi cả điều chưa biết để các lần thiết kế sau không phải đoán lại. Không đánh dấu đã duyệt nếu người dùng chưa xác nhận.

## Nguồn đã nhận

| ID | Nguồn | Nội dung sử dụng | Giới hạn |
| --- | --- | --- | --- |
| S01 | PROJECT_CONTEXT.md | Mục đích SmartHue, ưu tiên và nguyên tắc sản phẩm. | Không xác định phạm vi màn iPhone / “Duo”. |
| S02 | Chat ngày 2026-10-06 | Mong muốn cùng tạo context để agent tiếp tục thiết kế; người dùng không có design system. | Chưa có ảnh, link, đặc tả hoặc giải thích “Duo” trong đợt này. |
| S03 | Chat tiếp theo ngày 2026-10-06 và [research Apple](IPHONE_DUO_RESEARCH.md) | “Duo” là thiết bị iPhone gập của Apple; đã nghiên cứu hướng dẫn layout chính thức. | Chưa kiểm tra kit/simulator và chưa biết UI/stack SmartHue hiện tại. Bổ sung này giải quyết phần chưa rõ về Duo trong S02. |
| S04 | Link Figma người dùng cung cấp ngày 2026-10-06; [audit kit](APPLE_UI_KIT_AUDIT.md) | Đã đọc metadata section Duo, 5 ảnh render/context mẫu và một bộ variable defs; lưu frame sizes, inventory và node IDs. | Cập nhật tình trạng kit trong S03. Chưa xác minh simulator, toàn bộ modes, nguồn xuất bản/phiên bản của bản Community hoặc UI SmartHue. |
| S05 | Chat ngày 2026-10-06 về UI sẽ gửi và file HIG | Nhóm ưu tiên: Home, từng đèn, OB, kết nối thiết bị; cần file HIG riêng và sẽ bàn workflow agent sau. | Chưa nhận UI nguồn; OB tạm hiểu onboarding, chưa chốt thứ tự hoặc giải pháp. Trạng thái workflow tại thời điểm này được cập nhật bởi S07. |
| S06 | [HIG_RULES.md](HIG_RULES.md) và các nguồn Apple được dẫn tại từng rule | Lưu hướng dẫn nền tảng, tiêu chí review và các cách áp dụng SmartHue đề xuất. | Chưa review UI SmartHue; không coi SH rules là yêu cầu trực tiếp từ Apple hoặc kết quả kiểm thử. |
| S07 | Chat ngày 2026-10-06 chốt flow làm việc của agent | Nhận link Figma → hiểu mục đích, luồng/màn và UI elements → đọc HIG/rule/kit Duo → đề xuất và rủi ro → user chấp thuận → agent làm. | Xác nhận quy trình, không duyệt phương án thiết kế cụ thể. |
| S08 | Chat ngày 2026-10-06: “đồng ý với tất cả khuyến nghị nhé, sửa lại đi” | Chấp thuận toàn bộ review workflow, gồm wireframe đơn giản ở bước đề xuất; đồng bộ tài liệu và gói v1.1. | Không duyệt bố cục/style, số frame hoặc output của một màn/luồng chưa được đề xuất. |

## Quyết định thiết kế

Home-A đã được duyệt theo DEMO01 bên dưới. Các dòng chưa có UI/approval trong lịch sử WF01/WF02 phản ánh thời điểm trước, không phải trạng thái hiện tại.

Đã xác nhận nhóm UI ưu tiên và việc lưu HIG riêng. [Workflow agent](WORKFLOW.md) đã được chốt theo S07.

## Quyết định workflow WF01 — Đã xác nhận, 2026-10-06

- **Nguồn / người chốt:** S07, người dùng trong chat; yêu cầu rõ “đưa ra đề xuất và các rủi ro → user chấp thuận → agent làm”.
- **Quyết định:** áp dụng sáu bước trong workflow; agent chỉ làm layout hoàn thiện sau khi user duyệt phương án cụ thể. Trước duyệt, agent được đọc/phân tích, nghiên cứu, cập nhật context và dựng wireframe đơn giản theo bổ sung WF02.
- **Lý do / trade-off:** bảo đảm agent hiểu đúng luồng và user kiểm soát hướng trước khi bỏ công thiết kế; thêm công phân tích và phụ thuộc phản hồi, đề xuất văn bản vẫn cần review thị giác sau khi dựng. Chi tiết Tech/Business/UX và cách đo lưu trong workflow.
- **Điều kiện:** đề xuất có phạm vi/phiên bản rõ, ghi xác nhận; không xin lại trong cùng phạm vi đã duyệt. Thay đổi đáng kể phải duyệt phần thay đổi.
- **Trạng thái thiết kế hiện tại:** chưa nhận UI SmartHue nguồn, chưa có đề xuất màn/luồng nào được duyệt.

## Bổ sung workflow WF02 — Đã chấp thuận, 2026-10-06

- **Nguồn / người chốt:** S08, người dùng; xác nhận nguyên văn “đồng ý với tất cả khuyến nghị nhé, sửa lại đi”.
- **Quyết định:** áp dụng toàn bộ khuyến nghị review: tóm tắt hiểu luồng và điều chưa biết; tách layout/UX; chốt coverage cấu hình-states; bàn giao editable/spec/review evidence; nhận material theo giai đoạn; giữ nhận diện và giới hạn kit; gói context độc lập. Được dựng wireframe đơn giản sau đọc/đối chiếu HIG/rule/kit, trước duyệt phương án.
- **Giới hạn:** wireframe là nháp đề xuất riêng, không sửa UI nguồn/kit; layout hoàn thiện/component/prototype/code phải chờ duyệt phương án và đầu ra cụ thể. Không cần xin lại quyền dựng wireframe.
- **Trade-off:** thêm công minh họa/spec trước duyệt để giảm hiểu khác nhau; chưa có dữ liệu để khẳng định tiết kiệm thời gian hay cải thiện tác vụ.
- **Trạng thái màn:** vẫn chưa có UI nguồn hoặc phương án màn/luồng được duyệt.

## Câu hỏi còn mở

| ID | Câu hỏi | Ảnh hưởng nếu chưa biết | Cách xác minh |
| --- | --- | --- | --- |
| Q01 — Đã giải quyết 2026-10-06 | “Duo” nghĩa là gì? | Thiết bị mục tiêu đã được xác định là iPhone Duo của Apple. | Người dùng làm rõ; kiểm tra nguồn Apple trong S03. |
| Q02 | Màn/luồng nào làm đầu tiên và tác vụ nào cần ưu tiên? | Không xác định được cấu trúc thông tin. | Tên màn + ảnh/video hoặc mô tả. |
| Q03 | Phần nào cần giữ, phần nào được thay đổi? | Có thể thiết kế lại ngoài phạm vi. | Người dùng xác nhận phạm vi. |
| Q04 | Cần bàn giao gì, trên thiết bị nào và khi nào? | Khó chọn mức chi tiết và cách kiểm tra. | Người dùng cung cấp đầu ra, thiết bị và deadline. |

## Mẫu ghi quyết định

- **ID / ngày / trạng thái:**
- **Vấn đề và nguồn bằng chứng:**
- **Phương án đã cân nhắc:**
- **Lựa chọn / lý do / người xác nhận:**
- **ID / phiên bản đề xuất và phạm vi được duyệt:** màn/luồng, hành vi, cấu hình, đầu ra và file đích.
- **Bằng chứng user chấp thuận / ngày:** lời xác nhận và nguồn chat; chưa có thì ghi Chờ duyệt, chỉ được làm preview HTML đề xuất theo WF02/WF04, chưa làm layout hoàn thiện.
- **Tech:** tính khả thi, hiệu năng, độ ổn định, bảo mật và chi phí bảo trì liên quan.
- **Business:** tác động kỳ vọng, chi phí, tốc độ bàn giao, rủi ro; đánh dấu giả thuyết chưa đo.
- **Product / UX:** tác vụ người dùng, khả năng khám phá, consistency, accessibility và edge case.
- **Trade-off:** ai được lợi, ai chịu chi phí; tác động ngắn và dài hạn.
- **Điều kiện để lựa chọn đúng / điều gì khiến phải xem lại:**
- **Metric hoặc cách kiểm chứng / baseline nếu có:**
- **Màn, component và tài liệu chịu ảnh hưởng:**

Giữ lịch sử khi thay thế quyết định; dẫn sang quyết định mới và ghi lý do, không xóa mất nguồn cũ.

## WF03 — Xem ảnh ref trước khi làm, đã chấp thuận 2026-10-06

- Nguồn: user yêu cầu thêm vào workflow để AI feel taste/vibe.
- Quyết định: bắt buộc xem ảnh thực và ghi ref/taste/giới hạn trước wireframe/layout. Hướng thị giác cụ thể nằm trong đề xuất màn, không thêm cổng duyệt riêng.
- Trade-off: thêm công tuyển chọn; có thể giảm lệch hướng nhưng chưa có dữ liệu chứng minh. Ref khác domain không thay UI nguồn hoặc spec điều khiển.

## Material Home đầu tiên — 2026-10-06

Đã nhận Home 23887:8097 và Test 24744:5188 trong file mklhEcafiTfj9FoGIUhA0M; đọc context/render Home thành công, đích là section trống. Material cho phép đọc/dựng nháp ở đích; sau đó user duyệt Home-A theo DEMO01. Xem [HOME_DEMO_PROPOSAL.md](HOME_DEMO_PROPOSAL.md). Các dòng chưa nhận UI ở quyết định trước là trạng thái lịch sử, được bổ sung bởi material này.

## DEMO01 — Home-A, được duyệt và hoàn thiện demo 2026-10-06

- **Bằng chứng:** user trong chat xác nhận nguyên văn “Duyệt Home-A, hoàn thiện demo” cho proposal Home-A v0.1 / board 24746:3613.
- **Scope duyệt:** dark theo Home nguồn; Inner landscape chia phòng/nhóm trái và grid đèn phải; Outer portrait xếp dọc, giữ toggle/slider trực tiếp; on/off/offline/pending/lỗi bằng frame/spec phù hợp; không thêm feature/code/prototype hoàn thiện.
- **Kết quả:** board 24751:3613 trong Test 24744:5188; hai màn normal, bảng linked source states và spec pending/lỗi. Chi tiết [HOME_DEMO_HANDOFF.md](HOME_DEMO_HANDOFF.md).
- **Ngoại lệ kỹ thuật kit:** Community tab bar import báo Component key not found; tái dựng chrome theo hình học kit, dùng source icons. Đã báo user; không sửa kit/source, không giả là linked kit instance.
- **Trade-off:** giữ điều khiển nhóm dễ thấy đổi lấy grid hẹp hơn; demo hai cấu hình giúp giới hạn công thiết kế trước review, dev/QA vẫn cần xử lý resize/state. Chưa có bằng chứng tác động usability/retention.
- **Điều kiện / đo:** xác nhận scope nhóm, ACK/capability và camera/system chrome trước production. Sau implementation đo task completion/time/error, lệnh lỗi/trùng và mất state khi resize; chưa có baseline/target.
- **Giới hạn:** approval phương án không chứng minh runtime hoặc user đã nghiệm thu bản final; không xin duyệt lại cùng scope. Các luồng khác cần proposal riêng.


## WF04 — Proposal/wireframe bằng HTML trong Codex, đã yêu cầu 2026-10-06

- **Nguồn:** user yêu cầu “wireframe và hướng đề xuất không được làm trong figma, preview ra một file hmtl đơn giản và nhanh ở trong codex luôn”; hiểu “hmtl” là HTML.
- **Quyết định:** bước 4 bắt buộc file HTML đơn giản và mở preview trong Codex; không dựng/sync proposal/wireframe vào Figma. Đọc source/kit vẫn được phép; Figma dành cho layout hoàn thiện sau duyệt scope.
- **Thay thế:** chỉ phương tiện dựng nháp của WF02; giữ đọc HIG/kit/ref và một điểm duyệt phương án. HTML preview không phải code sản phẩm, không cần xin phép lại.
- **Trade-off/đo:** xem ngay trong Codex, hạn chế công dựng proposal; native fidelity chỉ xấp xỉ, cần đối chiếu kit khi hoàn thiện. Chưa đo lợi ích tốc độ; theo dõi thời gian tạo/mở preview và số vòng sửa do hiểu bố cục.
- **Lịch sử:** wireframe Home-A trong Figma được tạo trước rule mới; giữ để đối chiếu, không áp dụng cách làm này cho proposal tiếp theo.

## WF05 — Reuse component Duo đã setup trong file, đã yêu cầu 2026-10-06

- **Nguồn/người chốt:** user xác nhận đã setup đầy đủ component Duo trong file Figma và yêu cầu “thêm rule đó vào nhé”.
- **Quyết định:** kiểm tra tài nguyên Duo trong file SmartHue trước đề xuất; inventory/mapping có node/main IDs, variants/properties và bindings. Bản hoàn thiện phải dùng linked instances phù hợp; không dựng lại component có sẵn, detach hoặc sửa main component/kit. Gap/fallback phải có bằng chứng cụ thể và báo trước khi dựng thay thế. WF04 và approval hiện có giữ nguyên.
- **Bằng chứng/giới hạn:** user xác nhận local setup; inventory Duo chưa audit trong lượt cập nhật rule. Home-A chrome từng tái dựng do import Community lỗi mà chưa kiểm tra đầy đủ local resources: đây là thiếu sót, không chứng minh local kit vắng mặt. Xem [audit](APPLE_UI_KIT_AUDIT.md).
- **Trade-off/kiểm chứng:** thêm công discovery cho designer, kỳ vọng giảm bản dựng trùng và lệch consistency cho team nhưng chưa đo lợi ích; variants có thể giới hạn flexibility. Kiểm tra main IDs/bindings thực tế, mapping output, component có sẵn bị dựng lại/detach và lỗi variant sau review; chưa có baseline thời gian.
- **Phạm vi lượt này:** sửa docs/workflow/gói v1.4; chưa chỉnh Figma hoặc làm lại demo. Không ghi render Home-A cũ thành đã reuse Duo components.

## DEMO02 — Gen lại Home-A bằng HTML theo WF04/WF05, 2026-10-06

- **Nguồn:** user yêu cầu “gen lại với các rule mới t xem nào”; tiếp tục “tiếp đi”.
- **Thực hiện:** đọc HIG/brief/research/audit/workflow, enumerate file và kiểm tra components Duo local; xem lại ref và render nguồn/kit. Dựng Home-A v2 HTML — `demo-home/home-a-v2.html` (thiếu trong ZIP nguồn; xem MISSING_ASSETS.md) và mở/kiểm tra trong Codex. Không dựng wireframe trong Figma hoặc sửa nguồn/main components.
- **Approval:** cấu trúc Home-A đã được duyệt theo DEMO01; v2 là preview lại trong phạm vi đó, chưa được user review/nghiệm thu. Không xin duyệt lại cùng cấu trúc; thay đổi lớn nếu phát sinh vẫn theo workflow.
- **Tech:** linked components local đã tìm được; mapping nằm ở audit/spec. HTML xấp xỉ kit; phải giữ alias Mode và read-back main IDs khi làm Figma, không suy Colors/Dark local tự điều khiển toàn kit.
- **Business:** giới hạn demo một Home/hai cấu hình, chưa có dữ liệu để dự báo công tiết kiệm hoặc retention. Team chịu công map components và QA native.
- **Product/UX:** giữ điều khiển nhóm và từng đèn cùng màn, chỉnh spacing/hierarchy; rail thu hẹp grid và outer cần cuộn. Offline được diễn đạt bằng nhãn/reconnect thay vì hiểu là Off. Không thêm feature hoặc giả flow của icon phụ.
- **Kiểm chứng:** đã kiểm tra render inner/outer, fit603px và state labels/visibility/disabled trong HTML. Chưa có usability hoặc runtime evidence; task completion/time/error và mất state khi resize cần đo sau implementation, chưa có baseline/target.
- **Bàn giao:** HTML và ảnh preview, raw inventory/geometry và state checks. Chưa tạo bản final Figma mới; render v1 vẫn là lịch sử chưa reuse chrome Duo local.


## DEMO03 — Home-A v2 Figma, dựng theo phương án đã duyệt, 2026-10-06

- **Approval:** user “ổn áp đó, design thử lại vào figma nhé” — duyệt HTML v2 để dựng layout trong Figma; không cần thêm approval trong scope này.
- **Đích:** section Test `24744:5188`; board [24764:3926](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24764-3926); inner [24764:3931](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24764-3931); outer [24764:3951](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24764-3951); states [24770:4253](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24770-4253).
- Reuse linked local Duo chrome and SmartHue light cards; giữ source bindings/variants; 0 unlinked instances.
- **Trade-off:** rail giảm grid ngang và outer cần scroll; đổi lại giữ controls ngoài content. Dev/QA cần map resize/state.
- **Evidence:** render đã xem; 26 target spec frames ≥44 × 44 trong parent bounds. Chỉ kiểm chứng thiết kế; runtime, accessibility và lệnh thiết bị chưa kiểm chứng. Đo task completion/time/error, accidental commands và state continuity; baseline chưa có.
- **Trạng thái:** Figma đã tạo, chờ user tự review; chưa ghi nghiệm thu.

## WF07 — Thứ tự kit → HIG → ref và giới hạn UI mới, đã chốt 2026-10-06

- **Nguồn:** user yêu cầu trong chat.
- **Quyết định:** sau khi hiểu UI nguồn, kiểm tra UI Kit Duo trước, đặc biệt section riêng `Safe Area Insets and Margins` cùng rule/geometry; đọc HIG/rule sau đó; xem ảnh ref cuối để lấy taste/vibe. Không tự thêm/chế element UI ngoài UI gốc hoặc yêu cầu user; element mới cần được trình riêng và user duyệt rõ trước khi đưa vào wireframe/layout.
- **Wireframe:** một file HTML tối giản, dựng nhanh bằng khối/nhãn; không polish hoặc giả lập app hoàn chỉnh.
- **Bằng chứng và giới hạn:** section local đã được audit tại node `24731:15441`; frame geometry trong kit không xác nhận safe area runtime, xem [audit](APPLE_UI_KIT_AUDIT.md). Rule này không duyệt thiết kế màn cụ thể.

## RV02 — Home-A v3, feedback01–03 — 2026-10-07

User annotate tại trang review RV01, yêu cầu “xử lý các feedback này”: inner ngang chia hai vùng bằng nhau, card đèn bớt giãn, spacing/font/radius/padding theo bội số4. Đã sửa trên bản sao [Home-A v3](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24805-6013), inner24805:6014/outer24805:6947; source24803:5700 giữ nguyên. Hai vùng396–396, gutter24; card inner188×208/outer164×208. Custom tokens đã kiểm tra theo4; giữ native kit/artwork intrinsic và ghi rõ ngoại lệ do agent áp dụng, chưa user xác nhận riêng. Không thêm UI. Đây là quyền sửa scope Home-A cụ thể, chưa nghiệm thu kết quả. Chi tiết/evidence: review v3 — `reviews/2026-10-07-home-a-v3/README.md` (thiếu trong ZIP nguồn; xem MISSING_ASSETS.md), render — `reviews/2026-10-07-home-a-v3/frame.png` (thiếu trong ZIP nguồn; xem MISSING_ASSETS.md), read-back — `reviews/2026-10-07-home-a-v3/review.json` (thiếu trong ZIP nguồn; xem MISSING_ASSETS.md), invariants — `reviews/2026-10-07-home-a-v3/invariants.json` (thiếu trong ZIP nguồn; xem MISSING_ASSETS.md). Preview tiếp tục annotate: http://127.0.0.1:8767/after.html ; trang cũ giữ nguyên.

Ref tiếp tục ghi chú REF-02 đã xem trong Home-A. Read-back: 556 token checks có phạm vi không lỗi; 99/99 instances vẫn linked, mains/properties/modes giữ nguồn; text contents giữ nguyên. Native geometry giữ nguyên. Trade-off: vùng grid/card nhỏ hơn làm slider ngắn hơn, cân lại vùng nhóm/phòng; công QA/token mapping bổ sung, không đổi feature. Chưa có dữ liệu usability/ROI; đo task completion/time/mis-tap và kiểm tra native targets, scroll/resize, Dynamic Type, VoiceOver, lệnh đèn trên runtime.
