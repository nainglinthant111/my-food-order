import React from "react";
import RoundedButton from "../common/buttonContent";
function HeroSession() {
    return (
        <>
            <div className="heroSession">
                <img
                    src="../images/hero_content_background.png"
                    alt="svg"
                />
                <div className="heroContent">
                    <h1>
                        Best food for
                        <br />
                        your taste
                    </h1>
                    <p className="mt-5">
                        Discover delectable cuisine and unforgettable moments
                        <br /> in our welcoming, culinary haven.
                    </p>
                    <div className="row mt-5">
                        <div
                            className="col-6 d-flex justify-content-end"
                            onClick={() => {
                                window.location.href = "/bookTable";
                            }}
                        >
                            <RoundedButton
                                color="red"
                                text="Book A Table"
                            />
                        </div>
                        <div className="col-6 d-flex justify-content-start">
                            <RoundedButton
                                color="gray"
                                text="Explore Menu"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSession;
