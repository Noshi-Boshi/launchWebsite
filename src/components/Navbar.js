import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
      <span style={{ fontSize: "25px" }}>
        <span style={{ color: "#e77063", fontWeight: 300 }}>NOSHI</span>
        <span style={{ color: "#24465f", fontWeight: 700 }}>BOSHI</span>
        <span style={{ color: "#24465f", fontWeight: 500, fontSize: "20px" }}>
          <span style={{ marginLeft: "50px" }}>Menu</span>
          <span style={{ marginLeft: "50px" }}>About us</span>
          <span style={{ marginLeft: "50px" }}>Contact us</span>
        </span>
      </span>
    </div>
  );
};

export default Navbar;
