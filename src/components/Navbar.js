import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div className="d-flex">
              <div
                className="bg-success rounded mx-2"
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
                onClick={() => {
                  props.toggle2("success");
                }}
              ></div>
              <div
                className="bg-warning rounded mx-2"
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
                onClick={() => {
                  props.toggle2("warning");
                }}
              ></div>
              <div
                className="bg-danger rounded mx-2"
                style={{ width: "30px", height: "30px", cursor: "pointer" }}
                onClick={() => {
                  props.toggle2("danger");
                }}
              ></div>
            </div>
            <div className="container">
              <div
                className={`form-check form-switch text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggle}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  DarkMode
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "loru",
  aboutText: "awein",
};
