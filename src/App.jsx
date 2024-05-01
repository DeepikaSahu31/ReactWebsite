import React, { createContext } from "react";
import ComA from "./ContextApiFol/ComA";

const FirstName = createContext();
const LastName = createContext();


function App() {
  return (
    <>
    <FirstName.Provider value={"deepika"}>
    <LastName.Provider value={"sahu"}>
    <ComA/>
    </LastName.Provider>
   
    </FirstName.Provider>

    </>
   
  );
}

export default App;
export {FirstName, LastName};