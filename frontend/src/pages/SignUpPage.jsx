import { useState } from "react";
import { Link } from "react-router-dom";

export const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup attempt with:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-[448px] p-12 rounded-lg">
        <div className="text-center mb-8">
          <svg height="24" viewBox="0 0 90 20" className="mx-auto mb-4">
            <path
              d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
              fill="#FF0000"
            />
            <path
              d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
              fill="white"
            />
          </svg>
          <h1 className="text-2xl font-normal mb-2">Create your account</h1>
          <p className="text-base text-gray-600">to continue to YouTube</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-1/2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-base"
              placeholder="First name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/2 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-base"
              placeholder="Last name"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-base"
              placeholder="Email address"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-base"
              placeholder="Password"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-base"
              placeholder="Confirm password"
              required
            />
          </div>

          <div className="flex items-center justify-between pt-4">
            <Link
              to="/login"
              className="text-blue-600 font-medium text-sm hover:text-blue-800"
            >
              Sign in instead
            </Link>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-medium"
            >
              Create account
            </button>
          </div>
        </form>

        <div className="mt-8 text-sm text-gray-600">
          <p>
            By creating an account, you agree to YouTube's Terms of Service and
            acknowledge YouTube's Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};
