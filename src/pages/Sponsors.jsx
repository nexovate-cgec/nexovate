import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import sponsorPoster from "../assets/sponsors/iitb.jpeg";
import "./Sponsors.css";

const Sponsors = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`sponsors-page ${isDark ? "sponsors-dark" : "sponsors-light"}`}>
      <Container className="py-5 mt-5">
        
        {/* COLLABORATION CALLOUT SECTION WITH POSTER IMAGE */}
        <Row className="justify-content-center align-items-center py-4">
          {/* Left Side: Poster Image */}
          <Col lg={5} md={6} className="mb-4 mb-md-0 text-center">
            <div className="sponsor-poster-container shadow-lg rounded overflow-hidden border border-warning">
              <img 
                src={sponsorPoster} 
                alt="Calling for Sponsors" 
                className="img-fluid w-100" 
                style={{ maxHeight: "550px", objectFit: "cover" }}
              />
            </div>
          </Col>

          {/* Right Side: Details & Button */}
          <Col lg={6} md={6}>
            <Card className={`p-4 shadow-sm border-0 h-100 justify-content-center ${isDark ? "bg-secondary text-white" : "bg-white"}`}>
              <Card.Body className="text-center text-md-start">
                <h2 className="fw-bold golden-text mb-3">🚀 Be a Part of Something Bigger!</h2>
                <p className="lead mb-3">
                  From Cooch Behar to IIT Bombay, Team E-Cell CGEC is gearing up for an exciting entrepreneurial journey at the National Entrepreneurship Challenge (NEC), IIT Bombay!
                </p>
                <p className="text-muted mb-4">
                  As we prepare for this journey, we're inviting businesses, brands, and individuals to partner with us through sponsorships and help reduce the financial burden on our participating students.
                </p>

                <div className="mb-4">
                  <p className="mb-1 fw-bold">📞 For Sponsorship & Collaboration:</p>
                  <p className="text-warning mb-0 fs-5">
                    Rishav: <strong>7479059885</strong> <br />
                    Debojit: <strong>9907104189</strong>
                  </p>
                </div>

                {/* CLICK TO COLLAB BUTTON */}
                <div className="text-center text-md-start">
                  <Button 
                    as={Link} 
                    to="/sponsorship-collab" 
                    variant="warning" 
                    size="lg" 
                    className="fw-bold px-4 text-dark shadow"
                  >
                    🤝 Click to Collab / Partner With Us
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Sponsors;