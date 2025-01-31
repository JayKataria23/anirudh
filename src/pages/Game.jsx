import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Flame } from 'lucide-react';

function Game() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 0 });
  const [basketPosition, setBasketPosition] = useState(50);
  const gameAreaRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (gameAreaRef.current) {
        const rect = gameAreaRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        setBasketPosition(Math.min(Math.max(x, 10), 90));
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (gameOver) return;
    const fallInterval = setInterval(() => {
      setPosition((prev) => ({
        ...prev,
        y: prev.y + 2,
      }));
      if (position.y >= 90) {
        if (Math.abs(position.x - basketPosition) < 10) {
          setScore((prev) => prev + 1);
          setPosition({ x: Math.random() * 80 + 10, y: 0 });
        } else {
          setGameOver(true);
        }
      }
    }, 50);
    return () => clearInterval(fallInterval);
  }, [position, basketPosition, gameOver]);

  const restartGame = () => {
    setScore(0);
    setGameOver(false);
    setPosition({ x: Math.random() * 80 + 10, y: 0 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-black to-red-950 p-4">
      {/* WWE-style header */}
      <div className="text-center mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 blur-lg opacity-50"></div>
        <div className="relative flex items-center justify-center gap-4">
          <Trophy className="w-8 h-8 text-yellow-400 animate-pulse" />
          <span className="text-white font-bold text-4xl bg-gradient-to-r from-yellow-400 via-white to-yellow-400 text-transparent bg-clip-text">
            SCORE: {score}
          </span>
          <Trophy className="w-8 h-8 text-yellow-400 animate-pulse" />
        </div>
      </div>

      {/* Game area with enhanced border effects */}
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 rounded-lg blur opacity-75"></div>
        <div
          ref={gameAreaRef}
          className="relative w-full h-[70vh] border-4 border-yellow-400 rounded-lg overflow-hidden bg-gradient-to-b from-black/50 to-red-900/30 backdrop-blur-sm"
        >
          {/* Ring ropes effect */}
          <div className="absolute top-0 w-full h-4 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>
          <div className="absolute bottom-0 w-full h-4 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>

          {/* Falling Anirudh image */}
          <div
            className="absolute w-16 h-16 transform transition-transform rotate-12 animate-bounce"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <img
              src="/ani.jpg"
              alt="Anirudh"
              className="w-full h-full object-cover rounded-full border-2 border-yellow-400 shadow-lg"
            />
          </div>

          {/* WWE Championship Belt Basket */}
          <div
            className="absolute bottom-0 w-32 h-24 transition-all duration-100"
            style={{
              left: `${basketPosition}%`,
              transform: 'translateX(-50%)',
            }}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 rounded-t-full transform -skew-x-12"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-red-800 to-red-900 rounded-t-full transform -skew-x-12"></div>
              <Flame className="absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-6 text-yellow-400 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Game Over Modal */}
      {gameOver && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 rounded-lg blur opacity-75 animate-pulse"></div>
            <div className="relative bg-gradient-to-b from-red-900 to-black p-8 rounded-lg border-4 border-yellow-400">
              <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-yellow-400 mb-6">
                GAME OVER!
              </h2>
              <p className="text-3xl text-white mb-6">Final Score: {score}</p>
              <button
                onClick={restartGame}
                className="relative group px-8 py-4 bg-gradient-to-r from-red-700 to-red-900 text-white font-bold text-xl rounded-lg transform transition-all hover:scale-105 border-2 border-yellow-400 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 animate-shine"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <Flame className="w-5 h-5 text-yellow-400" />
                  PLAY AGAIN
                  <Flame className="w-5 h-5 text-yellow-400" />
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
