import React from "react";
import Sides from "../SidesComp/Sides";
import Button from "../Button/Button";
import LeftDetails from "./LeftDetails";
import ImgDisplay from "../ImgDisplay/ImgDisplay";

function Hero() {
  return (
    <div className="Herro">
      {/* top */}
      <div className="top">
        <h3>Logo</h3>
        <Button text={"Get your card"} />
      </div>

      <Sides>
        <LeftDetails />
        <ImgDisplay src={"./img/hero-image.png"} />
      </Sides>
    </div>
  );
}

export default Hero;
