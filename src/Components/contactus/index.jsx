import React from "react";
import Img from "../../resources/images/transparent.png";

export default function ContactUs() {
  return (
    <div>
      <div
        className="row custom-misc2-con-chart"
        style={{ position: "relative" }}
      >
        <div className="col-6">
          <h1>
            GET IN TOUCH
            <br />
            <strong>CONTACT US!</strong>
          </h1>
          <div className="line2" style={{ margin: "20px auto 15px 0" }}></div>

          <form action="">
            <div className="row p-2">
              <div className="col-6">
                <span className="form-icon text-secondary">
                  <i class="fas fa-user"></i>
                  <input type="text" placeholder="Full Name" />
                </span>
              </div>

              <div className="col-6">
                <span className="form-icon text-secondary">
                  <i class="fas fa-envelope"></i>
                  <input type="email" placeholder="Email" />
                </span>
              </div>
            </div>

            <div className="row p-2">
              <div className="col-6">
                <span className="form-icon text-secondary">
                  <i class="fas fa-home"></i>
                  <input type="text" placeholder="Address" />
                </span>
              </div>

              <div className="col-6">
                <span className="form-icon text-secondary">
                  <i class="fas fa-phone-alt"></i>
                  <input type="tel" placeholder="Phone" />
                </span>
              </div>
            </div>

            <div className="row p-2">
              <div className="col-12">
                <textarea
                  name=""
                  id=""
                  style={{ width: "100%" }}
                  placeholder="Details"
                ></textarea>
              </div>
              <br />
              <br />
              <br />
              <div className="col-12">
                <button className="btn btn-primary pill" type="submit">
                  SEND NOW
                </button>
              </div>

              {/* <input type="button" value="hello" />
            <input type="checkbox" name="" id="" />
            <input type="color" name="" id="" />
            <input type="date" name="" id="" />
            <input type="file" name="" id="" />
            <input type="password" name="" id="" />
            <input type="range" name="" id="" />

            <input type="radio" name="name" id="" />
            <input type="radio" name="name" id="" />
            <input type="radio" name="name" id="" />

            <input type="reset" value="reset to default" /> */}
            </div>

            {/* <label htmlFor="id">name:</label>
            <input type="text" id="id" /> */}
          </form>
        </div>

        <img src={Img} alt="" className="transparent-kid" />
      </div>
    </div>
  );
}
