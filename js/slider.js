const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

let slideInterval = setInterval(nextSlide, 5000);

document.querySelector('.slider-box').addEventListener('mouseover', () => {
    clearInterval(slideInterval);
});

document.querySelector('.slider-box').addEventListener('mouseout', () => {
    slideInterval = setInterval(nextSlide, 5000);
});