import React from "react";
import {Link} from "react-router-dom";
import FooterServiceNav from "./FooterServiceNav";
import serviceData from "../../components/services/services-one/ServicesOneData.json";

const Footer = () => {
    return (
        <>
            {/* footer Section Start */}
            <footer>
                {/* footer Top Section Start */}
                <div className="footer-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-wedget-one">
                                    <Link to="/">
                                        <img src={`/images/logo.png`} alt="Logo" />
                                    </Link>
                                    <p>
                                        Lorem ipsum dolor sit amet, nulla fermentum, mollis ac lectus
                                        nulla, vel neque, risus non nunc duis lectus, ac id porttitor
                                        vulputate donec sed.nulla fermentum, mollis ac lectus nulla, vel
                                        neque
                                    </p>
                                    <div className="footer-social-profile">
                                        <ul>
                                            <li>
                                                <a href="/#" aria-label="Facebook">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#" aria-label="Twitter">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#" aria-label="Pinterest">
                                                    <i className="fa fa-pinterest" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#" aria-label="Google Plus">
                                                    <i className="fa fa-google-plus" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#" aria-label="Vimeo">
                                                    <i className="fa fa-vimeo" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-widget-menu">
                                    <h2>Service links</h2>
                                    <ul>
                                        {
                                            serviceData.map((item) => (
                                                <FooterServiceNav
                                                    key={item.id}
                                                    data={item}
                                                />
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-widget-menu">
                                    <h2>Support links</h2>
                                    <ul>
                                        <li>
                                            <a href="/#">support link</a>
                                        </li>
                                        <li>
                                            <a href="/#">faq &amp; help center</a>
                                        </li>
                                        <li>
                                            <a href="/#">about us</a>
                                        </li>
                                        <li>
                                            <a href="/#">Create Account</a>
                                        </li>
                                        <li>
                                            <a href="/#">service and help</a>
                                        </li>
                                        <li>
                                            <a href="/#">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-wedget-four">
                                    <h2>contact us </h2>
                                    <div className="inner-box">
                                        <div className="inner-item">
                                            <div className="media">
                                                <div className="media-left">
                                                  <span className="icon">
                                                    <i className="fa fa-map-marker" />
                                                  </span>
                                                </div>
                                                <div className="media-body">
                                                  <span className="inner-text">
                                                    71 Pilgrim Avenue Chevy Chase, MD 20815
                                                  </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inner-item">
                                            <div className="media">
                                                <div className="media-left">
                                                  <span className="icon">
                                                    <i className="fa fa-envelope-o" />
                                                  </span>
                                                </div>
                                                <div className="media-body">
                                                  <span className="inner-text">
                                                    yourmail@gmail.com, info@securepress.com
                                                  </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inner-item">
                                            <div className="media">
                                                <div className="media-left">
                                                  <span className="icon">
                                                    <i className="fa fa-phone" />
                                                  </span>
                                                </div>
                                                <div className="media-body">
                                                  <span className="inner-text">
                                                    +880 256794, 24-2564687
                                                  </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer Top Section End */}
                {/* footer Bottom Section Start */}
                <div className="footer-bottom-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copy-right">
                                    <p>
                                        © Copyright 2026{" "}
                                        <span>
                  <a href="/#">themeearth,</a>
                </span>{" "}
                                        Designed by:<span> <a href="https://globaldigitalcare.pk">Global Digital Care</a> </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer Bottom Section End */}
            </footer>
            {/* footer Section End */}
        </>
    );
}

export default Footer;