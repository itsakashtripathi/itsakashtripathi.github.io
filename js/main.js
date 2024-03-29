$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');
        $(this).addClass('btn-grp-btn-active').siblings().removeClass('btn-grp-btn-active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    // isotope layout bugfix start
    var $grid = $('.grid').imagesLoaded( function() {
        // init Isotope after all images have loaded
        $grid.isotope({
        // options...
        });
    });
    // isotope layout bugfix end
    // solution
    // https://isotope.metafizzy.co/layout#imagesloaded

    // sticky navigation menu

    // let nav_offset_top = $('.header_area').height() + 50;

    // function navbarFixed() {
    //     if ($('.header_area').length) {
    //         $(window).scroll(function () {
    //             let scroll = $(window).scrollTop();
    //             if (scroll >= nav_offset_top) {
    //                 $('.header_area .main-menu').addClass('navbar_fixed');
    //             } else {
    //                 $('.header_area .main-menu').removeClass('navbar_fixed');
    //             }
    //         })
    //     }
    // }

    // navbarFixed();

});

// spinner start 
$(window).on("load",function(){
    preloaderFadeOutTime=50;
    function hidePreloader(){
        var preloader=$('.spinner-wrapper');
        preloader.fadeOut(preloaderFadeOutTime);
    }
hidePreloader();
});
// spinner end 

// disable shortcuts start
document.onkeydown = function(e) {
    if(event.keyCode == 123) {return false;}if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){return false;}if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){return false;}if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){return false;}if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){return false;}if(e.ctrlKey && e.keyCode == 'P'.charCodeAt(0)){return false;}if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){return false;}if(e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)){return false;}if(e.ctrlKey && e.keyCode == 'G'.charCodeAt(0)){return false;}if(e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)){return false;}if(e.ctrlKey && e.keyCode == 'V'.charCodeAt(0)){return false;}
}
// disable shortcuts end

// disable right click start
document.addEventListener('contextmenu',event=>event.preventDefault());
// disable right click end

// smooth scroll start
(function () {
    var speed = 1000;
    var moving_frequency = 1;
    var links = document.getElementsByClassName('nav-el');
    var href;
    for (var i = 0; i < links.length; i++) {
        href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
        if (href !== null && href.length > 1 && href.substr(0, 1) == '#') {
            links[i].onclick = function () {
                var element;
                var href = this.attributes.href.nodeValue.toString();
                if (element = document.getElementById(href.substr(1))) {
                    var hop_count = speed / moving_frequency;
                    var getScrollTopDocumentAtBegin = getScrollTopDocument();
                    var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;
                    for (var i = 1; i <= hop_count; i++) {
                        (function () {
                            var hop_top_position = gap * i;
                            setTimeout(function () {
                                window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin);
                            }, moving_frequency * i);
                        })();
                    }
                }
                return false;
            };
        }
    }
    var getScrollTopElement = function (e) {
        var top = 0;
        while (e.offsetParent != undefined && e.offsetParent != null) {
            top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
            e = e.offsetParent;
        }
        return top;
    };
    var getScrollTopDocument = function () {
        return document.documentElement.scrollTop + document.body.scrollTop;
    };
})();
// smooth scroll end

// activate clicked link start
$(document).ready(function() {
    $(document).on('click', '.nav-item a', function (e) {
        $(this).parent().addClass('active').siblings().removeClass('active');
        // $(this).parent().addClass('green').siblings().removeClass('green');
    });
    $(document).on('click', '.navbar-brand', function (e) {
        $(".nav-item").siblings().removeClass('active');
    });
});
// activate clicked link end

// scrollspy start
const progress_bar = document.querySelectorAll('.progress');
$(window).scroll(function() {
var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
var percent_scrolled = (wintop/(docheight-winheight))*100;
progress_bar.forEach(bar => {
    // bar.dataset = 50;
    // const { size } = bar.dataset;
    // console.log(size)
    bar.style.width = `${percent_scrolled}%`
});
});
// scrollspy end

// animation start

    $('.cards').hover(function(){     
        var selector = this.querySelector('.swipeAnimate');
        selector.classList.remove('magictime', 'swap-back');
        selector.classList.add('magictime', 'swap');
        
    },     
    function(){    
        var selector = this.querySelector('.swipeAnimate');
        selector.classList.remove('magictime', 'swap');
        // selector.classList.add('magictime', 'swap-back');
    });

/* SCROLL SECTIONS ACTIVE NAV LINK START */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach( current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.add('active');
            $('.navbar-nav a[href*=' + sectionId + ']').parent().addClass('active').siblings().removeClass('active');
        }else{
            // document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.remove('active');
            $('.navbar-nav a[href*=' + sectionId + ']').siblings().removeClass('active');
        }
    })
}
/* SCROLL SECTIONS ACTIVE NAV LINK END */

// scroll-reveal start

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.sr_navbar', {})
sr.reveal('.sr_title_text', {})
sr.reveal('.sr_site_buttons', {delay: 200})
sr.reveal('.sr_banner_image', {origin:'top', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.sr_about_image', {origin:'left', delay: 500})
sr.reveal('.sr_about_subtitle', {delay: 300})
sr.reveal('.sr_para', {origin:'top', delay: 400})

/*SCROLL EXPERIENCE*/
sr.reveal('.sr_single_brand', {interval: 200})

/*SCROLL TIMELINE*/
sr.reveal('.sr_avatar_container', {origin:'left', delay: 500})
sr.reveal('.sr_avatar_text', {origin:'top', delay: 200})
sr.reveal('.sr_timeline_heading', {delay: 300})
sr.reveal('.sr_timeline_item', {delay: 300})
sr.reveal('.sr_item_left', {origin:'left', delay: 300})
sr.reveal('.sr_item_right', {origin:'right', delay: 300})
sr.reveal('.sr_item_top', {origin:'top', delay: 300})

/*SCROLL AWARDS*/


/*SCROLL PROJECTS*/


/*SCROLL SKILLS*/
// sr.reveal('.sr_skills_subtitle', {})
// sr.reveal('.sr_skills_item', {distance: '20px', delay: 50, interval: 100})

/*SCROLL TESTIMONIAL*/

/*SCROLL CONTACT*/
// sr.reveal('.contact__text', {interval: 200})
// sr.reveal('.contact__input', {delay: 400})
// sr.reveal('.contact__button', {delay: 600})

// scroll-reveal end

// NOTE: This code should always stay at the end of file
// confetti start
var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

let confe = document.querySelector("#my-canvas");

let hireMeBtn1 = document.querySelector(".hire-btn");
let hireMeBtn2 = document.querySelector(".hire-btn-2");
let hireMeBtn3 = document.querySelector(".hire-btn-3");

hireMeBtn1.onclick = function () {
    confe.classList.add('active');
    setTimeout(() => {confe.classList.remove('active');}, 10000);
}

hireMeBtn2.onclick = function () {
    confe.classList.add('active');
    setTimeout(() => {confe.classList.remove('active');}, 10000);
}

hireMeBtn3.onclick = function () {
    confe.classList.add('active');
    setTimeout(() => {confe.classList.remove('active');}, 10000);
}
// confetti end

//testing start
// $(window).scroll(function() {
//     var top_of_element = $(".brand-area").offset().top;
//     var bottom_of_element = $(".brand-area").offset().top + $(".brand-area").outerHeight();
//     var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
//     var top_of_screen = $(window).scrollTop();

//     if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
//         // the element is visible, do something
//         console.log('hi')
//     } else {
//         // the element is not visible, do something else
//     }
// });
//testing end

// animation end