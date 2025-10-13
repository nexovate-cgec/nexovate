import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Breadcrumb, Badge, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { getAllEvents } from "../data/gallery";

const GalleryPage = () => {
  const { isDark } = useTheme();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const allEvents = getAllEvents();

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <section style={{
      backgroundColor: "var(--section-bg)",
      color: "var(--text-color)",
      padding: "60px 0",
      minHeight: "100vh"
    }}>
      <Container>
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Gallery</Breadcrumb.Item>
        </Breadcrumb>

        <div className="text-center mb-5">
          <h1 className="fw-bold display-5 mb-3">
            Event <span style={{ color: "var(--primary-color)" }}>Gallery</span>
          </h1>
          <p className="lead">
            Click on any event to view all photos
          </p>
        </div>

        <Row>
          {allEvents.map((event, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <Card 
                className="shadow-sm border-0 h-100 event-card"
                style={{
                  backgroundColor: "var(--card-bg)",
                  transition: "transform 0.3s ease",
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer"
                }}
                onClick={() => handleEventClick(event)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Card.Img
                  variant="top"
                  src={event.featuredImage}
                  alt={event.name}
                  style={{
                    height: "200px",
                    objectFit: "cover"
                  }}
                />
                <Card.Body className="p-3 d-flex flex-column">
                  <Card.Title className="h6 mb-2" style={{ color: "var(--text-color)" }}>
                    {event.name}
                  </Card.Title>
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center">
                      <Badge bg="primary">
                        {event.totalImages} Photos
                      </Badge>
                      <small className="text-muted">
                        {new Date(event.date).toLocaleDateString()}
                      </small>
                    </div>
                    <Button 
                      variant={isDark ? "outline-light" : "outline-primary"} 
                      size="sm" 
                      className="w-100 mt-2"
                    >
                      View Photos
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Modal 
          show={showModal} 
          onHide={handleCloseModal} 
          size="xl" 
          centered
          scrollable 
        >
          <Modal.Header 
            closeButton 
            style={{
              backgroundColor: isDark ? "var(--card-bg)" : "white",
              color: isDark ? "white" : "var(--text-color)",
              borderBottom: isDark ? "1px solid #444" : "1px solid #dee2e6"
            }}
          >
            <Modal.Title className="fw-bold">{selectedEvent?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body 
            style={{
              backgroundColor: isDark ? "var(--card-bg)" : "white",
              color: isDark ? "white" : "var(--text-color)",
              padding: "20px"
            }}
          >
            {selectedEvent && (
              <Row className="g-3">
                {selectedEvent.data.map((image) => (
                  <Col xl={4} lg={6} md={6} className="mb-3" key={image.id}>
                    <Card 
                      className="border-0 shadow-sm h-100"
                      style={{
                        backgroundColor: isDark ? "var(--section-bg)" : "#f8f9fa"
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={image.src}
                        alt={image.caption}
                        style={{
                          height: "250px", 
                          objectFit: "cover", 
                          width: "100%", 
                          borderRadius: "8px 8px 0 0"
                        }}
                      />
                      <Card.Body className="p-3">
                        <div className="mb-2">
                          <Badge 
                            bg={isDark ? "light" : "primary"} 
                            text={isDark ? "dark" : "white"}
                            className="text-capitalize"
                          >
                            {image.category}
                          </Badge>
                        </div>
                        <Card.Text 
                          className="mb-0 fw-medium"
                          style={{ 
                            fontSize: "0.9rem",
                            color: isDark ? "white" : "var(--text-color)"
                          }}
                        >
                          {image.caption}
                        </Card.Text>
                        <Card.Text 
                          className="small mt-1"
                          style={{ 
                            color: isDark ? "#ccc" : "var(--secondary-color)"
                          }}
                        >
                          {new Date(image.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </Modal.Body>
          <Modal.Footer 
            style={{
              backgroundColor: isDark ? "var(--card-bg)" : "white",
              color: isDark ? "white" : "var(--text-color)",
              borderTop: isDark ? "1px solid #444" : "1px solid #dee2e6"
            }}
          >
            <div className="d-flex justify-content-between w-100 align-items-center">
              <small style={{ color: isDark ? "#ccc" : "var(--secondary-color)" }}>
                {selectedEvent?.totalImages} photos in this event
              </small>
              <Button 
                variant={isDark ? "outline-light" : "outline-primary"} 
                onClick={handleCloseModal}
              >
                Close
              </Button>
            </div>
          </Modal.Footer>
        </Modal>

        <div className="text-center mt-5">
          <Link to="/">
            <Button
              variant={isDark ? "outline-light" : "outline-primary"}
              className="rounded-pill px-4"
            >
              ← Back to Home
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default GalleryPage;