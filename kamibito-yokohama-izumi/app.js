const $=selector=>document.querySelector(selector);
const $$=selector=>[...document.querySelectorAll(selector)];

const menu=$('.desktop-nav');
const menuToggle=$('.menu-toggle');
menuToggle?.addEventListener('click',()=>{
  const open=menuToggle.getAttribute('aria-expanded')==='true';
  menuToggle.setAttribute('aria-expanded',String(!open));
  menu?.classList.toggle('open',!open);
});
$$('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{
  menu?.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded','false');
}));

const dialog=$('#contactDialog');
const form=$('#contactForm');
const areaRadios=$$('input[name="area"]');
const otherAreaWrap=$('.other-area');
const otherAreaInput=$('#otherArea');
const preferredDate=$('#preferredDate');
let contactHistoryActive=false;
let closingFromBrowser=false;
let closeDestination='previous';
let openingScrollY=0;
const titles={
  facility:['施設訪問を直接相談','人数・日程・施術環境を確認して、担当者からご連絡します。'],
  personal:['自宅訪問を直接相談','ご本人の状態や希望メニューを確認して、担当者からご連絡します。'],
  recruit:['求人へ直接応募・質問','応募前の質問だけでも大丈夫です。希望する働き方をお知らせください。'],
  general:['横浜泉店へ直接相談','内容を確認後、担当者から直接ご連絡します。']
};

function toLocalDateValue(date){
  const year=date.getFullYear();
  const month=String(date.getMonth()+1).padStart(2,'0');
  const day=String(date.getDate()).padStart(2,'0');
  return `${year}-${month}-${day}`;
}

function setBookingDateRange(){
  if(!preferredDate)return;
  const minDate=new Date();
  minDate.setHours(12,0,0,0);
  minDate.setDate(minDate.getDate()+5);
  const maxDate=new Date(minDate);
  maxDate.setDate(maxDate.getDate()+90);
  preferredDate.min=toLocalDateValue(minDate);
  preferredDate.max=toLocalDateValue(maxDate);
}
setBookingDateRange();

function setContactType(type='general'){
  const [title,lead]=titles[type]||titles.general;
  $('#contactType').value=type;
  $('#dialogTitle').textContent=title;
  $('#dialogLead').textContent=lead;
  $$('.facility-only').forEach(el=>el.hidden=type!=='facility');
  $$('.personal-only').forEach(el=>el.hidden=type!=='personal');
  $$('.service-only').forEach(el=>el.hidden=!['facility','personal','general'].includes(type));
  $$('.recruit-only').forEach(el=>el.hidden=type!=='recruit');
  const selectedArea=$('input[name="area"]:checked')?.value||'';
  const showOther=type!=='recruit'&&selectedArea==='その他';
  otherAreaWrap.hidden=!showOther;
  otherAreaInput.required=showOther;
}

areaRadios.forEach(radio=>radio.addEventListener('change',()=>{
  const isOther=radio.checked&&radio.value==='その他';
  otherAreaWrap.hidden=!isOther;
  otherAreaInput.required=isOther;
  if(!isOther)otherAreaInput.value='';
  if(isOther)setTimeout(()=>otherAreaInput.focus(),80);
}));

$$('[data-open-contact]').forEach(button=>button.addEventListener('click',()=>{
  openingScrollY=window.scrollY;
  closeDestination='previous';
  setContactType(button.dataset.openContact);
  if(typeof dialog.showModal==='function')dialog.showModal();
  if(!contactHistoryActive){
    history.pushState({contactDialog:true},'',location.href);
    contactHistoryActive=true;
  }
  document.body.classList.add('no-scroll');
}));

dialog?.addEventListener('close',()=>{
  document.activeElement?.blur();
  document.body.classList.remove('no-scroll');
  if(contactHistoryActive&&!closingFromBrowser)history.back();
  contactHistoryActive=false;
  closingFromBrowser=false;
  const targetY=closeDestination==='top'?0:openingScrollY;
  requestAnimationFrame(()=>window.scrollTo({top:targetY,left:0,behavior:'instant'}));
  setTimeout(()=>window.scrollTo({top:targetY,left:0,behavior:'instant'}),180);
});
dialog?.addEventListener('click',event=>{
  if(event.target===dialog)dialog.close();
});

window.addEventListener('popstate',()=>{
  if(dialog?.open&&contactHistoryActive){
    closeDestination='previous';
    closingFromBrowser=true;
    contactHistoryActive=false;
    dialog.close();
  }
});

$('[data-dialog-back]')?.addEventListener('click',()=>{
  closeDestination='previous';
  dialog.close();
});

$('[data-dialog-home]')?.addEventListener('click',()=>{
  closeDestination='top';
  dialog.close();
});

form?.addEventListener('submit',event=>{
  event.preventDefault();
  if(!form.reportValidity())return;
  const data=new FormData(form);
  const type=data.get('contactType');
  const labels={facility:'施設・病院からの訪問相談',personal:'個人・ご家族からの自宅訪問相談',recruit:'美容師求人への応募・質問',general:'一般相談'};
  const values={
    '相談種別':labels[type]||labels.general,
    '施設・法人名':data.get('organization'),
    'お名前':data.get('name'),
    '電話番号':data.get('phone'),
    'メール':data.get('email'),
    '希望エリア':data.get('area')==='その他'?data.get('otherArea'):data.get('area'),
    '予定人数':data.get('people'),
    '希望メニュー':data.getAll('menu').join('＋'),
    '訪問希望日':data.get('preferredDate'),
    '希望時間':data.get('preferredTime'),
    '希望する働き方':data.get('workType'),
    '美容師経験':data.get('experience'),
    '相談内容':data.get('message')
  };
  const body=Object.entries(values).filter(([,value])=>value).map(([key,value])=>`${key}\n${value}`).join('\n\n');
  const subject=`KamiBito横浜泉店｜${labels[type]||labels.general}`;
  window.location.href=`mailto:weeds_skillup_0128@yahoo.co.jp?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  setTimeout(()=>{dialog.close();document.body.classList.remove('no-scroll')},450);
});

document.addEventListener('keydown',event=>{
  if(event.key==='Escape')document.body.classList.remove('no-scroll');
});
