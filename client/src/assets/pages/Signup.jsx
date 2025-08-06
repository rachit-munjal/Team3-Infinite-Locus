import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.success) {
        const data = await response.json();
        console.log("User created successfully:", data);
        alert("Signup successful! You can now log in.");
        // Optionally, redirect to the login page
      } else {
        console.error("Signup failed:", response.statusText);
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="bg-gradient-to-t from-gray-900/80 to-teal-500/20 p-8 rounded-3xl w-[340px] md:w-[400px] shadow-2xl text-white relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 tracking-wide">
          Signup
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <div className="flex items-center border-b border-gray-500 py-2">
              <span className="mr-3 text-teal-400">👤</span>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="bg-transparent outline-none flex-grow text-white placeholder-gray-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <div className="flex items-center border-b border-gray-500 py-2">
              <span className="mr-3 text-teal-400">📧</span>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none flex-grow text-white placeholder-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex items-center border-b border-gray-500 py-2">
              <span className="mr-3 text-teal-400">🔒</span>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="bg-transparent outline-none flex-grow text-white placeholder-gray-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-lg"
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
