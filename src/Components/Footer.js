import React from "react";
import "./Footer.css";
import Logo from "../Images/Logo.jpg";

export default function Footer() {
  return (
    <div>
      <div style={{ display: "flex", backgroundColor: "black" }}>
        <p className="SeaF">StealEdge Avionics</p>
        <img src={Logo} alt="Logo" className="imageLogo" />
      </div>
      <div className="footer">
        <div className="address">
          <p
            style={{
              fontFamily: "'Passion One', sans-serif",
              fontSize: "25px",
            }}
          >
            Address:
          </p>
          <div>
            <p className="add-details">
              #6 om Shakthi layout, 2nd block, 3rd main, Ayyappanagar K R Puram
              Bangalore 560036.
            </p>
            <p>
              No 28, Sri Rama layout, back of Geetha school, dabuspete,
              nelamangala taluk, Bangalore rural district,56111.
            </p>
          </div>
        </div>
        <div className="contact">
          <p
            style={{
              fontFamily: "'Passion One', sans-serif",
              fontSize: "25px",
            }}
          >
            Contact:
          </p>
          <p>+91 9353049532</p>
          <p>+91 82964 27877</p>
        </div>
      </div>
    </div>
  );
}
