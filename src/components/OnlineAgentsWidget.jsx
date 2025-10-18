import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function OnlineAgentsWidget() {
  const navigate = useNavigate();
  const [showOnlineUsers, setShowOnlineUsers] = useState(false);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [messageText, setMessageText] = useState("");
  const dropdownRef = useRef(null);
  const messageBoxRef = useRef(null);

  useEffect(() => {
    // Handle click outside to close dropdown and message box independently
    const handleClickOutside = (event) => {
      // Check if click is outside dropdown (and not inside message box)
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Don't close dropdown if clicking inside message box
        if (!messageBoxRef.current || !messageBoxRef.current.contains(event.target)) {
          setShowOnlineUsers(false);
        }
      }
      
      // Check if click is outside message box (independent of dropdown)
      if (messageBoxRef.current && !messageBoxRef.current.contains(event.target)) {
        // Don't close message box if clicking inside dropdown
        if (!dropdownRef.current || !dropdownRef.current.contains(event.target)) {
          setShowMessageBox(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Dummy agents data (online and offline)
  const allAgents = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Project Manager",
      avatar: "SJ",
      status: "online",
      lastActive: "Active now"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Developer",
      avatar: "MC",
      status: "online",
      lastActive: "Active now"
    },
    {
      id: 3,
      name: "Emma Williams",
      role: "Designer",
      avatar: "EW",
      status: "online",
      lastActive: "Active now"
    },
    {
      id: 4,
      name: "James Rodriguez",
      role: "QA Engineer",
      avatar: "JR",
      status: "offline",
      lastActive: "2 hours ago"
    },
    {
      id: 5,
      name: "Olivia Martinez",
      role: "Marketing",
      avatar: "OM",
      status: "online",
      lastActive: "Active now"
    },
    {
      id: 6,
      name: "Daniel Kim",
      role: "Backend Developer",
      avatar: "DK",
      status: "offline",
      lastActive: "Yesterday"
    },
    {
      id: 7,
      name: "Sophia Anderson",
      role: "UI/UX Designer",
      avatar: "SA",
      status: "online",
      lastActive: "Active now"
    },
    {
      id: 8,
      name: "Alexander Brown",
      role: "Data Analyst",
      avatar: "AB",
      status: "offline",
      lastActive: "3 days ago"
    }
  ];

  // Sort agents: online first, then offline
  const sortedAgents = [...allAgents].sort((a, b) => {
    if (a.status === "online" && b.status === "offline") return -1;
    if (a.status === "offline" && b.status === "online") return 1;
    return 0;
  });

  // Count online agents
  const onlineCount = allAgents.filter(agent => agent.status === "online").length;

  // Handle message icon click
  const handleMessageClick = (agent, e) => {
    e.stopPropagation();
    setSelectedAgent(agent);
    setShowMessageBox(true);
    setMessageText("");
  };

  // Handle send message
  const handleSendMessage = () => {
    if (messageText.trim()) {
      // Here you would typically send the message to your backend
      console.log(`Sending message to ${selectedAgent.name}: ${messageText}`);
      setMessageText("");
      setShowMessageBox(false);
    }
  };

  return (
    <>
      {/* Online Users Button - Bottom Right (Fixed Position) */}
      <div className="fixed bottom-8 right-8 z-50" ref={dropdownRef}>
        <button
          onClick={() => setShowOnlineUsers(!showOnlineUsers)}
          className="relative group bg-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-blue-100 hover:border-transparent"
        >
          {/* Users Icon */}
          <svg 
            className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" 
            />
          </svg>
          
          {/* Online Count Badge */}
          <span className="absolute -top-1 -right-1 w-7 h-7 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg animate-pulse">
            {onlineCount}
          </span>
        </button>

        {/* Dropdown Menu - Appears Above Button */}
        <div
          className={`absolute right-0 bottom-20 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 origin-bottom-right ${
            showOnlineUsers
              ? "opacity-100 scale-100 visible"
              : "opacity-0 scale-95 invisible"
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">Team Agents</h3>
                <p className="text-sm text-blue-100 mt-0.5">
                  {onlineCount} online · {allAgents.length - onlineCount} offline
                </p>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Agents List */}
          <div className="max-h-96 overflow-y-auto">
            {sortedAgents.map((agent, index) => (
              <div
                key={agent.id}
                className={`px-5 py-4 hover:bg-blue-50 transition-all duration-200 cursor-pointer group ${
                  index !== sortedAgents.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-200 ${
                      agent.status === 'offline' ? 'opacity-60' : ''
                    }`}>
                      {agent.avatar}
                    </div>
                    {/* Status Indicator - Green for online, Gray for offline */}
                    <div className={`absolute bottom-0 right-0 w-4 h-4 border-2 border-white rounded-full ${
                      agent.status === 'online' 
                        ? 'bg-emerald-500 animate-pulse' 
                        : 'bg-gray-400'
                    }`}></div>
                  </div>

                  {/* Agent Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 truncate">
                      {agent.name}
                    </h4>
                    <p className="text-xs text-gray-500 truncate">{agent.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        agent.status === 'online' ? 'bg-emerald-500' : 'bg-gray-400'
                      }`}></div>
                      <span className={`text-xs font-medium ${
                        agent.status === 'online' ? 'text-emerald-600' : 'text-gray-500'
                      }`}>
                        {agent.status === 'online' ? agent.lastActive : `Last seen ${agent.lastActive}`}
                      </span>
                    </div>
                  </div>

                  {/* Message Icon */}
                  <button 
                    onClick={(e) => handleMessageClick(agent, e)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 hover:bg-blue-100 rounded-lg"
                  >
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-5 py-3 border-t border-gray-100">
            <button 
              onClick={() => navigate("/manager")}
              className="w-full text-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              View All Team Members →
            </button>
          </div>
        </div>
      </div>

      {/* Message Box */}
      {showMessageBox && selectedAgent && (
        <div className="fixed bottom-8 right-28 z-50 animate-fadeIn" ref={messageBoxRef}>
          <div className="w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300">
            {/* Message Box Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm backdrop-blur-sm">
                    {selectedAgent.avatar}
                  </div>
                  <div className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-blue-600 rounded-full ${
                    selectedAgent.status === 'online' ? 'bg-emerald-500' : 'bg-gray-400'
                  }`}></div>
                </div>
                <div>
                  <h3 className="text-sm font-bold">{selectedAgent.name}</h3>
                  <p className="text-xs text-blue-100">{selectedAgent.role}</p>
                </div>
              </div>
              <button 
                onClick={() => setShowMessageBox(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Message Area */}
            <div className="p-4 bg-gray-50 h-64 overflow-y-auto">
              <div className="text-center text-gray-400 text-sm py-8">
                <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Start a conversation with {selectedAgent.name}
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!messageText.trim()}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
