import React from "react";
import "./Header.css";
import Logo from "../Images/Logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="imageLogo" />
      <p className="companyName">StealEdge Avionics</p>
    </div>
  );
};

export default Header;
