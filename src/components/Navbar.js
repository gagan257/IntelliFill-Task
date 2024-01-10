import React from "react";
import image from "../Images/profile.png";
import logo from "../Images/logo.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 text-center">
        <div className="container d-flex">
          <a className="navbar-brand " href="/">
            <img src={logo} alt="" className="logo-img" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex">
              <li className="nav-item m-auto">
                <a className="nav-link text-primary home" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item m-auto">
                <a className="nav-link result" href="/">
                  Result
                </a>
              </li>
              <li className="nav-item m-auto">
                <a className="nav-link faq" href="/">
                  FAQ
                </a>
              </li>
              <li className="nav-item m-auto">
                <a className="nav-link about-us" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item m-auto">
                <a className="nav-link contact-us" href="/">
                  Contact Us
                </a>
              </li>
              <li className=" nav-item form m-auto">
                <input
                  className="form-control rounded rounded-pill"
                  type="search"
                  placeholder="🔍 Search exams here"
                  aria-label="Search"
                />
              </li>
              <li className="nav-item m-auto">
                <a className="nav-link" href="/">
                  <i className="fa-regular fa-bell text-primary bell-icon"></i>
                </a>
              </li>
              <li className="nav-item m-auto">
                <a className="nav-link" href="/">
                  <img src={image} alt="" className="profile-image mb-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
