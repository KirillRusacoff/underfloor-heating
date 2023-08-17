const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.slider__arrow--right',
        prevEl: '.slider__arrow--left',
      },
});    

const buttonConsent = document.querySelectorAll('.button__consent');
const consent = document.querySelector('.consent');
const buttonCross = document.querySelector('.consent__cross');

buttonConsent.forEach(function (item) {
  item.addEventListener('click', function () {
      consent.classList.add('consent--active');
  });
});

buttonCross.addEventListener('click', function() {
  consent.classList.remove('consent--active');
});