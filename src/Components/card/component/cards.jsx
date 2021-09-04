import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Cards(props) {
  return (
    <div className="custom-cd-final">
    <div className="card custom-card-2" style={{ width: "18rem" , margin: "0 0 20px 20px"}}>
      <img src={props.link} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h1 className="card-title text-light">{props.title} <i class="fas fa-clock"></i></h1>
          
        <p className="card-text text-light">{props.des}</p>
        <ProgressBar labelColor="#fff" completed={props.val} labelSize={"12px"} height={"13.5px"} bgColor={"#fd6201"} baseBgColor={"#b1b0ae"}/>
        
      </div>
    </div>
    </div>
  );
}
