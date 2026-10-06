# Checklist bàn giao layout Duo

> Mẫu để đưa vào đề xuất và chốt phạm vi. Không phải mọi cấu hình/states bên dưới đã được yêu cầu hoặc duyệt.

## Ma trận cấu hình

Với mỗi cấu hình, ghi Cần frame / Chỉ spec hoặc QA / Không áp dụng + lý do / Chưa xác nhận. Số frame được quyết định theo flow, không bằng tích mọi cấu hình × states.

| Cấu hình | Kit frame tham chiếu | Phạm vi duyệt / bằng chứng |
| --- | --- | --- |
| Outer portrait | 466 × 678 | Chưa xác nhận. |
| Outer landscape | 678 × 466 | Chưa xác nhận. |
| Inner portrait | 669 × 951 | Chưa xác nhận. |
| Inner landscape | 951 × 669 | Chưa xác nhận. |
| Gập một phần, app bị thu hẹp / Split View | Không suy bounds từ full-frame mẫu. | Chưa xác nhận; cần QA runtime cho hình học thật. |
| Chuyển đóng/mở, xoay, resize | Spec selection/value/step/state và action continuity. | Chưa xác nhận. |

Kích thước là canvas units trong kit đã được audit, không xác nhận runtime points/safe area. Chốt component guides và thông số triển khai theo nguồn/simulator khi có.

## Review preview HTML ở bước đề xuất

- [ ] Hướng đề xuất/wireframe có file .html và preview đã mở trong Codex; không được dựng trong Figma.

- [ ] Đã xem ảnh ref và UI nguồn, ghi ref IDs/taste/vibe; phân biệt nguồn với hướng thị giác suy luận chưa duyệt.

Wireframe cần làm rõ cấu trúc/hierarchy, controls và luồng/hành vi dự kiến; có ID/phiên bản và nhãn chưa duyệt phương án. Dùng file HTML đơn giản, làm nhanh và mở preview trong Codex; không dựng wireframe/hướng đề xuất trong Figma, không sửa UI nguồn/kit. Không yêu cầu wireframe đạt mức hoàn thiện thị giác/component/prototype của đầu ra cuối.

## Bàn giao thiết kế theo phạm vi đã duyệt

- [ ] Có link file/node đích và quyền mở; frame/layer đặt tên rõ, chỉnh sửa được.
- [ ] Có so sánh hoặc danh sách giữ/đổi so với UI nguồn, khớp ID/phiên bản đề xuất duyệt.
- [ ] Auto Layout/constraints và component instances được dùng khi phù hợp; ghi rõ nơi tách/override component. Không rasterize controls để giả hoàn thành file editable.
- [ ] States và cấu hình trong phạm vi được dựng/spec; mỗi trường hợp chưa làm có trạng thái và lý do.
- [ ] Có interaction/entry/exit/back/cancel/apply/retry cho phần được thay đổi; prototype chỉ nếu đã duyệt đầu ra.
- [ ] Ghi label/value/action accessibility, cỡ chữ/nội dung dài và appearance được review. Figma chỉ kiểm tra thiết kế, không chứng minh VoiceOver/Dynamic Type runtime.
- [ ] Ghi component/node kit, màu semantic và foundation SmartHue đã dùng; không chuyển giá trị light resolve thành màu cho mọi mode.
- [ ] Review HIG có rule ID, node/ảnh bằng chứng, Đạt/Cần sửa/Không áp dụng/Chưa kiểm chứng; ngoại lệ có lý do.
- [ ] Bàn giao vấn đề còn mở, dependencies và người cần xác nhận. Không ghi hoàn tất kiểm thử runtime nếu chưa có app/log.

## Phần cần dev/QA xác nhận khi liên quan

State khi resize; command gửi/ack/fail/rollback; live update/throttle/commit slider; capabilities theo đèn; permission/timeout/cancel/retry; safe areas/vùng gập/camera; VoiceOver và cỡ chữ lớn thực tế. Không yêu cầu designer tự chứng minh lệnh vật lý bằng prototype.

## Mẫu bằng chứng review

| Màn/node | Rule / tiêu chí | Cấu hình / state | Trạng thái | Bằng chứng | Việc còn cần / người phụ trách |
| --- | --- | --- | --- | --- | --- |
| Chưa nhận | — | — | Chưa kiểm chứng | — | — |

## Kết quả Home-A v1.0 — 2026-10-06

- [x] Proposal được user duyệt; scope hai cấu hình dark + state/spec.
- [x] Hai layout editable, linked source cards, không sửa UI nguồn/kit.
- [x] Ref Mail/Slack đã xem; final render đã review.
- [x] Bảng On/Off/Disconnect/Unreachable; pending/command error có spec.
- [x] 22 hit regions đặc tả 44 units đã read-back; không phải runtime hit testing.
- [x] Kit import limitation, fixed snapshot layout và phần chưa kiểm chứng được ghi.
- [ ] Production QA: safe areas/system chrome, chữ lớn/contrast/VoiceOver, resize, ACK/capability/scope nhóm.

Chi tiết và links: [HOME_DEMO_HANDOFF.md](HOME_DEMO_HANDOFF.md). Checklist mẫu phía trên dùng cho màn tiếp theo, không thay trạng thái demo này.

## Kiểm tra reuse component — WF05

- [ ] Trước đề xuất, đã kiểm tra component Duo trong file SmartHue và ghi inventory/mapping với node/main IDs, variants/properties, modes/bindings, cấu trúc và ảnh đã xem; phần bị chặn ghi đúng giới hạn.
- [ ] Final dùng linked instances của component đã setup phù hợp; read-back main component/variant và bindings, ghi instance output. Không dựng lại component có sẵn, detach hoặc sửa main/kit.
- [ ] Gap/fallback có component thiếu, phạm vi đã kiểm tra, lỗi cụ thể và độ lệch; đã báo trước khi dựng thay thế. Lỗi import Community không thay thế kiểm tra local resources.
- [ ] HTML proposal giữ mức đơn giản, mapping tới component dự kiến; không dựng proposal trong Figma.

Home-A hiện chỉ có bằng chứng reuse source cards; chrome vẫn là bản tái dựng, chưa đạt checklist reuse Duo mới. Đây là hạn chế cần xử lý trước lần sửa layout tiếp theo, không ghi demo cũ thành đã reuse hoặc đã audit local Duo. Xem [handoff](HOME_DEMO_HANDOFF.md).

## Kết quả Home-A v2 HTML — 2026-10-06

- [x] Preview HTML độc lập đã mở trong Codex; không dựng proposal trong Figma.
- [x] Audit/mapping templates, tab bar4 và toolbar local, xem render nguồn/kit/ref.
- [x] Kiểm tra hai cấu hình, fit panel và state labels/control visibility; có ảnh + JSON evidence.
- [ ] Final linked instances và alias mode/read-back Figma v2: chưa thực hiện trong lượt preview.
- [ ] User review/nghiệm thu v2 và native/runtime QA: chưa thực hiện.

Chi tiết: [SCREEN_SPECS.md](SCREEN_SPECS.md). Approval cấu trúc Home-A cũ vẫn có hiệu lực; không xin duyệt lại cùng scope.
