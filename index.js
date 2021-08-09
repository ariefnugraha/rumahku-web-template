$(document).ready(function () {
    let productDot = $(".product-dot-container .product-dot");
    let productItem = $(".product-item-container .product-item");
    let windowWidth = $(window).width();
    let i = 0;

    //NAVBAR TOGGLER
    $('.bar').click(function (e) {
        e.preventDefault();
        $('.menu-container').toggle(500);
    })

    for (i; i < productDot.length; i++) {
        $(productDot).eq(i).click(function (e) {
            e.preventDefault();
            let productId = `#${$(this).attr("id")}.product-item`;
            let offset = $(this).offset();
            let offsetX = offset.left;
            let offsetY = offset.top;
            let xValue = offsetX + 210;
            let yValue = offsetY + 10;

            if($(window).width() >= 1440) {
                xValue = offsetX + 245;
                yValue = offsetY + 15;
            }
            
            if(!$(productId).hasClass("show")) {
                $(".product-item-container").addClass("show");
                $(productId).addClass("show");
                $(".product-item").not($(productId)).removeClass("show")
                $(productId)
                $(productId).css({
                    'top': yValue,
                    'left': xValue
                })
            } else {
                console.log("NOT SHOW")
                $(".product-item-container").removeClass("show")
                $(productId).removeClass("show");
            }
        })
    }

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
function typeWriter() {
    const speed = 50;
    const text = "temukan perabotan rumah yang modern dan berkualitas hanya di rumahku";
    if (i < text.length) {
        document.querySelector(".title").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
// let slideIndex = 1;
// showSlides(slideIndex);

// function toggleSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     const slides = document.getElementsByClassName("carousel-content");

//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     slides[slideIndex - 1].style.display = "block";
// }