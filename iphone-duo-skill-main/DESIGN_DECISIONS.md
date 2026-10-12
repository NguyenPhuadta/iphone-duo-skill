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

## OB01 — Onboarding Current Design trên Duo, Outer P + Inner L — 2026-10-08

- **Nguồn/yêu cầu:** user gửi section Onboarding [19508:17060](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=19508-17060), nguyên văn “chỉ C1 + C4 / Và bắt đầu đi làm từ page một / Bắt đầu làm từ màn onboarding / Tách riêng ra 2 phiên bản cho c1 và c4 … / Bắt đầu đi”; trước đó “tôi muốn sửa và create design trong link figma này luôn”. **User yêu cầu làm thẳng trong Figma nên bỏ bước HTML proposal (WF04) cho luồng này**; không phải ngoại lệ chung cho luồng khác.
- **Hiểu nguồn:** page “-> Onboarding” có Current Design (1_changecolor → 2_scenechange → 3_automation → 4_improve=ATT → `segment` 23833:5917), Test V2 và Test V3. Bắt đầu từ Current Design, màn 1 `19508:17069` (393×852). ATT là alert hệ thống — không dựng. Nút `Button` thứ hai ở y862 nằm ngoài frame nguồn → không đưa vào bản Duo. Nhãn “Tap to control Light” bị ảnh che trong nguồn → ẩn ở bản Duo để không lộ thêm element.
- **Đích:** page Onboarding, section Outer P `24851:546`, section Inner L `24851:547` (dưới section Onboarding, y7000/8200). Nguồn không bị sửa.
- **OB-01 Outer P 466×678 `24851:566`:** xếp dọc như nguồn; ảnh phòng 466×280 + fade; card màu/độ sáng y264–496, tiêu đề + Continue y520–658, cột nội dung x20–380 (trong safe-area x382). Rail: linked `Status bar - iPhone Duo / Vertical` 24731:16021 (394,94) + `Outer Display Lens` 24731:15427 (370,0), cùng vị trí Home-A v3.
- **OB-01 Inner L 951×669 `24851:599`:** ảnh trái x0–476 fade đen 296–476; cột phải x488–848 (card → tiêu đề → Continue, căn giữa dọc y152–546). Không control nào qua trục gập x475,5; nội dung trong safe-area x867. Status bar linked (879,24). Không dùng toolbar top vì onboarding nguồn không có title/action.
- **Reuse/grid:** clone frame nguồn giữ Button instance `5:108582`, card/text/style nguồn; mode Colors=Dark copy từ Home-A v3. Số mới: 20/24/32, 360, 264/488… theo bội 4; kích thước intrinsic (button 50, text 18/34/56, card 134/82) giữ nguồn.
- **Rủi ro/mở:** Outer P ảnh chạy dưới rail, status bar đè lên ảnh sáng (cần xem contrast); Inner L cột phải trống phía trên/dưới khi ít nội dung; chưa kiểm chứng Dynamic Type, VoiceOver cho vòng màu/slider demo, camera/safe area runtime. Hành vi demo màu/độ sáng là mô phỏng, không phải lệnh đèn.
- **Trạng thái:** user duyệt hướng màn 1 (“oke làm đi”) → đã dựng đủ luồng Current Design, chờ user review.
- **OB-02 Color Your Mood:** Outer P `24855:564`, Inner L `24855:55835`. Hàng 3 SceneCard (linked `1646:5968`) giữ rộng nguồn 361 (Outer P x20–381, Inner L x488–849).
- **OB-03 Automate Your Lighting:** Outer P `24855:55894`, Inner L `24855:55942`. Nhóm chip automation giữ nguyên, chỉ dời vị trí.
- **OB-04 ATT:** không dựng — alert hệ thống iOS (HIG-19).
- **OB-05 What lights are you using? (`segment` 23833:5917):** Outer P `24856:652` — một cột cuộn như nguồn, frame cao 1768 (viewport thật 678); Inner L `24856:835` — pane trái: ảnh + tiêu đề + Philips Hue (x56–417); pane phải `Right pane / Vertical scroll viewport` (x496–857) chứa Other Device + Other Light cuộn dọc. **Đây là đổi cấu trúc cuộn (một cột → hai vùng), thứ tự nội dung giữ nguyên — cần user xác nhận.** Status bar iPhone của nguồn được thay bằng status bar Duo.
- **Read-back 8 frame:** 0 instance unlinked; không block nội dung nào vượt safe-area (Outer P x382, Inner L x867) hoặc vắt qua trục gập x475,5. Font “SF Pro Text Semibold” trong segment không có trên máy dựng — text giữ nguyên, không sửa.
- **OB-06/07 — Màn đèn không được hỗ trợ (2026-10-08):** user gửi section [20957:5662](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=20957-5662), “Tiếp tục đi”. Nguồn: `Not Support/Matter` 19861:2532 (Wyze Connect Coming Soon → QR Code Matter, Home Explorer) và `Not Support` 19861:2698 (Wyze Light Not Supported → Submit Device Request). Dựng tiếp trong section Outer P/Inner L cũ: OB-06 Outer P `24861:679`, Inner L `24861:56021`; OB-07 Outer P `24861:55976`, Inner L `24861:56086`.
  - Top Bar iPhone (status bar + Back Liquid Glass + title “Find Device” opacity 0 — vốn không hiển thị) được thay bằng rail Duo: status bar dọc + **Back = clone linked `_Buttons - 48pt / Symbol, Vertical` 24731:14807 (mode Dark từ Home-A), property Symbol = 􀯶 của nguồn**; Outer P thêm outer lens. Back ở (394,192) Outer P / (879,122) Inner L, ngay dưới status bar.
  - Outer P: ảnh 466×360, khối nội dung x20 (OB-06 y160–573 + Home Explorer y600–656; OB-07 y168–653). Inner L: ảnh trái 476×669 + layer `Fade to black · decorative` mới (gradient trang trí, không phải UI) để mờ trước trục gập; nội dung phải x488–849, căn giữa dọc.
  - Read-back: 0 unlinked; không vượt safe-area/trục gập. Rủi ro: Back trên rail khác vị trí top-left quen thuộc của iPhone (HIG-02 Duo) — cần user chốt; nhãn accessibility Back cần dev gán.
- **OB Outer L + Inner P (2026-10-08):** user “sau khi xong thì làm nốt c2 c3”. Section Outer L `24867:747` (y9400), Inner P `24867:748` (y10600) trên page Onboarding.
  - Outer L 678×466 (kit `24731:15478`: inset phải x594–678, status bar (606,24), lens (582,370)): OB-01 `24867:749`, OB-02 `24868:783`, OB-03 `24868:56137` — ảnh trái 0–288 fade, nội dung phải x216–576. OB-05 `24868:56264` (678×1768), OB-06 `24868:56628` (678×560), OB-07 `24868:56808` (678×552) — **một cột cuộn x128, frame cao hơn viewport 466 vì nội dung không vừa**; Back trên rail (606,122).
  - Inner P 669×951 (kit `24731:15460`: toolbar top 84, inset dưới 95, reserved region phải-trên): linked `Toolbar - Top - iPhone Duo` 24731:15183 (Show Status Bar + Reserved Region; OB-06/07 thêm Show Leading — Back mặc định của toolbar = 􀯶). Cột nguồn căn giữa x154, dời +20: OB-01 `24867:796`, OB-02 `24868:821`, OB-03 `24868:56185`, OB-05 `24868:56429` (669×1800 cuộn), OB-06 `24868:56697`, OB-07 `24868:56853`.
  - Sửa z-order Outer L OB-02/03 (ảnh che tiêu đề). Read-back 12 frame: 0 unlinked, không vượt safe area. Onboarding Current Design đủ 4 hướng = 24 frame.

## DUO-ALL — Mở rộng Duo cho 6 page, 4 hướng — 2026-10-08

- **Yêu cầu:** “Thực hiện các màn này ở page này … Tương tự như thế phải làm đủ các case từ c1 c2 c3 c4” (Home [Nav], Survey, Voice Control, Demo Experience, Light Control, Settings, Music Sync). User chọn “Mỗi page chọn vài màn chính”, “Dựng lại theo rule mới” cho Light Control, “Theo thứ tự bạn gửi”; duyệt danh sách 33 màn bằng “oke”.
- **Danh sách duyệt:** Home: Home-A (bổ sung Outer L/Inner P), 19513:25484, 25507, 25548, 25577, 25618 · Survey: 23150:8472, 8517, 8660, 8750 · Voice: 19513:90332, 90535, 90513, 90618, 90705, No room · Demo: 19513:32557, 34313, 33456, 35213 · Light: 19749:18297, 19959:2258 (section cũ 24735:1185 giữ lịch sử) · Settings: 22725:6271, 22725:6877, 19513:56349, 56372, 56308 · Music: 22585:4836, 4602, 4751, 4278, 4352, 4796.
- **Ngoài phạm vi đợt này:** Create new room, Add light to existing room, Warnings, Permission Required, Voice Control Work, Tuya variants, widget bước 2–4, Tạm dừng nhạc, Test/For Dev/notes.
- **Nguyên tắc:** tab bar → `Tab Bar - iPhone Duo` dọc trên rail (Outer P/Outer L/Inner L), tab bar ngang đáy theo template (Inner P); sheet giữ là sheet; section Duo riêng trên đúng page.
- **Home [Nav] — xong 2026-10-08.** Section Outer P `24870:4265`, Outer L `24871:4486`, Inner P `24871:57297`, Inner L `24871:58069` (page Home [Nav], x2600). H-02…H-06 × 4 hướng + Home-A v3 Outer L `24872:5159`, Inner P `24872:5302` (Outer P/Inner L = v3 có sẵn `24805:6947`/`24805:6014`).
  - Chrome: bỏ Navigation Bar iPhone/status/+ /tab bar tự vẽ; Outer P/Inner L rail = clone linked từ Home-A (status bar, `Tab Bar - iPhone Duo` số tab theo nguồn — H-05 chỉ 3 tab, nhóm +/•••), icon tab tách từ tab bar nguồn (clone tạm + detach bản clone, không đụng nguồn); Outer L +/••• chuyển lên header (Preferred Axis=Horizontal) vì rail ngang hết chỗ trước camera; Inner P toolbar top Duo + giữ tab bar nổi nguồn ở đáy (Home-A Inner P: linked kit `Tab Bar - iPhone` 4 tab Default 24731:15409, nhãn Home/Music Sync/Voice Control/Automation + icon nguồn).
  - Inner L: trái x56 (header, bộ lọc/điều khiển nhóm, banner), phải x488 (lưới đèn / empty state / panel Add / Other Device). H-05 giữ lớp phủ tối trên rail như nguồn. H-06 Outer L cuộn (678×636).
  - Read-back 22 frame: 0 unlinked, không vượt safe area/trục gập.
- **Survey — xong 2026-10-08.** Page Home [Nav], section Outer P `24873:5499`, Outer L `24873:5796`, Inner P `24873:6093`, Inner L `24873:6538` (x5600, y10696–14100). SV-01…04 × 4 hướng = 16 frame. Sheet theo bounds kit `iPhone Duo/Sheets` (safe-area guide §3): Outer P (8,·,450) trailing inset 76; Outer L (8,8,662,458) inset 76, nội dung dồn vào chiều cao 458; Inner P (8,·,653); Inner L (149,·,653). Chiều cao giữ 532 của nguồn (detent large) trừ Outer L. Lớp phủ dim cả status bar Duo như nguồn. Read-back: 0 unlinked, nội dung nằm trong safe area của sheet.
- **Voice Control — xong 2026-10-08.** Page Voice Control, section Outer P `24876:3764`, Outer L `24877:3090`, Inner P `24877:58649`, Inner L `24877:59446` (x2000, y−17600…−11600). VC-01 intro `19513:90332`, VC-02 type `90535`, VC-03 phrase `90513`, VC-04 list `90618`, VC-05 list + action sheet `90705`, VC-06 No room `89277` × 4 hướng = 24 frame.
  - Rail: tab bar Duo 4 tab (Sync ẩn trong nguồn → bỏ), tab Voice Control selected; Close (􀆄) / Back (􀯶) / Add (􀅼) = clone linked `_Buttons - 48pt Symbol`; Outer L nút Add lên header. Inner P: toolbar top Duo (Leading Back / Trailing Close — ẩn 2 nút thừa trong button group mặc định của slot), tab bar nổi nguồn ở đáy.
  - Inner L: VC-01 ảnh trái/chữ phải; VC-02 tách “Coming Soon” sang pane phải; VC-04/05 thẻ 1–2 trái, thẻ 3 phải; action sheet ở pane phải. VC-02 Outer L cuộn (678×648). VC-06 sheet theo bounds kit, Outer P/Outer L paddingRight 76.
  - Read-back 24 frame: 0 unlinked, không vượt safe area/trục gập.
- **Demo Experience — xong 2026-10-08.** Page Demo Experience, section Outer P `24879:1061`, Outer L `24880:1224`, Inner P `24881:1551`, Inner L `24880:6178` (x800). DE-01 `19513:32557`, DE-02 `34313`, DE-03 `33456`, DE-04 `35213` × 4 hướng = 16 frame.
  - Back (􀯶) + Next/Done = linked `_Buttons - 48pt` (Type=Symbol / Type=Text, Label = chữ nguồn) trên rail; Inner P toolbar Leading Back + trailing group đổi sang Type=Text.
  - Outer P/Inner P: ảnh trên, nhãn + danh sách cuộn ngang + banner khuyến mãi dưới; Inner P nới danh sách cuộn ngang ra 629 (thấy 4 thẻ). Outer L/Inner L: ảnh trái trong frame `Hero · clip to left pane` + fade, nội dung phải. Danh sách ngang bật clip (nguồn không clip → tràn vào rail).
  - Banner “Limited Offer” giữ nguyên (không thêm/bớt paywall). Read-back 16 frame: 0 unlinked, không vượt safe area/trục gập.
- **Light Control — dựng lại theo rule v1.9, 2026-10-08.** Page Light Control, section Outer P `24882:1433`, Outer L `24882:1703`, Inner P `24882:1970`, Inner L `24882:2314` (x9500). LC-01 Color `19749:18297`, LC-02 White `19959:2258` × 4 hướng = 8 frame. Section cũ P-LIGHT-01 `24735:1185` giữ làm lịch sử, không còn là bản hiện hành.
  - Top Bar iPhone → Back trên rail (Outer P/Outer L/Inner L) / toolbar Leading (Inner P). Widget ẩn ngoài frame nguồn bỏ.
  - Outer P xếp dọc; Outer L một cột cuộn 678×600 (không đổi hướng cuộn LIGHTS như bản cũ); Inner P khối điều khiển giữ kích thước, dải LIGHTS nới 629; Inner L điều khiển trái x56, LIGHTS phải x488. Dải LIGHTS bật clip.
  - Read-back 8 frame: 0 unlinked, không vượt safe area/trục gập.
- **Settings — xong 2026-10-08.** Page Settings, section Outer P `24884:1061`, Outer L `24885:736`, Inner P `24885:1350`, Inner L `24885:2130` (x4500). ST-01 Settings `22725:6271`, ST-02 widget sheet `22725:6877`, ST-03 Tuya Profile `19513:56349`, ST-04 Alert `19513:56372`, ST-05 My Device `19513:56308` × 4 hướng = 20 frame.
  - Top Bar nguồn → tiêu đề text (clone style Home-A) + rail: More (􀍠) cho Settings, Back (􀯶) cho Profile/Device; Inner P toolbar Leading Back / trailing group đổi Type=Symbol 􀍠.
  - ST-01 cuộn ở Outer P/Outer L/Inner P; Inner L chia: banner + 2 nhóm đầu trái, 4 nhóm còn lại phải (cuộn). ST-02 sheet theo bounds kit, Outer L giảm itemSpacing 28→20 để vừa 458. ST-04 alert hệ thống căn giữa vùng an toàn (Inner L căn giữa màn — iOS vẽ, cần kiểm chứng runtime). ST-05 Outer L đổi sang một cột cuộn (678×628) vì 2 cột chồng nhau; Inner L ảnh trái, thông tin + Remove phải.
  - Read-back 20 frame: 0 unlinked, không vượt safe area/trục gập, không chồng lấn.
- **Music Sync — xong 2026-10-08.** Page Music Sync, section Outer P `24886:753`, Outer L `24887:914`, Inner P `24887:60506`, Inner L `24887:61243` (x3400). MS-01 `22585:4836`, MS-02 sheet đèn `4602`, MS-03 sheet bài `4751`, MS-04 đang phát `4278`, MS-05 sheet màu `4352`, MS-06 không có đèn `4796` × 4 hướng = 24 frame.
  - Tab bar Duo 4 tab (Sync ẩn trong nguồn), Music Sync selected. Nút Settings nguồn là icon vector → trên rail dùng SF `􀍟` (gearshape) qua `_Buttons - 48pt` — **thay biểu tượng, cần user xác nhận**; Tracklist `􀑬` giữ glyph nguồn. Outer L: action lên header; Inner P: toolbar trailing (Symbol / Button Group 2 nút).
  - Sheet theo bounds kit; Outer L sheet đèn/bài cao 567 > 458 → BG clip 458, nội dung cuộn trong sheet. Inner L MS-04: khối player trái, Lights/Color phải; MS-01 ảnh trái (clip + fade). MS-04 Outer L cuộn (678×558).
  - Read-back 24 frame: 0 unlinked, không vượt safe area/trục gập, không chồng lấn.
- **Tổng DUO-ALL (2026-10-08):** 33 màn × 4 hướng → 130 frame mới (Home-A Outer P/Inner L dùng v3 có sẵn) + Onboarding 24 frame. Chưa kiểm chứng runtime: Dynamic Type, VoiceOver (nhãn cho nút symbol trên rail), resize/continuity, camera/safe area thật, gập một phần. Ngoài phạm vi: xem mục DUO-ALL.

## POLISH-01 — Chuẩn hóa toàn bộ frame Duo theo kit/HIG — 2026-10-08

- **Yêu cầu:** “Giao diện chưa được chuẩn lắm. Cần follow up sát với HIG và làm nó đẹp lên cũng như bố cục cân chỉnh chuẩn hơn. Sửa lại đi.”
- **Chuẩn đối chiếu:** kit Examples/Toolbars `24731:17082`, Examples/Tab Bars `24731:17179`, templates `24731:15493/15478/15442/15460`; HIG-02 (bars cạnh bên, navigation → action → overflow), HIG-01/04 (margin, safe area, fold), vertical-bars guide.
- **Thay đổi áp dụng cho mọi section Duo (Onboarding, Home, Survey, Voice, Demo, Light, Settings, Music):**
  1. Rail Outer P/Outer L/Inner L dựng lại đúng cấu trúc kit: frame `Duo / Vertical Bar (kit structure)` auto-layout 84 (padding 24/24/24/12, gap 8), nhóm `Top` (status bar → Back/Close → actions, gap 12) và `Bottom` (tab bar neo đáy); `Camera Punchout` 48×42 ở đầu (Outer P) / cuối (Outer L); Outer L ẩn status bar như kit outer landscape. Icon tab nguồn phủ đúng tâm từng slot.
  2. Tiêu đề màn = linked `Toolbar - Top - iPhone Duo` (Outer P/Inner P Large Title 126; Outer L/Inner L Compact Large 84; Show Reserved Region ở Outer P/Outer L/Inner L) thay text tự đặt. Inner P: action vào slot Trailing (Home +/•••, Home-A +/•••/Hex, Voice +), tab bar nổi nguồn → linked `Tab Bar - iPhone` (Default, nhãn + icon nguồn, tab đúng trang selected).
  3. Nhịp dọc: nội dung bắt đầu 136 (Large Title) / 96 (Compact Large); Inner L căn đỉnh từng pane, empty state căn giữa pane/vùng nội dung. Lề trái thống nhất 20 với tiêu đề (Outer P/Outer L/Inner P), Inner L pane trái 20 / pane phải 488. Không kéo giãn khối (hàng nội bộ fixed width).
  4. Z-order: lớp dim/sheet/alert/action sheet trên rail như nguồn; camera lens luôn trên cùng. Màn hero (VC-01, MS-01, Onboarding, Demo) giữ bố cục ảnh, chỉ đổi chrome.
- **Home-A v3 Outer P/Inner L:** clone bản chuẩn hóa vào section Duo Home (`24917:8309`, `24917:8620`); gốc v3 giữ nguyên. Inner L vẫn theo hai vùng 396/396 đã duyệt nên pane lưới đèn bắt đầu x≈440 (qua trục gập 475,5) — cần user quyết nếu muốn thu pane.
- **Read-back 156 frame:** 0 unlinked; mọi frame Outer P/Outer L/Inner L có rail kit; không nội dung nằm dưới rail; Inner P trong 20–649; Inner L không khối nào qua trục gập (trừ Home-A Inner L như trên).

## AUDIT-01 — Tự đối chiếu rule Duo, vấn đề mở — 2026-10-09

- **Nguồn:** user “Đọc lại các rule của iphone dou trong folder”; sau đó “đóng lại các vấn đề này và làm trong session mới”. Trạng thái: **Phần lớn đã xử lý ở FIX-01 (2026-10-09)** — mục còn mở xem cuối FIX-01. Đính chính: tuyên bố “read-back 156 frame đạt” trong POLISH-01 không đúng (bộ kiểm tra bỏ sót khối bị trôi).
- **Lỗi geometry đã xác minh:** OB-02 Outer P `24855:564` khối `Frame 1410093592` x=63 (rộng 360 → tới 423, lấn rail inset x382; đúng là x20); OB-05 Outer L `24868:56264` `Frame 2147225227` x=159 (đúng 128). Nguyên nhân nghi: constraints `CENTER` của khối nội dung → cần quét toàn bộ section Duo và đặt constraints LEFT/TOP.
- **Lệch rule:** (1) WORKFLOW bước 5–6 — không có HTML proposal + duyệt bố cục cho 33 màn (DUO-ALL chỉ duyệt danh sách màn) và POLISH-01 (đổi tiêu đề → toolbar kit, tab bar Inner P → kit, chia lại pane Inner L); (2) WF03/bước 4 — chưa xem ảnh ref DUO_APP_REFERENCES; (3) WF07 — vị trí top-level lệch bội 4: Home+Survey 39/97, Onboarding 21/40, Voice 19/53 (Music/Settings/Demo/Light chưa đo); log OB01 ghi “theo bội 4” là sai; (4) thêm layer `Fade to black · decorative`, đổi icon Settings Music Sync (vector → SF 􀍟) và Close VC-02 (􀁡 → 􀆄); (5) WF05 — icon tab = bản sao từ clone+detach tab bar nguồn (unlinked); (6) vertical-bars — Hex Home-A Outer L đưa lên header thay vì overflow; (7) chưa cập nhật SCREEN_SPECS, APPLE_UI_KIT_AUDIT, MANIFEST; (8) Home-A Inner L clone `24917:8620` 396/396 vẫn qua trục gập, chưa có phương án.
- **Quyết định chờ user:** duyệt bù bố cục (xem Figma hay HTML cho phần đổi); trả icon nguồn; giữ/bỏ fade; Hex → overflow; Home-A Inner L thu pane ~368.
- **Tạm dừng:** bàn giao accessibility (/handoff) — làm sau khi sửa xong.

## FIX-01 — Quyết định user cho AUDIT-01 — 2026-10-09

- **Nguồn:** user trả lời đề xuất AUDIT-01 trong chat 2026-10-09, kết bằng “Sửa lại ccaasu trúc đi” (hiểu là “Sửa lại cấu trúc đi”).
- **Đã chốt:**
  1. Trả icon nguồn: Settings của Music Sync (bỏ SF 􀍟) và Close VC-02 (về 􀁡).
  2. Giữ layer `Fade to black · decorative` ở Onboarding Inner L (user duyệt rõ).
  3. Sửa kỹ thuật không cần duyệt: khối trôi, constraints `CENTER` → LEFT/TOP, vị trí top-level theo bội 4; chạy lại script kiểm tra sau khi sửa.
  4. Duyệt bù bố cục: user xem trực tiếp trong Figma, không làm HTML cho phần duyệt bù này (ngoại lệ WF04 chỉ cho AUDIT-01).
  5. Home-A Inner L clone `24917:8620`: thu pane còn ~368 để không vắt qua trục gập x475,5.
- **Chưa chốt:** Hex Home-A Outer L → overflow (user chưa trả lời) — giữ nguyên, không sửa.
- **OB-06 Inner L (bổ sung, 2026-10-09):** script phát hiện `24861:56021` có bố cục khác log (ảnh tràn 951, thêm fade `24954:4186`, nội dung `24954:4187` x295–656 vắt trục gập); nguồn gốc các node `24954:*` không có trong log. User chọn “Về bản đã log”.

### FIX-01 — Kết quả thực hiện, 2026-10-09

- **Công cụ:** script chỉ đọc [duo-checker](references/scripts/duo-checker.js) đo khung thật từng khối (cắt theo clip), không dựa tên layer; chạy song song 7 page Duo, 156 frame. Lần đầu bắt thêm lỗi AUDIT-01 bỏ sót: OB-03 Outer P tràn rail (47–407, 186–404), OB-07 Outer L trôi x159, OB-06 Inner L vắt trục gập.
- **Đã sửa trong Figma:**
  - Khối trôi: OB-02 Outer P `24855:571`/`24855:583` x→20; OB-03 Outer P `24855:55901` x→20, `24855:55909` x→24; OB-05 Outer L `24868:56271` và OB-07 Outer L `24868:56818` x→128.
  - Constraints CENTER/SCALE → MIN (LEFT/TOP) cho 408 node (con trực tiếp của frame và frame con không auto-layout); MAX/STRETCH giữ nguyên.
  - Bội 4: 95 khối nội dung top-level làm tròn x/y về bội 4 gần nhất (cột Inner P 154 → 156; Demo Outer P nhãn 314 → 316, Room 566 → 568); 124 frame xếp lại trong section x = 120 + i·(ceil4(w)+120), y 200; 14 section dời ≤3px. Không phát sinh chồng lấn mới. Home Inner P ProButton (3 frame) đặt x568 để không vượt mép 649 sau làm tròn.
  - Không đổi: chrome kit, sheet/alert/action sheet/overlay theo bounds kit (x2/8/143/149…), vị trí nội bộ của component/nguồn (text banner, glyph trong icon).
  - Close VC-02 (4 cấu hình): property Symbol 􀆄 → 􀁡 (U+100061, đúng glyph nguồn `19513:90535`).
  - Settings Music Sync (MS-01/04/06 × 4 hướng = 12 nút): ẩn text Symbol trong nút `_Buttons - 48pt` (override visible), đặt linked instance component nguồn `Frame` `22514:8730` (bánh răng 24×24) vào giữa nút, tên `Source icon / Settings (linked 22514:8730)`. Nút giữ linked; màu hồng của nút là glass ăn màu ảnh nền, có từ trước.
  - Home-A Inner L `24917:8620`: hai pane 368/368 — trái x20–388, phải x488–856 (qua trục gập trống); card đèn 176×208, gap 16; vùng chạm toggle x100, brightness 152; nút mũi tên banner MAX; ảnh PRO dời −28; hit region toggle nhóm x284.
  - OB-06 Inner L `24861:56021`: ảnh 476×669, fade `24861:56066` x296, Ellipse lên trên fade như OB-07, nội dung `24954:4187` (đổi tên `Content · right pane`) x488 y84; xóa fade thừa `24954:4186`.
- **Kiểm chứng sau sửa (duo-checker v3, 156 frame):** 0 khối nội dung vượt safe area/trục gập, 0 constraints CENTER/SCALE top-level, 0 instance unlinked, 0 vị trí frame/section/khối top-level lệch bội 4. Ảnh đã xem: OB-02/03 Outer P, OB-06 Inner L, OB-07 Outer L, VC-02 Outer P, Home-A Inner L, Home H-02 Inner P, Music MS-01 Outer P/Inner P. Đây là kiểm chứng hình học trong Figma; không chứng minh Dynamic Type, VoiceOver, resize hay runtime.
- **Còn mở:**
  1. Duyệt bù bố cục DUO-ALL + POLISH-01: user xem trong Figma (FIX-01 mục 4) — chưa ghi duyệt.
  2. WF03: chưa xem ảnh ref DUO_APP_REFERENCES cho các màn đã dựng.
  3. WF05: icon tab `Source destination icon / …` vẫn là bản sao detach (FRAME), chưa thay bằng linked instance.
  4. Hex Home-A Outer L → overflow: user chưa quyết.
  5. Docs: SCREEN_SPECS, APPLE_UI_KIT_AUDIT chưa cập nhật theo các màn Duo.
  6. /handoff accessibility vẫn tạm dừng đến khi xong mục 1.

## P-BRIDGE-AUTO-01 — Đề xuất Duo cho luồng Bridge + Automation mới — 2026-10-09 — Chờ duyệt

- **Nguồn/yêu cầu:** user “Làm tiếp ở các luồng … Bridge này” (section `21203:21243`, page Connect Light) và “Đây nữa” (section `19486:78372` “Luồng Automation mới”, page Automation [Nav]).
- **Quy trình:** theo WORKFLOW bước 1–5. Ngoại lệ làm thẳng Figma của OB01 không áp dụng cho luồng này. Đã đọc nguồn và sticky note, kit theo POLISH-01, HIG-02/04/05/15/16/17/19, guide dual-pane. Đã xem ảnh ref REF-01 Detail và REF-02 Mail inner (2026-10-09; lần đầu thực hiện bước WF03).
- **Đề xuất:** [proposals/P-BRIDGE-AUTO-01.html](proposals/P-BRIDGE-AUTO-01.html). BR-01…06 + AU-01…07, 16 màn/trạng thái × 4 hướng = 64 frame. Màn hero/companion: Outer L/Inner L đặt ảnh trái, chữ và nút phải. Màn lỗi: minh hoạ trái, chữ và Try Again phải. AU-03 tách nhóm thiết bị trái/phòng phải. AU-06 giữ một cột (phương án A). Không dựng prompt Local Network, khung hoạt ảnh, dropdown hệ thống.
- **Chờ user:** phạm vi 64 frame; AU-06 A hay list-detail B; BR-04 paywall hero hai vùng; AU-05 sheet + wheel hệ thống. Chưa dựng Figma.

## WF08 — Bỏ bước HTML, duyệt trực tiếp trong Figma — 2026-10-09

- **Nguồn:** user “khôgn cần làm html đâu tôi sẽ duyệt và sửa trong figma luôn” (chat 2026-10-09, kèm ảnh section Settings).
- **Quyết định:** thay WF04 cho các luồng từ nay: không dựng HTML proposal. Agent vẫn làm bước 1–4 (nguồn → kit → HIG → ref), rồi dựng thẳng trong Figma vào section Duo riêng. User duyệt và tự sửa trong Figma. Thay đổi lớn về điều hướng hoặc element mới vẫn phải nêu rõ trong tin nhắn bàn giao để user quyết. Không tự thêm UI ngoài nguồn.
- **Hệ quả:** P-BRIDGE-AUTO-01 HTML giữ làm tham chiếu geometry, không chờ duyệt HTML nữa. Các câu hỏi phạm vi/AU-06/BR-04/AU-05 chuyển thành mặc định theo đề xuất khi dựng, user sửa trong Figma.
- **Trade-off:** nhanh hơn, user thấy fidelity thật; đổi lại công dựng lại nếu hướng sai, nên vẫn kiểm bằng duo-checker và ảnh trước khi bàn giao.

## SET-01 — Chuẩn hoá Duo Settings — 2026-10-09

- **Nguồn:** user “Sửa lại phần settings cho chuẩn đi” + ảnh 4 section Settings.
- **Phát hiện:** Outer L/Inner P list/form/thẻ thông tin chỉ rộng 361 (vùng dùng được 574/629) → nửa phải trống; Inner L pane trái 361 ≠ pane phải; Inner P Tuya Profile/My Device: Leading toolbar là glyph placeholder kit U+1004D4 thay vì Back 􀯶 (U+100BF6); Outer P My Device: nút Remove y640–688 tràn đáy frame 678. Kiểm sheet ST-02 Outer P/Outer L ở độ phân giải đầy đủ: nội dung trong safe area của sheet (Outer P ≤ x370) — không lỗi.
- **Đã sửa:**
  - List Settings: Outer L `24885:739` 572, Inner P `24885:1353` 628, Inner L `24885:2133`/`24885:2456` 368 (x20 / x488). Nhóm con chuyển FILL; hàng không auto-layout nới khối chữ/chevron theo Δ.
  - Banner Pro (group ảnh): nới viền/nền/mask, dời kim cương sang phải; rộng = list − 16 (Outer L 556, Inner P 612, Inner L 352), x28; Outer P giữ 345 nguồn.
  - Form Tuya: Outer L 572, Inner P 628, Inner L 368. My Device: thẻ Information Outer L 572 / Inner P 628 / Inner L 368; ảnh và Remove căn giữa cột (bội 4). Outer P: ảnh y136, Information y396, Remove y612 (kết thúc 660).
  - Back Inner P ST-03 `I24885:1901;…`, ST-05 `I24885:2073;…` → 􀯶. Nút Trailing trong sheet ST-02 giữ glyph kit như Outer P.
- **Kiểm chứng:** duo-checker (thêm phép đo khối top-level tràn đáy frame) trên 20 frame Settings: 0 lỗi, 0 unlinked; ảnh đã xem Outer P ST-05, Outer L ST-01/03/05, Inner P ST-01/03/05, Inner L ST-01. Outer P list giữ 361 (rộng nguồn) — ngoại lệ grid 4 đã có từ trước.

## BRIDGE-01 — Dựng Duo luồng Bridge trong Figma (WF08) — 2026-10-09

- **Nguồn:** user hỏi “cái này làm chưa” với section Bridge `21203:21243`. Trả lời: chưa dựng. Dựng thẳng trong Figma theo WF08, layout theo P-BRIDGE-AUTO-01 (phần Bridge). User duyệt và sửa trong Figma.
- **Đích:** page Connect Light. Section `Duo C1 · 466×678 — Bridge` `25010:2901` (x20000 y5112), Outer L `25012:2979` (y6312), Inner P `25012:55434` (y7300), Inner L `25012:55063` (y8772). Mỗi section 7 frame: BR-01 Scan, BR-02a Press The Button (chờ bấm, nguồn `21188:20284`), BR-02b (vòng sáng, `21188:20300`), BR-03 Connect Successfully, BR-04 paywall, BR-05 No Device Found (`21203:21142`), BR-06 Connection Timed Out (`21203:21244`). Tổng 28 frame.
- **Cách dựng:** clone frame nguồn, bỏ status bar, home indicator, Top Bar, Navigation Bar iPhone. Chrome lấy từ Onboarding đã chuẩn hoá: rail + lens (Outer P/Outer L/Inner L), toolbar Duo (Inner P). Paywall: nút rail Back đổi Symbol → Close 􀁡 (U+100061, glyph nguồn); Inner P toolbar clone VC-02 (Show Leading=false, Style=Title, Close ở trailing). Giữ ảnh, text, nút nguồn.
- **Bố cục:**
  - Outer P/Inner P: một cột (Outer P x20 w360; Inner P x156 w360).
  - Outer L: ảnh trái, chữ + nút phải x216 w360. Riêng BR-02 chữ x296 w280 vì ảnh Bridge rộng. Màn lỗi: minh hoạ trái, chữ + Try Again x272 w304.
  - Inner L: ảnh/minh hoạ ở pane trái, chữ + nút ở pane phải x488 w368. Không khối nào qua trục gập.
  - Ảnh nguồn thu nhỏ đều (rescale) khi cần: Outer L Scan 0,48, Outer L Press 0,72, Inner L Scan 0,8. Không thêm fade hay element mới.
  - BR-03: Component 12 resize không constraints (tránh méo). Group Bridge xoay 150° đặt theo bounding box thật.
- **Không dựng:** prompt Local Network (system), khung zoom `21188:20310`. Khung chữ opacity 0 trong BR-03 (lớp hoạt ảnh nguồn) giữ nguyên.
- **Kiểm chứng:** duo-checker 28 frame: 0 lỗi sau sửa (nút Outer P y600; khung opacity 0 Outer L dời vào frame); 0 unlinked; đã xem ảnh từng frame. Chưa kiểm Dynamic Type, VoiceOver, hoạt ảnh/timeout thật.
- **Còn mở:** luồng Automation mới (`19486:78372`) chưa dựng.
- **Bổ sung 2026-10-09:** 28 frame Bridge thiếu mode biến Dark ở cấp frame, làm toolbar Inner P render Light. Đã chép `explicitVariableModes` (3 collection Colors=Dark) từ frame Duo mẫu VC-04 sang toàn bộ.

## AUTO-01 — Dựng Duo luồng Automation mới trong Figma (WF08) — 2026-10-09

- **Nguồn:** user “Làm luồng automation này đi” (section `19486:78372`, page Automation [Nav]). Dựng theo mặc định P-BRIDGE-AUTO-01: danh sách một cột (A), sheet chọn giờ theo kit, dropdown hành động là hệ thống (chỉ spec).
- **Đích:** page Automation [Nav], section `Duo C1 … — Automation mới` `25025:1424` (x−2844 y−2800), Outer L `25027:1756` (y−1600), Inner P `25027:62682` (y−540), Inner L `25027:64147` (y932). Mỗi section 9 frame:
  - AU-01 lần đầu `19486:78550` (khung đồng hồ 08:00; 3 khung 07:57–07:59 là hoạt ảnh, không dựng);
  - AU-02 menu Add `78609`; AU-03 Add light to room `79750`;
  - AU-04a/b/c màn chỉnh (mặc định `78657`, On `78966`, Off `79111`); AU-05 sheet chọn giờ `79256`;
  - AU-06 danh sách `79446`; AU-07 màn chips `79507`.
  - Tổng 36 frame.
- **Chrome:**
  - Tab bar 4 tab nguồn (Home / Voice Control / Automations / Settings) clone từ VC-04 Duo, chuyển tab chọn sang Automations, đổi màu icon overlay tương ứng. Icon tab vẫn là bản sao detach như Voice — mục mở AUDIT-01.
  - Nút “+” nguồn → rail Add (Outer P/Outer L/Inner L) / toolbar trailing (Inner P), glyph U+10017C. Back → rail / toolbar leading U+100BF6.
  - Toolbar Duo có tiêu đề “Automations” / “Add light to room”. AU-01/02 không có tiêu đề (như nguồn).
  - AU-02/06 bỏ tab bar vì nguồn không có.
- **Bố cục:**
  - Outer P/Inner P: một cột. Outer L/Inner L: ảnh hero (clip pane trái 288 / 472) + chữ/điều khiển phải.
  - AU-02 menu đặt trong pane phải (Outer L/Inner L).
  - AU-03: 2 cột (Outer P), 3 cột (Outer L/Inner P); Inner L nhóm Available trái, phòng phải (frame `List · rooms (pane phải)`); fade cuộn ẩn ở Inner L vì không có overflow.
  - AU-05 sheet theo bounds kit (Outer P x8 w450, Outer L 8/662, Inner P 8/653, Inner L 149/653) neo đáy.
  - AU-06 card `Automation/Card` giữ 361 (kéo rộng làm nền gradient không giãn).
  - AU-07 nền gradient nguồn phóng theo chiều rộng màn.
  - Mọi frame đặt mode Dark như frame Duo mẫu.
- **Kiểm chứng:** duo-checker 36 frame: 0 unlinked, 0 CENTER. Còn lại là ảnh hero tràn viền chứa dải đồng hồ (AU-01/02), chấp nhận như hero Onboarding. Sheet Inner L qua trục gập theo kit (system container). Đã xem ảnh từng cấu hình.
- **Chưa kiểm chứng:** Dynamic Type, VoiceOver, hoạt ảnh đồng hồ, dropdown/time picker hệ thống thực tế.

## SRC-PDF-01 — Nguồn PDF iOS 27 Duo kit — 2026-10-12 — Đã chốt (xem “SRC-PDF-01 — Kết quả chốt” bên dưới)

- **Nguồn:** user đặt file `iPhone Duo × iOS 27 — UI kit & reference.pdf` cạnh gói, yêu cầu “xem trong folder iphone-duo-skill-main còn thiếu gì so với pdf” rồi “cập nhật các nội dung mới đó vào folder”. Tóm tắt: [ios27-duo-kit](references/guides/ios27-duo-kit.md), [liquid-glass-a11y](references/guides/liquid-glass-a11y.md).
- **Đã nhập làm rule (không mâu thuẫn):** HIG-21…25 (Liquid Glass chỉ lớp control, không chồng glass, bo góc đồng tâm, capsule/50/44/28–34, type scale iOS 27, list row 44/60, nhịp dọc 24–32 / 8–12, contrast 4.5/3/3/3, không dùng màu làm tín hiệu duy nhất, kiểm Dark/IC/Reduce Transparency/Smart Invert/Dynamic Type), size class A1, Split View A7, continuity A10, map component thư viện Apple, quy tắc set cả hai collection màu.
- **Mâu thuẫn, chờ user chốt:**

| ID | PDF | Skill hiện tại | Phương án |
| --- | --- | --- | --- |
| M1 | Inner point thật 626 × 890 / 890 × 626, crease 445 | Artboard 669 × 951 / 951 × 669, trục 475,5 (≈ × 1,0685, cùng 460 ppi) | (a) Giữ artboard 951, ghi hệ số K khi bàn giao dev — không dựng lại; (b) chuyển sang 890 × 626 — dựng lại ~78 frame Inner P/Inner L và sửa checker. |
| M2 | Keep-out 24 pt (±12) quanh crease cả khi phẳng; không CTA chính tâm crease | Flat không có dải cấm; checker chỉ bắt khối vắt qua x 475,5 ở Inner L | (a) Áp keep-out cho Inner P/Inner L → rà Home-A Inner L và màn có CTA giữa; (b) giữ rule cũ, coi keep-out là khuyến nghị. |
| M3 | Rail 73 outer / 75 inner, nút rail cách 12; margin 16 outer / 20 inner | Inset 84, gap 8 trong cụm; margin 20 cả outer | (a) Giữ 84/20 (outer vẫn khớp mép x382); (b) chuyển theo PDF — đổi rail và margin outer toàn bộ frame. |

- **Tạm thời đến khi chốt:** frame hiện có và duo-checker giữ geometry safe-area v2; checker v4 thêm `warnings` CREASE (Inner P theo y, Inner L theo x, ±12 pt × K) không tính vào `issues`; dựng mới tránh đặt control/CTA chính trong dải keep-out. Không áp HIG-21…25 hồi tố lên 156 frame khi chưa có yêu cầu; dùng làm tiêu chí review.
- **Không nhập:** chuyển tab bar Inner L sang sidebar (đổi điều hướng, cần duyệt riêng); collection Increased Contrast mới trong file SmartHue; số camera/góc màn PDF thay reserved region của kit local.
- **Trade-off:** Tech — chuyển point thật đúng cho export @3x và số dev, nhưng tốn công dựng lại và đổi checker; giữ artboard rẻ hơn nhưng phải quy đổi khi bàn giao. Product/UX — keep-out giảm rủi ro chạm nhầm ở crease khi gập một phần, đổi lại mất ~24 pt ở giữa màn trong. Business — chưa có dữ liệu usability để định lượng.
- **Kiểm chứng:** PDF là kit bên thứ ba có nhãn; mục Unpublished cần xem lại khi Apple công bố số Duo. Không chạy lại checker trên Figma trong lượt cập nhật tài liệu này.

## WF09 — Nguồn component duy nhất: section Ios27 trong file SmartHue — 2026-10-12

- **Nguồn:** user: “Các comp có trong https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/SmartHue---HuyHL-PhuNH?node-id=24730-17902 … Của smarthue / Skill này là để lấy cho smarthue nên comp trong này thôi / Không cần lấy ngoài”.
- **Quyết định:** component hệ thống/Duo (rail, toolbar, tab bar, button, sheet, toggle, slider, list, keyboard, status, camera…) chỉ lấy từ section Ios27 `24730:17902`. Component app SmartHue trong màn nguồn giữ nguyên như nguồn. Không import từ thư viện Apple iOS 27, file Community hay bảng library wiring của PDF.
- **Thay thế:** câu “Community là nguồn đối chiếu hoặc bổ sung phần thiếu” trong WF05/APPLE_UI_KIT_AUDIT/DESIGN_BRIEF. Bảng library wiring trong [liquid-glass-a11y](references/guides/liquid-glass-a11y.md) chỉ còn giá trị tham khảo vai trò.
- **Thiếu component:** ghi vai trò, phạm vi đã tìm trong section, và hỏi user; không fallback sang nguồn ngoài.
- **Liên quan SRC-PDF-01:** rail giữ instance `Vertical Bar` 84 của section này (Câu 3 grill) — nhất quán với WF09.

## SRC-PDF-01 — Kết quả chốt qua grill 13 câu — 2026-10-12

User trả lời từng câu trong chat (theo đề xuất ở mọi câu). Mục “Tạm thời đến khi chốt” ở trên hết hiệu lực.

**Tên hướng màn.** Outer P (466 × 678), Outer L (678 × 466), Inner P, Inner L — thay mã C1/C2/C3/C4. Section Figma đã dựng vẫn tên `Duo C1…C4` cho đến khi đổi tên lúc chuyển đổi.

**Hệ tọa độ.**
- Inner P dựng ở 626 × 890 pt và Inner L ở 890 × 626 pt (point thật, crease tại 445). Outer giữ 466 × 678 / 678 × 466.
- Trước khi sửa frame, xác minh 890 × 626 với nguồn chính thức của Apple (thông số kỹ thuật hoặc HIG Duo).
- Chuyển đổi bằng cách sửa tại chỗ: resize frame, dời khối theo khung mới, đổi tên section sang `Duo Inner P/L …`, `Duo Outer P/L …`; giữ node ID để link trong log còn đúng. Trước khi sửa, đặt bản lưu “trước SRC-PDF-01” trong version history của Figma.

**Keep-out quanh crease.**
- Dải ±12 pt quanh 445: Inner P y 433–457, Inner L x 433–457.
- Phần tử cố định (CTA, control trên panel cố định, mép pane ở Inner L) không được chạm dải — checker báo lỗi `CREASE`.
- Nội dung trong vùng cuộn (list, lưới, form) được đi qua dải — chỉ cảnh báo `CREASE-SCROLL`.

**Rail và margin.**
- Giữ nguyên instance `Vertical Bar` 84 của section Ios27 ở cả bốn hướng, không override. Outer khớp PDF (73 + 11); Inner hẹp hơn PDF 2 pt — ghi nhận, cập nhật component một lần khi Apple công bố số rail.
- Margin 20 cả bốn hướng; lệch có chủ đích so với A2 của PDF (16 cho Outer) vì 466 pt đã rộng hơn mọi iPhone.

**Inner L.**
- Pane trái x 88–432, pane phải x 460–804, mỗi pane 344, gutter 28 bao trọn keep-out. Đúng grid 4 và hai pane bằng nhau; lệch đối xứng 1–2 pt so với tâm 445.
- Lưới đèn Home ở pane phải: 2 cột card 160, gutter 24.
- Mẫu này áp cho mọi màn Inner L có pane nội dung bên trái (Home, Light Control, Settings, Automation…). Ảnh hero và nền trang trí được tràn tới mép màn.
- Sheet nằm gọn trong pane phải x 460–804 (rộng 344): kiểm section Ios27 có biến thể sheet folded/half; nếu không có thì resize instance, không vẽ mới.
- Alert, action sheet, menu có nút cùng rule: nằm trong pane phải hoặc canh theo control mở nó; lớp dim phủ toàn màn. Checker báo `OVERLAY-CREASE`.

**Inner P.**
- Màn ngắn (Onboarding, Bridge, lỗi, paywall, Voice intro): nửa trên y 84–432 chứa ảnh/minh họa và tiêu đề; nửa dưới từ y 460 chứa mô tả và CTA neo gần đáy. Thứ tự nội dung giữ như nguồn.
- List, lưới, form, dải cuộn ngang dùng full x 20–604 (584). Chữ, CTA, card đơn lẻ giữ cột 360 căn giữa x 132–492, cùng kích thước Outer P.

**Outer L camera.** Giữ lens dưới-phải trong rail theo kit local. Đối chiếu ảnh bezel Outer landscape chính thức của Apple; nếu bezel chỉ có chiều camera trên-trái thì chuyển lens lên góc trên-trái và cho nội dung góc đó tránh camera.

**Công cụ.** duo-checker v5 nhận khung 626/890 (strict) và 669/951 (legacy, CREASE chỉ cảnh báo).

**Chưa làm.** Chưa sửa frame Figma nào; chưa xác minh 890 × 626 và bezel Outer L với nguồn Apple. Việc chuyển đổi khoảng 78 frame Inner cùng các sheet/alert Inner L là bước tiếp theo khi user cho bắt đầu.

## AUTO-02 — Chuyển luồng Automation sang geometry SRC-PDF-01 — 2026-10-12 — Đã sửa Figma, chờ user review (kết quả ở cuối mục)

- **Nguồn:** user gửi section `Auto Dou` [25125:27727](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/SmartHue---HuyHL-PhuNH?node-id=25125-27727), “Bắt tay vào chỉnh sửa theo folder iphone-duo-skill-main đi”. Section chứa 4 section AUTO-01: `25025:1424` (Outer P), `25027:1756` (Outer L), `25027:62682` (Inner P), `25027:64147` (Inner L), 9 frame mỗi section.
- **Xác minh M1 (2026-10-12):** trang specs Apple iPhone Duo: inner 1878 × 2670 px, 430 ppi; outer 1398 × 2034 px, 460 ppi. Chia @3x ra số nguyên 626 × 890 và 466 × 678 pt; khổ 951 không ứng với scale iOS hợp lệ. HIG Duo không công bố bảng point — @3x là suy luận, xác nhận cuối bằng simulator.
- **Chặn:** connector Figma ghi (`plugin:figma:figma`) cần user đăng nhập; Dev Mode server cục bộ chỉ đọc. Đã đọc metadata + chụp 14 frame Inner.
- **Outer P / Outer L:** chỉ đổi tên section/frame (`Duo Outer P · 466×678 — Automation mới`, hậu tố frame `· Outer P`); geometry giữ nguyên.
- **Inner P → 626 × 890** (crease y445, keep-out 433–457, nội dung x20–604, cột chữ/CTA x132–492):
  - AU-01: ảnh + đồng hồ 08:00 ở nửa trên (đồng hồ đang gần tâm → đưa lên trên 432); tiêu đề, mô tả, Add New Automations ở nửa dưới, trên tab bar.
  - AU-02: menu Custom / Turn On/Off + nút đóng đặt ở nửa dưới (overlay có nút không chạm dải).
  - AU-03: lưới 3 cột full 584 (nội dung cuộn); Add lights neo đáy nửa dưới.
  - AU-04a/b/c: ảnh đèn nửa trên; Turn the Lights / For me at / Save Automation nửa dưới (đang đúng vị trí, chỉ quy đổi).
  - AU-05: sheet chọn giờ neo đáy, bắt đầu dưới 457, rộng theo bounds sheet kit (lề 8).
  - AU-06: card `Automation/Card` 361 → 360 trong cột x132–492 hoặc full 584 theo kiểu list (chọn list full 584 vì là danh sách).
  - AU-07: tia sét + tiêu đề + mô tả nửa trên; chips + Add new Automations nửa dưới (CTA đang gần tâm → dời xuống).
- **Inner L → 890 × 626** (crease x445, pane trái 88–432, pane phải 460–804, rail từ 806):
  - AU-01/04a/b/c: ảnh hero trái tràn mép (trang trí); chữ + control trong pane phải; đồng hồ 08:00 trong vùng ảnh.
  - AU-02: menu trong pane phải (đã đúng, quy đổi tọa độ).
  - AU-03: Available Devices trái (2 cột card 160 + 24), Bedroom + Add lights phải.
  - AU-05: sheet chọn giờ **dời từ x149 (vắt crease) vào pane phải 460–804, rộng 344**; kiểm biến thể sheet trong section Ios27 trước, nếu không có thì resize instance.
  - AU-06: tiêu đề + PRO + card ở pane trái; card 361 → 344 (nền gradient bị cắt bớt, cần xem lại).
  - AU-07: tia sét + chữ trái; chips + CTA phải.
- **Sau khi sửa:** chạy duo-checker v5 trên page Automation [Nav]; `CREASE`/`OVERLAY-CREASE` phải bằng 0; xem ảnh từng frame; đặt mode Dark cấp frame như frame Duo mẫu.

### AUTO-02 — Kết quả thực hiện, 2026-10-12

- **Nguồn:** user gửi lại section `Auto Dou` `25125:27727`, “Bắt tay vào chỉnh sửa theo folder iphone-duo-skill-main đi”. Phiên này ghi Figma được qua connector claude.ai (`use_figma`), không còn chặn.
- **Bản lưu trước sửa:** `saveVersionHistoryAsync` không được connector hỗ trợ → không tạo được mốc version history có tên. Thay bằng section sao lưu `Backup trước SRC-PDF-01 — AUTO-02 (2026-10-12, Inner 669/951 gốc)` `25136:2759` (18 frame Inner clone, tên không bắt đầu “Duo” nên checker bỏ qua). Có thể xóa sau khi user duyệt; user vẫn nên tự lưu một version có tên nếu cần.
- **Đổi tên:** section `Duo Outer P · 466×678`, `Duo Outer L · 678×466`, `Duo Inner P · 626×890`, `Duo Inner L · 890×626 — Automation mới`; hậu tố frame `· Outer P/L`, `· Inner P/L`. Node ID giữ nguyên. Frame xếp lại x = 120 + i·(ceil4(w)+120), section theo bội 4.
- **Inner P 626 × 890** (crease y445, keep-out 433–457):
  - Toolbar kit resize 626; tab bar kit + icon nguồn neo đáy y795, căn giữa.
  - AU-01/02: hero rescale 0,936, đồng hồ 08:00 kết thúc ≤ y428 (hero y −380 / −528); tiêu đề + mô tả + Add New Automations y616–778 (AU-01). AU-02 menu Custom / Turn On/Off + nút đóng y476–656, overlay 626 × 890.
  - AU-03: List x20 w584 (y136–784, `overflowDirection` VERTICAL — lưới cuộn), Add lights x132 y800.
  - AU-04a/b/c: khung ảnh đèn (IMAGE FILL) crop 360 × 340 tại x132 y88 (nửa trên); Turn the Lights / For me at y672–776; Save Automation x132 y800.
  - AU-05: như AU-04 + sheet Choose Time x8 w610 neo đáy (y553 > 457), picker/tiêu đề căn giữa sheet.
  - AU-06: **card giữ 360 tại x20** (không dùng full 584 như kế hoạch) — kéo `Automation/Card` lên 584 làm nền gradient không giãn (đã thử, xem ảnh); không detach component.
  - AU-07: tia sét + tiêu đề y200–344 (nửa trên); chips x132 y476–620, Add new Automations y644 (nửa dưới); nền gradient rescale 0,936.
- **Inner L 890 × 626** (crease x445, keep-out 433–457, pane 88–432 / 460–804):
  - Rail `Duo / Vertical Bar (kit structure)` x806 h626 (nhóm Top −43); icon tab overlay dời (−61, −43). Toolbar resize 890.
  - Hero (AU-01/02/04a/b/c/05) clip 0–432 — tràn mép trái, kết thúc trước keep-out. AU-01 đồng hồ trong hero, dưới-trái.
  - AU-01/02: khối chữ + CTA căn giữa pane phải (x492, y232); menu AU-02 trong pane phải (x524, y224), overlay 890 × 626.
  - AU-03: Available Devices pane trái x88 w344 (card 160, cột 184, cuộn dọc); Bedroom pane phải x460 w344; Add lights x460 w344 y544.
  - AU-04a/b/c: Turn the Lights / For me at y216 căn pane phải; Save Automation x460 w344 y360.
  - AU-05: sheet Choose Time **dời từ x149 (vắt crease) vào pane phải x460 w344**, neo đáy y289; picker + tiêu đề sheet thu bề rộng 328 (không rescale chữ). Khối nền 351 → 344.
  - AU-06: PRO + card pane trái x88, card 344.
  - AU-07: tia sét + chữ pane trái (x120, y240); chips pane phải x460 w344 y204, CTA y372.
- **Sửa kỹ thuật kèm theo:** 6 khối Outer L lệch bội 4 (x303/157, 503/28, 499/34, 160/77, 142/237, 176/377 — không có ở lượt kiểm tra sáng 2026-10-12, nhiều khả năng do chỉnh tay) làm tròn ≤ 2 px theo FIX-01 mục 3.
- **duo-checker:** v5 lỗi `overflowDirection` trên ELLIPSE (script dừng) → sửa thành v5.1 (thêm guard, bổ sung page Connect Light/Automation vào ghi chú). Kết quả page Automation, 36 frame: **0 `CREASE`/`OVERLAY-CREASE`**, 0 legacy, 0 unlinked, 0 CENTER; còn 10 mục LEFT/RIGHT/TOP là ảnh hero + dải đồng hồ tràn mép AU-01/02 (ngoại lệ đã ghi ở AUTO-01); 2 cảnh báo `CREASE-SCROLL` (lưới AU-03 Inner P, nội dung cuộn). Đã xem ảnh 18 frame Inner.
- **Cần user quyết:**
  1. Inner L: tiêu đề toolbar (“Automations”, “Add light to room”) ở x20 theo kit, còn nội dung pane trái bắt đầu x88 → lệch lề trái 68. Giữ theo SRC-PDF-01 hay cho pane trái bắt đầu x20 ở màn có toolbar tiêu đề?
  2. AU-06: chấp nhận card 360/344 thay cho list full 584.
  3. Inner P AU-04/05: ảnh đèn crop 360 × 340 (mất phần trên/dưới ảnh nguồn) có ổn không.
  4. Xóa section backup `25136:2759` sau khi duyệt.
- **Chưa kiểm chứng:** Dynamic Type, VoiceOver, hoạt ảnh đồng hồ, picker/dropdown hệ thống, continuity khi gập/mở; số 890 × 626 là suy luận @3x từ trang specs (cần simulator).
