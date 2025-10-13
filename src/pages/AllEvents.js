import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Breadcrumb, Form, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { getUpcomingEvents, getEventsByCategory, getCompletedEvents } from "../data/events";

const AllEvents = () => {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState("all");
  
  const sectionBg = isDark ? "var(--dark-bg, #121212)" : "white";
  const cardBg = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
  const textColor = isDark ? "var(--light-text, #ffffff)" : "#2c3e50";
  const secondaryTextColor = isDark ? "var(--light-text, #ffffff)" : "#2c3e50";
  const goldenColor = "rgb(189, 159, 103)";
  
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
        backgroundColor: sectionBg,
        color: textColor,
        minHeight: "100vh",
      }}
    >
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
            All Events
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="text-center mb-5">
          <h1 className="fw-bold" style={{ color: goldenColor }}>
            All <span style={{ color: textColor }}>Events</span>
          </h1>
          <p className="lead" style={{ color: textColor, opacity: "0.8" }}>
            Discover our upcoming and past events
          </p>
        </div>

        {upcomingEvents.length > 0 && (
          <div className="mb-5">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h2 className="fw-bold" style={{ color: textColor }}>
                📅 Upcoming Events
                <Badge 
                  style={{
                    backgroundColor: goldenColor,
                    color: "white"
                  }} 
                  className="ms-2"
                >
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
                      backgroundColor: cardBg,
                      color: textColor,
                      transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
                      border: `2px solid ${goldenColor}`,
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
                        height: "200px",
                        objectFit: "cover",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                      }}
                    />
                    <Card.Body className="p-4 d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <span 
                          className="badge rounded-pill px-3 py-2"
                          style={{
                            backgroundColor: goldenColor,
                            color: "white",
                            fontSize: "0.7rem",
                            fontWeight: "600"
                          }}
                        >
                          {event.category || "Event"}
                        </span>
                        <Badge 
                          style={{
                            backgroundColor: "#28a745",
                            color: "white"
                          }} 
                          className="fs-6"
                        >
                          Upcoming
                        </Badge>
                      </div>
                      
                      <Card.Title className="fw-semibold" style={{ color: textColor }}>
                        {event.title}
                      </Card.Title>
                      
                      <Card.Subtitle
                        className="mb-2"
                        style={{ color: secondaryTextColor, fontSize: "0.9rem", opacity: "0.8" }}
                      >
                        📅 {event.date} | 🕒 {event.time}
                      </Card.Subtitle>
                      
                      <Card.Subtitle
                        className="mb-3"
                        style={{ color: secondaryTextColor, fontSize: "0.8rem", opacity: "0.8" }}
                      >
                        📍 {event.venue}
                      </Card.Subtitle>
                      
                      <Card.Text style={{ color: textColor, opacity: "0.9" }} className="flex-grow-1">
                        {event.description}
                      </Card.Text>
                      
                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <Link to={`/events/${event.id}`}>
                          <Button
                            style={{
                              backgroundColor: goldenColor,
                              borderColor: goldenColor,
                              color: "white",
                              borderRadius: "20px",
                              padding: "6px 16px",
                              fontWeight: "600",
                              transition: "all 0.3s ease"
                            }}
                            size="sm"
                            className="rounded-pill px-3"
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
                        <small style={{ color: secondaryTextColor, opacity: "0.7" }}>
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
              <h2 className="fw-bold" style={{ color: textColor }}>
                ✅ Completed Events
                <Badge 
                  style={{
                    backgroundColor: "#6c757d",
                    color: "white"
                  }} 
                  className="ms-2"
                >
                  {filteredCompletedEvents.length}
                </Badge>
              </h2>
            </div>

            <div className="mb-4">
              <Form.Group>
                <Form.Label style={{ color: textColor }}>Filter Completed Events by Category:</Form.Label>
                <div className="d-flex flex-wrap gap-2">
                  {categories.map(category => (
                    <Button
                      key={category}
                      style={{
                        backgroundColor: filter === category ? goldenColor : "transparent",
                        borderColor: goldenColor,
                        color: filter === category ? "white" : goldenColor,
                        borderRadius: "20px",
                        padding: "6px 16px",
                        fontWeight: "600",
                        transition: "all 0.3s ease"
                      }}
                      size="sm"
                      className="rounded-pill text-capitalize"
                      onClick={() => setFilter(category)}
                      onMouseOver={(e) => {
                        if (filter !== category) {
                          e.target.style.backgroundColor = goldenColor;
                          e.target.style.color = "white";
                        }
                      }}
                      onMouseOut={(e) => {
                        if (filter !== category) {
                          e.target.style.backgroundColor = "transparent";
                          e.target.style.color = goldenColor;
                        }
                      }}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </Form.Group>
            </div>

            <div className="mb-4">
              <p style={{ color: secondaryTextColor, opacity: "0.8" }}>
                Showing {filteredCompletedEvents.length} completed event{filteredCompletedEvents.length !== 1 ? 's' : ''}
                {filter !== 'all' && ` in ${filter} category`}
              </p>
            </div>

            {filteredCompletedEvents.length === 0 ? (
              <div className="text-center py-5">
                <h5 style={{ color: secondaryTextColor, opacity: "0.8" }}>
                  No completed events found in this category.
                </h5>
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
                  onClick={() => setFilter("all")}
                  className="mt-3"
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
                        backgroundColor: cardBg,
                        color: textColor,
                        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
                        border: `2px solid ${goldenColor}`,
                        opacity: 0.9,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.opacity = "1";
                        e.currentTarget.style.boxShadow = isDark 
                          ? "0 10px 25px rgba(0, 0, 0, 0.4)" 
                          : "0 10px 25px rgba(189, 159, 103, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.opacity = "0.9";
                        e.currentTarget.style.boxShadow = "";
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={event.image}
                        alt={event.title}
                        style={{
                          height: "200px",
                          objectFit: "cover",
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10px",
                          filter: "grayscale(20%)",
                        }}
                      />
                      <Card.Body className="p-4 d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <span 
                            className="badge rounded-pill px-3 py-2"
                            style={{
                              backgroundColor: goldenColor,
                              color: "white",
                              fontSize: "0.7rem",
                              fontWeight: "600"
                            }}
                          >
                            {event.category}
                          </span>
                          <Badge 
                            style={{
                              backgroundColor: "#6c757d",
                              color: "white"
                            }} 
                            className="fs-6"
                          >
                            Completed
                          </Badge>
                        </div>
                        
                        <Card.Title className="fw-semibold" style={{ color: textColor }}>
                          {event.title}
                        </Card.Title>
                        
                        <Card.Subtitle
                          className="mb-2"
                          style={{ color: secondaryTextColor, fontSize: "0.9rem", opacity: "0.8" }}
                        >
                          📅 {event.date} | 🕒 {event.time}
                        </Card.Subtitle>
                        
                        <Card.Subtitle
                          className="mb-3"
                          style={{ color: secondaryTextColor, fontSize: "0.8rem", opacity: "0.8" }}
                        >
                          📍 {event.venue}
                        </Card.Subtitle>
                        
                        <Card.Text style={{ color: textColor, opacity: "0.9" }} className="flex-grow-1">
                          {event.description}
                        </Card.Text>
                        
                        <div className="d-flex justify-content-between align-items-center mt-auto">
                          <Link to={`/events/${event.id}`}>
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
                              className="rounded-pill px-3"
                              onMouseOver={(e) => {
                                e.target.style.backgroundColor = goldenColor;
                                e.target.style.color = "white";
                              }}
                              onMouseOut={(e) => {
                                e.target.style.backgroundColor = "transparent";
                                e.target.style.color = goldenColor;
                              }}
                            >
                              View Details
                            </Button>
                          </Link>
                          <small style={{ color: secondaryTextColor, opacity: "0.7" }}>
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
            <h5 style={{ color: secondaryTextColor, opacity: "0.8" }}>
              No events found.
            </h5>
          </div>
        )}

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

export default AllEvents;