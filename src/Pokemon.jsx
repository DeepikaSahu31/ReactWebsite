import React, { useState, useEffect } from "react";
import axios from "axios";


const Pokemon=()=>{
const[num, setNum]=useState();
const[moves, setmoves]=useState();
const[name, setName]=useState();

useEffect(()=>{
async function getData(){
   const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
   setName(res.data.name);
   setmoves(res.data.moves.length);
}
getData();
}) ;

return(
    <>
    <div className="container-fluid mt-5">
    <h1 className="text-center">Your choose your <span style={{color:"red"}}>{num}</span></h1>
    <h1 className="text-center">Your choose your <span style={{color:"red"}}>{name}</span></h1>
    <h1 className="text-center">Your choose your <span style={{color:"red"}}>{moves}</span></h1>
<select value={num} onChange={(event)=>{
setNum(event.target.value);
}}>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
    </div>


    </>
)



}

export default Pokemon;