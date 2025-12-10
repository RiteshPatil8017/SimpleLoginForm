import React, { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    fname: "", email: "", password: "", gender: "", dob: "",
    city: "", state: "", contact: "", userType: "User"
  });
  const [secretKey, setSecretKey] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if registering as Admin
    let finalData = { ...formData };
    if (secretKey === "Admin123") {
      finalData.userType = "Admin";
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });
      const data = await response.json();
      
      if (data.status === "ok") {
        alert("Registration Successful!");
        window.location.href = "/sign-in";
      } else {
        alert("Something went wrong or User exists");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          
          <div className="mb-3">
             <label>Register As Admin? (Secret Key)</label>
             <input type="text" className="form-control" placeholder="Secret Key (Optional)"
               onChange={(e) => setSecretKey(e.target.value)} />
          </div>

          <div className="mb-3">
            <label>Full Name</label>
            <input type="text" name="fname" className="form-control" placeholder="Full Name" onChange={handleChange} required/>
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input type="email" name="email" className="form-control" placeholder="Enter email" onChange={handleChange} required/>
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={handleChange} required/>
          </div>

          <div className="mb-3">
             <label>Gender: </label> &nbsp;
             <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male &nbsp;
             <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
          </div>
          
          <div className="mb-3">
             <label>Date of Birth</label>
             <input type="date" name="dob" className="form-control" onChange={handleChange} required/>
          </div>

          <div className="mb-3"><label>City</label> <input type="text" name="city" className="form-control" onChange={handleChange} /></div>
          <div className="mb-3"><label>State</label> <input type="text" name="state" className="form-control" onChange={handleChange} /></div>
          <div className="mb-3"><label>Contact</label> <input type="text" name="contact" className="form-control" onChange={handleChange} /></div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}