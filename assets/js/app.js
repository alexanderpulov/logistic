$(function() {

    // Nav Toggle on mobile

    let navToggle = $('#navToggle');
    let nav = $('#nav');

    navToggle.on('click', function(event) {
        event.preventDefault();
        nav.toggleClass('show');
    });










    let intro = $("#intro");
    let header = $("#header");
    let introH = intro.innerHeight();
    let headerH = header.innerHeight();
    


    // Header class on scroll
    $(window).on("scroll resize", function() {

        introH = intro.innerHeight();
        headerH = header.innerHeight();
    
        let scrollTop = $(this).scrollTop();
    
        if (scrollTop >= introH - headerH) {
            header.addClass("header--dark");
        } else {
            header.removeClass("header--dark");
        }
        
    });




    // Smooth scroll to sections
    $("[data-scroll]").on("click", function(event) {

        event.preventDefault();

        let scrollEl = $(this).data("scroll");
        let scrollElPos = $(scrollEl).offset().top;

        $("html, body").animate({
            scrollTop: scrollElPos - headerH
        }, 500);

    });




    // ScrollSpy
    $(window).on("scroll", function() {

        let scrollTop = $(this).scrollTop();

        $("[data-scrollspy]").each(function(){

            

            let $this = $(this);
            let sectionId = $this.data('scrollspy');
            let sectionOffset = $this.offset().top;

            
            if(scrollTop >= sectionOffset - headerH) {
                $('#nav [data-scroll]').removeClass('active');
                $('#nav [data-scroll="' + sectionId + '"]').addClass('active');
            }

            if(scrollTop == 0) {
                $('#nav [data-scroll]').removeClass('active');
            }

        });
    });





    // Modal
    $('[data-modal]').on('click', function(event) {
        event.preventDefault();

        let modal = $(this).data('modal');
        console.log(modal);
        $('body').addClass('no-scroll');
        $(modal).addClass('show');
    });


    $('[data-modal-close]').on('click', function(event) {
        event.preventDefault();

        let modal = $(this).parents('.modal');
        $('body').removeClass('no-scroll');
        modal.removeClass('show');
    });


    $('.modal').on('click', function() {
        $('body').removeClass('no-scroll');
        $(this).removeClass('show');
    });


    $('.modal__inner').on('click', function(event) {
        event.stopPropagation();

    });






    // Aos.js https://github.com/michalsnik/aos
    AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });







});