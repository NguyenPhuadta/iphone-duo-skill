# iOS 27 Duo kit (PDF) — geometry, size class, Split View, continuity

Mở khi cần số đo Duo theo point thật, quyết định size class/điều hướng giữa các tư thế, dựng Split View hoặc khi đối chiếu safe-area v2 với nguồn mới. Nội dung tóm tắt từ PDF **“iPhone Duo × iOS 27 — UI kit & reference”** (file nằm ngoài gói: `../iPhone Duo × iOS 27 — UI kit & reference.pdf`, nhận 2026-10-12). Rule Liquid Glass, type, contrast, library: [liquid-glass-a11y](liquid-glass-a11y.md).

## 0. Mức tin cậy của từng số

PDF gắn nhãn mọi rule; giữ nhãn khi trích dẫn:

| Nhãn | Nghĩa | Cách dùng trong SmartHue |
| --- | --- | --- |
| **Stable** | Không đổi qua các bản iOS | Dùng được làm rule |
| **Measure it** | Đổi theo Liquid Glass; phải đo từ kit Figma iOS 27 của Apple | Đo lại node thật trước khi chốt số |
| **Unpublished** | Apple chưa công bố cho Duo; là phán đoán của kit (A1–A11) | Giả định có nhãn, không gọi là spec Apple; xem lại khi Apple công bố |

## 1. Đối chiếu với skill — 3 mâu thuẫn (SRC-PDF-01, đã chốt 2026-10-12)

**Kết quả chốt:** M1 → chuyển Inner sang point thật 626 × 890 / 890 × 626, sửa frame tại chỗ. M2 → keep-out ±12 pt áp cho phần tử cố định và overlay có nút; nội dung cuộn được đi qua. M3 → giữ instance rail 84 của section Ios27 (Inner hẹp hơn PDF 2 pt) và margin 20 cả bốn hướng. Geometry đầy đủ ở đầu [safe-area v2](iphone-duo-safe-area-guide.md); lý do ở [DESIGN_DECISIONS](../../DESIGN_DECISIONS.md) SRC-PDF-01. Bảng dưới giữ để hiểu khác biệt gốc.

| ID | PDF | Skill hiện tại | Ảnh hưởng |
| --- | --- | --- | --- |
| M1 | Inner **626 × 890 / 890 × 626 pt** thật, @3x = 1878 × 2670. Crease y/x = **445**. | Inner **669 × 951 / 951 × 669**, trục 475,5 | 951 ≈ 890 × 460/430: artboard phóng để hai màn cùng 460 ppi (PDF A11 nêu chính quy ước này). Hệ số **K = 951/890 ≈ 1,0685**; 445 × K ≈ 475,5. Export @3x và số bàn giao dev phải chia K. Outer 466 × 678 khớp, không cần quy đổi. |
| M2 | Keep-out **24 pt (±12) quanh crease**, cả khi mở phẳng; không đặt gì bấm được trong dải; không đặt CTA chính tâm 445 (A6, Unpublished). | “Flat không cần dải cấm vĩnh viễn ở tâm”; checker chỉ bắt khối vắt qua đường x 475,5 ở Inner L, không kiểm Inner P | Trên artboard 951: dải ≈ 475,5 ± 12,8. duo-checker v4 báo `CREASE` vào `warnings` (Inner P theo y, Inner L theo x), chưa tính là issue. |
| M3 | Rail **73 pt** outer / **75 pt** inner; margin màn **16 outer / 20 inner** (A2, A11). | Inset rail **84 pt** mọi tư thế; margin leading 20 cả outer | Outer khớp mép nội dung x382 (466 − 84 = 382; PDF: nội dung chiếm 382 pt leading). Inner landscape lệch: PDF 890 − 75 = 815 pt (≈ 871 trên artboard 951) so với skill 867. Margin outer 20 rộng hơn 16, không vi phạm nhưng khác token `margin/screen`. |

Quy đổi frame legacy chưa chuyển đổi, artboard 951 → point thật: `pt = giá trị_artboard / 1,0685` (chỉ áp cho Inner P/Inner L). Không quy đổi Outer P/Outer L.

## 2. Foundations (Stable)

| Display | Points | Native px @3x |
| --- | --- | --- |
| Inner · portrait | 626 × 890 | 1878 × 2670 |
| Inner · landscape | 890 × 626 | 2670 × 1878 |
| Outer · portrait | 466 × 678 | 1398 × 2034 |
| Outer · landscape | 678 × 466 | 2034 × 1398 |

- Inner 430 ppi, outer 460 ppi; cả hai đều @3x thật: thiết kế bằng point, export @3x.
- Crease: ngang tại y = 445 khi portrait, dọc tại x = 445 khi landscape — tâm trục dài.
- Margin: 16 pt trên chiều rộng iPhone (phủ màn ngoài); màn trong 20 pt vì 626 pt rộng hơn mọi iPhone (A2, Unpublished).
- Biến của kit: `Duo / Spacing` (space/4…48) và `Duo / Layout`, trong đó `margin/screen` = 20 ở mode Inner, 16 ở Outer.

## 3. Edge rails và status (Measure it + Unpublished)

- iOS 27 trên Duo dời chrome khỏi mép trên/dưới vào **edge rail**.
- **Outer:** rail 73 pt ở cạnh trailing. Thứ tự từ trên: camera 37 pt → status (giờ + ring) → back → nhóm toolbar → tab bar, kết thúc cách đáy 23 pt. Nội dung dùng 382 pt phía leading. Lề trong rail 11 pt (A11).
- **Inner landscape:** rail trailing 75 pt, lề trong 7 pt. Split View: mỗi pane có rail riêng ở **cạnh ngoài**, không bao giờ trên crease.
- **Inner portrait:** toolbar top-leading, status thu gọn top-trailing, tab bar nổi ở đáy.
- Control trên rail: hình tròn/capsule glass **48 pt**, cách nhau **12 pt** (POLISH-01 đang dùng gap 8 trong cụm; ghi khác biệt, chưa tự sửa).
- **Status (A8):** không có status bar ngang. Status = giờ + status ring (cung pin, chấm sóng, Wi-Fi), xếp trong rail dưới camera; inner portrait đặt bản compact ở góc top-trailing.
- **Safe area (A4):** giá trị iPhone hiện tại top 59, bottom 34 portrait / 21 landscape; thực tế chrome nằm ở rail nên nội dung có thể chạy tới mép trên cạnh rail.

## 4. Camera và góc màn (Unpublished)

- **A3 Outer:** lỗ tròn 37 pt, cách mép trên và trailing 29 pt (portrait), ở đầu rail. Khi đang dùng phình thành viên thuốc **37 × 62** có đèn xanh. Camera hướng ra ngoài khi máy mở.
- **Outer L (theo hình hướng màn trong PDF):** xoay Outer P ngược chiều kim đồng hồ — camera ở góc **trên-leading**, hai góc bo lớn ở cạnh trên, cạnh bản lề ở dưới; ví dụ “Folded · Landscape · Dark” cũng có camera trên-trái và rail phải. Template local `24731:15478` đặt lens ở dưới cạnh phải (582, 370) — **khác PDF, chờ xác minh** (chưa đưa vào M1–M3).
- **A3 Inner:** camera dưới màn ở nửa trailing, ≈ 25 pt, tâm x 635, y 40 khi landscape, không có lỗ khoét.
- **A5 Góc màn:** inner 43; outer 50 ở hai góc trailing, 3 ở góc phía bản lề. Gần mép màn dùng capsule + margin thêm thay vì bắt chước bán kính màn.
- So với skill: Camera Punchout 48 × 42 và reserved region 84 × 169 (safe-area v2) là số của kit cộng đồng; giữ cho frame hiện có, ghi khác biệt khi bàn giao.

## 5. Crease (Stable vị trí + Unpublished dải cấm)

- Không gì bấm được trên đường tâm. Hoặc đẩy nội dung ra khỏi crease, hoặc dùng nó có chủ đích làm divider giữa các section.
- Đúng: crease rơi vào gutter giữa hai nhóm nội dung. Sai: CTA chính căn giữa trên y = 445.
- Keep-out 24 pt (A6) — xem M2. Áp cho Inner P (crease ngang) lẫn Inner L (crease dọc).

## 6. Size class (A1, Unpublished)

| Canvas | Width | Class giả định | Điều hướng |
| --- | --- | --- | --- |
| Inner · landscape | 890 pt | Regular | Sidebar + detail, chia tại crease |
| Inner · portrait | 626 pt | Compact | Navigation xếp chồng, margin 20 |
| Pane Split View | ~445 pt | Compact | Xếp chồng, mỗi pane một stack |
| Outer · portrait | 466 pt | Compact | Pattern iPhone, margin 16 |
| Outer · landscape | 678 pt | Compact | Rail cạnh phải |

Lý do của kit: 626 < iPad mini 744 (regular); 890 gần Pro Max landscape 932 (regular). Nếu Apple quyết khác, template là thứ cần xem lại. Với SmartHue: Inner P coi là compact (đúng với cách đang dựng một cột/stack); Inner L là regular, cho phép list-detail.

## 7. Split View (A7, Unpublished)

- Hai pane **445 × 626 pt**, ranh giới trên crease x = 445; khe **11 pt** có grabber giữa hai pane.
- Thiết kế từng pane như compact width: hẹp hơn pane iPad và cao hơn nhiều so với rộng — là canvas mới.
- Mỗi pane có rail riêng ở cạnh ngoài; app ở pane trái có rail bên trái.
- SmartHue chưa có frame Split View; khi cần, dựng theo layout Outer P (compact) đặt trong 445 × 626 pt và kiểm rail cả hai phía. Chưa có yêu cầu user cho mục này.

## 8. Continuity khi mở/gập (A10, Unpublished — đề xuất của kit, không phải pattern Apple)

| Nhóm | Hành vi |
| --- | --- |
| Persists | Đối tượng đang xem, vị trí cuộn, selection, text đang nhập và focus bàn phím |
| Reflows | Màn ngoài trở thành pane detail; danh sách mà nó đến từ đó lấp pane leading |
| Drops | Tab bar nổi; sidebar đảm nhận điều hướng |
| Closing | Đảo ngược: detail về màn ngoài, giữ nguyên back stack |

Áp dụng SmartHue: dùng làm checklist continuity (SH-03). Chuyển tab bar → sidebar ở Inner L là **đổi điều hướng**, cần user duyệt riêng; Inner L hiện vẫn dùng tab bar dọc trên rail theo DUO-ALL.

## 9. Assumptions log của kit (A1–A11)

| ID | Nội dung |
| --- | --- |
| A1 | Size class như §6 |
| A2 | Margin 20 inner, 16 outer (`margin/screen`, mode Inner/Outer) |
| A3 | Camera như §4 |
| A4 | Safe area top 59, bottom 34/21; chrome ở rail nên nội dung chạy tới mép trên cạnh rail |
| A5 | Góc màn inner 43; outer 50 trailing / 3 phía bản lề; đo từ bezel art, không phải spec |
| A6 | Keep-out crease 24 pt (±12); không gì bấm được trong dải; dùng làm gutter/divider |
| A7 | Split View hai pane 445 × 626, divider trên crease |
| A8 | Không status bar ngang; status trong rail hoặc compact top-trailing (inner portrait) |
| A9 | Glass là hiệu ứng Figma GLASS chỉnh bằng mắt; thay bằng material từ kit iOS 27 của Apple |
| A10 | Continuity như §8 |
| A11 | Rail 73 outer (lề 11), 75 inner (lề 7), mỗi pane một rail ở cạnh ngoài; kit giữ point thật 890 × 626 thay vì artboard 951 × 669 |

## 10. Nguồn PDF dẫn và giấy phép

- **Apple iOS 27 + iPadOS 27 Figma UI Kit** (Measure it): miễn phí, chính thức, nguồn cho component và material. Cập nhật 12/8/2026 — **trước khi công bố Duo, nên không có template Duo**.
- **Apple Design Resources → bezels** (Stable): bezel Duo (mở/gập, hai màu) đăng 9/9/2026, chỉ Photoshop và PNG.
- **HIG** (Stable): trang Layout, Materials, Buttons, Color, Accessibility.
- **SF Pro, SF Symbols** (Stable): thay SF Pro variable và icon placeholder.
- **Kit cộng đồng iPhone Duo iOS 27 của Axel Bergqvist** (Unpublished): đối chiếu inset với frame của mình, không tin tuyệt đối.
- Giấy phép: Apple Design Resources dùng để thiết kế/marketing app, không phân phối lại. Bezel trong kit PDF vẽ từ số đo công bố, không đóng gói lại file Apple.

Hệ quả cho gói này: section Duo trong file “iOS and iPadOS 27 (Community)” mà [APPLE_UI_KIT_AUDIT](../../APPLE_UI_KIT_AUDIT.md) đã đọc **không thể là template Duo của Apple** theo mốc trên; coi các số 84/951/48×42 là số của kit cộng đồng/artboard 460 ppi.
