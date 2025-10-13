import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Breadcrumb, Form, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { getUpcomingEvents, getEventsByCategory, getCompletedEvents } from "../data/events";

const AllEvents = () => {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState("all");
  
  const upcomingEvents = getUpcomingEvents();
  const completedEvents = getCompletedEvents();
  
  const filteredCompletedEvents = filter === "all" 
    ? completedEvents 
    : getEventsByCategory(filter).filter(event => event.status === "Completed");

  const categories = ["all", "competition", "workshop", "conference", "exhibition", "social"];

  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "var(--section-bg)",
        color: "var(--text-color)",
        minHeight: "100vh",
      }}
    >
      <Container>
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>All Events</Breadcrumb.Item>
        </Breadcrumb>

        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ color: "var(--text-color)" }}>
            All <span style={{ color: "var(--primary-color)" }}>Events</span>
          </h1>
          <p className="lead" style={{ color: "var(--secondary-color)" }}>
            Discover our upcoming and past events
          </p>
        </div>

        {upcomingEvents.length > 0 && (
          <div className="mb-5">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h2 className="fw-bold" style={{ color: "var(--text-color)" }}>
                📅 Upcoming Events
                <Badge bg="success" className="ms-2">
                  {upcomingEvents.length}
                </Badge>
              </h2>
            </div>

            <Row>
              {upcomingEvents.map((event) => (
                <Col lg={4} md={6} className="mb-4" key={event.id}>
                  <Card
                    className="h-100 shadow-sm border-0"
                    style={{
                      borderRadius: "12px",
                      backgroundColor: "var(--card-bg)",
                      color: "var(--text-color)",
                      transition: "transform 0.2s ease-in-out",
                      border: "2px solid var(--primary-color)",
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
                        height: "200px",
                        objectFit: "cover",
                        borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px",
                      }}
                    />
                    <Card.Body className="p-4 d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <span 
                          className="badge rounded-pill"
                          style={{
                            backgroundColor: "var(--primary-color)",
                            color: "white",
                            fontSize: "0.7rem"
                          }}
                        >
                          {event.category || "Event"}
                        </span>
                        <Badge bg="success" className="fs-6">
                          Upcoming
                        </Badge>
                      </div>
                      
                      <Card.Title className="fw-semibold" style={{ color: "var(--text-color)" }}>
                        {event.title}
                      </Card.Title>
                      
                      <Card.Subtitle
                        className="mb-2"
                        style={{ color: "var(--secondary-color)", fontSize: "0.9rem" }}
                      >
                        📅 {event.date} | 🕒 {event.time}
                      </Card.Subtitle>
                      
                      <Card.Subtitle
                        className="mb-3"
                        style={{ color: "var(--secondary-color)", fontSize: "0.8rem" }}
                      >
                        📍 {event.venue}
                      </Card.Subtitle>
                      
                      <Card.Text style={{ color: "var(--text-color)" }} className="flex-grow-1">
                        {event.description}
                      </Card.Text>
                      
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <Link to={`/events/${event.id}`}>
                          <Button
                            variant={isDark ? "outline-light" : "primary"}
                            size="sm"
                            className="rounded-pill px-3"
                          >
                            View Details
                          </Button>
                        </Link>
                        <small style={{ color: "var(--secondary-color)" }}>
                          Event #{event.id}
                        </small>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}

        {completedEvents.length > 0 && (
          <div className="mb-5">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h2 className="fw-bold" style={{ color: "var(--text-color)" }}>
                ✅ Completed Events
                <Badge bg="secondary" className="ms-2">
                  {filteredCompletedEvents.length}
                </Badge>
              </h2>
            </div>

            <div className="mb-4">
              <Form.Group>
                <Form.Label style={{ color: "var(--text-color)" }}>Filter Completed Events by Category:</Form.Label>
                <div className="d-flex flex-wrap gap-2">
                  {categories.map(category => (
                    <Button
                      key={category}
                      variant={filter === category ? "primary" : isDark ? "outline-light" : "outline-dark"}
                      size="sm"
                      className="rounded-pill text-capitalize"
                      onClick={() => setFilter(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </Form.Group>
            </div>

            <div className="mb-4">
              <p style={{ color: "var(--secondary-color)" }}>
                Showing {filteredCompletedEvents.length} completed event{filteredCompletedEvents.length !== 1 ? 's' : ''}
                {filter !== 'all' && ` in ${filter} category`}
              </p>
            </div>

            {filteredCompletedEvents.length === 0 ? (
              <div className="text-center py-5">
                <h5 style={{ color: "var(--secondary-color)" }}>
                  No completed events found in this category.
                </h5>
                <Button
                  variant={isDark ? "outline-light" : "primary"}
                  onClick={() => setFilter("all")}
                  className="mt-3"
                >
                  Show All Completed Events
                </Button>
              </div>
            ) : (
              <Row>
                {filteredCompletedEvents.map((event) => (
                  <Col lg={4} md={6} className="mb-4" key={event.id}>
                    <Card
                      className="h-100 shadow-sm border-0"
                      style={{
                        borderRadius: "12px",
                        backgroundColor: "var(--card-bg)",
                        color: "var(--text-color)",
                        transition: "transform 0.2s ease-in-out",
                        opacity: 0.9,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.opacity = "1";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.opacity = "0.9";
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={event.image}
                        alt={event.title}
                        style={{
                          height: "200px",
                          objectFit: "cover",
                          borderTopLeftRadius: "12px",
                          borderTopRightRadius: "12px",
                          filter: "grayscale(20%)",
                        }}
                      />
                      <Card.Body className="p-4 d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <span 
                            className="badge rounded-pill"
                            style={{
                              backgroundColor: "var(--secondary-color)",
                              color: "white",
                              fontSize: "0.7rem"
                            }}
                          >
                            {event.category}
                          </span>
                          <Badge bg="secondary" className="fs-6">
                            Completed
                          </Badge>
                        </div>
                        
                        <Card.Title className="fw-semibold" style={{ color: "var(--text-color)" }}>
                          {event.title}
                        </Card.Title>
                        
                        <Card.Subtitle
                          className="mb-2"
                          style={{ color: "var(--secondary-color)", fontSize: "0.9rem" }}
                        >
                          📅 {event.date} | 🕒 {event.time}
                        </Card.Subtitle>
                        
                        <Card.Subtitle
                          className="mb-3"
                          style={{ color: "var(--secondary-color)", fontSize: "0.8rem" }}
                        >
                          📍 {event.venue}
                        </Card.Subtitle>
                        
                        <Card.Text style={{ color: "var(--text-color)" }} className="flex-grow-1">
                          {event.description}
                        </Card.Text>
                        
                        <div className="d-flex justify-content-between align-items-center mt-auto">
                          <Link to={`/events/${event.id}`}>
                            <Button
                              variant={isDark ? "outline-secondary" : "outline-dark"}
                              size="sm"
                              className="rounded-pill px-3"
                            >
                              View Details
                            </Button>
                          </Link>
                          <small style={{ color: "var(--secondary-color)" }}>
                            Event #{event.id}
                          </small>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        )}

        {upcomingEvents.length === 0 && completedEvents.length === 0 && (
          <div className="text-center py-5">
            <h5 style={{ color: "var(--secondary-color)" }}>
              No events found.
            </h5>
          </div>
        )}

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

export default AllEvents;