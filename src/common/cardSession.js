function MenuTypeCard(props) {
    var cathoCard = props.card;
    return (
        <div className="row px-5 pb-5">
            {cathoCard.map((card, index) => (
                <div
                    className="col-3 mb-4"
                    key={index}
                >
                    <div className="card p-4 categoryCard">
                        <div className="d-flex justify-content-center">
                            <img
                                src={card.cardLogo}
                                className="card-img-top categoryImage"
                                alt={card.cardTitle}
                            />
                        </div>
                        <div className="card-body text-center">
                            <h2 className="card-title mt-2">
                                {card.cardTitle}
                            </h2>
                            <p className="card-text">{card.cardDescription}</p>
                            <a
                                href={card.cardLink}
                                className=" text-center my-4"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Explore Menu
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


export default MenuTypeCard;
