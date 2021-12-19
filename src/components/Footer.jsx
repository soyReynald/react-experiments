import React from "react";
import footerLogo from "../public/img/footer-logo.png";
import phoneIcon from "../public/img/phone-icon.png";

const Footer = () => {
    return (
        <footer className="footer-container footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer-copy">
                        <span>© 2020 Cientificos Del Software</span>
                    </div>
                    <div className="col-md-4 footer-logo">
                        <img src={footerLogo} alt="" />
                    </div>
                    <div className="col-md-4 footer-phone">
                        <img src={phoneIcon} alt="phone_icon" />
                        <span>(809) 235-5666</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
