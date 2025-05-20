'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu}></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu}>
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link href="/" onClick={handleMobileMenu} aria-label="logo image">
              <img src="assets/images/resources/logo-1.png" width="150" alt="Sanaa Electricals Logo" />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
              <ul className="main-menu__list">
                <li><Link href="/" onClick={handleMobileMenu}>Home</Link></li>
                <li><Link href="/about" onClick={handleMobileMenu}>About</Link></li>

                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}>
                  <Link href="/services" onClick={handleMobileMenu}>Services</Link>
                  <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                    <li><Link href="/services" onClick={handleMobileMenu}>Services</Link></li>
                    <li><Link href="/electric-maintenance-repairs" onClick={handleMobileMenu}>Electric Maintenance & Repairs</Link></li>
                    <li><Link href="/electrical-products-sales" onClick={handleMobileMenu}>Electrical Products Sales</Link></li>
                    <li><Link href="/electrical-installation-services" onClick={handleMobileMenu}>Electrical Installation Services</Link></li>
                  </ul>
                  <button className={isActive.key == 3 ? "expanded open" : ""} onClick={() => handleToggle(3)}>
                    <span className="fa fa-angle-right" />
                  </button>
                </li>

                <li><Link href="/contact" onClick={handleMobileMenu}>Contact</Link></li>
              </ul>
            </div>
          </div>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link href="mailto:sanaaelectricals3@gmail.com" onClick={handleMobileMenu}>
                sanaaelectricals3@gmail.com
              </Link>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <Link href="tel:254717848262" onClick={handleMobileMenu}>
                +254 717 848 262
              </Link>
            </li>
          </ul>

          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link href="#" onClick={handleMobileMenu} className="fab fa-twitter"></Link>
              <Link href="https://www.facebook.com/SanaaElectricals" onClick={handleMobileMenu} className="fab fa-facebook-square"></Link>
              <Link href="#" onClick={handleMobileMenu} className="fab fa-pinterest-p"></Link>
              <Link href="#" onClick={handleMobileMenu} className="fab fa-instagram"></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
