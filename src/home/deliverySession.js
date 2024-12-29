function DeliverySession() {
    return (
        <>
            <div className="row deliverySession p-5">
                <div className="col-6">
                    <img
                        className="deliveryImage"
                        src="../images/delivery_image.png"
                        alt="svg"
                    />
                </div>
                <div className="col-6 p-5">
                    <div className="mt-5 me-5 pt-5 pe-5">
                        <div className="pe-5 me-5">
                            <h1>Fastest Food Delivery in City</h1>
                            <small>
                                Our visual designer lets you quickly and of drag
                                a down your way to customapps for both keep
                                desktop.
                            </small>
                            <div className="d-flex align-items-center mt-5">
                                <img
                                    className="deliveryIcon me-3"
                                    src="../images/delivery_icon1.svg"
                                    alt="svg"
                                />
                                <text>Delivery within 30 minutes</text>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <img
                                    className="deliveryIcon me-3"
                                    src="../images/delivery_icon2.svg"
                                    alt="svg"
                                />
                                <text>Best Offer & Prices</text>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                                <img
                                    className="deliveryIcon me-3"
                                    src="../images/delivery_icon3.svg"
                                    alt="svg"
                                />
                                <text>Online Services Available</text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DeliverySession;
