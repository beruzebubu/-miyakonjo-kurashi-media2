const jobs=[
  {id:'grace-stylist',title:'美容師スタイリスト',company:'Art Hair GRACE',area:'都城市',type:'正社員',category:'美容・接客・サービス',salary:'月給25万円保証／歩合45％',hours:'9:00〜18:30',holidays:'年間休日120日',status:'募集中',tone:'beauty',contact:'mailto:weeds_skillup_0128@yahoo.co.jp?subject=Art Hair GRACE求人への応募相談'},
  {id:'toto-staff',title:'居酒屋スタッフ（ホール・調理補助）',company:'酒と食 人人',area:'都城市',type:'アルバイト・パート',category:'美容・接客・サービス',salary:'給与・勤務条件は確認中',hours:'店舗確認後に掲載',holidays:'シフト制',status:'募集情報確認中',tone:'service',contact:'mailto:weeds_skillup_0128@yahoo.co.jp?subject=酒と食 人人の求人相談'},
  {id:'share-salon-staff',title:'美容師・アイリスト（社員募集）',company:'SHARE SALON',area:'都城市',type:'正社員',category:'美容・接客・サービス',salary:'給与・勤務条件は確認中',hours:'店舗確認後に掲載',holidays:'確認中',status:'募集情報確認中',tone:'beauty',contact:'mailto:weeds_skillup_0128@yahoo.co.jp?subject=SHARE SALON社員求人への相談'},
  {id:'share-salon-booth',title:'シェアサロン利用者募集',company:'SHARE SALON',area:'都城市',type:'業務委託',category:'美容・接客・サービス',salary:'利用条件・歩合は確認中',hours:'働き方を相談可能',holidays:'自由設定',status:'利用者募集中',tone:'beauty',contact:'mailto:weeds_skillup_0128@yahoo.co.jp?subject=SHARE SALON利用相談'}
];
const state={keyword:'',area:'',type:'',category:''};
const $=s=>document.querySelector(s);const $$=s=>[...document.querySelectorAll(s)];
const menuButton=$('.menu-button');const nav=$('.desktop-nav');
function closeMenu(){nav?.classList.remove('open');menuButton?.setAttribute('aria-expanded','false')}
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';nav?.classList.toggle('open',!open);menuButton.setAttribute('aria-expanded',String(!open))});
$$('a[href^="#"]').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});

function normalizeCategoryCards(){
  const beauty=$('.category-card.beauty');
  const food=$('.category-card.food');
  const work=$('.category-card.work');
  const care=$('.category-card.service');
  const office=$('.category-card.outing');
  if(beauty){beauty.classList.remove('large');beauty.dataset.category='美容・接客・サービス';const en=beauty.querySelector('small');const title=beauty.querySelector('h3');const desc=beauty.querySelector('p');if(en)en.textContent='BEAUTY / SERVICE';if(title)title.textContent='美容・接客・サービス';if(desc)desc.textContent='美容・理容・飲食・販売・接客'}
  if(food)food.remove();
  if(work){work.dataset.category='建設・設備・運送';const num=work.querySelector('.category-number');if(num)num.textContent='02'}
  if(care){care.dataset.category='介護・医療・福祉';const num=care.querySelector('.category-number');if(num)num.textContent='03'}
  if(office){office.dataset.category='事務・営業・製造';const num=office.querySelector('.category-number');const title=office.querySelector('h3');if(num)num.textContent='04';if(title)title.textContent='事務・営業・製造'}
  const categoryFilter=$('#categoryFilter');
  if(categoryFilter)categoryFilter.innerHTML='<option value="">すべて</option><option>美容・接客・サービス</option><option>建設・設備・運送</option><option>介護・医療・福祉</option><option>事務・営業・製造</option>';
}
normalizeCategoryCards();

function filteredJobs(){const key=state.keyword.toLowerCase();return jobs.filter(j=>{const text=`${j.title} ${j.company} ${j.area} ${j.type} ${j.category}`.toLowerCase();return(!key||text.includes(key))&&(!state.area||j.area===state.area)&&(!state.type||j.type===state.type)&&(!state.category||j.category===state.category)})}
function renderJobs(){const list=filteredJobs();if($('#resultCount'))$('#resultCount').textContent=list.length;if($('#emptyJobs'))$('#emptyJobs').hidden=list.length>0;if($('#jobList'))$('#jobList').innerHTML=list.map(j=>`<article class="job-card"><div class="job-visual ${j.tone}"><small>${j.status}</small><strong>${j.area}</strong></div><div class="job-body"><p class="job-meta">${j.area}｜${j.type}</p><h3>${j.title}</h3><p class="job-company">${j.company}</p><strong class="job-salary">${j.salary}</strong><div class="job-conditions"><span>勤務時間　${j.hours}</span><span>休日　${j.holidays}</span></div><a class="job-link" href="${j.contact}">企業へ応募・問い合わせ →</a></div></article>`).join('')}
function apply(){if($('#keywordFilter'))state.keyword=$('#keywordFilter').value.trim();if($('#areaFilter'))state.area=$('#areaFilter').value;if($('#typeFilter'))state.type=$('#typeFilter').value;if($('#categoryFilter'))state.category=$('#categoryFilter').value;renderJobs()}
['#keywordFilter','#areaFilter','#typeFilter','#categoryFilter'].forEach(s=>$(s)?.addEventListener(s==='#keywordFilter'?'input':'change',apply));
$('#resetFilters')?.addEventListener('click',()=>{if($('#keywordFilter'))$('#keywordFilter').value='';if($('#areaFilter'))$('#areaFilter').value='';if($('#typeFilter'))$('#typeFilter').value='';if($('#categoryFilter'))$('#categoryFilter').value='';Object.assign(state,{keyword:'',area:'',type:'',category:''});renderJobs()});
$('#heroSearch')?.addEventListener('submit',e=>{e.preventDefault();if($('#keywordFilter'))$('#keywordFilter').value=$('#heroKeyword')?.value||'';if($('#areaFilter'))$('#areaFilter').value=$('#heroArea')?.value||'';apply();$('#jobs')?.scrollIntoView({behavior:'smooth'})});
$$('.category-card').forEach(card=>{card.addEventListener('click',()=>{const category=card.dataset.category||'';state.category=category;if($('#categoryFilter'))$('#categoryFilter').value=category;renderJobs();$('#jobs')?.scrollIntoView({behavior:'smooth',block:'start'})})});
renderJobs();

(()=>{
  const style=document.createElement('style');
  style.textContent=`
    .category-grid{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:12px!important}
    .category-card,.category-card.large{grid-column:auto!important;min-height:250px!important;height:250px!important;position:relative!important;overflow:hidden!important;border:0!important;border-radius:18px!important;background-size:cover!important;background-repeat:no-repeat!important;background-position:center!important;box-shadow:0 8px 24px rgba(26,38,31,.12)!important;isolation:isolate!important;cursor:pointer!important;touch-action:manipulation!important}
    .category-card:active{transform:scale(.985)}
    .category-card::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,18,13,.02) 30%,rgba(8,18,13,.72) 100%);pointer-events:none;z-index:1}
    .category-card>*{position:relative;z-index:2!important;pointer-events:none}
    .category-card.beauty{background-image:url('assets/category-beauty.svg')!important;background-position:center 42%!important}
    .category-card.work{background-image:url('assets/category-construction.svg')!important;background-position:center 35%!important}
    .category-card.service{background-image:url('assets/category-care.svg')!important;background-position:center 42%!important}
    .category-card.outing{background-image:url('assets/category-office.svg')!important;background-position:center 38%!important}
    .category-card h3{font-size:clamp(18px,4.8vw,24px)!important;line-height:1.35!important}.category-card p{display:none!important}
    .job-company{font-size:20px!important;line-height:1.4!important;font-weight:800!important;color:#173426!important;margin:10px 0 16px!important;letter-spacing:.02em!important}
    .job-body h3{font-size:26px!important;line-height:1.45!important;margin-bottom:4px!important}
    @media(max-width:440px){.category-grid{gap:10px!important}.category-card,.category-card.large{min-height:220px!important;height:220px!important}.category-card h3{font-size:19px!important}.job-company{font-size:19px!important}.job-body h3{font-size:23px!important}}
  `;
  document.head.appendChild(style);
})();
