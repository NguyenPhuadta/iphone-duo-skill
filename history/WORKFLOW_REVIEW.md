> ARCHIVE v1.9 — chỉ tra cứu nguồn/quyết định quá khứ. Các lệnh thao tác và trạng thái bên dưới không điều khiển task hiện tại. Quy trình hiện hành ở [SKILL](../SKILL.md); trạng thái màn ở [SCREEN_SPECS](../SCREEN_SPECS.md).

> Hồ sơ kế thừa v1.8: đọc đúng phần/mốc cần thiết, không đọc toàn bộ mỗi lượt. Quy trình hiện hành ở [SKILL.md](../SKILL.md) và [WORKFLOW.md](../WORKFLOW.md); trạng thái tổng hợp ở [PROJECT_CONTEXT.md](../PROJECT_CONTEXT.md). Các mục cũ là lịch sử; claim về asset/bằng chứng không có file cần đối chiếu [MISSING_ASSETS.md](../MISSING_ASSETS.md).

# Review phản biện workflow Duo

> Review tài liệu ngày 2026-10-06. Chưa có flow SmartHue thực tế, số vòng sửa, thời gian bàn giao, dữ liệu lỗi hoặc usability test. Nhận định dưới đây dựa trên các khoảng trống nhìn thấy trong brief/workflow/audit; không phải đo hiệu quả workflow.

**Toàn bộ khuyến nghị đã được chấp thuận ngày 2026-10-06.** Người giao việc xác nhận: “đồng ý với tất cả khuyến nghị nhé, sửa lại đi”. Giữ sáu bước và một điểm duyệt trước layout hoàn thiện; bổ sung đầu ra có thể kiểm tra và cho wireframe đơn giản ở bước đề xuất. Không thêm vòng xin phép hoặc thiết lập design system toàn app. Đây là chấp thuận cách làm, chưa duyệt giải pháp cho màn cụ thể.

## Vấn đề, bằng chứng và hướng xử lý

| Vấn đề | Bằng chứng / rủi ro | Khuyến nghị / trạng thái |
| --- | --- | --- |
| Figma không đủ để hiểu hành vi thật | Chưa có UI nguồn hay spec hành vi. Frames tĩnh không xác định ack, rollback, timeout hoặc khi nào xin quyền. Có thể thiết kế màn đúng hình nhưng sai phản hồi thiết bị. | Trong spec, ghi hiểu luồng và bảng UI elements; đánh dấu observed/inferred/confirmed. Lấy demo/spec/dev cho dependency ảnh hưởng quyết định. Đã bổ sung cách ghi; hành vi cụ thể còn chờ material. |
| “Layout Duo” dễ mở rộng thành redesign | Brief chưa chốt phần giữ/đổi navigation/hành vi. | Tách layout adaptation và thay đổi UX trong cùng đề xuất để người giao việc duyệt rõ. Chưa duyệt giải pháp nào. |
| Đề xuất chỉ bằng chữ khó đánh giá hình thức | Workflow ban đầu chỉ cho mô tả trước duyệt. Người duyệt có thể hiểu khác vị trí/tỷ trọng của nội dung. | **Đã chấp thuận và áp dụng:** dùng wireframe đơn giản khi cần, sau đối chiếu HIG/rule/kit; đánh dấu nháp đề xuất, không sửa nguồn/kit. Layout hoàn thiện vẫn sau duyệt phương án. |
| Checklist cấu hình dễ làm số frame tăng quá mức | Research liệt kê outer/inner, xoay, gập, Split View, PiP và nhiều states; chưa có phạm vi bàn giao. | Đưa ma trận cấu hình × states vào đề xuất, phân biệt frame cần dựng với hành vi cần spec/QA. Chỉ làm coverage đã duyệt; không nhân mọi tổ hợp mặc định. |
| Kit bị hiểu là nguồn chính thức và đủ cho app | Audit chỉ ghi 5 mẫu context/render, variables mẫu; bản Community chưa xác minh lịch sử xuất bản, runtime và toàn bộ modes. Không có DS SmartHue. | Giữ link và node IDs; gọi đúng kit tham chiếu, không xác nhận bản Community là bản Apple chính thức. Tái kiểm tra component đang dùng và giữ nhận diện UI nguồn. |
| “Agent làm” chưa đủ định nghĩa hoàn thành | Chưa có file đích, output, specs và mức prototype được chốt. | Đưa checklist bàn giao vào đề xuất: file chỉnh sửa được, states/configuration đã duyệt, spec hành vi, review evidence và phần runtime còn mở. Output cụ thể vẫn cần duyệt. |
| Thu thập context có thể thành gánh nặng | Brief có nhiều dữ liệu còn thiếu; người giao việc muốn chỉ gửi một link. | Nhận link và tự trích xuất trước, chỉ hỏi dependency cần quyết định. Không yêu cầu analytics toàn app để bắt đầu phân tích layout. |
| Gói chuyển máy có thể mất context hoặc trộn đầu việc | Docs ban đầu dẫn đến root AGENTS/PROJECT_CONTEXT có nghiên cứu ngoài Duo và quy tắc giao tiếp nội bộ. | Gói này tự chứa context liên quan, link nội bộ và hướng dẫn trung tính; không copy tài liệu không phục vụ layout. Đã thực hiện. |

## Đánh giá Tech / Business / UX

- **Tech:** thêm behavior spec và runtime checklist giúp dev biết phần chưa xác minh; designer chịu thêm công ghi spec. Điều kiện là stack/capabilities được dev xác nhận trước cam kết triển khai, không suy từ kit.
- **Business:** làm rõ scope và đầu ra trước giúp người giao việc kiểm soát công việc; bổ sung context và chờ phản hồi tốn thời gian trước bản dựng đầu tiên. Ngắn hạn có thêm công phân tích, dài hạn kỳ vọng giảm làm lại nhưng chưa có số liệu chứng minh.
- **UX/UI:** người dùng cuối hưởng lợi nếu trạng thái lệnh và tác vụ được giữ khi resize; mật độ hai vùng và overflow có thể làm thao tác khó tìm. Giải pháp cần kiểm tra trên flow thật, không phê duyệt chỉ vì đúng kit/HIG.

## Dữ liệu cần để kiểm chứng

| Câu hỏi | Metric / cách đo | Hiện có |
| --- | --- | --- |
| Workflow có giảm làm lại? | Ghi thời điểm nhận link/đề xuất/duyệt/bàn giao; số vòng sửa do hiểu sai, scope thay đổi hoặc thiếu states. So các flow có độ phức tạp tương đương; số vòng sửa thấp không tự chứng minh thiết kế tốt. | Chưa có baseline. |
| Layout có tốt hơn ở tác vụ core? | Task completion/time/error trên nhiệm vụ giống nhau ở UI cũ và Duo; ghi cấu hình, mẫu và định nghĩa thành công. | Chưa có UI/test/data. |
| Chuyển cấu hình có gây lỗi? | QA chuyển đóng/mở/xoay/resize; ghi mất selection/value/step, lệnh trùng, controls bị che. Lấy log runtime cho lệnh mạng. | Chưa kiểm thử. |
| Kết nối/OB có cải thiện? | Completion/drop-off theo bước và integration/quyền; kiểm tra cùng cohort/kỳ đo trước so sánh. | Chưa có baseline; không đưa target tùy ý. |

Toàn bộ khuyến nghị đã trở thành quy tắc workflow; không còn khuyến nghị review nào chờ chấp thuận. Bố cục, số frame, states, style và output cho từng màn/luồng vẫn phải được đề xuất và duyệt riêng. Chưa có material, baseline hoặc kết quả kiểm thử để thay các giới hạn dữ liệu ở trên.

## Cập nhật WF04 — 2026-10-06

User thay phương tiện dựng nháp: hướng đề xuất/wireframe phải preview bằng file HTML đơn giản và nhanh trong Codex, không dựng trong Figma. Khuyến nghị wireframe phía trên nay áp dụng qua HTML; đọc rule/ref và bước duyệt giữ nguyên. Các ghi chú chưa có UI/data là lịch sử ở thời điểm review; Home-A đã có demo, vẫn chưa có runtime/usability evidence.

## Cập nhật WF05 — 2026-10-06

Người giao việc xác nhận component Duo đã setup trong file SmartHue. Chỉ đọc kit Community rồi fallback sau lỗi import đã bỏ sót tài nguyên tại file làm việc. Workflow nay bắt buộc discovery/inventory trước đề xuất, reuse linked instances khi hoàn thiện và read-back mapping khi review. Ghi gap có bằng chứng, không suy thiếu component từ lỗi import. Không có số liệu đo công tiết kiệm; thêm công kiểm tra cho designer đổi lấy khả năng giữ consistency và giảm bản dựng trùng. HTML preview và bước duyệt hiện có giữ nguyên.
