import { Button } from "react-bootstrap";
import "../css/mob_nav.css";
import logo from "../assets/Blue coral log/drawable-xxxhdpi/Blue coral log.png";
import { Link } from "react-router-dom";
import { ScrollLink } from "react-scroll";
const Navbar = () => {
  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
    console.log("Click happened");
  }

  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  return (
    <div>
      <div id="mySidepanel" className="sidepanel">
        <a className="closebtn" onClick={closeNav}>
          <span className="brand-name">
            <span style={{ fontSize: "20px" }}>
              <span style={{ color: "#e77063", fontWeight: 300 }}>NOSHI</span>{" "}
              <b>
                <span style={{ color: "#24465f", fontWeight: 700 }}>BOSHI</span>
              </b>
            </span>
          </span>
          <span className="cross">X</span>
        </a>
        <a
          href="/#recipes"
          style={{
            color: "#24465f",
            fontFamily: '"Poppins"',
            fontSize: "1.2rem",
            marginTop: "60px",
            fontWeight: 500,
            marginLeft: "10px",
          }}
        >
          Menu
        </a>
        <a
          href="/#aboutUs"
          style={{
            color: "#24465f",
            fontFamily: '"Poppins"',
            fontSize: "1.2rem",
            marginTop: "60px",
            marginLeft: "10px",
            fontWeight: 500,
          }}
        >
          About Us
        </a>
        <a
          href="/#contactUs"
          style={{
            color: "#24465f",
            fontFamily: '"Poppins"',
            fontSize: "1.2rem",
            marginTop: "60px",
            fontWeight: 500,
            marginLeft: "10px",
          }}
        >
          Contact Us
        </a>
        <div className="content-down">
          <i>
            Find us interesting?
            <p>
              <span style={{ color: "#e77063" }}>Join</span> our newsletter
            </p>
          </i>
        </div>
      </div>
      <Button className="openbtn" onClick={openNav}>
        ☰
      </Button>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Navbar;
