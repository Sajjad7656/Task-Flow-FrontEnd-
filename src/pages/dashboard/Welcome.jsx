import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

export default function Welcome() {
  const [userName, setUserName] = useState("User");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Get user name from localStorage if available
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }

    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const stats = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Tasks Completed",
      value: "24",
      color: "from-emerald-400 to-teal-500",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Active Projects",
      value: "12",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Hours Logged",
      value: "156",
      color: "from-violet-400 to-purple-500",
      bgColor: "bg-violet-50",
      textColor: "text-violet-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Team Members",
      value: "8",
      color: "from-indigo-400 to-blue-500",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600"
    }
  ];

  const quickActions = [
    {
      title: "Create New Project",
      description: "Start a new project from scratch",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "View Analytics",
      description: "Check your performance metrics",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "from-indigo-300 to-blue-400",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      title: "Team Collaboration",
      description: "Connect with your team members",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "from-sky-300 to-cyan-400",
      bgColor: "bg-sky-50",
      iconColor: "text-sky-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-8 mb-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <span className="animate-wave inline-block">👋</span>
              {getGreeting()}, {userName}!
            </h2>
            <p className="text-xl text-blue-100 mb-4">
              Welcome to your dashboard. Here's what's happening today.
            </p>
            <div className="flex items-center gap-2 text-blue-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">{currentTime.toLocaleTimeString()}</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 hover:border-transparent transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Card Content */}
              <div className="relative p-6 transform group-hover:-translate-y-1 transition-transform duration-500">
                <div className="flex items-start justify-between mb-6">
                  {/* Icon */}
                  <div className={`${stat.bgColor} ${stat.textColor} p-4 rounded-xl shadow-sm group-hover:bg-white/20 group-hover:text-white group-hover:shadow-lg group-hover:scale-110 transition-all duration-500`}>
                    {stat.icon}
                  </div>
                  
                  {/* Trend Indicator */}
                  <div className="flex items-center gap-1 text-green-600 group-hover:text-white transition-colors duration-500">
                    <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span className="text-xs font-bold">12%</span>
                  </div>
                </div>
                
                {/* Value */}
                <div className="mb-2">
                  <div className={`text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:text-white transition-all duration-500`}>
                    {stat.value}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-gray-600 group-hover:text-white/90 font-semibold text-sm transition-colors duration-500">
                  {stat.title}
                </h3>
                
                {/* Progress Bar */}
                <div className="mt-4 h-1.5 bg-gray-100 group-hover:bg-white/20 rounded-full overflow-hidden transition-colors duration-500">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.color} group-hover:bg-white rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${(parseInt(stat.value) / 200) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 hover:border-transparent transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className="relative p-8 transform group-hover:-translate-y-1 transition-transform duration-500">
                  {/* Icon */}
                  <div className={`w-14 h-14 ${action.bgColor} ${action.iconColor} rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:bg-white/20 group-hover:text-white group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {action.icon}
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-500">
                    {action.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed transition-colors duration-500">
                    {action.description}
                  </p>
                  
                  {/* Arrow Icon */}
                  <div className="mt-5 flex items-center gap-2 text-gray-600 group-hover:text-white transition-all duration-500">
                    <span className="text-sm font-medium">Get Started</span>
                    <svg className="w-5 h-5 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full -ml-8 -mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-100/50 to-indigo-100/50 px-8 py-6 border-b border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Recent Activity
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {[
                { 
                  action: "Completed project review", 
                  time: "2 hours ago", 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  color: "from-emerald-400 to-teal-500",
                  bgColor: "bg-emerald-50",
                  iconColor: "text-emerald-600"
                },
                { 
                  action: "Updated team documentation", 
                  time: "5 hours ago", 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  ),
                  color: "from-blue-400 to-cyan-500",
                  bgColor: "bg-blue-50",
                  iconColor: "text-blue-600"
                },
                { 
                  action: "Attended team meeting", 
                  time: "Yesterday", 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ),
                  color: "from-violet-400 to-purple-500",
                  bgColor: "bg-violet-50",
                  iconColor: "text-violet-600"
                },
                { 
                  action: "Submitted weekly report", 
                  time: "2 days ago", 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  color: "from-indigo-400 to-blue-500",
                  bgColor: "bg-indigo-50",
                  iconColor: "text-indigo-600"
                }
              ].map((activity, index) => (
                <div
                  key={index}
                  className="group relative flex items-center justify-between p-5 bg-gray-50 rounded-xl hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${activity.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative flex items-center gap-4">
                    {/* Icon */}
                    <div className={`w-11 h-11 ${activity.bgColor} ${activity.iconColor} rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300`}>
                      {activity.icon}
                    </div>
                    {/* Action Text */}
                    <span className="text-gray-900 font-semibold group-hover:text-gray-900 transition-colors duration-300">
                      {activity.action}
                    </span>
                  </div>
                  
                  {/* Time Badge */}
                  <div className="relative flex items-center gap-2">
                    <span className="text-gray-500 text-sm font-medium group-hover:text-gray-700 transition-colors duration-300">
                      {activity.time}
                    </span>
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
