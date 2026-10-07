# Rail, toolbar, tab bar và overflow

Mở khi sửa/review controls ở cạnh màn hình. Bản biên tập từ iphone-duo-vertical-bars; [nguồn](../SOURCES.md). Đây là quyết định UI và mapping kit; tên API/availability phải xác minh khi code.

- Theo snapshot kit: main outer portrait/landscape và inner landscape dùng chrome dọc; inner portrait dùng chrome ngang. Sheet có geometry riêng; không suy từ main screen.
- Vùng inset84 không đồng nghĩa button cluster48. Dùng safe-area v2 nếu cần tính chiều rộng nội dung, không đo rail nhìn thấy rồi tự suy inset.
- Giữ thứ tự navigation (back/close) → action nổi bật → nhóm actions còn lại; mapping dựa trên UI có sẵn, không tự thêm Done/Back/tab mới.
- Giữ control gần pane nó tác động. Control phòng/nhóm không tự chuyển vào rail như thể tác động toàn app.
- Với symbol-only, vẫn giữ title/accessible label và tên rõ trong overflow. Không bỏ thông tin mà icon không biểu đạt (giá trị, trạng thái, nội dung thiết yếu); text dài/segmented control không ép vào rail hẹp.
- Kiểm tra control đổi trạng thái symbol↔text không nhảy vị trí gây khó tìm. Dùng properties/variants trong linked component nếu đã có.
- Nhóm theo chức năng; tránh tạo spacing thủ công để giả hệ thống. Kiểm tra thứ tự collapse khi chiều cao giảm, keyboard/PiP xuất hiện: giữ navigation và thao tác core có đường truy cập rõ.
- Chọn ưu tiên toolbar hay tab theo tác vụ đã có. Chuyển action vào overflow phải giữ discoverability; đổi navigation đáng kể cần trình phần thay đổi. Không tự tạo nhiều menu dấu ba chấm cạnh nhau.
- Split View: kiểm tra cạnh ngoài của từng app, không hardcode bên phải cho cả hai phía; RTL cần evidence về hardware edge và text direction.
- Opt-out bar chỉ là phương án cần giải thích cho trường hợp phù hợp, không giải pháp mặc định cho thiếu chiều rộng.

Đầu ra: mapping control→pane/bar, symbol+label, nhóm/ưu tiên overflow, viewport hẹp đã xem và phần cần kiểm chứng. Với code, container hệ thống/SDK thực tế quyết định behavior; Figma không xác nhận overflow tự động.
