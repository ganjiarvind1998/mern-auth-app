import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // get navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      alert("Login successful");
      localStorage.setItem("authToken", res.data.token);
      localStorage.setItem("userName", res.data.userName);

      navigate("/"); // redirect to home page
    } catch (error) {
      if (error.response) alert(error.response.data.message);
      else alert("Login failed");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 20, border: "1px solid #ccc", borderRadius: 8, boxShadow: "0 0 10px rgba(0,0,0,0.1)", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 15, borderRadius: 4, border: "1px solid #ccc", fontSize: 16 }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 20, borderRadius: 4, border: "1px solid #ccc", fontSize: 16 }}
        />
        <button
          type="submit"
          style={{ width: "100%", padding: 12, backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: 4, fontSize: 18, cursor: "pointer" }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Login
        </button>
      </form>
    </div>
  );
}
