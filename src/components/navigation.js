import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { LogIn } from "./LogIn";
import { EthicalGen } from "./EthicalGen";
import { Search } from "./Search";
import { About } from "./About";
import { ForgotPass } from "./ForgotPass"; 
import { AnalysisPage } from "./AnalysisPage"; // Import the AnalysisPage component
import logo from "../assets/img/umbrella.png";
import searchIcon from "../assets/img/icon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Navigation() {
  return (
    <BrowserRouter>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav mx-auto">
                <Link className="nav-link" to="/">
                  About
                </Link>
                <Link className="nav-link" to="/EthicalGen">
                  Ethical Questions
                </Link>
                <Link className="nav-link" to="/LogIn">
                  Log In
                </Link>
                <Link className="nav-link" to="/Search">
                  <img
                    src={searchIcon}
                    alt="search"
                    style={{ maxWidth: "30px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <div>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/EthicalGen" element={<EthicalGen />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/ForgotPass" element={<ForgotPass />} />
            <Route path="/Analysis" element={<AnalysisPage />} /> {/* Add AnalysisPage route */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
