
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length - 1) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        console.log('null slide ' + (i + 1))
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log('show slide ' + (slideIndex + 1))
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

var slideIndex = 0;
showSlides(slideIndex);