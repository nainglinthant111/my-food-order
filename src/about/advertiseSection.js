function AdvertiseSection() {
    return (
        <div className="advertiseSection row p-5">
            <div className="col-6 px-5">
                <h1>A little information for our valuable guest</h1>
                <small>
                    At place, we believe that dining is not just about food, but
                    also about the overall experience. Our staff, renowned for
                    their warmth and dedication, strives to make every visit an
                    unforgettable event.
                </small>
                <div className="row mt-4">
                    <div className="col-5 contentBox mb-2 me-2">
                        <div className="text-center">
                            <h1>3</h1>
                            <small>Location</small>
                        </div>
                    </div>
                    <div className="col-5 contentBox mb-2 ms-2">
                        <div className="text-center">
                            <h1>1999</h1>
                            <small>Founded</small>
                        </div>
                    </div>
                    <div className="col-5 contentBox mt-2 me-2">
                        <div className="text-center">
                            <h1>
                                65<sup>+</sup>
                            </h1>
                            <small>Staff Menber</small>
                        </div>
                    </div>
                    <div className="col-5 contentBox mt-2 ms-2">
                        <div className="text-center">
                            <h1>100%</h1>
                            <small>Satisfied Customers</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 content2">
                <img
                    src="../images/advertise_image.png"
                    alt="png"
                    className="advertiseImage"
                />
            </div>
        </div>
    );
}

export default AdvertiseSection;
