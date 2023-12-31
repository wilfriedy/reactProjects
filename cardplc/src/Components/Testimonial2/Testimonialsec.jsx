import Button from "../Button/Button";
import "./SecTestimonial.css";

function Testimonialsec() {
  return (
    <div className="section-container testimonial-2">
      <div className="section-bk-2">
        <div className="sides-container-2">
          <div className="left-test-2">
            <img src="./img/features-03.png" alt="" />
          </div>
          <div className="right-test-2">
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
        </div>
      </div>
    </div>
  );
}

export default Testimonialsec;
