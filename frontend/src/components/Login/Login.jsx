import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Login.css";

const Login = () => {
  const handleLogin = () => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        if (res.ok) {
          const json = await res.json();
          alert("Login successful");
          window.location.href =
            "https://backtojannah.com/islamic-directory/"; // Redirect to external URL
        } else {
          const error = await res.json();
          alert(`Login failed: ${error.msg || "Unknown error"}`);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred during login");
      });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
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
        <button onClick={handleLogin} type="button" className="btn">
          Login
        </button>
        <div className="register">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
