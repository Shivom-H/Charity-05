import React from "react";
import BtnImg from "../../resources/images/invertedcommas.png";

export default function Banend2() {
  return (
    <div>
      <div className="row">
        <div className="col-12 text-secondary ban-banner">
          <h1> OUR VOLUNTEER SAYS</h1>
        </div>

        <div className="line2"></div>

        <div className="col-12 bad-button">
          <button className="btn bt-button">
            <img src={BtnImg} className="quote-commas" alt="" />
          </button>
        </div>

        <div className="col-12 text-secondary banend-text">
          <div className="actual-text text-center">
            Your text goes here. This is just a placeholder content. Your text
            goes here. This is just a placeholder content. Your text goes here.
            This is just a placeholder content. Your text goes here. This is
            just a placeholder content. Your text goes here. This is just a
            placeholder content.
            <br />
            <br />
            <br />
            <h3 className="text-dark" style={{ fontStyle: "italic" }}>
              DOMENIC FOX
            </h3>
            <h6 className="text-success">PM - Jetlinks</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
