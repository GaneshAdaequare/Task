import React from "react";
import logo from "../assets/logo1.png";
import { NavLink } from "react-router-dom";
import Modal from "./Modal"
import Offcanvas from "./OffCanvas";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary m-0">
      <div className="container-fluid bg-primary">
        <span className="navbar-brand">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "50px", height: "50px", borderRadius: "30%" }}
          />
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        > <Offcanvas/>
          {/* <span className="navbar-toggler-icon off-canvas-collapse"></span> */}
        </button>

        <div className="collapse navbar-collapse off-canvas-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink to="/">
              <li className="nav-item">
                <span
                  className="nav-link active text-light"
                  aria-current="page"
                >
                  Home
                </span>
              </li>
            </NavLink>

            <NavLink to="/about">
              <li className="nav-item">
                <span className="nav-link text-light">About</span>
              </li>
            </NavLink>


            <NavLink to="/contact">
              <li className="nav-item">
                <span className="nav-link text-light">Contact Us</span>
              </li>
            </NavLink>
          </ul>
          <div className="d-flex gap-3">
            <NavLink to="/login">
              <button className="btn btn-outline-info btn-ls">
                <span className="nav-link text-white">Register</span>
              </button>
            </NavLink>
            <Modal/>
           

          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
