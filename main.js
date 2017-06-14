// Menu
const header = document.querySelector('header');
const hamButton = header.querySelector('.ham-button');
const hamMenu = header.querySelector('.ham-menu');
const navMenu = header.querySelector('.header-nav');

var menuOpen = true;

function toggleMenu() {
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
    which.classList.toggle('up');
    return removals.remove();
  }

  head.appendChild(which);
  main.insertBefore(removals, main.lastElementChild);
  which.classList.toggle('down');
  removals.classList.toggle('down');
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

function upAndDown(e) {
  if (e.animationName === 'godown') {
    e.target.classList.remove('up');
    return e.target.classList.toggle('down');
  }

  e.target.classList.toggle('up');
  e.target.remove();
}

const form = document.querySelector('.form');
const head = form.querySelector('.form-head');
const what = form.querySelector('[value="what"]');
const which = form.querySelector('[data-value="which"]');
const main = form.querySelector('.form-main');
const removals = form.querySelector('.form-removals');

what.addEventListener('change', whatSelect);
which.addEventListener('change', whichSelect);
which.addEventListener('animationend', upAndDown);
removals.addEventListener('animationend', upAndDown);
which.remove();
removals.remove();

// Scroll

// function scrollIt (destination, duration = 200, callback) {
//   function easeInOutQuart (t) {
//       return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
//   }
  
//   var start = window.pageYOffset;
//   var startTime = window.performance.now ? performance.now() : new Date().getTime();
//   var offset = screen.width >= 768 ? 65 : 110;

//   var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
//   var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
//   var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop - offset;
//   var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

//   if (window.requestAnimationFrame === false) {
//     window.scroll(0, destinationOffsetToScroll);
    
//     if (callback) {
//       callback();
//     }
//     return;
//   }

//   function scroll () {
//     var now = window.performance.now ? performance.now() : new Date().getTime();
//     var time = Math.min(1, ((now - startTime) / duration));
//     var timeFunction = easeInOutQuart(time);

//     window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

//     if (window.pageYOffset === destinationOffsetToScroll) {
//       if (callback) {
//         callback();
//       }
//       return;
//     }

//     requestAnimationFrame(scroll);
//   }

//   scroll();
// }

// function scrollToTop () {
//   scrollIt(0);
// }

// function scrollToTarget () {
//   var target = this.dataset.target;
  
//   scrollIt(
//     document.querySelector(target),
//     500
//   );
// }

// var backToTop = document.querySelector('.back-to-top');
// backToTop.addEventListener('click', scrollToTop);