import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flame } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-red-800 via-black to-red-950">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTQuNjI3IDQuMzczYy0uMzI3LS4zMjctLjY1NC0uNTQ1LTEuMDktLjU0NS0uNDM2IDAtLjc2My4yMTgtMS4wOS41NDVMMzAgMjYuMjFsLTIyLjQ0Ny0yMS44MzdjLS4zMjctLjMyNy0uNjU0LS41NDUtMS4wOS0uNTQ1LS40MzYgMC0uNzYzLjIxOC0xLjA5LjU0NWwtLjU0NS41NDVjLS4zMjcuMzI3LS41NDUuNjU0LS41NDUgMS4wOSAwIC40MzYuMjE4Ljc2My41NDUgMS4wOUwyNi4yMSAzMCA0LjM3MyA1Mi40NDdjLS4zMjcuMzI3LS41NDUuNjU0LS41NDUgMS4wOSAwIC40MzYuMjE4Ljc2My41NDUgMS4wOWwuNTQ1LjU0NWMuMzI3LjMyNy42NTQuNTQ1IDEuMDkuNTQ1LjQzNiAwIC43NjMtLjIxOCAxLjA5LS41NDVMMzAgMzMuNzkbDIyLjQ0NyAyMS44MzdjLjMyNy4zMjcuNjU0LjU0NSAxLjA5LjU0NS40MzYgMCAuNzYzLS4yMTggMS4wOS0uNTQ1bC41NDUtLjU0NWMuMzI3LS4zMjcuNTQ1LS42NTQuNTQ1LTEuMDkgMC0uNDM2LS4yMTgtLjc2My0uNTQ1LTEuMDlMMzMuNzkgMzBsMjEuODM3LTIyLjQ0N2MuMzI3LS4zMjcuNTQ1LS42NTQuNTQ1LTEuMDkgMC0uNDM2LS4yMTgtLjc2My0uNTQ1LTEuMDlaIiBmaWxsPSIjZmZkNzAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-20 animate-pulse"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        {/* Title container with effects */}
        <div className="relative mb-16">
          {/* Multiple layers for glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 blur-xl opacity-75 animate-pulse"></div>
          <div className="absolute -inset-2 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 blur-lg opacity-50 animate-flame"></div>
          
          {/* Main title */}
          <h1 className="relative text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-yellow-400 text-center tracking-wider transform hover:scale-105 transition-transform duration-300 animate-title">
            HAPPY BIRTHDAY
          </h1>
        </div>

        {/* WWE Championship belt with Anirudh text */}
        <div className="relative w-full max-w-2xl mb-8">
          {/* Championship belt background */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 rounded-full transform -skew-x-12"></div>
          <div className="absolute inset-2 bg-gradient-to-r from-red-800 to-red-900 rounded-full transform -skew-x-12"></div>
          
          {/* Anirudh text with enhanced visibility */}
          <div className="relative z-20 py-4">
            <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-yellow-400 text-center tracking-widest animate-pulse">
              ANIRUDH
            </h2>
          </div>
        </div>

        {/* Enhanced Play Game button */}
        <button
          onClick={() => navigate('/game')}
          className="relative group px-12 py-6 bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white font-bold text-3xl rounded-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl border-4 border-yellow-400 overflow-hidden"
        >
          {/* Button background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 animate-shine"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-red-600 blur opacity-30 group-hover:opacity-75 transition-opacity duration-300"></div>
          
          {/* Button content */}
          <div className="relative flex items-center space-x-2">
            <Flame className="w-6 h-6 text-yellow-400 animate-bounce" />
            <span className="tracking-wider">PLAY NOW</span>
            <Flame className="w-6 h-6 text-yellow-400 animate-bounce" />
          </div>
        </button>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
    </div>
  );
};

export default Home;