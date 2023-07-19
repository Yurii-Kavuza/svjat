new Swiper('.customer-slider', {
    loop: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    pagination: {
    el: '.swiper-pagination',
    },
    // autoplay:{delay: 0},

    speed: 3000,
    
    
    slidesPerView: 3,    
});