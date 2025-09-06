
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import aboutImg from '../assets/images/about-ecell.jpeg';

const About = () => (
  <section id="about" className="py-5 bg-light">
    <Container>
      <Row className="align-items-center">
        <Col md={6} className="mb-4 mb-md-0">
          <Image
            src={aboutImg}
            alt="About CGEC ECELL"
            fluid
            rounded
          />
        </Col>
        <Col md={6}>
          <h2 className="fw-bold mb-3">About <span className="text-primary">CGEC ECELL</span></h2>
          <p>
            CGEC Entrepreneurship Cell is the heartbeat of innovation at Cooch Behar Government Engineering College. 
            We foster the spirit of entrepreneurship by providing the right ecosystem, mentorship, and real-world exposure.
          </p>
          <p>
            Our mission is to bridge the gap between students and the startup ecosystem through events, workshops, and ideation support.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
