# Chọn quan hệ hai pane

Mở khi cần quyết định nội dung hai vùng, không mở chỉ vì màn có kích thước lớn. Biên tập từ iphone-duo-dual-pane-patterns; [nguồn](../SOURCES.md). Safe-area v2 giữ toàn bộ số geometry, không nhân bản bảng token tại đây.

| Quan hệ nội dung hiện có | Pattern phù hợp | Điều cần giữ |
| --- | --- | --- |
| Nhiều phòng/nhóm → đèn thuộc lựa chọn | List-detail | Selection và phạm vi tác động; Home theo content bounds và scope cấu hình đã duyệt |
| Một đối tượng + công cụ chỉnh nó | Companion | Công cụ gần đối tượng, cùng giá trị/trạng thái |
| Hai phiên bản đã có cần so | Dual view | Không tự phát minh tính năng compare |
| Nội dung hình ảnh liên tục | Extended canvas | Controls/nhãn quan trọng tránh vùng che; không ép card đèn thành canvas |
| Nội dung để xem + controls trong tabletop | Content trên, controls dưới | Chỉ đề xuất khi flow cần; vẫn truy cập cùng chức năng ở outer |

Chọn bằng quan hệ nội dung và vùng có sẵn; không chọn bằng góc gập. Compact có thể push/sheet/reflow theo navigation đã duyệt; regular hiển thị thêm context, không tạo app khác. Chuyển layout giữ selection, value, scroll position và bước OB.

## Áp dụng SmartHue

- Home inner landscape: hai vùng phòng/nhóm và đèn bằng nhau trong content bounds đã khai báo; xem [cách tính và partial fold](iphone-duo-safe-area-guide.md#home-content-bounds). Ví dụ upstream list300–320/detail rộng hơn không ghi đè rule này.
- Không stretch card/font/control chỉ để lấp màn. Giảm cột khi chật; không cố giữ tỷ lệ số học làm card rơi vào fold.
- Khoảng pane16/24, band27, max text600 và số cột upstream là gợi ý community, không token Apple bắt buộc. Token custom theo policy grid4 trong SKILL và tình huống hiện tại.
- Nếu chưa rõ quan hệ hai pane, giữ hierarchy nguồn và đưa lựa chọn trong proposal HTML; không tự duyệt redesign.
- Không nhập các ý tưởng hinge reveal, close-to-save, paywall hai pane, xin notification sau paywall hoặc chuyển controls đèn theo góc gập. Chúng không thuộc scope SmartHue hiện tại.

Đầu ra: lý do chọn pattern, giữ/đổi so nguồn, collapse/reflow path và state continuity; giải thích xung đột geometry nếu có. Với proposal mới, dùng WORKFLOW hiện hành; sửa trong scope không mở lại duyệt.
