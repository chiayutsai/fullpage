var wdth = $(window).width();
if (wdth >= 576) {
    var controller = new ScrollMagic.Controller();




    var tween1 = new TimelineMax();
    var textWrapper1 = document.querySelector('.ADs h3');
    textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    tween1
        .fromTo(".ADs .bg", 0.1,
            { 'clip-path': 'polygon(17% 0, 37% 0,37% 0, 17% 0)' },
            { 'clip-path': 'polygon(17% 0, 37% 0, 20% 100%, 0% 100%)' })
        .fromTo(".ADs .bar", 0.5,
            { rotation: -195, opacity: 0 },
            { rotation: -15, opacity: 1 }, 0.3)
        .staggerFromTo(".ADs h3 span", 0.3,
            { opacity: 0, scale: 0.5, x: -10 },
            { opacity: 1, scale: 1, x: 0 },
            0.1, '-=0.1')
        .fromTo(".ADs .imgBox", 0.1,
            { 'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
            { 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }, '-=0.4')
        .fromTo(".ADs .decoration_text", 0.5,
            { opacity: 0, y: 50 },
            { opacity: 0.03, y: 0 }, 1.5)
        .fromTo(".ADs .textBox", 0.5,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0 }, '-=0.5')
    var scene1 = new ScrollMagic.Scene({
        triggerElement: ".ADs ",
        reverse: false,

    })
        .setTween(tween1)

        .addTo(controller); // trigger a TweenMax.to tween



    var tween2 = new TimelineMax();
    var textWrapper2 = document.querySelector('.SocialMarketing h3');
    textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    tween2
        .fromTo(".SocialMarketing .bg", 0.1,
            { 'clip-path': 'polygon(80% 0, 100% 0, 100% 0,80% 0)' },
            { 'clip-path': 'polygon(80% 0, 100% 0, 83% 100%, 63% 100%)' })
        .fromTo(".SocialMarketing .bar", 0.5,
            { rotation: -195, opacity: 0 },
            { rotation: -15, opacity: 1 }, 0.3)
        .staggerFromTo(".SocialMarketing h3 span", 0.3,
            { opacity: 0, scale: 0.5, x: -10 },
            { opacity: 1, scale: 1, x: 0 },
            0.1, '-=0.1')
        .fromTo(".SocialMarketing .imgBox", 0.1,
            { 'clip-path': ' polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' },
            { 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }, '-=0.4')
        .fromTo(".SocialMarketing .decoration_text", 0.5,
            { opacity: 0, y: 50 },
            { opacity: 0.03, y: 0 }, 1.5)
        .fromTo(".SocialMarketing .textBox", 0.5,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0 }, '-=0.5')
    var scene2 = new ScrollMagic.Scene({
        triggerElement: ".SocialMarketing ",
        reverse: false,

    })
        .setTween(tween2)

        .addTo(controller); // trigger a TweenMax.to tween


    var tween3 = new TimelineMax();
    var textWrapper3 = document.querySelector('.SearchEngine h3');
    textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    tween3
        .fromTo(".SearchEngine .doubleBg1", 0.1,
            { 'clip-path': 'polygon(17% 5%, 37% 5%,37% 5%, 17% 5%)' },
            { 'clip-path': 'polygon(17% 5%, 37% 5%, 20% 100%, 0% 100%)' })
        .fromTo(".SearchEngine .doubleBg2", 0.1,
            { 'clip-path': 'polygon(22% 0, 42% 0, 42% 0, 22% 0)' },
            { 'clip-path': 'polygon(22% 0, 42% 0, 25% 95%, 5% 95%)' }, 0.2)
        .fromTo(".SearchEngine .bar", 0.5,
            { rotation: -195, opacity: 0 },
            { rotation: -15, opacity: 1 }, 0.3)
        .staggerFromTo(".SearchEngine h3 span", 0.3,
            { opacity: 0, scale: 0.5, x: -10 },
            { opacity: 1, scale: 1, x: 0 },
            0.1, '-=0.1')
        .fromTo(".SearchEngine .imgBox", 0.1,
            { 'clip-path': 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
            { 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }, '-=0.2')
        .fromTo(".SearchEngine .decoration_text", 0.5,
            { opacity: 0, y: 50 },
            { opacity: 0.03, y: 0 }, 1.5)
        .fromTo(".SearchEngine .textBox", 0.5,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0 }, '-=0.5')
    var scene3 = new ScrollMagic.Scene({
        triggerElement: ".SearchEngine ",
        reverse: false,

    })
        .setTween(tween3)

        .addTo(controller); // trigger a TweenMax.to tween

    var tween4 = new TimelineMax();
    var textWrapper4 = document.querySelector('.WebDesign h3');
    textWrapper4.innerHTML = textWrapper4.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    tween4
        .fromTo(".WebDesign .bg", 0.1,
            { 'clip-path': 'polygon(80% 0, 100% 0, 100% 0,80% 0)' },
            { 'clip-path': 'polygon(80% 0, 100% 0, 83% 100%, 63% 100%)' })
        .fromTo(".WebDesign .bar", 0.5,
            { rotation: -195, opacity: 0 },
            { rotation: -15, opacity: 1 }, 0.3)
        .staggerFromTo(".WebDesign h3 span", 0.3,
            { opacity: 0, scale: 0.5, x: -10 },
            { opacity: 1, scale: 1, x: 0 },
            0.1, '-=0.1')
        .fromTo(".WebDesign .imgBox", 0.1,
            { 'clip-path': ' polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' },
            { 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }, '-=0.2')
        .fromTo(".WebDesign .decoration_text", 0.5,
            { opacity: 0, y: 50 },
            { opacity: 0.03, y: 0 }, 1.5)
        .fromTo(".WebDesign .textBox", 0.5,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0 }, '-=0.5')
    var scene4 = new ScrollMagic.Scene({
        triggerElement: ".WebDesign ",
        reverse: false,

    })
        .setTween(tween4)

        .addTo(controller); // trigger a TweenMax.to tween

    var tween5 = new TimelineMax();
    var textWrapper5 = document.querySelector('.AboutUs h3');
    textWrapper5.innerHTML = textWrapper5.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    tween5

        .fromTo(".AboutUs .bar", 0.3,
            { rotation: -195, opacity: 0 },
            { rotation: -15, opacity: 1 })
        .staggerFromTo(".AboutUs h3 span", 0.3,
            { opacity: 0, scale: 0.5, x: -10 },
            { opacity: 1, scale: 1, x: 0 },
            0.1, '-=0.1')

        .fromTo(".aboutText1", 0.5,
            { opacity: 0, x: -150 },
            { opacity: 1, x: 0 }, '-=0.2')
        .fromTo(".aboutText2", 0.5,
            { opacity: 0, x: 150 },
            { opacity: 1, x: 0 }, '-=0.2')
        .fromTo(".aboutText3", 0.5,
            { opacity: 0, x: -150 },
            { opacity: 1, x: 0 }, '-=0.2')
        .fromTo(".more", 0.5,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0 }, '-=0.2')
    var scene5 = new ScrollMagic.Scene({
        triggerElement: ".AboutUs ",
        reverse: false,

    })
        .setTween(tween5)

        .addTo(controller); // trigger a TweenMax.to tween

    var tween6 = new TimelineMax();
    var textWrapper6 = document.querySelector('.ChooseUs h3');
    textWrapper6.innerHTML = textWrapper6.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    tween6
        .fromTo(".ChooseUs .bg", 0.1,
            { 'clip-path': 'polygon(25% 0, 45% 0, 45% 0%, 25% 0%)' },
            { 'clip-path': 'polygon(25% 0, 45% 0, 25% 100%, 5% 100%)' })
        .fromTo(".ChooseUs .bar", 0.3,
            { rotation: -195, opacity: 0 },
            { rotation: -15, opacity: 1 }, 0.5)
        .staggerFromTo(".ChooseUs h3 span", 0.3,
            { opacity: 0, scale: 0.5, x: -10 },
            { opacity: 1, scale: 1, x: 0 },
            0.1, '-=0.1')
        .fromTo(".choice_img", 0.1,
            { 'clip-path': ' polygon(0 0, 0 0, 0 100%, 0 100%)' },
            { 'clip-path': ' polygon(0 0, 100% 0, 100% 100%, 0 100%)' }, '-=0.5')
        .fromTo(".box_img", 0.1,
            { 'clip-path': ' polygon(0 0, 0 0, 0 100%, 0 100%)' },
            { 'clip-path': ' polygon(0 0, 100% 0, 100% 100%, 0 100%)' }, '-=0.5')
        .fromTo(".choice_mask", 0.1,
            { 'clip-path': ' polygon(0 0, 0 0, 0 100%, 0 100%)' },
            { 'clip-path': ' polygon(0 0, 60% 0, 40% 100%, 0 100%)' }, 1.5)

        .fromTo(".ChooseUs .archor", 0.5,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0 })

    var scene6 = new ScrollMagic.Scene({
        triggerElement: ".ChooseUs ",
        reverse: false,

    })
        .setTween(tween6)

        .addTo(controller); // trigger a TweenMax.to tween


    var tween7 = new TimelineMax();

    tween7
        .fromTo(".triBg1", 0.1,
            { 'clip-path': 'polygon(100% 30%,100% 30%,100% 30%)' },
            { 'clip-path': 'polygon(100% 30%, 90% 100%, 100% 100%)' })

        .fromTo(".triBg2", 0.1,
            { 'clip-path': 'polygon(100% 20%,100% 20%,100% 20%)' },
            { 'clip-path': 'polygon(100% 20%, 90% 90%, 100% 90%)' }, 0.1)
        .fromTo(".form_box", 1,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0 }, 0.5)

    var scene7 = new ScrollMagic.Scene({
        triggerElement: ".mailForm ",
        reverse: true,

    })
        .setTween(tween7)

        .addTo(controller); // trigger a TweenMax.to tween


    var tween8 = new TimelineMax();
    var textWrapper8 = document.querySelector('.ContactUs h3');
    textWrapper8.innerHTML = textWrapper8.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    tween8
        .fromTo(".ContactUs .bg", 0.1,
            { 'clip-path': 'polygon(27% 0, 47% 0,47% 0, 27% 0)' },
            { 'clip-path': 'polygon(27% 0, 47% 0, 30% 85%, 10% 85%)' })

        .fromTo(".trafficbg", 0.1,
            { 'clip-path': 'polygon( 58% 100%, 78% 100%, 78% 100%, 58% 100%)' },
            { 'clip-path': 'polygon(75% 10%, 95% 10%, 78% 100%, 58% 100%)' }, 0.1)
        .fromTo(".ContactUs .bar", 0.3,
            { rotation: -195, opacity: 0 },
            { rotation: -15, opacity: 1 }, 0.3)
        .staggerFromTo(".ContactUs h3 span", 0.3,
            { opacity: 0, scale: 0.5, x: -10 },
            { opacity: 1, scale: 1, x: 0 },
            0.1, '-=0.1')
        .fromTo(".map", 0.1,
            { 'clip-path': ' polygon(0 0, 0 0, 0 100%, 0 100%);' },
            { 'clip-path': 'polygon(0 0,100.5% 0%, 83% 100%, 0 100%)' }, '-=0.2')
        .staggerFromTo(".map_Content p", 0.5,
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, delay: 0.5 }, 0.2)
    var scene8 = new ScrollMagic.Scene({
        triggerElement: ".ContactUs ",
        reverse: true,

    })
        .setTween(tween8)

        .addTo(controller); // trigger a TweenMax.to tween
}


$('.more').hover(function () {
    var rotateBtn = new TimelineMax();
    rotateBtn.to(' .more', 0.5,
        { rotation: 180 })
}, function () {
    var rotateBtn = new TimelineMax();
    rotateBtn.to(' .more', 0.5,
        { rotation: 0 })
})

$('.more').click(function () {
    var closekAni = new TimelineMax();
    closekAni.to(' .about_content p.aboutText1', 0.5,
        { opacity: 1, x: 0 })
        .to(' .about_content p.aboutText2', 0.5,
            { opacity: 1, x: 0 }, '-=0.5')
        .to(' .about_content p.aboutText3', 0.5,
            { opacity: 1, x: 0 }, '-=0.5')
        .to('.about_content p.moreText', 0.5,
            { opacity: 0, y: 50 }, '-=0.5')
    var clickAni = new TimelineMax();
    clickAni.to(' .about_content.openMore p.aboutText1', 0.5,
        { opacity: 0, x: -200 })
        .to(' .about_content.openMore p.aboutText2', 0.5,
            { opacity: 0, x: 200 }, '-=0.5')
        .to(' .about_content.openMore p.aboutText3', 0.5,
            { opacity: 0, x: -200 }, '-=0.5')
        .to('.about_content.openMore p.moreText', 0.5,
            { opacity: 1, y: 0 }, '-=0.5')

});