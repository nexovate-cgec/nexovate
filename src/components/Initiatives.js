import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useTheme } from '../contexts/ThemeContext';
import './Initiatives.css';

const Initiatives = () => {
  const { isDark } = useTheme();

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
      <section 
        id="initiatives" 
        className="initiatives-section"
        style={{ 
          backgroundColor: isDark ? "var(--dark-bg)" : "white",
          color: isDark ? "var(--light-text)" : "#2c3e50"
        }}
      >
        <Container>
          <Row className="mt-5 pt-5">
            <Col className="text-center">
              <h3 className="display-6 fw-bold mb-3" style={{ color: "rgb(189, 159, 103)" }}>
                Our <span style={{ color: isDark ? "var(--light-text)" : "#2c3e50" }}>Initiatives</span>
              </h3>
              <p className="lead" style={{ color: isDark ? "var(--light-text)" : "#2c3e50" }}>
                Stay connected with our online platforms for continuous learning and inspiration
              </p>
            </Col>
          </Row>

          <Row className="g-4 mt-2">
            {digitalInitiatives.map((initiative, index) => (
              <Col lg={6} md={12} key={index}>
                <Card 
                  className="h-100 shadow border-0 digital-initiative-card"
                  style={{ 
                    backgroundColor: isDark ? "var(--dark-card-bg)" : "white",
                    color: isDark ? "var(--light-text)" : "#2c3e50",
                    border: "2px solid rgb(189, 159, 103)",
                    borderRadius: "15px"
                  }}
                >
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-start mb-3">
                      <span 
                        className="display-6 me-3"
                        style={{ color: "rgb(189, 159, 103)" }}
                      >
                        {initiative.icon}
                      </span>
                      <div>
                        <Card.Title 
                          className="h4 fw-bold mb-1" 
                          style={{ color: isDark ? "var(--light-text)" : "#2c3e50" }}
                        >
                          {initiative.title}
                        </Card.Title>
                        <div 
                          className="badge mb-2 px-3 py-2"
                          style={{ 
                            backgroundColor: "rgb(189, 159, 103)",
                            color: "white",
                            fontSize: "0.8rem",
                            fontWeight: "600"
                          }}
                        >
                          {initiative.platform}
                        </div>
                        <Card.Text style={{ color: isDark ? "var(--light-text)" : "#2c3e50" }}>
                          {initiative.description}
                        </Card.Text>
                      </div>
                    </div>

                    <h6 
                      className="fw-bold mt-4 mb-3" 
                      style={{ color: "rgb(189, 159, 103)" }}
                    >
                      What You'll Find:
                    </h6>
                    <Row>
                      {initiative.content.map((item, idx) => (
                        <Col sm={6} key={idx}>
                          <div className="d-flex align-items-center mb-2">
                            <span 
                              className="me-2"
                              style={{ color: "rgb(189, 159, 103)" }}
                            >
                              •
                            </span>
                            <small style={{ color: isDark ? "var(--light-text)" : "#2c3e50" }}>
                              {item}
                            </small>
                          </div>
                        </Col>
                      ))}
                    </Row>

                    <div className="mt-4 pt-2">
                      <Button 
                        style={{
                          backgroundColor: "rgb(189, 159, 103)",
                          borderColor: "rgb(189, 159, 103)",
                          color: "white",
                          padding: "10px 25px",
                          fontWeight: "600",
                          borderRadius: "25px",
                          transition: "all 0.3s ease"
                        }}
                        href={initiative.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4"
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = isDark ? "var(--dark-card-bg)" : "white";
                          e.target.style.color = "rgb(189, 159, 103)";
                          e.target.style.borderColor = "rgb(189, 159, 103)";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = "rgb(189, 159, 103)";
                          e.target.style.color = "white";
                          e.target.style.borderColor = "rgb(189, 159, 103)";
                        }}
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