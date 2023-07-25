import React from "react";
import profile from'./img/profile.png';

const Example=()=>{
    const pro=()=>{
        alert("Under Development");
    }
    return(
        <>
        <div className="ex">
        <img src={require("./img/profile.png").default}  className="my-img "></img>
        </div>
 
       
      
        </>
    )
}
export default Example;