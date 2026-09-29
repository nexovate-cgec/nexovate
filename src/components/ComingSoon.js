


import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import "./ComingSoon.css";

const ComingSoon = () => {
  const { isDark } = useTheme();

  return (
    <div className={`coming-soon-container ${isDark ? "dark-mode" : "light-mode"}`}>
      <Container className={`coming-soon-wrapper ${isDark ? "dark-wrapper" : ""}`}>
        <Card 
          className={`text-center p-4 border-0 shadow-sm ${
            isDark ? "bg-dark text-light" : "bg-light text-dark"
          }`}
          style={{ maxWidth: "600px", margin: "40px auto" }}
        >
          <Card.Body>
            <div className="mb-3" style={{ fontSize: "3rem" }}>
              🔒
            </div>
            <h2 className="coming-soon-title mb-3">
              EUREKA! 2026
            </h2>
            <h4 className="text-danger fw-bold mb-3">
              Registration Closed
            </h4>
            <p className={isDark ? "text-light-50" : "text-muted"}>
              Thank you for your interest! The registration period for this event has ended. 
              Stay tuned for upcoming events and announcements.
            </p>
            <Button as={Link} to="/" variant={isDark ? "outline-light" : "dark"} className="mt-3">
              Back to Home
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ComingSoon;