# SmartHue — current state từng màn

Thông tin dưới đây tổng hợp hồ sơ tới 2026-10-07; v2.0 tối ưu tài liệu ngày 2026-10-10, không đo lại Figma. Yêu cầu/node user gửi hiện tại được đối chiếu với hồ sơ trước khi làm.

## H01 — Home-A

| Trường | Current record |
| --- | --- |
| Source ban đầu | Home `23887:8097`, file `mklhEcafiTfj9FoGIUhA0M` |
| Section đích | Test `24744:5188` |
| Bản sửa mới nhất được ghi | [Home-A v3](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24805-6013); inner `24805:6014`, outer `24805:6947`; source của vòng sửa `24803:5700` |
| Phương án/approval | Home-A được duyệt; HTML v2 được duyệt để dựng Figma; RV02 được giao sửa pane/card/grid. Chi tiết ở [decision log](DESIGN_DECISIONS.md) |
| Trạng thái | v3 đã được ghi là tạo; chưa có bằng chứng user nghiệm thu v3 hoặc QA runtime |
| Coverage | Inner landscape và outer portrait dark; states/spec theo scope Home-A; các pose khác chưa được nghiệm thu trong gói |
| Giữ | Room filters, group controls/Quick Mode, card toggle/slider trực tiếp, names/symbols/destinations và nhận diện nguồn |
| Thay đổi được giao | Bố cục/mật độ/chrome theo Duo; RV02 hai pane inner bằng rộng, card bớt giãn, custom grid4 |
| Chưa chốt | Scope nhóm, ACK/error/rollback, capability, semantics actions phụ, partial/resize bounds và runtime accessibility |

Mapping local: [kit audit](APPLE_UI_KIT_AUDIT.md). Geometry: [safe-area](references/guides/iphone-duo-safe-area-guide.md). Kết quả/snapshot/bằng chứng thiếu: [Home handoff](HOME_DEMO_HANDOFF.md). Số v3 là snapshot, không dùng làm dimensions cho mọi màn.

## Màn khác

Từng đèn, onboarding/OB, kết nối: chưa có source/approval cụ thể trong gói. Bắt đầu từ yêu cầu hiện tại; không dựng theo một Home template mặc định.

## Spec tối thiểu khi có task mới

- Màn/task mode, source/target, ngày/version và output.
- UI elements/actions/state phải giữ; phạm vi thay đổi được giao.
- Component mapping và container geometry nếu quyết định phụ thuộc chúng.
- Proposal/approval nếu phương án mới; giữ quyền còn hiệu lực.
- Artifact, bằng chứng kiểm tra phần đổi, trạng thái và dependency còn lại.

Thêm behavior/states/capability/metrics chỉ khi task cần. Không điền mọi trường hoặc nhân mọi state/configuration mặc định. Spec các phiên bản trước: [archive](history/SCREEN_SPECS.md).
