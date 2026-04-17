import React from "react";
import { useNavigate } from "react-router-dom";
import "./FloatingSubmitIdea.css";

const FloatingSubmitIdea = () => {
  const navigate = useNavigate();

  return (
    <div
      className="floating-idea-btn"
      onClick={() => navigate("/submit-idea")}
    >
      💡 Submit Idea
    </div>
  );
};

export default FloatingSubmitIdea;
