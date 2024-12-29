import React from "react";
import RoundedButton from "../common/buttonContent";
function AboutContent(props) {
    return (
        <>
            <div className="aboutContent">
                <div className="row">
                    <div className="col-6 aboutSection">
                        <img
                            className="aboutSectionImage"
                            src="../images/about_image1.png"
                            alt="svg"
                        />
                        <div className="row blackBox">
                            <h4 className="text-start">Come and visit us</h4>
                            <a
                                href="https://www.facebook.com"
                                className="text-start d-flex mt-3"
                            >
                                <img
                                    className="me-2"
                                    src="../images/phone_logo.svg"
                                    alt="svg"
                                />
                                <div>(414) 857 - 0107</div>
                            </a>
                            <a
                                href="https://www.facebook.com"
                                className="text-start d-flex mt-2"
                            >
                                <img
                                    className="me-2"
                                    src="../images/phone_logo.svg"
                                    alt="svg"
                                />
                                <div>happytummy@restaurant.com</div>
                            </a>
                            <a
                                href="https://www.facebook.com"
                                className="text-start d-flex mt-2"
                            >
                                <img
                                    className="me-2"
                                    src="../images/phone_logo.svg"
                                    alt="svg"
                                />
                                <div>
                                    837 W. Marshall Lane Marshalltown, IA 50158,
                                    Los Angeles
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-6 ps-5 pt-4">
                        <div className="ms-5 mt-4">
                            <h1>We provide healthy food for your family.</h1>
                            <b className="mt-3">
                                Our story began with a vision to create a unique
                                dining experience that merges fine dining,
                                exceptional service, and a vibrant ambiance.
                                Rooted in city's rich culinary culture, we aim
                                to honor our local roots while infusing a global
                                palate.
                            </b>
                            <div className="mt-3">
                                <small>
                                    At place, we believe that dining is not just
                                    about food, but also about the overall
                                    experience. Our staff, renowned for their
                                    warmth and dedication, strives to make every
                                    visit an unforgettable event.
                                </small>
                            </div>
                            <div
                                className="mt-3"
                                onClick={() => {
                                    window.location.href = "/about";
                                }}
                            >
                                {props.button === "Ok" && (
                                    <RoundedButton
                                        color="gray"
                                        text="More About Us"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutContent;
