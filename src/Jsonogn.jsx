import React from 'react';


(function(){document.getElementById('demo').innerHTML="Hello";})();
const Jsonogn = () => {
    const obj={
        uname:'richa',
        age: 31,
        education:'mca'
      }
      let jsonstring = JSON.stringify(obj);
   
      
     
     
  return (
    <>
      {jsonstring.uname}
    </>
  )
}

export default Jsonogn;


