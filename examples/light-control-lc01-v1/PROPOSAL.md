# LC01 v1 — Smart Light Control

Ngày dựng: 2026-10-10. Trạng thái: **đã dựng bản nháp Figma theo yêu cầu “Build tạm vô đây” sau HTML LC01 v1**. Ngày 2026-10-11, user phản hồi “ngon đó” và yêu cầu push ví dụ vào repo iphone-duo-skill. Không suy phản hồi này thành xác nhận runtime hoặc nghiệm thu các tư thế ngoài scope.

[Bản nháp Figma](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/SmartHue---HuyHL-PhuNH?node-id=25061-926) · [Inner](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/SmartHue---HuyHL-PhuNH?node-id=25062-926) · [Outer](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/SmartHue---HuyHL-PhuNH?node-id=25062-965).

## Nguồn và scope

- File `mklhEcafiTfj9FoGIUhA0M`, node `19508:17069`, `1_changecolor`, 393 × 852. Đã đọc metadata, context và screenshot hiện tại.
- Giữ ảnh phòng, 3 màu hiện có, slider hiển thị mờ, title/mô tả và Continue. Không thêm action/navigation.
- Layer nhãn `19508:17077` bị ảnh phòng che trong render; button `19508:17076` nằm dưới mép frame. Không đưa hai phần không hiện này thành action/nội dung mới.
- Proposal chỉ gồm inner landscape mở phẳng và outer portrait.

## Bố cục đề xuất

- Inner: companion, ảnh bên trái; màu → độ sáng → title/mô tả → Continue bên phải. Template 951 × 669; span reference 20→867 rộng847; 3 padding sản phẩm +400 ảnh +24 gutter +420 controls =847. Không áp rule equal panes của Home vào màn này.
- Outer: giữ thứ tự nguồn theo trục dọc. Template466 ×678, span20→382 rộng362; dùng content360 và2 padding sản phẩm. Ảnh176 cao để controls và Continue vẫn nằm trong bố cục.
- Custom spacing/padding/control geometry theo grid4. Native template giữ nguyên. Không tạo band vùng gập giả cho flat.
- Trade-off: ảnh outer nhỏ hơn nguồn. Partial fold, inner portrait, outer landscape và runtime chưa kiểm chứng.

## Nguồn kit và guideline

- Button `19508:17101`: linked main `5:108582`; Dark / Large / Filled / Enabled / On material=False / Label Type=Text; Label=Continue. Tái dùng khi được duyệt dựng Figma.
- Đọc lại local template `24731:15442` và `24731:15493`, kích thước khớp safe-area guide v2.0. Các inset là snapshot từ guide, không xác nhận runtime.
- Skill v2.0: WORKFLOW, panes và safe-area đọc theo quyết định layout. HIG Layout dùng bản lưu trong Apple Design Skill; trang Apple live Layout/Buttons chỉ trả yêu cầu JavaScript. Ảnh source Figma là visual anchor đã xem.

## Preview

- `index.html`: một file tự chứa, không dùng ảnh render làm asset; placeholder ảnh và khối controls theo yêu cầu HTML đơn giản.
- Đã xem cả hai layout trong browser, sửa fit-to-preview để màn trong hiển thị trọn khi panel hẹp. `inner-preview.png`, `outer-preview.png` ghi render đã xem.
- User đã cho phép dựng tạm LC01 v1 vào section `25058:5271` bằng yêu cầu “Build tạm vô đây”. Quyền này áp cho bản nháp, không coi là nghiệm thu UI hoàn thiện.

Slider có opacity mờ ở nguồn, chưa đủ dữ liệu suy ra disabled hay điều kiện kích hoạt. HTML không mô phỏng hành vi đèn hoặc Continue.

## Handoff bản nháp Figma

- Đích: page Onboarding `19486:75522`, section `25058:5271`; wrapper `25061:926` đặt tại local64,96, rộng1481 ×678, nằm trong section1771 ×909.
- Inner flat: `25062:926`, 951 ×669; body `25062:927`, x20/y118.5, 844 ×432; pane ảnh400, controls420, gutter24.
- Outer portrait: `25062:965`, 466 ×678; body `25062:966`, x20/y49, 360 ×580.
- Continue instances `25062:945` và `25062:984` đều linked main `5:108582`, không detach.
- Artwork dùng image fill clone từ nguồn; các thẻ/màu/slider/copy là layers editable clone và bố trí Auto Layout. Nhóm màu và slider nguồn là custom frames, đã tái dùng, không tạo replacement component.
- Font SF Pro, text styles và bindings native của linked Button được giữ; các số13/18/17/22 của native text không làm tròn theo custom grid4. Bản Figma dùng typography nguồn, không dùng typography minh họa của HTML.
- Đã read-back dimensions, text, linkage và xem composition render; không thấy overflow trong các container đã kiểm. Source/main không bị sửa.
- Dải snapshot84 giữ trống; không thêm navigation/chrome/action mới. Partial fold và safe area runtime chưa kiểm chứng.
