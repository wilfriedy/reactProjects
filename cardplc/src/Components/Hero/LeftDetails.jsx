import React from "react";
import Button from "../Button/Button";

function LeftDetails() {
  return (
    <div>
      <h3>Create physical and virtual cards for your business</h3>
      <p>
        Our landing page template works on all devices, so you only have to set
        it up once, and get beautiful results forever.
      </p>
      <div className="navigate">
        <Button text={"Get your card"} />
        <Button text={"Read documentation"} />
      </div>
    </div>
  );
}

export default LeftDetails;
