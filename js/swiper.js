const refs = {
customerNextBtn: document.querySelector('.swiper-button-next--customer'),
customerPrevBtn: document.querySelector('.swiper-button-prev--customer'),
};

const swiper = new Swiper('.customer-slider', {
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,        
    },

    speed: 2000,
    freeMode: true,
        
    breakpoints: {
        312: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1440: {
            slidesPerView: 5,
        }
    }
});

refs.customerNextBtn.addEventListener('click', (e)=>swiper.slideNext());
refs.customerPrevBtn.addEventListener('click', (e)=>swiper.slidePrev());
