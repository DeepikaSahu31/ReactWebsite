import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Image = (props)=>{
    const {src, caption, altnative} = props;
    return(
        <>
        <div >
        <img src={src} alt={altnative}  /> <br/>
            <p style={{ display:"block",textAlign: "center", color: "red", backgroundColor: "yellow" }}>{caption}</p>
        </div>
            
    </>
    
    )
}

export default Image;