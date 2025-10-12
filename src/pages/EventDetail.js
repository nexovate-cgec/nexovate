import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { ArrowLeft, Calendar, GeoAlt, Clock, Share, Clipboard } from "react-bootstrap-icons";
import { useTheme } from "../contexts/ThemeContext"; 
import { getEventById } from "../data/events";

const EventDetails = () => {
  const { id } = useParams();
  const { isDark } = useTheme(); 
  const event = getEventById(id);

  const copyEventLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Event link copied to clipboard!");
  };

  if (!event) {
    return (
      <Container className="my-5 py-5 text-center">
        <h2 className="fw-bold mb-3">Event not found!</h2>
        <p className="mb-4">The event you're looking for doesn't exist.</p>
        <Link to="/events">
          <Button variant={isDark ? "outline-light" : "primary"}>
            Back to Events
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <>
      {/* Simple Header */}
      <nav className={`navbar border-bottom ${isDark ? 'bg-dark navbar-dark' : 'bg-light navbar-light'}`}>
        <Container>
          <div className="d-flex justify-content-between w-100 align-items-center">
            <Link to="/events" className="navbar-brand">
              <ArrowLeft className="me-2" />
              Back to Events
            </Link>
            <Button variant={isDark ? "outline-light" : "outline-secondary"} size="sm" onClick={copyEventLink}>
              <Share className="me-2" />
              Share
            </Button>
          </div>
        </Container>
      </nav>

      <Container className="my-5">
        <Row className="justify-content-center">
          <Col lg={10}>
            
            {/* Event Header */}
            <div className="text-center mb-5">
              <Badge bg="primary" className="mb-3 fs-6">
                {event.category}
              </Badge>
              <h1 className="fw-bold display-5 mb-4">{event.title}</h1>
              
              <div className="d-flex justify-content-center gap-4 flex-wrap mb-3">
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
                    bg={isDark ? "light" : "secondary"} 
                    text={isDark ? "dark" : "light"}
                    className="me-2 mb-1"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Event Image */}
            <div className="text-center mb-5">
              <img
                src={event.image}
                alt={event.title}
                className="img-fluid rounded-3 shadow"
                style={{ maxHeight: "400px", width: "auto" }}
              />
            </div>

            <Row className="g-4">
              {/* Event Description */}
              <Col lg={8}>
                <Card className={isDark ? "bg-dark text-light" : ""}>
                  <Card.Body className="p-4">
                    <h4 className="mb-4">About This Event</h4>
                    <div
                      dangerouslySetInnerHTML={{ __html: event.fullDescription }}
                      style={{ lineHeight: "1.7" }}
                      className={isDark ? "text-light" : ""}
                    />
                  </Card.Body>
                </Card>
              </Col>

              {/* Quick Info Sidebar */}
              <Col lg={4}>
                <Card className={`shadow-sm sticky-top ${isDark ? "bg-dark text-light" : ""}`} style={{ top: "20px" }}>
                  <Card.Body>
                    <h5 className="border-bottom pb-2 mb-3">Quick Info</h5>
                    
                    <div className="mb-3">
                      <strong>Event ID:</strong>
                      <br />#{event.id}
                    </div>
                    
                    <div className="mb-3">
                      <strong>Category:</strong>
                      <br />{event.category}
                    </div>
                    
                    <div className="mb-3">
                      <strong>Date & Time:</strong>
                      <br />{event.date} at {event.time}
                    </div>
                    
                    <div className="mb-3">
                      <strong>Venue:</strong>
                      <br />{event.venue}
                    </div>

                    <div className="mb-4">
                      <strong>Status:</strong>
                      <br />
                      <Badge  className="mt-1">
                        {event.status}
                      </Badge>
                    </div>

                    <Button
                      variant={event.color}
                      href={event.src}
                      target="_blank"
                      className="w-100 mb-3"
                      disabled={!event.src}
                    >
                      {event.compleOrNot}
                    </Button>

                    {/* Contact Info if available */}
                    {event.contacts && event.contacts.length > 0 && (
                      <div className="mt-4">
                        <h6>Contact:</h6>
                        {event.contacts.map((contact, index) => (
                          <div key={index} className="small">
                            <strong>{contact.name}:</strong> {contact.number}
                          </div>
                        ))}
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Social Links */}
            <Card className={`border-0 mt-4 text-center ${isDark ? "bg-secondary text-light" : "bg-light"}`}>
  <Card.Body className="p-4">
    <h5>Follow Us</h5>
    <p className="mb-3">Stay updated with our latest events</p>
    <div className="d-flex justify-content-center gap-3 flex-wrap">
      {/* Always show all social links with fallback */}
      <a 
                         href="https://www.instagram.com/_nexovate_ecell/?igsh=MTNpZTB0N3gzYXRvZg%3D%3D#" 

        target="_blank" 
        rel="noopener noreferrer" 
        className={`btn ${isDark ? "btn-outline-light" : "btn-outline-danger"}`}
      >
        Instagram
      </a>
      
      <a 
                         href="https://www.linkedin.com/in/nexovate-ecell-041104374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 

        target="_blank" 
        rel="noopener noreferrer" 
        className={`btn ${isDark ? "btn-outline-light" : "btn-outline-primary"}`}
      >
        LinkedIn
      </a>
      
      <a 
        href="https://youtube.com/@nexovatecgec?si=hyPLtxqmlvG-AScf" 

        target="_blank" 
        rel="noopener noreferrer" 
        className={`btn ${isDark ? "btn-outline-light" : "btn-outline-danger"}`}
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