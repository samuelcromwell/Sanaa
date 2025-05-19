import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Home() {
    return (
        <>
        <Layout headerStyle={2} 
            footerStyle={1} 
            breadcrumbTitle="Electrical Products Sales" 
            breadcrumbImage="/assets/images/resources/sales-header.png"
        >
        {/*Service Details Start*/}
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="service-details__left">
                            <div className="service-details__img">
                                <img src="assets/images/services/shop.png" alt="Sanaa Electricals shop" />
                            </div>
                            <h3 className="service-details__title-1">Electrical Products Sales</h3>
                            <p className="service-details__text-1">
                                At Sanaa Electricals, we offer a wide range of quality electrical products that are trusted by professionals, homeowners, and businesses throughout Mtwapa and Mombasa. Our mission is to ensure you get value for your money with safe, reliable, and durable products.
                            </p>
                            <p className="service-details__text-2">
                                Whether you're looking for lighting fixtures, cables, sockets, circuit breakers, switches, or energy-saving solutions, we stock a comprehensive inventory tailored to both residential and commercial needs. Our team is always ready to guide you with the best product choices for your projects, large or small.
                            </p>
                            <ul className="service-details__points-list list-unstyled">
                                <li>
                                    <div className="icon"><span className="icon-arrow-right"></span></div>
                                    <p>Trusted brands for assured quality and safety</p>
                                </li>
                                <li>
                                    <div className="icon"><span className="icon-arrow-right"></span></div>
                                    <p>Affordable pricing for both retail and bulk buyers</p>
                                </li>
                                <li>
                                    <div className="icon"><span className="icon-arrow-right"></span></div>
                                    <p>Knowledgeable staff to assist with product recommendations</p>
                                </li>
                                <li>
                                    <div className="icon"><span className="icon-arrow-right"></span></div>
                                    <p>Delivery and installation support available on request</p>
                                </li>
                            </ul>
                            <div className="service-details__img-box">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="service-details__img-box-single">
                                            <div className="service-details__img-box-img">
                                                <img src="assets/images/services/shop1.png" alt="Genuine Products" />
                                            </div>
                                            <div className="service-details__img-box-content">
                                                <div className="service-details__img-box-content-icon-and-title">
                                                    <div className="service-details__img-box-content-icon">
                                                        <span className="icon-lamp"></span>
                                                    </div>
                                                    <h3 className="service-details__img-box-content-title">Genuine & Certified Products</h3>
                                                </div>
                                                <p className="service-details__img-box-content-text">
                                                    We proudly supply only authentic and certified electrical products that meet the strict safety and quality standards set by the Kenyan Bureau of Standards (KEBS). From sockets and switches to wires and lighting, our items are carefully selected to ensure lasting durability
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="service-details__img-box-single">
                                            <div className="service-details__img-box-img">
                                                <img src="assets/images/services/shop2.png" alt="Electrical Accessories" />
                                            </div>
                                            <div className="service-details__img-box-content">
                                                <div className="service-details__img-box-content-icon-and-title">
                                                    <div className="service-details__img-box-content-icon">
                                                        <span className="icon-charger"></span>
                                                    </div>
                                                    <h3 className="service-details__img-box-content-title">Reliable Electrical Accessories</h3>
                                                </div>
                                                <p className="service-details__img-box-content-text">
                                                    From quality switches and sockets to durable electric wires and breakers, we supply everything you need for safe, long-lasting installations. All products are carefully selected to meet local electrical standards and customer trust.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-5">
                        <div className="service-details__sidebar">
                            <div className="service-details__services-box">
                                <h3 className="service-details__services-title">Our Services</h3>
                                <ul className="service-details__services-list list-unstyled">
                                    <li><Link href="electric-maintenance-repairs">Electric Maintenance & Repairs <span className="icon-arrow-right"></span></Link></li>
                                    <li className="active"><Link href="electrical-products-sales">Electrical Products Sales <span className="icon-arrow-right"></span></Link></li>
                                    <li><Link href="electrical-installation-services">Electrical Installation Services<span className="icon-arrow-right"></span></Link></li>
                                </ul>
                            </div>

                            <div className="project-details__get-started">
                                <h3 className="project-details__get-started-title">Get Started Today</h3>
                                <p className="project-details__get-started-text">
                                    Reach out to us for expert advice, product availability, or a quick quote. We're ready to help you power your project!
                                </p>
                                <ul className="project-details__get-started-points list-unstyled">
                                    <li><div className="icon"><span className="icon-call"></span></div><p><Link href="tel:254717848262">+254 717 848 262</Link></p></li>
                                    <li><div className="icon"><span className="icon-envelope"></span></div><p><Link href="mailto:sanaaelectricals3@gmail.com">sanaaelectricals3@gmail.com</Link></p></li>
                                    <li><div className="icon"><span className="icon-location"></span></div><p>Mtwapa, Mombasa</p></li>
                                </ul>
                                <div className="project-details__get-started-btn-box">
                                    <Link href="contact" className="project-details__get-started-btn thm-btn">Get in Touch</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Service Details End*/}

        {/*CTA One Start*/}
        <section className="cta-one">
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__img">
                        <img src="assets/images/resources/cta-one-img-1.png" alt="Discount Offer" />
                    </div>
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Get To Know Us</span>
                        </div>
                        <div className="section-title__title-box sec-title-animation animation-style2">
                            <h2 className="section-title__title title-animation">Save Money with our<br/> Amazing Discounts</h2>
                        </div>
                    </div>
                    <p className="cta-one__text">
                        Get amazing value for your money with our quality products<br/> trusted by professionals for durability and safety.
                    </p>
                    <div className="cta-one__btn-and-call-box">
                        <div className="cta-one__btn-box">
                            <Link href="contact" className="cta-one__btn thm-btn">Book an Appointment</Link>
                        </div>
                        <div className="cta-one__call-box">
                            <div className="icon"><span className="icon-call"></span></div>
                            <div className="content">
                                <p>Make a call</p>
                                <h4><Link href="tel:0717848262">0717 848 262</Link></h4>
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
