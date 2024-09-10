let currentSlide = 1;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        dots[index].classList.remove('active');
    });

    slides[n - 1].classList.add('active');
    dots[n - 1].classList.add('active');
    currentSlide = n;
}

function nextSlide() {
    currentSlide = currentSlide === 5 ? 1 : currentSlide + 1;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = currentSlide === 1 ? 5 : currentSlide - 1;
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(nextSlide, 5000); // Cambiar de imagen automáticamente cada 5 segundos
});
