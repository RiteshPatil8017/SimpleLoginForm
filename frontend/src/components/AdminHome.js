import React, { useEffect, useState } from "react";
// REMOVED THE ICON IMPORTS TO FIX THE ERROR

export default function AdminHome() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getAllUsers", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "/sign-in";
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner" style={{ width: "auto", minWidth: "900px" }}>
        <h3>Admin Panel</h3>
        
        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>City</th>
                <th>State</th>
                <th>Contact</th>
                <th>User Type</th>
              </tr>
            </thead>
            <tbody>
              {data.map((i) => {
                return (
                  <tr key={i._id}>
                    <td>{i.fname}</td>
                    <td>{i.email}</td>
                    <td>{i.gender}</td>
                    <td>{i.dob}</td>
                    <td>{i.city}</td>
                    <td>{i.state}</td>
                    <td>{i.contact}</td>
                    <td>
                      <span className={i.userType === "Admin" ? "badge bg-danger" : "badge bg-primary"}>
                        {i.userType}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <button onClick={logOut} className="btn btn-primary" style={{ marginTop: "20px" }}>
          Log Out
        </button>
      </div>
    </div>
  );
}