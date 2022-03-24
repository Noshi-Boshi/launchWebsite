import React from "react";
import { Link } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import "../css/Footer.css";
import insta from "../assets/insta/drawable-xxxhdpi/Image 1.png";
import facebook from "../assets/facebook/facebook.png";
import twitter from "../assets/twitter/twitter.png";

const Footer = () => {
  return (
    <div>
      <section className="Footer">
        <div className="container">
          <Row style={{ color: "#24465F" }}>
            <Col lg={4} style={{ textAlign: "left" }}>
              <h3 style={{ fontWeight: "500" }}>Quick Links</h3>
              <hr />

              <h5 className="nav-sub-item">Home</h5>
              <h5 className="nav-sub-item">Menu</h5>
              <h5 className="nav-sub-item">What are we?</h5>
              <h5 className="nav-sub-item ">FAQs</h5>
            </Col>
            <Col lg={4} style={{ textAlign: "center" }}>
              <h3>Reach out to us</h3>
              <hr />

              <h5 className="nav-sub-item">Phone : +91-9911314947</h5>
              <h5 className="nav-sub-item">Email : hello@noshiboshi.com</h5>
              <h5 className="nav-sub-item">223, GB Road, Delhi, India</h5>
            </Col>
            <Col lg={4} style={{ textAlign: "right" }}>
              <h3>Policy</h3>
              <hr />
              <a href="/deliveryShipping">
                <h5 className="nav-sub-item">Delivery and Shipping</h5>
              </a>

              <h5 className="nav-sub-item">Cancellation and Refund</h5>
              <h5 className="nav-sub-item">Terms of Service</h5>
              <h5 className="nav-sub-item">Privacy Policy</h5>
            </Col>
          </Row>
          <div className="followUs">
            <span style={{ fontSize: "25px" }}>
              <span style={{ color: "#e77063", fontWeight: 300 }}>NOSHI</span>
              <span style={{ color: "#24465f", fontWeight: 700 }}>BOSHI</span>
            </span>
            <span
              style={{
                marginLeft: "50px",
                fontWeight: "500",
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
