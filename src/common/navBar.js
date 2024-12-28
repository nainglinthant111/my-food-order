import React from "react";
import RoundedButton from "./buttonContent";
const navButton = {
    color: "gray",
    text: "Book A Table",
};

function NavBar() {
    return (
        <div className="row titleBar">
            <div className="col-4">
                <img
                    className="justify-content-center"
                    src="../images/logo.svg"
                    alt="svg"
                />
            </div>
            <div className="col-6 ">
                <a
                    className="nav-link"
                    href="/home"
                >
                    Home
                </a>
                <a
                    className="nav-link"
                    href="/about"
                >
                    About
                </a>
                <a
                    className="nav-link"
                    href="/menu"
                >
                    Menu
                </a>
                <a
                    className="nav-link"
                    href="/pages"
                >
                    Pages
                </a>
                <a
                    className="nav-link"
                    href="/contact"
                >
                    Contact
                </a>
            </div>
            <div className="col-2">
                <RoundedButton
                    color={navButton.color}
                    text={navButton.text}
                />
            </div>
        </div>
    );
}
export default NavBar;
