import React, { useState } from "react";
import { useForm } from "react-hook-form";

import axios from "axios";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import "animate.css";
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

import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";

import { AnimateSharedLayout } from "framer-motion";

import Dishes from "../data/recipe";

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    axios
      .post(
        "https://us-central1-noshiboshi-r.cloudfunctions.net/api/sendMessage",
        {
          f_name: data.FirstName,
          l_name: data.LastName,
          phoneNum: data.num,
          message: data.message,
          email: data.emailUser,
        }
      )
      .then(function (response) {
        alert("Message sent successfully");
        e.target.reset();
      })
      .catch(function (error) {
        if (error.response) {
          alert("Error in sending message");
        }
      });
  };
  const handleErrors = () => {
    if (errors.num) {
      alert("Please enter a valid 10 digit number");
    } else if (errors.message) {
      alert("Please enter a message with atleast 10 characters");
    }
  };

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

  const [cuisineMenu, setCuisineState] = useState("Continental");

  return (
    <div>
      {" "}
      <section id="home" className="landing" style={{ overflowX: "hidden" }}>
        <Zoom left duration={1500}>
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
        </Zoom>
        <Fade bottom big duration={1500}>
          <div className="selectMeal">
            <h1>Select meal-kits</h1>
            <h1>Right at your</h1>
            <h1>
              <span style={{ color: "#e77063" }}>Doorstep!</span>
            </h1>
          </div>
        </Fade>
        <Zoom left duration={1500}>
          <img className="RaspberryRicotta" src={Raspberry} alt="" />
        </Zoom>

        <Fade bottom big duration={1500}>
          <a href="https://play.google.com/store/apps/details?id=com.noshiboshi.noshiboshi">
            <img className="googlePlay" width="200px" src={googlePLay} alt="" />
          </a>

          <p className="iosNewsletter">
            iOS users can place order via
            <span style={{ color: "#e77063" }}>
              {" "}
              <a href="https://www.instagram.com/noshiboshiofficial/">
                Instagram DM
              </a>{" "}
            </span>{" "}
            or
            <span style={{ color: "#e77063" }}>
              {" "}
              <a href="http://wa.me/+918882355956"> Whatsapp.</a>
            </span>
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
        </Fade>
        <img
          className="blueCoralLogoWithName"
          align="right"
          src={blueCoralLogoWithName}
          alt=""
        />
      </section>
      <section id="recipes">
        <Fade bottom big duration={1500}>
          <h1 className="recipeHeading">
            Choose from one of our{" "}
            <span style={{ color: "#e77063" }}>curated recipes </span> to cook
            at home
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
              {cuisineMenu === "Continental" ? (
                <a
                  style={{ color: "#e77063" }}
                  onClick={() => setCuisineState("Continental")}
                >
                  {" "}
                  Continental
                </a>
              ) : (
                <>
                  <a onClick={() => setCuisineState("Continental")}>
                    {" "}
                    Continental
                  </a>{" "}
                </>
              )}
            </Col>
            <Col lg={2} sm={4} xs={4}>
              {cuisineMenu === "Chinese" ? (
                <a
                  style={{ color: "#e77063" }}
                  onClick={() => setCuisineState("Chinese")}
                >
                  Chinese
                </a>
              ) : (
                <>
                  {" "}
                  <a onClick={() => setCuisineState("Chinese")}>Chinese</a>
                </>
              )}
            </Col>
            <Col lg={2} sm={4} xs={4}>
              {cuisineMenu === "Indian" ? (
                <a
                  style={{ color: "#e77063" }}
                  onClick={() => setCuisineState("Indian")}
                >
                  Indian
                </a>
              ) : (
                <>
                  <a onClick={() => setCuisineState("Indian")}>Indian</a>
                </>
              )}
            </Col>
            {width > 768 ? (
              <></>
            ) : (
              <>
                {" "}
                <Col sm={2} xs={2}>
                  {" "}
                </Col>
              </>
            )}
            <Col lg={2} sm={4} xs={4}>
              {cuisineMenu === "Mexican" ? (
                <a
                  style={{ color: "#e77063" }}
                  onClick={() => setCuisineState("Mexican")}
                >
                  Mexican
                </a>
              ) : (
                <>
                  <a onClick={() => setCuisineState("Mexican")}>Mexican</a>
                </>
              )}
            </Col>
            <Col lg={2} sm={4} xs={4}>
              {cuisineMenu === "Italian" ? (
                <a
                  style={{ color: "#e77063" }}
                  onClick={() => setCuisineState("Chinese")}
                >
                  Italian
                </a>
              ) : (
                <>
                  {" "}
                  <a onClick={() => setCuisineState("Italian")}>Italian</a>
                </>
              )}
            </Col>
          </Row>
        </Fade>
        <div className="orderRecipes">
          {cuisineMenu === "Continental" && (
            <>
              <div class="animate__animated animate__fadeInRight animate__delay-0.5s">
                <ScrollMenu
                  options={{
                    ratio: 0.9,
                    rootMargin: "5px",
                    onWheel: { onWheel },
                    threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1],
                  }}
                >
                  {Dishes.map((dish) => (
                    <>
                      {dish.Cuisine === "Continental" ? (
                        <>
                          <ProductCard product={dish} />
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
                </ScrollMenu>
              </div>
            </>
          )}
          {cuisineMenu === "Chinese" && (
            <>
              <div class="animate__animated animate__fadeInRight animate__delay-0.5s">
                <ScrollMenu
                  options={{
                    ratio: 0.9,
                    rootMargin: "5px",
                    onWheel: { onWheel },
                    threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1],
                  }}
                >
                  {Dishes.map((dish) => (
                    <>
                      {dish.Cuisine === "Chinese" ? (
                        <>
                          <ProductCard product={dish} />
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
                </ScrollMenu>
              </div>
            </>
          )}
          {cuisineMenu === "Indian" && (
            <>
              <div class="animate__animated animate__fadeInRight animate__delay-0.5s">
                <ScrollMenu
                  options={{
                    ratio: 0.9,
                    rootMargin: "5px",
                    onWheel: { onWheel },
                    threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1],
                  }}
                >
                  {Dishes.map((dish) => (
                    <>
                      {dish.Cuisine === "Indian" ? (
                        <>
                          <ProductCard product={dish} />
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
                </ScrollMenu>
              </div>
            </>
          )}
          {cuisineMenu === "Mexican" && (
            <>
              <div class="animate__animated animate__fadeInRight animate__delay-0.5s">
                <ScrollMenu
                  options={{
                    ratio: 0.9,
                    rootMargin: "5px",
                    onWheel: { onWheel },
                    threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1],
                  }}
                >
                  {Dishes.map((dish) => (
                    <>
                      {dish.Cuisine === "Mexican" ? (
                        <>
                          <ProductCard product={dish} />
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
                </ScrollMenu>
              </div>
            </>
          )}
          {cuisineMenu === "Italian" && (
            <>
              <div class="animate__animated animate__fadeInRight animate__delay-0.5s">
                <ScrollMenu
                  options={{
                    ratio: 0.9,
                    rootMargin: "5px",
                    onWheel: { onWheel },
                    threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1],
                  }}
                >
                  {Dishes.map((dish) => (
                    <>
                      {dish.Cuisine === "Italian" ? (
                        <>
                          <ProductCard product={dish} />
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
                </ScrollMenu>
              </div>
            </>
          )}
        </div>
        <a href="https://play.google.com/store/apps/details?id=com.noshiboshi.noshiboshi">
          {" "}
          <img className="orderRecipeNow" src={orderNow} alt="" />
        </a>
      </section>
      <Zoom right duration={1500}>
        <img className="shamiKabab" src={shamiKabab} alt="" />
      </Zoom>
      <section id="aboutUs">
        <Fade bottom big duration={1500}>
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
              chefs and culinary professionals. We want to introduce our
              audience to the different cuisines and techniques of cooking from
              around the world, by bringing these to them in the form of simple
              curated recipes and authentic ingredients.
            </div>
          </div>
          <div className="quoteHeading">We’re proud to say that we’re</div>
          <div className="quote">Your personal sous chef!</div>
        </Fade>
      </section>
      <Zoom left duration={1500}>
        <img className="Spaghetti" src={Spaghetti} alt="" />
      </Zoom>
      <section id="contactUs" style={{ zIndex: "1" }}>
        <div id="contact-form">
          <div className="container">
            <div id="contact-us">
              <Fade bottom big duration={1500}>
                <h2 className="contact-heading">Contact Us</h2>
                <p className="contact-subHeading">
                  Any questions or remarks? Write to us by filling this form.
                </p>
              </Fade>
            </div>
            <br />

            <Fade bottom big duration={1500}>
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
                          <Row>
                            <Col lg={2}>
                              {" "}
                              <BsFillTelephoneFill
                                style={{ marginRight: "30px" }}
                              />
                            </Col>
                            <Col lg={8}>+91-8882355956</Col>
                          </Row>
                        </p>
                        <p style={{ marginBottom: "30px" }}>
                          <Row>
                            <Col lg={2}>
                              <GrMail style={{ marginRight: "30px" }} />
                            </Col>
                            <Col lg={8}>support@noshiboshi.com</Col>
                          </Row>
                        </p>
                        <p>
                          <Row>
                            <Col lg={2}>
                              <HiLocationMarker />
                            </Col>
                            <Col lg={8}>BF-4, Basement, Janakpuri - 110058</Col>
                          </Row>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <br />
                  <Col lg={7} style={{ padding: "4% 8%" }}>
                    <form
                      className="my-form"
                      onSubmit={handleSubmit(onSubmit)}
                      method="POST"
                    >
                      <Row>
                        <Col lg={6}>
                          <div className="form-group">
                            <label htmlFor="form-first-name">First Name</label>
                            <input
                              name="FirstName"
                              type="text"
                              className="form-control"
                              id="form-FirstName"
                              required
                              {...register("FirstName", {
                                required: true,
                                maxLength: 20,
                              })}
                            />
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className="form-group">
                            <label htmlFor="form-last-name">Last Name</label>
                            <input
                              name="LastName"
                              type="text"
                              className="form-control"
                              id="LastName"
                              required
                              {...register("LastName", {
                                required: true,
                                maxLength: 20,
                              })}
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
                              name="emailUser"
                              className="form-control"
                              id="emailUser"
                              required
                              {...register("emailUser", {
                                required: true,
                              })}
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
                              id="num"
                              required
                              {...register("num", {
                                required: true,
                                minLength: 10,
                                maxLength: 10,
                              })}
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
                          id="message"
                          placeholder="We are here to help! "
                          required
                          defaultValue={""}
                          {...register("message", {
                            required: true,
                            minLength: 10,
                            maxLength: 250,
                          })}
                        />
                      </div>

                      <button
                        className="btn btn-secondary button submit-button"
                        type="submit"
                        onClick={handleErrors}
                      >
                        Send message
                      </button>
                    </form>
                  </Col>
                </Row>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
