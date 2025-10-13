import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { events } from "../data/events";

const truncateWords = (text, wordLimit) => {
  const words = text.split(" ");
  return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
};

const Events = () => {
  const { isDark } = useTheme(); 
  
  const displayedEvents = events.slice(0, 4);
  const totalEvents = events.length;

  const sectionBg = isDark ? "var(--dark-bg, #121212)" : "white";
  const cardBg = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
  const textColor = isDark ? "var(--light-text, #ffffff)" : "#2c3e50";
  const secondaryTextColor = isDark ? "var(--light-text, #ffffff)" : "#2c3e50";
  const goldenColor = "rgb(189, 159, 103)";

  return (
    <section
      id="events"
      className="py-5"
      style={{
        backgroundColor: sectionBg,
        color: textColor, 
      }}
    >
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ color: goldenColor }}>
            Our <span style={{ color: textColor }}>Events</span>
          </h2>
          <p className="lead mb-4" style={{ color: secondaryTextColor }}>
            Discover our latest events and activities
          </p>
          
          <Link to="/events" className="text-decoration-none">
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
              size="sm"
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
              View All Events ({totalEvents})
            </Button>
          </Link>
        </div>
        
        {displayedEvents.length === 0 ? (
          <div className="text-center py-5">
            <h5 style={{ color: secondaryTextColor }}>
              No events at the moment. Check back soon!
            </h5>
          </div>
        ) : (
          <Row>
            {displayedEvents.map((event) => (
              <Col md={3} sm={6} className="mb-4" key={event.id}>
                <Card
                  className="h-100 shadow-sm border-0"
                  style={{
                    borderRadius: "12px",
                    backgroundColor: cardBg, 
                    color: textColor, 
                    transition: "transform 0.3s ease-in-out",
                    border: `2px solid ${goldenColor}`
                  }}
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
                    src={event.image}
                    alt={event.title}
                    style={{
                      height: "150px",
                      objectFit: "cover",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                  />
                  <Card.Body className="p-3 d-flex flex-column">
                    <Card.Title className="fs-6 fw-semibold" style={{ color: textColor }}>
                      {event.title}
                    </Card.Title>
                    <Card.Subtitle
                      className="mb-2"
                      style={{ color: secondaryTextColor, fontSize: "0.8rem", opacity: "0.8" }} 
                    >
                      {event.date}
                    </Card.Subtitle>
                    
                    <div className="mb-2">
                      <small 
                        className="badge rounded-pill px-3 py-1"
                        style={{ 
                          fontSize: "0.7rem",
                          backgroundColor: event.status === "Completed" ? "#28a745" : goldenColor,
                          color: "white",
                          fontWeight: "600"
                        }}
                      >
                        {event.status === "Completed" ? "Completed" : "Upcoming"}
                      </small>
                    </div>
                    
                    <Card.Text 
                      style={{ color: textColor, fontSize: "0.85rem", opacity: "0.9" }}
                      className="flex-grow-1"
                    >
                      {truncateWords(event.description, 15)}
                    </Card.Text>

                    <div className="mt-auto">
                      <small 
                        className="badge rounded-pill mb-2 px-3 py-1 bg-primary"
                        style={{
                          color: "white",
                          fontSize: "0.7rem",
                          fontWeight: "600"
                        }}
                      >
                        {event.category}
                      </small>
                      
                      <Link to={`/events/${event.id}`}>
                        <Button
                          style={{
                            backgroundColor: goldenColor,
                            borderColor: goldenColor,
                            color: "white",
                            borderRadius: "20px",
                            padding: "6px 16px",
                            fontWeight: "600",
                            fontSize: "0.85rem",
                            transition: "all 0.3s ease",
                            width: "100%"
                          }}
                          size="sm"
                          className="rounded-pill"
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
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Events;