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
          <ScrollLink to="recipes" spy={true} smooth={true} duration={500}>
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
          </ScrollLink>

          <ScrollLink
            to="aboutUs"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
          >
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
          </ScrollLink>

          <ScrollLink
            to="contactUs"
            spy={true}
            offset={-100}
            smooth={true}
            duration={500}
          >
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
          </ScrollLink>
        </span>
      </span>
    </div>
  );
};

export default Navbar;
