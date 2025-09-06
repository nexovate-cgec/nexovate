
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => (
  <section id="contact" className="py-5">
    <Container>
      <h2 className="text-center fw-bold mb-5">Contact <span className="text-primary">Us</span></h2>
      <Row>
        <Col md={6} className="mb-4">
          <h5 className="fw-bold">Get in Touch</h5>
          <p><strong>Email:</strong> nexovatecgec@gmail.com</p>
          <p><strong>Phone:</strong> +91 XXX3091268</p>
          <p><strong>Address:</strong> Cooch Behar Government Engineering College, West Bengal, India</p>
        </Col>

        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your message..." />
            </Form.Group>

            <Button variant="primary" type="submit" disabled>
              Send Message (Inactive)
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Contact;
