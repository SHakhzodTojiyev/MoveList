let slides = document.querySelector('.slider__item').children;
let nextSlide = document.querySelector('.right__slide');
let prevSlide = document.querySelector('.left__slide');
let totalSlide = slides.length;
let index = 0;

nextSlide.addEventListener('click', function () {
    next('next');
});

prevSlide.addEventListener('click', function () {
    next('prev');
});

function next(direction) {
    if(direction == 'next') {
        index++;
          if(index == totalSlide) {
              index = 0;
          }
    } else {
        if(index == 0) {
            index = totalSlide - 1;
        } else {
            index--;
        }
    }

    for(i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}

