import React from "react";

function Button({ text, bkColor }) {
  const dynamicClass = `btnDefault ${bkColor}`;
  return <button className={dynamicClass}>{text}</button>;
}

export default Button;
