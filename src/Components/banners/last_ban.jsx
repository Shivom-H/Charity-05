import React from "react";
import LastImg from "../../resources/images/card1.jpg";

export default function Last_ban() {
  return (
    <div>
      <div className="row last-banner">
        <div className="col-6 d-flex justify-content-center">
          <div className="card last-ban-card" style={{ width: "30rem" }}>
            <div className="card-body text-light">
              <h1 className="card-title">#Events</h1>
              <h3 className="card-subtitle mb-2 text-success">
                Your Text Goes Here
              </h3>
              <p className="card-text" style={{paddingRight:"125px"}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Your text goes here. This is just a placeholder. 
              </p>
              <a href="#" className="card-link text-light">
                Read Mpre
              </a>
            </div>
          </div>
        </div>

        <div className="col-6 last-right-col">
          <strong>
            <span
              style={{
                color: "white",
                fontSize: "40px",
                fontFamily: "cursive",
              }}
            >
              Upcoming{" "}
            </span>
            <span
              style={{
                color: "#02b24f",
                fontSize: "40px",
                fontFamily: "cursive",
              }}
            >
              Events
            </span>
          </strong>
          <br/>
          <br/>
          <div className="line2" style={{ margin: "20px auto 15px 0" }}></div>
          <br/>
          <p
            style={{
              color: "rgb(197, 194, 194)",
              paddingRight: "300px",
              fontStyle: "oblique",
              fontSize:"18px"
            }}
          >
            Your text goes here. This is just a placeholder. Your text goes
            here.
          </p>
        
        <div className="container-md">
          <div className="row">
            <strong>
              <div className="col-2 text-light text-center btn-jaisa-col">
                02 <br /> May
              </div>
            </strong>
            <div className="col-10 text-light last-ban-text">
              <h5>Your Text Goes Here</h5>
              <p>
                Your text goes here. This is just a placeholder content. Your
                text goes here. Your text goes here.{" "}
              </p>
            </div>
          </div>
          </div>
          <br/>
          <br/>
          <br/>
        <div className="container-md">
          <div className="row">
            <strong>
              <div className="col-2 text-light text-center btn-jaisa-col">
                02 <br /> May
              </div>
            </strong>
            <div className="col-10 text-light last-ban-text">
              <h5>Your Text Goes Here</h5>
              <p>
                Your text goes here. This is just a placeholder content. Your
                text goes here. Your text goes here.{" "}
              </p>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
