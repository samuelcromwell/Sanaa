'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from 'react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // }
}

export default function Banner() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            {/* Main Slider Start */}
            <section className="main-slider">
                <Swiper {...swiperOptions} className="main-slider__carousel">
                    <SwiperSlide>
                        <div className="item">
                            <div
                                className="main-slider__bg"
                                style={{
                                    backgroundImage: `url('https://res.cloudinary.com/dhgcuzl2x/image/upload/v1747768595/slider01_ostlcu.jpg')`,
                                }}
                            />
                            <div className="main-slider__shape-1"></div>
                            <div className="main-slider__shape-2"></div>
                            <div className="main-slider__shape-3"></div>
                            <div className="main-slider__img">
                                {/* <img src="assets/images/resources/main-slider-3.jpeg" alt="" loading="lazy" /> */}
                            </div>
                            <div className="container">
                                <div className="main-slider__content">
                                    <div className="main-slider__sub-title-box">
                                        <p className="main-slider__sub-title">Electrical Company</p>
                                        {/* <div className="main-slider__sub-title-shape"></div> */}
                                    </div>
                                    <h2 className="main-slider__title">Power Up <br /> Your World</h2>
                                    <p className="main-slider__text">
                                        We have been illuminating homes and businesses for over three years, providing <br />
                                        top-tier electrical solutions and unmatched customer service.
                                    </p>
                                    <div className="main-slider__btn-box">
                                        <Link href="about" className="main-slider__btn thm-btn">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="item">
                            <div
                                className="main-slider__bg"
                                style={{
                                    backgroundImage: `url('https://res.cloudinary.com/dhgcuzl2x/image/upload/v1747768509/slider2_nzfzpt.png')`,
                                }}
                            />
                            <div className="main-slider__shape-1"></div>
                            <div className="main-slider__shape-2"></div>
                            <div className="main-slider__shape-3"></div>
                            <div className="main-slider__img">
                                {/* <img src="assets/images/resources/main-slider-img-1-2.png" alt="" loading="lazy" /> */}
                            </div>
                            <div className="container">
                                <div className="main-slider__content">
                                    <div className="main-slider__sub-title-box">
                                        <p className="main-slider__sub-title">Electrical Company</p>
                                        <div className="main-slider__sub-title-shape"></div>
                                    </div>
                                    <h2 className="main-slider__title">Power Up <br /> Your World</h2>
                                    <p className="main-slider__text">
                                        We have been illuminating homes and businesses for over three years, providing <br />
                                        top-tier electrical solutions and unmatched customer service.
                                    </p>
                                    <div className="main-slider__btn-box">
                                        <Link href="about" className="main-slider__btn thm-btn">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="item">
                            <div
                                className="main-slider__bg"
                                style={{
                                    backgroundImage: `url('https://res.cloudinary.com/dhgcuzl2x/image/upload/v1747768514/slider3_jdzlvr.jpg')`,
                                }}
                            />
                            <div className="main-slider__shape-1"></div>
                            <div className="main-slider__shape-2"></div>
                            <div className="main-slider__shape-3"></div>
                            <div className="main-slider__img">
                                {/* <img src="assets/images/resources/main-slider-img-1-3.png" alt="" loading="lazy" /> */}
                                {/* main-slider-3 is the image to put */}
                            </div>
                            <div className="container">
                                <div className="main-slider__content">
                                    <div className="main-slider__sub-title-box">
                                        <p className="main-slider__sub-title">Electrical Company</p>
                                        <div className="main-slider__sub-title-shape"></div>
                                    </div>
                                    <h2 className="main-slider__title">Power Up <br /> Your World</h2>
                                    <p className="main-slider__text">
                                        We have been illuminating homes and businesses for over three years, providing <br />
                                        top-tier electrical solutions and unmatched customer service.
                                    </p>
                                    <div className="main-slider__btn-box">
                                        <Link href="about" className="main-slider__btn thm-btn">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    
                </Swiper>
            </section>
            {/* Main Slider End */}
        </>
    )
}
