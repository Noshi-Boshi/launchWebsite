import React from "react";

import "../css/Home.css";
import ProductCard from "../components/ProductCard";
import malaiKofta from "../assets/Malai kofta/drawable-xxxhdpi/Malai kofta.png";
import malaiKoftaMobile from "../assets/Malai kofta/drawable-xxxhdpi/Malai kofta Mobile.png";
import blueMockup from "../assets/Blue Mockup of Death2/drawable-xxxhdpi/Blue Mockup of Death2.png";
import blueCoralLogo from "../assets/Blue coral log/drawable-xxxhdpi/Blue coral log.png";
import blueCoralLogoWithName from "../assets/Blue coral logo with name/drawable-xxxhdpi/Blue coral logo with name.png";
import orderNow from "../assets/ordernow/drawable-xxxhdpi/Group 1.png";
import insta from "../assets/insta/drawable-xxxhdpi/Image 1.png";
import Raspberry from "../assets/Raspberry Ricotta Cake/drawable-xxxhdpi/Raspberry Ricotta Cake.png";
import googlePLay from "../assets/googlePlay/googlePLay.png";
import shamiKabab from "../assets/Veg Shami-Kabab/Veg Shami-Kabab.png";
import Spaghetti from "../assets/Spaghetti Aglio e Olio/Spaghetti Aglio e Olio.png";

import { Row, Col } from "react-bootstrap";

import { ScrollMenu } from "react-horizontal-scrolling-menu";
// import { LeftArrow, RightArrow } from "./arrows/arrows";

import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";

const Home = () => {
  function onWheel(
    apiObj: scrollVisibilityApiType,
    ev: React.WheelEvent
  ): void {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
  }
  const { innerWidth: width, innerHeight: height } = window;

  return (
    <div>
      {" "}
      <section className="landing" style={{ overflowX: "hidden" }}>
        {width > 768 ? (
          <img className="malaiKofta" align="right" src={malaiKofta} alt="" />
        ) : (
          <img
            className="malaiKoftaMobile"
            align="right"
            src={malaiKoftaMobile}
            alt=""
          />
        )}

        <img className="blueMockup" align="right" src={blueMockup} alt="" />
        <img className="blueCoralLogo" src={blueCoralLogo} alt="" />
        <img className="orderNow" src={orderNow} alt="" />
        <div className="selectMeal">
          <h1>Select meal-kits</h1>
          <h1>Right at your</h1>
          <h1>
            <span style={{ color: "#e77063" }}>Doorstep!</span>
          </h1>
        </div>
        <img className="RaspberryRicotta" src={Raspberry} alt="" />

        <a href="https://play.google.com/store/apps/details?id=com.noshiboshi.noshiboshi">
          <img className="googlePlay" width="200px" src={googlePLay} alt="" />
        </a>

        <p className="iosNewsletter">
          Releasing soon on iOS. Join our
          <span style={{ color: "#e77063" }}> mailing</span> list for further
          updates.
        </p>

        <a
          style={{ textDecoration: "none" }}
          href="https://www.instagram.com/noshiboshiofficial/"
        >
          <div className="instaSection">
            <p>
              For updates, follow us at:
              <img className="instaImg" align="center" src={insta} alt="" />
              @noshi<span style={{ color: "#e77063" }}>boshi</span>official
            </p>
          </div>
        </a>
        <img
          className="blueCoralLogoWithName"
          align="right"
          src={blueCoralLogoWithName}
          alt=""
        />
      </section>
      <section id="recipes">
        <h1 className="recipeHeading">
          Choose from one of our{" "}
          <span style={{ color: "#e77063" }}>curated recipes </span> to cook at
          home
        </h1>

        <Row
          className=" cuisine"
          style={{
            color: "#24465f",
            fontWeight: 500,
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          <Col lg={2} sm={4} xs={4}>
            Continental
          </Col>
          <Col lg={2} sm={4} xs={4}>
            Chinese
          </Col>
          <Col lg={2} sm={4} xs={4}>
            Indian
          </Col>
          <Col lg={2} sm={4} xs={4}>
            Mexican
          </Col>
          <Col lg={2} sm={4} xs={4}>
            Italian
          </Col>
        </Row>
        <div className="orderRecipes">
          <ScrollMenu
            options={{
              ratio: 0.9,
              rootMargin: "5px",
              onWheel: { onWheel },
              threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1],
            }}
          >
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ScrollMenu>
        </div>
        <img className="orderRecipeNow" src={orderNow} alt="" />
      </section>
      <img className="shamiKabab" src={shamiKabab} alt="" />
      <section id="aboutUs">
        <div className="about">
          <h1
            className="aboutHead"
            style={{ color: "#e77063", fontWeight: 700 }}
          >
            What is Noshi Boshi ?
          </h1>
          <div className="aboutPara">
            <span style={{ color: "#e77063" }}>Noshi Boshi</span> is a select
            meal-kit delivery service that caters to food enthusiasts, budding
            chefs and culinary professionals. We want to introduce our audience
            to the different cuisines and techniques of cooking from around the
            world, by bringing these to them in the form of simple curated
            recipes and authentic ingredients.
          </div>
        </div>
        <div className="quoteHeading">We’re proud to say that we’re</div>
        <div className="quote">Your personal sous chef!</div>
      </section>
      <img className="Spaghetti" src={Spaghetti} alt="" />
      <section id="contactUs" style={{ zIndex: "1" }}>
        <div id="contact-form">
          <div className="container">
            <div id="contact-us">
              <h2 className="contact-heading">Contact Us</h2>
              <p className="contact-subHeading">
                Any questions or remarks? Write to us by filling this form.
              </p>
            </div>
            <br />
            <div className="contact-box">
              <Row>
                <Col
                  lg={5}
                  style={{ backgroundColor: "#e77063", borderRadius: "25px" }}
                  className="hideMobile"
                >
                  <div
                    className="container"
                    style={{ marginTop: "50px", color: "white" }}
                  >
                    <h4>Contact Information</h4>
                    <p style={{ fontWeight: 300 }}>
                      Please fill the form and our Team will get back to you
                      soon
                    </p>
                    <div
                      style={{
                        fontWeight: 300,
                        marginTop: "30px",
                        marginLeft: "30px",
                      }}
                    >
                      <p style={{ marginBottom: "30px" }}>
                        <BsFillTelephoneFill style={{ marginRight: "30px" }} />
                        +91-8882355956
                      </p>
                      <p style={{ marginBottom: "30px" }}>
                        <GrMail style={{ marginRight: "30px" }} />
                        support@noshiboshi.com
                      </p>
                      <p>
                        <HiLocationMarker style={{ marginRight: "30px" }} />
                        BF-4, Basement, Janakpuri - 110058
                      </p>
                    </div>
                  </div>
                </Col>
                <br />
                <Col lg={7} style={{ padding: "4% 8%" }}>
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
                          <label htmlFor="form-subject">Phone No.</label>
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
                      className="btn btn-secondary button submit-button"
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
      </section>
    </div>
  );
};

export default Home;
