
const PAGE_META = {
  home:["ERP 홈","더큰코리아 전체 경영현황을 한눈에 확인합니다."],
  hr:["통합인사","통합 인사DB를 중심으로 직원정보와 인사상태를 관리합니다."],
  attendance:["근태 · 휴가","출퇴근, 연월차, 미휴무 및 휴가내역을 통합 관리합니다."],
  contract:["전자계약","정규직·아르바이트·사업소득자 계약을 통합 관리합니다."],
  payroll:["급여관리","정규직·아르바이트·사업소득·일용직 급여를 통합 관리합니다."],
  tax:["4대보험 · 세무","4대보험, 원천세, 사업소득 및 세무자료를 관리합니다."],
  stores:["점포관리","직영점과 위탁점을 구분해 점포 기본정보와 운영현황을 관리합니다."],
  schedule:["근무스케줄","주간·월간 근무표와 인력배치를 관리합니다."],
  sales:["매출관리","점포별 일매출·월매출과 실적을 통합 조회합니다."],
  opening:["신규점포 개설","신규점포 일정, 체크리스트와 비용을 관리합니다."],
  purchase:["매입 · 원가","직영점을 중심으로 발주·매입·식재료 원가를 관리합니다."],
  fund:["경비 · 자금","임대료, 수수료, 공과금, 법인카드 및 지급예정을 관리합니다."],
  profit:["손익관리","직영점 실제손익과 위탁점 관리지표를 구분해 조회합니다."],
  analysis:["경영분석","매출·인건비·원가·이익 추이를 비교 분석합니다."]
};

const MODULES = {
  hr:[
    ["통합 직원정보","기존 통합 인사DB의 직원정보, 소속점포, 직책, 입사일, 재직상태를 조회합니다.","통합인사"],
    ["인사상태 관리","휴직·복직·퇴직 이력을 기존 인사 시스템과 연결합니다.","인사상태"],
    ["직원정보 입력","신규직원 등록 및 기존 직원정보 수정을 연결합니다.","직원등록"]
  ],
  attendance:[
    ["출퇴근 관리","기존 출퇴근 시스템을 점포별로 연결합니다.","출퇴근"],
    ["연월차 관리","연월차 신청·승인·잔여일수·원장을 연결합니다.","연월차"],
    ["미휴무 관리","미휴무 발생·사용·승인·원장을 연결합니다.","미휴무"],
    ["근무 스케줄","주간·월간 스케줄을 연결합니다.","스케줄"]
  ],
  contract:[
    ["정규직 근로계약","기존 정규직 전자근로계약서를 연결합니다.","정규직 계약"],
    ["아르바이트 근로계약","기존 아르바이트 근로계약서를 연결합니다.","알바 계약"],
    ["사업소득·용역계약","사업소득자 용역계약 시스템을 연결합니다.","용역계약"],
    ["계약 관리자","서명완료·서명대기·재계약 대상을 통합 조회합니다.","계약관리"]
  ],
  payroll:[
    ["본사 급여관리","정규직·사업소득자 급여작성과 확정을 연결합니다.","급여관리"],
    ["직영점 통합급여","직영점 직원 급여·확정·명세서를 연결합니다.","직영점 급여"],
    ["아르바이트 관리","점포별 아르바이트 근무와 급여 연동을 연결합니다.","아르바이트"],
    ["일용직 관리","일용직 근무·지급·신고자료 원장을 연결합니다.","일용직"],
    ["급여명세서","확정 급여명세서와 카톡용 이미지 기능을 연결합니다.","급여명세서"],
    ["퇴직급여","퇴직금·퇴직연금 관련 관리화면을 연결합니다.","퇴직급여"]
  ],
  tax:[
    ["4대보험","국민연금·건강보험·장기요양·고용보험 정보를 관리합니다.","4대보험"],
    ["근로소득 세무자료","급여 확정자료를 세무신고용으로 정리합니다.","근로소득"],
    ["사업소득 3.3%","사업소득 원천징수와 지급내역을 관리합니다.","사업소득"],
    ["일용근로소득","일용직 지급완료 자료를 신고용으로 관리합니다.","일용직 세무"]
  ],
  stores:[
    ["점포 마스터","점포를 직영/위탁으로 구분하고 책임자·계약정보를 관리합니다.","점포정보"],
    ["직영점 현황","매출·인건비·원가·손익까지 상세 관리합니다.","직영점"],
    ["위탁점 현황","매출·본사수익·계약 중심으로 관리하고 원가 미확인 항목은 제외합니다.","위탁점"],
    ["운영 현황","점포별 주요 이슈와 운영상태를 관리합니다.","운영관리"]
  ],
  schedule:[
    ["주간 스케줄","점포별 주간 근무표 작성 시스템을 연결합니다.","주간"],
    ["월간 스케줄","점포별 월간 스케줄 관리 시스템을 연결합니다.","월간"]
  ],
  sales:[
    ["영업실적 보고","기존 일일 영업실적 보고 시스템을 연결합니다.","영업실적"],
    ["월간 매출","월별 점포 매출과 누계를 조회합니다.","월간매출"],
    ["전년·전월 비교","점포별 매출 증감과 추이를 분석합니다.","비교분석"]
  ],
  opening:[
    ["신규점포 현황","진행중·완료 점포를 구분해 관리합니다.","현황"],
    ["업무 체크리스트","점포 오픈 전 업무와 담당자를 관리합니다.","체크리스트"],
    ["비용관리","신규점포 관련 지출을 항목·날짜별로 관리합니다.","비용"]
  ],
  purchase:[
    ["거래처 관리","직영점 공급업체와 결제조건을 관리합니다.","거래처"],
    ["발주 관리","기존 발주 시스템을 연결하고 중앙에서 발주현황을 조회합니다.","발주"],
    ["매입 관리","입고·세금계산서·지급대기 흐름을 관리합니다.","매입"],
    ["원가율","직영점 식재료비와 매출을 연결해 원가율을 계산합니다.","원가"]
  ],
  fund:[
    ["지출 관리","임대료·수수료·공과금·기타경비를 관리합니다.","지출"],
    ["법인카드","법인카드 사용내역과 비용분류를 관리합니다.","법인카드"],
    ["지급예정","거래처·급여·세금 등 지급예정액을 관리합니다.","지급"],
    ["자금일보","일별 자금 유입·유출과 잔액을 관리합니다.","자금일보"]
  ],
  profit:[
    ["직영점 손익","매출-원가-인건비-임대·수수료-경비를 기준으로 실제손익을 계산합니다.","직영손익"],
    ["위탁점 관리손익","확인 가능한 매출·수익·계약정보만으로 관리지표를 표시합니다.","위탁손익"],
    ["전사 손익","직영점 손익과 본사비용을 포함한 전사 손익을 집계합니다.","전사손익"]
  ],
  analysis:[
    ["점포 비교","매출·인건비율·원가율·영업이익을 점포별 비교합니다.","점포비교"],
    ["월간 경영보고","기존 경영대시보드 데이터를 ERP 안에서 통합합니다.","경영보고"],
    ["추세 분석","전월·전년동월 대비 주요 지표 추이를 분석합니다.","추세"]
  ]
};

const MANAGEMENT_DASHBOARD_API_URL =
  "https://script.google.com/macros/s/AKfycbxf_asvj2SIK2HI_tLF6--Gc2dyn4Clls-HhB4YIvGYOAMmT-4AkZ3lykYPMt-Fw9wAIg/exec";

const SYSTEM_LINKS = {
  // 실제 URL이 확정된 시스템부터 여기에 연결합니다.
  payroll: "https://thebigkorea.github.io/thebigkorea-payroll-test/",
  contractRegular: "https://thebigkorea.github.io/hr-system/regular-contract.html",
  contractPart: "https://thebigkorea.github.io/hr-system/part-contract.html",
  contractService: "https://thebigkorea.github.io/hr-system/service-contract.html"
};


/* =========================================
   ERP 홈 전 점포 매출 비교
   실제 영업실적 API 연결 시 아래 함수에 데이터를 전달하면 됩니다.

   payload 예시:
   {
     asOfDate: "2026-09-15",
     yesterdaySales: 12345678,
     stores: [
       {
         name: "한국의집 롯데월드몰",
         operationType: "직영",
         current: 120000000,
         previousPeriod: 108000000,
         previousYearPeriod: 99000000
       }
     ]
   }
========================================= */

function numberOrZero(v){
  const n=Number(v);
  return Number.isFinite(n)?n:0;
}

function money(v){
  const n=numberOrZero(v);
  return n.toLocaleString("ko-KR")+"원";
}

function changeRate(current, compare){
  const a=numberOrZero(current);
  const b=numberOrZero(compare);
  if(!b) return null;
  return ((a-b)/b)*100;
}

function changeHtml(current, compare){
  const rate=changeRate(current,compare);
  if(rate===null) return '<span class="sales-change same">-</span>';
  const cls=rate>0?"up":rate<0?"down":"same";
  const arrow=rate>0?"▲":rate<0?"▼":"";
  return `<span class="sales-change ${cls}">${arrow}${Math.abs(rate).toFixed(1)}%</span>`;
}

function setSalesDashboardData(payload){
  payload=payload||{};
  const stores=Array.isArray(payload.stores)?payload.stores:[];

  const body=document.getElementById("allStoreSalesBody");
  if(!body)return;

  if(!stores.length){
    body.innerHTML=`
      <tr class="sales-loading-row">
        <td colspan="7">현재 조회할 매출 데이터가 없습니다.</td>
      </tr>`;
    document.getElementById("salesDataStatus").textContent="매출 데이터 없음";
    return;
  }

  body.innerHTML=stores.map(s=>{
    const current=numberOrZero(s.current);
    const prev=numberOrZero(s.previousPeriod);
    const year=numberOrZero(s.previousYearPeriod);
    const type=String(s.operationType||"").trim()||"미분류";
    const cls=type==="직영"?"direct":"consignment";

    return `
      <tr>
        <td><strong>${escapeHtml(s.name||"-")}</strong></td>
        <td><span class="type ${cls}">${escapeHtml(type)}</span></td>
        <td>${money(current)}</td>
        <td>${money(prev)}</td>
        <td>${changeHtml(current,prev)}</td>
        <td>${money(year)}</td>
        <td>${changeHtml(current,year)}</td>
      </tr>`;
  }).join("");

  const totalCurrent=stores.reduce((a,s)=>a+numberOrZero(s.current),0);
  const totalPrev=stores.reduce((a,s)=>a+numberOrZero(s.previousPeriod),0);
  const totalYear=stores.reduce((a,s)=>a+numberOrZero(s.previousYearPeriod),0);

  document.getElementById("salesTotalCurrent").textContent=money(totalCurrent);
  document.getElementById("salesVsPrev").innerHTML=changeHtml(totalCurrent,totalPrev);
  document.getElementById("salesVsYear").innerHTML=changeHtml(totalCurrent,totalYear);
  document.getElementById("salesYesterday").textContent=money(payload.yesterdaySales||0);

  document.getElementById("salesFootCurrent").textContent=money(totalCurrent);
  document.getElementById("salesFootPrev").textContent=money(totalPrev);
  document.getElementById("salesFootPrevRate").innerHTML=changeHtml(totalCurrent,totalPrev);
  document.getElementById("salesFootYear").textContent=money(totalYear);
  document.getElementById("salesFootYearRate").innerHTML=changeHtml(totalCurrent,totalYear);

  const status=document.getElementById("salesDataStatus");
  status.textContent=`전 점포 ${stores.length}개 연동`;
  status.classList.add("live");

  updateSalesPeriodLabels(payload.asOfDate);
}


function loadErpStoreSales(){
  const monthValue =
    document.getElementById("erpMonth")?.value;

  if(!monthValue){
    return;
  }

  const parts=monthValue.split("-").map(Number);
  const year=parts[0];
  const month=parts[1];

  const status=
    document.getElementById("salesDataStatus");

  if(status){
    status.textContent="매출 데이터 불러오는 중";
    status.classList.remove("live");
  }

  const callbackName=
    "__erpSalesCallback_" + Date.now();

  const scriptTag=
    document.createElement("script");

  let finished=false;

  const cleanup=()=>{
    if(finished)return;
    finished=true;

    try{
      delete window[callbackName];
    }catch(error){
      window[callbackName]=undefined;
    }

    if(scriptTag.parentNode){
      scriptTag.parentNode.removeChild(scriptTag);
    }
  };

  const timer=setTimeout(()=>{
    cleanup();

    if(status){
      status.textContent="매출 데이터 연결 실패";
      status.classList.remove("live");
    }

    const body=
      document.getElementById("allStoreSalesBody");

    if(body){
      body.innerHTML=`
        <tr class="sales-loading-row">
          <td colspan="7">
            영업실적 데이터를 불러오지 못했습니다.
            Apps Script 배포 상태를 확인해 주세요.
          </td>
        </tr>`;
    }
  },30000);

  window[callbackName]=(payload)=>{
    clearTimeout(timer);

    if(
      payload &&
      payload.ok === true
    ){
      setSalesDashboardData(payload);

      if(
        payload.yesterdayDate &&
        document.getElementById(
          "salesYesterdayDate"
        )
      ){
        document.getElementById(
          "salesYesterdayDate"
        ).textContent=
          payload.yesterdayDate +
          " 실적";
      }
    }else{
      if(status){
        status.textContent="매출 데이터 조회 오류";
        status.classList.remove("live");
      }

      const message=
        payload?.message ||
        "매출 데이터를 조회하지 못했습니다.";

      const body=
        document.getElementById("allStoreSalesBody");

      if(body){
        body.innerHTML=`
          <tr class="sales-loading-row">
            <td colspan="7">${escapeHtml(message)}</td>
          </tr>`;
      }
    }

    cleanup();
  };

  scriptTag.onerror=()=>{
    clearTimeout(timer);
    cleanup();

    if(status){
      status.textContent="매출 데이터 연결 실패";
      status.classList.remove("live");
    }
  };

  const params=
    new URLSearchParams({
      action:"erpSalesComparison",
      year:String(year),
      month:String(month),
      callback:callbackName,
      t:String(Date.now())
    });

  scriptTag.src=
    MANAGEMENT_DASHBOARD_API_URL +
    "?" +
    params.toString();

  document.head.appendChild(scriptTag);
}

function updateSalesPeriodLabels(asOfDate){
  const selected=document.getElementById("erpMonth")?.value;
  if(!selected)return;

  const [year,month]=selected.split("-").map(Number);
  const today=new Date();
  const selectedLastDay=new Date(year,month,0).getDate();
  const isCurrentMonth=today.getFullYear()===year && today.getMonth()+1===month;
  const day=isCurrentMonth ? Math.min(today.getDate(),selectedLastDay) : selectedLastDay;

  const prev=new Date(year,month-2,1);
  const prevLast=new Date(prev.getFullYear(),prev.getMonth()+1,0).getDate();
  const prevDay=Math.min(day,prevLast);

  const currentLabel=`${year}.${month}.1 ~ ${year}.${month}.${day}`;
  const prevLabel=`${prev.getFullYear()}.${prev.getMonth()+1}.1 ~ ${prev.getFullYear()}.${prev.getMonth()+1}.${prevDay}`;
  const yearLabel=`${year-1}.${month}.1 ~ ${year-1}.${month}.${day}`;

  document.getElementById("salesCurrentPeriod").textContent=currentLabel;
  document.getElementById("salesPrevPeriod").textContent=prevLabel+" 대비";
  document.getElementById("salesYearPeriod").textContent=yearLabel+" 대비";
  document.getElementById("salesComparisonGuide").textContent=
    `${currentLabel} 누계를 전월·전년 동기간과 비교합니다.`;

  const y=new Date();
  y.setDate(y.getDate()-1);
  document.getElementById("salesYesterdayDate").textContent=
    `${y.getFullYear()}.${y.getMonth()+1}.${y.getDate()} 실적`;
}

function escapeHtml(v){
  return String(v??"")
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");
}

function init(){
  const month = document.getElementById("erpMonth");
  const now = new Date();
  month.value = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}`;
  updateSalesPeriodLabels();
  loadErpStoreSales();

  month.addEventListener("change",()=>{
    updateSalesPeriodLabels();
    loadErpStoreSales();
  });

  document.querySelectorAll(".nav-item").forEach(btn=>{
    btn.addEventListener("click",()=>openView(btn.dataset.view));
  });

  document.querySelectorAll("[data-view-target]").forEach(btn=>{
    btn.addEventListener("click",()=>openView(btn.dataset.viewTarget));
  });

  document.getElementById("menuToggle").addEventListener("click",()=>{
    document.getElementById("sidebar").classList.toggle("open");
  });

  document.getElementById("refreshBtn").addEventListener("click",()=>{
    alert("ERP 홈 매출 비교 화면이 준비되었습니다. 다음 단계에서 기존 영업실적 API를 연결하면 전 점포 실제 매출이 표시됩니다.");
  });

  document.querySelectorAll(".quick-card").forEach(btn=>{
    btn.addEventListener("click",()=>handleQuickSystem(btn.dataset.system));
  });

  buildModuleViews();
}

function openView(view){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(v=>v.classList.toggle("active",v.dataset.view===view));
  const target=document.getElementById(`view-${view}`);
  if(target) target.classList.add("active");
  const meta=PAGE_META[view]||["ERP",""];
  document.getElementById("pageTitle").textContent=meta[0];
  document.getElementById("pageSubtitle").textContent=meta[1];
  document.getElementById("sidebar").classList.remove("open");
  window.scrollTo({top:0,behavior:"smooth"});
}

function buildModuleViews(){
  Object.entries(MODULES).forEach(([key,items])=>{
    const el=document.getElementById(`view-${key}`);
    if(!el)return;
    const meta=PAGE_META[key];
    const special = key==="purchase" || key==="profit"
      ? `<div class="note-box"><strong>운영 기준:</strong> 직영점은 매입원가와 손익을 상세 관리하고, 위탁점은 본사에서 확인 가능한 데이터만 관리합니다. 확인되지 않는 원가는 임의 추정하지 않습니다.</div>`
      : "";
    el.innerHTML=`
      <section class="module-hero">
        <h2>${meta[0]}</h2>
        <p>${meta[1]}</p>
      </section>
      <div class="module-grid">
        ${items.map(([title,desc,label])=>`
          <article class="module-card">
            <h3>${title}</h3>
            <p>${desc}</p>
            <button onclick="openModule('${escapeJs(key)}','${escapeJs(title)}')">${label} 열기</button>
          </article>`).join("")}
      </div>
      ${special}
    `;
  });
}

function openModule(section,title){
  const known = {
    "급여관리": SYSTEM_LINKS.payroll,
    "정규직 근로계약": SYSTEM_LINKS.contractRegular,
    "아르바이트 근로계약": SYSTEM_LINKS.contractPart,
    "사업소득·용역계약": SYSTEM_LINKS.contractService
  };
  if(known[title]){
    window.open(known[title],"_blank","noopener");
    return;
  }
  alert(`${title}\n\n기존 시스템 연결 위치입니다.\n다음 단계에서 현재 사용 중인 실제 URL/API를 하나씩 연결합니다.`);
}

function handleQuickSystem(key){
  const map={
    payroll:SYSTEM_LINKS.payroll,
    contract:SYSTEM_LINKS.contractRegular
  };
  if(map[key]){
    window.open(map[key],"_blank","noopener");
    return;
  }
  const views={
    hr:"hr",leave:"attendance",directPayroll:"payroll",daily:"payroll",sales:"sales",schedule:"schedule"
  };
  if(views[key]) openView(views[key]);
  else alert("기존 시스템 연결 준비중입니다.");
}

function escapeJs(s){
  return String(s).replace(/\\/g,"\\\\").replace(/'/g,"\\'");
}

document.addEventListener("DOMContentLoaded",init);
