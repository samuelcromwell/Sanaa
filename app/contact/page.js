
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import ContactForm from '@/components/ContactForm';
export default function Home() {

    return (
        <>
        <Layout
            headerStyle={2}
            footerStyle={1}
            breadcrumbTitle="Contact Us"
            breadcrumbImage="/assets/images/resources/page-header-contact.png" // <-- your image path
        >        {/*Contact Two Start*/}
        <section className="contact-two">
            <div className="container">
                <div className="row">
                    {/*Contact Two Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <div className="contact-two__single">
                            <div className="contact-two__icon">
                                <span className="icon-call"></span>
                            </div>
                            <p>Contact Us</p>
                            <h3><Link href="tel:254717848262">0717848262</Link></h3>
                        </div>
                    </div>
                    {/*Contact Two Single End*/}
                    {/*Contact Two Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <div className="contact-two__single">
                            <div className="contact-two__icon">
                                <span className="icon-envelope"></span>
                            </div>
                            <p>Email Us</p>
                            <h3><Link href="mailto:sanaaelectricals3@gmail.com">sanaaelectricals3@gmail.com</Link></h3>
                        </div>
                    </div>
                    {/*Contact Two Single End*/}
                    {/*Contact Two Single Start*/}
                    <div className="col-xl-4 col-lg-4">
                        <div className="contact-two__single">
                            <div className="contact-two__icon">
                                <span className="icon-location"></span>
                            </div>
                            <p>Our Location</p>
                            <h3>Mtwapa, Mombasa</h3>
                        </div>
                    </div>
                    {/*Contact Two Single End*/}
                </div>
            </div>
        </section>
        {/*Contact Two End*/}

        {/*Contact Three Start*/}
        <section id="quote" className="contact-three">
            <div className="container">
                <div className="contact-three__inner">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="contact-three__left">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.3785896969525!2d39.7405043!3d-3.94209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184009bdaaecd919%3A0xc0267cae00519bcb!2sSanaa%20Electricals!5e0!3m2!1sen!2ske!4v1745321154868!5m2!1sen!2ske" 
                                    className="google-map__one" ></iframe>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact-three__right">
                                <h3 className="contact-three__form-title">Get A Free Quote</h3>
                                <ContactForm />
                                
                                <p className="ajax-response mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Contact Three End*/}


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
                            <Link href="#" className="cta-one__btn thm-btn">Get In Touch</Link>
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