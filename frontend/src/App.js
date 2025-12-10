import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import UserHome from "./components/UserHome";
import AdminHome from "./components/AdminHome";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={isLoggedIn === "true" ? <UserHome /> : <Login />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/userDetails" element={<UserHome />} />
          <Route path="/admin-dashboard" element={<AdminHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;