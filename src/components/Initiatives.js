import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Initiatives.css';

const Initiatives = () => {
 



  

  const digitalInitiatives = [
    {
      title: "Insights for Innovators: The CGEC E-Cell Blog",
      description: "Bridging the gap between academic learning and the dynamic world of startups.",
      icon: "📚",
      platform: "LinkedIn",
      content: [
        "Founder Journeys: Deconstructing success stories of giants like Nykaa",
        "Startup Strategies: Exploring pivoting, scalability, and disruptive innovation",
        "Practical Guidance: Advice on securing investors and avoiding common mistakes",
        "Ecosystem Analysis: Unpacking lessons from platforms like Shark Tank"
      ],
      cta: "Follow Us on LinkedIn",
      link: "https://www.linkedin.com/in/nexovate-ecell-041104374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "primary"
    },
    {
      title: "Inspiration on the Go: The CGEC E-Cell on Instagram",
      description: "Your daily source for inspiration, quick-learning, and community updates.",
      icon: "📱",
      platform: "Instagram",
      content: [
        "Bite-Sized Learning: Carousels on pitching, funding, and business strategy",
        "Founder Spotlights: Quick case studies on successful entrepreneurs",
        "Dynamic Reels: Short videos with quick hacks and motivation",
        "Event Updates: Live coverage of workshops and competitions"
      ],
      cta: "Follow @cgec_ecell",
      link: "https://www.instagram.com/_nexovate_ecell/?igsh=MTNpZTB0N3gzYXRvZg%3D%3D#",
      color: "danger"
    }
  ];

  return (
    <>
      <section id="initiatives" className=" bg-light">
        <Container>
          
          {/* Digital Initiatives Section */}
          <Row className="mt-5 pt-5">
            <Col className="text-center">
              <h3 className="display-6 fw-bold mb-3">Our <span className="text-warning">Initiatives</span></h3>
              <p className="lead text-muted">Stay connected with our online platforms for continuous learning and inspiration</p>
            </Col>
          </Row>

          <Row className="g-4 mt-2">
            {digitalInitiatives.map((initiative, index) => (
              <Col lg={6} md={12} key={index}>
                <Card className="h-100 shadow border-0 digital-initiative-card">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-start mb-3">
                      <span className="display-6 me-3">{initiative.icon}</span>
                      <div>
                        <Card.Title className="h4 fw-bold mb-1">{initiative.title}</Card.Title>
                        <div className="badge bg-light text-dark mb-2">{initiative.platform}</div>
                        <Card.Text className="text-muted">{initiative.description}</Card.Text>
                      </div>
                    </div>

                    <h6 className="fw-bold mt-4 mb-3">What You'll Find:</h6>
                    <Row>
                      {initiative.content.map((item, idx) => (
                        <Col sm={6} key={idx}>
                          <div className="d-flex align-items-center mb-2">
                            <span className="text-warning me-2">•</span>
                            <small>{item}</small>
                          </div>
                        </Col>
                      ))}
                    </Row>

                    <div className="mt-4 pt-2">
                      <Button 
                        variant={initiative.color} 
                        href={initiative.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4"
                      >
                        {initiative.cta}
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      
    </>
  );
};

export default Initiatives;