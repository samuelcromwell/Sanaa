import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle, breadcrumbImage }) {
    return (
        <>
            <section className="page-header">
                <div className="page-header__shape-1">
                    <img src="assets/images/shapes/page-header-shape-1.png" alt="" />
                </div>
                <div className="container">
                    <div className="page-header__inner">
                        <div className="page-header__img-1">
                            <img src={breadcrumbImage} alt={breadcrumbTitle} />
                        </div>
                        <h3>{breadcrumbTitle}</h3>
                        <div className="thm-breadcrumb__inner">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><Link href="/">Home</Link></li>
                                <li><span className="icon-angle-right"></span></li>
                                <li>{breadcrumbTitle}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
