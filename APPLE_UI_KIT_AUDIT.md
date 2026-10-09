# SmartHue — mapping kit liên quan

Snapshot local được ghi 2026-10-06, không phải audit lại ngày 2026-10-10. File `mklhEcafiTfj9FoGIUhA0M`; page Components `0:1`; Ios27 `24730:17902`; Safe Area Insets and Margins `24731:15441`; iPhone Duo `24731:17081`.

| Vai trò Home-A | Component/set trong file SmartHue | Variant / cấu trúc đã đọc | Bằng chứng / giới hạn |
| --- | --- | --- | --- |
| Template inner landscape | `24731:15442` | 951 × 669; Vertical Bar `24731:15443` x867, width84, padding 24/24/24/12; top/bottom Auto Layout vertical. | Cấu trúc JSON; xem render example `24731:17083`. Geometry template, chưa xác nhận safe areas runtime. |
| Template outer portrait | `24731:15493` | 466 × 678; rail `24731:15494` x382, width84; Camera Punchout 48 × 42, Outer Display Lens instance `24731:15507`. | Cấu trúc JSON; xem render example `24731:17154`. Camera/reserved regions cần simulator. |
| Tab bar 4 destinations | set `24730:17998`, main `24730:18112` | Minimized=False, Tabs=4, Type=Default; 48 × 210, vertical, gap2, padding6 trên/dưới. | Đọc properties/children/main IDs và xem render component. Render gồm effect bounds 78 × 240; không thay kích thước node48 × 210 bằng ảnh. |
| Tab từng destination | main selected `24730:17982`, unselected `24730:17988` | 48 × 48; Symbol#5735:8 text property; Is Selected; Mode có variable binding. | Placeholder symbols phải map Home/Music Sync/Voice/Automation, không copy circle/triangle của kit. |
| Toolbar trên | instance template `24731:15454` / `24731:15506`, main `24731:15183` | Sheet=False, Style=Title; booleans Title/Status/Leading/Trailing/Reserved Region và slots. Top height84; reserved region bên phải. | Main ID đọc từ instance thực tế, không lấy component có tên tương tự làm ID mặc định. |
| Examples hệ thống | toolbar set `24731:17082`; tab bar set `24731:17179` | Inner/Outer × Landscape/Portrait, Full Screen. | Đọc property definitions, variant IDs/sizes. Chưa audit mọi child/state. |


## Mapping bổ sung được ghi từ read-back v2

| Vai trò | Main local |
| --- | --- |
| Status bar vertical | `24731:16021` |
| Button group | `24731:14798` |
| Symbol action | `24731:14807` |
| Outer lens | `24731:15427` |
| Light On / source set | `831:3923` / `831:3924` |
| Group / room filters nguồn | `23887:8108` / `23887:8100` |

Record v2 ghi tab alias Appearance `.../10456:201` resolve Dark; root dùng kit appearance collection `.../10456:163` và Colors `23872:11240`, Dark `404:1`. Không suy Colors/Dark local điều khiển mọi alias; kiểm tra bindings/mode trên instance đang dùng.

## Dùng mapping

Kiểm tra node/variant/mode liên quan ở nguồn hiện tại trước sửa. Tái dùng mapping còn đúng, chỉ discovery lại phần thay đổi/thiếu; padding fix không cần inventory toàn thư viện. Ghi main/property/binding ảnh hưởng và read-back sau sửa; xem [WORKFLOW](WORKFLOW.md).

Geometry số đo tập trung tại [safe-area](references/guides/iphone-duo-safe-area-guide.md). Raw inventory/geometry cũ thiếu trong gói; đây là record, không phải JSON được kiểm lại. Community kit là nguồn đối chiếu, không thay discovery local. Audit Community và lịch sử lỗi import: [archive](history/APPLE_UI_KIT_AUDIT.md).
