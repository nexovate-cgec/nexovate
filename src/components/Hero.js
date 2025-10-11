import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Hero.css';
import heroImage from '../assets/images/full_team.jpg'; 
import collegeLogo from '../assets/images/cgec.jpeg'; 
import nexovateLogo from '../assets/images/logo.png'; 

const Hero = () => {
  return (
    <div className="hero-split d-flex align-items-center">
      {/* Background Image Container */}
      <div className="hero-background"></div>
      
      <Container className="position-relative">
        <Row className="align-items-center mb-4">
          <Col xs={6} className="text-start">
            <img 
              src={collegeLogo} 
              alt="College Logo" 
              className="hero-logo"
              style={{ maxHeight: '70px' }}
            />
          </Col>
          <Col xs={6} className="text-end">
            <img 
              src={nexovateLogo} 
              alt="Nexovate Logo" 
              className="hero-logo"
              style={{ maxHeight: '70px' }}
            />
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start pe-md-4">
            <h1 className="hero-title mb-3">
              Fuel Your <span className="highlight">Entrepreneurial</span> Spirit
            </h1>
            <p className="hero-subtitle mb-4">
              CGEC E-Cell is more than just a student club – it's a launchpad for dreamers, thinkers, and doers. 
              Here, ideas don't remain just ideas; they evolve into ventures, and students step into the roles 
              of innovators and leaders.
            </p>
            
            <div className="hero-features mb-4">
              <div className="d-flex align-items-center mb-2">
                <div className="feature-bullet me-3"></div>
                <span>Vibrant community and dedicated mentorship</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="feature-bullet me-3"></div>
                <span>Explore opportunities and take risks in a supportive environment</span>
              </div>
              <div className="d-flex align-items-center">
                <div className="feature-bullet me-3"></div>
                <span>Brainstorming sessions, startup challenges, and incubation support</span>
              </div>
            </div>
            
            <div className="d-flex flex-wrap gap-3">
            
              <Button variant="outline-light" size="lg" href="#about" className="px-4 py-2">
                Learn More
              </Button>
            </div>
          </Col>

          <Col md={6} className="text-center mt-4 mt-md-0">
            <div className="hero-image-container">
              <img src={heroImage} alt="E-Cell Team" className="hero-image rounded shadow" />
              <div className="floating-stats">
                <div className="stat-item">
                  <h4>5+</h4>
                  <p>Events</p>
                </div>
                <div className="stat-item">
                  <h4>18</h4>
                  <p>Members</p>
                </div>
                {/* <div className="stat-item">
                  <h4>XX</h4>
                  <p>Startups</p>
                </div> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;