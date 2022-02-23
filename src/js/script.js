$(document).ready(function () {
    var reviewsSlider = $('.reviews__slides').owlCarousel({
        smartSpeed: 800,
        loop: true,
        margin: 30,
        items: 2,
        dots: true,
        responsive:{
            0:{
                margin: 50,
                items: 1
            },
            980:{
                margin: 30,
                items: 2
            }
        }
    });

    $('.reviews__prev').click(function() {
        reviewsSlider.trigger('prev.owl.carousel');
    });

    $('.reviews__next').click(function() {
        reviewsSlider.trigger('next.owl.carousel');
    });

    $('.tabs__link').on('click', function() {
        $('.tabs__link.active').removeClass('active');
        $(this).addClass('active');
        $('.tab').removeClass('active').eq($(this).data('index')).addClass('active');
    });

    var onMenuClick = function() {
        if($(this).hasClass('open')) {
            $(this).removeClass('open');
            $('.menu').removeClass('open');
            $('.page-wrap').css('overflow', 'hidden');
            $('html').css('overflow', 'auto');
        } else {
            $(this).addClass('open');
            $('.menu').addClass('open');
            $('html').height($(window).height()).css('overflow', 'hidden');
            $('.page-wrap').css('overflow', 'scroll');
        }
    };
    var onLinkClick = function() {
        $('.menu').removeClass('open');
        $('.menu-btn').removeClass('open');
        $('.page-wrap').css('overflow', 'hidden');
        $('html').css('overflow', 'auto');        
    };
    $('.menu-btn').on('click', onMenuClick);
    $('.nav').on('click', onLinkClick);
    
});

function mapsInitContacts(){
    var map = new ymaps.Map("map",
        {
            center: [59.87065506424717,30.312544499999994],
            zoom: 16,
            controls: []

        })
        ,placemark = new ymaps.Placemark([59.871370, 30.312394], {
        hintContent: 'ул. Варшавская д.23, к.1'
    }, {
        preset: 'islands#dotIcon',
        iconColor: '#ff4131'
    });

    map.behaviors.disable('scrollZoom');
    map.geoObjects.add(placemark);
}

var modalWrap = document.querySelector('.modal-wrapper');
var btnClose = document.querySelector('.btn-close');
var anchors = document.querySelectorAll('.nav__link[href*="#"]');

btnClose.addEventListener('click', function () {
    if (modalWrap.classList.contains('open')) {
        modalWrap.classList.remove('open');
    }
});

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        var blockID = anchor.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
    });
}

if($('#map').index() != -1) {
    ymaps.ready(mapsInitContacts);
}
