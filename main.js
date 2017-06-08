// Reduce logo on scroll:

function reduceLogoOnScroll() {
  var logo = document.querySelector('.speedy-logo'),
      shrinkOn = 200;

  window.addEventListener('scroll', function() {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop;

    if(distanceY > shrinkOn) {
      logo.classList.add('speedy-logo-smaller');
    } else if(logo.classList.contains('speedy-logo-smaller')) {
      logo.classList.remove('speedy-logo-smaller');
    }
  });
};

window.onload = reduceLogoOnScroll;

// Form interaction:

var contactorquote = document.querySelector('#contactorquote'),
    whichspeedy = document.querySelector('#whichspeedy'),
    removals = document.querySelector('.movers'),
    storage = document.querySelector('.storage');

contactorquote.addEventListener('change', function() {
	if(contactorquote.value === 'quote') {
    whichspeedy.classList.remove('hidden');
  } else if(contactorquote.value === 'contact') {
    whichspeedy.classList.add('hidden');
  }
});

whichspeedy.addEventListener('change', function() {
  if(whichspeedy.value === 'removals') {
    removals.classList.remove('hidden');
  } else if(whichspeedy.value === 'storage') {
    storage.classList.remove('hidden');
  }
});


// Menu scroll to:

var removals = document.querySelector('#removals'),
    storage = document.querySelector('#storage'),
    courier = document.querySelector('#courier');

removals.addEventListener('click', function scrollTo() {
  window.scrollTo(0, 0);
});
