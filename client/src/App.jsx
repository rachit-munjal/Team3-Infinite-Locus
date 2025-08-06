import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './assets/pages/login';
import RegisterForm from './assets/pages/register';
import UserProfile from './assets/pages/profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
