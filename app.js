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
function renderJobs(){const list=filteredJobs();if($('#resultCount'))$('#resultCount').textContent=list.length;if($('#resultStatus'))$('#resultStatus').lastChild.textContent=`件を表示しています。`;if($('#emptyJobs'))$('#emptyJobs').hidden=list.length>0;if($('#jobList'))$('#jobList').innerHTML=list.map(j=>`<article class="job-card"><div class="job-visual ${j.tone}"><small>${j.status}</small><strong>${j.area}</strong></div><div class="job-body"><p class="job-meta">${j.area}｜${j.type}</p><h3>${j.title}</h3><p class="job-company">${j.company}</p><strong class="job-salary">${j.salary}</strong><div class="job-conditions"><span>勤務時間　${j.hours}</span><span>休日　${j.holidays}</span></div>${j.contact?`<a class="job-link" href="${j.contact}">企業へ応募・問い合わせ →</a>`:`<span class="job-link disabled">詳細は近日公開</span>`}</div></article>`).join('')}
function apply(){if($('#keywordFilter'))state.keyword=$('#keywordFilter').value.trim();if($('#areaFilter'))state.area=$('#areaFilter').value;if($('#typeFilter'))state.type=$('#typeFilter').value;renderJobs()}
['#keywordFilter','#areaFilter','#typeFilter'].forEach(s=>$(s)?.addEventListener(s==='#keywordFilter'?'input':'change',apply));
$('#resetFilters')?.addEventListener('click',()=>{if($('#keywordFilter'))$('#keywordFilter').value='';if($('#areaFilter'))$('#areaFilter').value='';if($('#typeFilter'))$('#typeFilter').value='';Object.assign(state,{keyword:'',area:'',type:''});renderJobs()});
$('#heroSearch')?.addEventListener('submit',e=>{e.preventDefault();if($('#keywordFilter'))$('#keywordFilter').value=$('#heroKeyword')?.value||'';if($('#areaFilter'))$('#areaFilter').value=$('#heroArea')?.value||'';apply();$('#jobs')?.scrollIntoView({behavior:'smooth'})});
renderJobs();

// 職種カードを、実際に働いている人物が見える写真へ変更
(()=>{
  const style=document.createElement('style');
  style.textContent=`
    .category-card{
      border:0!important;
      border-radius:18px!important;
      background-size:cover!important;
      background-position:center!important;
      background-repeat:no-repeat!important;
      box-shadow:0 8px 24px rgba(26,38,31,.12)!important;
    }
    .category-card::after{
      content:"";
      position:absolute;
      inset:0;
      background:linear-gradient(180deg,rgba(10,20,15,.03) 36%,rgba(8,18,13,.78) 100%);
      pointer-events:none;
      z-index:1;
    }
    .category-card>*{position:relative;z-index:2!important}
    .category-card.beauty{
      background-image:url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=88')!important;
      background-position:center 38%!important;
    }
    .category-card.work{
      background-image:url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=88')!important;
      background-position:center!important;
    }
    .category-card.food{
      background-image:url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=88')!important;
      background-position:center!important;
    }
    .category-card.service{
      background-image:url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=88')!important;
      background-position:center!important;
    }
    .category-card.outing{
      background-image:url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=88')!important;
      background-position:center!important;
    }
    @media(max-width:900px){
      .category-grid{gap:14px!important}
      .category-card.large{min-height:390px!important}
      .category-card:not(.large){min-height:260px!important}
      .category-card h3{font-size:clamp(19px,5vw,25px)!important;line-height:1.45!important}
      .category-card p{display:none!important}
    }
    @media(max-width:440px){
      .category-card.large{min-height:380px!important}
      .category-card:not(.large){min-height:245px!important}
    }
  `;
  document.head.appendChild(style);
})();
