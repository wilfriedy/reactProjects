import React from "react";
import Sides from "../SidesComp/Sides";
import Button from "../Button/Button";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero section-container">
      {/* top */}
      <div className="top-nav">
        <h3>Logo</h3>
        <Button text={"Get your card"} />
      </div>

      <Sides>
        <div className="hero-details">
          <h2 className="hero-txt">
            Create physical and virtual cards for your business
          </h2>
          <p className="hero-paragraph">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
          <div className="navigate-btn">
            <Button text={"Get your card"} />
            <Button text={"Read documentation"} />
          </div>
        </div>
        <div className="imgContainer">
          <img src="./img/hero-image.png" alt="" />
        </div>
      </Sides>
      <div className="blue-bk"></div>
    </div>
  );
}

export default Hero;
