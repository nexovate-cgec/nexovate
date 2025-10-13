import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Breadcrumb, Badge, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { getAllEvents } from "../data/gallery";

const GalleryPage = () => {
  const { isDark } = useTheme();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  const sectionBg = isDark ? "var(--dark-bg, #121212)" : "white";
  const cardBg = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
  const modalBg = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
  const modalBodyBg = isDark ? "var(--dark-bg, #121212)" : "#f8f9fa";
  const textColor = isDark ? "var(--light-text, #ffffff)" : "#2c3e50";
  const goldenColor = "rgb(189, 159, 103)";
  const borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
  
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
      backgroundColor: sectionBg,
      color: textColor,
      padding: "60px 0",
      minHeight: "100vh"
    }}>
      <Container>
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item 
            linkAs={Link} 
            linkProps={{ to: "/" }}
            style={{ color: goldenColor }}
          >
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active style={{ color: textColor }}>
            Gallery
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="text-center mb-5">
          <h1 className="fw-bold display-5 mb-3" style={{ color: goldenColor }}>
            Event <span style={{ color: textColor }}>Gallery</span>
          </h1>
          <p className="lead" style={{ color: textColor, opacity: "0.8" }}>
            Click on any event to view all photos
          </p>
        </div>

        <Row>
          {allEvents.map((event, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <Card 
                className="shadow-sm border-0 h-100 event-card"
                style={{
                  backgroundColor: cardBg,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: `2px solid ${goldenColor}`
                }}
                onClick={() => handleEventClick(event)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = isDark 
                    ? "0 10px 25px rgba(0, 0, 0, 0.4)" 
                    : "0 10px 25px rgba(189, 159, 103, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
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
                  <Card.Title className="h6 mb-2" style={{ color: textColor }}>
                    {event.name}
                  </Card.Title>
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center">
                      <Badge 
                        style={{
                          backgroundColor: goldenColor,
                          color: "white",
                          fontWeight: "600"
                        }}
                      >
                        {event.totalImages} Photos
                      </Badge>
                      <small style={{ color: textColor, opacity: "0.7" }}>
                        {new Date(event.date).toLocaleDateString()}
                      </small>
                    </div>
                    <Button 
                      style={{
                        backgroundColor: goldenColor,
                        borderColor: goldenColor,
                        color: "white",
                        borderRadius: "20px",
                        padding: "6px 16px",
                        fontWeight: "600",
                        transition: "all 0.3s ease",
                        width: "100%",
                        marginTop: "8px"
                      }}
                      size="sm"
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
          style={{
            backdropFilter: "blur(5px)"
          }}
        >
          <Modal.Header 
            closeButton 
            style={{
              backgroundColor: modalBg,
              color: textColor,
              borderBottom: `1px solid ${borderColor}`,
              borderRadius: "15px 15px 0 0"
            }}
          >
            <Modal.Title className="fw-bold" style={{ color: goldenColor }}>
              {selectedEvent?.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body 
            style={{
              backgroundColor: modalBodyBg,
              color: textColor,
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
                        backgroundColor: cardBg,
                        border: `2px solid ${goldenColor}`,
                        borderRadius: "12px",
                        transition: "transform 0.3s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
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
                          borderRadius: "10px 10px 0 0"
                        }}
                      />
                      <Card.Body className="p-3">
                        <div className="mb-2">
                          <Badge 
                            style={{
                              backgroundColor: goldenColor,
                              color: "white",
                              fontWeight: "600"
                            }}
                            className="text-capitalize"
                          >
                            {image.category}
                          </Badge>
                        </div>
                        <Card.Text 
                          className="mb-0 fw-medium"
                          style={{ 
                            fontSize: "0.9rem",
                            color: textColor
                          }}
                        >
                          {image.caption}
                        </Card.Text>
                        <Card.Text 
                          className="small mt-1"
                          style={{ 
                            color: textColor,
                            opacity: "0.7"
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
              backgroundColor: modalBg,
              color: textColor,
              borderTop: `1px solid ${borderColor}`,
              borderRadius: "0 0 15px 15px"
            }}
          >
            <div className="d-flex justify-content-between w-100 align-items-center">
              <small style={{ color: textColor, opacity: "0.7" }}>
                {selectedEvent?.totalImages} photos in this event
              </small>
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
                onClick={handleCloseModal}
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
                Close Gallery
              </Button>
            </div>
          </Modal.Footer>
        </Modal>

        <div className="text-center mt-5">
          <Link to="/">
            <Button
              style={{
                backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : "white",
                borderColor: goldenColor,
                color: goldenColor,
                borderRadius: "25px",
                padding: "8px 20px",
                fontWeight: "600",
                transition: "all 0.3s ease"
              }}
              className="rounded-pill px-4"
              onMouseOver={(e) => {
                e.target.style.backgroundColor = goldenColor;
                e.target.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
                e.target.style.color = goldenColor;
              }}
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