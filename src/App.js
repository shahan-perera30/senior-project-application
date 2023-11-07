import React, { useState } from "react";
import { Route, Navigate } from "react-router-dom";
import "./App.css";
import Menu from "./Pages/Menu";
import TopContainer from "./Pages/TopContainer";
import { BrowserRouter, Routes } from "react-router-dom";

// import pages
import { Dashboard, Profile, Filter, Logout } from "./Pages";
//import components

//import components
/*import ProtectedRoutes from "./setup/utils-frontend/ProtectedRoutes";*/

function App() {
  return (
    /*<Auth0Provider>*/
    <div className="App">
      <Menu />
      <TopContainer />
      <BrowserRouter>
        <Routes>
          {/*These routes require Token for access*/}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </BrowserRouter>
    </div>
    /* </Auth0Provider>*/
  );
}

export default App;
