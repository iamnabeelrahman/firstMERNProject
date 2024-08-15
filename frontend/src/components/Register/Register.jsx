  import React from "react";
  import { Link } from "react-router-dom"; // Import Link for navigation
  import "./Register.css";

  const Register = () => {
    return (
      <div className="register-container">
        <div className="register-card">
          <h1>Register</h1>
          <div className="input-box">
            <input id="email" type="text" placeholder="Username" required />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-box">
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
            />
            <i className="bx bx-lock-alt"></i>
          </div>
          <button
            onClick={() => {
              fetch("http://localhost:3000/register", {
                method: "POST",
                body: JSON.stringify({
                  email: document.getElementById("email").value, // Use `value` instead of `innerHTML`
                  password: document.getElementById("password").value, // Use `value` instead of `innerHTML`
                }), 
                headers: {
                  "Content-Type": "application/json" // Correct header name and value
                }
              }).then(async function (res) {
                if (res.ok) {
                  const json = await res.json();
                  alert("Account created");
                } else {
                  alert("Failed to create account"); // Handle failed responses
                }
              }).catch(function (error) {
                console.error("Error:", error); // Basic error logging
                alert("An error occurred"); // Notify user of error
              });
            }}
            
            type="button"
            className="btn"
          >
            Register
          </button>
          <div className="login">
            <p>
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    );
  };

  export default Register;
