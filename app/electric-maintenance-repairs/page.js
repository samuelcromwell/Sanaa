
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Electrical Maintenance & Repairs">
        {/*Service Details Start*/}
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="service-details__left">
                            <div className="service-details__img">
                                <img src="assets/images/services/repair.png" alt=""/>
                            </div>
                            <h3 className="service-details__title-1">Electrical Maintenance & Repairs</h3>
                            <p className="service-details__text-1">
                                We provide professional electrical maintenance and repair services for homes, offices and commercial spaces. Our team is skilled in identifying faults, ensuring safe wiring and restoring power with minimal disruption. We prioritize safety and efficiency in every job we handle.
                            </p>
                            <p className="service-details__text-2">
                                Whether it’s fixing a faulty circuit, replacing worn-out components, or performing routine inspections, our technicians are equipped with the tools and expertise to deliver reliable solutions. We work according to industry standards to ensure your electrical systems are running smoothly and safely. Let us help you prevent issues before they become costly problems.
                            </p>
                            <ul className="service-details__points-list list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-arrow-right"></span>
                                    </div>
                                    <p>Expert troubleshooting and repair of faulty electrical systems and components</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-arrow-right"></span>
                                    </div>
                                    <p>Routine maintenance to extend equipment lifespan and prevent future issues</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-arrow-right"></span>
                                    </div>
                                    <p>Inspection and testing to ensure full compliance with safety regulations</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-arrow-right"></span>
                                    </div>
                                    <p>Quick response to emergencies and minimal downtime during repairs</p>
                                </li>
                            </ul>
                            <div className="service-details__img-box">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="service-details__img-box-single">
                                            <div className="service-details__img-box-img">
                                                <img src="assets/images/services/good-quality.png"
                                                    alt=""/>
                                            </div>
                                            <div className="service-details__img-box-content">
                                                <div className="service-details__img-box-content-icon-and-title">
                                                    <div className="service-details__img-box-content-icon">
                                                        <span className="icon-lamp"></span>
                                                    </div>
                                                    <h3 className="service-details__img-box-content-title">Good Quality Work</h3>
                                                </div>
                                                <p className="service-details__img-box-content-text">
                                                    We pride ourselves on delivering top-tier electrical work with precision and care. Every project is completed to the highest standard, using quality materials and expert techniques to ensure long-lasting and reliable results.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="service-details__img-box-single">
                                            <div className="service-details__img-box-img">
                                                <img src="assets/images/services/happy-customer.png"
                                                    alt=""/>
                                            </div>
                                            <div className="service-details__img-box-content">
                                                <div className="service-details__img-box-content-icon-and-title">
                                                    <div className="service-details__img-box-content-icon">
                                                        <span className="icon-chirger"></span>
                                                    </div>
                                                    <h3 className="service-details__img-box-content-title">100% Customer Satisfaction</h3>
                                                </div>
                                                <p className="service-details__img-box-content-text">
                                                    Our commitment to customer satisfaction means we don't leave until the job is done right. We listen to your needs, communicate clearly, and go the extra mile to ensure every client is fully satisfied with our service and support.
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
                                <h3 className="service-details__services-title">Our Service</h3>
                                <ul className="service-details__services-list list-unstyled">
                                    <li className="active">
                                        <Link href="electric-maintenance-repairs ">Electrical Maintenance & Repairs<span
                                                className="icon-arrow-right"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="short-circuit-repair">Short circuit repair<span
                                                className="icon-arrow-right"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="commercial-services">Commercial services<span
                                                className="icon-arrow-right"></span></Link>
                                    </li>
                                    {/* <li>
                                        <Link href="installing-ceiling-fan">installing a ceiling fan<span
                                                className="icon-arrow-right"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="lighting-fixtures">Lighting & Fixtures<span
                                                className="icon-arrow-right"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="maintenance-service">Maintenance Service<span
                                                className="icon-arrow-right"></span></Link>
                                    </li> */}
                                </ul>
                            </div>
                            <div className="project-details__get-started">
                                <h3 className="project-details__get-started-title">Reach Out Today</h3>
                                    <p className="project-details__get-started-text">
                                        Have an electrical issue or project in mind? Contact us today to schedule a service, request a quote, or get expert advice. We’re here to help you with reliable solutions every step of the way.
                                    </p>
                                <ul className="project-details__get-started-points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-call"></span>
                                        </div>
                                        <p><Link href="tel:254717848262">+254 717 848 262</Link></p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-envelope"></span>
                                        </div>
                                        <p><Link href="mailto:sanaaelectricals3@gmail.com">sanaaelectricals3@gmail.com</Link></p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-location"></span>
                                        </div>
                                        <p>Mtwapa, Mombasa,<br/> </p>
                                    </li>
                                </ul>
                                <div className="project-details__get-started-btn-box">
                                    <Link href="/contact" className="project-details__get-started-btn thm-btn">get in touch</Link>
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
                
        
        </Layout>
        </>
    )
}