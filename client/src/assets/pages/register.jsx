import React, { useState } from "react";

const RegisterForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const isPasswordMatch = form.password === form.confirmPassword;

  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-600">
      <div className="flex bg-white rounded-md shadow-lg max-w-4xl overflow-hidden w-full m-4">
        {/* Left Side */}
        <div className="bg-gradient-to-t from-black to-teal-500 text-white p-8 w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">INFORMATION</h2>
          <p className="text-l mb-4">
            A crowdsourced review platform enables real users to share honest
            feedback and experiences about local businesses, products, or
            services. This platform fosters community trust and transparency by
            allowing customers to rate, review, and upload photos. It empowers
            future consumers to make informed decisions and helps businesses
            improve based on authentic user insights.
          </p>

          <button className="bg-white text-white-800 px-4 py-2 rounded shadow font-semibold mt-4">
            Have An Account
          </button>
        </div>

        {/* Right Side */}
        <div className="p-8 w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-teal-600 mb-6">REGISTER FORM</h2>
          <form className="space-y-4">
            <div className="flex space-x-4 text-black">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                className="w-1/2 border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="w-1/2 border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-black"
            />

            <div className="flex space-x-4 items-center text-black">
              <div className="relative w-1/2">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 pr-8"
                />
                {form.password && (
                  <span className="absolute right-2 top-2.5 text-green-600 font-bold">✔</span>
                )}
              </div>
              <div className="relative w-1/2">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className={`w-full border ${
                    isPasswordMatch ? "border-gray-300" : "border-yellow-400"
                  } rounded px-3 py-2 pr-8`}
                />
                {!isPasswordMatch && form.confirmPassword && (
                  <span className="absolute right-2 top-2.5 text-yellow-500 font-bold">⚠</span>
                )}
              </div>
            </div>

            {!isPasswordMatch && form.confirmPassword && (
              <p className="text-sm text-yellow-600 -mt-2">Wrong Password</p>
            )}

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="agreed"
                checked={form.agreed}
                onChange={handleChange}
                className="accent-blue-600"
              />
              <label className="text-sm text-black">
                I agree to the{" "}
                <span className="text-cyan-600 underline">Terms and Conditions</span>
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
              disabled={!form.agreed}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
