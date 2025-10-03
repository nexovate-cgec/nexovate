import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const JoinUs = () => (
  <section id="join" className="py-5 text-white" style={{background: "linear-gradient(45deg, #272f4b, #253846d9,#718da1d9)"}}>
    <Container>
      <Row className="align-items-center text-center text-md-start">
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