import Link from "next/link"
export default function Servicetwo() {
    return (
        <>
        {/*Services Two Start */}
        <section className="services-two">
            <div className="services-two__shape-1 img-bounce">
                <img src="assets/images/shapes/services-two-shape-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Our Services</span>
                    </div>
                    <div className="section-title__title-box sec-title-animation animation-style1">
                        <h2 className="section-title__title title-animation">We offer Solutions to Your<br/> Modern Electrical Problems
                        </h2>
                    </div>
                </div>
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
        {/*Services Two End */}
    
        </>
    )
}
