# Home-A — kết quả mới nhất được ghi

Bản mới nhất trong hồ sơ: v3 / RV02, 2026-10-07. Link và approval/current status ở [SCREEN_SPECS](SCREEN_SPECS.md); v2.0 không chỉnh hoặc đo lại Figma.

## Snapshot v3

- Inner hai pane 396/396, gutter 24; card inner 188×208 và outer 164×208.
- Record ghi read-back 99/99 instances linked, 556 custom token checks không lỗi trong phạm vi kiểm tra, giữ text/main/properties/modes. Chưa kiểm lại các claim này vì JSON/ảnh thiếu.
- Agent trước giữ native geometry/artwork intrinsic và ghi ngoại lệ; chưa có bằng chứng user duyệt riêng hoặc nghiệm thu v3.
- Không dùng dimensions trên làm breakpoint/runtime constants. Cần đọc bounds thật để xác định content padding/phần dư; xem [safe-area Home](references/guides/iphone-duo-safe-area-guide.md#home-content-bounds).

## Contract chưa xác nhận runtime

| Nội dung | Giữ / cần xác nhận |
| --- | --- |
| Room/group | Giữ selection; scope nhóm theo filter chưa xác định từ source |
| Toggle/brightness | Giữ thao tác trực tiếp; gesture routing, ACK, draft/committed, throttle/commit do implementation xác minh |
| On/Off/Offline | Không coi offline là off; capability và phản hồi lệnh theo nguồn sản phẩm |
| Pending/error/retry | Record có ví dụ/spec, không chốt timeout/rollback/retry business logic |
| Resize/fold | Giữ selection/value/flow; không phát lại lệnh vì layout đổi; bounds partial chưa có trong snapshot |
| Accessibility | Hit region spec không chứng minh hit testing/VoiceOver/Dynamic Type/contrast runtime |

## Bằng chứng và lịch sử

HTML/PNG/JSON demo và review v3 thiếu theo [MISSING_ASSETS](MISSING_ASSETS.md). Mở node hiện tại nếu task cần xác nhận; ghi version/ảnh mới, không lấy record cũ làm đã xem hôm nay. Kết quả v1/v2 và số 26 targets ở [archive](history/HOME_DEMO_HANDOFF.md), chỉ dùng khi truy nguồn. Không dùng v2 cột340 hoặc fallback chrome v1 như trạng thái v3.

## Lần bàn giao tiếp theo

Ghi ngày/version, node/output, phần đổi, screenshot và read-back liên quan, coverage đã làm, phần chưa kiểm chứng. Update kết quả tại đây và current version ở SCREEN_SPECS; không chép kết quả vào brief/decision/audit.
