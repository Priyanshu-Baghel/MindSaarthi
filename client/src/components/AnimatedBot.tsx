
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AnimatedBotProps {
  size?: number;
  className?: string;
}

const AnimatedBot: React.FC<AnimatedBotProps> = ({ size = 120, className = "" }) => {
  const [isWinking, setIsWinking] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsWinking(true);
    
    // Navigate to chat page after wink animation
    setTimeout(() => {
      navigate('/chat');
    }, 500);
  };

  return (
    <div 
      className={`cursor-pointer animate-float ${className}`}
      onClick={handleClick}
      style={{ width: size, height: size }}
    >
      <div className="relative bg-white rounded-full flex items-center justify-center h-full w-full shadow-md">
        <img 
          src="/lovable-uploads/5cfa53ee-6a71-479d-bb9c-acfc2e2b1d81.png"
          alt="MindSaarthi Bot"
          className="w-full h-full object-contain p-1"
        />
        <div className="absolute top-[30%] left-[25%] w-[15%] h-[15%] bg-transparent rounded-full">
          {/* Left eye */}
          <div className={`absolute inset-0 bg-mindblue rounded-full ${isWinking ? 'animate-wink' : ''}`}></div>
        </div>
        <div className="absolute top-[30%] right-[25%] w-[15%] h-[15%] bg-transparent rounded-full">
          {/* Right eye */}
          <div className="absolute inset-0 bg-mindblue rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBot;
