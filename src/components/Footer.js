import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useLocation } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "../css/Footer.css";
import insta from "../assets/insta/drawable-xxxhdpi/Image 1.png";
import facebook from "../assets/facebook/facebook.png";
import twitter from "../assets/twitter/twitter.png";

const Footer = () => {
  const location = useLocation();
  return (
    <div>
      <section className="Footer">
        <div className="container">
          <Row style={{ color: "#24465F" }}>
            <Col lg={4} sm={4} xs={4} style={{ textAlign: "left" }}>
              <h3 style={{ fontWeight: "500" }}>Quick Links</h3>
              <hr
                className="footerHr"
                style={{ height: "3px", opacity: "100%" }}
              />

              {location.pathname === "/" ? (
                <ScrollLink
                  to="landing"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <h5 className="nav-sub-item">Home</h5>
                </ScrollLink>
              ) : (
                <Link to="/">
                  <h5 className="nav-sub-item">Home</h5>
                </Link>
              )}

              {location.pathname === "/" ? (
                <ScrollLink
                  to="recipes"
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={500}
                >
                  <h5 className="nav-sub-item">Menu</h5>
                </ScrollLink>
              ) : (
                <Link to="/">
                  <h5 className="nav-sub-item">Menu</h5>
                </Link>
              )}

              {location.pathname === "/" ? (
                <ScrollLink
                  to="aboutUs"
                  spy={true}
                  smooth={true}
                  offset={-130}
                  duration={500}
                >
                  <h5 className="nav-sub-item">About us</h5>
                </ScrollLink>
              ) : (
                <Link to="/">
                  <h5 className="nav-sub-item">About us</h5>
                </Link>
              )}

              <h5 className="nav-sub-item ">FAQs</h5>
            </Col>
            <Col className="reachOut" lg={4} sm={4} xs={4}>
              <h3>Reach out to us</h3>
              <hr
                className="footerHr"
                style={{ height: "3px", opacity: "100%" }}
              />

              <h5 className="nav-sub-item">Phone : +91-8882355956</h5>
              <h5 className="nav-sub-item">Email : support@noshiboshi.com</h5>
              <h5 className="nav-sub-item">
                BF-4, Basement, Janakpuri - 110058
              </h5>
            </Col>
            <Col lg={4} sm={4} xs={4} style={{ textAlign: "right" }}>
              <h3>Policy</h3>
              <hr
                className="footerHr"
                style={{ height: "3px", opacity: "100%" }}
              />
              <Link to="/deliveryShipping">
                <h5 className="nav-sub-item">Delivery and Shipping</h5>
              </Link>

              <h5 className="nav-sub-item">Cancellation and Refund</h5>
              <h5 className="nav-sub-item">Terms of Service</h5>
              <h5 className="nav-sub-item">Privacy Policy</h5>
            </Col>
          </Row>
          <div className="followUs">
            <span style={{ fontSize: "25px" }}>
              <span style={{ color: "#e77063", fontWeight: 500 }}>NOSHI</span>{" "}
              <b>
                <span style={{ color: "#24465f", fontWeight: 700 }}>BOSHI</span>
              </b>
            </span>
            <span
              style={{
                marginLeft: "50px",
                fontWeight: "700",
                color: "#24465F",
              }}
            >
              Follow us on our socials{" "}
            </span>
            <span style={{ marginLeft: "50px" }}>
              <img src={insta} style={{ width: "33px" }} alt="" />
            </span>
            <span style={{ marginLeft: "50px" }}>
              <img src={facebook} style={{ width: "33px" }} alt="" />
            </span>
            <span style={{ marginLeft: "50px" }}>
              <img
                src={twitter}
                style={{ width: "33px", borderRadius: "7px" }}
                alt=""
              />
            </span>
            <span
              style={{
                marginLeft: "50px",
                fontWeight: "500",
                color: "#24465F",
              }}
            >
              {" "}
              or
            </span>
            <span
              style={{
                marginLeft: "50px",
                fontWeight: "500",
                color: "#DD584F",
              }}
            >
              {" "}
              @noshiboshiofficial
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
