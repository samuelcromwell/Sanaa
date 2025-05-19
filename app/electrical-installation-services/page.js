import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Home() {
    return (
        <>
        <Layout 
            headerStyle={2} 
            footerStyle={1} 
            breadcrumbTitle="Electrical Installation Services"
            breadcrumbImage="/assets/images/resources/installation-header.png"
        >
        {/*Service Details Start*/}
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="service-details__left">
                            <div className="service-details__img">
                                <img src="assets/images/services/installation.jpg" alt="Electrical Installation" />
                            </div>
                            <h3 className="service-details__title-1">Electrical Installation Services</h3>
                            <p className="service-details__text-1">
                                At Sanaa Electricals, we specialize in professional electrical installation services for homes, businesses, and construction sites across Mtwapa and Mombasa. Whether you're setting up a new house, renovating an office, or wiring a retail space, our experienced electricians deliver safe, efficient, and compliant installations.
                            </p>
                            <p className="service-details__text-2">
                                We handle everything from basic wiring and socket placement to complex electrical panel installations and lighting system designs. Our team uses high-quality materials and follows safety regulations to ensure every connection is done right the first time, no shortcuts, no compromises.
                            </p>

                            <ul className="service-details__points-list list-unstyled">
                                <li>
                                    <div className="icon"><span className="icon-arrow-right"></span></div>
                                    <p>Complete house and commercial wiring services</p>
                                </li>
                                <li>
                                    <div className="icon"><span className="icon-arrow-right"></span></div>
                                    <p>Installation of sockets, switches, lighting, and distribution boards</p>
                                </li>
                                <li>
                                    <div className="icon"><span className="icon-arrow-right"></span></div>
                                    <p>Upgrades and rewiring for safety and energy efficiency</p>
                                </li>
                                <li>
                                    <div className="icon"><span className="icon-arrow-right"></span></div>
                                    <p>Certified electricians and quality assurance on every job</p>
                                </li>
                            </ul>

                            <div className="service-details__img-box">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="service-details__img-box-single">
                                            <div className="service-details__img-box-img">
                                                <img src="assets/images/services/repair1.png" alt="Professional Work" />
                                            </div>
                                            <div className="service-details__img-box-content">
                                                <div className="service-details__img-box-content-icon-and-title">
                                                    <div className="service-details__img-box-content-icon">
                                                        <span className="icon-lamp"></span>
                                                    </div>
                                                    <h3 className="service-details__img-box-content-title">Skilled Electrical Work</h3>
                                                </div>
                                                <p className="service-details__img-box-content-text">
                                                    Our licensed electricians are trained to deliver precise, clean, and efficient installations that are built to last—reducing risks of faults or future breakdowns. Every project is handled with professional care.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6">
                                        <div className="service-details__img-box-single">
                                            <div className="service-details__img-box-img">
                                                <img src="assets/images/services/repair2.png" alt="Customer Focused Service" />
                                            </div>
                                            <div className="service-details__img-box-content">
                                                <div className="service-details__img-box-content-icon-and-title">
                                                    <div className="service-details__img-box-content-icon">
                                                        <span className="icon-settings"></span>
                                                    </div>
                                                    <h3 className="service-details__img-box-content-title">Reliable Project Delivery</h3>
                                                </div>
                                                <p className="service-details__img-box-content-text">
                                                    We work closely with homeowners, developers, and contractors to meet deadlines and budget expectations. From planning to execution, Sanaa Electricals ensures reliable and timely delivery of every installation project.
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
                                    <li>
                                        <Link href="electric-maintenance-repairs">Electric Maintenance & Repairs <span className="icon-arrow-right"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="electrical-products-sales">Electrical Products Sales <span className="icon-arrow-right"></span></Link>
                                    </li>
                                    <li className="active">
                                        <Link href="electrical-installation-services">Electrical Installation Services <span className="icon-arrow-right"></span></Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="project-details__get-started">
                                <h3 className="project-details__get-started-title">Get Started Today</h3>
                                <p className="project-details__get-started-text">
                                    Have an electrical issue or project in mind? Contact us today to schedule a service, request a quote, or get expert advice. We’re here to help you with reliable solutions every step of the way.
                                </p>
                                <ul className="project-details__get-started-points list-unstyled">
                                    <li>
                                        <div className="icon"><span className="icon-call"></span></div>
                                        <p><Link href="tel:254717848262">+254 717 848 262</Link></p>
                                    </li>
                                    <li>
                                        <div className="icon"><span className="icon-envelope"></span></div>
                                        <p><Link href="mailto:sanaaelectricals3@gmail.com">sanaaelectricals3@gmail.com</Link></p>
                                    </li>
                                    <li>
                                        <div className="icon"><span className="icon-location"></span></div>
                                        <p>Mtwapa, Mombasa</p>
                                    </li>
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
                        <img src="assets/images/resources/cta-one-img-1.png" alt="Discount Offers" />
                    </div>
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Get To Know Us</span>
                        </div>
                        <div className="section-title__title-box sec-title-animation animation-style2">
                            <h2 className="section-title__title title-animation">
                                Save Money with our<br/> Amazing Discounts
                            </h2>
                        </div>
                    </div>
                    <p className="cta-one__text">
                        Get amazing value for your money with our quality products <br/>
                        trusted by professionals for durability and safety.
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
