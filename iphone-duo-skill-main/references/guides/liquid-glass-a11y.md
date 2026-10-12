# Liquid Glass, type, spacing, contrast và library iOS 27

Mở khi dựng/review control, card, list, typography, màu/contrast, appearance mode hoặc khi chọn component Apple cho frame Duo. Tóm tắt từ PDF **“iPhone Duo × iOS 27 — UI kit & reference”** (ngoài gói, nhận 2026-10-12); nhãn Stable / Measure it / Unpublished giải thích ở [ios27-duo-kit §0](ios27-duo-kit.md). Không áp các rule này để đổi UI nguồn ngoài scope: khi frame nguồn vi phạm, ghi finding và hỏi user trước khi sửa.

## 1. Liquid Glass (Stable)

1. **Glass chỉ thuộc lớp control:** tab bar, toolbar, button, menu, sheet, navigation, search. **Không bao giờ** cho card, list row hay content container — lỗi hay gặp nhất của mockup “Liquid Glass giả”.
2. **Không chồng glass lên glass:** render đục. Gom control liên quan vào một container với một lớp glass.
3. **Thiết kế cho cả hai đầu thanh trượt trong suốt** (iOS 27 Settings → Appearance: trong suốt tối đa ↔ mờ tối đa). Không để nền xuyên qua glass mang ý nghĩa. Cùng nút, cùng layout phải đọc được ở cả hai đầu (Measure it).
4. **Để nội dung nổi bật:** nếu glass là thứ đầu tiên thấy trong screenshot thì đang dùng quá nhiều.

Áp dụng SmartHue: card đèn, card phòng, list Settings, card Automation không dùng glass. Nút rail đổi màu theo ảnh nền (ví dụ nút Settings Music Sync, FIX-01) phải kiểm cả ở đầu “mờ tối đa”.

## 2. Bo góc đồng tâm (Stable)

- Hình bo lồng nhau chung tâm, không chung bán kính: **bán kính trong = bán kính ngoài − padding**. Ví dụ đúng: ngoài 32, padding 12 → trong 20. Sai: cùng 32 bên trong làm khe bị thắt ở góc.
- Gần mép màn, dùng capsule + margin thêm thay vì khớp bán kính góc màn (góc màn: [ios27-duo-kit §4](ios27-duo-kit.md)).
- Với WF07: bán kính custom vẫn theo bội 4 (32 − 12 = 20 thỏa); nếu padding lẻ làm bán kính trong không còn bội 4, ghi xung đột thay vì phá rule đồng tâm.

## 3. Buttons (Stable)

| Kích thước | Dùng cho |
| --- | --- |
| 50 pt | Action chính full-width |
| 44 pt | Tối thiểu cho mọi thứ bấm được, kể cả màn ngoài |
| 28–34 pt | Nút inline nhỏ, kèm vùng chạm ẩn 44 pt (cần dev làm trong code) |

Button Liquid Glass mặc định là **capsule**. Hình chữ nhật bo 8 pt trông như iOS 16. Không tự đổi hình dạng nút nguồn của SmartHue; ghi finding nếu nút custom lệch.

## 4. Content: card và list (Stable; số inset group là Measure it)

- Card, list row, content container không bao giờ là glass; glass nổi phía trên chúng.
- Hàng list cao 44 pt, có subtitle thì 60 pt.
- Separator thụt theo chữ, không theo mép cell.
- Bán kính lồng nhau đồng tâm.
- Bán kính và inset của inset group đổi từ iOS 26 — đo từ kit Apple, không đoán.

## 5. Type scale iOS 27 — SF Pro, Large Dynamic Type (Stable)

| Style | Size / Leading | Weight | Tracking | Optical size |
| --- | --- | --- | --- | --- |
| Large Title | 34 / 41 | Regular | +0.4 | Display |
| Title 1 | 28 / 34 | Regular | +0.36 | Display |
| Title 2 | 22 / 28 | Regular | +0.35 | Display |
| Title 3 | 20 / 25 | Regular | +0.38 | Display |
| Headline | 17 / 22 | Semibold | −0.43 | Text |
| Body | 17 / 22 | Regular | −0.43 | Text |
| Callout | 16 / 21 | Regular | −0.31 | Text |
| Subheadline | 15 / 20 | Regular | −0.23 | Text |
| Footnote | 13 / 18 | Regular | −0.08 | Text |
| Caption 1 | 12 / 16 | Regular | 0 | Text |
| Caption 2 | 11 / 13 | Regular | +0.06 | Text |

- Apple dùng SF Pro Text dưới 20 pt và SF Pro Display từ 20 pt (khác tracking/aperture). Kit PDF chỉ có SF Pro variable; nếu máy có Text/Display thì đổi family trong style `iOS 27/*`.
- **Quan hệ với WF07:** text style hệ thống giữ đúng bảng trên (17/22, 15/20, 13/18, 11/13… không phải bội 4) — đây là intrinsic của kit, không ép về bội 4. WF07 chỉ áp cho size/leading **custom** ngoài bảng.

## 6. Grid và spacing (Stable)

- Đơn vị gốc 4 pt; phần lớn spacing hệ thống là bội 8.
- Margin màn 16 pt trên chiều rộng iPhone (màn ngoài); màn trong 20 pt (Unpublished, A2) — xem M3 ở [ios27-duo-kit §1](ios27-duo-kit.md).
- Vùng chạm tối thiểu 44 × 44 pt, không thương lượng, kể cả màn ngoài.
- Nhịp dọc: **24–32 pt giữa các nhóm nội dung, 8–12 pt giữa các mục liên quan**.
- Biến: `Duo / Spacing` (space/4…48), `Duo / Layout` (`margin/screen` 20 Inner / 16 Outer).

## 7. Màu và accessibility (Stable, theo HIG Color/Accessibility/Materials)

**Hướng dẫn Apple**

- Dùng màu hệ thống/semantic (`label`, `secondaryLabel`, `systemBlue`…) để tự thích ứng Light, Dark và Increase Contrast. Kit có collection `Duo / Appearance` bốn mode: Light, Dark, Light · Increased Contrast, Dark · Increased Contrast.
- Không dùng màu làm tín hiệu duy nhất: kèm nhãn, symbol, hình dạng hoặc vị trí. Tab chọn = accent + capsule; destructive = đỏ + chữ.
- Màu tertiary dành cho nội dung phụ: chevron, trạng thái disabled, divider — không cho chữ cần đọc. Placeholder, chữ disabled, chữ trang trí được miễn; placeholder là nhãn duy nhất của ô nhập thì **không** được miễn.
- Chữ trên glass dùng `label/primary`. Glass mờ hơn và có viền khi bật Increase Contrast hoặc Reduce Transparency: kiểm cả hai, cả khi phía sau là nội dung nhiều chi tiết.
- Kiểm theo setting chứ không chỉ mockup: Dark Mode, Increase Contrast, Reduce Transparency, Smart Invert, Dynamic Type lớn nhất.

**Ngưỡng contrast (công thức WCAG, Apple dùng cùng tỷ lệ)**

| Nội dung | Tối thiểu |
| --- | --- |
| Chữ đến 17 pt, regular | 4.5 : 1 |
| Chữ từ 18 pt | 3 : 1 |
| Chữ đậm, mọi cỡ | 3 : 1 |
| Symbol, glyph, viền control | 3 : 1 |

**Token chữ nhỏ (Measure it).** secondaryLabel mặc định (3.4:1), Blue (3.5:1), Red (3.6:1) của Apple không đạt 4.5:1 trên nền trắng ở cỡ chữ thường. Chữ dưới 18 pt dùng `label/secondary-text`, `tint/accent-text`, `tint/red-text` (giá trị increased-contrast của chính Apple). Symbol và nhãn đậm giữ tint mặc định (đạt 3:1).

**Contrast token, bốn mode (✓ ≥ 4.5 · ◐ 3–4.5 chỉ cho chữ lớn/đậm/symbol · ✕ < 3)**

| Foreground trên background | Dùng cho | Light | Dark | Light IC | Dark IC |
| --- | --- | --- | --- | --- | --- |
| label/primary trên bg/primary | Chữ | ✓ 21.00 | ✓ 21.00 | ✓ 21.00 | ✓ 21.00 |
| label/secondary trên bg/primary | Chữ | ◐ 3.44 | ✓ 6.36 | ✓ 5.02 | ✓ 10.57 |
| label/secondary-text trên bg/primary | Chữ | ✓ 5.23 | ✓ 6.36 | ✓ 7.54 | ✓ 9.50 |
| label/secondary-text trên bg/grouped | Chữ | ✓ 4.69 | ✓ 6.36 | ✓ 6.75 | ✓ 9.50 |
| label/tertiary trên bg/primary | Phụ | ✕ 1.73 | ✕ 2.25 | ✕ 2.69 | ✓ 4.61 |
| tint/accent trên bg/primary | Symbol / đậm | ◐ 3.52 | ✓ 6.49 | ✓ 4.57 | ✓ 9.76 |
| tint/accent-text trên bg/primary | Chữ | ✓ 4.57 | ✓ 6.49 | ✓ 4.57 | ✓ 9.76 |
| tint/on-accent trên tint/accent | Nhãn đậm | ◐ 3.52 | ◐ 3.23 | ✓ 4.57 | ✓ 9.77 |
| tint/red trên bg/primary | Symbol / đậm | ◐ 3.57 | ✓ 6.12 | ✓ 4.56 | ✓ 7.15 |
| tint/red-text trên bg/primary | Chữ | ✓ 4.56 | ✓ 6.12 | ✓ 4.56 | ✓ 7.15 |
| label/primary trên glass/tint | Chữ | ✓ 21.00 | ✓ 19.58 | ✓ 21.00 | ✓ 18.01 |

Glass tint đo trên bg/primary không có nội dung phía sau; màn thật phải kiểm lại trên ảnh. Đây là token của kit PDF, **không phải** token màu SmartHue — dùng ngưỡng và cách kiểm, còn màu SmartHue đo trên frame thật.

**Audit template của kit (để biết lỗi điển hình).** 16 template, 276 text layer và 160 symbol mỗi lượt; còn 4 lỗi: Sidebar Dark IC “Search” secondary-text 4.46; Split View Dark IC icon 2.15; Tab bar Light (inner portrait, outer portrait) icon tint/accent 2.88 < 3. Tap target < 44: 0. Đã sửa: vertical tab item nới 40 → 44; control < 44 (nút nhỏ, grabber Split View, segment) cần hit area ẩn 44 trong code. Còn phải kiểm trên máy: glass trên ảnh nhiều chi tiết, glass Dark khi Reduce Transparency, Dynamic Type lớn nhất (frame cố định không mô phỏng reflow).

Áp dụng SmartHue (Dark là mode nguồn): đo contrast chữ xám phụ, icon tab chưa chọn, chữ trên ảnh hero/gradient (OB, Music, Automation) và nhãn trên nút glass; ghi số đo cùng node. Mode IC chưa có trong file SmartHue — ghi là chưa kiểm chứng, không tự tạo collection mới khi chưa có yêu cầu.

## 8. Library wiring (Measure it)

> **WF09 — SmartHue không dùng bảng này để lấy component.** Component hệ thống/Duo chỉ lấy từ section Ios27 `24730:17902` trong file SmartHue. Bảng dưới chỉ giữ để hiểu vai trò từng loại control và để kiểm mode; khi section Ios27 thiếu vai trò nào thì ghi gap và hỏi user, không subscribe/import thư viện Apple hay kit ngoài.

Kit subscribe thư viện Apple “iOS and iPadOS 27”: UI chuẩn lấy từ Apple, phần riêng Duo để local. Component Apple có kích thước iPhone (~402 pt) và iPad, resize theo canvas Duo.

| Vai trò | Thư viện iOS 27 | Trạng thái |
| --- | --- | --- |
| Button | Button - Liquid Glass - Text / Symbol | Dùng của Apple |
| Tab bar ngang | Tab Bar - iPhone | Dùng của Apple |
| Tab bar dọc (rail) | — | Riêng Duo |
| Nhóm glass / control của pane | Toolbar - Bottom - iPhone, Toolbar - Top - iPad | Dùng của Apple khi vừa |
| Status bar cổ điển | Status bar - iPhone | Dùng của Apple |
| Status (rail + ring) | — | Riêng Duo |
| Keyboard | Keyboard | Dùng của Apple |
| List row / group | Row, Row - Button, Row with Swipe Actions, Header | Dùng của Apple |
| Sidebar | Sidebar Row, Sidebar Search Field | Shell Duo, row Apple |
| Search | Text Field, Sidebar Search Field | Dùng của Apple |
| Segmented control | Segmented Control | Dùng của Apple |
| Toggle | Toggle - Switch | Dùng của Apple |
| Slider | Sliders | Dùng của Apple |
| Menu | Menu, Menu Items, Context Menu | Dùng của Apple |
| Alert | Alert, Action Sheet | Dùng của Apple |
| Sheet | Sheet - iPhone, Sheet - iPad, Grabber | Dùng của Apple |
| Home indicator | Home Indicator | Dùng của Apple |
| Section header | Section Title, Separator | Dùng của Apple |
| Icon | — (placeholder) | Thay bằng SF Symbols thật |
| Bezel, camera, crease, rail | — | Riêng Duo |

**Map token (Unpublished):** `label/primary` → Labels/Primary; `label/secondary` → Labels/Secondary; `label/tertiary` → Labels/Tertiary; `label/secondary-text` → không có (grey increased-contrast của Apple); `bg/primary` → Backgrounds/Primary; `bg/secondary` → Backgrounds/Secondary; `bg/grouped` → Backgrounds (Grouped)/Primary; `bg/grouped-cell` → Backgrounds (Grouped)/Secondary; `bg/elevated` → Backgrounds/Primary - Elevated; `separator` → Separators/Non-opaque; `tint/accent` → Accents/Blue; `tint/accent-text` → không có (Blue increased-contrast).

**Mode (Stable):** mỗi template set **cả hai collection** — `Duo / Appearance` cho màu kit và `Colors` của Apple cho component thư viện bên trong. Template Light set Apple → Light, Dark set Apple → Dark. Hai mode Increased Contrast là của kit; thư viện Apple không có IC nên component Apple trong frame IC giữ màu Light/Dark — kiểm trên máy. Component thư viện trông sai: kiểm mode Apple trước (Design panel → Appearance).

Áp dụng SmartHue: theo WF09 chỉ dùng component trong section Ios27 `24730:17902`; bảng trên chỉ để hiểu vai trò và kiểm mode, không để chọn component Apple khi local thiếu. Quy tắc “set cả hai collection” trùng với gotcha đã gặp ở BRIDGE-01 (frame clone thiếu `explicitVariableModes` → toolbar Inner P render Light): luôn chép mode Dark cấp frame từ frame Duo mẫu.
