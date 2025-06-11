import CounterUp from "@/components/elements/CounterUp"
export default function Funfacts() {
    return (
        <>

        {/*Counter One Start*/}
        <section className="counter-one">
            <div className="container">
                <div className="counter-one__inner">
                    <div className="row">
                        {/*Counter One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="counter-one__single counter-one__single-1">
                                <div className="counter-one__icon">
                                    <span className="icon-hands-on-experience"></span>
                                </div>
                                <div className="counter-one__count-box">
                                    <CounterUp end={3} />
                                    <span>+</span>
                                </div>
                                <p className="counter-one__text">Years of experience</p>
                            </div>
                        </div>
                        {/*Counter One Single End*/}
                        {/*Counter One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="counter-one__single">
                                <div className="counter-one__icon">
                                    <span className="icon-technician-1"></span>
                                </div>
                                <div className="counter-one__count-box">
                                <CounterUp end={10} />
                                    <span>+</span>
                                </div>
                                <p className="counter-one__text">expert team members</p>
                            </div>
                        </div>
                        {/*Counter One Single End*/}
                        {/*Counter One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="counter-one__single">
                                <div className="counter-one__icon">
                                    <span className="icon-project-complete"></span>
                                </div>
                                <div className="counter-one__count-box">
                                <CounterUp end={300} />
                                    <span>+</span>
                                </div>
                                <p className="counter-one__text">Projects Completed</p>
                            </div>
                        </div>
                        {/*Counter One Single End*/}
                        {/*Counter One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms">
                            <div className="counter-one__single">
                                <div className="counter-one__icon">
                                    <span className="icon-happy-customer"></span>
                                </div>
                                <div className="counter-one__count-box">
                                <CounterUp end={500} />
                                    <span>+</span>
                                </div>
                                <p className="counter-one__text">Happy customers</p>
                            </div>
                        </div>
                        {/*Counter One Single End*/}
                    </div>
                </div>
            </div>
        </section>
        {/*Counter One End*/}
    
            

        </>
    )
}
