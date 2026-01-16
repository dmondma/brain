let swiper = null;
let swiper1 = null;
let swiper2 = null;
let swiper3 = null;
let swiper4 = null;

const initSwiper = () => {
  if (window.innerWidth < 767 && !swiper) {
    swiper = new Swiper('.swiper-op', {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-op .swiper-pagination",
        clickable: true,
      },
    });
  } else if (window.innerWidth >= 767 && swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }

  if (window.innerWidth < 767 && !swiper1) {
    swiper1 = new Swiper('.swiper-hard', {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-hard .swiper-pagination",
        clickable: true,
      },
    });
  } else if (window.innerWidth >= 767 && swiper1) {
    swiper1.destroy(true, true);
    swiper1 = null;
  }

  if (window.innerWidth < 767 && !swiper2) {
    swiper2 = new Swiper('.swiper-time', {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-time .swiper-pagination",
        clickable: true,
      },
    });
  } else if (window.innerWidth >= 767 && swiper2) {
    swiper2.destroy(true, true);
    swiper2 = null;
  }

  if (window.innerWidth < 767 && !swiper3) {
    swiper3 = new Swiper('.swiper-who', {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-who .swiper-pagination",
        clickable: true,
      },
    });
  } else if (window.innerWidth >= 767 && swiper3) {
    swiper3.destroy(true, true);
    swiper3 = null;
  }

  if (window.innerWidth < 767 && !swiper4) {
    swiper4 = new Swiper('.swiper-google', {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-google .swiper-pagination",
        clickable: true,
      },
    });
  } else if (window.innerWidth >= 767 && swiper4) {
    swiper4.destroy(true, true);
    swiper4 = null;
  }

};

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);


function showHideMenu() {
  const btn = document.querySelector('.show-hide-menu');
  const header = document.querySelector('.header-in');
  const body = document.body;

  if (!btn || !header) return;

  btn.addEventListener('click', () => {
    header.classList.toggle('open');
    body.classList.toggle('opened');
  });
}

showHideMenu();


function initModalClose() {
  const body = document.body;

  document.addEventListener('click', e => {
    const closeBtn = e.target.closest('.modal-close');
    const bg = e.target.closest('.bg-modal');

    if (!closeBtn && !bg) return;

    const modal = e.target.closest('.modal-active');
    if (!modal) return;

    modal.classList.remove('modal-active');
    body.classList.remove('open-modal');
  });
}

initModalClose();


function initModals() {
  const links = document.querySelectorAll('.modal-link');
  const body = document.body;

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const id = link.getAttribute('href')?.replace('#', '');
      if (!id) return;

      const modal = document.getElementById(id);
      if (!modal) return;

      body.classList.add('open-modal');
      modal.classList.add('modal-active');
    });
  });
}

initModals();


 $('.marquee').marquee({
    duration: 20000,      // час пробігу всієї стрічки
    gap: 50,              // відстань між блоками
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,     // дублюємо контент для заповнення і нескінченності
    startVisible: true,   // <-- важливо, одразу показує всі елементи
    pauseOnHover: true // пауза при наведенні
  });