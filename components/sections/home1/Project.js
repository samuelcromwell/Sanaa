import Link from "next/link"
export default function Project() {
    return (
    <> 
        {/*Project One Start*/}
        <section className="project-one">
            <div className="container">
                <div className="project-one__top">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Our Gallery</span>
                        </div>
                        <div className="section-title__title-box sec-title-animation animation-style2">
                            <h2 className="section-title__title title-animation">Your Brightest Choice <br/> In Repairs and Installations</h2>
                        </div>
                    </div>
                    <div className="project-one__btn-box">
                        <Link href="projects" className="project-one__btn thm-btn">all Gallery</Link>
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
                                    <h3 className="project-one__title"><Link href="##">snake light installation in a living room</Link></h3>
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
                                    <h3 className="project-one__title"><Link href="##">Snake lights and spotlights installed</Link></h3>
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
                                    <h3 className="project-one__title"><Link href="##">Gypsum roof and snake lights</Link></h3>
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
                                    <h3 className="project-one__title"><Link href="##">Wiring, Switch and Socket Installation in Bamburi
                                            </Link></h3>
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
                                    <h3 className="project-one__title"><Link href="##">Electrical installation on a construction site in Nyali</Link></h3>
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
                                    <h3 className="project-one__title"><Link href="##">Gypsum roof and light installation</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project One Single End*/}
                </div>
            </div>
        </section>
        {/*Project One End*/}
        
        </>
    )
}
