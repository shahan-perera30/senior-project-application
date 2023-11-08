import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./Pages/Menu";
import TopContainer from "./Pages/TopContainer";
import Home from "./Pages/home/Home";
import Dashboard from "./Pages/dashboard/Dashboard";
import Profile from "./Pages/profile/Profile";
import Filter from "./Pages/filter/Filter";
import ClockIn from "./Pages/clockIn/ClockIn";

function App() {
  return (
    <>
      <TopContainer />
      <Menu />
      <div className="App">
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard/" component={Dashboard} />
          <Route path="/profile/" component={Profile} />
          <Route path="/filter/" component={Filter} />
          <Route path="/clockIn/" component={ClockIn} />
        </Routes>
      </div>
    </>
  );
}

export default App;
