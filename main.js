function init() {
  var logo = document.querySelector(".logo"),
      shrinkOn = 100;

  window.addEventListener('scroll', function() {
    var distanceY = window.pageYOffset || document.documentElement.scrollTop;

    if(distanceY > shrinkOn) {
      logo.classList.add('smaller');
    } else if(logo.classList.contains('smaller')) {
      logo.classList.remove('smaller');
    }
  });
};

window.onload = init;
