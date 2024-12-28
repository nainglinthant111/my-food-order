import React from "react";
function PageFooter() {
    return (
        <>
            <div className="row footerItem">
                <div className="col-4">
                    <img
                        src="../images/footer_logo.svg"
                        alt="svg"
                    />
                    <p className="mt-3">
                        In the new era of technology we look a in the future
                        with certainty and pride to for our company and.
                    </p>
                    <a
                        href="https://twitter.com"
                        className="me-3"
                    >
                        <img
                            src="../images/twitter_logo.svg"
                            alt="twitter"
                        />
                    </a>
                    <a
                        href="https://facebook.com"
                        className="me-3"
                    >
                        <img
                            src="../images/facebook_logo.svg"
                            alt="facebook"
                        />
                    </a>
                    <a
                        href="https://instagram.com"
                        className="me-3"
                    >
                        <img
                            src="../images/instagram_logo.svg"
                            alt="instagram"
                        />
                    </a>
                </div>
                <div className="col-4">
                    <div className="row">
                        <div className="col-6">
                            <h5>Pages</h5>
                            <a
                                href="/home"
                                className="row mt-4 ms-1"
                            >
                                Home
                            </a>
                            <a
                                href="/about"
                                className="row mt-2 ms-1"
                            >
                                About
                            </a>
                            <a
                                href="/menu"
                                className="row mt-2 ms-1"
                            >
                                Menu
                            </a>
                            <a
                                href="/pricing"
                                className="row mt-2 ms-1"
                            >
                                Pricing
                            </a>
                            <a
                                href="/blog"
                                className="row mt-2 ms-1"
                            >
                                Blog
                            </a>
                            <a
                                href="/contact"
                                className="row mt-2 ms-1"
                            >
                                Contact
                            </a>
                            <a
                                href="/delivery"
                                className="row mt-2 ms-1"
                            >
                                Delivery
                            </a>
                        </div>
                        <div className="col-6">
                            <h5>Utility Pages</h5>
                            <a
                                href="/"
                                className="row mt-4 ms-1"
                            >
                                Styleguide
                            </a>
                            <a
                                href="/"
                                className="row mt-2 ms-1"
                            >
                                Password Protected
                            </a>
                            <a
                                href="/menu"
                                className="row mt-2 ms-1"
                            >
                                Menu
                            </a>
                            <a
                                href="/"
                                className="row mt-2 ms-1"
                            >
                                404 Not Found
                            </a>
                            <a
                                href="/"
                                className="row mt-2 ms-1"
                            >
                                Licenses
                            </a>
                            <a
                                href="/"
                                className="row mt-2 ms-1"
                            >
                                Changelog
                            </a>
                            <a
                                href="/"
                                className="row mt-2 ms-1"
                            >
                                View More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <h5>Follow Us On Instagram</h5>
                    <div className="row mt-4">
                        <div className="col-6">
                            <img
                                className="footerImage"
                                src="../images/footer_image1.png"
                                alt="svg"
                            />
                        </div>
                        <div className="col-6">
                            <img
                                className="footerImage"
                                src="../images/footer_image2.png"
                                alt="svg"
                            />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-6">
                            <img
                                className="footerImage"
                                src="../images/footer_image3.png"
                                alt="svg"
                            />
                        </div>
                        <div className="col-6">
                            <img
                                className="footerImage"
                                src="../images/footer_image4.png"
                                alt="svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row mt-3 pb-5 d-flex justify-content-center copyRight">
                Copyright © 2024 Naing Lin Thant. All Rights Reserved
            </div>
        </>
    );
}

export default PageFooter;
