$(function() {

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














});