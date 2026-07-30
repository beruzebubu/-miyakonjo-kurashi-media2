const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.desktop-nav');
menuButton?.addEventListener('click',()=>{
  const open=menuButton.getAttribute('aria-expanded')==='true';
  menuButton.setAttribute('aria-expanded',String(!open));
  nav?.classList.toggle('open',!open);
});
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>menuButton?.setAttribute('aria-expanded','false')));

document.querySelector('#wishForm')?.addEventListener('submit',event=>{
  event.preventDefault();
  const data=new FormData(event.currentTarget);
  const areas=data.getAll('area');
  if(!areas.length){
    alert('希望エリアを1つ以上選んでください');
    return;
  }
  const lines=[
    '【仕事探しの希望登録】',
    `お名前：${data.get('name')}`,
    `連絡先：${data.get('contact')}`,
    `希望職種：${data.get('job')}`,
    `希望エリア：${areas.join('・')}`,
    `雇用形態：${data.get('type')}`,
    `希望給与：${data.get('salary')||'未入力'}`,
    `開始時期：${data.get('start')}`,
    `勤務時間：${data.get('hours')||'未入力'}`,
    `休日：${data.get('holidays')||'未入力'}`,
    `譲れない条件・相談：${data.get('priority')||'未入力'}`
  ];
  location.href=`mailto:weeds_skillup_0128@yahoo.co.jp?subject=${encodeURIComponent('みやこんじょ求人｜希望条件の登録')}&body=${encodeURIComponent(lines.join('\n'))}`;
});
