import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./common/navBar";
import PageFooter from "./common/footer";
import Home from "./home/home";
import About from "./about/about";
import MaintenancePage from "./maintenance";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookTable from "./home/bookTable";

function App() {
    const isMaintenanceMode = false;
    console.log("isMaintenanceMode", isMaintenanceMode);

    return (
        <Router>
            <div
                className={`header sticky-top py-2 ${
                    isMaintenanceMode ? "d-none" : ""
                }`}
            >
                <NavBar />
            </div>
            <div className="container-xxl">
                <div className="content-body">
                    <Routes>
                        {isMaintenanceMode ? (
                            <Route
                                path="*"
                                element={<MaintenancePage />}
                            />
                        ) : (
                            <>
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
                                <Route
                                    path="/bookTable"
                                    element={<BookTable />}
                                />
                            </>
                        )}
                    </Routes>
                </div>
                <div className={`footer ${isMaintenanceMode ? "d-none" : ""}`}>
                    <PageFooter />
                </div>
            </div>
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
