import React from "react";
import "../css/ContactUs.css";
import { Row, Col } from "react-bootstrap";
const ContactUs = () => {
  return (
    <div id="contact-form">
      <div className="container">
        <div id="contact-us">
          <h2 className="contact-heading">Contact Us</h2>
          <p className="contact-subHeading">
            Any questions or remarks? Just write us a message!
          </p>
        </div>
        <br />
        <div className="contact-box">
          <Row style={{ padding: "2%" }}>
            <Col
              lg={5}
              style={{ backgroundColor: "#e77063", borderRadius: "25px" }}
            >
              <div
                className="container"
                style={{ marginTop: "50px", color: "white" }}
              >
                <h4>Contact Information</h4>
                <p style={{ fontWeight: 300 }}>
                  Please fill the form and our Team will get back to you within
                  24 hours
                </p>
                <div
                  style={{
                    fontWeight: 300,
                    marginTop: "30px",
                    marginLeft: "30px",
                  }}
                >
                  <p>+91-9911314947</p>
                  <p>hello@noshiboshi.com</p>
                  <p>223,GB Road,Delhi,India</p>
                </div>
              </div>
            </Col>
            <br />
            <Col lg={7} style={{ padding: "2% 4%" }}>
              <form
                className="my-form"
                action="mailto:hello@noshiboshi.com"
                method="POST"
              >
                <Row>
                  <Col lg={6}>
                    <div className="form-group">
                      <label htmlFor="form-first-name">First Name</label>
                      <input
                        name="First-name"
                        type="text"
                        className="form-control"
                        id="form-first-name"
                        required
                      />
                    </div>
                    <br />
                  </Col>
                  <Col lg={6}>
                    <div className="form-group">
                      <label htmlFor="form-last-name">Last Name</label>
                      <input
                        name="Last-Name"
                        type="text"
                        className="form-control"
                        id="form-last-name"
                        required
                      />
                    </div>
                    <br />
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <div className="form-group">
                      <label htmlFor="form-email">Email Id</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="form-email"
                        required
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="form-group">
                      <label htmlFor="form-subject">Phone No.(10 Digit)</label>
                      <input
                        type="tel"
                        name="num"
                        className="form-control"
                        id="form-subject"
                        required
                      />
                    </div>
                  </Col>
                </Row>
                <div className="form-group">
                  <label htmlFor="form-message"> Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    id="form-message"
                    placeholder="We are here to help! "
                    required
                    defaultValue={""}
                  />
                </div>
                <button
                  style={{
                    marginLeft: "55%",
                    marginTop: "2%",
                    borderRadius: "10px",
                    backgroundColor: "#24465f",
                  }}
                  className="btn btn-secondary button"
                  type="submit"
                >
                  Send message
                </button>
              </form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
