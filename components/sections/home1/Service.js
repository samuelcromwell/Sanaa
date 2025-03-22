import Link from "next/link"
export default function Service() {
    return (
        <>
        {/*Services One Start */}
        <section className="services-one">
            <div className="container">
                <div className="services-one__inner">
                    <ul className="services-one__service-list list-unstyled">
                        <li className="wow fadeInLeft" data-wow-delay="100ms">
                            <div className="services-one__single">
                                <div className="services-one__icon">
                                    <span className="icon-affordable-price"></span>
                                </div>
                                <h3 className="services-one__title"><Link href="pricing">Affordable Price</Link></h3>
                                <p className="services-one__text">We maintain a competitive pricing strategy, ensuring <br/>that you get top-quality electrical products and services at an affordable price. </p>
                            </div>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay="200ms">
                            <div className="services-one__single">
                                <div className="services-one__icon">
                                    <span className="icon-setting"></span>
                                </div>
                                <h3 className="services-one__title"><Link href="about">100% Guarantee</Link></h3>
                                <p className="services-one__text">We offer a 100% guarantee, ensuring that you are completely satisfied with <br/>every purchase and service we provide. Your satisfaction is our top priority </p>
                            </div>
                        </li>
                        <li className="wow fadeInRight" data-wow-delay="300ms">
                            <div className="services-one__single">
                                <div className="services-one__icon">
                                    <span className="icon-services"></span>
                                </div>
                                <h3 className="services-one__title"><Link href="contact">24/7 Our Service</Link></h3>
                                <p className="services-one__text">Our team is available around the clock to help with any urgent electrical services or inquiries. <br/>Whether it’s an emergency or a regular request, we’re here for you </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
       {/*Services One End */}
    
        </>
    )
}
