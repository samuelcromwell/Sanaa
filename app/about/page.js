'use client'
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import BrandSlider from '@/components/slider/BrandSlider'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
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
            slidesPerView: 1,
            
        },
        767: {
            slidesPerView: 1,
            
        },
        991: {
            slidesPerView: 2,
            
        },
        1199: {
            slidesPerView: 2,
            
        },
        1350: {
            slidesPerView: 2,
            
        },
    }



}

export default function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout
            headerStyle={2}
            footerStyle={1}
            breadcrumbTitle="About Us"
            breadcrumbImage="/assets/images/resources/page-header-about.png" 
        >
        {/*About One Start */}
        <section className="about-one about-four">
            <div className="about-one__shape-one float-bob-y">
                <img src="assets/images/shapes/about-one-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="about-one__img-box-1">
                                        <div className="about-one__img-1">
                                            <img src="assets/images/resources/repair.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="about-one__cirtified">
                                        <div className="icon">
                                            <span className="icon-certified"></span>
                                        </div>
                                        <h3>We are certified<br/>electrical shop</h3>
                                    </div>
                                    <div className="about-one__img-box-2">
                                        <div className="about-one__img-2">
                                            <img src="assets/images/resources/solder.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right wow fadeInRight" data-wow-delay="300ms">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Get To Know Us</span>
                                </div>
                                <div className="section-title__title-box sec-title-animation animation-style2">
                                    <h2 className="section-title__title title-animation">Your Trusted Electrical Partner in Mombasa
                                    </h2>
                                </div>
                            </div>
                            <p className="about-one__text-1">At Sanaa Electricals, we are committed to providing the highest-quality electrical solutions for homes, businesses, and industries in Mtwapa. With a team of experienced electricians and a vast selection of electrical products, we aim to meet your needs with precision, reliability, and excellent customer service</p>
                            <p className="about-one__text-2">Whether you need to purchase electrical supplies, have a new system installed, or require maintenance and repairs, we’ve got you covered. </p>
                            <div className="about-one__btn-box">
                                <Link href="contact" className="about-one__btn thm-btn">More About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End */}

        {/*Testimonial One Start */}
        <section className="testimonial-one">
            <div className="container">
                <Swiper {...swiperOptions} className="testimonial-one__carousel owl-theme owl-carousel">
                    <SwiperSlide> 
                    {/*Testimonial One Single Start*/}
                    <div className="item">
                        <div className="testimonial-one__single">
                            <div className="testimonial-one__img">
                                <img src="assets/images/testimonial/Fatma.png" alt=""/>
                            </div>
                            <div className="testimonial-one__content">
                                <div className="testimonial-one__quote">
                                    <span className="icon-quote"></span>
                                </div>
                                <p className="testimonial-one__text">“I received excellent service and top-quality products. It’s not easy to find trustworthy electrical suppliers in Mombasa, but this team exceeded my expectations!”</p>
                                <div className="testimonial-one__ratting">
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <h3><Link href="testimonials">Fatma Mwinyi</Link></h3>
                                    <p>Small Business Owner, Mombasa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Testimonial One Single End*/}
                    </SwiperSlide> 
                    <SwiperSlide> 
                    {/*Testimonial One Single Start*/}
                    <div className="item">
                        <div className="testimonial-one__single">
                            <div className="testimonial-one__img">
                                <img src="assets/images/testimonial/Hassan.png" alt=""/>
                            </div>
                            <div className="testimonial-one__content">
                                <div className="testimonial-one__quote">
                                    <span className="icon-quote"></span>
                                </div>
                                <p className="testimonial-one__text">“As a hotel manager in Nyali, I appreciate efficiency and reliability. These guys delivered promptly and offered the best prices in town.”</p>
                                <div className="testimonial-one__ratting">
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <h3><Link href="testimonials">Juma Hassan</Link></h3>
                                    <p>Hotel Manager, Nyali</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Testimonial One Single End*/}
                    </SwiperSlide> 
                    <SwiperSlide> 
                    {/*Testimonial One Single Start*/}
                    <div className="item">
                        <div className="testimonial-one__single">
                            <div className="testimonial-one__img">
                                <img src="assets/images/testimonial/Aisha.png" alt=""/>
                            </div>
                            <div className="testimonial-one__content">
                                <div className="testimonial-one__quote">
                                    <span className="icon-quote"></span>
                                </div>
                                <p className="testimonial-one__text">“Their customer support is top-notch. I had an urgent order for an event, and they sorted it out in under 24 hours. Highly recommend for anyone in Coast region.”</p>
                                <div className="testimonial-one__ratting">
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <h3><Link href="testimonials">Aisha Abdalla</Link></h3>
                                    <p>Event Planner, Mombasa CBD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Testimonial One Single End*/}
                    </SwiperSlide> 
                    <SwiperSlide> 
                    {/*Testimonial One Single Start*/}
                    <div className="item">
                        <div className="testimonial-one__single">
                            <div className="testimonial-one__img">
                                <img src="assets/images/testimonial/Mohammed.png" alt=""/>
                            </div>
                            <div className="testimonial-one__content">
                                <div className="testimonial-one__quote">
                                    <span className="icon-quote"></span>
                                </div>
                                <p className="testimonial-one__text">“Great experience overall. I love supporting local businesses and this one truly delivers on quality and service in Mombasa.”</p>
                                <div className="testimonial-one__ratting">
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                    <span className="fas fa-star"></span>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <h3><Link href="testimonials">Mohammed Noor</Link></h3>
                                    <p>Tech Store Owner, Likoni</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Testimonial One Single End*/}
                    </SwiperSlide>
                </Swiper> 
            </div>
        </section>
        {/*Testimonial One End */}


        {/*Brand One Start*/}
        <section className="brand-one">
            <div className="container">
                <div className="brand-one__inner">
                    <BrandSlider/>
                </div>
            </div>
        </section>
        {/*Brand One End*/}

        {/*Video One Start*/}
        <section className="video-one">
            <div className="video-one__sahpe-1">
                <img src="assets/images/shapes/video-one-shape-1.png" alt=""/>
            </div>
            <div className="video-one__bg wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms"
                style={{ backgroundImage: 'url(assets/images/backgrounds/video-one-bg.png)' }} >
                {/* <div className="video-one__video-link">
                    <a onClick={() => setOpen(true)} className="video-popup">
                        <div className="video-one__video-icon">
                            <span className="fas fa-play"></span>
                            <i className="ripple"></i>
                        </div>
                    </a>
                </div> */}
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6"></div>
                    <div className="col-xl-6">
                        <div className="video-one__right wow fadeInRight" data-wow-delay="300ms">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">contact with us</span>
                                </div>
                                <div className="section-title__title-box sec-title-animation animation-style2">
                                    <h2 className="section-title__title title-animation">Choose Our Electric Repair Service
                                        because its 24/7</h2>
                                </div>
                            </div>
                            <p className="video-one__text-1">We maintain a competitive pricing strategy, ensuring these matters to this
                                principle of selection. He rejects pleasures to secure other greater pleasures, or else
                                he endures pains to avoid worse pains to the selection point.</p>
                            <p className="video-one__text-2">But in certain circumstances and owing iodide pianissimos
                                dulcimers quiWe maintain a competitive pricing strategy, ensuring that you get top-quality electrical products and services at an affordable price
                                selection.</p>
                            <div className="video-one__btn-box">
                                <Link href="about" className="video-one__btn thm-btn">Discover More</Link>
                                <Link href="contact#quote" className="video-one__btn-two thm-btn">Free estimate</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Video One End*/}

        {/*Counter One Start*/}
        <section className="counter-one">
            <div className="container">
                <div className="counter-one__inner">
                    <div className="row">
                        {/*Counter One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="counter-one__single counter-one__single-1">
                                <div className="counter-one__icon">
                                    <span className="icon-hands-on-experience"></span>
                                </div>
                                <div className="counter-one__count-box">
                                    <CounterUp end={20} />
                                    <span>+</span>
                                </div>
                                <p className="counter-one__text">Years of experience</p>
                            </div>
                        </div>
                        {/*Counter One Single End*/}
                        {/*Counter One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="counter-one__single">
                                <div className="counter-one__icon">
                                    <span className="icon-technician-1"></span>
                                </div>
                                <div className="counter-one__count-box">
                                <CounterUp end={15} />
                                    <span>+</span>
                                </div>
                                <p className="counter-one__text">expert team members</p>
                            </div>
                        </div>
                        {/*Counter One Single End*/}
                        {/*Counter One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="counter-one__single">
                                <div className="counter-one__icon">
                                    <span className="icon-project-complete"></span>
                                </div>
                                <div className="counter-one__count-box">
                                <CounterUp end={800} />
                                    <span>+</span>
                                </div>
                                <p className="counter-one__text">Projects Completed</p>
                            </div>
                        </div>
                        {/*Counter One Single End*/}
                        {/*Counter One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms">
                            <div className="counter-one__single">
                                <div className="counter-one__icon">
                                    <span className="icon-happy-customer"></span>
                                </div>
                                <div className="counter-one__count-box">
                                <CounterUp end={760} />
                                    <span>+</span>
                                </div>
                                <p className="counter-one__text">Happy customer</p>
                            </div>
                        </div>
                        {/*Counter One Single End*/}
                    </div>
                </div>
            </div>
        </section>
        {/*Counter One End*/}

        {/*Project One Start*/}
        <section className="project-one">
            <div className="container">
                <div className="project-one__top">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Our Gallery</span>
                        </div>
                        <div className="section-title__title-box sec-title-animation animation-style2">
                            <h2 className="section-title__title title-animation">Your Brightest Choice<br/>In Repairs and Installations</h2>
                        </div>
                    </div>
                    <div className="project-one__btn-box">
                        <Link href="#" className="project-one__btn thm-btn">all Gallery</Link>
                    </div>
                </div>
                <div className="row">
                    {/*Project One Single Start*/}
                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">
                                    <img src="assets/images/project/project-1-1.png" alt=""/>
                                    <div className="project-one__arrow">
                                        <Link href="assets/images/project/project-1-1.png" className="img-popup"><span
                                                className="icon-arrow-right"></span></Link>
                                    </div>
                                </div>
                                <div className="project-one__content">
                                    <p className="project-one__sub-title">Sanaa Electricals</p>
                                    <h3 className="project-one__title"><Link href="##">debris stuck in the
                                            outdoor</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project One Single End*/}
                    {/*Project One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">
                                    <img src="assets/images/project/project-1-2.png" alt=""/>
                                    <div className="project-one__arrow">
                                        <Link href="assets/images/project/project-1-2.png" className="img-popup"><span
                                                className="icon-arrow-right"></span></Link>
                                    </div>
                                </div>
                                <div className="project-one__content">
                                    <p className="project-one__sub-title">Sanaa Electricals</p>
                                    <h3 className="project-one__title"><Link href="##">debris stuck in the
                                            outdoor</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project One Single End*/}
                    {/*Project One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">
                                    <img src="assets/images/project/project-1-3.png" alt=""/>
                                    <div className="project-one__arrow">
                                        <Link href="assets/images/project/project-1-3.png" className="img-popup"><span
                                                className="icon-arrow-right"></span></Link>
                                    </div>
                                </div>
                                <div className="project-one__content">
                                    <p className="project-one__sub-title">Sanaa Electricals</p>
                                    <h3 className="project-one__title"><Link href="##">debris stuck in the
                                            outdoor</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project One Single End*/}
                    {/*Project One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="900ms">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">
                                    <img src="assets/images/project/project-1-4.png" alt=""/>
                                    <div className="project-one__arrow">
                                        <Link href="assets/images/project/project-1-4.png" className="img-popup"><span
                                                className="icon-arrow-right"></span></Link>
                                    </div>
                                </div>
                                <div className="project-one__content">
                                    <p className="project-one__sub-title">Sanaa Electricals</p>
                                    <h3 className="project-one__title"><Link href="##">debris stuck in the
                                            outdoor</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project One Single End*/}
                    {/*Project One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="1000ms">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">
                                    <img src="assets/images/project/project-1-5.png" alt=""/>
                                    <div className="project-one__arrow">
                                        <Link href="assets/images/project/project-1-5.png" className="img-popup"><span
                                                className="icon-arrow-right"></span></Link>
                                    </div>
                                </div>
                                <div className="project-one__content">
                                    <p className="project-one__sub-title">Sanaa Electricals</p>
                                    <h3 className="project-one__title"><Link href="##">debris stuck in the
                                            outdoor</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project One Single End*/}
                    {/*Project One Single Start*/}
                    <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="1100ms">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">
                                    <img src="assets/images/project/project-1-6.png" alt=""/>
                                    <div className="project-one__arrow">
                                        <Link href="assets/images/project/project-1-6.png" className="img-popup"><span
                                                className="icon-arrow-right"></span></Link>
                                    </div>
                                </div>
                                <div className="project-one__content">
                                    <p className="project-one__sub-title">Sanaa Electricals</p>
                                    <h3 className="project-one__title"><Link href="##">debris stuck in the
                                            outdoor</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project One Single End*/}
                </div>
            </div>
        </section>
        {/*Project One End*/}

        

        {/*CTA One Start*/}
        <section className="cta-one">
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__img">
                        <img src="assets/images/resources/cta-one-img-1.png" alt=""/>
                    </div>
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Get To Know Us</span>
                        </div>
                        <div className="section-title__title-box sec-title-animation animation-style2">
                            <h2 className="section-title__title title-animation">Save Money with our<br/> Amazing Discounts
                            </h2>
                        </div>
                    </div>
                    <p className="cta-one__text">Get amazing value for your money with our quality products <br/>
                        trusted by professionals for durability and safety</p>
                    <div className="cta-one__btn-and-call-box">
                        <div className="cta-one__btn-box">
                            <Link href="contact" className="cta-one__btn thm-btn">Book an Appointment</Link>
                        </div>
                        <div className="cta-one__call-box">
                            <div className="icon">
                                <span className="icon-call"></span>
                            </div>
                            <div className="content">
                                <p>Make a call</p>
                                <h4><Link href="tel:0717848262">0717848262</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*CTA One End*/}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </Layout>
        </>
    )
}


