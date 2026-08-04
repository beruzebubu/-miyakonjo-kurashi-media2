const jobs=[
  {id:'grace-stylist',title:'美容師スタイリスト',company:'Art Hair GRACE',area:'都城市',address:'宮崎県都城市栄町13-4',type:'正社員',category:'美容・理容',salary:'月給25万円保証／歩合45％',hours:'9:00〜18:30',holidays:'年間休日120日',status:'募集中',tone:'beauty',description:'都城駅近くの地域密着サロン。スタッフや店内の雰囲気、実際のスタイルはホットペッパービューティーで確認できます。',links:[{label:'ホットペッパーを見る',url:'https://beauty.hotpepper.jp/slnH000200941/'},{label:'場所を見る',url:'https://www.google.com/maps/search/?api=1&query=Art%20Hair%20Grace%20%E9%83%BD%E5%9F%8E%E5%B8%82%E6%A0%84%E7%94%BA13-4'}],contact:'mailto:weeds_skillup_0128@yahoo.co.jp?subject=Art Hair GRACE求人への応募相談'},
  {id:'toto-staff',title:'居酒屋スタッフ（ホール・調理補助）',company:'酒と食 人人',area:'都城市',address:'宮崎県都城市中町2-4 町田ビル1F',type:'アルバイト・パート',category:'飲食・販売・接客',salary:'給与・勤務条件は確認中',hours:'店舗確認後に掲載',holidays:'シフト制',status:'募集情報確認中',tone:'service',description:'西都城駅から徒歩圏内の居酒屋。料理や店内の雰囲気は公式Instagramから確認できます。',links:[{label:'Instagramを見る',url:'https://www.instagram.com/saketosyoku_toto?igsh=MW0zcW1zNHNqY29qYw=='},{label:'店舗情報を見る',url:'https://tabelog.com/miyazaki/A4503/A450301/45013151/'},{label:'場所を見る',url:'https://www.google.com/maps/search/?api=1&query=%E9%85%92%E3%81%A8%E9%A3%9F%20%E4%BA%BA%E4%BA%BA%20%E9%83%BD%E5%9F%8E%E5%B8%82%E4%B8%AD%E7%94%BA2-4'}],contact:'mailto:weeds_skillup_0128@yahoo.co.jp?subject=酒と食 人人の求人相談'},
  {id:'share-salon-staff',title:'美容師・アイリスト（社員募集）',company:'SHARE SALON',area:'都城市',address:'宮崎県都城市鷹尾5-1-2',type:'正社員',category:'美容・理容',salary:'給与・勤務条件は確認中',hours:'9:00〜19:00',holidays:'毎週月曜日',status:'募集情報確認中',tone:'beauty',description:'美容師・アイリストとして働きたい方向け。店舗のメニュー、営業時間、アクセスは公式サイトで確認できます。',links:[{label:'公式サイトを見る',url:'https://sharesalon-hair.com/'},{label:'場所を見る',url:'https://www.google.com/maps/search/?api=1&query=SHARE%20SALON%20%E9%83%BD%E5%9F%8E%E5%B8%82%E9%B7%B9%E5%B0%BE5-1-2'}],contact:'mailto:weeds_skillup_0128@yahoo.co.jp?subject=SHARE SALON社員求人への相談'},
  {id:'share-salon-booth',title:'シェアサロン利用者募集',company:'SHARE SALON',area:'都城市',address:'宮崎県都城市鷹尾5-1-2',type:'業務委託',category:'美容・理容',salary:'利用条件・歩合は確認中',hours:'働き方を相談可能',holidays:'自由設定',status:'利用者募集中',tone:'beauty',description:'自分の顧客を担当しながら、働く日数や時間を相談できるシェアサロン型の募集です。',links:[{label:'公式サイトを見る',url:'https://sharesalon-hair.com/'},{label:'場所を見る',url:'https://www.google.com/maps/search/?api=1&query=SHARE%20SALON%20%E9%83%BD%E5%9F%8E%E5%B8%82%E9%B7%B9%E5%B0%BE5-1-2'}],contact:'mailto:weeds_skillup_0128@yahoo.co.jp?subject=SHARE SALON利用相談'}
];

const categoryInfo={
  '美容・理容':{eyebrow:'BEAUTY',title:'美容・理容の仕事',lead:'美容師・理容師・アイリストなど、技術と接客の両方を活かせる仕事です。都城周辺の店舗情報や働き方まで確認できます。',points:['現在掲載中の求人','店舗・スタッフ情報','未経験・ブランク相談','ホットペッパー・公式サイト','希望条件登録']},
  '建設・設備・運送':{eyebrow:'CONSTRUCTION',title:'建設・設備・運送の仕事',lead:'現場作業、設備工事、配送、ドライバーなど、地域の暮らしを支える仕事です。現在掲載準備中の企業も含めて順次追加します。',points:['掲載準備中の企業','仕事内容の紹介','未経験からの働き方','給与・勤務時間の目安','希望条件登録']},
  '飲食・販売・接客':{eyebrow:'SERVICE',title:'飲食・販売・接客の仕事',lead:'飲食店、販売、ホテル、接客など、人と接することが好きな方に向く仕事です。店舗の雰囲気やSNSも確認できます。',points:['現在掲載中の求人','店舗・料理・接客の雰囲気','Instagram・店舗情報','シフト・勤務条件','希望条件登録']},
  '介護・医療・福祉':{eyebrow:'CARE',title:'介護・医療・福祉の仕事',lead:'介護、看護、保育、支援など、人の暮らしを支える仕事です。資格の有無や未経験からの働き方も分かりやすく紹介します。',points:['掲載準備中の企業','資格・未経験条件','仕事内容と一日の流れ','勤務時間・休日','希望条件登録']},
  '事務・営業・製造':{eyebrow:'OFFICE',title:'事務・営業・製造の仕事',lead:'一般事務、受付、営業、製造、検品など、幅広い働き方があります。職場環境や勤務条件まで見て選べるようにします。',points:['掲載準備中の企業','仕事内容の紹介','未経験可能か','給与・休日の目安','希望条件登録']}
};

const state={keyword:'',area:'',type:'',category:''};
const $=selector=>document.querySelector(selector);
const $$=selector=>[...document.querySelectorAll(selector)];
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const menuButton=$('.menu-button');
const nav=$('.desktop-nav');

function closeMenu(){
  nav?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded','false');
}

menuButton?.addEventListener('click',()=>{
  const open=menuButton.getAttribute('aria-expanded')==='true';
  nav?.classList.toggle('open',!open);
  menuButton.setAttribute('aria-expanded',String(!open));
});
$$('a[href^="#"]').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});

function normalizeCategoryCards(){
  const beauty=$('.category-card.beauty');
  const work=$('.category-card.work');
  const food=$('.category-card.food');
  const care=$('.category-card.service');
  const office=$('.category-card.outing');

  if(beauty){
    beauty.classList.remove('large');
    beauty.dataset.category='美容・理容';
    const en=beauty.querySelector('small');
    const title=beauty.querySelector('h3');
    if(en)en.textContent='BEAUTY';
    if(title)title.textContent='美容・理容';
  }
  if(work){
    work.dataset.category='建設・設備・運送';
    const num=work.querySelector('.category-number');
    if(num)num.textContent='02';
  }
  if(food){
    food.dataset.category='飲食・販売・接客';
    const num=food.querySelector('.category-number');
    const en=food.querySelector('small');
    const title=food.querySelector('h3');
    if(num)num.textContent='03';
    if(en)en.textContent='SERVICE';
    if(title)title.textContent='飲食・販売・接客';
  }
  if(care){
    care.dataset.category='介護・医療・福祉';
    const num=care.querySelector('.category-number');
    if(num)num.textContent='04';
  }
  if(office){
    office.dataset.category='事務・営業・製造';
    const num=office.querySelector('.category-number');
    const title=office.querySelector('h3');
    if(num)num.textContent='05';
    if(title)title.textContent='事務・営業・製造';
  }

  $$('.category-card').forEach(card=>{
    card.setAttribute('aria-pressed','false');
    card.setAttribute('aria-controls','categoryIntro');
  });

  const categoryFilter=$('#categoryFilter');
  if(categoryFilter){
    categoryFilter.innerHTML='<option value="">すべて</option><option>美容・理容</option><option>建設・設備・運送</option><option>飲食・販売・接客</option><option>介護・医療・福祉</option><option>事務・営業・製造</option>';
  }
}
normalizeCategoryCards();

function ensureCategoryExperience(){
  const jobsSection=$('#jobs');
  const filters=$('.job-filters');
  if(!jobsSection||!filters)return;

  if(!$('#categorySelection')){
    const selection=document.createElement('div');
    selection.id='categorySelection';
    selection.className='category-selection';
    selection.hidden=true;
    selection.setAttribute('aria-live','polite');
    selection.innerHTML='<div><span>選択中</span><strong id="selectedCategoryName"></strong></div><button id="backToCategories" type="button">職種一覧に戻る ↑</button>';
    jobsSection.insertBefore(selection,filters);
    $('#backToCategories')?.addEventListener('click',()=>clearCategory({scrollToCards:true}));
  }

  if(!$('#categoryIntro')){
    const panel=document.createElement('section');
    panel.id='categoryIntro';
    panel.className='category-intro';
    panel.hidden=true;
    panel.setAttribute('tabindex','-1');
    jobsSection.insertBefore(panel,filters);
  }
}
ensureCategoryExperience();

function scrollToElement(element,offset=12){
  if(!element)return;
  const top=element.getBoundingClientRect().top+window.scrollY-offset;
  window.scrollTo({top,behavior:reduceMotion?'auto':'smooth'});
}

function updateSelectedCards(){
  $$('.category-card').forEach(card=>{
    const selected=Boolean(state.category)&&card.dataset.category===state.category;
    card.classList.toggle('is-selected',selected);
    card.setAttribute('aria-pressed',String(selected));
  });
}

function renderSelectionBar(){
  const bar=$('#categorySelection');
  const name=$('#selectedCategoryName');
  if(!bar||!name)return;
  if(!state.category){
    bar.hidden=true;
    name.textContent='';
    return;
  }
  name.textContent=state.category;
  bar.hidden=false;
}

function renderCategoryIntro(){
  const panel=$('#categoryIntro');
  if(!panel)return;

  panel.classList.remove('is-visible');
  if(!state.category||!categoryInfo[state.category]){
    panel.hidden=true;
    panel.innerHTML='';
    return;
  }

  const info=categoryInfo[state.category];
  const count=jobs.filter(job=>job.category===state.category).length;
  panel.hidden=false;
  panel.innerHTML=`<div class="category-intro-copy"><p class="category-intro-eyebrow">${info.eyebrow}</p><h3>${info.title}</h3><p>${info.lead}</p></div><div class="category-intro-side"><strong>${count>0?`${count}件掲載中`:'現在掲載準備中'}</strong><ul>${info.points.map(point=>`<li>${point}</li>`).join('')}</ul><a href="#wish">希望条件を登録する →</a></div>`;
  requestAnimationFrame(()=>panel.classList.add('is-visible'));
}

function filteredJobs(){
  const key=state.keyword.toLowerCase();
  return jobs.filter(job=>{
    const text=`${job.title} ${job.company} ${job.area} ${job.address} ${job.type} ${job.category}`.toLowerCase();
    return(!key||text.includes(key))&&(!state.area||job.area===state.area)&&(!state.type||job.type===state.type)&&(!state.category||job.category===state.category);
  });
}

function renderLinks(links=[]){
  return links.map(link=>`<a class="shop-link" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label} ↗</a>`).join('');
}

function animateResults(){
  const jobsSection=$('#jobs');
  if(!jobsSection||reduceMotion)return;
  jobsSection.classList.remove('is-switching');
  void jobsSection.offsetWidth;
  jobsSection.classList.add('is-switching');
  window.setTimeout(()=>jobsSection.classList.remove('is-switching'),460);
}

function renderJobs({animate=false}={}){
  const list=filteredJobs();
  updateSelectedCards();
  renderSelectionBar();
  renderCategoryIntro();

  if($('#resultCount'))$('#resultCount').textContent=list.length;
  if($('#jobList')){
    $('#jobList').innerHTML=list.map(job=>`<article class="job-card store-card"><div class="job-visual ${job.tone}"><small>${job.status}</small><strong>${job.company}</strong></div><div class="job-body"><p class="job-meta">${job.area}｜${job.type}</p><h3>${job.title}</h3><p class="job-company">${job.company}</p><p class="job-address">📍 ${job.address}</p><p class="job-description">${job.description}</p><strong class="job-salary">${job.salary}</strong><div class="job-conditions"><span>勤務時間　${job.hours}</span><span>休日　${job.holidays}</span></div><div class="shop-links">${renderLinks(job.links)}</div><a class="job-link apply-link" href="${job.contact}">応募・問い合わせ →</a></div></article>`).join('');
  }

  const empty=$('#emptyJobs');
  if(empty){
    empty.hidden=list.length>0;
    if(!list.length){
      const title=state.category?`${state.category}の求人は現在掲載準備中です`:'条件に合う求人がまだありません';
      const related=jobs.filter(job=>!state.category||job.category!==state.category).slice(0,2);
      empty.innerHTML=`<h3>${title}</h3><p>${state.category?'希望条件を登録すると、募集開始時や近い条件の求人が出た時にご案内できます。':'条件を変えるか、希望条件を登録してください。'}</p><div class="empty-actions"><a href="#wish">希望条件を登録する</a><button type="button" id="showRelatedJobs">似た求人を見る</button><a href="mailto:weeds_skillup_0128@yahoo.co.jp?subject=求人掲載の相談">企業の方はこちら</a></div>${related.length?`<div class="related-jobs"><span>現在掲載中の近い求人</span>${related.map(job=>`<button type="button" data-related-category="${job.category}">${job.company}｜${job.title}</button>`).join('')}</div>`:''}`;

      $('#showRelatedJobs')?.addEventListener('click',()=>clearCategory({scrollToCards:false}));
      $$('[data-related-category]').forEach(button=>button.addEventListener('click',()=>selectCategory(button.dataset.relatedCategory,{scroll:false,focusPanel:true})));
    }
  }

  if(animate)animateResults();
}

function selectCategory(category,{scroll=true,focusPanel=false}={}){
  if(!categoryInfo[category])return;
  state.category=category;
  if($('#categoryFilter'))$('#categoryFilter').value=category;
  renderJobs({animate:true});

  if(scroll){
    window.setTimeout(()=>scrollToElement($('#categorySelection')||$('#jobs'),10),reduceMotion?0:70);
  }
  if(focusPanel){
    window.setTimeout(()=>$('#categoryIntro')?.focus({preventScroll:true}),reduceMotion?0:120);
  }
}

function clearCategory({scrollToCards=false}={}){
  state.category='';
  if($('#categoryFilter'))$('#categoryFilter').value='';
  renderJobs({animate:true});
  if(scrollToCards){
    window.setTimeout(()=>scrollToElement($('#category'),8),reduceMotion?0:60);
  }
}

function apply(){
  if($('#keywordFilter'))state.keyword=$('#keywordFilter').value.trim();
  if($('#areaFilter'))state.area=$('#areaFilter').value;
  if($('#typeFilter'))state.type=$('#typeFilter').value;
  if($('#categoryFilter'))state.category=$('#categoryFilter').value;
  renderJobs({animate:true});
}

['#keywordFilter','#areaFilter','#typeFilter','#categoryFilter'].forEach(selector=>{
  $(selector)?.addEventListener(selector==='#keywordFilter'?'input':'change',apply);
});

$('#resetFilters')?.addEventListener('click',()=>{
  if($('#keywordFilter'))$('#keywordFilter').value='';
  if($('#areaFilter'))$('#areaFilter').value='';
  if($('#typeFilter'))$('#typeFilter').value='';
  if($('#categoryFilter'))$('#categoryFilter').value='';
  Object.assign(state,{keyword:'',area:'',type:'',category:''});
  renderJobs({animate:true});
});

$('#heroSearch')?.addEventListener('submit',event=>{
  event.preventDefault();
  if($('#keywordFilter'))$('#keywordFilter').value=$('#heroKeyword')?.value||'';
  if($('#areaFilter'))$('#areaFilter').value=$('#heroArea')?.value||'';
  apply();
  window.setTimeout(()=>scrollToElement($('#jobs'),10),reduceMotion?0:50);
});

$$('.category-card').forEach(card=>{
  card.addEventListener('click',()=>{
    card.classList.add('is-activating');
    window.setTimeout(()=>card.classList.remove('is-activating'),180);
    selectCategory(card.dataset.category||'',{scroll:true});
  });
});

renderJobs();

(()=>{
  const style=document.createElement('style');
  style.textContent=`
.category-section{padding-top:48px!important;padding-bottom:28px!important}.section-title{margin-bottom:14px!important}.category-grid{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;grid-template-rows:none!important;grid-auto-rows:225px!important;gap:7px!important;align-content:start!important}.category-card,.category-card.large{grid-column:auto!important;grid-row:auto!important;min-height:225px!important;height:225px!important;margin:0!important;position:relative!important;overflow:hidden!important;border:0!important;border-radius:15px!important;background-size:cover!important;background-repeat:no-repeat!important;background-position:center!important;box-shadow:0 6px 18px rgba(26,38,31,.1)!important;isolation:isolate!important;cursor:pointer!important;transition:transform .24s ease,box-shadow .24s ease,filter .24s ease!important}.category-card.outing{grid-column:1/-1!important}.category-card::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(8,18,13,.02) 30%,rgba(8,18,13,.72) 100%);pointer-events:none;z-index:1;transition:background .24s ease}.category-card>*{position:relative;z-index:2!important;pointer-events:none}.category-card.beauty{background-image:url('assets/category-beauty.svg')!important;background-position:center 42%!important}.category-card.work{background-image:url('assets/category-construction.svg')!important;background-position:center 35%!important}.category-card.food{background-image:url('assets/category-service.svg')!important;background-position:center 40%!important}.category-card.service{background-image:url('assets/category-care.svg')!important;background-position:center 42%!important}.category-card.outing{background-image:url('assets/category-office.svg')!important;background-position:center 38%!important}.category-card h3{font-size:clamp(18px,4.8vw,24px)!important;line-height:1.35!important}.category-card p{display:none!important}.category-card.is-selected{transform:translateY(-3px)!important;box-shadow:0 0 0 3px #f5f2e9,0 0 0 6px #244b3b,0 15px 34px rgba(21,52,38,.24)!important;filter:saturate(1.04)}.category-card.is-selected::after{background:linear-gradient(180deg,rgba(8,18,13,.01) 24%,rgba(8,18,13,.61) 100%)}.category-card.is-selected>b{background:#fff;color:#244b3b;border-color:#fff}.category-card.is-activating{transform:scale(.975)!important}.category-selection{position:sticky;top:10px;z-index:12;display:flex;align-items:center;justify-content:space-between;gap:16px;margin:0 0 12px;padding:12px 15px;background:rgba(247,250,248,.94);border:1px solid #cad8cf;border-radius:12px;box-shadow:0 8px 24px rgba(24,55,42,.11);backdrop-filter:blur(13px);-webkit-backdrop-filter:blur(13px);scroll-margin-top:10px}.category-selection[hidden]{display:none!important}.category-selection>div{display:flex;align-items:center;gap:9px;min-width:0}.category-selection span{font-size:11px;color:#6c7b73;white-space:nowrap}.category-selection strong{font-size:15px;color:#173426;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.category-selection button{border:0;background:#173426;color:#fff;border-radius:999px;padding:9px 12px;font-size:11px;font-weight:700;white-space:nowrap}.category-intro{display:grid;grid-template-columns:1.35fr .65fr;gap:36px;margin:0 0 24px;padding:34px;background:#173426;color:#fff;border-radius:18px;opacity:0;transform:translateY(14px);transition:opacity .36s ease,transform .36s cubic-bezier(.2,.8,.2,1);scroll-margin-top:72px}.category-intro.is-visible{opacity:1;transform:none}.category-intro[hidden]{display:none!important}.category-intro-eyebrow{margin:0 0 10px;font-size:10px;letter-spacing:.2em;color:#bcd0c3}.category-intro h3{margin:0 0 14px;font-family:'Noto Serif JP',serif;font-size:36px;line-height:1.35}.category-intro-copy>p:last-child{margin:0;color:rgba(255,255,255,.75);line-height:1.9}.category-intro-side{border-left:1px solid rgba(255,255,255,.18);padding-left:28px}.category-intro-side strong{display:block;margin-bottom:13px;font-size:18px}.category-intro-side ul{margin:0 0 18px;padding-left:18px;color:rgba(255,255,255,.75);font-size:13px}.category-intro-side a{display:inline-flex;padding-bottom:4px;border-bottom:1px solid rgba(255,255,255,.7);font-weight:700}#jobs.is-switching .category-intro,#jobs.is-switching .job-grid,#jobs.is-switching .empty-jobs{animation:resultEnter .42s cubic-bezier(.2,.8,.2,1) both}@keyframes resultEnter{from{opacity:.3;transform:translateY(12px)}to{opacity:1;transform:none}}.empty-jobs{padding:44px 28px!important}.empty-actions{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:22px 0}.empty-actions a,.empty-actions button{border:1px solid #b7c6bd;background:#fff;color:#214f3a;padding:11px 14px;border-radius:999px;font-weight:700;font:inherit}.related-jobs{display:grid;gap:8px;max-width:620px;margin:25px auto 0}.related-jobs>span{font-size:12px;color:#6e7a73}.related-jobs button{border:0;background:#f0f5f1;padding:13px;text-align:left;color:#244b3b;font-weight:700}.store-card{overflow:hidden}.job-visual{min-height:190px;display:flex!important;flex-direction:column;justify-content:flex-end;align-items:flex-start;padding:22px!important}.job-visual strong{font-size:25px!important;line-height:1.25!important}.job-company{font-size:23px!important;line-height:1.35!important;font-weight:800!important;color:#173426!important;margin:8px 0 10px!important}.job-address{font-size:14px!important;color:#5d6c64!important;margin:0 0 13px!important}.job-description{font-size:14px!important;line-height:1.8!important;color:#4f5c55!important;margin:0 0 16px!important}.shop-links{display:flex;flex-wrap:wrap;gap:8px;margin:18px 0 14px}.shop-link{display:inline-flex;align-items:center;justify-content:center;padding:10px 12px;border:1px solid #b8c8bf;border-radius:999px;color:#214f3a!important;background:#f7fbf8;font-size:12px;font-weight:700;text-decoration:none!important}.apply-link{display:flex!important;justify-content:space-between;align-items:center;margin-top:8px!important;padding-top:16px!important;border-top:1px solid #dce4df}@media(max-width:700px){.category-intro{grid-template-columns:1fr;gap:20px;padding:24px 20px}.category-intro h3{font-size:28px}.category-intro-side{border-left:0;border-top:1px solid rgba(255,255,255,.18);padding:18px 0 0}.category-section{padding:32px 8px 22px!important}.category-grid{grid-auto-rows:200px!important;gap:6px!important}.category-card,.category-card.large{min-height:200px!important;height:200px!important;border-radius:13px!important;padding:13px!important}.category-card.outing{grid-column:1/-1!important}.category-card h3{font-size:17px!important}.category-card.is-selected{box-shadow:0 0 0 2px #f5f2e9,0 0 0 4px #244b3b,0 12px 25px rgba(21,52,38,.2)!important}.category-selection{top:8px;margin-bottom:10px;padding:10px 11px}.category-selection button{padding:8px 10px}.empty-actions{display:grid}.empty-actions a,.empty-actions button{width:100%}.job-company{font-size:21px!important}.job-visual strong{font-size:23px!important}.shop-link{width:100%;border-radius:10px}}@media(prefers-reduced-motion:reduce){.category-card,.category-intro{transition:none!important}#jobs.is-switching .category-intro,#jobs.is-switching .job-grid,#jobs.is-switching .empty-jobs{animation:none!important}}
`;
  document.head.appendChild(style);
})();
