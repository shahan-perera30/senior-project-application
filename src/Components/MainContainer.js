import React from "react";
import "./MainContainer.css";
import Banner from "../img/1.jpg";

function MainContainer() {
  return (
    <div className="mainContainer">
      <div className="left">
        <div
          className="banner"
          style={{
            background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
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
      </div>
      <div className="right"></div>
    </div>
  );
}

export default MainContainer;
