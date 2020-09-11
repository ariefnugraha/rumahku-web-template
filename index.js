$(document).ready(function () {

    //NAVBAR TOGGLER
    $('.bar').click(function (e) {
        e.preventDefault();
        $('.menu-container').toggle(500);
    })

    //TUTUP SELURUH CARD PRODUCT APABILA GAMBAR DI KLIK
    $(".homepage-image").click(function (e) { 
        e.preventDefault();
        $('.item-one').hide(500);
        $('.item-two').hide(500);
    });

    $(".dot-one").click(function (e) {
        e.preventDefault();
        $('.item-one').toggle(500);
        $('.item-two').hide(500);
    });

    $(".dot-two").click(function (e) {
        e.preventDefault();
        $('.item-two').toggle(500);
        $('.item-one').hide(500);
    });


    //TUTUP SELURUH GAMBAR APABILA GAMBAR DALAM CAROUSEL DI KLIK DI KLIK
    $(".carousel-image").click(function (e) { 
        e.preventDefault();
        $('.item-carousel-one').hide(500)
        $('.item-carousel-two').hide(500);
        $('.item-carousel-three').hide(500);
        $('#item-carousel-one').hide(500);
    });

    $(".dot-carousel-one").click(function (e) { 
        e.preventDefault();
        $('.item-carousel-one').toggle(500);
        $('.item-carousel-two').hide(500);
        $('.item-carousel-three').hide(500);
    });

    $(".dot-carousel-two").click(function (e) { 
        e.preventDefault();
        $('.item-carousel-two').toggle(500);
        $('.item-carousel-one').hide(500);
        $('.item-carousel-three').hide(500);
    });

    $(".dot-carousel-three").click(function (e) { 
        e.preventDefault();
        $('.item-carousel-three').toggle(500);
        $('.item-carousel-one').hide(500);
        $('.item-carousel-two').hide(500);
    });

    $("#dot-carousel-one").click(function (e) {
        e.preventDefault();
        $("#item-carousel-one").toggle(500);
    })

})


let i = 0;
const teks = "temukan perabotan rumah yang modern dan berkualitas hanya di rumahku";
const speed = 50;

function typeWriter() {
    if (i < teks.length) {
        document.querySelector(".title").innerHTML += teks.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}



let slideIndex = 1;
showSlides(slideIndex);

function toggleSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("carousel-content");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}