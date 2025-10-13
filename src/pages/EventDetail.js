import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { ArrowLeft, Calendar, GeoAlt, Clock, Share } from "react-bootstrap-icons";
import { useTheme } from "../contexts/ThemeContext"; 
import { getEventById } from "../data/events";

const EventDetails = () => {
  const { id } = useParams();
  const { isDark } = useTheme(); 
  const event = getEventById(id);

  const sectionBg = isDark ? "var(--dark-bg, #121212)" : "white";
  const cardBg = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
  const textColor = isDark ? "var(--light-text, #ffffff)" : "#2c3e50";
  const goldenColor = "rgb(189, 159, 103)";
  const borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";

  const copyEventLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Event link copied to clipboard!");
  };

  if (!event) {
    return (
      <Container className="my-5 py-5 text-center" style={{ backgroundColor: sectionBg, color: textColor }}>
        <h2 className="fw-bold mb-3">Event not found!</h2>
        <p className="mb-4">The event you're looking for doesn't exist.</p>
        <Link to="/events">
          <Button 
            style={{
              backgroundColor: goldenColor,
              borderColor: goldenColor,
              color: "white",
              borderRadius: "20px",
              padding: "8px 20px",
              fontWeight: "600",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
              e.target.style.color = goldenColor;
              e.target.style.borderColor = goldenColor;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = goldenColor;
              e.target.style.color = "white";
              e.target.style.borderColor = goldenColor;
            }}
          >
            Back to Events
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <>
      <nav className="navbar border-bottom" style={{ 
        backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : "white",
        borderColor: borderColor
      }}>
        <Container>
          <div className="d-flex justify-content-between w-100 align-items-center">
            <Link to="/events" className="navbar-brand" style={{ color: goldenColor }}>
              <ArrowLeft className="me-2" />
              Back to Events
            </Link>
            <Button 
              style={{
                backgroundColor: "transparent",
                borderColor: goldenColor,
                color: goldenColor,
                borderRadius: "20px",
                padding: "6px 16px",
                fontWeight: "600",
                transition: "all 0.3s ease"
              }}
              size="sm" 
              onClick={copyEventLink}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = goldenColor;
                e.target.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = goldenColor;
              }}
            >
              <Share className="me-2" />
              Share
            </Button>
          </div>
        </Container>
      </nav>

      <Container className="my-5" style={{ backgroundColor: sectionBg, color: textColor }}>
        <Row className="justify-content-center">
          <Col lg={10}>
            
            <div className="text-center mb-5">
              <Badge 
                style={{
                  backgroundColor: goldenColor,
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "600",
                  padding: "8px 16px"
                }}
                className="mb-3"
              >
                {event.category}
              </Badge>
              <h1 className="fw-bold display-5 mb-4" style={{ color: textColor }}>{event.title}</h1>
              
              <div className="d-flex justify-content-center gap-4 flex-wrap mb-3" style={{ color: textColor, opacity: "0.8" }}>
                <span className="d-flex align-items-center">
                  <Calendar className="me-2" />
                  {event.date}
                </span>
                <span className="d-flex align-items-center">
                  <Clock className="me-2" />
                  {event.time}
                </span>
                <span className="d-flex align-items-center">
                  <GeoAlt className="me-2" />
                  {event.venue}
                </span>
              </div>

              <div className="mt-3">
                {event.hashtags?.map((tag, index) => (
                  <Badge 
                    key={index} 
                    style={{
                      backgroundColor: isDark ? "var(--dark-bg, #121212)" : "#f8f9fa",
                      color: goldenColor,
                      border: `1px solid ${goldenColor}`,
                      fontWeight: "600"
                    }}
                    className="me-2 mb-1"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="text-center mb-5">
              <img
                src={event.image}
                alt={event.title}
                className="img-fluid rounded-3 shadow"
                style={{ 
                  maxHeight: "400px", 
                  width: "auto",
                  border: `3px solid ${goldenColor}`
                }}
              />
            </div>

            <Row className="g-4">
              <Col lg={8}>
                <Card style={{ 
                  backgroundColor: cardBg,
                  color: textColor,
                  border: `2px solid ${goldenColor}`,
                  borderRadius: "15px"
                }}>
                  <Card.Body className="p-4">
                    <h4 className="mb-4" style={{ color: goldenColor }}>About This Event</h4>
                    <div
                      dangerouslySetInnerHTML={{ __html: event.fullDescription }}
                      style={{ 
                        lineHeight: "1.7",
                        color: textColor,
                        opacity: "0.9"
                      }}
                    />
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={4}>
                <Card 
                  style={{ 
                    backgroundColor: cardBg,
                    color: textColor,
                    border: `2px solid ${goldenColor}`,
                    borderRadius: "15px",
                    position: "sticky",
                    top: "20px"
                  }}
                >
                  <Card.Body>
                    <h5 className="border-bottom pb-2 mb-3" style={{ color: goldenColor, borderColor: borderColor }}>
                      Quick Info
                    </h5>
                    
                    <div className="mb-3">
                      <strong style={{ color: goldenColor }}>Event ID:</strong>
                      <br />
                      <span style={{ opacity: "0.8" }}>#{event.id}</span>
                    </div>
                    
                    <div className="mb-3">
                      <strong style={{ color: goldenColor }}>Category:</strong>
                      <br />
                      <span style={{ opacity: "0.8" }}>{event.category}</span>
                    </div>
                    
                    <div className="mb-3">
                      <strong style={{ color: goldenColor }}>Date & Time:</strong>
                      <br />
                      <span style={{ opacity: "0.8" }}>{event.date} at {event.time}</span>
                    </div>
                    
                    <div className="mb-3">
                      <strong style={{ color: goldenColor }}>Venue:</strong>
                      <br />
                      <span style={{ opacity: "0.8" }}>{event.venue}</span>
                    </div>

                    <div className="mb-4">
                      <strong style={{ color: goldenColor }}>Status:</strong>
                      <br />
                      <Badge 
                        style={{
                          backgroundColor: event.status === "Completed" ? "#28a745" : goldenColor,
                          color: "white",
                          fontWeight: "600",
                          marginTop: "4px"
                        }}
                      >
                        {event.status}
                      </Badge>
                    </div>

                    <Button
                      style={{
                        backgroundColor: goldenColor,
                        borderColor: goldenColor,
                        color: "white",
                        borderRadius: "20px",
                        padding: "10px",
                        fontWeight: "600",
                        transition: "all 0.3s ease",
                        width: "100%",
                        marginBottom: "12px"
                      }}
                      href={event.src}
                      target="_blank"
                      disabled={!event.src}
                      onMouseOver={(e) => {
                        if (event.src) {
                          e.target.style.backgroundColor = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
                          e.target.style.color = goldenColor;
                          e.target.style.borderColor = goldenColor;
                        }
                      }}
                      onMouseOut={(e) => {
                        if (event.src) {
                          e.target.style.backgroundColor = goldenColor;
                          e.target.style.color = "white";
                          e.target.style.borderColor = goldenColor;
                        }
                      }}
                    >
                      {event.compleOrNot}
                    </Button>

                    {event.contacts && event.contacts.length > 0 && (
                      <div className="mt-4">
                        <h6 style={{ color: goldenColor }}>Contact:</h6>
                        {event.contacts.map((contact, index) => (
                          <div key={index} className="small" style={{ opacity: "0.8" }}>
                            <strong>{contact.name}:</strong> {contact.number}
                          </div>
                        ))}
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Card 
              style={{ 
                backgroundColor: cardBg,
                color: textColor,
                border: `2px solid ${goldenColor}`,
                borderRadius: "15px",
                marginTop: "2rem"
              }}
            >
              <Card.Body className="p-4 text-center">
                <h5 style={{ color: goldenColor }}>Follow Us</h5>
                <p className="mb-3" style={{ opacity: "0.8" }}>Stay updated with our latest events</p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <a 
                    href="https://www.instagram.com/_nexovate_ecell/?igsh=MTNpZTB0N3gzYXRvZg%3D%3D#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{
                      backgroundColor: "transparent",
                      borderColor: goldenColor,
                      color: goldenColor,
                      borderRadius: "20px",
                      padding: "8px 20px",
                      fontWeight: "600",
                      transition: "all 0.3s ease",
                      textDecoration: "none",
                      border: "1px solid"
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = goldenColor;
                      e.target.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = goldenColor;
                    }}
                  >
                    Instagram
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/nexovate-ecell-041104374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{
                      backgroundColor: "transparent",
                      borderColor: goldenColor,
                      color: goldenColor,
                      borderRadius: "20px",
                      padding: "8px 20px",
                      fontWeight: "600",
                      transition: "all 0.3s ease",
                      textDecoration: "none",
                      border: "1px solid"
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = goldenColor;
                      e.target.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = goldenColor;
                    }}
                  >
                    LinkedIn
                  </a>
                  
                  <a 
                    href="https://youtube.com/@nexovatecgec?si=hyPLtxqmlvG-AScf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{
                      backgroundColor: "transparent",
                      borderColor: goldenColor,
                      color: goldenColor,
                      borderRadius: "20px",
                      padding: "8px 20px",
                      fontWeight: "600",
                      transition: "all 0.3s ease",
                      textDecoration: "none",
                      border: "1px solid"
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = goldenColor;
                      e.target.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = goldenColor;
                    }}
                  >
                    YouTube
                  </a>
                </div>
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EventDetails;