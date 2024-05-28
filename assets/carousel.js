let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function showNextImage() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    updateCarousel();
}

function updateCarousel() {
    const carouselWidth = document.querySelector('.carousel').offsetWidth;
    const newTransform = -currentIndex * carouselWidth;
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransform}px)`;
}

setInterval(showNextImage, 3000);

window.addEventListener('resize', updateCarousel);
