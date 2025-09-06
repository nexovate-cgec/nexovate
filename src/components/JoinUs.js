import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const JoinUs = () => (
  <section id="join" className="py-5 bg-dark text-white">
    <Container>
      <Row className="align-items-center text-center text-md-start">
        
        {/* Left Section */}
        <Col md={4} className="mb-4 mb-md-0">
          <h2 className="fw-bold mb-3">
            Ready to <span className="text-warning">Join Entrepreneurship Challenge 2025?</span>
          </h2>
          <p className="lead mb-4">
            🚀 Got ideas? Let’s solve big problems together!
          </p>
          <Button
            variant="warning"
            size="lg"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdsepz_32xhRAHm7178TTUDOSBsrErk1D7BwLmdGhUDq8Vt0g/viewform?pli=1" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Now
          </Button>
        </Col>

        {/* Middle Section */}
        <Col md={4} className="mb-4 mb-md-0 text-center">
          <h2 className="fw-bold mb-3">
            <span className="text-info">SOCIAL MEDIA EVENT?</span>
          </h2>
          <p className="lead mb-4">
            Who knew 3 random words could make you the next Elon Musk? 🤯✨ 
          </p>
          <Button
            variant="info"
            size="lg"
            href="https://qr.me-qr.com/PiQ5rXDQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Collaborate
          </Button>
        </Col>

        {/* Right Section */}
        <Col md={4}>
          <h2 className="fw-bold mb-3">
            Want to <span className="text-danger">Join E-Cell?</span>
          </h2>
          <p className="lead mb-4">
            Be a part of CGEC’s Entrepreneurship Cell. Learn, innovate, and grow with us.
          </p>
          <Button
            variant="danger"
            size="lg"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            oops.....!!
          </Button>
        </Col>

      </Row>
    </Container>
  </section>
);

export default JoinUs;
