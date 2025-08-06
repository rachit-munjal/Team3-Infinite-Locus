import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; 
const Home = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch businesses from the backend
  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch("http://localhost:8000/business/all");
        if (!response.ok) {
          throw new Error("Failed to fetch businesses");
        }
        const data = await response.json();
        setBusinesses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/register");
  };

  const handleReview = () => {
    // Check if the user is authenticated (this is a placeholder, replace with actual auth logic)
    const isAuthenticated = false; // Replace with actual authentication check
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      alert("Redirecting to review page..."); // Replace with actual review page navigation
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Businesses</h1>
        <div className="auth-buttons">
          <button className="btn login-btn" onClick={handleLogin}>
            Login
          </button>
          <button className="btn signup-btn" onClick={handleSignup}>
            Signup
          </button>
        </div>
      </header>
      <div className="business-grid">
        {businesses.map((business) => (
          <div key={business.id} className="business-card">
            <h2>{business.name}</h2>
            <p>{business.description}</p>
            <p>
              <strong>Category:</strong> {business.category}
            </p>
            <button className="btn review-btn" onClick={handleReview}>
              Write a Review
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
