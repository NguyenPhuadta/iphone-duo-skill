# SmartHue — Context sản phẩm cho layout Duo

> Trích các dữ kiện liên quan từ context dự án, ngày 2026-10-06.

SmartHue là app điều khiển đèn từ nhiều hãng/hệ sinh thái. Định hướng hỗ trợ gồm Philips Hue, WiZ, LIFX và Matter; đây không phải capability matrix xác nhận mọi tính năng trên mọi thiết bị.

Tác vụ liên quan trực tiếp đến đợt layout: bật/tắt, chỉnh độ sáng và màu theo khả năng đèn; onboarding và kết nối để người dùng tiếp cận điều khiển. Phạm vi ban đầu là Home, từng đèn, OB và kết nối. OB tạm hiểu onboarding, cần kiểm tra UI nguồn.

Ưu tiên: tác vụ core nhanh, rõ ràng, ổn định; tránh làm thao tác cơ bản phức tạp; giữ trải nghiệm nhất quán giữa các hệ sinh thái nhưng phản ánh khác biệt khả năng thiết bị.

Chưa có goal/metric riêng cho từng màn Duo được chốt. Không mặc định cần tính năng mới hoặc thiết kế hai cột. Không có design system riêng để cung cấp; giữ nhận diện từ UI hiện tại và dùng kit nền tảng khi phù hợp.

Đọc [DESIGN_BRIEF.md](DESIGN_BRIEF.md) cho scope/material và [WORKFLOW.md](WORKFLOW.md) cho bước duyệt. Tài liệu này đủ context sản phẩm cho gói; không có dependency vào nghiên cứu product khác.

## Material mới 2026-10-06

Đã nhận Home nguồn và section Test đích. Demo Home-A v0.1 được dựng ở bước đề xuất; xem [HOME_DEMO_PROPOSAL.md](HOME_DEMO_PROPOSAL.md). Bắt buộc xem ảnh ref trước wireframe/layout. User đã duyệt Home-A; demo v1.0 và review evidence trong [HOME_DEMO_HANDOFF.md](HOME_DEMO_HANDOFF.md). Chưa kiểm chứng runtime.

## Rule preview HTML — 2026-10-06

**WF04 — Preview đề xuất bằng HTML trong Codex:** wireframe và hướng đề xuất bố cục phải được dựng bằng một file HTML đơn giản, làm nhanh và mở preview ngay trong Codex; không dựng, sửa hoặc đồng bộ bản đề xuất/wireframe vào Figma. Đọc Figma nguồn/kit vẫn được phép. Sau khi user duyệt phương án cụ thể mới làm layout hoàn thiện trong Figma theo phạm vi đã duyệt. Quyền làm HTML preview đã được yêu cầu, không xin phép lại.

## WF05 — Bắt buộc dùng component Duo đã setup, 2026-10-06

Người dùng xác nhận đã setup đầy đủ component iPhone Duo trong file SmartHue `mklhEcafiTfj9FoGIUhA0M`. Trước đề xuất/layout, agent phải kiểm tra tài nguyên trong chính file này, ghi node/main component, variant/properties và variables liên quan vào APPLE_UI_KIT_AUDIT.md; chưa kiểm tra thì ghi rõ, không coi là thiếu component. Khi làm layout hoàn thiện, **bắt buộc dùng linked instances của component đã setup phù hợp**, giữ bindings và dùng properties/variants được hỗ trợ; không tự vẽ lại component có sẵn, detach instance hoặc sửa main component/thư viện để tiện dựng màn. Kit Community là nguồn đối chiếu/bổ sung; lỗi import từ đó không chứng minh file SmartHue thiếu component. Nếu thiếu hoặc bị chặn, nêu component cụ thể, phạm vi đã kiểm tra, lỗi và phương án thay thế trước khi dựng thủ công; thay đổi đáng kể vẫn theo bước duyệt hiện có, không thêm vòng xin phép cho reuse trong scope đã duyệt. WF04 giữ nguyên: đề xuất/wireframe dùng HTML trong Codex, Figma chỉ đọc ở giai đoạn này.

## Home-A v2 — 2026-10-06

Đã tạo [preview HTML v2](demo-home/home-a-v2.html), audit component Duo trong file SmartHue và map template/tab bar/toolbar cho Home. Giữ cấu trúc Home-A đã duyệt; đã dựng Figma v2 theo yêu cầu user; đang chờ user tự review. Đọc [spec](SCREEN_SPECS.md), [audit](APPLE_UI_KIT_AUDIT.md) và raw evidence để biết scope/giới hạn mới; các ghi chú chưa audit phía trên là lịch sử.


## Home-A v2 Figma — 2026-10-06

User duyệt HTML v2 và yêu cầu dựng layout trong Figma. [Board](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24764-3926) có inner/outer linked Duo layouts, state examples và read-back; xem [handoff](HOME_DEMO_HANDOFF.md), [audit](APPLE_UI_KIT_AUDIT.md), [spec](SCREEN_SPECS.md), [evidence](demo-home/home-a-v2-figma-review.json). Chờ user review; runtime chưa kiểm chứng.

## Thứ tự tham chiếu và ranh giới UI — 2026-10-06

Khi bắt đầu một flow, hiểu UI nguồn trước; sau đó kiểm tra UI Kit Duo trước (đặc biệt section `Safe Area Insets and Margins` và rule/geometry liên quan), đọc HIG/rule tiếp theo, xem ảnh ref cuối để lấy taste/vibe. Không tự thêm/chế UI element, action, label, state, navigation, shortcut hoặc feature ngoài UI gốc SmartHue/yêu cầu user. Wireframe HTML chỉ dùng khối/nhãn đơn giản và làm nhanh; nếu cần element mới thì trình riêng để user duyệt trước.
