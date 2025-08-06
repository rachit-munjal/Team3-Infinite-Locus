import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // 🔹 This is critical
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);

        // Navigate to the home page
        navigate("/dashboard");
      } else {
        console.error("Login failed:", response.statusText);
        alert("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="bg-gradient-to-t from-gray-900/80 to-teal-500/20 p-8 rounded-3xl w-[340px] md:w-[400px] shadow-2xl text-white relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 tracking-wide">
          Login
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
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

          <div className="flex items-center justify-between text-sm mt-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 accent-teal-500" />
              Remember me
            </label>
            <button
              type="button"
              className="text-teal-400 hover:text-teal-300 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-lg"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
