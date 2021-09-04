import React from "react";
import Logo from "../../resources/images/Logo-S.png";

export default function Header1() {
  return (
    <div>
      <div className="row">
        <div className="col-12 text-center">
          <img src={Logo} alt="" className="custom-logo-02 img-thumbnail" />
        </div>
        
        <div className="col-12">
          <h1 className="custom-h1-num text-secondary text-center">
            <span>5032654</span> number of supporters worldwide
          </h1>
        </div>

        {/* hr-line */}

          <span className="line2"></span>

      </div>
    </div>
  );
}
