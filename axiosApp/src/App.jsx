import { createContext, useState } from "react";
import "./App.css";
import Second from "./Components/Second";

export const userContext = createContext();

function App() {
  return (
    <>
      <h1>Title</h1>
      {/* <First /> */}
      <userContext.Provider value={"Hello"}>
        <Second />
      </userContext.Provider>
    </>
  );
}

export default App;
