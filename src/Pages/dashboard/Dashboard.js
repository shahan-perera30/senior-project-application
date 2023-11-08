import React from "react";
import "/Users/shahanperera/ReactProjects/senior-project-application/src/Pages/dashboard/Dashboard.css";
import "../Container.css";
import Banner from "/Users/shahanperera/ReactProjects/senior-project-application/src/assets/images/1.jpg";

function Dashboard() {
  return (
    <div className="dashBoard">
      <div className="">
        <div
          className="banner"
          style={{
            background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
          }}
        >
          <div className="textContainer">
            <h1>Welcome back Shahan!</h1>
            <h2>Employee Position Title</h2>
            <p>Obsolescence Solved</p>
            <div className="clock">
              <a href="#" className="button1">
                Clock in
              </a>
              <p>
                Elapsed Time <span>2h 50m 45s</span>
              </p>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="filters">
            <div className="recent">
              <h2>Tasks</h2>
              <a href="" className="button2">
                Recent
              </a>
            </div>
            <div className="filter_buttons">
              <a href="" className="button1">
                Filter
              </a>
              <a href="" className="button2">
                Clock in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
