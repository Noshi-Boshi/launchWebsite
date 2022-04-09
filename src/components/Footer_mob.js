import React from "react";
import { Link } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import insta from "../assets/insta/drawable-xxxhdpi/Image 1.png";
import facebook from "../assets/facebook/facebook.png";
import linkedIn from "../assets/linkedIn/linkedIn.png";
import "../css/footer_mob.css";

const FooterMob = () => {
  return (
    <div style={{ fontFamily: "Poppins", marginBottom: "50px" }}>
      <div className="container" style={{ marginTop: "10%" }}>
        <Row style={{ color: "#24465F" }}>
          <Col style={{ textAlign: "left", marginLeft: "5%" }}>
            <h6 style={{ marginLeft: "0px" }}>Reach out to us</h6>
            <hr className="line" style={{ height: "3px", opacity: "100%" }} />

            <h5 className="nav-sub-item-mob">Phone : +91-8882355956</h5>
            <h5 className="nav-sub-item-mob">Email : support@noshiboshi.com</h5>
            <h5 className="nav-sub-item-mob">
              BF-4, Basement, Janakpuri - 110058
            </h5>
          </Col>
          <Col style={{ textAlign: "right", marginRight: "5%" }}>
            <h6>Policy</h6>
            <hr className="line_2" style={{ height: "3px", opacity: "100%" }} />

            <a href="https://noshiboshi.com/cancellationAndRefund">
              <h5 className="nav-sub-item-mob">Cancellation and Refund</h5>
            </a>

            {/* <Link to="termsOfService">
              <h5 className="nav-sub-item-mob">Terms of Service</h5>
            </Link> */}

            <a href="https://noshiboshi.com/privacyPolicy">
              <h5 className="nav-sub-item-mob">Privacy Policy</h5>
            </a>
          </Col>
        </Row>
        <div className="follow">
          Follow us on our socials
          <a href="https://www.instagram.com/noshiboshiofficial/">
            <img
              src={insta}
              alt="insta"
              style={{ width: "10%", marginLeft: "5%" }}
            ></img>
          </a>
          <a href="https://www.facebook.com/noshiboshiofficial">
            <img
              src={facebook}
              alt="facebook"
              style={{ width: "10%", marginLeft: "5%" }}
            ></img>
          </a>
          <a href="https://www.linkedin.com/company/noshiboshiofficial/">
            <img
              src={linkedIn}
              alt="linkedIn"
              style={{ width: "10%", marginLeft: "5%" }}
            ></img>
          </a>
        </div>
        <div style={{ textAlign: "center" }}>
          <span
            style={{
              fontWeight: "500",
              color: "#24465F",
            }}
          >
            {" "}
            or
          </span>
          <span
            style={{
              marginLeft: "15px",
              fontWeight: "500",
              color: "#DD584F",
            }}
          >
            {" "}
            @noshiboshiofficial
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterMob;
