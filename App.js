import React, { createContext } from "react";
import CompA from "./CompA";
import CompB from "./CompB";

const FirstName = createContext();
const lastname = createContext();

const App = () => {
  return (
    <>
    <FirstName.Provider value={"Krish"}>
      <lastname.Provider value={"Ramani"}>
      <CompA />
      </lastname.Provider>
    </FirstName.Provider>
    </>
  );
};

export default App;
export {FirstName,lastname};