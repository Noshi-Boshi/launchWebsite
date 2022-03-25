import { Button } from "react-bootstrap";
import "../css/mob_nav.css";
import logo from "../assets/Blue coral log.png";

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
            <span style={{ color: "#e77063", fontWeight: 200 }}>Noshi</span>
            <b>Boshi</b>
          </span>
          <span className="cross">X</span>
        </a>
        <a
          href="#"
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
          href="#"
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
          href="#"
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
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
};

export default Navbar;
