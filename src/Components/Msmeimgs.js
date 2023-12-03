import React from "react";
import msme from "../Images/msme.jpeg";
import SkillIndia from "../Images/skillindia.png";
import startupind from "../Images/startupind.png";

import "./Msmeimgs.css";

export default function Msmeimgs() {
  return (
    <div className="imag">
      <img src={msme} alt="msme" className="imagess" />
      <img src={SkillIndia} alt="msme" className="imagess" />
      <img src={startupind} alt="msme" className="imagess" />
    </div>
  );
}
