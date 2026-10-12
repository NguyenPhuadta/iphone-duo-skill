// duo-checker v5.1 — kiểm tra hình học frame SmartHue Duo (CHỈ ĐỌC). Dùng qua use_figma, file mklhEcafiTfj9FoGIUhA0M.
// Cách dùng: thay PAGE_ID bằng id page; chạy song song một lệnh cho mỗi page (setCurrentPageAsync một lần/lệnh).
// Page Duo (2026-10-09): Onboarding 19486:75522 · Home [Nav] 19486:75525 · Voice 19513:87073 · Demo 19486:75527
//   · Light 19486:75528 · Settings 19486:75530 · Music 22585:4276 · Connect Light 19486:75524 · Automation [Nav] 19486:75526. Chỉ quét section tên bắt đầu "Duo C1…C4" (tên cũ trong Figma) hoặc "Duo Inner P/L", "Duo Outer P/L".
// Nhận cấu hình theo chiều rộng frame:
//   Outer P 466 (nội dung 20–382) · Outer L 678 (20–594)
//   Inner P 626 × 890 pt thật (20–606, top 84, crease y445) · Inner L 890 × 626 pt thật (20–806, crease x445)  ← SRC-PDF-01 đã chốt
//   Inner P 669 / Inner L 951 = artboard cũ trước chuyển đổi (legacy): giữ phép đo cũ, CREASE chỉ cảnh báo.
// Kiểm: đo khung thật từng khối (cắt theo clip), không dựa tên layer — safe area, trục gập, khối top-level tràn đáy frame,
//   bội 4 cho khối top-level + vị trí frame/section, constraints CENTER/SCALE, instance unlinked.
// Keep-out crease (SRC-PDF-01 M2, PDF A6): dải ±12 pt quanh 445 (Inner P theo y, Inner L theo x).
//   Khung pt thật: phần tử CỐ ĐỊNH chạm dải → issues `CREASE`; nội dung trong vùng cuộn (frame cao hơn viewport, hoặc nằm trong
//   node có overflowDirection ≠ NONE) → warnings `CREASE-SCROLL`. Overlay có nút (sheet/alert/action sheet/menu) chạm dải → issues
//   `OVERLAY-CREASE` (Câu 12–13: đặt trong pane phải x460–804); lớp dim (Overlay/Dimming) bỏ qua.
// Bỏ qua: node ẩn hoặc opacity 0 (lớp hoạt ảnh nguồn), chrome kit (rail, toolbar, tab bar, nút rail, icon overlay).
// Không được tuyên bố frame "đạt" nếu chưa chạy script này và issues = [] (trừ ngoại lệ đã ghi log).
const PAGE_ID="__PAGE_ID__";
const page = await figma.getNodeByIdAsync(PAGE_ID);
await figma.setCurrentPageAsync(page);
const K=951/890; // hệ số artboard cũ → pt thật
const CFG={
 466:{c:'Outer P',L:20,R:382},
 678:{c:'Outer L',L:20,R:594},
 626:{c:'Inner P',L:20,R:606,T:84,crease:'y',at:445,band:12,H:890,strict:true},
 890:{c:'Inner L',L:20,R:806,crease:'x',at:445,band:12,H:626,strict:true},
 669:{c:'Inner P (artboard cũ)',L:20,R:649,T:84,crease:'y',at:475.5,band:12*K},
 951:{c:'Inner L (artboard cũ)',L:20,R:867,fold:475.5,crease:'x',at:475.5,band:12*K}};
const CHROME=/Vertical Bar|Status bar|Lens|Camera Punchout|Toolbar - Top|toolbar top|Tab Bar|tab bar|Home Indicator|_Buttons|symbol action|Source icon|Source destination icon|Source \/ Hex|Hit region/i;
const SYSTEM=/Sheet|Overlay|Alert|Dimming|Header and Buttons|Cancel Button|Navigation Bar|Context Menu|Group 1321314980/i;
const DIM=/Overlay|Dimming/i;
const SYS_IDS=["24876:4519","24877:3869","24877:59368","24877:60193"];
const secs=page.findAllWithCriteria({types:['SECTION']}).filter(s=>/^Duo (C[1-4]|Inner [PL]|Outer [PL])\b/.test(s.name));
const out={issues:[],warnings:[],system:0,center:0,stats:{frames:0,unlinked:0,legacy:0}};
function rel(n,F,clip){const b=n.absoluteBoundingBox,f=F.absoluteBoundingBox;if(!b)return null;let x0=b.x-f.x,y0=b.y-f.y,x1=x0+b.width,y1=y0+b.height;if(clip){x0=Math.max(x0,clip[0]);y0=Math.max(y0,clip[1]);x1=Math.min(x1,clip[2]);y1=Math.min(y1,clip[3]);}return [x0,y0,x1,y1];}
function hasContent(n){if(n.type==='TEXT'||n.type==='INSTANCE')return true;return 'findOne' in n&&!!n.findOne(c=>c.visible&&(c.type==='TEXT'||c.type==='INSTANCE'));}
function inBand(b,C){if(!C.crease)return false;const lo=C.at-C.band,hi=C.at+C.band;return C.crease==='x'?(b[0]<hi&&b[2]>lo):(b[1]<hi&&b[3]>lo);}
const r=v=>Math.round(v*10)/10;
for(const s of secs){ if(s.x%4||s.y%4) out.issues.push(`${s.id}|SECTIONPOS|${s.x},${s.y}`);
 for(const F of s.children){if(F.type!=='FRAME')continue;const C=CFG[F.width];if(!C)continue;out.stats.frames++;if(!C.strict&&(F.width===669||F.width===951))out.stats.legacy++;const fid=F.id;
 if(F.x%4||F.y%4)out.issues.push(`${fid}|${C.c}|FRAMEPOS|${F.x},${F.y}`);
 const frameScrolls=!!(C.H&&F.height>C.H+0.5);
 const visit=(n,depth,clip,scroll)=>{ if(!n.visible||n.opacity===0)return; if(CHROME.test(n.name))return;
  if(depth===1&&(SYSTEM.test(n.name)||SYS_IDS.includes(n.id))){out.system++;
   if(C.strict&&!DIM.test(n.name)){const b=rel(n,F,clip);if(b&&inBand(b,C))out.issues.push(`${fid}|${C.c}|${n.name.slice(0,32)}(${n.id})|OVERLAY-CREASE|${r(b[0])}-${r(b[2])} × ${r(b[1])}-${r(b[3])}`);}
   return;}
  const b=rel(n,F,clip); if(!b||b[2]-b[0]<1||b[3]-b[1]<1)return;
  const tag=`${fid}|${C.c}|${n.name.slice(0,32)}(${n.id})`; const content=hasContent(n);
  const sc=scroll||(('overflowDirection' in n)&&n.overflowDirection&&n.overflowDirection!=='NONE'); // v5.1: ELLIPSE/VECTOR không có overflowDirection
  if(depth===1&&n.parent.layoutMode==='NONE'&&n.constraints&&/CENTER|SCALE/.test(n.constraints.horizontal+n.constraints.vertical))out.center++;
  const descends=depth<3&&(n.type==='GROUP'||(n.type==='FRAME'&&n.layoutMode==='NONE'));
  if(content&&depth===1&&(n.y+n.height)>F.height+0.5)out.issues.push(`${tag}|BOTTOM>${F.height}|${r(n.y+n.height)}`);
  if(content&&depth===1&&((n.x%4)!==0||(n.y%4)!==0))out.issues.push(`${tag}|GRID4|x${r(n.x)} y${r(n.y)}`);
  if(content&&!descends){
   if(b[2]>C.R+0.5)out.issues.push(`${tag}|RIGHT>${C.R}|${r(b[0])}-${r(b[2])}`);
   if(b[0]<C.L-0.5)out.issues.push(`${tag}|LEFT<${C.L}|${r(b[0])}-${r(b[2])}`);
   if(C.fold&&b[0]<C.fold&&b[2]>C.fold)out.issues.push(`${tag}|FOLD|${r(b[0])}-${r(b[2])}`);
   if(C.T&&b[1]<C.T-0.5)out.issues.push(`${tag}|TOP<${C.T}|y${r(b[1])}`);
   if(inBand(b,C)){const span=C.crease==='x'?`${r(b[0])}-${r(b[2])}`:`${r(b[1])}-${r(b[3])}`;
    if(!C.strict){const crossX=C.fold&&b[0]<C.fold&&b[2]>C.fold;if(!crossX)out.warnings.push(`${tag}|CREASE-LEGACY|${span}`);}
    else if(sc)out.warnings.push(`${tag}|CREASE-SCROLL|${span}`);
    else out.issues.push(`${tag}|CREASE|${span}`);}}
  if(descends){const nc=(n.type==='FRAME'&&n.clipsContent)?rel(n,F,clip):clip;for(const c of n.children)visit(c,depth+1,nc,sc);} };
 for(const c of F.children)visit(c,1,F.clipsContent?[0,0,F.width,F.height]:null,frameScrolls);
 for(const i of F.findAllWithCriteria({types:['INSTANCE']})){const m=await i.getMainComponentAsync();if(!m){out.stats.unlinked++;out.issues.push(`${fid}|${C.c}|${i.name}(${i.id})|UNLINKED`);}}
}}
return out;
