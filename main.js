function reduceLogoOnScroll() {
  var logo = document.querySelector('.logo'),
      shrinkOn = 50;

  window.addEventListener('scroll', function() {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop;

    if(distanceY > shrinkOn) {
      logo.classList.add('smaller');
    } else if(logo.classList.contains('smaller')) {
      logo.classList.remove('smaller');
    }
  });
};

window.onload = reduceLogoOnScroll;

var contactorquote = document.querySelector('#contactorquote');
var whichspeedy = document.querySelector('#whichspeedy');

contactorquote.addEventListener('change', function() {
	if(contactorquote.value === 'quote') {
    whichspeedy.classList.remove('hidden');
  } else if(contactorquote.value === 'contact') {
    whichspeedy.classList.add('hidden');
  }
});
