> Hồ sơ kế thừa v1.8: đọc đúng phần/mốc cần thiết, không đọc toàn bộ mỗi lượt. Quy trình hiện hành ở [SKILL.md](SKILL.md) và [WORKFLOW.md](WORKFLOW.md); trạng thái tổng hợp ở [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md). Các mục cũ là lịch sử; claim về asset/bằng chứng không có file cần đối chiếu [MISSING_ASSETS.md](MISSING_ASSETS.md).

# SmartHue — Context thiết kế iPhone Duo

> Khởi tạo ngày 2026-10-06. Home-A có scope demo đã duyệt; các luồng còn lại đang bổ sung.
> Đọc cùng [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) và [AGENTS.md](AGENTS.md).
> Agent bắt đầu hoặc tiếp tục đầu việc Duo phải đọc [AGENTS_IPHONE_DUO.md](AGENTS_IPHONE_DUO.md) trước để nạp context theo đúng thứ tự.

## Dữ kiện đã xác nhận

| Dữ kiện | Nguồn |
| --- | --- |
| Sản phẩm đang thảo luận là SmartHue. | Context dự án và yêu cầu trong chat. |
| Người dùng muốn cùng agent tạo context để agent tiếp tục thiết kế layout iPhone được gọi là “Duo”. | Yêu cầu ngày 2026-10-06. |
| Người dùng không có design system riêng để cung cấp; đã setup đầy đủ component iPhone Duo trong file SmartHue. | Đính chính và bổ sung trong chat ngày 2026-10-06; file `mklhEcafiTfj9FoGIUhA0M`. Bắt buộc kiểm tra/reuse theo WF05; đã audit phần local liên quan Home-A v2, chưa toàn thư viện, xem APPLE_UI_KIT_AUDIT.md. |
| Đã nhận link UI Kit iOS/iPadOS 27 (Community), đọc được section iPhone Duo và các mẫu đại diện. | [APPLE_UI_KIT_AUDIT.md](APPLE_UI_KIT_AUDIT.md), ngày 2026-10-06. Kit Apple là nguồn tham chiếu nền tảng; chưa có design system riêng của SmartHue. |
| Thiết bị mục tiêu là iPhone Duo, dòng iPhone gập của Apple công bố ngày 2026-09-09. | Người dùng làm rõ và [research nguồn Apple](IPHONE_DUO_RESEARCH.md), ngày 2026-10-06. |
| Dự án ưu tiên trải nghiệm điều khiển đèn nhanh, rõ ràng, ổn định và nhất quán giữa các hệ sinh thái. | PROJECT_CONTEXT.md. |
| Workflow đã chốt/cập nhật: nhận link → hiểu UI nguồn → UI Kit Duo (gồm rule/safe area) → HIG → ảnh ref cuối để lấy taste/vibe → đề xuất HTML đơn giản, rủi ro → user duyệt → thiết kế. Không tự thêm element ngoài nguồn/yêu cầu đã duyệt. | Yêu cầu trong chat ngày 2026-10-06; [WORKFLOW.md](WORKFLOW.md). Home-A được duyệt; các luồng khác chưa có phương án được duyệt. |

Các tính năng và mục tiêu nghiên cứu trong PROJECT_CONTEXT.md là nền tham chiếu; chưa mặc định toàn bộ thuộc đợt thiết kế này. Thiết bị Duo có nhiều cấu hình sử dụng; không mặc định mọi màn SmartHue đều cần bố cục hai cột.

## Nhóm UI ưu tiên — người dùng xác nhận ngày 2026-10-06

1. Điều khiển đèn ở Home.
2. Điều khiển từng đèn.
3. Luồng OB — tạm hiểu là onboarding; cần UI để xác nhận cách gọi và phạm vi.
4. Kết nối thiết bị.

Người dùng sẽ gửi UI hiện tại của các nhóm trên. Đây là nhóm ưu tiên cần sửa, chưa phải danh sách màn, thứ tự triển khai hoặc quyền thay đổi toàn bộ luồng đã chốt. Không tự đưa goal tăng toggle/phiên ánh sáng của research trước vào goal đợt layout.

## Những điểm cần chốt trước khi thiết kế màn cụ thể

- Thiết bị: **Đã xác nhận — iPhone Duo của Apple**. Đọc [IPHONE_DUO_RESEARCH.md](IPHONE_DUO_RESEARCH.md) và [audit kit](APPLE_UI_KIT_AUDIT.md): đã lấy kích thước frame Figma từ kit, chưa xác minh scale và safe areas runtime trong simulator.
- Màn/luồng làm đầu tiên: **Home — nguồn 23887:8097, file mklhEcafiTfj9FoGIUhA0M; đích Test 24744:5188**.
- Loại công việc: **Chỉnh UI hiện tại cho bốn nhóm core trên, trong context thiết kế Duo**. Mức thay đổi layout/navigation/hành vi cần xác nhận khi nhận UI nguồn.
- Người dùng chính và việc họ cần hoàn thành trên màn đó: **Chưa xác nhận**.
- Vấn đề cần giải quyết và kết quả mong muốn: **Chưa xác nhận**.
- Home-A giữ core controls, room filters, Quick Mode, destinations và dark/màu ánh sáng nguồn; đổi bố cục/mật độ/chrome theo phương án đã duyệt, không thêm tính năng.
- Home-A bàn giao Figma editable hai cấu hình dark, bảng trạng thái/spec và review evidence; không gồm app code hoặc prototype hoàn thiện.
- Deadline và người chốt thiết kế: **Chưa xác nhận**.

## Material cần nhận theo thứ tự

### Đợt đầu — đủ để bắt đầu xác định màn và luồng

1. Tên màn/luồng muốn làm trước trên iPhone Duo.
2. Link Figma của màn/luồng hiện tại để agent đọc cấu trúc, UI elements và screenshot. Ảnh/video hoặc mô tả thao tác có thể bổ sung những hành vi chưa rõ trong Figma.
3. Điều muốn cải thiện, phần cần giữ và phần có thể thay đổi. Phân biệt feedback đã nhận với nhận định cá nhân.

### Bổ sung khi đi vào chi tiết

- Mô tả nhóm người dùng, bối cảnh sử dụng, ngôn ngữ và dữ liệu hiển thị thực tế.
- Ràng buộc từ dev: khả năng thiết bị, hành vi lệnh điều khiển, quyền cần xin, trạng thái mất kết nối, giới hạn nền tảng. Không mặc định mọi hãng đều hỗ trợ cùng tính năng.
- Logo, icon, font hoặc màu thương hiệu đang có. Chưa có thì đánh dấu chưa có.
- Ảnh/link giao diện thích hoặc không thích, kèm lý do cụ thể. Đây là sở thích tham khảo, không phải bằng chứng hiệu quả.
- Số liệu/feedback liên quan nếu có; ghi nguồn, kỳ đo, mẫu số và giới hạn. Không yêu cầu số liệu toàn app để bắt đầu một bản nháp.
- Thiết bị/kích thước cần hỗ trợ, hướng màn hình, phiên bản iOS mục tiêu, light/dark mode và đầu ra mong muốn.

Không cần người dùng tự viết tài liệu theo mẫu. Agent nhận material, trích xuất và cập nhật các file, giữ nguồn cho từng kết luận.

## Nền tảng UI khi chưa có design system

**Cách làm đã chấp thuận:** lấy nhận diện từ UI nguồn, đề xuất hướng thị giác cho màn đầu tiên để user duyệt cụ thể rồi ghi lại màu theo vai trò, typography, khoảng cách, bo góc, icon, component và trạng thái tương tác được dùng. Mở rộng các quy tắc này khi có thêm màn. Chấp thuận cách làm không chốt một style hoặc bộ token cụ thể.

- **Tech:** cần dev xác nhận hành vi và giới hạn trước khi đặc tả điều khiển; xây component dùng lại giúp giảm lệch giữa thiết kế và triển khai nhưng tốn công thiết lập.
- **Business:** bắt đầu từ một màn ưu tiên giúp giảm thời gian chuẩn bị; team có thể phải sửa lại nếu phạm vi hoặc thương hiệu thay đổi. Chưa có bằng chứng để dự báo tác động retention/conversion.
- **Product / UX:** người dùng có thể nhận cải thiện ở tác vụ chính sớm hơn; tính nhất quán trên toàn app chưa được đảm bảo cho đến khi kiểm tra các màn liên quan.
- **Điều kiện:** màn ưu tiên, tác vụ chính và quyền thay đổi giao diện được xác nhận; giả định còn mở được ghi rõ.
- **Kiểm chứng đề xuất:** độ nhất quán giữa các màn, thời gian hoàn thành tác vụ, tỷ lệ hoàn thành và lỗi thao tác. Chưa đặt target hoặc khẳng định cải thiện khi chưa có baseline và cách đo.

## Cách dùng bộ context

1. Cập nhật brief từ material và câu trả lời của người dùng.
2. Điền màn/luồng trong [SCREEN_SPECS.md](SCREEN_SPECS.md).
3. Ghi lựa chọn và lý do trong [DESIGN_DECISIONS.md](DESIGN_DECISIONS.md).
4. Trước mỗi lần thiết kế, đọc cả ba file, [research iPhone Duo](IPHONE_DUO_RESEARCH.md) và [audit UI Kit](APPLE_UI_KIT_AUDIT.md) cùng context dự án; không biến đề xuất thành quyết định đã duyệt.

Kiểm tra [APPLE_UI_KIT_AUDIT.md](APPLE_UI_KIT_AUDIT.md) trước HIG, đặc biệt section Duo `Safe Area Insets and Margins`; sau đó đọc [HIG_RULES.md](HIG_RULES.md) và xem ảnh ref cuối để lấy taste/vibe. [WORKFLOW.md](WORKFLOW.md) yêu cầu wireframe HTML thật đơn giản, preview ngay trong Codex; không dựng trong Figma hoặc sửa nguồn/kit. Chỉ dùng UI elements có trong nguồn hoặc yêu cầu user; element mới phải user duyệt riêng. Ghi xác nhận và phạm vi vào decision log; tiếp tục trong phạm vi đã duyệt mà không hỏi lại.

Trạng thái dùng chung: **Đã xác nhận / Chưa xác nhận / Giả định để thử / Đề xuất / Đã duyệt / Đã thay thế**.

## Material bổ sung — 2026-10-06

User yêu cầu AI xem ảnh ref để hiểu taste/vibe trước khi làm. Đã nhận Home nguồn và Test đích để dựng demo đề xuất; xem [HOME_DEMO_PROPOSAL.md](HOME_DEMO_PROPOSAL.md). User duyệt “Duyệt Home-A, hoàn thiện demo”; demo đã dựng, xem [HOME_DEMO_HANDOFF.md](HOME_DEMO_HANDOFF.md).

## Material và ràng buộc component — WF05, 2026-10-06

Không có design system riêng không đồng nghĩa không có component. Người dùng xác nhận tài nguyên Duo đã setup trong file SmartHue; agent tự tìm, audit phần liên quan và dùng lại, không yêu cầu user gửi lại kit trước khi kiểm tra file. Kit Community là nguồn đối chiếu/bổ sung. Đọc [audit](APPLE_UI_KIT_AUDIT.md) và quy tắc WF05 trong [workflow](WORKFLOW.md) trước đề xuất. Chưa có inventory local Duo đã kiểm chứng; lượt cập nhật rule này không chỉnh Figma hoặc làm lại demo.

## Demo lại theo rule mới — 2026-10-06

User yêu cầu gen lại Home-A; đã có preview HTML v2 — `demo-home/home-a-v2.html` (thiếu trong ZIP nguồn; xem MISSING_ASSETS.md) trong Codex, giữ cấu trúc đã duyệt và có mapping components local vừa kiểm tra. Chưa ghi kết quả v2 vào Figma. Raw inventory/giới hạn trong [audit](APPLE_UI_KIT_AUDIT.md), scope/review trong [SCREEN_SPECS.md](SCREEN_SPECS.md); các ghi chú “chưa audit” trước đó là lịch sử trước DEMO02.

## RV02 — Home-A v3, feedback01–03 — 2026-10-07

User annotate tại trang review RV01, yêu cầu “xử lý các feedback này”: inner ngang chia hai vùng bằng nhau, card đèn bớt giãn, spacing/font/radius/padding theo bội số4. Đã sửa trên bản sao [Home-A v3](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24805-6013), inner24805:6014/outer24805:6947; source24803:5700 giữ nguyên. Hai vùng396–396, gutter24; card inner188×208/outer164×208. Custom tokens đã kiểm tra theo4; giữ native kit/artwork intrinsic và ghi rõ ngoại lệ do agent áp dụng, chưa user xác nhận riêng. Không thêm UI. Đây là quyền sửa scope Home-A cụ thể, chưa nghiệm thu kết quả. Chi tiết/evidence: review v3 — `reviews/2026-10-07-home-a-v3/README.md` (thiếu trong ZIP nguồn; xem MISSING_ASSETS.md), render — `reviews/2026-10-07-home-a-v3/frame.png` (thiếu trong ZIP nguồn; xem MISSING_ASSETS.md), read-back — `reviews/2026-10-07-home-a-v3/review.json` (thiếu trong ZIP nguồn; xem MISSING_ASSETS.md), invariants — `reviews/2026-10-07-home-a-v3/invariants.json` (thiếu trong ZIP nguồn; xem MISSING_ASSETS.md). Preview tiếp tục annotate: http://127.0.0.1:8767/after.html ; trang cũ giữ nguyên.

Ref tiếp tục ghi chú REF-02 đã xem trong Home-A. Read-back: 556 token checks có phạm vi không lỗi; 99/99 instances vẫn linked, mains/properties/modes giữ nguồn; text contents giữ nguyên. Native geometry giữ nguyên. Trade-off: vùng grid/card nhỏ hơn làm slider ngắn hơn, cân lại vùng nhóm/phòng; công QA/token mapping bổ sung, không đổi feature. Chưa có dữ liệu usability/ROI; đo task completion/time/mis-tap và kiểm tra native targets, scroll/resize, Dynamic Type, VoiceOver, lệnh đèn trên runtime.
