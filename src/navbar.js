import React from "react";
import PropTypes from "prop-types";
import "./navbar.css";
// import { a } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      {/* {`this syntax is used to define templet ${variable name} litrals`} */}
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/about">
                  {props.about}
                </a>
              </li>
            </ul>
            {/* <div className="Themes">
              <label
                htmlFor="theme"
                style={{
                  width: "9em",
                  color: props.mode === "light" ? "black" : "white",
                }}
              >
                Color Themes
              </label>
              <button type="button" className="theme" id="col1"></button>
              <button type="button" className="theme" id="col2"></button>
              <button type="button" className="theme" id="col3"></button>
            </div> */}
            <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input "
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            aria-checked
            onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {`Enable ${props.mode === "light" ? "dark" : "light"} Mode`}
          </label>
        </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string };
