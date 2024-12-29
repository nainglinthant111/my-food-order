import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./common/navBar";
import PageFooter from "./common/footer";
import Home from "./home/home";
import About from "./about/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="container-xxl">
            <div className="header sticky-top py-2">
                <NavBar />
            </div>
            <div className="content-body">
                <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="/about"
                            element={<About />}
                        />
                        <Route
                            path="/menu"
                            element={<Home />}
                        />
                        <Route
                            path="/pages"
                            element={<Home />}
                        />
                        <Route
                            path="/contact"
                            element={<Home />}
                        />
                    </Routes>
                </Router>
            </div>
            <div className="footer">
                <PageFooter />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
