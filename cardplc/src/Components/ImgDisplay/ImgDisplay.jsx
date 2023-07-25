import React from "react";

function ImgDisplay({ src, position }) {
  const customStyle = `imgContainer ${position}`;
  return (
    <div className={customStyle}>
      <img src={src} alt="" />
    </div>
  );
}

export default ImgDisplay;
