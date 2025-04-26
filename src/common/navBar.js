import React, { useState, useEffect } from "react";
import RoundedButton from "./buttonContent";
import { useLocation } from "react-router-dom"; // For React Router

const navButton = {
    color: "gray",
    text: "Book A Table",
};

function NavBar() {
    const location = useLocation(); // Get the current URL path
    const [activePath, setActivePath] = useState("");

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location]);

    const links = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/menu", label: "Menu" },
        { path: "/pages", label: "Pages" },
        { path: "/contact", label: "Contact" },
    ];

    return (
        <div className="row titleBar">
            <div className="col-4">
                <img
                    className="justify-content-center"
                    src="../images/logo.svg"
                    alt="svg"
                />
            </div>
            <div className="col-6 d-flex align-items-center">
                {links.map((link) => (
                    <a
                        key={link.path}
                        className={`nav-link ${
                            activePath === link.path ? "active" : ""
                        }`}
                        href={link.path}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
            <div
                className="col-2 d-flex align-items-center"
                onClick={() => {
                    window.location.href = "/bookTable";
                }}
            >
                <RoundedButton
                    color={navButton.color}
                    text={navButton.text}
                />
            </div>
        </div>
    );
}

export default NavBar;
//comment