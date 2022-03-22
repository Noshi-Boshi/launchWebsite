import React from "react";
import "../css/Home.css";
import ProductCard from "../components/ProductCard";
import malaiKofta from "../assets/Malai kofta/drawable-xxxhdpi/Malai kofta.png";
import blueMockup from "../assets/Blue Mockup of Death2/drawable-xxxhdpi/Blue Mockup of Death2.png";
import blueCoralLogo from "../assets/Blue coral log/drawable-xxxhdpi/Blue coral log.png";
import blueCoralLogoWithName from "../assets/Blue coral logo with name/drawable-xxxhdpi/Blue coral logo with name.png";
import orderNow from "../assets/ordernow/drawable-xxxhdpi/Group 1.png";
import insta from "../assets/insta/drawable-xxxhdpi/Image 1.png";
import Raspberry from "../assets/Raspberry Ricotta Cake/drawable-xxxhdpi/Raspberry Ricotta Cake.png";
import googlePLay from "../assets/googlePlay/googlePLay.png";
import shamiKabab from "../assets/Veg Shami-Kabab/Veg Shami-Kabab.png";

import { Row, Col } from "react-bootstrap";

import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./arrows/arrows";

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
  return (
    <div>
      {" "}
      <section className="landing">
        <img className="malaiKofta" align="right" src={malaiKofta} alt="" />
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
        <div className="googlePlay">
          <img width="200px" src={googlePLay} alt="" />
        </div>
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
      <section className="recipes">
        <h1 className="recipeHeading">
          Choose from one of our{" "}
          <span style={{ color: "#e77063" }}>hand-curated </span>recipes
        </h1>

        <div className="recipeHeader"></div>
        <Row
          className="cuisine"
          style={{ color: "#24465f", fontWeight: 500, fontSize: "20px" }}
        >
          <Col lg={2}>Continental</Col>
          <Col lg={2}>Chinese</Col>
          <Col lg={2}>Indian</Col>
          <Col lg={2}>Mexican</Col>
          <Col lg={2}>Italian</Col>
        </Row>
        <div className="orderRecipes">
          <ScrollMenu
            options={{
              ratio: 0.9,
              rootMargin: "5px",
              LeftArrow: { LeftArrow },
              RightArrow: { RightArrow },
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
      <section className="aboutUs">
        <img className="shamiKabab" src={shamiKabab} alt="" />
      </section>
    </div>
  );
};

export default Home;
