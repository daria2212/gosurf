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

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__prev" src="images/previous.svg" width="24" height="20" alt="Previous">',
        nextArrow: '<img class="slider-arrows slider-arrows__next" src="images/next.svg" width="24" height="20" alt="Next">',
        asNavFor: '.surf-map',
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]
    });

    $('.surf-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    centerMode: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]
    })

    $('.trip-slider, .shop-slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__prev" src="images/previous.svg" width="24" height="20" alt="Previous">',
        nextArrow: '<img class="slider-arrows slider-arrows__next" src="images/next.svg" width="24" height="20" alt="Next">'
    });

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><svg width="14" height="14"><use xlink:href="#plus"></use></svg></div><div class="quantity-button quantity-down"><svg width="14" height="4"><use xlink:href="#minus"></use></svg></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });

    $('.quantity-button').on('click', function () {
        let summ = $('.nights').val() * $('.summ').data("nights") + ($('.guests').val() - 1) * $('.summ').data("guests");
        $('.summ').html('$' + summ);
    })

    let summ = $('.nights').val() * $('.summ').data("nights") + ($('.guests').val() - 1) * $('.summ').data("guests");
    $('.summ').html('$' + summ);

    $('.shop-spec__circle').on('click', function () {
        $(this).toggleClass('active')
    });

});

var menuBtn = document.querySelector('.toggle');
var menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    menuBtn.classList.toggle('toggle--closed');
    menuBtn.classList.toggle('toggle--opened');
    menu.classList.toggle('menu--closed');
    menu.classList.toggle('menu--opened');
});

new WOW().init();