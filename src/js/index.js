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

const brandCards = document.querySelectorAll('.brands-grid .brands-grid__inner ');
const brandBtn = document.getElementById('brands-toggle');

if (brandCards.length && brandBtn) {
let expanded = false;

function getLimit() {
  const w = window.innerWidth;
  if (w >= 1120) return 8;   // desktop
  if (w >= 768) return 6;    // tablet
  return brandCards.length;
}

function updateView() {
  const limit = getLimit();
  const textEl = brandBtn.querySelector('.toggle-text');

  brandCards.forEach((card, index) => {
    card.style.display = (!expanded && index >= limit) ? 'none' : 'block';
  });

  // text
  textEl.textContent = expanded ? 'Hide' : 'Show all';

  // class for icons
  brandBtn.classList.toggle('brands-toggle--expanded', expanded);
}

brandBtn.addEventListener('click', () => {
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

const Swiper2 = new Swiper('.swiper2' , {
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
});

const repairCards = document.querySelectorAll('.repair-list .repair-card');
const repairBtn = document.getElementById('repair-toggle');

if (repairCards.length && repairBtn) {
let expanded = false;

function getLimit() {
  const w = window.innerWidth;
  if (w >= 1120) return 4;   // desktop
  if (w >= 768) return 3;    // tablet
  return repairCards.length;
}

function updateView() {
  const limit = getLimit();
  const textEl = repairBtn.querySelector('.toggle-text');

  repairCards.forEach((card, index) => {
    card.style.display = (!expanded && index >= limit) ? 'none' : 'block';
  });

  // text
  textEl.textContent = expanded ? 'Hide' : 'Show all';

  // class for icons
  repairBtn.classList.toggle('repair-toggle--expanded', expanded);
}

repairBtn.addEventListener('click', () => {
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

const Swiper3 = new Swiper('.swiper3' , {
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
});




