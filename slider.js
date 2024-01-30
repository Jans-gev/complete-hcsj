let slideIndex = 1;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));

    slides[slideIndex - 1].style.display = 'grid';
    dots[slideIndex - 1].classList.add('active');
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function autoPlay() {
    changeSlide(1);
    setTimeout(autoPlay, 1000); // Change slide every 2 seconds
}

autoPlay();

let currentIndex = 0;
const Tslides = document.querySelector('.Tslider');
const totalSlides = document.querySelectorAll('.Tslide').length;

function TchangeSlide(direction) {
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
  Tslides.style.transform = `translateX(${translateValue})`;
}

function AutoPlay() {
  setInterval(() => {
    TchangeSlide(1);
  }, 5000);
}

AutoPlay();

const togglebtn=document.querySelector('.toggle_btn')
const togglebtnIcon=document.querySelector('.toggle_btn i')
const dropdownmenu=document.querySelector('.dropdown_menu')

togglebtn.onclick=function(){
  dropdownmenu.classList.toggle('open')
  const isOpen=dropdownmenu.classList.contains('open')
  togglebtnIcon.classList=isOpen
   ?'fa-solid fa-xmark'
   :'fa-solid fa-bars'
}
