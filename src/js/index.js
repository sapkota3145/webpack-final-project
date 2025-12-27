import '../scss/style.scss'

console.log('It works!')


const swiper = new Swiper('.swiper', {
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
});

const cards = document.querySelectorAll('.brands-grid .brands-grid__inner ');
const btn = document.getElementById('brands-toggle');

if (cards.length && btn) {
let expanded = false;

function getLimit() {
  const w = window.innerWidth;
  if (w >= 1120) return 8;   // desktop
  if (w >= 768) return 6;    // tablet
  return cards.length;
}

function updateView() {
  const limit = getLimit();
  const textEl = btn.querySelector('.toggle-text');

  cards.forEach((card, index) => {
    card.style.display = (!expanded && index >= limit) ? 'none' : 'block';
  });

  // text
  textEl.textContent = expanded ? 'Hide' : 'Show all';

  // class for icons
  btn.classList.toggle('brands-toggle--expanded', expanded);
}

btn.addEventListener('click', () => {
  expanded = !expanded;
  updateView();
});

// first time
updateView();

// if you resize screen while collapsed, recalc limit
window.addEventListener('resize', () => {
  if (!expanded) updateView();
});
}

const openBtn = document.querySelector('.header__menu');
const closeBtn = document.querySelector('.side-menu__close');
const sideMenu = document.querySelector('.side-menu');

console.log('burger check:', { openBtn, closeBtn, sideMenu });

if (openBtn && sideMenu) {
  openBtn.addEventListener('click', () => {
    sideMenu.classList.add('side-menu--open');
  });
}

if (closeBtn && sideMenu) {
  closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('side-menu--open');
  });
}



