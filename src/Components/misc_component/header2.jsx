import React from "react";

export default function Header2() {
  return (
    <div>
      <div className="row">
        <div className="col-12 text-center text-secondary">
          <h1 className="custom-h2">LATEST CAMPAIGNS</h1>
        </div>

        {/* hr-line */}
        <span className="line2"></span>

        <div className="col-12 ">
          <h5 className="text-secondary text-center customh2-tp">
            Your text goes here. This is placeholder content. Your text goes
            here. This is placeholder content. Your text goes here.
          </h5>
        </div>
      </div>
    </div>
  );
}
