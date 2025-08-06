import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const dummyUser = {
      profileImage: "https://i.pravatar.cc/150?img=3",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+91-9876543210",
      reviews: [
        "Great service at XYZ restaurant!",
        "Loved the ambiance at ABC café.",
        "Quick delivery and tasty food!"
      ]
    };
    setUser(dummyUser);
  }, []);

  const handleLogout = () => {
    console.log("Logging out...");
  };

  const handleEdit = (field) => {
    console.log(`Editing ${field}`);
  };

  if (!user) return <div className="text-center mt-10 text-lg">Loading profile...</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-12">
      <div className="flex items-center gap-6">
        <img
          src={user.profileImage}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-2 border-gray-300"
        />
        <button
          onClick={() => handleEdit("profileImage")}
          className="text-sm text-blue-600 underline hover:text-blue-800"
        >
          Edit
        </button>
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <button
            onClick={() => handleEdit("name")}
            className="text-sm text-blue-600 underline hover:text-blue-800"
          >
            Edit
          </button>
        </div>

        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-600">{user.email}</p>
          <button
            onClick={() => handleEdit("email")}
            className="text-sm text-blue-600 underline hover:text-blue-800"
          >
            Edit
          </button>
        </div>

        <p className="text-gray-600 mt-2">📞 Phone: {user.phone}</p>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Review History</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {user.reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={handleLogout}
          className="mt-8 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
