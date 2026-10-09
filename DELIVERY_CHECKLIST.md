# Bàn giao theo task

Chỉ kiểm tra tiêu chí áp dụng. Review trả findings; fix trả phần đổi; proposal trả HTML và scope; final Figma trả artifact và kết quả kiểm tra. Không dùng bảng này để mở rộng coverage.

| Nội dung | Evidence tối thiểu |
| --- | --- |
| Scope/source/version | Node hoặc ảnh nguồn và đầu ra; phần được giao |
| Proposal mới | HTML đã preview, version và xác nhận scope trước final Figma |
| Linked components | Main/properties/bindings liên quan trước/sau; gap/fallback nếu có |
| Layout | Bounds đúng container/pose; safe area/margins/regions không trừ trùng; custom grid4 và phần xung đột |
| Home | Pane bằng rộng trong content bounds đã khai báo; card không stretch theo chiều cao pane |
| Kiểm tra phần đổi | Render đã xem, read-back geometry/property bị tác động; lỗi quan sát được đã xử lý hoặc dependency cụ thể |
| Kết luận | Đạt/Cần sửa/Không áp dụng/Chưa kiểm chứng cho tiêu chí liên quan; không claim runtime từ Figma |

Coverage configurations/states theo yêu cầu: ghi frame cần dựng, spec/QA hoặc không áp dụng. Không bắt mọi orientation × state. Prototype chỉ khi được giao. Read-back/render thuộc kiểm tra thiết kế; QA app/simulator/accessibility/lệnh đèn theo scope runtime.

Khi handoff dev, dùng [readiness](references/guides/readiness.md) phần contract: container/reflow/bar mapping/state và dependencies chưa xác nhận. Chỉ ghi SDK/API đã xác minh khi có nguồn thật. Kết quả Home lưu một lần ở [HOME_DEMO_HANDOFF](HOME_DEMO_HANDOFF.md).
