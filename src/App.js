import React from "react";
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
      <div className="App">
        <TopContainer />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/clockIn" element={<ClockIn />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
