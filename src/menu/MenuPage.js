import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import RoundedButton from "../common/buttonContent";

const orderMenu = [
    {
        url: "",
        type: "Breakfast",
        title: "Fried Egg",
        price: "7000",
        description:
            "Made with eggs, lettuce, salt, oil, and other ingredients.",
    },
    {
        url: "",
        type: "Breakfast",
        title: "Pancakes",
        price: "8000",
        description: "Fluffy pancakes served with maple syrup.",
    },
    {
        url: "",
        type: "Breakfast",
        title: "Omelette",
        price: "7500",
        description: "A classic omelette made with cheese, ham, and veggies.",
    },
    {
        url: "",
        type: "Breakfast",
        title: "French Toast",
        price: "8500",
        description: "Golden-brown toast topped with powdered sugar and syrup.",
    },
    {
        url: "",
        type: "Desserts",
        title: "Chocolate Cake",
        price: "12000",
        description: "Rich and moist chocolate cake with chocolate frosting.",
    },
    {
        url: "",
        type: "Desserts",
        title: "Ice Cream Sundae",
        price: "10000",
        description: "Vanilla ice cream topped with chocolate sauce and nuts.",
    },
    {
        url: "",
        type: "Desserts",
        title: "Cheesecake",
        price: "11000",
        description: "Creamy cheesecake with a graham cracker crust.",
    },
    {
        url: "",
        type: "Desserts",
        title: "Apple Pie",
        price: "9500",
        description: "Classic apple pie with a flaky crust and sweet filling.",
    },
    {
        url: "",
        type: "Desserts",
        title: "Brownies",
        price: "8000",
        description: "Fudgy brownies with a rich chocolate flavor.",
    },
    {
        url: "",
        type: "Drinks",
        title: "Coffee",
        price: "4000",
        description: "Freshly brewed coffee served hot.",
    },
    {
        url: "",
        type: "Drinks",
        title: "Tea",
        price: "3500",
        description: "Hot tea available in green, black, or herbal varieties.",
    },
    {
        url: "",
        type: "Drinks",
        title: "Smoothie",
        price: "7000",
        description: "A blend of fresh fruits and yogurt.",
    },
    {
        url: "",
        type: "Drinks",
        title: "Milkshake",
        price: "7500",
        description:
            "Thick milkshake available in chocolate, vanilla, and strawberry.",
    },
    {
        url: "",
        type: "Drinks",
        title: "Soda",
        price: "2000",
        description: "Chilled carbonated soft drink.",
    },
    {
        url: "",
        type: "Main Dishes",
        title: "Grilled Chicken",
        price: "15000",
        description: "Juicy grilled chicken served with a side of vegetables.",
    },
    {
        url: "",
        type: "Main Dishes",
        title: "Beef Steak",
        price: "20000",
        description: "Tender beef steak cooked to perfection.",
    },
    {
        url: "",
        type: "Main Dishes",
        title: "Spaghetti Bolognese",
        price: "12000",
        description: "Classic spaghetti served with a rich meat sauce.",
    },
    {
        url: "",
        type: "Main Dishes",
        title: "Vegetarian Pizza",
        price: "14000",
        description: "Pizza topped with fresh vegetables and cheese.",
    },
    {
        url: "",
        type: "Main Dishes",
        title: "Grilled Salmon",
        price: "18000",
        description: "Fresh salmon grilled and served with lemon butter sauce.",
    },
    {
        url: "",
        type: "Breakfast",
        title: "Bagel with Cream Cheese",
        price: "6000",
        description: "Toasted bagel with a generous spread of cream cheese.",
    },
    {
        url: "",
        type: "Breakfast",
        title: "Granola Bowl",
        price: "9000",
        description: "Crunchy granola served with yogurt and fresh fruits.",
    },
    {
        url: "",
        type: "Desserts",
        title: "Tiramisu",
        price: "13000",
        description:
            "Classic Italian dessert made with coffee-soaked ladyfingers.",
    },
    {
        url: "",
        type: "Desserts",
        title: "Mousse",
        price: "12000",
        description: "Light and creamy chocolate mousse.",
    },
    {
        url: "",
        type: "Drinks",
        title: "Latte",
        price: "5000",
        description: "Espresso with steamed milk and a layer of foam.",
    },
    {
        url: "",
        type: "Drinks",
        title: "Iced Tea",
        price: "4500",
        description: "Refreshing iced tea with a hint of lemon.",
    },
    {
        url: "",
        type: "Main Dishes",
        title: "Chicken Curry",
        price: "16000",
        description: "Spicy chicken curry served with steamed rice.",
    },
    {
        url: "",
        type: "Main Dishes",
        title: "Seafood Pasta",
        price: "19000",
        description: "Pasta with a medley of fresh seafood in a creamy sauce.",
    },
    {
        url: "",
        type: "Breakfast",
        title: "Avocado Toast",
        price: "10000",
        description: "Toasted bread topped with smashed avocado and seasoning.",
    },
    {
        url: "",
        type: "Desserts",
        title: "Fruit Tart",
        price: "11000",
        description:
            "Buttery tart filled with custard and topped with fresh fruits.",
    },
    {
        url: "",
        type: "Drinks",
        title: "Hot Chocolate",
        price: "6000",
        description: "Rich hot chocolate with whipped cream on top.",
    },
    {
        url: "",
        type: "Main Dishes",
        title: "Roast Beef",
        price: "17000",
        description: "Tender roast beef served with mashed potatoes and gravy.",
    },
    // Add more items if needed
];

function OurMenu() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get("type");

    const [filteredMenu, setFilteredMenu] = useState(orderMenu);

    useEffect(() => {
        if (type) {
            BtnClick(type);
        } else {
            BtnClick("All");
        }
    }, [type]);

    const BtnClick = (category) => {
        if (category === "All") {
            setFilteredMenu(orderMenu);
        } else {
            setFilteredMenu(orderMenu.filter((item) => item.type === category));
        }
    };

    return (
        <div className="row">
            <h1 className="text-center">Our Menu</h1>
            <small className="text-center">
                We consider all the drivers of change gives you the components
                <br />
                you need to change to create a truly happens.
            </small>
            <div className="mt-3 col-12 d-flex justify-content-center p-5">
                <div
                    className="mx-2"
                    onClick={() => BtnClick("All")}
                >
                    <RoundedButton
                        color="red"
                        text="All"
                    />
                </div>
                <div
                    className="mx-2"
                    onClick={() => BtnClick("Breakfast")}
                >
                    <RoundedButton
                        color="gray"
                        text="Breakfast"
                    />
                </div>
                <div
                    className="mx-2"
                    onClick={() => BtnClick("Main Dishes")}
                >
                    <RoundedButton
                        color="gray"
                        text="Main Dishes"
                    />
                </div>
                <div
                    className="mx-2"
                    onClick={() => BtnClick("Drinks")}
                >
                    <RoundedButton
                        color="gray"
                        text="Drinks"
                    />
                </div>
                <div
                    className="mx-2"
                    onClick={() => BtnClick("Desserts")}
                >
                    <RoundedButton
                        color="gray"
                        text="Desserts"
                    />
                </div>
            </div>
            <MenuCard card={filteredMenu} />
            <div className="row orderApp">
                <div className="col-4 p-5">
                    <p>You can order through apps</p>
                    <small>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        enim bibendum sed et aliquet aliquet risus tempor
                        semper.
                    </small>
                </div>
                <div className="col-8 p-5">
                    <img
                        src="../images/orderapp_logo.png"
                        alt="png"
                    />
                </div>
            </div>
        </div>
    );
}

// MenuCard component for rendering the menu items
function MenuCard({ card }) {
    return (
        <div className="row pragCard p-5">
            {card.map((item, index) => (
                <div
                    className="col-3"
                    key={index}
                >
                    <div className="card mx-1 my-2">
                        <img
                            src="../images/blog_image1.png"
                            className="card-img-top"
                            alt={item.title}
                        />
                        <div className="card-body text-center">
                            <p className="card-text text-danger">
                                {item.price} Kyats
                            </p>
                            <h5 className="card-title">{item.title}</h5>
                            <small className="card-text">
                                {item.description}
                            </small>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default OurMenu;
