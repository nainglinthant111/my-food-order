function ServiceSession(props) {
    console.log("serviceCard", props.serviceCard);
    var serviceCard = props.serviceCard;
    return (
        <>
            <div className="row p-5">
                {serviceCard.map((card, index) => (
                    <div 
                        className="col-3 my-3"
                        key={index}
                    >
                        <div className="card border-0">
                            <div className="d-flex justify-content-center">
                                <img
                                    src={card.image}
                                    className="card-img-top serviceImage"
                                    alt={card.cardTitle}
                                />
                            </div>
                            <div className="card-body px-0">
                                <h2 className="card-title mt-2">
                                    {card.title}
                                </h2>
                                <p className="card-text">{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default ServiceSession;
