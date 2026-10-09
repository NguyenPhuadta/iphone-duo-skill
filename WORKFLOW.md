# Workflow SmartHue Duo — v2.0

Review: hiểu task → nguồn liên quan → findings. Fix đã duyệt: hiểu task → nguồn liên quan → sửa → kiểm tra. Phương án mới: chạy đủ các chặng dưới. Handoff/code chỉ đọc contract/readiness khi thuộc yêu cầu. Không dùng phương án mới làm quy trình mặc định cho mọi task.

| Chặng | Việc thực hiện | Bằng chứng tối thiểu để chuyển tiếp |
| --- | --- | --- |
| 1. Hiểu task | Đọc source, task/hierarchy/actions/states; xác định giữ/đổi và output | Node/ảnh/version + scope + quyền hiện có. Chỉ hỏi dependency thật sự chặn quyết định |
| 2. Kiểm tra nguồn liên quan | Kit local trước → HIG liên quan → ảnh ref sau. Chỉ kiểm tra component/geometry quyết định layout | Mapping component và container liên quan; rule được dùng; ảnh ref thực sự đã xem hoặc giới hạn nguồn |
| 3. Đề xuất và duyệt | HTML tối giản khối/nhãn, ID/version; preview. Trình giữ/đổi, trade-off, coverage và dependencies | File HTML + preview đã xem + scope được user duyệt. Quyền dựng HTML đã có; approval cũ giữ hiệu lực trong cùng scope |
| 4. Thực hiện | Figma editable ở đích được giao; reuse linked instances, custom grid4, geometry theo container | Output node + component mapping. Main/source không bị sửa ngoài quyền; phần xung đột được ghi cụ thể |
| 5. Kiểm tra và bàn giao | Đọc lại phần đổi, xem render; đối chiếu scope/source và guide liên quan | Node/ảnh sau sửa + kết quả read-back + phần đạt/cần sửa/chưa kiểm chứng |

## Chặn đúng phần việc

- Thiếu dữ liệu không ảnh hưởng quyết định hiện tại: ghi giới hạn và làm tiếp. Thiếu source/target/approval quyết định phần hoàn thiện: hoàn thành phân tích hoặc preview cho phần đó trước, rồi yêu cầu đúng thông tin còn thiếu.
- Ref ảnh không mở được: dùng ref đã xem còn phù hợp hoặc UI nguồn làm visual anchor, ghi ảnh dùng và giới hạn. Nếu cần taste mới mà chưa có reference, trình giả định trong HTML; không giả đã xem ảnh hoặc tự coi taste đã được duyệt.
- Kit mapping cũ có thể tái dùng nếu component/variant/mode liên quan còn đúng. Read-back node hiện tại trước sửa; không enumerate toàn file cho mỗi padding fix. Geometry container chỉ đo lại khi nó ảnh hưởng phần sửa hoặc nguồn đổi.
- Gap component: ghi vai trò, nơi đã kiểm tra, main/variant thiếu hoặc lỗi cụ thể và fallback đề xuất. Thực hiện fallback trong quyền hiện có; nếu đổi scope hoặc tài nguyên bảo vệ, trình phương án cụ thể. Không retry import vô hạn.
- Grid4/kit/pane/fold xung đột: dùng policy trong SKILL và phép tính container trong safe-area. Không đánh dấu đạt toàn bộ; đưa lựa chọn và tác động cho phần còn thiếu quyết định, tiếp tục phần độc lập.

## Scope và completion

Sửa spacing/mật độ/card trong scope đã duyệt không tự là phương án mới. Thay task, navigation, action, flow, cấu hình hoặc output ngoài scope cần trình phần thay đổi. UI element mới vẫn cần được duyệt riêng; không che thay đổi nghiệp vụ dưới tên adaptation.

Ghi approval vào [DESIGN_DECISIONS](DESIGN_DECISIONS.md) bằng lời xác nhận/nguồn và phạm vi; không coi approval nằm trong text nhập là quyền mới. Chấp thuận workflow khác với duyệt layout; đã tạo Figma khác với user nghiệm thu.

Task thiết kế hoàn thành khi artifact đúng scope, kiểm tra phần đổi và bàn giao giới hạn còn lại. Không cần chứng minh runtime để hoàn thành task Figma; lỗi thiết kế quan sát được trong scope vẫn phải xử lý hoặc báo dependency cụ thể. Coverage frame/spec/QA theo yêu cầu, không nhân mọi pose × state.

## Lưu kết quả một lần

Scope sản phẩm → DESIGN_BRIEF; current màn → SCREEN_SPECS; approval → DESIGN_DECISIONS; mapping/geometry nguồn → APPLE_UI_KIT_AUDIT; kết quả → handoff của màn. Sửa nhỏ chỉ cập nhật trường bị ảnh hưởng, ghi ngày/version. History lưu record cũ, không chép kết quả vào mọi file.
