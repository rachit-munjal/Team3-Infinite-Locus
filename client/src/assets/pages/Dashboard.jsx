import React, { useEffect, useState } from "react";
const token = localStorage.getItem("token");
const userId = localStorage.getItem("userId");

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:8000/user/profile`, {
          method: "GET",
          credentials: "include"
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await response.json();
        setUser(data.user);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-700">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-2xl font-bold text-center mb-4">User Profile</h2>
        <div className="space-y-4">
          <div>
            <strong>Name:</strong> <span>{user.name}</span>
          </div>
          <div>
            <strong>Email:</strong> <span>{user.email}</span>
          </div>
          <div>
            <strong>Joined:</strong>{" "}
            <span>{new Date(user.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
