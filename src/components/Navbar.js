import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <span style={{ fontSize: "25px" }}>
        <LinkRouter to="/">
          {" "}
          <span style={{ fontSize: "25px" }}>
            <span style={{ color: "#e77063", fontWeight: 500 }}>NOSHI</span>{" "}
            <b>
              <span style={{ color: "#24465f", fontWeight: 700 }}>BOSHI</span>
            </b>
          </span>
        </LinkRouter>

        <span style={{ color: "#24465f", fontWeight: 500, fontSize: "20px" }}>
          <a href="/#recipes">
            <span
              className="nav-item"
              style={{
                marginLeft: "50px",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Menu
            </span>
          </a>

          <a href="/#aboutUs">
            <span
              className="nav-item"
              style={{
                marginLeft: "50px",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              About us
            </span>
          </a>

          <a href="/#contactUs">
            <span
              className="nav-item"
              style={{
                marginLeft: "50px",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Contact us
            </span>
          </a>
        </span>
      </span>
    </div>
  );
};

export default Navbar;
