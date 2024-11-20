window.addEventListener("load", function () {
    // const = let
    const swiper1 = new Swiper('.station1', {

        autoHeight: true,
        // Optional parameters
        // direction: 'vertical',
        loop: true,

        // // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
        },
        autoplay: {
            delay: 3000
        },
        speed: 1000,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },

    });
    const swiper2 = new Swiper('.station2', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,

        },
        autoplay: {
            delay: 3000
        },
        speed: 1000,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
    });

    const station3 = new Swiper(".station3",{
        loop:true,
        autoplay:true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
    });

    const station4 = new Swiper(".station4",{
        loop:true,
        autoHeight:true
        // autoplay:true,

    });
    station3.on('slideChange',function(){
        // console.log(station3.realIndex)
        station4.slideToLoop(station3.realIndex)
    });



})