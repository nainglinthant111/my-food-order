import React from "react";
import RoundedButton from "../common/buttonContent";
function BookTable() {
    return (
        <div className="bookTableContent">
            <div className="content">
                <div className="content1 text-center pt-5">
                    <h1>Book A Table</h1>
                    <p>
                        We consider all the drivers of change gives you the
                        components
                        <br /> you need to change to create a truly happens.
                    </p>
                </div>
                <div className="content2">
                    <img
                        src="../images/table_bg_image.png"
                        alt="png"
                    />
                </div>
            </div>
            <div className="content3 card p-3">
                <div className="card-body row">
                    <div className="col-6">
                        <label className="mt-2">Date</label>
                        <input
                            type="date"
                            className="form-control"
                        />
                    </div>
                    <div className="col-6">
                        <label className="mt-2">Time</label>
                        <input
                            type="time"
                            className="form-control"
                        />
                    </div>
                    <div className="col-6">
                        <label className="mt-2">Name</label>
                        <input
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-6">
                        <label className="mt-2">Phone</label>
                        <input
                            type="tel"
                            className="form-control"
                        />
                    </div>
                    <div className="col-6">
                        <label className="mt-2">Email</label>
                        <input
                            type="email"
                            className="form-control"
                        />
                    </div>

                    <div className="col-6">
                        <label className="mt-2">Total Person</label>
                        <input
                            type="number"
                            className="form-control"
                        />
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-3">
                        <RoundedButton
                            color="red"
                            text="Book A Table"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookTable;
