import React from "react";
import { userContext } from "../App";

function Third() {
  return (
    <>
      <userContext.Consumer>
        {(user) => {
          return  <div> Hi {user}</div>;
        }}
      </userContext.Consumer>
    </>
  );
}

export default Third;
 