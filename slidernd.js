let currentIndex = 0;
const slides = document.querySelector('.Tslider');
const totalSlides = document.querySelectorAll('.Tslide').length;

function changeSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  updateSlider();
}

function updateSlider() {
  const translateValue = -currentIndex * 50 + '%'; 
  slides.style.transform = `translateX(${translateValue})`;
}

function autoPlay() {
  setInterval(() => {
    changeSlide(1);
  }, 5000);
}

autoPlay();