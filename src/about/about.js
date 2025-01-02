import AboutContent from "./abount_content";
import CustomerSession from "../home/customerSession";
import AdvertiseSection from "./advertiseSection";
const customerCard = [
    {
        title: "The best restaurant",
        description:
            "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
        image: "../images/customer1.png",
        name: "Sophire Robson",
        address: "Los Angeles, CA",
    },
    {
        title: "Simply delicious",
        description:
            "LPlace exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
        image: "../images/customer2.png",
        name: "Matt Cannon",
        address: "San Diego, CA",
    },
    {
        title: "One of a kind restaurant",
        description:
            "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
        image: "../images/customer3.png",
        name: "Andy Smith",
        address: "San Francisco, CA",
    },
];
function About() {
    return (
        <>
            <AboutContent />
            <div className="playerContent">
                <img
                    src="../images/player_image.png"
                    alt="png"
                    className="playerBg"
                />
                <img
                    src="../images/media_image.png"
                    alt="png"
                    className="media"
                />
            </div>
            <div className="aboutMenu">
                <div className="row px-5">
                    <div className="col-4 px-3">
                        <div className="row">
                            <div className="col-2">
                                <img
                                    src="../images/aboutMenu_icon1.svg"
                                    alt="svg"
                                />
                            </div>
                            <div className="col-10">
                                <h5>Multi Cuisine</h5>
                                <small>
                                    In the new era of technology we look in the
                                    future with certainty life.
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 px-3">
                        <div className="row">
                            <div className="col-2">
                                <img
                                    src="../images/aboutMenu_icon2.svg"
                                    alt="svg"
                                />
                            </div>
                            <div className="col-10">
                                <h5>Easy To Order</h5>
                                <small>
                                    In the new era of technology we look in the
                                    future with certainty life.
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 px-3">
                        <div className="row">
                            <div className="col-2">
                                <img
                                    src="../images/aboutMenu_icon3.svg"
                                    alt="svg"
                                />
                            </div>
                            <div className="col-10">
                                <h5>Fast Delivery</h5>
                                <small>
                                    In the new era of technology we look in the
                                    future with certainty life.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <AdvertiseSection />
            </div>
            <div>
                <CustomerSession customerCard={customerCard} />
            </div>
        </>
    );
}

export default About;
