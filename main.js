document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.swiper-btn-prev');
    const nextButton = document.querySelector('.swiper-btn-next');
    const slides = document.querySelectorAll('.swiper-slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function prevSlide() {
        currendIndex = (currentIndex > 0) ? currentIndex -1 : slides.length -1;
        showSlide(currentIndex);
    }

    function nextSlide() {
        currentIndex = (currentIndex < slides.length -1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    //초기 이미지 표시
    showSlide(currentIndex);
});