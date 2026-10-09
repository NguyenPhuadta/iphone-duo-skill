> Biên tập v2.0: đọc khi cần geometry/safe area/fold. Đây là guide v2 theo các Figma reference đã được ghi nhận; không đo lại Figma trong lần đóng gói này. Quy trình và scope theo SKILL.md/WORKFLOW.md của gói.

# iPhone Duo — Safe Area & Fold Layout Guide

**Bản thống nhất v2 — cập nhật 2026-10-07.** Dùng làm tài liệu tham khảo cho skill/agent thiết kế, triển khai và review UI cho iPhone Duo.

Tài liệu kết hợp hai nguồn: nguyên tắc trong Apple Design Skill và hình học đọc trực tiếp từ bộ Figma **Safe Area Insets and Margins**, node `24731:15441`. Mockup SmartHue được dùng làm ví dụ áp dụng, không dùng để xác lập thông số thiết bị.

## 0. Cách dùng và mức độ xác nhận

- Khi dựng mockup theo đúng bộ reference được cung cấp, dùng các số đo ở bảng dưới để khớp template.
- Khi triển khai app, lấy safe area và reserved regions từ hệ thống/container hiện tại. Các số đo Figma là snapshot của các mẫu đã kiểm tra, không phải hằng số runtime cho mọi trạng thái.
- Reference chưa cho biết kích thước vùng gập một phần. Không tự đặt kích thước vùng này.
- Không coi một component có tên “iPhone Duo” trong Figma là bằng chứng đủ để xác nhận nguồn gốc chính thức hoặc phiên bản SDK. Giữ đường dẫn nguồn và kiểm tra tài liệu SDK khi triển khai.

### Bảng reference cho màn hình chính

Tọa độ dưới đây là local của component màn hình, không gồm viền hardware mockup. Đơn vị theo template là pt; kích thước layer Figma được giữ nguyên.

| Tư thế / node | Frame W × H | Safe-area inset được đánh dấu | Layout margin được đánh dấu | Reserved region được đánh dấu |
| --- | --- | --- | --- | --- |
| Outer portrait / `24731:15493` | 466 × 678 | Cạnh phải: x=382, y=0, W=84, H=678 | Leading 20 | x=382, y=0, W=84, H=169 |
| Outer landscape / `24731:15478` | 678 × 466 | Cạnh phải: x=594, y=0, W=84, H=466 | Leading 20 | Không có layer Reserved Region riêng trong nhóm guides; camera ở phía dưới cạnh phải trong mẫu này |
| Inner landscape / `24731:15442` | 951 × 669 | Cạnh phải: x=867, y=0, W=84, H=669 | Leading 20 | x=867, y=0, W=84, H=119 |
| Inner portrait / `24731:15460` | 669 × 951 | Top: y=0, H=84; bottom: y=856, H=95; cả hai rộng 669 | Leading và trailing đều 20 | x=518, y=0, W=151, H=84 |

**Phân biệt 84pt và 48pt:** dải safe-area inset bên phải trong các mẫu dùng thanh dọc rộng **84pt**. Cụm status/tab/action bên trong có chiều rộng **48pt**; 48pt không thay thế cho 84pt khi xác định mép nội dung. Ví dụ Inner Landscape dùng mép safe area x=867, không phải x=879 là vị trí cụm nút trong mockup SmartHue.

Không cộng thêm chiều rộng reserved region vào 84pt nếu vùng đó đã nằm trong dải inset. Tính hợp các vùng bị loại trừ hoặc để container hệ thống xử lý, tránh trừ hai lần.

### Hình học bố trí nội dung theo snapshot

Với các template thanh dọc, span ngang sau safe area và margin leading là:

| Template | Span ngang cho nội dung theo reference |
| --- | --- |
| Outer portrait | x từ 20 đến 382 → rộng 362 |
| Outer landscape | x từ 20 đến 594 → rộng 574 |
| Inner landscape | x từ 20 đến 867 → rộng 847 |
| Inner portrait | x từ 20 đến 649; y từ 84 đến 856 → vùng 629 × 772 |

Đây là span tham khảo từ các layer guides. Title, padding sản phẩm, keyboard, sheet, scroll edge và các trạng thái khác có thể giảm vùng nội dung thực dùng. Không suy ra chiều cao thanh dọc của layout từ sự tồn tại của một instance toolbar cao 84 nếu nhóm guides không đánh dấu top inset ở vùng đó.

## 1. Phân biệt ba loại vùng

| Loại | Ý nghĩa | Cách sử dụng |
| --- | --- | --- |
| Safe area hệ thống | Vùng bố trí nội dung được hệ thống cung cấp cho cửa sổ hiện tại | Đọc safe area insets từ runtime; cập nhật khi cửa sổ hoặc tư thế thay đổi |
| Reserved regions | Vùng camera, Dynamic Island hoặc vùng gập cần được bố trí tránh hoặc thích ứng | Ưu tiên container hệ thống tự thích ứng; với UI custom, lấy bounds từ API hệ thống phù hợp |
| Layout margins / spacing | Khoảng cách thiết kế giữa nội dung, cạnh và các nhóm điều khiển | Dùng token thiết kế; không coi spacing của mockup là safe area phần cứng |

**Không suy ra safe area hoặc chiều rộng vùng gập từ kích thước frame Figma.** Trục giữa frame chỉ là một đường kiểm tra hình học. Vùng gập thực tế phụ thuộc trạng thái thiết bị và cần xác nhận từ hệ thống.

## 2. Nguyên tắc và cách áp dụng layout

1. Bố trí theo không gian thực sự có sẵn và size classes. Tránh phụ thuộc vào tên thiết bị, hướng màn hình hoặc một kích thước frame cố định.
2. Khi máy mở phẳng, không tự tạo một vùng cấm cố định ở giữa chỉ vì màn hình có nếp gập.
3. Với grid/card điều khiển SmartHue khi gập một phần, xác định các vùng sử dụng được sau khi xét safe area và reserved regions. Giữ thẻ, chữ quan trọng, toggle, slider và vùng chạm trọn trong một vùng sử dụng được.
4. Trong grid/card điều khiển SmartHue, không để một thẻ hoặc cụm điều khiển quan trọng bắc ngang vùng gập bị loại trừ. Background trang trí có thể phủ rộng nếu không che nội dung và không làm điều khiển khó dùng.
5. Ưu tiên layout/container hệ thống có khả năng thích ứng với reserved regions. Với layout custom, dùng bounds do runtime cung cấp để bố trí lại nội dung.
6. Grid cần thích ứng theo từng vùng sử dụng được. Có thể dùng số cột chẵn để phân chia thuận lợi; nếu một vùng không đủ rộng, giảm số cột, xếp dọc hoặc cho cuộn thay vì ép thẻ nhỏ và khó thao tác.
7. Với Home, giữ navigation riêng với vùng content cards; container hệ thống có thể quản lý chrome theo framework. Giữ thứ tự chức năng và vị trí tương đối của các điều khiển ổn định khi đổi tư thế.
8. Giữ cùng chức năng và trạng thái giữa màn hình ngoài, màn hình trong và các tư thế: phòng đang chọn, trạng thái bật/tắt, độ sáng và vị trí đang xem phải được bảo toàn khi thích hợp.
9. Bố trí theo toàn bộ vùng khả dụng; tránh trừ safe area hoặc reserved region hai lần nếu container hệ thống đã xử lý chúng.


## Home content bounds

**Policy user:** Home inner landscape hai pane bằng rộng, custom grid4 và card không kéo giãn theo chiều cao pane. Các rule này khác với geometry snapshot của kit. Snapshot v3 và trạng thái nghiệm thu chỉ lưu ở [Home handoff](../../HOME_DEMO_HANDOFF.md).

1. Ghi screen/container bounds và pose; loại safe area/active reserved regions đúng một lần. Span inner flat 20→867 là reference, chưa là content container cuối.
2. Khai báo product padding ngoài hai pane và gutter trong scope đã duyệt. Nếu template đã gồm margin/padding, không trừ lại. Đặt `C` là content width sau các khoản này, `G` là gutter; flat hai pane có `P_left = P_right = (C - G) / 2`.
3. Kiểm tra pane/card/tokens custom theo grid4. Nếu kết quả chia không hợp grid, điều chỉnh product padding/gutter trong quyền hiện có; ghi phần dư và bounds kết quả. Không làm tròn width native screen/kit hoặc tự thêm khoảng chừa không có lý do.
4. Card cao theo nội dung/control/spacing; không bind height theo full pane để lấp màn. Không cố giữ dimensions v3 khi chữ/content thay đổi.
5. Partial fold dùng bounds active thực tế; tâm usable content không mặc định là tâm hinge. Kiểm tra từng pane/card và hit region với vùng dùng được. Chưa có bounds: ghi partial chưa kiểm chứng, tiếp tục flat; proposal partial chỉ dùng giả định được ghi nhãn. Không tạo một band hardware giả.
6. Nếu equal panes/grid4/linked kit không thể cùng thỏa trong các regions, ghi constraint, đề xuất cụ thể kèm trade-off: padding/width/reflow còn trong scope hoặc thay presentation của cấu hình đó. Phần đổi ngoài scope cần duyệt riêng; không tự bỏ rule user hoặc chặn việc flat độc lập.

**Phân biệt scrolling:** bài/list/document cuộn liên tục không mặc định cần displacement thành hai pane. Grid điều khiển tương tác có thể reflow/đổi spacing để giữ card trong vùng dùng được. Scroll không tự chứng minh control qua hinge vẫn dễ dùng. Quyết định theo loại nội dung, bằng chứng và scope.

## 3. Camera và thanh điều khiển dọc

- Outer portrait, outer landscape và inner landscape dùng thanh dọc trong bộ reference. **Inner portrait dùng toolbar ngang phía trên và tab bar ngang phía dưới.** Không áp dụng rail dọc cho mọi tư thế.
- Tính đến vùng camera ngoài và khả năng vùng này mở rộng khi hiển thị Dynamic Island/Live Activities.
- Tính đến vùng camera trong khi camera hoạt động; không giữ một khoảng trống cố định khi hệ thống không yêu cầu.
- Theo vị trí mặc định của toolbar, tab bar và navigation do hệ thống quản lý. Không khóa mọi thanh vào cạnh phải: khi Split View, cạnh đặt thanh có thể thay đổi theo phía cửa sổ.
- Giữ điều khiển thuộc một vùng nội dung gần nội dung mà nó tác động, ví dụ điều khiển cả nhóm đèn nằm cùng panel nhóm đèn.
- Cung cấp tên và biểu tượng cho các mục toolbar phù hợp, để hệ thống có thể dùng tên trong overflow menu hoặc dạng hiển thị mở rộng.
- Khi thiếu không gian, xác định ưu tiên các hành động và dùng overflow hệ thống; tránh để thanh điều khiển phủ lên nội dung hoặc vùng chạm.

### Sheet có hệ tọa độ và safe area riêng

Các số dưới đây đọc từ bốn component `iPhone Duo/Sheets` trong reference. Bounds sheet là local của màn hình; inset/margin bên trong sheet là local của sheet.

| Tư thế / node | Bounds sheet trên màn hình (x, y, W, H) | Safe-area inset bên trong sheet | Layout margin bên trong sheet |
| --- | --- | --- | --- |
| Outer portrait / `24731:15603` | (8, 314, 450, 356) | Top 76; trailing 76, x=374 | Leading 16 |
| Outer landscape / `24731:15574` | (8, 8, 662, 458) | Top 76; trailing 76, x=586 | Leading 16 |
| Inner landscape / `24731:15513` | (149, 305, 653, 356) | Top 76 | Leading/trailing 16 |
| Inner portrait / `24731:15544` | (8, 587, 653, 356) | Top 76 | Leading/trailing 16 |

- Sheet ngoài có dải inset bên phải 76pt trong các mẫu này; không lấy 84pt của màn hình rồi trừ thêm vào nội dung sheet đã xử lý inset.
- Sheet trong có margin 16pt ở cả hai cạnh, khác với margin 20pt của màn hình chính.
- Vị trí và kích thước sheet ở bảng là trạng thái minh họa; không khóa mọi detent hoặc tư thế vào các bounds này.
- Khi chuyển tư thế hoặc gập một phần, ưu tiên sheet hệ thống thích ứng với reserved regions. Với sheet custom, kiểm tra lại nội dung và vùng chạm theo safe area riêng của sheet.

## 4. Cách bố trí khi gập một phần

```text
┌────────────────────┬────────────────┬────────────────────┐
│ Vùng sử dụng trái  │ Vùng gập       │ Vùng sử dụng phải  │
│                    │ theo runtime   │                    │
│ Rooms / Group      │                │ Light cards        │
│ controls           │                │ Toggle / Slider    │
└────────────────────┴────────────────┴────────────────────┘
```

Sơ đồ minh họa, không theo tỷ lệ. Với pattern tổng quát, hai vùng nội dung không nhất thiết bằng nhau. Riêng SmartHue Home inner landscape, feedback RV02 yêu cầu hai panel bằng rộng; dùng mục Home content bounds cho flat/partial và cách trình xung đột. Không dùng `screenWidth / 2` làm ràng buộc cố định cho mép panel hoặc chiều rộng vùng gập.

Quy trình bố trí ở mức khái niệm:

```text
Đọc bounds cửa sổ + safe area + reserved regions hiện tại.
Nếu container hệ thống đã thích ứng, giữ việc bố trí của container đó.
Nếu layout custom và vùng gập đang loại trừ phần giữa:
  xác định các vùng nội dung khả dụng;
  bố trí nguyên khối thẻ/điều khiển trong từng vùng;
  giảm số cột hoặc cho cuộn khi thiếu chỗ;
  bảo toàn state và thứ tự nội dung.
Cập nhật khi kích thước, tư thế, camera hoặc trạng thái hệ thống thay đổi.
```

Đây là pseudocode về hành vi, không phải tên API hay đoạn code có thể chạy trực tiếp. Xác nhận API và khả năng hỗ trợ của SDK/framework đang dùng trước khi triển khai.

## 5. Áp dụng vào mockup SmartHue đang được review

- Inner Landscape hiện có frame rộng **951 đơn vị thiết kế**. Trục giữa hình học là **x = 475,5**.
- Thẻ đèn đầu tiên bắt đầu khoảng **x = 444**, nên trục giữa đi qua thẻ. Đây là dấu hiệu cần kiểm tra ở trạng thái gập một phần; chưa đủ để xác nhận lỗi runtime.
- Các khoảng **20/24** trong mockup là spacing thiết kế, không phải safe area insets của thiết bị.
- Bounds component camera trong Figma không phải thông số chính thức của vùng camera hoặc Dynamic Island.
- Safe-area reference ở Outer Portrait bắt đầu tại x=382, trong khi viewport nội dung SmartHue hiện kết thúc tại x=360. Inner Landscape có safe-area reference bắt đầu tại x=867, trong khi viewport hiện kết thúc tại x=840. Hai viewport này đang nằm bên trong mép safe-area ngang của snapshot; phần khoảng trống thêm là quyết định layout sản phẩm.
- Guide overlay ban đầu tô cụm rail 48pt. Bản thống nhất dùng dải inset 84pt theo reference và phân biệt rõ nó với cụm nút.
- Khi thêm biến thể gập một phần, bố trí panel nhóm đèn và grid theo vùng sử dụng được. Nếu grid phải thu hẹp, cho thẻ chuyển sang một cột trước khi làm toggle/slider quá nhỏ.

Guide Figma: https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/SmartHue---HuyHL-PhuNH?node-id=24833-4677

## 6. Checklist nghiệm thu

| Trạng thái | Điều cần kiểm tra |
| --- | --- |
| Màn hình ngoài | Nội dung tránh camera/thanh hệ thống; các chức năng chính vẫn truy cập được |
| Màn hình trong, landscape | Không gian mở rộng hợp lý; hierarchy và state giữ nguyên |
| Màn hình trong, portrait | Toolbar/tab bar theo bố trí hệ thống; layout thích ứng với không gian thực tế |
| Gập một phần | Thẻ, chữ quan trọng và vùng chạm không giao vùng gập bị loại trừ |
| Split View ở cả hai phía | Safe area và cạnh đặt thanh cập nhật; không hard-code rail bên phải |
| Camera trong bật/tắt | Layout đáp ứng vùng camera hiện tại, tránh khoảng trống cố định không cần thiết |
| Dynamic Island/Live Activities | Nội dung và điều khiển thích ứng khi vùng hệ thống thay đổi |
| Chữ lớn, nhãn dài | Chữ reflow; không cắt nhãn, chồng vùng chạm hoặc đẩy điều khiển vào vùng bị loại trừ |
| Chuyển mở/gập/resize | Không mất trạng thái đèn, phòng đang chọn hoặc chức năng; vị trí thay đổi dễ theo dõi |
| Sheet ở cả bốn tư thế | Dùng safe area của sheet; phân biệt top/trailing inset 76pt của mẫu với 84pt của màn hình chính |
| Overlay bounds trong Figma | So sánh theo local coordinates của đúng frame; phân biệt dải inset 84pt, cụm nút 48pt và margin 20/16pt |

Mockup dùng để kiểm tra bố cục. Hành vi thích ứng, vùng chạm, accessibility và tính đúng đắn của safe area cần được kiểm tra bằng prototype/implementation và runtime phù hợp.

## 7. Rule cho agent khi review

- Nêu rõ trạng thái thiết bị và loại bằng chứng: Figma, screenshot, prototype hay code/runtime.
- Phân biệt lỗi đã quan sát được, rủi ro cần kiểm tra và dữ liệu chưa có.
- Không kết luận lỗi vùng gập chỉ từ đường giữa frame mở phẳng.
- Không tự đặt kích thước vùng gập, camera, safe area hoặc thông số phần cứng nếu không có nguồn xác nhận.
- Mỗi finding gồm: vấn đề, bằng chứng, tác động, nguồn guideline và cách sửa theo framework.
- Nếu thiếu dữ liệu runtime, chỉ rõ trạng thái cần bổ sung để xác nhận.

## Nguồn

- Figma reference **Safe Area Insets and Margins**: https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/SmartHue---HuyHL-PhuNH?node-id=24731-15441
- SmartHue Home được review: https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/SmartHue---HuyHL-PhuNH?node-id=24805-6013
- Apple Design Skill trong archive tham khảo ban đầu: `apple-design-skill-main/SKILL.md` (không bundle trong gói).
- Đường dẫn trong archive Apple Design Skill gốc, không phải dependency local của gói: `references/hig/designing-for-iphone-duo.md` → **Dynamic layouts**, **Reserved regions**, **Vertical controls**.
- Đường dẫn trong archive Apple Design Skill gốc, không phải dependency local của gói: `references/hig/layout.md` → **Adaptability**, **Size classes**, **Guides and safe areas**.
- Trang Apple được tài liệu dẫn nguồn: https://developer.apple.com/design/human-interface-guidelines/designing-for-iphone-duo

Các hướng dẫn chia grid, fallback một cột và quy trình kiểm tra ở đây là cách vận dụng guideline vào SmartHue. Chúng không quy định thông số phần cứng hay bảo đảm implementation đã đạt yêu cầu.
