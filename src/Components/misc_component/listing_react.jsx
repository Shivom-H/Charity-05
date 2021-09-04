import React from "react";

export default function listing_react() {
var array1 = [
  { name: "Education and Prevention", val: 85 },
  { name: "Trauma Care for Children", val: 75 },
  { name: "Research and Advocacy", val: 80 },
  { name: "Fundraising", val: 70 },
  { name: "Culture and Community", val: 93 },
]

  return (
    <div>
      <div className="row custom-misc2-con-chart">
        <div className="col-4">
          <h1>WHERE THE MONEY GOES</h1>
          <h5>Current operation and program spending breakdown</h5>
          <ul style={{ color: "#ff6302" }}>
            {[
              "Education and Prevention",
              "Trauma Care for Children",
              "Research and Advocacy",
              "Fundraising",
              "Culture and Community",
            ].map((data) => (
              <li>{data}</li>
            ))}
          </ul>

          <button
            className="btn btn-primary"
            style={{
              backgroundColor: "#ff6302",
              borderRadius: "50px",
              border: "none",
            }}
          >
            DONATE NOW
          </button>
        </div>
        <div className="col-8">
          <div className="height-creater">
            
            {array1.map((data) => {
              return (
                <div className="con-chart">
                  <div className="chart-bar" style={{ height: `${data.val}%` }}>
                    <div>{data.val}%</div>
                    <p>{data.name}</p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
}
