import React from "react";
import Img from "../../resources/images/Logo-S.png";

export default function Footer() {
  return (
    
      <footer className="main-last-footer">
        <div className="col-8 ">
          <div className="container custom-footer">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row justify-content-evenly custom-footer-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  RESOURCES
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACTUS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  DONATION
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  EVENTS
                </a>
              </li>
            </ul>
          </div>
        </div>
        
<br/>
<br/>
        <div className="last-custom-footer d-flex" style={{paddingLeft: "140px"}}>
          <div className="row ">
            
              <img src={Img} alt="" className="custom-footer-logo" />
            <div className="footer-text">
              <h6>About US</h6>
              <p>Your text goes here. This just a placeholder content.<br/> This just a placeholder content.</p>
            </div>
            
          </div>
          <div className="row d-flex" style={{justifyContent:"flex-start"}}>
            <h6>COMPANY</h6>
            <div className="col-12" >
              <ul>
              <li>Home.</li>
              <li>About</li>
              <li>Service</li>
              <li>Contact</li>
              <li>Donations</li>
              <li>Events </li>
              <li>Resourse</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-7 open-hrs">
              <h6>OPENING HOURS</h6>
              <div className="div d-flex justify-content">
                <div className="div">
                <i class="fas fa-phone-volume"></i>
                 
                </div>
                <div className="div">
               <p>+91 7777777777</p>
                </div>
              </div>
              <div className="div d-flex" >
                <div className="div">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div className="div">
                  <p>abcd@example.com</p>
                </div>
              </div>
            </div>

            <div className="col-5 follow-us-col">
              <p>Follow Us</p>
              <div className="div d-flex  justify-content-between">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-linkedin-in"></i>
              <i class="fab fa-google-plus-g"></i>
              <i class="fab fa-instagram"></i>
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
              </div>
            </div>
            
          </div>
        </div>
       
        <hr />
        <div class="text-center p-3">
    © 2020 Copyright :
    <a className="text-dark" href="#"> Shivom</a>
  </div>
      </footer>
    
  );
}