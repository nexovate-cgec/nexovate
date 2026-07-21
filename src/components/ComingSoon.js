import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ComingSoon.css";

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <Container className="text-center">
        <h1 className="coming-soon-title">COMING SOON</h1>
        <p className="coming-soon-text">
          We are currently working on this page. Stay tuned for updates!
        </p>
        <Button
          as={Link}
          to="/"
          variant="primary"
          className="coming-soon-btn"
        >
          Back to Home
        </Button>
      </Container>
    </div>
  );
};

export default ComingSoon;