import React from "react";
// import { Link } from "react-router-dom";

import { Row, Col } from "react-bootstrap";

import insta from "../assets/insta/drawable-xxxhdpi/Image 1.png";
import facebook from "../assets/facebook/facebook.png";
import twitter from "../assets/twitter/twitter.png";
import "../css/footer_mob.css";

const Footer = () => {
  return (
    <div style={{ fontFamily: "Poppins" }}>
      <section className="Footer">
        <div className="container" style={{ marginTop: "10%" }}>
          <Row style={{ color: "#24465F" }}>
            <Col style={{ textAlign: "left", marginLeft: "5%" }}>
              <h3 style={{ marginLeft: "0px" }}>Reach out to us</h3>
              <hr className="line" style={{ height: "3px", opacity: "100%" }} />

              <h5 className="nav-sub-item-mob">Phone : +91-9911314947</h5>
              <h5 className="nav-sub-item-mob">Email : hello@noshiboshi.com</h5>
              <h5 className="nav-sub-item-mob">223, GB Road, Delhi, India</h5>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <h3>Policy</h3>
              <hr
                className="line_2"
                style={{ height: "3px", opacity: "100%" }}
              />
              <a href="/deliveryShipping">
                <h5 className="nav-sub-item-mob">Delivery and Shipping</h5>
              </a>

              <h5 className="nav-sub-item-mob">Cancellation and Refund</h5>
              <h5 className="nav-sub-item-mob">Terms of Service</h5>
              <h5 className="nav-sub-item-mob">Privacy Policy</h5>
            </Col>
          </Row>
          <div className="follow">
            Follow us on our socials
            <img
              src={insta}
              alt="insta"
              style={{ width: "10%", marginLeft: "5%" }}
            ></img>
            <img
              src={facebook}
              alt="facebook"
              style={{ width: "10%", marginLeft: "5%" }}
            ></img>
            <img
              src={twitter}
              alt="twitter"
              style={{ width: "10%", marginLeft: "5%" }}
            ></img>
          </div>
          <div style={{ marginBottom: "10%" }}>
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
