$(function () {

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__prev" src="images/previous.svg" width="24" height="20" alt="Previous">',
        nextArrow: '<img class="slider-arrows slider-arrows__next" src="images/next.svg" width="24" height="20" alt="Next">',
        asNavFor: '.slider-dots'
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header-slider'
    });

});