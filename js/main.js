jQuery(document).ready(function () {
    jQuery(window).on('load', function () {  //load函数
        jQuery("#loading").hide();
    });
});

var myFullpage = new fullpage('#fullpage', {
    anchors: ['Homepage', 'ADs', 'SocialMarketing', 'SearchEngine', 'WebDesign', 'AboutUs', 'ChooseUs', 'mailForm', 'ContactUs'],


    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Homepage', 'ADs', 'SocialMarketing', 'SearchEngine', 'WebDesign', 'AboutUs', 'ChooseUs', 'mailForm', 'ContactUs'],

    responsiveWidth: 577,
    onLeave: function (origin, destination, direction) {
        var leavingSection = this;
        console.log(destination.anchor)

        if (destination.anchor != 'Homepage') {
            $('.totop p').text('ToTop')
            $('.totop ').removeClass('scroll')
            $('#fp-nav').css('display', 'block')
            // $('#header').css('background-color', 'rgba(255,255,255,0.5)')
            $('.navbar-toggler').addClass('dark')
            $('.link-item').addClass('dark')

        } else {
            $('.totop p').text('SCROLL')
            $('.totop ').addClass('scroll')
            $('#fp-nav').css('display', 'none')

            $('.navbar-toggler').removeClass('dark')
            $('.link-item').removeClass('dark')
        }
        if (destination.anchor == 'AboutUs' || destination.anchor == 'mailForm') {
            $('#header').css('background-color', 'rgba(255,255,255,0.5)')
        } else {
            $('#header').css('background-color', 'transparent')
        }


    },
    afterResponsive: function (isResponsive) {

    }

});

/* url initialization */
let url = window.location.href
console.log(url.indexOf('#'))
if (url.indexOf('#') < 0) {
    window.location.href = url + '#Homepage'

}

$('.totop').click(function () {
    if ($(this).hasClass('scroll')) {
        fullpage_api.moveTo('ADs');
        onMouseScroll()
    } else {
        fullpage_api.moveTo('Homepage');
        onMouseScroll()
    }
});

$('.navbar-toggler').click(function () {
    let url = window.location.href.split('#')[1];
    console.log(url)

    $('.' + url).addClass('rotateNav');
    $('#header').addClass('rotateNav');
    $('.' + url).removeClass('closeNav');
    $('#header').removeClass('closeNav');
    $('#fullpage').css('pointer-events', 'none')
    $('#fp-nav').css('display', 'block')
    $('#fp-nav ul li a span').css('background-color', '#fff')
    $('#fp-nav ul li .fp-tooltip').css('color', '#fff')
    $('.navbar-nav').addClass('openMenu')
    $('.navbar-nav').removeClass('closeMenu')
})


$('.more').click(function () {
    $('.about_content').toggleClass("openMore");

    $(this).toggleClass('open_btn')
})


$('.close').on('click', onMouseScroll)
$('body').on('mousewheel DOMMouseScroll', onMouseScroll);
$('#fp-nav').on('click', onMouseScroll)
$('.navbar-nav li').on('click', onMouseScroll)

function onMouseScroll(e) {
    let url = window.location.href.split('#')[1];
    if (url == 'Homepage') {
        $('#fp-nav').css('display', 'none')
    }
    $('.navbar-toggler').css('display', 'block')
    $('.section').addClass('closeNav');
    $('#fp-nav ul li .fp-tooltip').css('color', '#333')
    $('#header').addClass('closeNav');
    $('.section').removeClass('rotateNav');
    $('#header').removeClass('rotateNav');
    $('#fullpage').css('pointer-events', 'initial')
    $('#fp-nav ul li a span').css('background-color', '#333')
    $('.navbar-nav').addClass('closeMenu')
    $('.navbar-nav').removeClass('openMenu')
}
var wdth = $(window).width();
$(window).scroll(function () {
    var topVal = $(window).scrollTop();
    if (topVal > 150 && wdth < 577) {
        $('#header').css('background-color', 'rgba(255,255,255,0.8)');
        $('.navbar-toggler').addClass('dark')

    } else {
        $('.navbar-toggler').removeClass('dark')
        $('#header').css('background-color', 'transparent');
    }

});


if (wdth <= 770) {
    $('.navbar-toggler').click(function () {
        $(this).css('display', 'none')
        $('.section').addClass('rotateNav');
        $('.section').removeClass('closeNav');

    })

}

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters

    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


})