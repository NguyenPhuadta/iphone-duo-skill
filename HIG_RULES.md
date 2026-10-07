> Hồ sơ kế thừa v1.8: đọc đúng phần/mốc cần thiết, không đọc toàn bộ mỗi lượt. Quy trình hiện hành ở [SKILL.md](SKILL.md) và [WORKFLOW.md](WORKFLOW.md); trạng thái tổng hợp ở [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md). Các mục cũ là lịch sử; claim về asset/bằng chứng không có file cần đối chiếu [MISSING_ASSETS.md](MISSING_ASSETS.md).

# SmartHue — Quy tắc thiết kế theo Apple HIG

> Kiểm tra nguồn ngày 2026-10-06. Áp dụng cho việc thiết kế/review Home, điều khiển từng đèn, OB và kết nối thiết bị trên iPhone Duo.
> Đây là bản tổng hợp có chọn lọc, không thay thế toàn bộ HIG hoặc xác nhận app đã tuân thủ.

## Cách đọc và áp dụng

- **HIG-xx:** diễn giải hướng dẫn Apple, giữ nguồn để kiểm tra lại. Phần “Kiểm tra” chuyển hướng dẫn thành tiêu chí review cho dự án.
- **SH-xx:** cách áp dụng đề xuất cho SmartHue, cần đối chiếu UI, product và dev; không trình bày như câu chữ hoặc yêu cầu trực tiếp của Apple.
- Không biến mọi khuyến nghị HIG thành điều kiện App Store bắt buộc. Khi có ngoại lệ hoặc xung đột, ghi rule ID, lý do, trade-off và cách kiểm chứng trong DESIGN_DECISIONS.md; tuân theo thứ tự ưu tiên hướng dẫn của phiên làm việc.
- Mỗi tiêu chí có trạng thái **Đạt / Cần sửa / Không áp dụng kèm lý do / Chưa kiểm chứng**, cùng bằng chứng từ frame/prototype hoặc runtime. Ảnh đẹp không chứng minh hành vi runtime, accessibility hay command flow đúng.

## A. Hướng dẫn Apple và tiêu chí review

| ID | Hướng dẫn được diễn giải | Kiểm tra trên SmartHue | Nguồn |
| --- | --- | --- | --- |
| HIG-01 | Layout thích ứng với vùng sử dụng, size classes và thay đổi cỡ chữ; tôn trọng margins/safe areas. | Kiểm tra resize, portrait/landscape, text dài; không suy kích thước nội dung từ bezel hoặc độ phân giải vật lý. | [Layout](https://developer.apple.com/design/human-interface-guidelines/layout?changes=lat_3__1_2) |
| HIG-02 | Duo đặt bars ở cạnh bên, trừ màn trong dọc; Split View đặt controls ở cạnh ngoài từng app. | So thứ tự actions và vị trí bars với kit; kiểm tra cả phía trái/phải, overflow và labels của symbols. | [Designing for iPhone Duo](https://developer.apple.com/design/human-interface-guidelines/designing-for-iphone-duo) |
| HIG-03 | Chuyển màn/tư thế vẫn giữ chức năng, trạng thái và cấu trúc thông tin quen thuộc. | Theo dõi selection, bước luồng và giá trị đang chỉnh; mọi tác vụ chính vẫn tiếp cận được khi vùng app hẹp. | [Designing for iPhone Duo](https://developer.apple.com/design/human-interface-guidelines/designing-for-iphone-duo) |
| HIG-04 | Thích ứng với vùng gập/camera và tránh đổi bố cục quá đột ngột; ưu tiên container có sẵn nếu phù hợp. | Controls quan trọng không nằm trên vùng gập; đánh dấu phần cần simulator kiểm tra. Không mặc định mọi màn đều hai cột. | [Designing for iPhone Duo](https://developer.apple.com/design/human-interface-guidelines/designing-for-iphone-duo) |
| HIG-05 | Controls thuộc một vùng nội dung nên ở gần vùng đó; controls quá rộng không nhất thiết chuyển sang rail. | Slider đèn không tự biến thành toolbar item; phân biệt điều hướng toàn app và thao tác nội dung. | [Apple — Design for Duo](https://developer.apple.com/videos/play/tech-talks/111466/) |
| HIG-06 | HIG Buttons khuyến nghị hit region ít nhất 44 × 44 pt và khoảng cách đủ; custom button có press state. | Ghi riêng hit area và icon size; không thu nút chỉ để nhét nhiều nội dung. Mẫu 48 trong kit không phải icon luôn rộng 48. | [Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons?changes=latest_1) |
| HIG-07 | Button cần truyền đạt mục đích; dùng icon quen thuộc hoặc text khi text rõ hơn. | Không dùng placeholder của kit làm icon tính năng; ghi nhãn cho accessibility và overflow ngay khi chọn symbol. | [Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons?changes=latest_1) |
| HIG-08 | Hỗ trợ cỡ chữ lớn; layout có thể tăng chiều cao hoặc chuyển hàng ngang thành dọc. | Tên phòng/đèn dài, copy OB và lỗi không chồng/cắt mất nội dung thiết yếu; ghi cấu hình chữ đã kiểm tra. | [Layout](https://developer.apple.com/design/human-interface-guidelines/layout?changes=lat_3__1_2), [Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility?changes=latest_maj_6_3&language=objc) |
| HIG-09 | Controls custom phải thao tác được bằng VoiceOver và truyền đạt thông tin tương đương controls chuẩn. | Spec có label, value/state, action và thứ tự đọc; chỉ đánh dấu runtime đạt sau khi kiểm tra thao tác thật. | [Apple — VoiceOver evaluation criteria](https://developer.apple.com/help/app-store-connect/manage-app-accessibility/voiceover-evaluation-criteria) |
| HIG-10 | Không dùng màu làm cách duy nhất truyền đạt trạng thái; dùng màu nhất quán và giữ độ tương phản. | Phân biệt on/off/offline bằng thêm hình dạng, icon hoặc text; swatch màu đèn không là dấu hiệu duy nhất của trạng thái kết nối. | [Color](https://developer.apple.com/design/human-interface-guidelines/color?changes=_5_2) |
| HIG-11 | Dùng semantic colors theo đúng vai trò; custom colors cần thích ứng với appearance và contrast settings. | Kiểm tra light/dark và Increase Contrast; không hardcode màu light đã resolve trong kit cho mọi mode. | [Color](https://developer.apple.com/design/human-interface-guidelines/color?changes=_5_2), [Dark Mode](https://developer.apple.com/design/human-interface-guidelines/dark-mode) |
| HIG-12 | Toggle biểu diễn hai trạng thái đối lập, làm rõ đối tượng tác động và không chỉ đổi màu. HIG iOS hướng dẫn dùng switch trong list row. | Phân biệt toggle với chọn đèn/mở detail; nếu UI dùng card, đối chiếu toggle-button thay vì tự áp switch ở mọi nơi. | [Toggles](https://developer.apple.com/design/human-interface-guidelines/toggles?changes=l_1) |
| HIG-13 | Slider có ý nghĩa/min-max rõ; giữ hướng điều chỉnh quen thuộc và cân nhắc live feedback. | Độ sáng/temperature có label và giá trị phù hợp; UI preview và kết quả đèn thật được đặc tả riêng theo khả năng thiết bị. | [Sliders](https://developer.apple.com/design/human-interface-guidelines/sliders?changes=l_8_2) |
| HIG-14 | Feedback cho biết trạng thái/kết quả/lỗi; mức gián đoạn phù hợp mức quan trọng, có thể đặt cạnh nội dung liên quan. | Có nơi thể hiện đang xử lý và cách phục hồi khi lỗi; không chỉ dựa vào haptic hoặc màu để thông báo kết quả. | [Feedback](https://developer.apple.com/design/human-interface-guidelines/feedback?changes=_9) |
| HIG-15 | Progress phản ánh công việc thật; dùng determinate khi biết tiến độ, indeterminate khi chưa biết; cho dừng khi khả thi. | Không dựng phần trăm/thời gian chờ giả. Trạng thái discovery/connecting có diễn giải và hành vi hủy/retry được dev xác nhận. | [Progress indicators](https://developer.apple.com/design/human-interface-guidelines/progress-indicators?changes=_4_6) |
| HIG-16 | Alerts dành cho thông tin quan trọng cần chú ý ngay; dùng tiết chế, title cụ thể và actions rõ kết quả. | Không alert mỗi lần bật/tắt thành công. Lỗi thông thường xem xét inline; trường hợp gián đoạn ghi lý do và action phục hồi. | [Alerts](https://developer.apple.com/design/human-interface-guidelines/alerts?changes=_1) |
| HIG-17 | Sheet phục vụ tác vụ có phạm vi gắn với context; phân biệt Back, Cancel/Close và Done theo ý nghĩa. | Ghi rõ thay đổi áp dụng ngay hay chờ lưu; đóng sheet điều khiển đèn không mặc định hoàn tác lệnh vật lý đã gửi. | [Sheets](https://developer.apple.com/design/human-interface-guidelines/sheets?changes=_1_1) |
| HIG-18 | Onboarding ngắn, tập trung trải nghiệm, ưu tiên học qua thao tác; tutorial có thể optional, hoãn setup không thiết yếu. | Phân biệt tutorial có thể bỏ qua với điều kiện cần để kết nối. Chưa tự bỏ màn OB, paywall hoặc bước bắt buộc khi chưa biết logic. | [Onboarding](https://developer.apple.com/design/human-interface-guidelines/onboarding?changes=_7) |
| HIG-19 | Xin quyền khi cần và giải thích công dụng cụ thể; dùng system prompt. Pre-alert, nếu cần, có một button mở prompt, không mô phỏng prompt hệ thống. | Lập permission map theo integration thật; không xin Bluetooth/Local Network/camera chỉ vì có trong một kit. Ghi đường xử lý khi từ chối. | [Privacy — Requesting permission](https://developer.apple.com/design/human-interface-guidelines/privacy/) |
| HIG-20 | Copy rõ, hướng hành động và nhất quán; thông tin quan trọng được ưu tiên theo mục đích màn. | Dùng thuật ngữ phòng/đèn/thiết bị thống nhất; lỗi mô tả việc xảy ra và hành động tiếp theo thay vì mã kỹ thuật đơn độc. | [Writing](https://developer.apple.com/design/human-interface-guidelines/writing?language=ob_2%2Cob_2) |

Một số nguồn HIG cần JavaScript khi mở trực tiếp; nội dung trên được đối chiếu bằng các bản nội dung Apple được search index trả về và tài liệu Apple Developer liên quan. Không ghi nhận đã đọc các mục ngoài phạm vi này.

## B. Cách áp dụng cho SmartHue — cần xác nhận theo UI/dev

| ID | Quy tắc đề xuất của dự án | Điều cần xác minh |
| --- | --- | --- |
| SH-01 | Home ưu tiên truy cập điều khiển core; phân biệt tap mở detail và thao tác on/off. | Navigation hiện tại, gestures, mô hình phòng/nhóm/đèn và thao tác chính trên card/list. |
| SH-02 | Đặc tả riêng trạng thái UI mong muốn, lệnh đang gửi và trạng thái thiết bị đã xác nhận. Offline không mặc định là off. | Có ack hay chỉ state cache; độ trễ, lỗi và optimistic update/rollback hiện tại. |
| SH-03 | Gập/mở hoặc resize giữ đèn đang chọn và giá trị/bước đang thực hiện; không tự phát lại lệnh vì layout đổi. | State management và lifecycle của controls/scenes; chỉ đánh dấu đạt khi runtime có bằng chứng. |
| SH-04 | Live feedback trên UI không mặc định gửi một lệnh mạng cho từng pixel kéo slider. | Live update, throttle/debounce hoặc commit khi thả tùy SDK/hãng đèn; không chọn một cách chung trước khi biết giới hạn. |
| SH-05 | Controls phản ánh khả năng thiết bị; không hứa đổi màu/temperature nếu thiết bị không hỗ trợ. | Capability matrix và quy tắc ẩn/disable/explain theo từng màn. Không tự giả định các hệ sinh thái giống nhau. |
| SH-06 | Luồng kết nối phân biệt đang tìm, không tìm thấy, tìm thấy, đang kết nối, thành công, thất bại và quyền bị từ chối nếu áp dụng. | Entry/exit, integration, quyền cần thiết, timeout/cancel/retry. Đây là danh mục để đối chiếu, chưa khẳng định app có tất cả trạng thái. |
| SH-07 | OB dẫn đến trải nghiệm điều khiển đầu tiên có giá trị; các bước giáo dục có thể gọn lại sau khi kiểm tra dependencies. | “OB” tạm hiểu onboarding; cần UI để xác nhận. Goal/metric của đợt layout cần chốt theo tác vụ đang sửa. |

## C. Review và bàn giao

1. Với mỗi flow, map rule IDs liên quan vào SCREEN_SPECS.md; ghi rõ trường hợp không áp dụng.
2. Review layout, nội dung và states trên frame nguồn và cấu hình Duo liên quan trong IPHONE_DUO_RESEARCH.md; không chỉ review happy path.
3. Tách **đã kiểm tra bằng thiết kế/prototype** và **cần kiểm tra bằng app/simulator**. Không ghi VoiceOver, Dynamic Type hoặc lệnh đèn đã hoạt động chỉ từ một screenshot.
4. Lưu vấn đề với vị trí bằng chứng, mức ảnh hưởng, hướng sửa và trạng thái; exception có lý do trong DESIGN_DECISIONS.md.
5. Xác minh lại nguồn khi SDK/HIG/kit đổi, có mâu thuẫn hoặc trước bàn giao triển khai. Không yêu cầu research lại mọi nguồn cho từng thay đổi nhỏ.

### Trade-off và cách kiểm chứng

- **Tech:** component chuẩn giảm công tự xử lý; UI đèn custom giữ tự do nhưng tăng công accessibility, resize và state management.
- **Business:** review core trước hạn chế phạm vi và giảm khả năng làm lại; QA nhiều cấu hình vẫn tốn nguồn lực. Chưa có số liệu để kết luận tăng retention/conversion.
- **Product / UX:** bố cục nhất quán giúp người dùng học lại ít hơn; giữ mọi khả năng trong vùng hẹp đòi hỏi overflow/progressive disclosure, có thể giảm khả năng khám phá actions phụ.
- **Điều kiện:** có UI/luồng nguồn và hành vi thiết bị được xác nhận trước chốt spec; không dự báo hiệu quả từ mức độ tuân thủ HIG đơn thuần.
- **Metric đề xuất:** completion/time/error của tác vụ core, drop-off theo bước OB/kết nối, tỷ lệ điều khiển/kết nối thành công và lỗi mất trạng thái khi resize. Chưa có baseline, mẫu số hoặc target; cần tracking thực tế trước đánh giá tác động.

## Lịch sử

- **2026-10-06:** tạo bộ rule có nguồn, tiêu chí kiểm tra và phần áp dụng SmartHue; chưa review UI SmartHue hoặc chốt giải pháp layout.
