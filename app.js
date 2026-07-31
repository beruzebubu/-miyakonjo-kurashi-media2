const jobs=[
  {id:'grace-stylist',title:'美容師スタイリスト',company:'Art Hair GRACE',area:'都城市',type:'正社員',salary:'月給25万円保証／歩合45％',hours:'9:00〜18:30',holidays:'年間休日120日',status:'募集中',tone:'beauty',contact:'mailto:weeds_skillup_0128@yahoo.co.jp?subject=Art Hair GRACE求人への応募相談'},
  {id:'coming-service',title:'飲食・接客スタッフ',company:'掲載企業を募集中',area:'都城市',type:'アルバイト・パート',salary:'近日公開',hours:'近日公開',holidays:'近日公開',status:'掲載準備中',tone:'pending',contact:''},
  {id:'coming-office',title:'事務・製造スタッフ',company:'掲載企業を募集中',area:'三股町',type:'正社員',salary:'近日公開',hours:'近日公開',holidays:'近日公開',status:'掲載準備中',tone:'pending',contact:''}
];
const state={keyword:'',area:'',type:''};
const $=s=>document.querySelector(s);const $$=s=>[...document.querySelectorAll(s)];
const menuButton=$('.menu-button');const nav=$('.desktop-nav');
function closeMenu(){nav?.classList.remove('open');menuButton?.setAttribute('aria-expanded','false')}
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';nav?.classList.toggle('open',!open);menuButton.setAttribute('aria-expanded',String(!open))});
$$('a[href^="#"]').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
function filteredJobs(){const key=state.keyword.toLowerCase();return jobs.filter(j=>{const text=`${j.title} ${j.company} ${j.area} ${j.type}`.toLowerCase();return(!key||text.includes(key))&&(!state.area||j.area===state.area)&&(!state.type||j.type===state.type)})}
function renderJobs(){const list=filteredJobs();$('#resultCount').textContent=list.length;$('#resultStatus').lastChild.textContent=`件を表示しています。`;$('#emptyJobs').hidden=list.length>0;$('#jobList').innerHTML=list.map(j=>`<article class="job-card"><div class="job-visual ${j.tone}"><small>${j.status}</small><strong>${j.area}</strong></div><div class="job-body"><p class="job-meta">${j.area}｜${j.type}</p><h3>${j.title}</h3><p class="job-company">${j.company}</p><strong class="job-salary">${j.salary}</strong><div class="job-conditions"><span>勤務時間　${j.hours}</span><span>休日　${j.holidays}</span></div>${j.contact?`<a class="job-link" href="${j.contact}">企業へ応募・問い合わせ →</a>`:`<span class="job-link disabled">詳細は近日公開</span>`}</div></article>`).join('')}
function apply(){state.keyword=$('#keywordFilter').value.trim();state.area=$('#areaFilter').value;state.type=$('#typeFilter').value;renderJobs()}
['#keywordFilter','#areaFilter','#typeFilter'].forEach(s=>$(s)?.addEventListener(s==='#keywordFilter'?'input':'change',apply));
$('#resetFilters')?.addEventListener('click',()=>{$('#keywordFilter').value='';$('#areaFilter').value='';$('#typeFilter').value='';Object.assign(state,{keyword:'',area:'',type:''});renderJobs()});
$('#heroSearch')?.addEventListener('submit',e=>{e.preventDefault();$('#keywordFilter').value=$('#heroKeyword').value;$('#areaFilter').value=$('#heroArea').value;apply();$('#jobs').scrollIntoView({behavior:'smooth'})});
renderJobs();
