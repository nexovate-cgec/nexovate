import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { events, getUpcomingEvents } from "../data/events";

const truncateWords = (text, wordLimit) => {
  const words = text.split(" ");
  return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
};

const Events = () => {
  const { isDark } = useTheme(); 
  
  const upcomingEvents = getUpcomingEvents();
  const displayedEvents = upcomingEvents.slice(0, 4);
  const totalEvents = events.length;

  return (
    <section
      id="events"
      className="py-5"
      style={{
        backgroundColor: "var(--section-bg)",
        color: "var(--text-color)", 
      }}
    >
      <Container>
        {/* Header Section - Middle aligned */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ color: "var(--text-color)" }}>
            Our <span style={{ color: "var(--primary-color)" }}>Events</span>
          </h2>
          <p className="lead mb-4" style={{ color: "var(--secondary-color)" }}>
            Discover our latest events and activities
          </p>
          
          {/* View All Button - Also centered */}
          <Link to="/events" className="text-decoration-none">
            <Button
              variant={isDark ? "outline-light" : "outline-primary"}
              size="sm"
              className="rounded-pill px-4"
            >
              View All Events ({totalEvents})
            </Button>
          </Link>
        </div>
        
        {displayedEvents.length === 0 ? (
          <div className="text-center py-5">
            <h5 style={{ color: "var(--secondary-color)" }}>
              No upcoming events at the moment. Check back soon!
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
                    backgroundColor: "var(--card-bg)", 
                    color: "var(--text-color)", 
                    transition: "transform 0.2s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={event.image}
                    alt={event.title}
                    style={{
                      height: "150px",
                      objectFit: "cover",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                    }}
                  />
                  <Card.Body className="p-3 d-flex flex-column">
                    <Card.Title className="fs-6 fw-semibold" style={{ color: "var(--text-color)" }}>
                      {event.title}
                    </Card.Title>
                    <Card.Subtitle
                      className="mb-2"
                      style={{ color: "var(--secondary-color)", fontSize: "0.8rem" }} 
                    >
                      {event.date}
                    </Card.Subtitle>
                    <Card.Text 
                      style={{ color: "var(--text-color)", fontSize: "0.85rem" }}
                      className="flex-grow-1"
                    >
                      {truncateWords(event.description, 15)}
                    </Card.Text>

                    <div className="mt-auto">
                      <small 
                        className="badge rounded-pill mb-2"
                        style={{
                          backgroundColor: "var(--primary-color)",
                          color: "white",
                          fontSize: "0.7rem"
                        }}
                      >
                        {event.category}
                      </small>
                      
                      <Link to={`/events/${event.id}`}>
                        <Button
                          variant={isDark ? "outline-light" : "primary"}
                          size="sm"
                          className="rounded-pill px-3 w-100"
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