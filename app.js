const jobs=[
  {id:'grace-stylist',title:'美容師スタイリスト',company:'Art Hair GRACE',area:'都城市',category:'美容・理容',type:'正社員',salary:'月給25万円保証／歩合45％',hours:'9:00〜18:30',holidays:'年間休日120日',tags:['経験者歓迎','車通勤可'],mark:'美容'},
  {id:'toto-staff',title:'居酒屋スタッフ（ホール・調理補助）',company:'酒と食 人人',area:'都城市',category:'飲食・販売・接客',type:'アルバイト・パート',salary:'給与・勤務条件は確認中',hours:'店舗確認後に掲載',holidays:'シフト制',tags:['条件確認中','中心市街地'],mark:'飲食'},
  {id:'office',title:'一般事務・受付スタッフ',company:'掲載企業準備中',area:'三股町',category:'事務・製造・その他',type:'正社員',salary:'月給18万円〜24万円',hours:'8:30〜17:30',holidays:'土日祝休み',tags:['残業少なめ','車通勤可'],mark:'事務'},
  {id:'care',title:'介護補助・送迎スタッフ',company:'掲載企業準備中',area:'曽於市',category:'介護・医療・福祉',type:'アルバイト・パート',salary:'時給1,100円〜',hours:'8:30〜16:30の間',holidays:'日曜休み／週3日〜',tags:['資格不要','未経験OK'],mark:'介護'},
  {id:'driver',title:'固定ルート配送ドライバー',company:'掲載企業準備中',area:'曽於市',category:'建設・設備・運送',type:'正社員',salary:'月給23万円〜32万円',hours:'7:00〜16:00',holidays:'週休2日／希望休あり',tags:['残業少なめ','未経験OK'],mark:'運送'},
  {id:'factory',title:'食品製造・検品スタッフ',company:'掲載企業準備中',area:'都城市',category:'事務・製造・その他',type:'正社員',salary:'月給19万円〜30万円',hours:'8:00〜17:00',holidays:'週休2日',tags:['未経験OK','賞与あり'],mark:'製造'}
];
const state={keyword:'',area:'',type:'',category:''};
const $=selector=>document.querySelector(selector);
const $$=selector=>[...document.querySelectorAll(selector)];

const menuButton=$('.menu-button');
const nav=$('.desktop-nav');
menuButton?.addEventListener('click',()=>{
  const open=menuButton.getAttribute('aria-expanded')==='true';
  menuButton.setAttribute('aria-expanded',String(!open));
  nav?.classList.toggle('open',!open);
});
$$('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>menuButton?.setAttribute('aria-expanded','false')));

function filteredJobs(){
  return jobs.filter(job=>{
    const haystack=`${job.title} ${job.company} ${job.area} ${job.category} ${job.type} ${job.tags.join(' ')}`.toLowerCase();
    return(!state.keyword||haystack.includes(state.keyword))&&(!state.area||job.area===state.area)&&(!state.type||job.type===state.type)&&(!state.category||job.category===state.category);
  });
}
function renderJobs(){
  const list=filteredJobs();
  $('#resultCount').textContent=list.length;
  $('#emptyJobs').hidden=list.length>0;
  $('#jobList').innerHTML=list.map(job=>`<article class="job-card">
    <div class="job-visual tone-${job.id}"><small>REAL PHOTO</small><strong>${job.mark}</strong><span>実際の職場写真へ差し替え</span><b>${job.area}</b></div>
    <div class="job-body"><div class="job-tags"><span>${job.type}</span><span>${job.category}</span></div><h3>${job.title}</h3><p class="job-company">${job.company}</p><strong class="job-salary">${job.salary}</strong><div class="job-conditions"><span>時間　${job.hours}</span><span>休日　${job.holidays}</span></div><button type="button" data-job="${job.id}">詳しく見る <span>→</span></button></div>
  </article>`).join('');
}
function resetFilters(){
  Object.assign(state,{keyword:'',area:'',type:'',category:''});
  $('#heroKeyword').value='';
  $('#heroArea').value='';
  $('#areaFilter').value='';
  $('#typeFilter').value='';
  $('#categoryFilter').value='';
  $$('.category-card').forEach(card=>card.classList.remove('active'));
  renderJobs();
}
$('#heroSearch')?.addEventListener('submit',event=>{
  event.preventDefault();
  state.keyword=$('#heroKeyword').value.trim().toLowerCase();
  state.area=$('#heroArea').value;
  $('#areaFilter').value=state.area;
  renderJobs();
  $('#jobs').scrollIntoView({behavior:'smooth'});
});
[['#areaFilter','area'],['#typeFilter','type'],['#categoryFilter','category']].forEach(([selector,key])=>$(selector)?.addEventListener('change',event=>{state[key]=event.target.value;renderJobs()}));
$('#resetFilters')?.addEventListener('click',resetFilters);
$$('.category-card').forEach(card=>card.addEventListener('click',()=>{
  state.category=card.dataset.category;
  $('#categoryFilter').value=state.category;
  $$('.category-card').forEach(item=>item.classList.toggle('active',item===card));
  renderJobs();
  $('#jobs').scrollIntoView({behavior:'smooth'});
}));
$('#jobList')?.addEventListener('click',event=>{
  const button=event.target.closest('[data-job]');
  if(!button)return;
  const job=jobs.find(item=>item.id===button.dataset.job);
  $('#jobDialogContent').innerHTML=`<div class="dialog-job-head"><small>${job.area} / ${job.type}</small><h2>${job.title}</h2><p>${job.company}</p></div><div class="dialog-job-body"><dl><div><dt>給与</dt><dd>${job.salary}</dd></div><div><dt>勤務時間</dt><dd>${job.hours}</dd></div><div><dt>休日</dt><dd>${job.holidays}</dd></div><div><dt>職種</dt><dd>${job.category}</dd></div></dl><p class="dialog-note">正式掲載時は、実際のスタッフ写真、仕事内容、一日の流れ、福利厚生、応募条件を掲載します。</p><button class="button button-primary dialog-wish-button" type="button" data-wish-job="${job.title}">この仕事について相談する ↗</button></div>`;
  $('#jobDialog').showModal();
});
$('#jobDialogContent')?.addEventListener('click',event=>{
  const button=event.target.closest('[data-wish-job]');
  if(!button)return;
  $('#jobDialog').close();
  const jobInput=document.querySelector('#wishForm [name="job"]');
  if(jobInput)jobInput.value=button.dataset.wishJob;
  $('#wish').scrollIntoView({behavior:'smooth'});
});
$('#closeDialog')?.addEventListener('click',()=>$('#jobDialog').close());
$('#jobDialog')?.addEventListener('click',event=>{if(event.target===$('#jobDialog'))$('#jobDialog').close()});

$('#wishForm')?.addEventListener('submit',event=>{
  event.preventDefault();
  const data=new FormData(event.currentTarget);
  const areas=data.getAll('area');
  if(!areas.length){alert('希望エリアを1つ以上選んでください');return}
  const lines=['【仕事探しの希望登録】',`お名前：${data.get('name')}`,`連絡先：${data.get('contact')}`,`希望職種：${data.get('job')}`,`希望エリア：${areas.join('・')}`,`雇用形態：${data.get('type')}`,`希望給与：${data.get('salary')||'未入力'}`,`開始時期：${data.get('start')}`,`勤務時間：${data.get('hours')||'未入力'}`,`休日：${data.get('holidays')||'未入力'}`,`譲れない条件・相談：${data.get('priority')||'未入力'}`];
  location.href=`mailto:weeds_skillup_0128@yahoo.co.jp?subject=${encodeURIComponent('みやこんじょ求人｜希望条件の登録')}&body=${encodeURIComponent(lines.join('\n'))}`;
});
renderJobs();
