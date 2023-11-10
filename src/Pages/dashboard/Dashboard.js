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
            /* backgroundRepeat: "no-repeat", */
            backgroundPosition: "top",
          }}
        >
          <div className="textContainer">
            <h1>Welcome back Shahan!</h1>
            <h2>Employee Position Title</h2>
            <p>Obsolescence Solved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
