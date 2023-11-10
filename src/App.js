import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/login/login";
import Menu from "./Pages/Menu";
import TopContainer from "./Pages/TopContainer";
import Home from "./Pages/home/Home";
import Dashboard from "./Pages/dashboard/Dashboard";
import Profile from "./Pages/profile/Profile";
import Filter from "./Pages/filter/Filter";
import ClockIn from "./Pages/clockIn/ClockIn";
import Logout from "./Pages/logout/logout";

function App() {
  return (
    <>
      <div className="App">
        <TopContainer />
        <div className="Menu">
          <Menu />
        </div>
        <div className="Main">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/clockIn" element={<ClockIn />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
