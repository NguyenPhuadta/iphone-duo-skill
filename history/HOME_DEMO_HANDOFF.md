> ARCHIVE v1.9 — chỉ tra cứu nguồn/quyết định quá khứ. Các lệnh thao tác và trạng thái bên dưới không điều khiển task hiện tại. Quy trình hiện hành ở [SKILL](../SKILL.md); trạng thái màn ở [SCREEN_SPECS](../SCREEN_SPECS.md).

> Hồ sơ kế thừa v1.8: đọc đúng phần/mốc cần thiết, không đọc toàn bộ mỗi lượt. Quy trình hiện hành ở [SKILL.md](../SKILL.md) và [WORKFLOW.md](../WORKFLOW.md); trạng thái tổng hợp ở [PROJECT_CONTEXT.md](../PROJECT_CONTEXT.md). Các mục cũ là lịch sử; claim về asset/bằng chứng không có file cần đối chiếu [MISSING_ASSETS.md](../MISSING_ASSETS.md).

# Home-A v2 — Handoff Figma

> 2026-10-06. User duyệt HTML v2 và yêu cầu dựng lại trong Figma. Bản v2 đã tạo trong section Test, chờ user tự review.

## Mở kết quả

| Artifact | Link / bằng chứng |
| --- | --- |
| Board hoàn thiện v2 | [Home-A v2 — Test](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/SmartHue?node-id=24764-3926) |
| Inner landscape, dark — 951 × 669 | [Figma](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/SmartHue?node-id=24764-3931), PNG — `demo-home/home-a-v2-figma-inner.png` (thiếu trong ZIP nguồn; xem MISSING_ASSETS.md) |
| Outer portrait, dark — 466 × 678 | [Figma](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/SmartHue?node-id=24764-3951), PNG — `demo-home/home-a-v2-figma-outer.png` (thiếu trong ZIP nguồn; xem MISSING_ASSETS.md) |
| Bảng states và handoff checks | [Figma](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/SmartHue?node-id=24770-4253) |
| Render toàn board | PNG — `demo-home/home-a-v2-figma.png` (thiếu trong ZIP nguồn; xem MISSING_ASSETS.md) |
| Read-back cấu trúc/bounds | JSON — `demo-home/home-a-v2-figma-review.json` (thiếu trong ZIP nguồn; xem MISSING_ASSETS.md) |
| HTML đã duyệt phương án | home-a-v2.html — `demo-home/home-a-v2.html` (thiếu trong ZIP nguồn; xem MISSING_ASSETS.md) |

## Component và bằng chứng

- Linked Duo chrome: toolbar main `24731:15183`, status bar `24731:16021`, tab bar `24730:18112` (4 / Default / not minimized), button group `24731:14798`, symbol action `24731:14807`; outer camera lens `24731:15427`.
- Tab instances giữ alias Appearance Mode gốc và resolve Dark. Hai root screens chọn Dark cho appearance collections và local Colors. Không sửa main component hay kit.
- Tám linked light cards dùng main `831:3923`, lấy từ Home nguồn; group/filter clone source giữ nested instances/styles. Icons lấy từ SmartHue source.
- 26 transparent spec hit regions đã được đọc lại; tất cả ≥44 × 44 và nằm trong parent bounds. Đây là layer đặc tả, chưa chứng minh hit testing/runtime.

## Bố cục, kiểm tra và giới hạn

Inner chia cột trái 340pt cho filter/group và grid phải hai cột. Outer xếp filter → group → grid cuộn dọc; hàng đèn đầu thấy đủ, hàng sau lộ một phần. Rail Duo cố định ngoài content. Màu tối/glow xanh và đèn đỏ bám Home nguồn.

State board có On/Off/Offline variants nguồn và Pending/Command error minh họa. Offline ẩn toggle/brightness, dùng Reconnect nguồn; Pending/error ẩn controls để giữ geometry và ghi chưa có ACK; lỗi có nút “Thử lại” mẫu. App cần nối state/capability/timeout/retry theo contract sản phẩm.

Đã render và xem board, từng màn, state board; sửa khoảng cách nhãn/nút trong state lỗi. Không thấy text/card bị cắt trong render cuối. Đây là kiểm tra Figma render; chưa thử simulator/app, cuộn thật, Dynamic Type, VoiceOver, camera/safe area runtime hay lệnh thiết bị. Sau implementation đo task completion/time/error, accidental commands và state continuity khi resize; chưa có baseline.

Trade-off: rail giảm ngang dành cho grid, outer phải cuộn; controls Duo giữ vị trí cố định. Layout Figma chờ user review.

## Lịch sử

Bản [Home-A v1.0](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24751-3613) giữ nguyên làm lịch sử.

# Home-A v1.0 — Handoff demo Duo

> 2026-10-06. User duyệt phương án Home-A bằng xác nhận “Duyệt Home-A, hoàn thiện demo”. Layout đã dựng và review ở mức thiết kế; chưa phải app/prototype chạy được hoặc bàn giao toàn bộ cấu hình sản phẩm.

## Mở kết quả

| Artifact | Link / bằng chứng |
| --- | --- |
| Board hoàn thiện trong section Test | [24751:3613](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24751-3613) |
| Inner landscape, dark — 951 × 669 | [24751:3614](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24751-3614), PNG — `demo-home/home-a-inner.png` (thiếu trong ZIP nguồn; xem MISSING_ASSETS.md) |
| Outer portrait, dark — 466 × 678 | [24751:3615](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24751-3615), PNG — `demo-home/home-a-outer.png` (thiếu trong ZIP nguồn; xem MISSING_ASSETS.md) |
| Bảng On / Off / Disconnect / Unreachable và spec lệnh | [24751:3616](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24751-3616), PNG — `demo-home/home-a-states.png` (thiếu trong ZIP nguồn; xem MISSING_ASSETS.md) |
| Render toàn board | home-a-final.png — `demo-home/home-a-final.png` (thiếu trong ZIP nguồn; xem MISSING_ASSETS.md) |
| Kiểm tra geometry sau chỉnh sửa | review-geometry.json — `demo-home/review-geometry.json` (thiếu trong ZIP nguồn; xem MISSING_ASSETS.md) |
| Nguồn, proposal và trade-off | [HOME_DEMO_PROPOSAL.md](../HOME_DEMO_PROPOSAL.md) |

Kích thước lấy từ canvas UI Kit. Chưa xác minh ánh xạ points, system safe areas hoặc camera trên simulator. Board thứ ba là tài liệu trạng thái, không phải một snapshot phòng có dữ liệu tổng hợp.

## Giữ và đổi

Giữ room filters, All Lights, switch/brightness nhóm, ba Quick Mode, toggle/slider trên từng card và bốn destinations Home → Music Sync → Voice Control → Automation. Giữ SF Pro, ảnh đèn, nền tối/glow xanh, màu ánh sáng và cách bo tròn từ nguồn. Tên Super Lamp 01 lặp là data minh họa của source, không phải số lượng/trạng thái thiết bị thật.

Inner chia vùng phòng/nhóm trái và grid hai cột phải; controls cạnh ngoài theo mẫu Duo. Outer xếp filter → nhóm → grid; body 24754:3738 có overflow VERTICAL, viewport 360 × 506, bốn card. Hai card ở hàng đầu thấy đầy đủ trong render, các card tiếp theo nằm trong nội dung cuộn. Chưa kiểm tra thao tác cuộn trong prototype.

Source Home 23887:8097 và kit không bị sửa. Wrapper demo được thêm trong Test; section Test được tăng chiều cao để chứa cả wireframe và bản hoàn thiện.

## Component và ngoại lệ kit

Card đèn vẫn là linked instances của set 831:3924: On 831:3923, Off 21801:24573, Disconnect 21862:10690, Unreachable 21944:12295. Ảnh bóng đèn, switch, slider và icon navigation/action lấy từ SmartHue nguồn. Group/filter reuse source frames, giữ các styles/bindings có sẵn; một số kích thước/spacing được override cho demo. Không tạo design system toàn app.

Đã đọc mẫu kit inner 12887:23254 và Tab Bar 12887:20955 (48 × 210). Import key cc6d45b6217b6db7a84b334eded1e95c236b81a0 trả “Component key not found”. Chrome được tái dựng theo hình học mẫu kit, dùng icon của source, không có liên kết tới component Community. HIG-04: đây là giới hạn kit/implementation cần kiểm tra lại trên system chrome thật, không phải ngoại lệ cho phép bỏ safe areas.

Root screens là snapshot kích thước cố định. Group/cards có Auto Layout và source instances; chia cột/rail dùng vị trí cụ thể để review hai cấu hình. Không coi hai snapshot này là bằng chứng responsive tự hoạt động.

## Vùng tương tác

Giữ hình switch/slider nhỏ từ linked source. Không sửa main components để làm lớn hình controls. Các frame trong suốt mang tên “44 unit hit region · implementation spec” nằm trong wrapper riêng: switch 64 × 44; slider rộng theo card, cao 44; Reconnect cao 44. Read-back xác nhận 22 vùng đều ≥44 ở hai chiều và nằm trong wrapper. Đây là hit region **đặc tả cho implementation**, chưa gắn action/prototype và chưa xác nhận hit testing runtime.

Room filters inner cao 48, outer cao 44. Mỗi nút action/navigation bên phải có frame 48 × 48. Group switch nằm trong row 44, brightness row 50, Quick Mode visual 56 × 50. Dev cần map vùng thao tác thực, tránh để tap card bắt sự kiện của toggle/slider; tên layer không tự tạo accessibility label.

## Contract hành vi cần nối với app

| Trường hợp | Đặc tả / giới hạn |
| --- | --- |
| Chọn phòng | Giữ lựa chọn khi resize. Scope nhóm phải khớp phòng/filter; hiện chưa biết UI nguồn đổi scope hay chỉ lọc grid. |
| Toggle / brightness | Giữ điều khiển trực tiếp; tách với tap mở chi tiết. Tap card mở detail chưa được chứng minh từ source. |
| On / Off | Chỉ xác nhận khi app có state tương ứng; không dùng gradient hay vị trí knob làm bằng chứng ACK. |
| Disconnect / Unreachable | Dùng hai variant source riêng, không đồng nhất Off với offline. Reconnect giữ action nguồn; SDK/permission/entry flow cần xác nhận. |
| Pending | Đặc tả hiển thị tiến trình theo đèn, giữ giá trị đã xác nhận và trạng thái request qua resize. Không resend chỉ vì layout đổi. Chưa dựng animation hoặc đo latency. |
| Lỗi lệnh | Đặc tả feedback cục bộ, giữ giá trị xác nhận; retry bằng action chủ động khi chính sách cho phép. Không tự chọn timeout, retry tự động, rollback hay slider commit/throttle. |
| Mixed / partial success | Chỉ áp dụng nếu app hỗ trợ; cần định nghĩa aggregate, đèn không hỗ trợ hoặc offline và kết quả lệnh nhóm. Bảng trạng thái không giả lập group mixed. |
| Quick Mode / actions | Giữ symbols và opacity source. Chưa xác nhận tên, selected/disabled/paywall, plus/ellipsis/Hex mở gì. Không đổi nghiệp vụ từ hình icon. |
| Thu hẹp / chữ lớn | Chuyển xếp dọc hoặc một cột khi content không đủ chỗ; giữ selection, scroll, value, pending và focus. Chưa chốt breakpoint hoặc mọi orientation. |

## Review HIG / bằng chứng

| Rule | Kết quả ở mức demo | Runtime / QA còn thiếu |
| --- | --- | --- |
| HIG-01–03 | Hai cấu hình được dựng, core controls hiện diện; resize continuity có spec. | Resize, xoay, gập, Split View/PiP, giữ state/focus/scroll. |
| HIG-04–05 | Actions tách navigation ở cạnh ngoài; brightness trong nội dung. | System bars, camera/reserved areas, keyboard và bounds thật; chrome tái dựng. |
| HIG-06 | Geometry hit regions đã đọc lại; render không thấy overlap hoặc cắt tên mẫu. | Hit testing, routing gesture, tên dài/chữ lớn. Không đánh dấu accessibility toàn màn đạt. |
| HIG-07–08, 10–14 | Source typography/controls được giữ; Off và Unreachable không chỉ khác màu. | Dynamic Type, VoiceOver/focus order, Reduce Motion/Transparency, mọi mức contrast/state; semantics icon/Quick Mode. |
| SH-01–05 | Tách card/control và pending/error/resize contract được ghi. | ACK, capability theo hãng, mất mạng, request trùng, timeout và kết quả nhóm. |

Đã xem trực tiếp render final board, hai màn normal và source variants; không phát hiện overlap/cắt nội dung mẫu trong phạm vi render. Chưa có usability test, contrast audit toàn bộ, prototype vận hành hoặc runtime evidence. Không có số liệu để khẳng định đẹp hơn, nhanh hơn hay tăng retention.

Trade-off đã chấp nhận: người dùng thấy điều khiển nhóm cùng đèn, nhưng grid inner hẹp hơn grid full-width. Team giới hạn demo ở hai cấu hình để review trước; dev/QA chịu thêm công resize và state mapping. Kiểm chứng sau implementation bằng task completion/time/error, tỷ lệ lệnh lỗi/trùng và mất state khi resize; chưa có baseline/target.

> **Lưu ý lịch sử WF04:** wireframe Home-A trong Figma được tạo trước rule mới. Từ yêu cầu mới ngày 2026-10-06, mọi hướng đề xuất/wireframe dùng HTML đơn giản preview trong Codex; không dựng trong Figma. Rule không yêu cầu làm lại demo đã hoàn thiện.

## Đính chính giới hạn reuse — WF05, 2026-10-06

User xác nhận component Duo đã được setup trong file SmartHue. Trước khi tái dựng chrome, agent đã bỏ sót inventory tài nguyên này; lỗi import Community không đủ để chứng minh cần fallback. Bản demo/PNG hiện tại vẫn là kết quả đã mô tả ở trên, chưa được sửa ở lượt cập nhật rule. Lần sửa layout tiếp theo phải kiểm tra và reuse linked instances phù hợp theo WF05; ghi component/output mapping cùng bằng chứng. Chi tiết [audit](../APPLE_UI_KIT_AUDIT.md) và [workflow](../WORKFLOW.md).
