# Apple UI Kit — Kiểm tra phần iPhone Duo

> Kiểm tra ngày 2026-10-06 bằng Figma connector, chỉ đọc. Không chỉnh sửa kit. Kết quả dùng để chuẩn bị layout SmartHue, chưa xác nhận hành vi runtime.

## 1. Nguồn và phạm vi kiểm tra

- File người dùng cung cấp: [iOS and iPadOS 27 (Community)](https://www.figma.com/design/fTqMdkoKo625eN4npuJBk5/iOS-and-iPadOS-27--Community-?node-id=0-3329).
- File key: `fTqMdkoKo625eN4npuJBk5`.
- Link mở page **Examples**, ID `0:3329`; trong page có sections iPhone, iPad và iPhone Duo.
- Section Duo: [12886:17523](https://www.figma.com/design/fTqMdkoKo625eN4npuJBk5/?node-id=12886-17523).
- Đã đọc metadata toàn section Duo: 44 example variants trong 4 nhóm. Đã xem design context và ảnh render của 5 mẫu đại diện: toolbar màn ngoài dọc, toolbar màn trong ngang/dọc, tab bar màn ngoài dọc, sheet medium trên màn trong gập ngang.
- Đã đọc metadata bộ component toolbar/tab bar và variable definitions của sheet mẫu. Chưa audit toàn bộ file, tất cả modes hoặc xác minh lịch sử cập nhật/nguồn xuất bản của bản Community này.

Truy cập node cụ thể và ảnh render thành công; không có lỗi quyền truy cập đang chặn việc đọc. Lần gọi design context vào page trả về yêu cầu chọn layer, đã xử lý bằng cách lấy node IDs từ metadata rồi đọc component cụ thể.

## 2. Frame thực tế trong kit

Kích thước dưới đây là **width × height trong canvas Figma**, lấy từ example components. Không gọi chúng là độ phân giải pixel vật lý hoặc safe-area content bounds.

| Cấu hình | Kích thước | Node toolbar mẫu |
| --- | --- | --- |
| Outer / Portrait | 466 × 678 | [12887:23277](https://www.figma.com/design/fTqMdkoKo625eN4npuJBk5/?node-id=12887-23277) |
| Outer / Landscape | 678 × 466 | [12887:23266](https://www.figma.com/design/fTqMdkoKo625eN4npuJBk5/?node-id=12887-23266) |
| Inner / Portrait | 669 × 951 | [12887:23263](https://www.figma.com/design/fTqMdkoKo625eN4npuJBk5/?node-id=12887-23263) |
| Inner / Landscape | 951 × 669 | [12887:23254](https://www.figma.com/design/fTqMdkoKo625eN4npuJBk5/?node-id=12887-23254) |

Device bezel là layer riêng, lớn hơn frame UI và có thể tràn ra ngoài. Ví dụ bezel màn trong ngang có canvas 1031 × 749, trong khi frame example là 951 × 669. Không lấy kích thước ảnh bezel hoặc screenshot render làm kích thước frame UI.

Chưa xác nhận quan hệ point ↔ pixel/scale factor với simulator. Đặc biệt, không tự chia độ phân giải phần cứng trong research cho một scale giả định để thay frame của kit.

## 3. Component và các mẫu có sẵn

| Nhóm | Inventory quan sát được | Node nhóm |
| --- | --- | --- |
| Examples/Toolbars | 4 cấu hình outer/inner × portrait/landscape. | `12887:23253` |
| Examples/Tab Bars | 4 cấu hình outer/inner × portrait/landscape. | `12887:21801` |
| Examples/Sheets (Modals) | 20 variants: full screen, large, medium, small detent trên 5 cấu hình, gồm inner folded landscape. | `12886:17616` |
| Examples/Keyboard | 16 variants: uppercase, lowercase, numeric, punctuation trên 4 cấu hình. | `12891:50098` |

Core component `Tab Bar - iPhone Duo` (`12887:20935`) có 24 variants: 2–5 tabs, minimized true/false và type Default/Search Role/Prominent Tab. Các variants dọc được liệt kê có width 48 trong kit.

Core component `Toolbar - Top - iPhone Duo` (`12883:6008`) có 8 variants: Title, Large Title, Compact Large, Title 2 Line, mỗi loại có sheet true/false. Width 600 của component mẫu này không phải chiều rộng màn thiết bị.

Trong section iPhone thông thường, metadata còn liệt kê Examples/Slider (`12740:35186`), Examples/Color Picker (`12740:35184`) và Examples/Toggles (Switches) (`12740:35193`). Đây là nguồn tham khảo tiếp theo cho SmartHue; chưa kiểm tra chi tiết hoặc xác nhận hành vi Duo của các controls này.

## 4. Quan sát từ ảnh render và variables

- Toolbar/tab bar màn ngoài dọc ở cạnh phải, bên dưới camera và status bar; tab bar mẫu dọc dùng symbols. Không sao chép symbols placeholder thành destinations của SmartHue.
- Toolbar màn trong ngang tiếp tục ở cạnh phải. Trong example được đọc, Vertical Bar có width 84 và controls mẫu dùng component `Buttons 48Pt`; đây là geometry của mẫu, chưa phải safe-area inset chung.
- Màn trong dọc có toolbar phía trên và tab bar phía dưới, có nhãn tab. Đây là thay đổi cấu trúc cần bảo toàn thứ tự destinations/actions khi chuyển layout.
- Sheet medium trong example inner folded landscape nằm lệch về nửa trái, tránh giữa màn; có close/share và grabber. Không suy ra SmartHue luôn phải đặt mọi sheet ở bên trái.
- Context tham chiếu SF Pro/SF Pro Rounded, SF Symbols và semantic variables như `Backgrounds/Primary`, `Labels/Primary`, `Labels - Vibrant/Primary`.
- Variable defs trên sheet light mẫu: Headline size 17, leading 22, letter spacing khoảng −0,43; grabber 60 × 4; overlay `#00000033`; có variables cho Liquid Glass.
- Component descriptions hướng dẫn đổi light/dark qua Appearance → System Colors. Đã xác nhận hướng dẫn này và semantic bindings; chỉ xem render ở mode hiện tại, chưa kiểm thử dark mode hoặc toàn bộ contrast.

Giá trị variables là giá trị resolve trên node/mode đã đọc. Giữ semantic names khi dùng; không coi màu resolve ở light mode là giá trị cho mọi mode.

## 5. Nhận định và trade-off — đề xuất chưa duyệt

**Kết luận:** kit có đủ ví dụ nền tảng để bắt đầu dựng chrome và các cấu hình frame cho layout Duo. Chưa phát hiện blocker khi đọc phần đã kiểm tra. Kit không xác định nội dung, navigation hoặc component điều khiển đèn riêng của SmartHue.

- **Tech:** dùng component/variants giúp giảm công dựng lại, nhưng kit là mẫu tĩnh. Dev vẫn phải xử lý resize, reserved regions, trạng thái lệnh và kiểm tra SDK/stack thực tế; code sinh từ context không phải implementation được duyệt.
- **Business:** tiết kiệm công chuẩn bị UI nền; team vẫn chịu chi phí map UI hiện tại và QA. Chưa có số liệu để dự báo retention, conversion hoặc thời gian tiết kiệm.
- **Product / UX:** patterns hệ thống giúp consistency; controls dọc dùng symbols tạo yêu cầu chọn icon rõ nghĩa cho các tính năng đèn. Không áp style mặc định của kit lên toàn app trước khi xem nhận diện và tác vụ hiện tại.
- **Điều kiện:** dùng frame và variant đúng cấu hình, tách bezel khỏi UI; đọc component liên quan khi thiết kế màn thật; xác minh runtime trước bàn giao triển khai.
- **Kiểm chứng:** đối chiếu vị trí/kích thước chrome với kit, kiểm tra đủ các cấu hình trong research, đo lỗi mất trạng thái/che controls và khả năng hoàn thành tác vụ. Chưa có baseline hoặc target.

## 6. Phần còn thiếu và bước tiếp theo

1. UI SmartHue hiện tại: link Figma hoặc ảnh/video luồng, kèm màn ưu tiên và phần phải giữ.
2. Safe areas/reserved regions thực tế khi Split View, PiP, camera hoạt động hoặc góc gập đổi — cần simulator/runtime, không đủ từ các examples tĩnh.
3. Xác minh phiên bản kit và scale runtime trước chốt thông số bàn giao dev; chưa có bằng chứng kit sai, không tự thay kích thước mẫu.
4. Kiểm tra component màu/độ sáng/toggle, modes và states sau khi biết màn cần thiết kế; hiện chưa cần đọc hết mọi component.

## 7. Hướng dẫn cho lần thiết kế tiếp theo

- Đọc audit này cùng DESIGN_BRIEF.md, SCREEN_SPECS.md và IPHONE_DUO_RESEARCH.md.
- Dùng file key/node IDs ở đây để lấy context và screenshot mới; không phụ thuộc asset URLs tạm thời do connector trả về.
- Link nguồn người dùng là kit tham chiếu. Chưa có file đích để tạo layout SmartHue; yêu cầu xem kit không đồng nghĩa cho phép sửa thư viện tham chiếu.

## Bổ sung khi làm Home-A — 2026-10-06

Đã đọc thêm context/render mẫu Duo inner 12887:23254 và component Tab Bar 4 tabs / Default / Not minimized 12887:20955, 48 × 210, trong file kit. Import key cc6d45b6217b6db7a84b334eded1e95c236b81a0 sang file SmartHue trả “Component key not found”. Không sửa kit hoặc retry blind. Demo tái dựng chrome theo mẫu/geometry, dùng source icons; không coi đây là linked kit instance hoặc xác minh system safe areas. Source Light set 831:3924 có On/Off/Disconnect/Unreachable và được reuse; xem [HOME_DEMO_HANDOFF.md](HOME_DEMO_HANDOFF.md).

## WF05 — Component Duo đã setup trong file SmartHue, 2026-10-06

- **Nguồn xác nhận:** user nói “t đã set up hết component của iphone duo trong file figma rồi”. File làm việc: [SmartHue](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/), key `mklhEcafiTfj9FoGIUhA0M`.
- **Phân biệt bằng chứng:** đã biết source Light set/controls từ Home-A; chưa có inventory kiểm chứng đầy đủ component Duo user đã setup (page/section/node/main IDs/variants/bindings). Không suy ra thiếu tài nguyên từ giới hạn audit này và không ghi đã xem/reuse khi chưa có bằng chứng.
- **Sửa chẩn đoán fallback Home-A:** lỗi import Community là thật; bỏ sót kiểm tra tài nguyên Duo trong file đích trước khi tái dựng chrome là thiếu sót. Lỗi đó không đủ để kết luận cần dựng lại. Lịch sử render/handoff giữ nguyên; lượt này chỉ bổ sung rule, chưa sửa demo.
- **Ưu tiên sử dụng:** component Duo đã setup trong file là nguồn triển khai Figma ưu tiên; phải kiểm tra/reuse linked instances phù hợp. Community là nguồn đối chiếu hoặc bổ sung phần thiếu có bằng chứng. Nếu xung đột HIG/kit, ghi rule ID và chênh lệch, không tự sửa main component.

### Mục Duo rules và safe area — phải kiểm tra trước HIG/ref

Trong section `Ios27` `24730:17902`, section **Safe Area Insets and Margins** (`24731:15441`) là phần riêng chứa rule/khung tham chiếu về insets và margins. Khi bắt đầu flow/màn Duo, mở trực tiếp section này và các template Duo liên quan trước khi đọc HIG; không chỉ dựa vào bảng component hay ảnh render. Ghi node được dùng, thông số/geometry nhìn thấy và cách nó ràng buộc content, controls, bars, reserved regions, camera punchout/fold nếu có.

Không đánh đồng inset/margin mẫu trong Figma với safe area runtime. Các node hiện đã kiểm tra gồm inner landscape template `24731:15442` và outer portrait template `24731:15493`; geometry cụ thể được ghi ở inventory phía dưới. Cấu hình Split View, PiP, camera, thay đổi góc gập hoặc system reserved areas vẫn cần simulator/runtime nếu quyết định phụ thuộc chúng. Nếu section/variant liên quan không truy cập được, ghi rõ chưa kiểm tra và không tự ước lượng từ bezel.

### Inventory bắt buộc cho màn tiếp theo hoặc lần sửa layout

| Vai trò trên màn | File / page / section | Component/set và node ID | Main ID / variant / properties | Mode / bindings / constraints | Bằng chứng đã xem | Instance output / read-back hoặc gap |
| --- | --- | --- | --- | --- | --- | --- |
| Component Duo liên quan flow | `mklhEcafiTfj9FoGIUhA0M`; vị trí chưa audit | Chưa kiểm tra | Chưa kiểm tra | Chưa kiểm tra | User xác nhận có setup; chưa thay thế audit | Chưa map/reuse |

Agent tự điền bằng đọc cấu trúc và ảnh thực tế; không bắt user điền bảng. Chỉ audit components cần cho màn. Quy trình discovery, fallback và review nằm ở WF05 trong [workflow](WORKFLOW.md).

## Inventory local đã kiểm tra khi gen Home-A v2 — 2026-10-06

Đã kiểm tra chỉ đọc trong file `mklhEcafiTfj9FoGIUhA0M`, page **Components** `0:1`; section **Ios27** `24730:17902`, **Safe Area Insets and Margins** `24731:15441` và **iPhone Duo** `24731:17081`. Đã enumerate các page rồi kiểm tra 0:1, 0:850, 0:3329 và page component SmartHue 19486:75534; không chỉ dựa get_metadata không node (công cụ đó chỉ trả page Cover ở lượt này).

| Vai trò Home-A | Component/set trong file SmartHue | Variant / cấu trúc đã đọc | Bằng chứng / giới hạn |
| --- | --- | --- | --- |
| Template inner landscape | `24731:15442` | 951 × 669; Vertical Bar `24731:15443` x867, width84, padding 24/24/24/12; top/bottom Auto Layout vertical. | Cấu trúc JSON; xem render example `24731:17083`. Geometry template, chưa xác nhận safe areas runtime. |
| Template outer portrait | `24731:15493` | 466 × 678; rail `24731:15494` x382, width84; Camera Punchout 48 × 42, Outer Display Lens instance `24731:15507`. | Cấu trúc JSON; xem render example `24731:17154`. Camera/reserved regions cần simulator. |
| Tab bar 4 destinations | set `24730:17998`, main `24730:18112` | Minimized=False, Tabs=4, Type=Default; 48 × 210, vertical, gap2, padding6 trên/dưới. | Đọc properties/children/main IDs và xem render component. Render gồm effect bounds 78 × 240; không thay kích thước node48 × 210 bằng ảnh. |
| Tab từng destination | main selected `24730:17982`, unselected `24730:17988` | 48 × 48; Symbol#5735:8 text property; Is Selected; Mode có variable binding. | Placeholder symbols phải map Home/Music Sync/Voice/Automation, không copy circle/triangle của kit. |
| Toolbar trên | instance template `24731:15454` / `24731:15506`, main `24731:15183` | Sheet=False, Style=Title; booleans Title/Status/Leading/Trailing/Reserved Region và slots. Top height84; reserved region bên phải. | Main ID đọc từ instance thực tế, không lấy component có tên tương tự làm ID mặc định. |
| Examples hệ thống | toolbar set `24731:17082`; tab bar set `24731:17179` | Inner/Outer × Landscape/Portrait, Full Screen. | Đọc property definitions, variant IDs/sizes. Chưa audit mọi child/state. |

**Bindings/modes:** nested tab/BG đang có binding Mode tới `VariableID:1cb838901f40f3393f5c906bddcd9a8c46740dca/10456:201`; giữ binding khi làm Figma, chưa resolve collection/modes của alias này. Local collections đã đọc: Typography `19034:31763`, Kit `23872:11238`, Colors `23872:11240` với Light `404:0` và Dark `404:1`. Việc Colors có Dark không chứng minh alias Appearance của kit đã map đúng collection này. Render kit đã xem ở mode hiện tại (light); HTML dark dựa Home nguồn, không ghi đã thử dark kit.

Raw evidence: [inventory](demo-home/local-duo-inventory.json), [geometry/properties/bindings](demo-home/local-duo-geometry.json). Đây là audit phần liên quan Home-A, không phải toàn thư viện đã kiểm chứng.

Output lượt này là [Home-A v2 HTML](demo-home/home-a-v2.html) có mapping, chưa tạo hoặc sửa instance Figma. WF05 cho phép CSS đơn giản ở preview; linked instances thật phải dùng khi hoàn thiện Figma. Home-A v1 chrome tái dựng vẫn là giới hạn lịch sử.


## Read-back Figma Home-A v2 — local component reuse hoàn tất, 2026-10-06

File đích SmartHue `mklhEcafiTfj9FoGIUhA0M`, page Home; output trong board [24764:3926](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24764-3926). Instance outputs: [JSON evidence](demo-home/home-a-v2-figma-review.json).

| Vai trò | Main local | Output |
| --- | --- | --- |
| Toolbar/reserved region | `24731:15183` | `24765:8298`, `24765:8390` |
| Status bar vertical | `24731:16021` | `24765:8306`, `24765:8398` |
| Tab bar 4 / Default / not minimized | `24730:18112` | `24765:8316`, `24765:8408` |
| Duo vertical button group | `24731:14798` | `24765:8355`, `24765:8447` |
| Duo symbol action | `24731:14807` | `24765:8375`, `24765:8467` |
| Outer camera lens | `24731:15427` | `24765:8479` |
| Light On | `831:3923` from Home | 8 linked instances |
| Group + room filters | source `23887:8108`, `23887:8100` | cloned source; nested controls remain instances |

Appearance alias `VariableID:1cb838901f40f3393f5c906bddcd9a8c46740dca/10456:201` resolves Dark and remains bound on tab instances. Root selects Dark for kit appearance collections `.../10456:163` and local Colors `VariableCollectionId:23872:11240`, mode `404:1`. Screen frames match template bounds. Read-back found zero unlinked instances.

26 transparent target specification frames across screens/state examples are ≥44 × 44 and within parent bounds. This is design documentation only. Screenshots: [inner](demo-home/home-a-v2-figma-inner.png), [outer](demo-home/home-a-v2-figma-outer.png), [board/states](demo-home/home-a-v2-figma.png).

## RV02 — Home-A v3, feedback01–03 — 2026-10-07

User annotate tại trang review RV01, yêu cầu “xử lý các feedback này”: inner ngang chia hai vùng bằng nhau, card đèn bớt giãn, spacing/font/radius/padding theo bội số4. Đã sửa trên bản sao [Home-A v3](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24805-6013), inner24805:6014/outer24805:6947; source24803:5700 giữ nguyên. Hai vùng396–396, gutter24; card inner188×208/outer164×208. Custom tokens đã kiểm tra theo4; giữ native kit/artwork intrinsic và ghi rõ ngoại lệ do agent áp dụng, chưa user xác nhận riêng. Không thêm UI. Đây là quyền sửa scope Home-A cụ thể, chưa nghiệm thu kết quả. Chi tiết/evidence: [review v3](reviews/2026-10-07-home-a-v3/README.md), [render](reviews/2026-10-07-home-a-v3/frame.png), [read-back](reviews/2026-10-07-home-a-v3/review.json), [invariants](reviews/2026-10-07-home-a-v3/invariants.json). Preview tiếp tục annotate: http://127.0.0.1:8767/after.html ; trang cũ giữ nguyên.

Ref tiếp tục ghi chú REF-02 đã xem trong Home-A. Read-back: 556 token checks có phạm vi không lỗi; 99/99 instances vẫn linked, mains/properties/modes giữ nguồn; text contents giữ nguyên. Native geometry giữ nguyên. Trade-off: vùng grid/card nhỏ hơn làm slider ngắn hơn, cân lại vùng nhóm/phòng; công QA/token mapping bổ sung, không đổi feature. Chưa có dữ liệu usability/ROI; đo task completion/time/mis-tap và kiểm tra native targets, scroll/resize, Dynamic Type, VoiceOver, lệnh đèn trên runtime.
