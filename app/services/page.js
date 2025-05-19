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
                            <h3 className="services-two__title"><Link href="electric-maintenance-repairs ">Electrical Maintenance & Repairs</Link>
                            </h3>
                            <p className="services-two__text">To keep your electrical systems running efficiently, we offer routine maintenance and fast repair services. 
                                Our team ensures that your setup is safe, functional, and energy-efficient.
                            </p>
                            <Link href="electric-maintenance-repairs " className="services-two__learn-more">Learn More<span
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
                            <h3 className="services-two__title"><Link href="electrical-products-sales">Electrical Products Sales</Link>
                            </h3>
                            <p className="services-two__text">We supply a wide variety of high-quality electrical parts and accessories for homes, businesses, and industries. Our
                                    products are sourced from trusted brands to ensure durability, safety, and efficiency.
                            </p>
                            <Link href="electrical-products-sales" className="services-two__learn-more">Learn More<span
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
                            <h3 className="services-two__title"><Link href="electrical-installation-services"> Electrical Installation Servicess </Link>
                            </h3>
                            <p className="services-two__text">Our team of skilled electricians provides professional installation services for homes, offices, hotels, and industries. 
                                We ensure safe, efficient, and code-compliant electrical work.
                            </p>
                            <Link href="electrical-installation-services" className="services-two__learn-more">Learn More<span
                                    className="icon-arrow-right"></span></Link>
                        </div>
                    </div>
                    {/*Services Two Single End*/}
                </div>
            </div>
        </section>
        {/*Services Page End */}


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

        </Layout>
        </>
    )
}