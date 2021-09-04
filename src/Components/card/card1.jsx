import React from "react";
import Img from "../../resources/images/card2.jpg"

export default function card1() {
  return (
    <div>
      <div className="row card1-custom-con">
        <div className="col-6 custom-card-image">
          <img src={Img} alt="" className="img-fluid" />
        </div>

        <div className="col-6" style={{backgroundColor:"#02b24f"}}>
          <div className="row">
            <div className="col-12">
                <h1 className="text-white text-center">Our Mission</h1>
            </div>
            <div className="col-12">
                <p className="text-white text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis tempora omnis asperiores similique quasi commodi impedit debitis quod deleniti. Sapiente quos velit consequuntur aperiam perferendis id recusandae quisquam atque quibusdam?</p>
            </div>
            <div className="col-12 text-center">
                <button className="btn custom-card-btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
