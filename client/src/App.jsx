<<<<<<< HEAD
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
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard'; 
import ReviewPage from './pages/ReviewPage'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/review' element={<ReviewPage />} />
      <Route path='/review/:category/:buiness' element={<ReviewPage />}></Route>
    </Routes>
    </BrowserRouter>
>>>>>>> 03b9a867a1f69c6fd7d4321d8bf1f71a3d59bf3b
  );
}

export default App;
