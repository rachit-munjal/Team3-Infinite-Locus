import React from "react";

const Login = () => {
  return (
    <div className="min-w-screen  min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-600">
      <div className="bg-gradient-to-t from-black/70 to-teal-400/30 p-8 rounded-3xl w-[340px] md:w-[400px] shadow-xl text-white relative z-10">
        <h2 className="text-2xl font-semibold text-center mb-8 tracking-widest">CUSTOMER LOGIN</h2>

        <form className="space-y-6">
          <div>
            <label className="block text-sm mb-1" htmlFor="email">Email ID</label>
            <div className="flex items-center border-b border-gray-400 py-2">
              <span className="mr-2">📧</span>
              <input
                type="email"
                id="email"
                placeholder="Email ID"
                className="bg-transparent outline-none flex-grow text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1" htmlFor="password">Password</label>
            <div className="flex items-center border-b border-gray-400 py-2">
              <span className="mr-2">🔒</span>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="bg-transparent outline-none flex-grow text-white"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm mt-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 accent-teal-500" />
              Remember me
            </label>
            <button type="button" className="text-teal-400 hover:underline">
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-xl transition duration-200"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
