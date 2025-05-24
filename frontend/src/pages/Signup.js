import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userName || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/signup", {
        userName,
        email,
        password,
      });
      alert(res.data.message);
      // optionally redirect to login page here
    } catch (error) {
      if (error.response) alert(error.response.data.message);
      else alert("Signup failed");
    }
  };

  const styles = {
    formContainer: {
      maxWidth: 400,
      margin: "40px auto",
      padding: 30,
      border: "1px solid #ddd",
      borderRadius: 8,
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      backgroundColor: "#fefefe",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      textAlign: "center",
      marginBottom: 25,
      color: "#333",
      fontWeight: 600,
    },
    input: {
      width: "100%",
      padding: 12,
      margin: "12px 0",
      border: "1.5px solid #ccc",
      borderRadius: 5,
      fontSize: 16,
      boxSizing: "border-box",
    },
    button: {
      width: "100%",
      padding: 12,
      backgroundColor: "#28a745",
      border: "none",
      borderRadius: 5,
      fontSize: 18,
      color: "white",
      fontWeight: "bold",
      cursor: "pointer",
      marginTop: 15,
    },
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.heading}>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Signup
        </button>
      </form>
    </div>
  );
}
