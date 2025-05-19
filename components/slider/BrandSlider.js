'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        575: {
            slidesPerView: 2,
            
        },
        767: {
            slidesPerView: 3,
            
        },
        991: {
            slidesPerView: 3,
            
        },
        1199: {
            slidesPerView: 5,
            
        },
        1350: {
            slidesPerView: 5,
            
        },
    }
}

export default function AwardSlider1() {
    return (
        <>
            
            <Swiper {...swiperOptions} className="brand-one__carousel owl-theme owl-carousel">
                <SwiperSlide>
                {/*Brand One Single*/}
                <div className="brand-one__single">
                    <div className="brand-one__img">
                        <img src="assets/images/brand/bosch.png" alt=""/>
                    </div>
                </div>
                {/*Brand One Single*/}
                </SwiperSlide>
                <SwiperSlide>
                <div className="brand-one__single">
                    <div className="brand-one__img">
                        <img src="assets/images/brand/philips.png" alt=""/>
                    </div>
                </div>
                {/*Brand One Single*/}
                </SwiperSlide>
                <SwiperSlide>
                <div className="brand-one__single">
                    <div className="brand-one__img">
                        <img src="assets/images/brand/havells.png" alt=""/>
                    </div>
                </div>
                {/*Brand One Single*/}
                </SwiperSlide>
                <SwiperSlide>
                <div className="brand-one__single">
                    <div className="brand-one__img">
                        <img src="assets/images/brand/davis.png" alt=""/>
                    </div>
                </div>
                {/*Brand One Single*/}
                </SwiperSlide>
                <SwiperSlide>
                <div className="brand-one__single">
                    <div className="brand-one__img">
                        <img src="assets/images/brand/siemens.png" alt=""/>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                {/*Brand One Single*/}
                <div className="brand-one__single">
                    <div className="brand-one__img">
                        <img src="assets/images/brand/chint.png" alt=""/>
                    </div>
                </div>
                {/*Brand One Single*/}
                </SwiperSlide>
                <SwiperSlide>
                <div className="brand-one__single">
                    <div className="brand-one__img">
                        <img src="assets/images/brand/osram.png" alt=""/>
                    </div>
                </div>
                {/*Brand One Single*/}
                </SwiperSlide>
                <SwiperSlide>
                <div className="brand-one__single">
                    <div className="brand-one__img">
                        <img src="assets/images/brand/hager.png" alt=""/>
                    </div>
                </div>
                {/*Brand One Single*/}
                </SwiperSlide>
            </Swiper>

            {/* If we need navigation buttons */}
        </>
    )
}
