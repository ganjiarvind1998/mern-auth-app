import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const linkStyle = {
  display: "inline-block",
  margin: "10px 0",
  padding: "10px 20px",
  backgroundColor: "#007BFF",
  color: "white",
  textDecoration: "none",
  borderRadius: "5px",
  fontWeight: "bold",
};

const containerStyle = {
  maxWidth: "400px",
  margin: "50px auto",
  textAlign: "center",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={containerStyle}>
              <h2>Welcome to MERN Auth App</h2>
              <a href="/signup" style={linkStyle}>
                Signup
              </a>
              <br />
              <a href="/login" style={linkStyle}>
                Login
              </a>
            </div>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
