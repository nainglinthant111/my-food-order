import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./common/navBar";
import PageFooter from "./common/footer";
import Home from "./home/home";

function App() {
    return (
        <div className="container-xxl">
            <div className="header sticky-top">
                <NavBar />
            </div>
            <div className="content-body">
                <Home />
            </div>
            <div className="footer">
                <PageFooter />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
