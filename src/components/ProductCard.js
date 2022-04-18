import React from "react";
import { Card } from "react-bootstrap";
import "../css/ProductCard.css";
import Fade from "react-reveal/Fade";

const Product = ({ product }) => {
  return (
    <Fade bottom big duration={1500}>
      <Card
        className=" text-white "
        style={{
          width: "214px",
          height: "270px",
          borderRadius: "25px",
          display: "inline-block",
          margin: "15px ",
          border: "0px",
        }}
      >
        <Card.Img
          src={product.ImageUrl}
          alt="Card image"
          style={{
            zIndex: "-1",
            opacity: "1",
            width: "100%",
            height: "270px",
            borderRadius: "25px",
          }}
        />
        <Card.ImgOverlay className="gradient" style={{ borderRadius: "25px" }}>
          <Card.Title style={{ marginTop: "170px" }}>{product.Name}</Card.Title>
          <Card.Text style={{ marginTop: "-5px" }}>
            {product.Time} | {product.Calories} kcal
          </Card.Text>
          {/* <Card.Text>₹ 450</Card.Text> */}
        </Card.ImgOverlay>
      </Card>
    </Fade>
  );
};

export default Product;
