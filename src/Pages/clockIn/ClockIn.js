import React, { useEffect, useState } from "react";
import "/Users/shahanperera/ReactProjects/senior-project-application/src/Pages/clockIn/clockIn.css";

function ClockIn() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div>
      className="Timer"
      <div>
        className="container"
        <div>
          className="timer-container
          <h1>Timer</h1>
          <h1>
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </h1>
          <button className="Restart">Restart</button>
          <button className="Stop">Stop</button>
        </div>
      </div>
    </div>
  );
}

export default ClockIn;
