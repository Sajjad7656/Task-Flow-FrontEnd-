import React from "react";

export default function BackgroundLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden" style={{ backgroundColor: '#DEEBFF' }}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-indigo-300/20 to-purple-400/30 animate-float"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full filter blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200/20 rounded-full filter blur-3xl animate-float animation-delay-4000"></div>
      </div>
      
      {children}
    </div>
  );
}
