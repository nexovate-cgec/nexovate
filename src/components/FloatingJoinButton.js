import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaRocket, FaChevronRight } from 'react-icons/fa';
import './FloatingJoinButton.css';

const FloatingJoinButton = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  
  if (location.pathname === '/join') {
    return null;
  }

  return (
    <Link to="/join" className="floating-join-link">
      <Button 
        className="floating-join-btn startup-style"
        variant="warning"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="countdown-dots">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
        </div>
        
        <div className="btn-content">
          <div className="launch-icon">
            <FaRocket className="rocket-main" />
            <div className="flame"></div>
          </div>
          <div className="text-content">
            <span className="text-launch">Join Your</span>
            <span className="text-journey">Team</span>
          </div>
          <FaChevronRight className="arrow-icon" />
        </div>

        <div className="progress-bar"></div>
        
        {isHovered && (
          <div className="hover-glow"></div>
        )}
      </Button>
    </Link>
  );
};

export default FloatingJoinButton;