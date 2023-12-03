import React from "react";
import "./People.css";
import guide from "../Images/guide.jpg";
import Logo1 from "../Images/plogo.jpg";

export default function People() {
  return (
    <div className="p-container">
      <div
        className="people"
        class="card"
        style={{ boxShadow: "4px 2px 8px 1px gray", marginBottom: "2%" }}
      >
        <p className="head">Startup Mentor</p>
        <div className="pbody">
          <img src={guide} class="card-img-top" alt="guide" className="image" />
          <div class="card-body">
            <p class="card-text">
              Dr. Agalya V Professor and Associate Head R&D| President _NHCE IIC
              6.0| Head_IPR Cell| VTU Research Supervisor | AICTE Certified IPR
              Trainer| Senior Member in IEEE| BANGALORE
            </p>
          </div>
        </div>
      </div>

      <div className="founders">
        <div className="anjan">
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "200%" }}>
            Anjan
          </p>
          <p>
            <u>Founder</u>{" "}
          </p>
        </div>
        <div>
          <img src={Logo1} alt="logo" className="plogo" />
        </div>
        <div className="aswajit">
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "200%" }}>
            Aswajit
          </p>
          <p>
            <u>Founder</u>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
