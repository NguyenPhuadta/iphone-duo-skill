# Bàn giao theo phạm vi

Chỉ dùng hàng/tiêu chí liên quan; bảng coverage là phạm vi công việc, không là lệnh dựng toàn bộ frames.

| Cấu hình/state | Cần frame / spec-QA / không áp dụng | Bằng chứng và phần còn thiếu |
| --- | --- | --- |
| Outer portrait / landscape | Điền theo scope | Node/ảnh/phiên bản |
| Inner portrait / landscape | Điền theo scope | Node/ảnh/phiên bản |
| Gập một phần; Split View trái/phải; PiP | Điền theo scope | Không suy bounds từ full-frame |
| Camera/Live Activities; nội dung dài/chữ lớn | Điền theo scope | Tách thiết kế và runtime |
| Mở/đóng/xoay/resize; selection/value/flow step | Điền theo scope | Trạng thái/lệnh cần dev xác minh |

## Proposal mới

- Hiểu source/flow/elements, kiểm tra kit → HIG → xem ảnh ref đúng phiên bản.
- HTML đơn giản đã preview, ID/version rõ; giữ/đổi, cấu hình/state/output và dependencies đã nêu.
- Approval cụ thể có trong decision log trước final Figma. Sửa cùng scope không xin lại.

## Layout/fix

- Link/node đích và scope; frame editable; so sánh thay đổi với nguồn/đề xuất.
- Main component/variant/properties/bindings read-back; không detach/sửa main. Gap/fallback có bằng chứng.
- Safe area/margin/reserved region đúng pose/container; vùng đã nằm trong inset không bị trừ hai lần; important controls không bị vùng active che.
- Grid4 custom; Home inner hai panel bằng rộng trong usable area; card không stretch cao. Ngoại lệ intrinsic/kit ghi cụ thể, chưa tự coi đã được duyệt.
- Labels/values/accessibility/hit region, nội dung dài, contrast và mode được review trong phần có bằng chứng. Spec hit region không phải hit test runtime.
- States/entry/exit/back/cancel/apply/retry chỉ cho actions có trong scope; không tự thêm UI. Prototype chỉ nếu đầu ra đã được yêu cầu/duyệt.
- Mỗi finding có node/ảnh, rule, cấu hình, trạng thái, đề xuất. Báo dependency còn thiếu, không fake completion.

## Dev/QA khi liên quan

State continuity, command send/ACK/fail/rollback, capabilities theo đèn, slider throttle/commit, permission/timeout/retry; geometry runtime, safe areas/camera/fold; VoiceOver/Dynamic Type. Dùng [readiness](references/guides/readiness.md) khi có code/handoff. Chỉ chạy kiểm thử theo yêu cầu user; chưa chạy thì ghi chưa kiểm chứng.

Lịch sử kết quả Home nằm trong [HOME_DEMO_HANDOFF](HOME_DEMO_HANDOFF.md); ảnh/JSON thiếu không được coi là đã tái xác minh trong lần bàn giao này.
