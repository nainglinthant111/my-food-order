import RoundedButton from "../common/buttonContent";

function ContactApp() {
    return (
        <div className="contentSection">
            <div className="text-center content">
                <p>Contact Us</p>
                <small>
                    We consider all the drivers of change gives you the
                    components
                    <br /> you need to change to create a truly happens.
                </small>
            </div>
            <div className="content4">
                <div className="content1"></div>
                <div className="content2"></div>
            </div>
            <div className="content3">
                <div className="card px-3 py-5">
                    <div className="row">
                        <div className="col-6">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Name"
                            />
                        </div>
                        <div className="col-6">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Your Email"
                            />
                        </div>
                        <div className="col-12 mt-2">
                            <label>Subject</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Subject"
                            />
                        </div>
                        <div className="col-12 mt-2">
                            <label>Description</label>
                            <textarea
                                className="form-control"
                                placeholder="Enter Your Message"
                                row="5"
                            ></textarea>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="d-flex justify-content-center">
                            <RoundedButton
                                color="red"
                                text="Send"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mb-5">
                <div className="row content5">
                    <div className="col-4">
                        <label>Call Us:</label>
                        <h5 className="text-danger mt-2">+1-234-567-8900</h5>
                    </div>
                    <div className="col-4">
                        <label>Hours:</label>
                        <div className="mt-2">
                            <small>
                                Mon-Fri: 11am - 8pm Sat,
                                <br /> Sun: 9am - 10pm
                            </small>
                        </div>
                    </div>
                    <div className="col-4">
                        <label>Our Location:</label>
                        <div className="mt-2">
                            <small>
                                123 Bridge Street
                                <br />
                                Nowhere Land,
                                <br /> LA 12345 United States
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactApp;
