# SmartHue — Workflow agent thiết kế iPhone Duo

> **Đã chốt/cập nhật ngày 2026-10-06; người dùng đã chấp thuận toàn bộ khuyến nghị review, gồm wireframe ở bước đề xuất.** Áp dụng cho từng màn/luồng SmartHue được gửi bằng link Figma. Chốt workflow không đồng nghĩa duyệt một phương án thiết kế cụ thể.

## Điểm bắt đầu

Mỗi lượt liên quan đến Duo, đọc toàn bộ [AGENTS_IPHONE_DUO.md](AGENTS_IPHONE_DUO.md), [AGENTS.md](AGENTS.md) và [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) theo quy tắc định tuyến. Nạp các file context được yêu cầu; sau khi hiểu UI nguồn, theo thứ tự kiểm tra UI Kit Duo trước, HIG/rule tiếp theo, ảnh ref cuối cùng trước khi đề xuất.

Đã có research thiết bị, HIG và audit UI Kit. Đã nhận Home nguồn 23887:8097 và section Test đích 24744:5188 để demo; Home-A đã được user duyệt và hoàn thiện demo, xem [HOME_DEMO_HANDOFF.md](HOME_DEMO_HANDOFF.md). Nhóm ưu tiên gồm Home, từng đèn, OB và kết nối thiết bị; OB tạm hiểu onboarding, cần UI nguồn xác nhận.

## Trình tự bắt buộc

| Bước | Agent thực hiện | Kết quả cần có |
| --- | --- | --- |
| 1. Nhận link Figma | Xác định file/node và phạm vi màn hoặc luồng. Dùng đúng skill trước công cụ Figma tương ứng; đọc context, cấu trúc và ảnh render thực tế. Nếu không truy cập được hoặc thiếu node, báo đúng giới hạn và tiếp tục phần có bằng chứng. | Nguồn, node IDs và phạm vi đã xem. |
| 2. Hiểu màn/luồng hiện tại | Làm rõ luồng dùng để làm gì, mục đích, tác vụ chính, điểm vào/ra và từng UI element: nội dung, vai trò, hành động, dữ liệu, trạng thái và quan hệ với element khác. Phân biệt điều quan sát được, user xác nhận và suy luận. Không suy mục đích kinh doanh chỉ từ screenshot. | Mô tả hiện trạng trong SCREEN_SPECS.md; câu hỏi/giả định ảnh hưởng giải pháp. |
| 3. Kiểm tra UI Kit Duo trước | Ưu tiên kiểm tra component đã setup trong chính file SmartHue theo WF05. Đọc kỹ phần riêng về **Duo rules, safe area insets và margins** trong section `Safe Area Insets and Margins`, cùng template/variants/constraints liên quan; ghi rõ node IDs, giá trị/geometry, bindings và giới hạn runtime. Chưa xong bước này thì chưa chốt bố cục. | Inventory component, node IDs, variant/properties, safe-area/margin evidence và câu hỏi cần runtime xác minh. |
| 4. Đối chiếu HIG và rule | Sau UI Kit, đọc HIG_RULES.md, quy tắc dự án và IPHONE_DUO_RESEARCH.md; map rule IDs áp dụng, xác định xung đột/ngoại lệ và kiểm tra xem safe-area/HIG có thay đổi cách dùng kit không. | Rule IDs, lý do áp dụng/ngoại lệ, ràng buộc và rủi ro đã phân biệt nguồn với suy luận. |
| 5. Xem ref cuối | Đọc DUO_APP_REFERENCES.md và mở/xem trực tiếp ảnh phù hợp **sau khi đã kiểm tra UI Kit và HIG** để lấy taste/vibe. Ref chỉ gợi cảm quan; không dùng để thêm UI hoặc thay đổi mục đích/elements nguồn. | Ref IDs/ảnh đã xem, taste/vibe và điểm không áp dụng cho SmartHue. |
| 6. Đưa đề xuất và rủi ro | Chỉ dùng elements/hành vi có trong UI gốc SmartHue và các yêu cầu user đã nêu. Không tự thêm element, action, label, trạng thái hoặc tính năng mới. Nếu thấy thiếu element cần thiết, ghi thành câu hỏi/đề xuất riêng để user duyệt; chưa đưa nó vào wireframe/layout như đã chốt. Tạo wireframe HTML đơn giản, nhanh, sau ba bước đối chiếu trên. | File HTML preview đã mở trong Codex, thể hiện cấu trúc bằng khối/nhãn gọn; mapping source→wireframe, scope, rủi ro và tiêu chí nghiệm thu. |
| 7. User chấp thuận | Chờ user xác nhận phương án/phạm vi đề xuất. Ghi lời xác nhận, ngày, ID/phiên bản và phần đã duyệt. Nếu user yêu cầu chỉnh đề xuất, cập nhật rồi tiếp tục bước duyệt. | Quyết định **Đã duyệt** có nguồn xác nhận. |
| 8. Agent làm | Thiết kế trong file/frames đích và phạm vi đã duyệt, bắt buộc reuse linked instances của component Duo đã setup phù hợp theo WF05, dựng states/cấu hình liên quan và prototype nếu thuộc đầu ra. Review, sửa lỗi trong phạm vi, cập nhật spec và bàn giao link kết quả cùng bằng chứng. | Thiết kế và đặc tả theo phương án đã duyệt; kết quả review và giới hạn kiểm chứng. |

## Quy tắc tại bước chấp thuận

- Gửi link Figma cho phép agent đọc, phân tích, cập nhật context và đưa đề xuất; **không phải chấp thuận thiết kế**.
- Chấp thuận phải gắn với đề xuất cụ thể; lời như “ok, làm phương án A” được ghi nhận nếu phương án A đã rõ phạm vi. Im lặng hoặc thời gian chờ không phải chấp thuận.
- Trước duyệt phương án, được đọc/phân tích, nghiên cứu, cập nhật context và dựng wireframe đơn giản ở bước đề xuất. Quyền dựng wireframe đã được chấp thuận, không xin lại cho từng màn/luồng. Chưa duyệt phương án thì chưa làm layout hoàn thiện, component sản xuất, prototype hoàn thiện hoặc code sản phẩm; HTML/CSS/JS tối thiểu cho preview đề xuất được phép.
- Wireframe HTML phải đơn giản, làm nhanh: hình khối, nhãn ngắn, bố cục và controls hiện có; không làm visual polish, animation, prototype giả lập hoặc app HTML hoàn chỉnh. Ghi **Wireframe — Đề xuất, chưa duyệt phương án** cùng ID/phiên bản. Dùng file .html cục bộ riêng, mở preview trong Codex và ghi đường dẫn vào spec. Không dựng wireframe/hướng đề xuất trong Figma. File đích cho layout hoàn thiện được xác định trước bước 8.
- Bám sát inventory UI gốc: không tự thêm hoặc chế element UI mới (kể cả action, label, trạng thái, shortcut hay tính năng) chỉ vì thấy hữu ích, vì ref có, hoặc vì kit có component. Mọi element mới phải được trình như thay đổi phạm vi riêng, có lý do/rủi ro, và chỉ đưa vào thiết kế sau khi user chấp thuận rõ ràng.
- Sau duyệt phương án cụ thể, mới hoàn thiện thị giác, component, states và prototype theo đầu ra đã duyệt. Wireframe không phải bàn giao cuối hoặc bằng chứng runtime.
- Xác nhận tiếp tục có hiệu lực qua các lượt. Không xin lại cho cùng phương án/phạm vi; sửa lỗi và tinh chỉnh phù hợp với phương án đã duyệt được làm tiếp.
- Nếu thay đổi đáng kể bố cục, navigation, hành vi hoặc phạm vi so với phương án được duyệt, trình bày phần thay đổi và rủi ro để user chấp thuận trước khi làm phần đó. Không thêm cổng duyệt cho từng thao tác nhỏ.
- Thiếu thông tin quan trọng thì hỏi rõ và tiếp tục phần độc lập. Trước khi bắt đầu layout hoàn thiện, file đích và đầu ra phải được xác định; không tự sửa kit tham chiếu hoặc mở rộng sang tính năng/xuất bản ngoài phạm vi.

## Xem ref cuối — bắt buộc, đã chấp thuận 2026-10-06

Sau khi kiểm tra UI Kit và HIG, trước wireframe/layout, đọc DUO_APP_REFERENCES.md và **mở/xem trực tiếp ảnh ref phù hợp** để hiểu taste và vibe. Không thay việc xem ảnh bằng đọc tên app, link hay mô tả. Ghi ref IDs, ảnh/video đã xem, hierarchy, mật độ, spacing, typography, màu, hình dạng và controls; nêu điểm học/không áp dụng cho SmartHue. Ref không được dùng để thêm element UI hoặc thay đổi flow nguồn. Phân biệt quan sát, sở thích user và suy luận; ref không tự trở thành style đã duyệt. Nếu không mở được ảnh, báo giới hạn và không ghi đã xem.

Đọc [DUO_APP_REFERENCES.md](DUO_APP_REFERENCES.md) và [folder ref](references/README.md). Ưu tiên ref user cung cấp, sau đó nguồn phù hợp tác vụ. Dùng ref để tinh chỉnh taste/vibe bên trong phạm vi UI gốc; không ép mọi màn theo list-detail. Khi tiếp tục cùng phương án, dùng ảnh và ghi chú đã xem; xem thêm khi nhận material mới hoặc đổi hướng, không tạo vòng research/duyệt lặp.

## Nội dung tối thiểu của một đề xuất

1. **Hiểu hiện trạng:** mục đích/tác vụ, flow và danh sách UI elements; nguồn đã xem và phần chưa biết.
2. **Phương án khuyến nghị:** file HTML preview đơn giản trong Codex thể hiện hướng bố cục/wireframe; từng element phải map về UI nguồn hoặc yêu cầu user, không được tự thêm. Ghi safe-area/margin theo kit, rule IDs, ref đã xem và taste/vibe dự kiến cùng cấu hình/states; giải thích vì sao phù hợp HIG/kit, không mặc định mọi màn đều hai cột.
3. **Rủi ro và trade-off:** tác động đến tác vụ core, accessibility, resize, trạng thái/lệnh đèn, khả năng thiết bị và chi phí triển khai khi liên quan. Nêu ảnh hưởng Tech/Business/UX, ai được lợi/ai chịu chi phí và cách giảm rủi ro. Tác động kinh doanh chưa có dữ liệu phải ghi là giả thuyết.
4. **Điều kiện và kiểm chứng:** dependencies còn thiếu, tiêu chí nghiệm thu, metric/nguồn đo phù hợp; không bịa baseline hoặc mức cải thiện.
5. **Phạm vi xin duyệt:** phương án/phiên bản, màn, hành vi, đầu ra và file đích; chỉ rõ quyết định user cần chốt.

## Ghi nhận và bàn giao

- [SCREEN_SPECS.md](SCREEN_SPECS.md) lưu hiện trạng, elements/actions/states và ID đề xuất áp dụng.
- [DESIGN_DECISIONS.md](DESIGN_DECISIONS.md) lưu nguồn, đề xuất, rủi ro, quyết định và xác nhận của user. [DESIGN_BRIEF.md](DESIGN_BRIEF.md) cập nhật phạm vi/material mới.
- Review theo tiêu chí đã duyệt, [HIG rule IDs](HIG_RULES.md) và các cấu hình liên quan. Phân biệt bằng chứng Figma/prototype với runtime cần dev kiểm tra; không khẳng định lệnh đèn hoặc resize đã hoạt động từ ảnh thiết kế.
- User chọn màn/luồng đầu tiên bằng material gửi; không mặc định Home phải làm trước. Agent tự chuyển material thành context, không bắt user điền mẫu.

## Khuyến nghị review đã chấp thuận — 2026-10-06

Người dùng xác nhận “đồng ý với tất cả khuyến nghị nhé, sửa lại đi”. Các bổ sung sau có hiệu lực; giữ bước user duyệt phương án trước layout hoàn thiện:

- Sau khi đọc Figma, trả lại bản tóm tắt hiểu luồng trước hoặc trong đề xuất: mục đích, entry/exit, UI elements và hành vi chưa biết. Figma tĩnh không xác nhận được timeout, ack, retry hoặc logic quyền; lấy demo/spec/dev khi quyết định phụ thuộc các phần này.
- Đề xuất tách phần thích ứng layout khỏi phần thay đổi UX/navigation/hành vi. Chốt rõ phần giữ/đổi; không dùng yêu cầu làm Duo làm quyền thay đổi tính năng.
- Ghi ma trận cấu hình × states và phạm vi kiểm tra vào đề xuất; không coi toàn bộ checklist research là số frame bắt buộc. Các trường hợp không áp dụng hoặc chưa kiểm chứng phải có lý do.
- Bàn giao file chỉnh sửa được, spec hành vi, component đã dùng và bằng chứng review theo đầu ra được duyệt. Không tự thêm prototype, code hoặc design system toàn app.
- Tái dùng nhận diện từ UI nguồn; đề xuất nền tảng thị giác tối thiểu khi thiếu design system, không tự chọn một style mới trước duyệt.

Review, material còn thiếu và tiêu chí bàn giao được đóng gói trong [gói Duo độc lập](README.md). Wireframe đơn giản ở bước đề xuất **đã được chấp thuận**. Home-A có phương án/output được duyệt; các màn/luồng tiếp theo vẫn phải trình phương án cụ thể. Không xin lại approval trong cùng phạm vi Home-A.

## Trade-off và cách kiểm chứng workflow

- **Tech:** phân tích và đối chiếu rule trước giúp giảm sai spec; thêm công chuẩn bị và cần dev xác nhận hành vi không thể đọc từ Figma.
- **Business:** user kiểm soát hướng và phạm vi trước khi bỏ công thiết kế; tiến độ phụ thuộc thời điểm phản hồi. Chưa có dữ liệu để khẳng định giảm tổng thời gian hoặc chi phí.
- **Product / UX:** user kiểm tra cách hiểu tác vụ và cấu trúc bằng mô tả/wireframe trước layout hoàn thiện; wireframe giúp giảm hiểu khác nhau về bố cục nhưng tăng công chuẩn bị và chưa kiểm chứng trải nghiệm thật. Giữ mức đơn giản và review lại sau thiết kế.
- **Điều kiện và đo lường:** material đọc được, phạm vi đề xuất rõ và có xác nhận trước khi làm layout hoàn thiện. Theo dõi thời gian từ nhận link đến đề xuất/duyệt/bàn giao, số thay đổi phạm vi, states bị bỏ sót và lỗi sau review; chưa đặt target khi thiếu baseline.

## Lịch sử

- **2026-10-06:** thay nháp bằng workflow người dùng chốt: nhận link → hiểu màn/luồng và elements → đọc HIG/rule/kit → đề xuất và rủi ro → user chấp thuận → agent thiết kế và review.
- **2026-10-06:** user chấp thuận toàn bộ khuyến nghị review; wireframe được phép ở bước đề xuất, layout hoàn thiện vẫn cần duyệt phương án cụ thể.

## WF04 — Cách làm preview HTML, đã yêu cầu 2026-10-06; tinh chỉnh 2026-10-06

- Mỗi phương án bố cục/wireframe dùng một file .html độc lập; CSS inline và JavaScript tối thiểu chỉ khi thật sự cần chuyển cấu hình. Làm nhanh, dùng khối/nhãn đơn giản; không framework, package install, build pipeline, visual polish, animation, app giả hoàn chỉnh hoặc tài nguyên mạng bắt buộc.
- Giữ mức đơn giản và nhanh: khối, nhãn, hierarchy, controls và các cấu hình cần để chọn hướng. Không xây app hoàn chỉnh, không nối thiết bị thật hoặc giả ACK.
- Mở trang preview ngay trong Codex bằng khả năng HTML/browser preview của môi trường. Nếu cần URL, dùng server local nhẹ để phục vụ file và mở browser panel Codex; không publish ra ngoài. Nếu không mở được preview, báo giới hạn và gửi file, không ghi đã xem render.
- Ghi ID/phiên bản và nhãn “Đề xuất — chưa duyệt”; ghi đường dẫn HTML, cấu hình/ảnh preview đã kiểm tra, scope/rủi ro và quyết định vào SCREEN_SPECS/DESIGN_DECISIONS. HTML là artifact minh họa, không phải code sản phẩm hoặc bằng chứng runtime.
- Không ghi wireframe/hướng đề xuất vào Figma, kể cả file/page/frame nháp riêng, và không chuyển HTML sang Figma để xin duyệt. Chỉ đọc UI nguồn/kit trong giai đoạn đề xuất; sau duyệt mới dựng layout hoàn thiện theo scope.
- Rule này thay phần phương tiện dựng nháp của WF02. Bước đọc HIG/kit/ref và duyệt phương án vẫn giữ; không xin lại approval đã có.
- Wireframe Home-A từng dựng trong Figma là artifact lịch sử trước WF04, không phải mẫu workflow cho màn sau. Không yêu cầu xóa/chuyển lại artifact hoặc thiết kế đã hoàn thiện.

## WF06 — Không tự thêm UI ngoài nguồn, 2026-10-06

- Trước wireframe, lập inventory elements từ Figma nguồn: nội dung, controls, labels, actions, states và navigation hiện hữu; ghi rõ phần nào user yêu cầu giữ/đổi. Duo adaptation đổi cách sắp xếp và trình bày các element hiện có, không tự mở rộng sản phẩm.
- Không tự thêm hoặc chế element mới từ suy luận, HIG, ref, component kit hay ý thích agent. Không tự thêm shortcut, action, label, empty/error/pending state hoặc feature chưa có bằng chứng trong UI/flow nguồn hoặc yêu cầu rõ của user.
- Nếu phát hiện thiếu element có thể ảnh hưởng tính khả dụng/an toàn/hoàn tất flow, ghi thành câu hỏi hoặc đề xuất riêng với lý do, rủi ro và trade-off; không đưa vào HTML/Figma như phần đã chốt. Chỉ đưa vào sau khi user chấp thuận rõ ràng.
- Khi hoàn thiện/review, kiểm tra mapping source→output. Element mới không có nguồn hoặc quyết định duyệt là lỗi phạm vi.

Trade-off: HTML thuận tiện review ngay trong Codex và giới hạn công dựng đề xuất, nhưng chỉ xấp xỉ typography/native controls của kit; phải đối chiếu lại khi làm Figma. Không có số liệu khẳng định nhanh hơn; theo dõi thời gian tạo/mở preview và số vòng sửa do hiểu bố cục.

## WF05 — Kiểm tra và reuse component trong file, đã yêu cầu 2026-10-06

1. **Trước đề xuất:** đọc các page/section chứa tài nguyên trong file SmartHue `mklhEcafiTfj9FoGIUhA0M`. Tìm component sets và instance liên quan; không chỉ tìm tên “Duo” rồi kết luận không có. Đọc main component của instance khi cần, screenshot, cấu trúc, properties/variants, Auto Layout/constraints và semantic variable bindings/modes cần cho màn. Audit phần liên quan, không đọc hết thư viện không phục vụ flow.
2. **Ghi bằng chứng:** lưu file key, page/section, node ID, main component/set ID, variant/properties, bindings/mode, vai trò dự kiến và giới hạn đã kiểm tra trong APPLE_UI_KIT_AUDIT.md. Map UI elements của màn tới inventory trong SCREEN_SPECS.md. Chưa có node hoặc chưa xem được thì ghi Chưa kiểm tra/Bị chặn; không ghi Đã reuse từ lời xác nhận của user.
3. **Khi hoàn thiện sau duyệt:** bắt buộc dùng linked instances của component Duo đã setup phù hợp; chọn đúng variant cho cấu hình/state/mode, đổi nội dung qua properties/overrides được hỗ trợ và giữ liên kết/variables. Không tự dựng lại component có sẵn, detach hoặc sửa main component/kit. Bố cục riêng của màn được dựng trong frames đích thuộc scope.
4. **Nếu thiếu/không dùng được:** kiểm tra component trong file trước khi import bên ngoài hoặc tái dựng. “Component key not found” ở Community không phải bằng chứng local component thiếu. Ghi tài nguyên đã kiểm tra, component/variant thiếu, lỗi cụ thể, cách xử lý và độ lệch của fallback; báo vướng mắc trước khi dựng thay thế. Chỉ dùng fallback cho phần có bằng chứng không đáp ứng được. Giữ bước duyệt thay đổi đáng kể đã có, không xin lại cho reuse/tinh chỉnh trong scope đã duyệt.
5. **Review:** read-back main component/variant và bindings của instance thực tế trong output; ghi node bằng chứng và ngoại lệ. Không chỉ dựa vào hình giống kit hoặc tên layer để báo đã dùng component. HTML đề xuất được minh họa bằng CSS đơn giản, có mapping tới component dự kiến; không cần clone Figma library thành code hoặc ghi wireframe vào Figma.

Trade-off: designer bỏ thêm công tìm và map component trước đề xuất; đổi lại team có thể giữ consistency và giảm công bảo trì các bản dựng trùng, chưa có số liệu khẳng định tiết kiệm thời gian. Giới hạn variant của thư viện có thể ảnh hưởng flexibility; xử lý gap cụ thể thay vì phá liên kết. Kiểm chứng bằng inventory/output mapping, số component có sẵn bị dựng lại hoặc detach không có lý do, và số lỗi variant/bindings sau review; chưa đặt target thời gian khi thiếu baseline.
