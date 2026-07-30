const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.desktop-nav');
menuButton?.addEventListener('click',()=>{
  const open=menuButton.getAttribute('aria-expanded')==='true';
  menuButton.setAttribute('aria-expanded',String(!open));
  nav?.classList.toggle('open',!open);
});
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>menuButton?.setAttribute('aria-expanded','false')));
