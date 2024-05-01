import React, { useState, useEffect,  useMemo,  useRef} from "react";
import ReactDOM from "react-dom";
import Image from "./Image";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FormCom from "./FormCom";
import Stateise from "./Stateise";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Error from "./Error";
import {About, Contact} from "./Routing";
import Home from "./Home";
import Menu from "./Menu";





const App = () => {
  const[cstate, setCstate]=useState([]);
  const [count, setCount] = useState(0);
  const[data,setData]=useState({
    fullName:'',
    Email:'',
  });

  const InputEvent=(event)=>{
const{name,value}=event.target;
setData((preValue)=>{
  return {...preValue,
    [name]:value,
  };
});
  };
  
// Create a ref using the useRef hook
const inputRef = useRef(null);

useEffect(() => {
  // Focus the input element when the component mounts
  inputRef.current.focus();
}, []); // Empty dependency array ensures useEffect runs only once after initial render

  // Expensive computation function
  const computeExpensiveValue = (num) => {
    console.log('Computing expensive value...');
    return num * 2;
  };

  // Memoized value using useMemo
  const memoizedValue = useMemo(() => computeExpensiveValue(count), [count]);
 const imgSrc = 'https://picsum.photos/200/300';
 const imgSrc1 = 'https://picsum.photos/id/237/200/300';
 const imgSrc2 = 'https://picsum.photos/200/300';
 const title = 'Nature View';
 const title1 = 'technical';
 const title2 = 'greenry';
 const alt = 'alt';
 const alt1 = 'alt2';
 const alt2 = 'alt3';

  return (
    <>

      <h1 className="text-bg-secondary mt-5">My First App</h1>
      <div className="d-flex justify-content-center align-items-center">
      <Image src={imgSrc} caption={title} altnative={alt}/>
      <Image src={imgSrc1} caption={title1} altnative={alt1}/>
       <Image src={imgSrc2} caption={title2} altnative={alt2} />
      </div>

      <div className="container">
      <div className="d-flex flex-column justify-content-center" style={{width:'100%'}}>
      <FormCom/>
      
      </div>

    

        
      </div>
     <Stateise/>
     <Menu/>
   




 
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <p>Memoized Value: {memoizedValue}</p>
    </div>

    <div>
      {/* Attach the ref to the input element */}
      <input type="text" ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>

<div>
  <input type="text" 
    name="fullName"
    value={data.fullName}
    onChange={InputEvent}
  />
  <input type="email"
     name="Email"
    value={data.Email}
    onChange={InputEvent}
  />
</div>


      <Routes>
        <Route path="/about" element={<About name="About you"/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="*"  element={<Error/>} /> */}
        {/* <Redirect to="/"/> //agr or koi url dale to home page par redirect home jaye */}
      </Routes>
    
    </>
  );
};


ReactDOM.render(
  <Router>
 <App/>
 </Router>
 
  ,
  document.getElementById("root"));