'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Home() {

    return (
        <>
        <Layout
                headerStyle={2}
                footerStyle={1}
                breadcrumbTitle="Our Services"
                breadcrumbImage="/assets/images/resources/page-header-services.png" // <-- your image path
            >
        {/*Services Page Start */}
        <section className="services-two services-page">
            <div className="services-two__shape-1 img-bounce">
                <img src="assets/images/shapes/services-two-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="services-two__single">
                            <div className="services-two__icon">
                                <span className="icon-socket"></span>
                            </div>
                            {/* <p className="services-two__sub-title">Service Type 1</p> */}
                            <h3 className="services-two__title"><Link href="electric-panel-repair">Electrical Maintenance & Repairs</Link>
                            </h3>
                            <p className="services-two__text">To keep your electrical systems running efficiently, we offer routine maintenance and fast repair services. 
                                Our team ensures that your setup is safe, functional, and energy-efficient.
                            </p>
                            <Link href="electric-panel-repair" className="services-two__learn-more">Learn More<span
                                    className="icon-arrow-right"></span></Link>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="services-two__single">
                            <div className="services-two__icon">
                                <span className="icon-ceiling-lamp"></span>
                            </div>
                            {/* <p className="services-two__sub-title">Service Type 2</p> */}
                            <h3 className="services-two__title"><Link href="lighting-fixtures">Electrical Products Sales</Link>
                            </h3>
                            <p className="services-two__text">We supply a wide variety of high-quality electrical parts and accessories for homes, businesses, and industries. Our
                                    products are sourced from trusted brands to ensure durability, safety, and efficiency.
                            </p>
                            <Link href="lighting-fixtures" className="services-two__learn-more">Learn More<span
                                    className="icon-arrow-right"></span></Link>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                    {/*Services Two Single Start*/}
                    <div className="col-xl-4 col-lg-6 wow fadeInRight" data-wow-delay="500ms">
                        <div className="services-two__single">
                            <div className="services-two__icon">
                                <span className="icon-ceiling-lamp-2"></span>
                            </div>
                            {/* <p className="services-two__sub-title">Service Type 3</p> */}
                            <h3 className="services-two__title"><Link href="maintenance-service"> Electrical Installation Services </Link>
                            </h3>
                            <p className="services-two__text">Our team of skilled electricians provides professional installation services for homes, offices, hotels, and industries. 
                                We ensure safe, efficient, and code-compliant electrical work.
                            </p>
                            <Link href="maintenance-service" className="services-two__learn-more">Learn More<span
                                    className="icon-arrow-right"></span></Link>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                </div>
            </div>
        </section>
        {/*Services Page End */}

        {/*Pricing One Start*/}
        <section className="pricing-one">
            <div className="pricing-one__shape-1">
                <img src="assets/images/shapes/pricing-one-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Our Pricing</span>
                    </div>
                    <div className="section-title__title-box sec-title-animation animation-style1">
                        <h2 className="section-title__title title-animation">Lighting the Way to <br/>Quality Repairs</h2>
                    </div>
                </div>
                <div className="row">
                    {/*Pricing One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="pricing-one__single">
                            <div className="pricing-one__price-pack">
                                <div className="pricing-one__price-month">
                                    <h3>Basic Plan</h3>
                                    <p>Per Month</p>
                                </div>
                                <h2>$49</h2>
                            </div>
                            <div className="pricing-one__points-and-btn">
                                <ul className="pricing-one__price-points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Mistakes To Avoid</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Your Startup</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Knew About Fonts</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Winning Metric for Your Startup</p>
                                    </li>
                                </ul>
                                <div className="pricing-one__btn-box">
                                    <Link href="contact" className="pricing-one__btn thm-btn">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Pricing One Single End*/}
                    {/*Pricing One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="pricing-one__single">
                            <div className="pricing-one__price-pack">
                                <div className="pricing-one__price-month">
                                    <h3>Regular Plan</h3>
                                    <p>6 Month</p>
                                </div>
                                <h2>$69</h2>
                            </div>
                            <div className="pricing-one__points-and-btn">
                                <ul className="pricing-one__price-points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Mistakes To Avoid</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Your Startup</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Knew About Fonts</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Winning Metric for Your Startup</p>
                                    </li>
                                </ul>
                                <div className="pricing-one__btn-box">
                                    <Link href="contact" className="pricing-one__btn thm-btn">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Pricing One Single End*/}
                    {/*Pricing One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="pricing-one__single">
                            <div className="pricing-one__price-pack">
                                <div className="pricing-one__price-month">
                                    <h3>Premium Plan</h3>
                                    <p>Annual</p>
                                </div>
                                <h2>$99</h2>
                            </div>
                            <div className="pricing-one__points-and-btn">
                                <ul className="pricing-one__price-points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Mistakes To Avoid</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Your Startup</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Knew About Fonts</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Winning Metric for Your Startup</p>
                                    </li>
                                </ul>
                                <div className="pricing-one__btn-box">
                                    <Link href="contact" className="pricing-one__btn thm-btn">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Pricing One Single End*/}
                </div>
            </div>
        </section>
        {/*Pricing One End*/}

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
                            <h2 className="section-title__title title-animation">Save Money With our<br/> Offers and Discounts</h2>
                        </div>
                    </div>
                    <p className="cta-one__text">Pleasures to secure other greater pleasures, or else he endures pains<br/>
                        to avoid worse pains to the selection circumstances</p>
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

        </Layout>
        </>
    )
}