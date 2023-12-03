import React from "react";
import { Carousel } from "react-bootstrap";
import UnSeen from "../Images/useen.png";
import UnPar from "../Images/upar.png";
import UnMch from "../Images/umchd.png";
import "./Agenda.css";

const Agenda = () => {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src={UnSeen} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src={UnPar} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src={UnMch} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Agenda;
