# Chuyển sang triển khai / runtime readiness

Chỉ mở khi có câu hỏi code, stack/SDK, implementation handoff hoặc QA runtime. Không dùng làm entrypoint cho review Figma. Biên tập chọn lọc từ iphone-duo-readiness; [nguồn](../SOURCES.md).

## Nếu chỉ bàn giao thiết kế

Ghi contract: usable area theo container, reserved regions active, reflow/collapse, mapping bars và state phải giữ. Đánh dấu những điều cần developer xác nhận. Không yêu cầu cài Xcode, nâng SDK, tìm codebase hoặc chạy simulator khi công việc chỉ là thiết kế.

## Nếu có code

1. Xác định stack/framework, SDK dùng build, deployment target, simulator/device và phiên bản thật của dự án. Chưa có repo thì ghi chưa xác minh, không gán “tier” dựa vào mockup.
2. Kiểm tra tài liệu chính thức hiện hành và availability/signature trong SDK trước dùng API lấy từ thư viện ngoài. Các claim iOS27.1/ArrangementView/ReservedRegion của gói nhập là đầu mối tra cứu, chưa được compile trong gói này. Không sao chép snippet như code đã chạy.
3. Tìm các giả định có nguy cơ: UIScreen.main bounds thay scene/view, cached size, regular==iPad, inset trái×2, hardcode device width, orientation dùng thay available bounds, bars tự dựng, crop media mất chủ thể. Mỗi kết quả chỉ là ứng viên cần đọc ngữ cảnh; không gọi mọi occurrence là defect.
4. Đo bounds/insets từng cạnh trong container; theo dõi đổi kích thước. Xác minh framework thực sự cung cấp region nào, coordinate space, active state và margin đã gồm trong frame chưa.
5. Ưu tiên container/presentation nền tảng khi phù hợp. Custom controls cần kế hoạch tránh che; không cam kết dùng system container là mọi UI tự đúng.
6. Kiểm tra state lifecycle: phòng/đèn chọn, slider draft/committed value, scroll, bước onboarding, pending/error/ACK; không gửi lệnh đèn chỉ vì đổi pose.

## Kiểm chứng runtime theo phạm vi được giao

Read-back/render/bounds của thiết kế theo WORKFLOW; app/simulator/accessibility cần scope runtime. Khi được giao runtime QA, chọn theo scope: resize liên tục, outer/inner/xoay, partial fold hai hướng, Split View hai phía, camera/Live Activities, keyboard/PiP, Dynamic Type/VoiceOver, thiết bị không có hinge nếu code dùng hinge. Không bắt dựng mọi frame để mô tả kế hoạch này.

Báo cáo: file:line, lỗi cụ thể và ảnh/log nếu đã chạy; SDK/availability đã xác minh; đã kiểm tra / chưa kiểm tra / bị chặn. Không dùng tài liệu hoặc ảnh Figma làm bằng chứng app chạy. Không nâng SDK, thêm permission, paywall hay flow mới chỉ để đạt checklist tham khảo.
