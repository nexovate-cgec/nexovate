import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import aboutImg from '../assets/images/about-ecell.jpeg';

// Simple arrow icon as SVG component
const ArrowRight = () => (
  <svg 
    width="16" 
    height="16" 
    fill="currentColor" 
    viewBox="0 0 16 16"
    style={{ marginLeft: '4px' }}
  >
    <path 
      fillRule="evenodd" 
      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
    />
  </svg>
);

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
            className="shadow"
            style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
          />
        </Col>
        <Col md={6}>
          <div className="ps-md-4">
            <h2 className="fw-bold mb-3" style={{ fontSize: '2.2rem', color: '#2c3e50' }}>
              About <span className="text-primary">CGEC E-Cell</span>
            </h2>
            <p className="lead" style={{ fontWeight: '500' }}>
              CGEC Entrepreneurship Cell (E-Cell) is the hub of innovation at Cooch Behar Government Engineering College.
            </p>
            <p>
              It nurtures and empowers students by providing the right ecosystem, mentorship, and industry exposure needed to turn ideas into impactful ventures.
            </p>
            <p>
              E-Cell focuses on fostering the spirit of entrepreneurship by bridging the gap between students and the startup ecosystem. With a mission to <strong>Ignite, Innovate, and Inspire</strong>, it creates a platform where creativity meets execution.
            </p>
            <p>
              Through events, workshops, and ideation support, CGEC E-Cell equips aspiring entrepreneurs with skills to transform their vision into reality while building leadership, problem-solving, and collaboration abilities.
            </p>
            <div className="mt-4">
              <Button 
                variant="primary" 
                className="me-3 mb-2"
                style={{ 
                  borderRadius: '4px',
                  padding: '10px 20px',
                  fontWeight: '600'
                }}
              >
                Learn More <ArrowRight />
              </Button>
              <Button 
                variant="outline-primary"
                className="mb-2"
                style={{ 
                  borderRadius: '4px',
                  padding: '10px 20px',
                  fontWeight: '600'
                }}
              >
                Upcoming Events
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;