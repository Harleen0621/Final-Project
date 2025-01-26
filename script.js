const sliderImages = document.querySelector('.slider-images');
const images = document.querySelectorAll('.slider-images img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function updateSlider() {
  const offset = -currentIndex * 100;
  sliderImages.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
});