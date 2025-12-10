import React from "react";

export default function UserHome() {
  const userData = window.localStorage.getItem("userName"); // Get name from storage

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "/sign-in";
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#764ba2", fontWeight: "bold" }}>Hello {userData}</h1>
          <p style={{ fontSize: "18px" }}>Welcome back to your dashboard.</p>
          <button onClick={logOut} className="btn btn-primary" style={{ marginTop: "20px" }}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}