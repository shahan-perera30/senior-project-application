import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./Pages/Menu";
import TopContainer from "./Pages/TopContainer";
import Login from "./Pages/login/Login";
import Dashboard from "./Pages/dashboard/Dashboard";
import Filter from "./Pages/filter/Filter";
import ClockIn from "./Pages/clockIn/ClockIn";
import useToken from "./useToken";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken && userToken.token;
}

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <>
      <div className="login-wrapper" />
      <div className="App">
        <TopContainer />
        <div className="Menu">
          <Menu />
        </div>
        <div className="Main">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/clockIn" element={<ClockIn />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
