import Link from "next/link"
export default function About() {
    return (
        <>
        
        {/*About One Start */}
        <section className="about-one">
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
                                            <img src="assets/images/resources/meter-box.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="about-one__cirtified">
                                        <div className="icon">
                                            <span className="icon-certified"></span>
                                        </div>
                                        <h3>We are certified<br/> electrical shop</h3>
                                    </div>
                                    <div className="about-one__img-box-2">
                                        <div className="about-one__img-2">
                                            <img src="assets/images/resources/fundi.png" alt=""/>
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
                                    <h2 className="section-title__title title-animation">Your Trusted Electrical Partner in Mtwapa
                                    </h2>
                                </div>
                            </div>
                            <p className="about-one__text-1">At Sanaa Electricals, we are committed to providing the highest-quality electrical solutions for homes, businesses, and industries in Mtwapa. With a team of experienced electricians and a vast selection of electrical products, we aim to meet your needs with precision, reliability, and excellent customer service</p>
                            <p className="about-one__text-2">Whether you need to purchase electrical supplies, have a new system installed, or require maintenance and repairs, we’ve got you covered. </p>
                            <div className="about-one__btn-box">
                                <Link href="about" className="about-one__btn thm-btn">About Us More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End */}
        
        </>
    )
}
