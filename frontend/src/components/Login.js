import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginType, setLoginType] = useState("User"); // Toggle state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. HARDCODED ADMIN LOGIC
    if (loginType === "Admin") {
      if (email === "admin" && password === "admin123") {
        alert("Admin Login Successful");
        window.localStorage.setItem("loggedIn", true);
        window.localStorage.setItem("userType", "Admin");
        window.location.href = "/admin-dashboard";
      } else {
        alert("Invalid Admin Credentials");
      }
    } 
    // 2. NORMAL USER LOGIC (Database Check)
    else {
      try {
        const response = await fetch("http://localhost:5000/login-user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();

        if (data.status === "ok") {
          alert("Login Successful");
          window.localStorage.setItem("loggedIn", true);
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("userType", data.data); // User or Admin
          window.localStorage.setItem("userName", data.fname); // Save Name for "Hello"
          
          if (data.data === "Admin") {
            window.location.href = "/admin-dashboard";
          } else {
            window.location.href = "/userDetails";
          }
        } else {
            alert("User Not Found or Wrong Password");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        
        {/* Toggle Switch */}
        <div className="radio-container">
          <div 
            className={loginType === "User" ? "active" : ""} 
            onClick={() => setLoginType("User")}>
            Login as User
          </div>
          <div 
            className={loginType === "Admin" ? "active" : ""} 
            onClick={() => setLoginType("Admin")}>
            Login as Admin
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <h3>{loginType === "Admin" ? "Admin Sign In" : "User Sign In"}</h3>

          <div className="mb-3">
            <label>Username / Email</label>
            <input
              type="text"
              className="form-control"
              placeholder={loginType === "Admin" ? "Enter admin username" : "Enter email"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          
          {/* Only show "Register" if it's User login */}
          {loginType === "User" && (
            <p className="forgot-password text-right mt-2">
              New User? <a href="/sign-up">Register Here</a>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}