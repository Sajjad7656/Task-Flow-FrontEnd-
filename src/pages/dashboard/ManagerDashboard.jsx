import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

export default function ManagerDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Sample agent data - Replace with your actual data source
  const [agents, setAgents] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Agent",
      department: "Sales",
      email: "sarah.j@taskflow.com",
      status: "online",
      avatar: "SJ",
      lastActive: "Active now",
      tasksCompleted: 142,
      activeProjects: 5,
      performance: 98,
      location: "New York, USA",
      joinedDate: "Jan 2023"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Lead Agent",
      department: "Support",
      email: "michael.c@taskflow.com",
      status: "online",
      avatar: "MC",
      lastActive: "Active now",
      tasksCompleted: 238,
      activeProjects: 8,
      performance: 96,
      location: "San Francisco, USA",
      joinedDate: "Mar 2022"
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "Agent",
      department: "Marketing",
      email: "emma.w@taskflow.com",
      status: "online",
      avatar: "EW",
      lastActive: "Active now",
      tasksCompleted: 89,
      activeProjects: 3,
      performance: 94,
      location: "London, UK",
      joinedDate: "Jun 2023"
    },
    {
      id: 4,
      name: "James Rodriguez",
      role: "Senior Agent",
      department: "Development",
      email: "james.r@taskflow.com",
      status: "online",
      avatar: "JR",
      lastActive: "Active now",
      tasksCompleted: 195,
      activeProjects: 6,
      performance: 99,
      location: "Madrid, Spain",
      joinedDate: "Feb 2022"
    },
    {
      id: 5,
      name: "Olivia Martinez",
      role: "Agent",
      department: "Operations",
      email: "olivia.m@taskflow.com",
      status: "online",
      avatar: "OM",
      lastActive: "Active now",
      tasksCompleted: 167,
      activeProjects: 7,
      performance: 97,
      location: "Toronto, Canada",
      joinedDate: "Aug 2023"
    },
    {
      id: 6,
      name: "Daniel Kim",
      role: "Lead Agent",
      department: "Quality Assurance",
      email: "daniel.k@taskflow.com",
      status: "online",
      avatar: "DK",
      lastActive: "Active now",
      tasksCompleted: 221,
      activeProjects: 4,
      performance: 95,
      location: "Seoul, South Korea",
      joinedDate: "Nov 2022"
    },
    {
      id: 7,
      name: "Sophia Anderson",
      role: "Agent",
      department: "Customer Success",
      email: "sophia.a@taskflow.com",
      status: "online",
      avatar: "SA",
      lastActive: "Active now",
      tasksCompleted: 134,
      activeProjects: 5,
      performance: 93,
      location: "Sydney, Australia",
      joinedDate: "Apr 2023"
    },
    {
      id: 8,
      name: "Alexander Brown",
      role: "Senior Agent",
      department: "Research",
      email: "alex.b@taskflow.com",
      status: "online",
      avatar: "AB",
      lastActive: "Active now",
      tasksCompleted: 178,
      activeProjects: 6,
      performance: 96,
      location: "Berlin, Germany",
      joinedDate: "Dec 2022"
    }
  ]);

  // Handle message button click
  const handleMessageClick = (agent) => {
    setSelectedAgent(agent);
    setShowMessageModal(true);
  };

  // Handle send message
  const handleSendMessage = () => {
    if (messageText.trim()) {
      console.log(`Sending message to ${selectedAgent.name}: ${messageText}`);
      alert(`Message sent to ${selectedAgent.name}!`);
      setMessageText("");
      setShowMessageModal(false);
      setSelectedAgent(null);
    }
  };

  // Filter agents based on search and status
  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         agent.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         agent.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "all" || agent.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Calculate statistics
  const onlineAgents = agents.filter(a => a.status === "online").length;
  const totalTasks = agents.reduce((sum, agent) => sum + agent.tasksCompleted, 0);
  const avgPerformance = Math.round(agents.reduce((sum, agent) => sum + agent.performance, 0) / agents.length);
  const activeProjects = agents.reduce((sum, agent) => sum + agent.activeProjects, 0);

  const getStatusColor = (status) => {
    switch (status) {
      case "online":
        return "bg-emerald-500";
      case "busy":
        return "bg-amber-500";
      case "away":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  const getDepartmentColor = (department) => {
    const colors = {
      "Sales": "bg-blue-100 text-blue-700 border-blue-200",
      "Support": "bg-purple-100 text-purple-700 border-purple-200",
      "Marketing": "bg-pink-100 text-pink-700 border-pink-200",
      "Development": "bg-indigo-100 text-indigo-700 border-indigo-200",
      "Operations": "bg-teal-100 text-teal-700 border-teal-200",
      "Quality Assurance": "bg-cyan-100 text-cyan-700 border-cyan-200",
      "Customer Success": "bg-emerald-100 text-emerald-700 border-emerald-200",
      "Research": "bg-violet-100 text-violet-700 border-violet-200"
    };
    return colors[department] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  const getPerformanceColor = (performance) => {
    if (performance >= 95) return "text-emerald-600";
    if (performance >= 85) return "text-blue-600";
    if (performance >= 75) return "text-amber-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-8 mb-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h1 className="text-4xl font-bold">Agent Details</h1>
                </div>
                <p className="text-xl text-blue-100">Monitor and manage your team's online agents</p>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">{currentTime.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search agents by name, email, or department..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilterStatus("all")}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  filterStatus === "all"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilterStatus("online")}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 ${
                  filterStatus === "online"
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                Online
              </button>
            </div>
          </div>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 overflow-hidden"
            >
              {/* Card Header with Gradient */}
              <div className="relative h-24 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-4">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative flex items-start justify-between">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getDepartmentColor(agent.department)}`}>
                    {agent.department}
                  </span>
                  <div className="flex items-center gap-1">
                    <div className={`w-3 h-3 ${getStatusColor(agent.status)} rounded-full animate-pulse shadow-lg`}></div>
                    <span className="text-white text-xs font-medium">Online</span>
                  </div>
                </div>
              </div>

              {/* Avatar */}
              <div className="relative px-6 -mt-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-300">
                  {agent.avatar}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 pt-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{agent.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{agent.role}</p>
                <p className="text-xs text-gray-500 mb-4 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {agent.email}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
                    <div className="text-2xl font-bold text-blue-600">{agent.tasksCompleted}</div>
                    <div className="text-xs text-gray-600">Tasks Done</div>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-3 border border-purple-100">
                    <div className="text-2xl font-bold text-purple-600">{agent.activeProjects}</div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                </div>

                {/* Performance Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-600">Performance</span>
                    <span className={`text-sm font-bold ${getPerformanceColor(agent.performance)}`}>
                      {agent.performance}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                      style={{ width: `${agent.performance}%` }}
                    ></div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="space-y-2 text-xs text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Joined {agent.joinedDate}</span>
                  </div>
                </div>

                {/* Message Button */}
                <div className="flex justify-center">
                  <button 
                    onClick={() => handleMessageClick(agent)}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAgents.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No agents found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </main>

      {/* Message Modal */}
      {showMessageModal && selectedAgent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <style>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .hide-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          <div className="hide-scrollbar bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-5 text-white sticky top-0 z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white font-bold text-lg backdrop-blur-sm">
                    {selectedAgent.avatar}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{selectedAgent.name}</h2>
                    <p className="text-sm text-blue-100">{selectedAgent.role}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShowMessageModal(false);
                    setSelectedAgent(null);
                    setMessageText("");
                  }}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Message Area */}
            <div className="p-6">
              <div className="bg-gray-50 rounded-xl p-4 mb-4 min-h-[200px] max-h-[300px] overflow-y-auto">
                <div className="text-center text-gray-400 py-8">
                  <svg className="w-16 h-16 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <p className="text-sm">Start a conversation with {selectedAgent.name}</p>
                </div>
              </div>

              {/* Agent Info Card */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-4 border border-blue-100">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-600 mb-1">Department</p>
                    <p className="font-semibold text-gray-900">{selectedAgent.department}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Email</p>
                    <p className="font-semibold text-gray-900 text-xs truncate">{selectedAgent.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Performance</p>
                    <p className="font-semibold text-emerald-600">{selectedAgent.performance}%</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Status</p>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <p className="font-semibold text-emerald-600">Online</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-700">
                  Your Message
                </label>
                <textarea
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder={`Type your message to ${selectedAgent.name}...`}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                ></textarea>
                <p className="text-xs text-gray-500">Press Enter to send, Shift+Enter for new line</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => {
                    setShowMessageModal(false);
                    setSelectedAgent(null);
                    setMessageText("");
                  }}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendMessage}
                  disabled={!messageText.trim()}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
