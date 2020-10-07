/* Init the mobile menu */
$("#hamburger").click(function(event) {
    event.preventDefault();
    $("#nav").addClass("showNav");
    let winHeight = $(window).outerHeight();
    // Set the window height of the mobile menu when engaged!
    $('#menuWrapper').css('height',winHeight + 'px');
});

$("#close").click(function(event) {
    event.preventDefault();
    $("#nav").removeClass("showNav");
    // Set the window height of the mobile menu when not engaged!
    $('#menuWrapper').css('height','auto');
});

/* On hover apply a class to the dropdown '.hov' */
$('#menuWrapper ul li').hover( function () {
    var el = $(this).children('ul');
    // check if it has a class of .hov
    if (el.hasClass('hov')) {
        $(el).removeClass('hov');
    } else {
        $(el).addClass('hov');
    }
});







let forEach = function (array, callback, scope) {
    for (let i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
    }
};
window.onload = function(){
    let max = 219;
    forEach(document.querySelectorAll('.progress'), function (index, value) {
        percent = value.getAttribute('data-progress');
        value.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);
        value.querySelector('.value').innerHTML = percent + '%';
    });
};




$(function () {
    let selectedClass = "";
    $(".filter").click(function () {
        selectedClass = $(this).attr("data-rel");
        $("#gallery").fadeTo(100, 0.1);
        $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('animation');
            $("#gallery").fadeTo(300, 1);
        }, 300);
    });
});


$(window).load(function() {
    $('.core-slider').coreSlider();
});



//couter variable
var i = 0;

function slideChange() {
    var $slide = $(".slide")[i];
    var $dot = $(".slide-select")[i];
    $(".slide").removeClass('active');
    $($slide).toggleClass("active");
    $(".slide-select").removeClass("selected");
    $($dot).toggleClass("selected");
}

function tDown () {
    var c = i + 2;
    if(c === $(".slide").length){
        c = 0;
    } else if (c === $(".slide").length + 1) {
        c = 1;
    }
    var $slide = $(".slide")[c];
    $(".slide").removeClass('top-slide');
    $($slide).addClass("top-slide");
    if(i === $(".slide").length - 1 ){
        i = 0;
    } else{
        i++
    }
}

function tUp () {
    var $slide = $(".slide")[i];
    $(".slide").removeClass('top-slide');
    $($slide).removeClass('active');
    $($slide).addClass("top-slide");
    if(i === 0){
        i = $(".slide").length - 1;
    } else {
        i--;
    }
}

//toggleDown click command
$("#toggle-down").click(function(){
    tDown();
    slideChange();
});

//toggleUp click command
$("#toggle-up").click(function(){
    tUp();
    slideChange();
});

//swipe commands
$(window).load(function(){
    $("#slider").on("swiperight", swiperightHandler );
    function swiperightHandler () {
        tDown();
        slideChange();
    }
    $("#slider").on("swipeleft", swipeleftHandler );
    function swipeleftHandler () {
        tUp();
        slideChange();
    }
});


//control list commands
$(".slide-select").click(function () {
    $(".slide").removeClass("top-slide");
    var slideIndex = $(".slide-select").index(this);
    var c;
    i = slideIndex;
    if (i === $(".slide-select").length){
        c = 0;
    } else {
        c = i + 1;
    }
    var $top = $(".slide")[c];
    $($top).addClass("top-slide");
    slideChange();
});





$('.wrapper_1').each(function() {
    var $slider = $(this);
    var numberOfSlides = $slider.find('.panel').length;

    $slider.find('.panel:eq(0)').addClass('_active');
    $slider.find('.nav_dot:eq(0)').addClass('active');

    var $activeSlide = $slider.find('.panel._active');
    var $nextBtn = $slider.find('.next-btn');
    var $prevBtn = $slider.find('.prev-btn');

    $('.nav_dot').on('click', function() {
        var slideToGo = $(this).data('slide');
        goToSlide(slideToGo);
    });

    $slider.on('slide.changed', function() {
        console.log('slide changed !');
        $('.nav_dot').removeClass('active');
        var $activeDot = $('.nav_dot[data-slide="' + $('.panel._active').data('slide') + '"]');
        console.log();
        $activeDot.addClass('active');
    });

    $nextBtn.on('click', function(event) {
        nextSlide();
    });

    $prevBtn.on('click', function(event) {
        prevSlide();
    });

    function nextSlide() {
        $activeSlide = $slider.find('.panel._active');
        var $nextSlide = $activeSlide.next('.panel');
        $activeSlide.removeClass('_active');
        $nextSlide.addClass('_active');

        //$activeSlide = $nextSlide;

        var slideIndex = $slider.find('.panel._active').index('.panel');
        console.log(slideIndex);

        if (slideIndex >= numberOfSlides || slideIndex <= -1) {
            firstSlide();
            $slider.trigger('slide.changed');

        } else {
            $slider.trigger('slide.changed');
        }

    }

    function prevSlide() {
        $activeSlide = $slider.find('.panel._active');

        var $prevSlide = $activeSlide.prev('.panel');

        $activeSlide.removeClass('_active');
        $prevSlide.addClass('_active');

        var slideIndex = $slider.find('.panel._active').index();
        console.log(slideIndex);

        if (typeof $prevSlide === 'undefined' || $prevSlide === null || $prevSlide.length == -1 || slideIndex <= -1) {
            lastSlide();
            $slider.trigger('slide.changed');
        } else {
            $slider.trigger('slide.changed');
        }

    }

    function firstSlide() {
        $('.panel._active').removeClass('_active');
        $slider.find('.panel:eq(0)').addClass('_active');
        $activeSlide = $slider.find('.panel:eq(0)');

    }

    function lastSlide() {

        $('.panel._active').removeClass('_active');
        $slider.find('.panel').eq(numberOfSlides - 1).addClass('_active');

    }

    function goToSlide(slideToGo) {
        $('.panel._active').removeClass('_active');
        $slider.find('.panel').eq(slideToGo - 1).addClass('_active');
        $activeSlide = $slider.find('.panel').eq(slideToGo - 1).addClass('_active');
        $slider.trigger('slide.changed');
    }

});

