import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from '../images/logo.png';
import { Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Navbar() {
  const linkStyle = {
    color: "#FFFFFF",
  };

  const loginButtonStyle = {
    backgroundColor: "#FD5631",
    color: "#FFFFFF",
    textDecoration: "none",
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    email='null'?console.log("null"):console.log("not null");
<Navigate to="/login" />
  }
  let email = localStorage.getItem('email');

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{fontFamily:"Roboto-slab !important"}}>
        <Link className="navbar-brand font-italic pl-5" style={{ color: "#FFFFFF" }} to="/home">
          <img src={logo} alt="" width="100px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-solid fa-bars font-weight-bold mr-3 h6"></i>

        </button>
        <div className="collapse navbar-collapse pl-2" id="navbarNav">
          <ul className="navbar-nav ml-auto Roboto-slab">
            <li className="nav-item">
              <Link className="nav-link h5 mt-3" to="/home" style={linkStyle}>
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link h5 mt-3" to="/universities" style={linkStyle}>
                Past Papers <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link h5 mt-3" to="/aboutus" style={linkStyle}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link h5 mt-3" to="/contactus" style={linkStyle}>
                Contact Us <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link h5 mt-3 pr-3" to="/pricingplan" style={linkStyle}>
                Pricing <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link h5 mt-3" to="/reviews" style={linkStyle}>
                Reviews <span className="sr-only"></span>
              </Link>
            </li>
          

          </ul>
          {
            email === null ? (
              <>
                <Link
                  to="/login"
                  style={loginButtonStyle}
                  className="btn btn-sm mr-3 "
                  onClick={() => {}}
                >
                  Login
                </Link>
              
              </>
            ) : (
              <Link
                to="/login"
                style={loginButtonStyle}
                className="btn btn-sm mr-3 "
                onClick={handleLogout}
              >
                Logout
              </Link>
            )
            }
        </div>
      </nav>
    </div>
  );
}
