import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card
      className="bg-dark text-white"
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
          opacity: "0.45",
          width: "100%",
          height: "16.87em",
          borderRadius: "25px",
        }}
      />
      <Card.ImgOverlay>
        <Card.Title style={{ marginTop: "200px" }}>{product.Name}</Card.Title>
        {/* <Card.Text style={{ margin: "0px" }}>25 min | 675 kcal</Card.Text>
        <Card.Text>₹ 450</Card.Text> */}
      </Card.ImgOverlay>
    </Card>
  );
};

export default Product;
