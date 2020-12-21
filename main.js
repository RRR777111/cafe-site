'use strict';
{
  const elms = document.querySelectorAll('.elm');
  window.addEventListener('scroll', function(){
    let st = window.pageYOffset;
    elms.forEach(function(elm){
      const gap = 1000;
      let pos = elm.getBoundingClientRect().top + st - gap;
      if(st > pos){
        elm.classList.add('fadeIn');
      }
    })
  });

  const menu = document.querySelectorAll('.gnav__link');
  for(let i = 0; i < menu.length; i++){
    menu[i].addEventListener('click', function(e){
      e.preventDefault();
      let attr = menu[i].getAttribute('href');
      let targetPos = document.getElementById(attr.replace('#', ''));
      const rect = targetPos.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const target = rect + offset;

      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }
}