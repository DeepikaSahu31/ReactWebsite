import React, { useState } from "react";

const FormCom = () => {
  const [cInput, setCInput] = useState("");
  const [lInput, setLInput] = useState(""); 
  const [email, setEmail]=useState("");// Added this line
  const [number, setNumber]=useState("");
  const inputEvent = (event) => {
    const { name, value } = event.target;
    if (name === "cInput") {
      setCInput(value);
    }else if(name === "lInput") {
      setLInput(value);
    }else if(name==="email"){
        setEmail(value);
    }else if(name==="Mob"){
       setNumber(value);
    }
  };
const inputStyle ={
  
    display: 'block',
    padding: '15px',
    height: '15px',
    margin: '10px'
}
  return (
    <>
    
      <form action="">
        <input
          type="text"
          onChange={inputEvent}
          name="cInput"
          value={cInput}
          id="" style={inputStyle}
        />
        <input
          type="text"
          onChange={inputEvent}
          name="lInput"
          value={lInput}
          id=""   style={inputStyle}
        />
              <input
          type="email"
          onChange={inputEvent}
          name="email"
          value={email}
          id=""   style={inputStyle}
        />
              <input
          type="number"
          onChange={inputEvent}
          name="Mob"
          value={number}
          id=""   style={inputStyle}
        />

      </form>
    </>
  );
};

export default FormCom;
