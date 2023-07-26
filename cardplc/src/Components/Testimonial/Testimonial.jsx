import React from "react";
import Sides from "../SidesComp/Sides";
import Button from "../Button/Button";
import "./Testimonial.css";

function Testimonial() {
  return (
    <div className="section-container">
      <div className="section-bk">
        <Sides>
          <div className="left-test">
            <h2>Build a flexible card program for your business needs</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam, quis nostrud exercitation.
            </p>
            <Button text={"Get your card"} />
            <div className="test-author">
              <img src="./img/quote-author-01.jpg" alt="" />
              <p>
                “ We know the card market very well and this product provides
                the speed, flexible account model and API-first approach that no
                one else can. ”
              </p>
            </div>
          </div>

          <div className="right-test">
            <img src="./img/features-02.png" alt="" />
          </div>
        </Sides>
      </div>
    </div>
  );
}

export default Testimonial;
