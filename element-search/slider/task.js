const sliderItems = document.querySelectorAll('.slider__item');
const prevBtn = document.querySelector('.slider__arrow_prev');
const nextBtn = document.querySelector('.slider__arrow_next');
let currentIndex = 0;

function changeSlide(index) {
   sliderItems.forEach(item => {
      item.classList.remove('slider__item_active');
   });
   sliderItems[index].classList.add('slider__item_active');
}


prevBtn.addEventListener('click', () => {
   currentIndex--;
   if (currentIndex < 0) {
      currentIndex = sliderItems.length - 1;
   }
   changeSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
   currentIndex++;
   if (currentIndex >= sliderItems.length) {
      currentIndex = 0;
   }
   changeSlide(currentIndex);
});
