import React from "react";
import RoundedButton from "../common/buttonContent";
function BlogSection(props) {
    const card = props.blogCard[0];
    const restCards = props.blogCard.slice(1);
    return (
        <div className="row p-5 blogSection">
            <div className="row">
                <div className="col-6 ">
                    <h1>Our Blog & Articles</h1>
                </div>
                <div className="col-6 d-flex justify-content-end py-1">
                    <div
                        onClick={() => {
                            window.location.href = "/blog";
                        }}
                    >
                        <RoundedButton
                            color="red"
                            text="Read All Articles"
                        />
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="card border-0 big">
                        <div className="card-body p-0">
                            <img
                                src={card.image}
                                alt="png"
                            />
                            <div className="m-4">
                                <small className="mt-3">{card.date}</small>
                                <br />
                                <b className="mt-3">{card.description1}</b>
                                <br />
                                <small className="mt-3">
                                    {card.description2}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="row grap-2 ">
                        {restCards.map((card, index) => (
                            <div
                                className="col-6"
                                key={index}
                            >
                                <div className="card border-0 mb-3">
                                    <div className="card-body p-0">
                                        <img
                                            src={card.image}
                                            alt="png"
                                        />
                                        <div className="m-4">
                                            <small className="mt-3">
                                                {card.date}
                                            </small>
                                            <br />
                                            <b className="mt-3">
                                                {card.description1}
                                            </b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogSection;
