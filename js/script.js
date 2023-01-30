const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menu.addEventListener('click', () => {
  menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

const scrolling = (upSelector) => {
  const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 1250) {
          upElem.classList.add('animated', 'fadeIn');
          upElem.classList.remove('fadeOut');
      } else {
          upElem.classList.add('fadeOut');
          upElem.classList.remove('fadeIn');
      }
  });
};

  // Scrolling with RequestAnimationFrame

  let links = document.querySelectorAll('[href^="#"]'),
      speed = 0.05;

  links.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();

          let widthTop = document.documentElement.scrollTop,
              hash = this.hash,
              toBlock = document.querySelector(hash).getBoundingClientRect().top,
              start = null;

          requestAnimationFrame(step);

          function step(time) {
              if (start === null) {
                  start = time;
              } 

              let progress = time - start,
                  r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : 
                      Math.min(widthTop + progress/speed, widthTop + toBlock));
                  
              document.documentElement.scrollTo(0, r);

              if (r != widthTop + toBlock) {
                  requestAnimationFrame(step);
              } else {
                  location.hash = hash;
              }
          }

      });
  });

scrolling('.pageup');