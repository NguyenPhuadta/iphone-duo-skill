# SmartHue — Đặc tả màn và luồng

> Đã xác nhận bốn nhóm UI ưu tiên; đã nhận Home; luồng còn lại và states runtime chưa xác nhận. Mẫu dưới đây là cấu trúc để bổ sung, không phải tính năng mới đã được yêu cầu.

## Nhóm UI ưu tiên đã xác nhận

| Group ID | Nhóm UI | Material đang chờ | Rule liên quan để bắt đầu review |
| --- | --- | --- | --- |
| G01 | Điều khiển đèn ở Home | Màn Home, các thao tác và trạng thái hiện tại. | HIG-01–14, SH-01–05. |
| G02 | Điều khiển từng đèn | Entry/detail, controls và states theo khả năng thiết bị. | HIG-01–17, SH-02–05. |
| G03 | OB | Các bước và đường vào/ra; “OB” tạm hiểu onboarding. | HIG-01–11, HIG-14–20, SH-07. |
| G04 | Kết nối thiết bị | Luồng theo hãng/integration, quyền và kết quả/lỗi. | HIG-01–11, HIG-14–20, SH-06. |

Rule IDs tham chiếu [HIG_RULES.md](HIG_RULES.md); applicability sẽ được đối chiếu từng màn, không mặc định tất cả đều áp dụng. Các nhóm chưa có thứ tự triển khai được chốt.

## Danh mục màn

| ID | Tên màn | Tác vụ chính | Ưu tiên | Trạng thái | Nguồn tham chiếu |
| --- | --- | --- | --- | --- | --- |
| H01 | Home-A demo | Home 23887:8097 | Điều khiển nhóm/từng đèn | Đã duyệt phương án; demo hoàn thiện | HOME_DEMO_HANDOFF.md |

## Mẫu đặc tả — sao chép khi có màn cụ thể

### [ID] — [Tên màn]

- **Trạng thái / nguồn:**
- **Mapping component Duo — WF05:** file key, page/section, node/main component/set ID, variant/properties, mode/bindings và UI element tương ứng; nguồn đã xem/giới hạn hoặc gap/fallback. Khi bàn giao ghi instance output và bằng chứng read-back giữ liên kết.
- **UI elements:** tên/node ID, vai trò, nội dung, hành động, dữ liệu và trạng thái; phân biệt quan sát với suy luận.
- **Ref đã xem / taste và vibe:** ID, ảnh/video và ngày xem; điểm học về hierarchy/spacing/màu/controls, phần không phù hợp; tách sở thích user với suy luận agent.
- **ID / phiên bản đề xuất:** liên kết quyết định trong DESIGN_DECISIONS.md.
- **Hướng đề xuất / wireframe HTML:** đường dẫn file .html, ID/phiên bản, preview mở trong Codex và cấu hình đã xem; đánh dấu chưa duyệt phương án. Chỉ dùng khối/nhãn đơn giản, làm nhanh; mapping mỗi element về UI nguồn hoặc yêu cầu user. Đối chiếu theo thứ tự UI Kit Duo (gồm rule/safe area) → HIG → ref; không dựng trong Figma, không sửa UI nguồn/kit hoặc tự thêm element mới.
- **Trạng thái duyệt / nguồn xác nhận / phạm vi:** Chưa đề xuất / Chờ duyệt / Đã duyệt; chỉ làm layout hoàn thiện khi đã có xác nhận cho phương án cụ thể theo [workflow](WORKFLOW.md).
- **Group ID / HIG và SH rule IDs áp dụng:**
- **Người dùng và bối cảnh:**
- **Việc cần hoàn thành / lý do cần màn này:**
- **Điểm vào / điểm ra / hành vi quay lại:**
- **Thông tin cần hiển thị và thứ tự ưu tiên:**
- **Hành động chính / hành động phụ:**
- **Nội dung thật hoặc dữ liệu mẫu:** đánh dấu rõ dữ liệu giả lập.
- **Phần phải giữ / phần được thay đổi:**
- **Quy tắc nghiệp vụ và khả năng thiết bị:** ghi nguồn xác nhận từ product/dev.

#### Tương tác

| Thao tác | Điều kiện | Phản hồi ngay | Kết quả thành công | Khi lỗi / cách khôi phục |
| --- | --- | --- | --- | --- |
| Chưa xác nhận | — | — | — | — |

#### Trạng thái cần xem xét theo phạm vi thực tế

- Bình thường; dữ liệu rỗng; đang tải; thành công; lỗi.
- Thiết bị offline; quyền bị từ chối; thiết bị không hỗ trợ chức năng.
- Lệnh đang gửi; thất bại một phần khi điều khiển nhiều đèn; trạng thái đèn thay đổi từ nguồn khác.
- Nội dung dài; nhiều thiết bị; cỡ chữ lớn; nhãn accessibility; phân biệt trạng thái ngoài màu sắc.
- Điều kiện trả phí nếu có trong phạm vi đã xác nhận.

Mỗi trạng thái phải ghi **Áp dụng / Không áp dụng kèm lý do / Chưa xác nhận**. Không tự đưa mọi trạng thái vào UI.

#### Ràng buộc và kiểm chứng

- **Màn hình / orientation / safe area / light-dark mode:** Chưa xác nhận.
- **Ràng buộc triển khai, độ trễ và khả năng hỗ trợ:** Chưa xác nhận.
- **Tiêu chí nghiệm thu:** hành vi, nội dung và trạng thái cụ thể cần đúng.
- **Kết quả review HIG:** rule ID, trạng thái Đạt/Cần sửa/Không áp dụng/Chưa kiểm chứng và vị trí bằng chứng; tách design/prototype với runtime.
- **Metric phù hợp:** nêu định nghĩa, nguồn, mẫu số và baseline nếu có; chưa có thì đề xuất cách đo.
- **Câu hỏi còn mở / giả định để dựng nháp:**
- **Link thiết kế / prototype / ảnh tham chiếu:**

## H01 — Home demo

Nguồn 23887:8097, đích Test 24744:5188 trong file mklhEcafiTfj9FoGIUhA0M. Đã đọc context/render; xem [HOME_DEMO_PROPOSAL.md](HOME_DEMO_PROPOSAL.md). User duyệt Home-A; đã hoàn thiện hai cấu hình dark và bảng trạng thái/spec trong Test. Đọc [HOME_DEMO_HANDOFF.md](HOME_DEMO_HANDOFF.md) cho controls, hành vi, cấu hình và review evidence.

## H01 — Bổ sung giới hạn component WF05

User xác nhận đã setup component Duo trong file SmartHue. Demo Home-A đã reuse source light cards, nhưng chrome được tái dựng sau lỗi import Community; chưa audit đầy đủ component Duo trong file trước fallback. Đây là thiếu sót của quá trình kiểm tra, không phải bằng chứng tài nguyên local thiếu. Chưa sửa demo trong lượt cập nhật rule; trước lần chỉnh layout tiếp theo phải inventory và map/reuse component theo WF05. Xem [audit](APPLE_UI_KIT_AUDIT.md).

## H01 — Home-A v2 HTML, 2026-10-06

- **Yêu cầu:** user “gen lại với các rule mới t xem nào”, tiếp tục “tiếp đi”.
- **Artifact:** [home-a-v2.html](demo-home/home-a-v2.html), preview mở trong Codex tại `http://127.0.0.1:8765/home-a-v2.html`; file độc lập, CSS/SVG/JS inline, không framework/tài nguyên mạng bắt buộc. URL chỉ hoạt động khi server local còn chạy; file HTML mở độc lập được.
- **Phạm vi:** minh họa lại Home-A đã duyệt; inner 951 × 669, vùng phòng/nhóm trái + grid phải; outer 466 × 678, stack/group/grid cuộn. Giữ dark, glow xanh, card ánh sáng đỏ, room filters, source names, Quick Mode và bốn destinations. Chưa được user review/nghiệm thu v2; không làm thay đổi navigation/feature.
- **Mapping WF05:** templates `24731:15442` / `24731:15493`; tab bar main `24730:18112` (4/False/Default); toolbar main `24731:15183`; source Light set `831:3924`. Đọc [audit](APPLE_UI_KIT_AUDIT.md) trước lần làm Figma. HTML không phải linked instances; chưa có instance output/read-back mới ở Figma.
- **Ref:** xem lại REF-02 Mail inner; học hierarchy hai vùng, khoảng trống và controls theo nội dung; giữ nhận diện SmartHue và core trực tiếp, không đưa inbox/search vào Home. Đã xem render Home `23887:8097`, kit local inner/outer và tab bar4.
- **States minh họa:** selector ngoài màn sản phẩm thay đèn đầu thành On/Off/Offline/Pending/Lỗi. Offline có nhãn + Reconnect, ẩn power switch vì chưa biết trạng thái thiết bị; pending disable control, error có Thử lại. Đây là ví dụ spec, không chốt timeout/ACK/retry/capability.
- **Review:** kiểm tra render hai cấu hình, fit panel603px không gây horizontal overflow; state labels/control disable/action visibility đọc từ DOM. Đã sửa preview inner ban đầu bị clip bằng auto fit. Cỡ control sau scale chỉ để xem toàn frame, không dùng làm bằng chứng 44pt/hit testing. Thao tác group/phòng chỉ minh họa, không giả group sync/dataset/backend.
- **Bằng chứng:** [inner](demo-home/home-a-v2-inner.jpg), [outer](demo-home/home-a-v2-outer.jpg), [offline](demo-home/home-a-v2-offline.jpg), [state checks](demo-home/home-a-v2-checks.json).
- **Giới hạn:** Liquid Glass/native typography/modes xấp xỉ; chưa kiểm chứng chữ lớn, VoiceOver, contrast mọi state, safe areas, fold/resize runtime hoặc lệnh thật. Các action phụ chỉ có vị trí và nhãn, không bịa entry flow.


## H01 — Home-A v2 Figma, 2026-10-06

- **Trạng thái:** đã dựng sau khi user duyệt HTML v2; chờ user review.
- **Figma:** [board](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24764-3926), [inner](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24764-3931), [outer](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24764-3951), [states/spec](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24770-4253).
- **State:** On/Off/Offline dùng source variants; Pending/Command error là override minh họa, không ACK. Retry không chốt business logic.
- **WF05:** 8 linked card instances main `831:3923`; linked Duo toolbar/status/tab/action và outer lens; group/filter từ Home giữ nested instances. Xem [JSON](demo-home/home-a-v2-figma-review.json), [audit](APPLE_UI_KIT_AUDIT.md).
- **Targets:** 26 spec frames ≥44 × 44 trong parent bounds; chưa xác minh hit testing/VoiceOver/runtime scroll.
- **Metric:** task completion/time/error, accidental commands, state continuity khi resize; chưa có baseline.

## RV02 — Home-A v3, feedback01–03 — 2026-10-07

User annotate tại trang review RV01, yêu cầu “xử lý các feedback này”: inner ngang chia hai vùng bằng nhau, card đèn bớt giãn, spacing/font/radius/padding theo bội số4. Đã sửa trên bản sao [Home-A v3](https://www.figma.com/design/mklhEcafiTfj9FoGIUhA0M/?node-id=24805-6013), inner24805:6014/outer24805:6947; source24803:5700 giữ nguyên. Hai vùng396–396, gutter24; card inner188×208/outer164×208. Custom tokens đã kiểm tra theo4; giữ native kit/artwork intrinsic và ghi rõ ngoại lệ do agent áp dụng, chưa user xác nhận riêng. Không thêm UI. Đây là quyền sửa scope Home-A cụ thể, chưa nghiệm thu kết quả. Chi tiết/evidence: [review v3](reviews/2026-10-07-home-a-v3/README.md), [render](reviews/2026-10-07-home-a-v3/frame.png), [read-back](reviews/2026-10-07-home-a-v3/review.json), [invariants](reviews/2026-10-07-home-a-v3/invariants.json). Preview tiếp tục annotate: http://127.0.0.1:8767/after.html ; trang cũ giữ nguyên.

Ref tiếp tục ghi chú REF-02 đã xem trong Home-A. Read-back: 556 token checks có phạm vi không lỗi; 99/99 instances vẫn linked, mains/properties/modes giữ nguồn; text contents giữ nguyên. Native geometry giữ nguyên. Trade-off: vùng grid/card nhỏ hơn làm slider ngắn hơn, cân lại vùng nhóm/phòng; công QA/token mapping bổ sung, không đổi feature. Chưa có dữ liệu usability/ROI; đo task completion/time/mis-tap và kiểm tra native targets, scroll/resize, Dynamic Type, VoiceOver, lệnh đèn trên runtime.
