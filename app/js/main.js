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
        asNavFor: '.surf-map'
    });

    $('.surf-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true
    })

    $('.trip-slider, .shop-slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__prev" src="images/previous.svg" width="24" height="20" alt="Previous">',
        nextArrow: '<img class="slider-arrows slider-arrows__next" src="images/next.svg" width="24" height="20" alt="Next">'
    });

    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" width="14" height="14" alt="plus"></div><div class="quantity-button quantity-down"><img src="images/minus.svg" width="14" height="14" alt="minus"></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
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

    $('.quantity-button').on('click', function() {
        let summ = $('.nights').val() * $('.summ').data("nights") + ($('.guests').val() - 1) * $('.summ').data("guests");
        $('.summ').html('$' + summ);
    })

     let summ = $('.nights').val() * $('.summ').data("nights") + ($('.guests').val() - 1) * $('.summ').data("guests");
        $('.summ').html('$' + summ);

    $('.shop-spec__circle').on('click', function() {
        $(this).toggleClass('active')
    });

});