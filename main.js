// Menu
const header = document.querySelector('header');
const hamButton = header.querySelector('.ham-button');
const hamMenu = header.querySelector('.ham-menu');
const navMenu = header.querySelector('.header-nav');

var menuOpen = true;

function toggleMenu(e) {
  menuOpen = !menuOpen;

  if (menuOpen) {
    return hamMenu.style.transform = 'translateX(0)';
  }

  hamMenu.style.transform = 'translateX(100%)';
}

hamButton.addEventListener('click', toggleMenu);
window.onload = toggleMenu;

// Form interaction

function whatSelect(e) {
  var value = e.target.value;
  if (value === 'contact') {
    which.remove();
    return removals.remove();
  }

  head.appendChild(which);
  main.insertBefore(removals, main.lastElementChild);
  which.classList.add('whichspeedy');
  removals.classList.add('down');
  which.addEventListener('animationend', () => {which.classList.remove('remove')})
}

function whichSelect(e) {
  var value = e.target.value;

  if (value === 'removals') {
    removals.classList.add('down');
    return main.insertBefore(removals, main.lastElementChild);
  }
  removals.classList.remove('down');
  removals.classList.add('up');
}

const form = document.querySelector('.form');
const head = form.querySelector('.form-head');
const what = form.querySelector('[value="what"]');
const which = form.querySelector('[value="which"]');
const main = form.querySelector('.form-main');
const removals = form.querySelector('.form-removals');
which.remove();
removals.remove();
what.addEventListener('change', whatSelect);
which.addEventListener('change', whichSelect);
removals.addEventListener('animationend', (e) => {
  if (e.animationName === 'godown') {
    return removals.classList.remove('up');
  } else {

  removals.classList.remove('down');
  removals.remove();
  }
});
