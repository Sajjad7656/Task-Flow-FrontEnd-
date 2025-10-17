import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundLayout from "../../components/BackgroundLayout";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    
    // Store user info in localStorage
    localStorage.setItem("userName", formData.email.split('@')[0]);
    localStorage.setItem("isAuthenticated", "true");
    
    // Navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <BackgroundLayout>
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-blue-100 relative z-10 transform transition-all duration-300 hover:shadow-3xl">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-3 shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-6 cursor-pointer">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600 text-sm">
            Sign in to continue
          </p>
        </div>

        <form className="flex flex-col space-y-3.5" onSubmit={handleSubmit}>
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2 transition-colors duration-200 group-hover:text-blue-600">
              <svg className="w-4 h-4 text-blue-500 transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full p-2.5 pl-10 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200 hover:border-blue-300 hover:shadow-md"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-2 transition-colors duration-200 group-hover:text-blue-600">
              <svg className="w-4 h-4 text-blue-500 transition-transform duration-200 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full p-2.5 pl-10 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200 hover:border-blue-300 hover:shadow-md"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-600 cursor-pointer hover:text-gray-900 transition-colors duration-200">
              <input 
                type="checkbox" 
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="mr-2 rounded w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500" 
              />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium hover:underline decoration-2 underline-offset-2 transition-all duration-200">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300 py-3 rounded-lg text-base font-bold mt-1 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 active:scale-100 flex items-center justify-center gap-2 group"
          >
            Sign In
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </form>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500 font-medium">Or continue with</span>
          </div>
        </div>

        <button className="w-full flex items-center justify-center px-6 py-2.5 border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-blue-400 transition-all duration-200 shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 group">
          <svg className="w-6 h-6 mr-3 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span className="text-base font-semibold text-gray-700">Continue with Google</span>
        </button>

        <p className="text-center mt-4 text-gray-600 text-sm">
          Don't have an account?{" "}
          <button
            onClick={() => navigate('/signup')}
            className="text-blue-600 hover:text-blue-700 font-bold hover:underline decoration-2 underline-offset-2 ml-1 transition-all duration-200 hover:scale-105 inline-block"
          >
            Sign Up
          </button>
        </p>
      </div>
    </BackgroundLayout>
  );
}
