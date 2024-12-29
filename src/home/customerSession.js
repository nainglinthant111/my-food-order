function CustomerSession(props) {
    console.log(props.customerCard);
    var customerCard = props.customerCard;
    return (
        <div className="row p-5">
            {customerCard.map((card, index) => (
                <div
                    className="col-4 mb-4"
                    key={index}
                >
                    <div className="card pt-4 customerInfo">
                        <div className="card-body">
                            <h4 className="card-title">“ {card.title} ”</h4>
                            <p className="card-text mt-3">{card.description}</p>
                            <hr />
                            <div className="row d-flex my-2">
                                <img
                                    className="col-3 me-3"
                                    src={card.image}
                                    alt="png"
                                />
                                <div className="col-auto">
                                    <b>{card.name}</b>
                                    <br />
                                    <small>{card.address}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CustomerSession;
