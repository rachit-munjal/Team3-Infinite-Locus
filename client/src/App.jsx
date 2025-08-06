import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./assets/pages/Login";
import RegisterForm from "./assets/pages/Signup.jsx";
import UserProfile from "./assets/pages/Profile";
import HomePage from "./assets/pages/Home.jsx";
import Dashboard from "./assets/pages/Dashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
