> Hồ sơ kế thừa v1.8: đọc đúng phần/mốc cần thiết, không đọc toàn bộ mỗi lượt. Quy trình hiện hành ở [SKILL.md](SKILL.md) và [WORKFLOW.md](WORKFLOW.md); trạng thái tổng hợp ở [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md). Các mục cũ là lịch sử; claim về asset/bằng chứng không có file cần đối chiếu [MISSING_ASSETS.md](MISSING_ASSETS.md).

# Home-A — Đề xuất v0.1 và quyết định hoàn thiện v1.0

> 2026-10-06 • User đã duyệt “Duyệt Home-A, hoàn thiện demo”. Proposal dưới đây giữ để đối chiếu phạm vi; demo v1.0 đã hoàn thiện, xem [HOME_DEMO_HANDOFF.md](HOME_DEMO_HANDOFF.md). Không phải bằng chứng runtime.

## Nguồn và đầu ra nháp

- [Home nguồn](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=23887-8097): frame 393 × 1009; đọc design context và render.
- [Section Test được user chỉ định](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24744-5188): trống lúc bắt đầu; chỉ thêm wrapper nháp bên trong, giữ UI nguồn và kit.
- [Board Home-A v0.1](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24746-3613).
- [Inner landscape](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24746-3614) và [Outer portrait](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24746-3615).
- Ảnh review của board — `demo-home/board.png` (thiếu trong ZIP nguồn; xem MISSING_ASSETS.md). Frame 951 × 669 và 466 × 678 lấy từ kit, chưa xác nhận points/safe areas runtime.

## Hiểu Home hiện tại

Mục đích suy luận từ UI: xem đèn theo phòng và điều khiển nhanh nhiều đèn hoặc từng đèn. User xác nhận đây là Home muốn thử đầu tiên; chưa gửi mục tiêu sửa chi tiết hoặc feedback người dùng.

| Element / node nguồn | Quan sát | Hành vi còn cần xác nhận |
| --- | --- | --- |
| Top Bar 23887:8147 | Home, plus, ellipsis và nút lục giác. | Plus/ellipsis và nút lục giác mở gì; quyền và điều kiện hiển thị. |
| Filters 23887:8100 | All Lights được chọn, Living Room, Bedroom. | Đổi phòng chỉ lọc grid hay đổi scope điều khiển nhóm. |
| Group 23887:8108 | All Lights, switch on, slider độ sáng, Quick Mode. | Mixed state, scope nhóm, ack/fail và hỗ trợ theo hãng. |
| Quick Mode 23887:8124 | Ba nút với biểu tượng flame/game/moon; flame nổi bật hơn. | Tên chính thức, selected/disabled/paywall và lệnh tác động. Nhãn trong wireframe chỉ mô tả symbols. |
| Cards 23887:8137–8141 | Grid hai cột; ảnh bóng đèn, tên Super Lamp 01 lặp, toggle on và slider. | Tap card mở detail là giả định; không thấy gesture/prototype hoặc lỗi. Không suy số thiết bị thật từ data mẫu. |
| Navigation 23896:8610 | Home, Music Sync, Voice Control, Automation. | Entry/return state; chưa khảo sát các destinations. |

## Ref đã xem để hiểu taste/vibe

Đã mở và quan sát trực tiếp Mail inner (REF-02, Apple HIG qua mirror) và Slack inner (REF-01, ảnh Apple Newsroom) trong lượt demo. Nguồn/credit: [DUO_APP_REFERENCES.md](DUO_APP_REFERENCES.md).

- Mail: hierarchy list/detail rõ, vùng nội dung rộng hơn vùng lựa chọn, controls thuộc nội dung. Học phân cấp và khoảng thở; không sao chép nền sáng, email list hoặc toolbar actions.
- Slack: identity/selection ở vùng trái, nội dung và controls ở vùng phải/cạnh ngoài. Học cách phân biệt vùng bằng hierarchy; không sao chép tím hoặc mô hình chat.
- Home nguồn: nền tối, sắc xanh ở chrome/group controls, sắc ánh sáng trên card, bo tròn và ảnh đèn. Đây là nhận diện quan sát được; giữ làm hướng hoàn thiện đề xuất.
- Suy luận thị giác: giảm mật độ cạnh tranh giữa room filters, group và grid; phân biệt accent điều hướng với màu đèn. Hướng giữ dark/màu ánh sáng nguồn đã được user duyệt cho Home-A; các quan sát ref không xác định taste chung của user. Chưa có ref điều khiển đèn trên Duo đã xác thực sát domain.

## Phương án Home-A

Màn trong ngang chia vùng phòng/điều khiển nhóm bên trái và grid đèn bên phải. Giữ toggle/slider trên card để điều khiển trực tiếp; không biến Home thành luồng chỉ chọn đèn rồi mới điều khiển. Giữ thứ tự destinations, tách actions của Home với navigation toàn app ở cạnh ngoài.

Màn ngoài dọc giữ bộ lọc phòng → group controls/Quick Mode → grid hai cột có cuộn. Nếu vùng app hoặc chữ lớn không đủ chỗ, giảm số cột/tăng chiều cao theo content; không kéo giãn bố cục desktop vào vùng hẹp. Vị trí/grouping chrome trong nháp chỉ minh họa, cần dùng đúng kit và kiểm tra camera khi hoàn thiện.

**Giữ:** tính năng core, nhận diện tối/màu ánh sáng, bộ lọc phòng, Quick Mode, điều khiển trực tiếp và destinations. **Đổi đề xuất:** cách chia vùng/mật độ/kích thước card và vị trí chrome theo Duo. **Chưa thay:** nghiệp vụ scope nhóm, semantics commands, destinations và tính năng.

## Phạm vi xin duyệt

Demo Figma editable trong Test, với Inner landscape và Outer portrait ở dark theo UI nguồn. Hoàn thiện normal của hai cấu hình; bổ sung ví dụ offline hoặc lỗi trong một frame khi có ích cho review. Đặc tả on/off, mixed nếu áp dụng, pending/error và feedback, giữ selection/value khi resize. Không tự thêm feature, code, prototype hoàn thiện hoặc design system toàn app.

| Cấu hình / state | Đề xuất coverage | Mức kiểm chứng |
| --- | --- | --- |
| Inner landscape + Outer portrait / normal | Hai frame hoàn thiện 24751:3614 và 24751:3615. | Đã xem render cuối; chưa runtime. |
| On/off | State trên component/spec; không nhân mọi cấu hình thành frame riêng. | Không chứng minh trạng thái đèn vật lý. |
| Offline / command error | Ví dụ minh họa + scope/copy và spec phục hồi. | Ack, retry và rollback cần product/dev xác nhận. |
| Pending / mixed | Spec; mixed chỉ khi nghiệp vụ hỗ trợ. | Không tạo fake progress hoặc tự chọn throttle/commit. |
| Inner portrait / Outer landscape | Spec biến đổi và đối chiếu kit; chưa đề xuất frame hoàn thiện trong demo đầu. | Phạm vi demo giới hạn, chưa đủ bàn giao mọi cấu hình sản phẩm. |
| Fold, Split View, PiP, chữ lớn | Spec/QA cases; giữ task và state. | Bounds/hit area/VoiceOver cần runtime; chưa kiểm thử. |

## HIG, rủi ro và trade-off

- **HIG-01–04:** thích ứng theo vùng app, bảo toàn chức năng/state; khoảng trống ở giữa nháp không chứng minh tránh được mọi reserved region.
- **HIG-05–08, 10–14:** slider thuộc nội dung, hit areas và nhãn phải rõ, hỗ trợ chữ dài, phân biệt trạng thái ngoài màu. Rail dùng chữ viết tắt/Hex và ảnh Lamp trong wireframe là nhãn cấu trúc, không phải icon/asset cuối. Hit area slider trên card phải hoàn thiện tối thiểu theo rule; chưa đánh dấu nháp đạt toàn bộ HIG-06.
- **SH-01–05:** tách tap detail/toggle, UI desired state/ack, không resend lệnh khi resize, command policy theo SDK và capability thật.
- **Tech:** reuse controls/source và chrome kit có thể giảm dựng lại, nhưng custom grid và chia vùng cần giữ state/scroll và QA. Dev chịu công resize/commands; chưa có code để ước lượng.
- **Business:** demo hai cấu hình giới hạn công làm trước khi chốt hướng; team chấp nhận chưa phủ hết cấu hình sản phẩm. Chưa có dữ liệu Duo usage, thời gian tác vụ hoặc ROI để khẳng định ưu tiên/tác động retention.
- **UX/UI:** user có thể thao tác nhóm và từng đèn cùng Home; vùng trái chiếm chỗ nên ít card đồng thời hơn phương án grid full-width. Hai vùng yêu cầu scope selection rõ, đặc biệt All Lights khi lọc phòng. Không dùng ảnh đẹp làm bằng chứng usability.

**Khuyến nghị:** thử Home-A trước; chấp nhận grid ít rộng hơn để giữ điều khiển nhóm dễ thấy. Điều kiện đúng: user đồng ý giữ điều khiển trực tiếp, scope nhóm được làm rõ trước chốt behavior spec, controls cuối không bị rail/gập che.

**Kiểm chứng:** review hierarchy/taste với user; kiểm tra thiết kế theo rule/node trên từng frame. Sau implementation đo task completion/time/error, lệnh lỗi/trùng và mất state khi resize. Chưa có baseline/target, chưa kết luận cải thiện.

## Quyết định

Home-A v0.1 **Đã duyệt** bằng xác nhận “Duyệt Home-A, hoàn thiện demo”. Demo v1.0 đã hoàn thiện ở 24751:3613, đúng phạm vi hai cấu hình + states/spec. Final review/kit limitation nằm trong [HOME_DEMO_HANDOFF.md](HOME_DEMO_HANDOFF.md). Approval không phải kiểm chứng runtime hoặc nghiệm thu final.

> **Lưu ý lịch sử WF04:** wireframe Home-A trong Figma được tạo trước rule mới. Từ yêu cầu mới ngày 2026-10-06, mọi hướng đề xuất/wireframe dùng HTML đơn giản preview trong Codex; không dựng trong Figma. Rule không yêu cầu làm lại demo đã hoàn thiện.
