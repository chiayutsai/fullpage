jQuery(document).ready(function () {
    jQuery(window).on('load', function () {  //load函数
        jQuery("#loading").hide();
    });
});

var myFullpage = new fullpage('#fullpage', {
    anchors: ['Homepage', 'ADs', 'SocialMarketing', 'SearchEngine', 'WebDesign', 'AboutUs', 'ChooseUs', 'mailForm', 'ContactUs'],


    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['首頁', '數位廣告行銷', '社群行銷', '搜尋引擎優化', '網頁設計製作', '關於凱斯東', '選擇凱斯東', '品牌行銷規劃', '聯絡我們'],

    responsiveWidth: 770,
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
    $('.nav').css('opacity', '1')
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
    $('.nav').css('opacity', '0')
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
    if (topVal > 150 && wdth < 770) {
        $('#header').css('background-color', 'rgba(255,255,255,0.8)');
        $('.navbar-toggler').addClass('dark');
        $('.totop p').text('ToTop')
        $('.totop ').removeClass('scroll')

    } else {
        $('.navbar-toggler').removeClass('dark')
        $('#header').css('background-color', 'transparent');
        $('.totop p').text('SCROLL')
        $('.totop ').addClass('scroll')
    }

});


if (wdth <= 770) {
    $('.navbar-toggler').click(function () {
        $(this).css('display', 'none')
        $('.section').addClass('rotateNav');
        $('#header').addClass('rotateNav');
        $('.section').removeClass('closeNav');
        $('#header').removeClass('closeNav');
    })

}

emailjs.init('user_POR39bXPijNQbLqbwejqJ')
$('#submitButton').on('click', sendmail);

function sendmail() {

    event.preventDefault();
    let name = $('#name').val();
    let gender = $('#gender').val();
    let company = $('#company').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let comment = $('#comment').val();
    let templateParams = {
        "name": name,
        "gender": gender,
        "company": company,
        "email": email,
        "phone": phone,
        "message": comment
    }
    console.log(name, phone)
    if (name == '' || phone == '') {
        alert('請填寫姓名和電話')
        if (name == '') {

            $('#name').focus()
        } else {

            $('#phone').focus()
        }
    }
    else {
        let service_id = "default_service";
        let template_id = "testEmail";
        let userID = "user_POR39bXPijNQbLqbwejqJ"
        $('.submitBtn p').text('Sending...')
        $('.submitBtn').css('pointer-events', 'none')
        emailjs.send(service_id, template_id, templateParams, userID)
            .then((response) => {
                $('.submitBtn p').html('品牌行銷規劃 <i class="fas fa-play"></i>')
                $('.submitBtn').css('pointer-events', 'all')
                alert('感謝您的來信,我們會盡快與您聯繫')
                $('#name').val('');
                $('#gender').val('');
                $('#company').val('');
                $('#email').val('');
                $('#phone').val('');
                $('#comment').val('');
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((error) => {
                console.log('FAILED...', error);
            })
    }

}
