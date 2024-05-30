let slideIdx = 1;
let autoplay;

function showSlides(num) {
    slideIdx = num;
    let slides = document.getElementsByClassName('slide');
    
    if(slideIdx < 1) {
        slideIdx = slides.length;
    }else if(slideIdx > slides.length) {
        slideIdx = 1;
    }
    
    for (let i=0; i<slides.length; i++){
        slides[i].className = slides[i].className.replace(" show", "");
    }
    slides[slideIdx-1].className = slides[slideIdx-1].className + ' show';

    setAutoplay();
}

function changeSlide(ctrl) {
    showSlides(slideIdx + ctrl);
}

    function setAutoplay() {
    if(autoplay != undefined) {
        clearInterval(autoplay);
    }
    
    autoplay = setInterval(function() {
        changeSlide(1)
    },5000);
}

window.onload = function() {
    showSlides(1);
}