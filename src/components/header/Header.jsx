import React from "react";
import "./Header.scss";
import logo_devi from "./../../assets/logo_devi.png";
import { Link, useLocation } from "react-router-dom";
const Header = (props) => {
  const location = useLocation();
  return (
    <>
      <div>
        <header className="header">
          <>
            <div className="header-inner">
              <div className="container">
                <div className="inner">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-12">
                      <div className="logo">
                        <i className="fas fa-code">
                          {" "}
                          <img
                            style={{ width: "30px", height: "30px" }}
                            src={logo_devi}
                          />
                        </i>{" "}
                        Raj Rajeswar Devi Temple
                      </div>

                      <div className="mobile-nav"></div>
                    </div>
                    <div className="col-lg-7 col-md-9 col-12">
                      <div className="main-menu">
                        <nav className="navigation">
                          <ul className="nav menu">
                            <li
                              className={
                                location.pathname === "/home" ? "active" : ""
                              }
                            >
                              <Link to="/">
                                Home <i className="icofont-rounded-down"></i>
                              </Link>
                            </li>

                            <li
                              className={
                                location.pathname === "/about" ? "active" : ""
                              }
                            >
                              <Link to="/about">
                                About Us{" "}
                                <i className="icofont-rounded-down"></i>
                              </Link>
                            </li>
                            <li
                              className={
                                location.pathname === "/events" ? "active" : ""
                              }
                            >
                              <Link to="/events">
                                Events <i className="icofont-rounded-down"></i>
                              </Link>
                            </li>
                            <li
                              className={
                                location.pathname === "/services"
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link to="/services">
                                Services{" "}
                                <i className="icofont-rounded-down"></i>
                              </Link>
                            </li>
                            <li
                              className={
                                location.pathname === "/contact" ? "active" : ""
                              }
                            >
                              <Link to="/contact">
                                Contact Us{" "}
                                <i className="icofont-rounded-down"></i>
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </header>
      </div>
    </>
  );
};

export default Header;
