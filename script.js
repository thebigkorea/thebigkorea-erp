
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
  fund:["경비 · 자금","ECOUNT에서 수집되는 법인계좌 거래를 기반으로 잔액·입출금·자동분류·점포귀속·자금일보를 관리합니다."],
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
    ["계좌 현황","연결된 법인계좌별 잔액과 최근 수집상태를 확인합니다.","계좌"],
    ["입출금 거래내역","은행 거래내역을 기간·계좌·입출금 구분으로 조회합니다.","거래내역"],
    ["자동분류","거래처·적요 규칙을 이용해 매입·급여·세금·공과금 등을 자동분류합니다.","자동분류"],
    ["점포 귀속","본사·한국의집·길채정·소바공방·고궁·효종갱 등 비용 귀속처를 지정합니다.","점포귀속"],
    ["미분류 거래","자동분류되지 않은 거래만 모아서 검토합니다.","미분류"],
    ["자금일보","일별 입금·출금·기말잔액과 주요 자금흐름을 확인합니다.","자금일보"]
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

const SYSTEM_LINKS = {
  // 기존 시스템 공통 연결 주소
  managementDashboard: "https://script.google.com/macros/s/AKfycbzX4BEypYJv6h-5FZBTCFx1iJfHk-3DPBIHO9yRJfUmdXyy6xATo7vGnjG_T1swabh7XQ/exec",
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
    SYSTEM_LINKS.managementDashboard +
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

  const currentPeriodEl=document.getElementById("salesCurrentPeriod");
  const prevPeriodEl=document.getElementById("salesPrevPeriod");
  const yearPeriodEl=document.getElementById("salesYearPeriod");
  const comparisonGuideEl=document.getElementById("salesComparisonGuide");
  const yesterdayDateEl=document.getElementById("salesYesterdayDate");

  if(currentPeriodEl) currentPeriodEl.textContent=currentLabel;
  if(prevPeriodEl) prevPeriodEl.textContent=prevLabel+" 대비";
  if(yearPeriodEl) yearPeriodEl.textContent=yearLabel+" 대비";
  if(comparisonGuideEl){
    comparisonGuideEl.textContent=`${currentLabel} 누계를 전월·전년 동기간과 비교합니다.`;
  }

  if(yesterdayDateEl){
    const y=new Date();
    y.setDate(y.getDate()-1);
    yesterdayDateEl.textContent=`${y.getFullYear()}.${y.getMonth()+1}.${y.getDate()} 실적`;
  }
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

  month.addEventListener("change",()=>{
    updateSalesPeriodLabels();
  });

  document.querySelectorAll(".nav-item").forEach(btn=>{
    btn.addEventListener("click",()=>{
      if(btn.dataset.view==="sales"){
        window.open(SYSTEM_LINKS.managementDashboard,"_blank","noopener");
        return;
      }
      openView(btn.dataset.view);
    });
  });

  document.querySelectorAll("[data-view-target]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      if(btn.dataset.viewTarget==="sales"){
        window.open(SYSTEM_LINKS.managementDashboard,"_blank","noopener");
        return;
      }
      openView(btn.dataset.viewTarget);
    });
  });

  document.getElementById("menuToggle").addEventListener("click",()=>{
    document.getElementById("sidebar").classList.toggle("open");
  });

  document.getElementById("refreshBtn").addEventListener("click",()=>{
    window.location.reload();
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
  if(view==="fund" && document.getElementById("fundDashboard")){
    renderFundDashboard();
    loadFundData();
  }
  const meta=PAGE_META[view]||["ERP",""];
  document.getElementById("pageTitle").textContent=meta[0];
  document.getElementById("pageSubtitle").textContent=meta[1];
  document.getElementById("sidebar").classList.remove("open");
  window.scrollTo({top:0,behavior:"smooth"});
}


/* =========================================
   경비 · 자금 전용 화면
   현재는 화면/데이터 어댑터를 먼저 구성합니다.
   ECOUNT 연동부가 준비되면 setFundData(payload)에
   실제 데이터를 전달하면 그대로 화면에 반영됩니다.
========================================= */

const FUND_API_URL = "https://script.google.com/macros/s/AKfycbwr2mdmWMCUbQmHbCVXeXe_SjN-pa39GL7MYmuHlxIv31oU7Eg9MN5J-V-NkYuHBQKO/exec";

let fundLoadingPromise = null;

async function loadFundData(force=false){
  if(fundLoadingPromise && !force) return fundLoadingPromise;

  const sourceEl=document.getElementById("fundSourceStatus");
  const timeEl=document.getElementById("fundSyncTime");
  if(sourceEl) sourceEl.textContent="ECOUNT 금융자료 불러오는 중";
  if(timeEl) timeEl.textContent="Google Sheet 금융거래원장 조회 중";

  fundLoadingPromise=(async()=>{
    try{
      const sep=FUND_API_URL.includes("?")?"&":"?";
      const url=`${FUND_API_URL}${sep}action=getFundData&_=${Date.now()}`;
      const res=await fetch(url,{method:"GET",cache:"no-store"});
      if(!res.ok) throw new Error(`HTTP ${res.status}`);

      const json=await res.json();

      if(json && json.success===false){
        throw new Error(json.message||json.error||"금융자료 조회 실패");
      }

      // Apps Script 응답 구조가 {data:...}, {payload:...} 또는 직접 payload인 경우 모두 대응
      const payload=json?.data?.payload || json?.payload || json?.data || json;

      const transactions=Array.isArray(payload?.transactions)
        ? payload.transactions.map(t=>{
            const type=String(t.type||"").trim();
            const amount=fundNumber(t.amount);
            return {
              ...t,
              amount,
              income:type==="입금" ? (fundNumber(t.income)||amount) : 0,
              expense:type==="출금" ? (fundNumber(t.expense)||amount) : 0,
              balance:fundNumber(t.balance)
            };
          })
        : [];

      const accounts=Array.isArray(payload?.accounts)
        ? payload.accounts.map(a=>({...a,balance:fundNumber(a.balance)}))
        : [];

      setFundData({
        source:payload?.source||"ECOUNT",
        syncedAt:payload?.syncedAt||payload?.meta?.syncedAt||"",
        accounts,
        transactions,
        meta:payload?.meta||{}
      });

      console.log(`[ERP 금융자료] 계좌 ${accounts.length}개 / 거래 ${transactions.length}건`);
      return true;
    }catch(err){
      console.error("[ERP 금융자료 조회 오류]",err);
      fundState.source="ECOUNT 연동 오류";
      if(sourceEl) sourceEl.textContent="ECOUNT 연동 오류";
      if(timeEl) timeEl.textContent=`조회 실패: ${err.message}`;
      return false;
    }finally{
      fundLoadingPromise=null;
    }
  })();

  return fundLoadingPromise;
}

const FUND_STORE_OPTIONS = ["본사","한국의집","길채정","소바공방","고궁","효종갱","공통","미지정"];

const FUND_DEMO_DATA = {
  source:"ECOUNT 연동 준비",
  syncedAt:"",
  accounts:[],
  transactions:[]
};

let fundState = {
  source:FUND_DEMO_DATA.source,
  syncedAt:FUND_DEMO_DATA.syncedAt,
  accounts:[],
  transactions:[],
  filtered:[]
};

function fundNumber(v){
  const n=Number(v);
  return Number.isFinite(n)?n:0;
}

function fundMoney(v){
  return fundNumber(v).toLocaleString("ko-KR")+"원";
}

function setFundData(payload){
  payload=payload||{};
  fundState.source=payload.source||"ECOUNT";
  fundState.syncedAt=payload.syncedAt||"";
  fundState.accounts=Array.isArray(payload.accounts)
    ? payload.accounts.map(a=>({...a,balance:fundNumber(a.balance)}))
    : [];
  fundState.transactions=Array.isArray(payload.transactions)
    ? payload.transactions.map(t=>{
        const type=String(t.type||"").trim();
        const amount=fundNumber(t.amount);
        return {
          ...t,
          amount,
          income:type==="입금" ? (fundNumber(t.income)||amount) : 0,
          expense:type==="출금" ? (fundNumber(t.expense)||amount) : 0,
          balance:fundNumber(t.balance)
        };
      })
    : [];
  fundState.filtered=[...fundState.transactions];

  if(document.getElementById("fundDashboard")){
    renderFundDashboard();
  }
}

function buildFundView(){
  const el=document.getElementById("view-fund");
  if(!el)return;

  el.innerHTML=`
    <section class="module-hero fund-hero">
      <div>
        <span class="eyebrow">CASH & BANK MANAGEMENT</span>
        <h2>경비 · 자금</h2>
        <p>ECOUNT에 수집되는 법인계좌 거래를 ERP에서 통합 조회하고 자동분류·점포귀속·자금일보로 연결합니다.</p>
      </div>
      <div class="fund-connection-box">
        <span class="fund-connection-dot ready"></span>
        <div>
          <strong id="fundSourceStatus">ECOUNT 연동 준비</strong>
          <small id="fundSyncTime">실데이터 연결 전</small>
        </div>
      </div>
    </section>

    <div id="fundDashboard">
      <div class="fund-kpi-grid">
        <article class="fund-kpi-card">
          <span>전체 계좌 잔액</span>
          <strong id="fundTotalBalance">0원</strong>
          <small id="fundAccountCount">연결 계좌 0개</small>
        </article>
        <article class="fund-kpi-card income">
          <span>조회기간 입금</span>
          <strong id="fundTotalIncome">0원</strong>
          <small id="fundIncomeCount">0건</small>
        </article>
        <article class="fund-kpi-card expense">
          <span>조회기간 출금</span>
          <strong id="fundTotalExpense">0원</strong>
          <small id="fundExpenseCount">0건</small>
        </article>
        <article class="fund-kpi-card warning">
          <span>미분류 거래</span>
          <strong id="fundUnclassifiedCount">0건</strong>
          <small id="fundUnclassifiedAmount">0원</small>
        </article>
      </div>

      <div class="fund-layout">
        <section class="panel fund-account-panel">
          <div class="panel-head">
            <div><h3>계좌 현황</h3><p>은행별 법인계좌 잔액과 수집상태</p></div>
            <button class="text-btn" type="button" onclick="showFundTab('accounts')">전체보기</button>
          </div>
          <div id="fundAccountList" class="fund-account-list"></div>
        </section>

        <section class="panel fund-flow-panel">
          <div class="panel-head">
            <div><h3>자금 흐름</h3><p>조회된 거래의 입금·출금 요약</p></div>
          </div>
          <div class="fund-flow-bars">
            <div class="fund-flow-row">
              <span>입금</span>
              <div class="fund-bar"><i id="fundIncomeBar"></i></div>
              <strong id="fundIncomeBarText">0원</strong>
            </div>
            <div class="fund-flow-row">
              <span>출금</span>
              <div class="fund-bar"><i id="fundExpenseBar"></i></div>
              <strong id="fundExpenseBarText">0원</strong>
            </div>
          </div>
          <div class="note-box fund-note">
            실제 ECOUNT 연결 전에는 금융정보를 임의 생성하지 않습니다. 연동 데이터가 들어오면 이 화면이 자동으로 갱신됩니다.
          </div>
        </section>
      </div>

      <section class="panel fund-transactions-panel">
        <div class="panel-head fund-head-wrap">
          <div><h3>입출금 거래내역</h3><p>기간·계좌·입출금·분류상태로 조회합니다.</p></div>
          <div class="fund-actions">
            <button class="fund-btn secondary" type="button" onclick="resetFundFilters()">초기화</button>
            <button class="fund-btn primary" type="button" onclick="applyFundFilters()">조회</button>
          </div>
        </div>

        <div class="fund-filter-grid">
          <label>시작일
            <input type="date" id="fundStartDate">
          </label>
          <label>종료일
            <input type="date" id="fundEndDate">
          </label>
          <label>계좌
            <select id="fundAccountFilter"><option value="">전체 계좌</option></select>
          </label>
          <label>구분
            <select id="fundTypeFilter">
              <option value="">전체</option>
              <option value="입금">입금</option>
              <option value="출금">출금</option>
            </select>
          </label>
          <label>분류상태
            <select id="fundClassFilter">
              <option value="">전체</option>
              <option value="분류완료">분류완료</option>
              <option value="미분류">미분류</option>
            </select>
          </label>
          <label>검색
            <input type="search" id="fundKeyword" placeholder="적요·거래처·계좌명">
          </label>
        </div>

        <div class="fund-tabs">
          <button class="fund-tab active" data-fund-tab="all" onclick="showFundTab('all',this)">전체 거래</button>
          <button class="fund-tab" data-fund-tab="unclassified" onclick="showFundTab('unclassified',this)">미분류</button>
          <button class="fund-tab" data-fund-tab="accounts" onclick="showFundTab('accounts',this)">계좌별</button>
          <button class="fund-tab" data-fund-tab="daily" onclick="showFundTab('daily',this)">자금일보</button>
        </div>

        <div class="fund-table-wrap">
          <table class="fund-table">
            <thead>
              <tr>
                <th>거래일시</th>
                <th>구분</th>
                <th>계좌명</th>
                <th>적요 / 거래처</th>
                <th>입금</th>
                <th>출금</th>
                <th>잔액</th>
                <th>분류</th>
                <th>귀속</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody id="fundTransactionBody"></tbody>
          </table>
        </div>
      </section>
    </div>
  `;

  initFundDateRange();
  renderFundDashboard();
}

function initFundDateRange(){
  const end=new Date();
  const start=new Date();
  start.setDate(end.getDate()-6);

  const fmt=d=>{
    const y=d.getFullYear();
    const m=String(d.getMonth()+1).padStart(2,"0");
    const day=String(d.getDate()).padStart(2,"0");
    return `${y}-${m}-${day}`;
  };

  const startEl=document.getElementById("fundStartDate");
  const endEl=document.getElementById("fundEndDate");
  if(startEl&&!startEl.value)startEl.value=fmt(start);
  if(endEl&&!endEl.value)endEl.value=fmt(end);
}

function renderFundDashboard(){
  const accounts=fundState.accounts||[];
  const txs=fundState.filtered?.length || fundState.transactions.length===0
    ? (fundState.filtered||[])
    : fundState.transactions;

  const totalBalance=accounts.reduce((sum,a)=>sum+fundNumber(a.balance),0);
  const income=txs.filter(t=>t.type==="입금").reduce((sum,t)=>sum+fundNumber(t.amount),0);
  const expense=txs.filter(t=>t.type==="출금").reduce((sum,t)=>sum+fundNumber(t.amount),0);
  const incomeCount=txs.filter(t=>t.type==="입금").length;
  const expenseCount=txs.filter(t=>t.type==="출금").length;
  const unclassified=txs.filter(t=>!t.category || t.category==="미분류");
  const unclassifiedAmount=unclassified.reduce((sum,t)=>sum+fundNumber(t.amount),0);

  setText("fundTotalBalance",fundMoney(totalBalance));
  setText("fundAccountCount",`연결 계좌 ${accounts.length}개`);
  setText("fundTotalIncome",fundMoney(income));
  setText("fundIncomeCount",`${incomeCount}건`);
  setText("fundTotalExpense",fundMoney(expense));
  setText("fundExpenseCount",`${expenseCount}건`);
  setText("fundUnclassifiedCount",`${unclassified.length}건`);
  setText("fundUnclassifiedAmount",fundMoney(unclassifiedAmount));
  setText("fundSourceStatus",fundState.source||"ECOUNT 연동 준비");
  setText("fundSyncTime",fundState.syncedAt ? `최종수집 ${fundState.syncedAt}` : "실데이터 연결 전");

  const max=Math.max(income,expense,1);
  const incomeBar=document.getElementById("fundIncomeBar");
  const expenseBar=document.getElementById("fundExpenseBar");
  if(incomeBar)incomeBar.style.width=`${Math.round(income/max*100)}%`;
  if(expenseBar)expenseBar.style.width=`${Math.round(expense/max*100)}%`;
  setText("fundIncomeBarText",fundMoney(income));
  setText("fundExpenseBarText",fundMoney(expense));

  renderFundAccounts();
  renderFundAccountFilter();
  renderFundTransactions(txs);
}

function setText(id,value){
  const el=document.getElementById(id);
  if(el)el.textContent=value;
}

function renderFundAccounts(){
  const wrap=document.getElementById("fundAccountList");
  if(!wrap)return;

  if(!fundState.accounts.length){
    wrap.innerHTML=`
      <div class="fund-empty">
        <strong>연결된 계좌 데이터가 없습니다.</strong>
        <span>ECOUNT 연동부가 연결되면 은행·계좌명·잔액·수집상태가 표시됩니다.</span>
      </div>`;
    return;
  }

  wrap.innerHTML=fundState.accounts.map(a=>`
    <div class="fund-account-item">
      <div class="fund-bank-icon">🏦</div>
      <div class="fund-account-main">
        <strong>${escapeHtml(a.bank||"-")} · ${escapeHtml(a.name||"-")}</strong>
        <small>${escapeHtml(a.maskedNumber||a.number||"-")}</small>
      </div>
      <div class="fund-account-balance">
        <strong>${fundMoney(a.balance)}</strong>
        <small class="${a.status==="정상"?"ok":""}">${escapeHtml(a.status||"")}</small>
      </div>
    </div>`).join("");
}

function renderFundAccountFilter(){
  const select=document.getElementById("fundAccountFilter");
  if(!select)return;
  const current=select.value;
  select.innerHTML='<option value="">전체 계좌</option>'+
    fundState.accounts.map(a=>{
      const key=a.id||a.number||a.name||"";
      return `<option value="${escapeHtml(key)}">${escapeHtml((a.bank||"")+" "+(a.name||""))}</option>`;
    }).join("");
  select.value=current;
}

function renderFundTransactions(txs){
  const body=document.getElementById("fundTransactionBody");
  if(!body)return;

  if(!txs.length){
    body.innerHTML=`
      <tr class="fund-empty-row">
        <td colspan="10">
          <strong>조회된 거래가 없습니다.</strong>
          <span>ECOUNT 실데이터 연결 후 거래내역이 이곳에 표시됩니다.</span>
        </td>
      </tr>`;
    return;
  }

  body.innerHTML=txs.map((t,idx)=>{
    const income=t.type==="입금";
    const category=t.category||"미분류";
    const store=t.store||"미지정";
    const status=category==="미분류"?"미분류":"분류완료";
    return `
      <tr>
        <td>${escapeHtml(t.datetime||t.date||"-")}</td>
        <td><span class="fund-type ${income?"in":"out"}">${escapeHtml(t.type||"-")}</span></td>
        <td><strong>${escapeHtml(t.accountName||"-")}</strong></td>
        <td>${escapeHtml(t.description||t.counterparty||"-")}</td>
        <td class="money in">${income?fundMoney(t.amount):"-"}</td>
        <td class="money out">${!income?fundMoney(t.amount):"-"}</td>
        <td class="money">${fundMoney(t.balance)}</td>
        <td>
          <select class="fund-inline-select" onchange="updateFundTransaction(${idx},'category',this.value)">
            ${["미분류","매출입금","식재료 매입","급여","4대보험","세금","임대료","수수료","공과금","법인카드","기타"].map(v=>`<option ${v===category?"selected":""}>${v}</option>`).join("")}
          </select>
        </td>
        <td>
          <select class="fund-inline-select" onchange="updateFundTransaction(${idx},'store',this.value)">
            ${FUND_STORE_OPTIONS.map(v=>`<option ${v===store?"selected":""}>${v}</option>`).join("")}
          </select>
        </td>
        <td><span class="fund-status ${status==="분류완료"?"done":"pending"}">${status}</span></td>
      </tr>`;
  }).join("");
}

function updateFundTransaction(index,key,value){
  const visible=fundState.filtered||fundState.transactions;
  const target=visible[index];
  if(!target)return;
  target[key]=value;
  renderFundDashboard();
}

function applyFundFilters(){
  const start=document.getElementById("fundStartDate")?.value||"";
  const end=document.getElementById("fundEndDate")?.value||"";
  const account=document.getElementById("fundAccountFilter")?.value||"";
  const type=document.getElementById("fundTypeFilter")?.value||"";
  const cls=document.getElementById("fundClassFilter")?.value||"";
  const keyword=(document.getElementById("fundKeyword")?.value||"").trim().toLowerCase();

  fundState.filtered=fundState.transactions.filter(t=>{
    const d=String(t.date||t.datetime||"").slice(0,10).replace(/\//g,"-");
    const accountKey=String(t.accountId||t.accountNumber||t.accountName||"");
    const status=(!t.category||t.category==="미분류")?"미분류":"분류완료";
    const hay=[t.description,t.counterparty,t.accountName,t.category,t.store].join(" ").toLowerCase();

    return (!start||!d||d>=start) &&
      (!end||!d||d<=end) &&
      (!account||accountKey===account) &&
      (!type||t.type===type) &&
      (!cls||status===cls) &&
      (!keyword||hay.includes(keyword));
  });

  renderFundDashboard();
}

function resetFundFilters(){
  initFundDateRange();
  ["fundAccountFilter","fundTypeFilter","fundClassFilter","fundKeyword"].forEach(id=>{
    const el=document.getElementById(id);
    if(el)el.value="";
  });
  fundState.filtered=[...fundState.transactions];
  renderFundDashboard();
}

function showFundTab(tab,button){
  document.querySelectorAll(".fund-tab").forEach(b=>b.classList.toggle("active",b===button));
  if(tab==="unclassified"){
    fundState.filtered=fundState.transactions.filter(t=>!t.category||t.category==="미분류");
    renderFundDashboard();
    return;
  }
  if(tab==="all"){
    fundState.filtered=[...fundState.transactions];
    renderFundDashboard();
    return;
  }
  if(tab==="accounts"){
    document.querySelector(".fund-account-panel")?.scrollIntoView({behavior:"smooth",block:"start"});
    return;
  }
  if(tab==="daily"){
    alert("자금일보는 ECOUNT 실데이터 연결 후 일자별 입금·출금·기말잔액을 자동 집계하도록 연결합니다.");
  }
}


function buildModuleViews(){
  buildFundView();

  Object.entries(MODULES).forEach(([key,items])=>{
    if(key==="fund") return;
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
    "사업소득·용역계약": SYSTEM_LINKS.contractService,
    "영업실적 보고": SYSTEM_LINKS.managementDashboard,
    "월간 매출": SYSTEM_LINKS.managementDashboard,
    "전년·전월 비교": SYSTEM_LINKS.managementDashboard,
    "월간 경영보고": SYSTEM_LINKS.managementDashboard
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
    contract:SYSTEM_LINKS.contractRegular,
    sales:SYSTEM_LINKS.managementDashboard
  };
  if(map[key]){
    window.open(map[key],"_blank","noopener");
    return;
  }
  const views={
    hr:"hr",leave:"attendance",directPayroll:"payroll",daily:"payroll",schedule:"schedule"
  };
  if(views[key]) openView(views[key]);
  else alert("기존 시스템 연결 준비중입니다.");
}

function escapeJs(s){
  return String(s).replace(/\\/g,"\\\\").replace(/'/g,"\\'");
}

document.addEventListener("DOMContentLoaded",init);
