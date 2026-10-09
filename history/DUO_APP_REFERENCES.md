> ARCHIVE v1.9 — chỉ tra cứu nguồn/quyết định quá khứ. Các lệnh thao tác và trạng thái bên dưới không điều khiển task hiện tại. Quy trình hiện hành ở [SKILL](../SKILL.md); trạng thái màn ở [SCREEN_SPECS](../SCREEN_SPECS.md).

> Hồ sơ kế thừa v1.8: đọc đúng phần/mốc cần thiết, không đọc toàn bộ mỗi lượt. Quy trình hiện hành ở [SKILL.md](../SKILL.md) và [WORKFLOW.md](../WORKFLOW.md); trạng thái tổng hợp ở [PROJECT_CONTEXT.md](../PROJECT_CONTEXT.md). Các mục cũ là lịch sử; claim về asset/bằng chứng không có file cần đối chiếu [MISSING_ASSETS.md](../MISSING_ASSETS.md).

# SmartHue — Nguồn ref hình ảnh app trên iPhone Duo

> Research ngày 2026-10-06. Đây là danh mục nguồn và hướng dùng, chưa phải thư viện ảnh đã tải hoặc moodboard được duyệt. Mục tiêu: bổ sung ví dụ có nội dung thực để nghiên cứu bố cục, hierarchy và tương tác, cùng HIG và kit.

## Kết quả và mức bằng chứng

| ID | Nguồn | Nội dung có thể lấy ref | Loại bằng chứng / giới hạn |
| --- | --- | --- | --- |
| REF-01 | [Apple Newsroom — iPhone Duo](https://www.apple.com/newsroom/2026/09/apple-unveils-iphone-duo/) | Có ảnh giao diện Slack, Zoom, Netflix và Detail. | App có thật được Apple giới thiệu bằng ảnh chính thức; ảnh quảng bá không phải tự kiểm thử app trên thiết bị bán lẻ. Đã mở trực tiếp ảnh Slack và quan sát sidebar, conversation pane, rail cùng selection. |
| REF-02 | [Apple HIG — Duo](https://developer.apple.com/design/human-interface-guidelines/designing-for-iphone-duo) và [bài Tyler Hammond có hình minh họa](https://tylerhammond.co.uk/writing/designing-apps-for-iphone-duo) | Mail outer/inner, Notes mở/gập; bài có dẫn nguồn các hình về HIG. | Ví dụ giao diện nền tảng. Đã xem trực tiếp hình Mail inner trong bản mirror: list ở trái, detail ở phải, actions theo vùng. Chưa coi ảnh tĩnh là bằng chứng runtime. |
| REF-03 | [Apple — Design for iPhone Duo](https://developer.apple.com/videos/play/tech-talks/111466/) | Mốc 5:07 controls; 7:34 inner display; 8:36 sheets; 9:28 fold avoidance. | Có chương/transcript chính thức để tìm cảnh ref. Đã đọc chương và transcript, chưa xem toàn bộ video hoặc trích ảnh từng cảnh trong lượt này. |
| REF-04 | [rdlabo — Cross-platform review](https://rdlabo.dev/articles/iphone-duo-cross-platform-introduction) | Ảnh Settings, Ionic demo và app SwiftUI thử nghiệm; có modals, toolbar và poses. | Tác giả tự thử trên simulator Xcode 27.1 beta, iOS 27.1 ngày 28/9/2026. Dùng quan sát hệ thống, không dùng test app làm chuẩn thẩm mỹ hoặc coi số đo beta là hằng số. Đã đọc bài và danh mục hình; chưa mở riêng các ảnh. |
| REF-05 | [Journeybot — tác giả thử app trên simulator](https://www.reddit.com/r/iPhoneDuo/comments/1wmaso7/trying_my_app_on_the_iphone_duo_simulator_and_it/) | Post có media demo app du lịch và mô tả layout từ tác giả. | App của tác giả trên simulator, còn cần tinh chỉnh theo chính lời tác giả. Đã đọc post; chưa xem hết media hoặc xác minh build trên máy thật. Có thể làm ref so sánh, chưa chọn làm mẫu đẹp. |
| REF-06 | [Appetite UI — Duo screens](https://www.appetiteui.com/docs/screens-iphone-duo) | Mô tả 8 nhóm màn vẽ cho outer/inner, light/dark; có onboarding, social và tasks. | Template/design library, không phải bộ screenshot app production. Trang mở trực tiếp bị lỗi fetch; đã đọc nội dung được search index trả về, chưa inspect file Figma hoặc ảnh full-size. Chỉ dùng làm nguồn ý tưởng bổ sung. |
| REF-07 | [9to5Mac — tổng hợp video hands-on](https://9to5mac.com/2026/09/18/iphone-duo-videos-reveal-split-keyboard-app-multitasking-more/) | Dẫn video Flourish Planner về nhập liệu/đọc sách, Rich DeMuro về multitasking, GadgetMatch về demo thiết bị. | Nguồn để lần về video gốc. Đã đọc bài; mở các link Instagram qua web tool không thành công, chưa tự xác minh nội dung video. Không gắn nhãn footage đã xem. |

## Link ảnh đã xác định

- [Slack — ảnh Apple](https://www.apple.com/newsroom/images/2026/09/apple-unveils-iphone-duo/article/Apple-iPhone-Duo-Slack-app-260909_big.jpg.large.jpg) — đã xem trực tiếp.
- [Zoom — ảnh Apple](https://www.apple.com/newsroom/images/2026/09/apple-unveils-iphone-duo/article/Apple-iPhone-Duo-Zoom-app-260909_big.jpg.large.jpg) — đã xác định link từ Newsroom, chưa inspect trực tiếp.
- [Netflix — ảnh Apple](https://www.apple.com/newsroom/images/2026/09/apple-unveils-iphone-duo/article/Apple-iPhone-Duo-Netflix-app-260909_big.jpg.large.jpg) — đã xác định link từ Newsroom, chưa inspect trực tiếp.
- [Detail — ảnh Apple](https://www.apple.com/newsroom/images/2026/09/apple-unveils-iphone-duo/article/Apple-iPhone-Duo-Detail-app-260909_big.jpg.large.jpg) — đã xác định link từ Newsroom, chưa inspect trực tiếp.
- [Mail inner — bản mirror hình HIG](https://tylerhammond.co.uk/writing/designing-apps-for-iphone-duo/apple-hig/designing-for-iphone-mail-full%402x.png) — đã xem trực tiếp; giữ credit Apple HIG và link bài chứa ảnh.

## Hướng dùng cho SmartHue — đề xuất, chưa duyệt bố cục

Ưu tiên nghiên cứu Mail/Notes/Slack về danh sách-selection-detail và controls thuộc từng vùng; Settings/sheet về tổ chức điều khiển. Đây là suy luận về khả năng chuyển pattern sang SmartHue, không tự chọn hai cột hoặc copy style của app khác.

Trong các truy vấn về Home/Hue/Duo ở lượt này, chưa tìm được bộ ảnh điều khiển đèn trên Duo đủ nguồn xác thực. Vì vậy vẫn thiếu ref sát domain cho slider, màu, trạng thái đèn và luồng kết nối; không giả screenshot iPad/Android là Duo.

Thiếu ref là giả thuyết có thể ảnh hưởng chất lượng thị giác, chưa chứng minh là nguyên nhân chính của nhận xét “chưa đẹp”. Cần xem UI SmartHue/bản thiết kế bị đánh giá cùng lý do cụ thể để đối chiếu hierarchy, mật độ, spacing, màu và tác vụ.

## Đề xuất tổ chức folder ảnh ref

Nhóm theo pattern: `navigation`, `list-detail`, `controls-sheets`, `onboarding-connection`, `fold-resize`, `visual-direction`. Đây là cấu trúc đề xuất, chưa tạo thư viện ảnh trong lượt research này.

Mỗi ảnh/video có ID, app, URL/tác giả, ngày, loại bằng chứng (ảnh quảng bá chính thức / thiết bị thật / simulator / concept), outer-inner/orientation/pose, state, timestamp nếu có, điểm học và điểm không phù hợp. Đánh dấu ảnh crop và giữ bản đủ context khi có. Tên ví dụ: `REF-01_slack_inner-landscape_selection.jpg`.

Không gắn nhãn “thiết bị thật” chỉ vì ảnh có bezel. Ghép outer/inner của cùng tác vụ khi có; ưu tiên ref phù hợp màn đang sửa thay vì bắt đủ một số ảnh tùy ý.

## Trade-off và kiểm chứng

- **Tech:** ref giúp hiểu bố cục nhưng không thay behavior spec, runtime bounds hoặc capability của đèn. Hình quảng bá thường thiếu states/lỗi.
- **Business:** tuyển chọn ref tốn thêm thời gian; khả năng giảm làm lại chưa có baseline. Theo dõi công tìm ref và vòng sửa do hiểu khác hướng thị giác, không suy ROI từ số ảnh.
- **Product / UX:** ref sát pattern giúp trao đổi hierarchy/mật độ; copy app khác có thể làm sai tác vụ SmartHue. Chọn ref theo màn thật và kiểm tra task completion/error sau thiết kế.
- **Điều kiện:** nguồn/loại bằng chứng rõ, ghi pattern học và phạm vi chuyển sang SmartHue; moodboard/style/layout cụ thể vẫn nằm trong đề xuất user duyệt.
