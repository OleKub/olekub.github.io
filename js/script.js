const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

// page up arrow

// $(document).ready(function(){
// 	$(window).scroll(function() {
// 		if ($(this).scrollTop() > 1600) {
// 			$('.pageup').fadeIn();
// 		} else $('.pageup').fadeOut();
// 	});
// });
const btnUp = {
    el: document.querySelector('.btn-pageup'),
    show() {
      this.el.classList.remove('btn-pageup_hide');
    },
    hide() {
      this.el.classList.add('btn-pageup_hide');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 400 ? this.show() : this.hide();
      });
      document.querySelector('.btn-pageup').onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();