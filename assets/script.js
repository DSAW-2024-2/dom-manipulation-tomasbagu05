let carouselInner = document.querySelector('.carousel-inner');
let carouselItems = document.querySelectorAll('.carousel-item');
let carouselPrev = document.querySelector('.carousel-prev');
let carouselNext = document.querySelector('.carousel-next');
let carouselIndicators = document.querySelectorAll('.carousel-indicator');

let currentIndex = 0;

carouselPrev.addEventListener('click', () => {
    currentIndex--;
    updateCarousel();
});

carouselNext.addEventListener('click', () => {
    currentIndex++;
    updateCarousel();
});

carouselIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

function updateCarousel() {
    carouselItems.forEach((item, index) => {
        item.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });

    carouselPrev.disabled = currentIndex === 0;
    carouselNext.disabled = currentIndex === carouselItems.length - 1;

    carouselIndicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

updateCarousel();