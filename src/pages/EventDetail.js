import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import {
  ArrowLeft, Calendar, GeoAlt, Clock, Share, Instagram, Linkedin, Youtube,
  CheckCircleFill, LightningChargeFill, TrophyFill, ShieldCheck, TelephoneFill, Check2
} from "react-bootstrap-icons";
import { useTheme } from "../contexts/ThemeContext";
import { getEventById } from "../data/events";

const EventDetail = () => {
  const { id } = useParams();
  const { isDark } = useTheme();
  const event = getEventById(id);
  const [copied, setCopied] = useState(false);

  const pageBg = isDark ? "var(--dark-bg, #121212)" : "white";
  const cardBg = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
  const innerCardBg = isDark ? "#242424" : "#f8f9fa";
  const textColor = isDark ? "var(--light-text, #ffffff)" : "#2c3e50";
  const secondaryTextColor = isDark ? "var(--light-text, #ffffff)" : "#2c3e50";
  const goldenColor = "rgb(189, 159, 103)";

  const copyEventLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!event) {
    return (
      <div style={{ minHeight: "80vh", backgroundColor: pageBg, color: textColor }} className="d-flex align-items-center justify-content-center">
        <Container className="text-center py-5">
          <h2 className="fw-bold mb-3">Event Not Found</h2>
          <p className="mb-4" style={{ color: secondaryTextColor, opacity: 0.8 }}>The requested event details could not be retrieved.</p>
          <Link to="/events">
            <Button style={{ backgroundColor: goldenColor, borderColor: goldenColor, color: "white", borderRadius: "30px", padding: "10px 24px", fontWeight: "600" }}>
              Back to All Events
            </Button>
          </Link>
        </Container>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: pageBg, color: textColor, minHeight: "100vh", paddingBottom: "4rem" }}>
      <nav className="py-3 mb-4 sticky-top" style={{ backgroundColor: cardBg, borderBottom: `2px solid ${goldenColor}`, zIndex: 100 }}>
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/events" className="text-decoration-none d-flex align-items-center fw-semibold" style={{ color: goldenColor, fontSize: "0.95rem" }}>
              <ArrowLeft className="me-2" size={18} /> Back to Events
            </Link>
            <Button
              style={{
                backgroundColor: copied ? goldenColor : cardBg,
                borderColor: goldenColor,
                color: copied ? "white" : goldenColor,
                borderRadius: "20px",
                padding: "5px 16px",
                fontWeight: "600",
                fontSize: "0.85rem",
                transition: "all 0.2s ease-in-out"
              }}
              size="sm"
              onClick={copyEventLink}
            >
              {copied ? <Check2 className="me-2" size={14} /> : <Share className="me-2" size={14} />}
              {copied ? "Copied!" : "Share"}
            </Button>
          </div>
        </Container>
      </nav>

      <Container>
        <div className="p-4 p-md-5 rounded-4 mb-4" style={{ backgroundColor: cardBg, border: `2px solid ${goldenColor}` }}>
          <Row className="align-items-center g-4">
            <Col lg={7}>
              <Badge style={{ backgroundColor: goldenColor, color: "white", fontSize: "0.85rem", fontWeight: "600", padding: "8px 16px", borderRadius: "20px" }} className="mb-3">
                {event.category}
              </Badge>
              <h1 className="fw-bold display-5 mb-2" style={{ color: textColor }}>{event.title}</h1>
              {event.subtitle && <p className="fs-5 mb-4" style={{ color: goldenColor, fontWeight: "500" }}>{event.subtitle}</p>}

              <div className="d-flex flex-wrap gap-3 mb-2" style={{ color: textColor, fontSize: "0.95rem" }}>
                <span className="d-flex align-items-center px-3 py-2 rounded-3" style={{ backgroundColor: innerCardBg, border: `1px solid ${goldenColor}` }}>
                  <Calendar className="me-2" style={{ color: goldenColor }} /> {event.date}
                </span>
                <span className="d-flex align-items-center px-3 py-2 rounded-3" style={{ backgroundColor: innerCardBg, border: `1px solid ${goldenColor}` }}>
                  <Clock className="me-2" style={{ color: goldenColor }} /> {event.time}
                </span>
                <span className="d-flex align-items-center px-3 py-2 rounded-3" style={{ backgroundColor: innerCardBg, border: `1px solid ${goldenColor}` }}>
                  <GeoAlt className="me-2" style={{ color: goldenColor }} /> {event.venue}
                </span>
              </div>
            </Col>

            <Col lg={5} className="text-center">
              <div className="p-2 rounded-4 d-inline-block" style={{ backgroundColor: innerCardBg, border: `2px solid ${goldenColor}` }}>
                <img src={event.image} alt={event.title} className="img-fluid rounded-3" style={{ maxHeight: "280px", width: "100%", objectFit: "cover" }} />
              </div>
            </Col>
          </Row>
        </div>

        <Row className="g-4">
          <Col lg={8}>
            <Card className="mb-4 shadow-sm" style={{ backgroundColor: cardBg, color: textColor, border: `2px solid ${goldenColor}`, borderRadius: "12px" }}>
              <Card.Body className="p-4 p-md-5">
                <h4 className="fw-bold mb-3 d-flex align-items-center" style={{ color: goldenColor }}>
                  <LightningChargeFill className="me-2" /> Overview
                </h4>
                <p style={{ lineHeight: "1.8", fontSize: "1.05rem", color: textColor, opacity: 0.9 }}>{event.overview}</p>

                {event.highlights && event.highlights.length > 0 && (
                  <div className="mt-4">
                    <h5 className="fw-bold mb-3" style={{ color: textColor }}>Key Highlights</h5>
                    <Row className="g-3">
                      {event.highlights.map((item, index) => (
                        <Col md={6} key={index}>
                          <div className="p-3 rounded-3 d-flex align-items-start h-100" style={{ backgroundColor: innerCardBg, border: `1px solid ${goldenColor}` }}>
                            <CheckCircleFill className="me-2 mt-1 flex-shrink-0" style={{ color: goldenColor }} />
                            <span style={{ fontSize: "0.95rem", color: textColor }}>{item}</span>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                )}

                {event.timeline && event.timeline.length > 0 && (
                  <div className="mt-5">
                    <h5 className="fw-bold mb-4" style={{ color: textColor }}>Event Timeline</h5>
                    <div className="ps-2">
                      {event.timeline.map((slot, index) => (
                        <div key={index} className="d-flex mb-3 align-items-center">
                          <span className="badge me-3 p-2" style={{ backgroundColor: goldenColor, color: "white", width: "100px", fontWeight: "600" }}>{slot.time}</span>
                          <span className="fw-semibold" style={{ fontSize: "0.95rem", color: textColor }}>{slot.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {event.rules && event.rules.length > 0 && (
                  <div className="mt-5">
                    <h5 className="fw-bold mb-3 d-flex align-items-center" style={{ color: textColor }}>
                      <ShieldCheck className="me-2" style={{ color: goldenColor }} /> Guidelines & Rules
                    </h5>
                    <div className="p-3 rounded-3" style={{ backgroundColor: innerCardBg, border: `1px solid ${goldenColor}` }}>
                      <ul className="mb-0 ps-3">
                        {event.rules.map((rule, index) => (
                          <li key={index} className="mb-2" style={{ fontSize: "0.95rem", color: textColor }}>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="shadow-sm" style={{ backgroundColor: cardBg, color: textColor, border: `2px solid ${goldenColor}`, borderRadius: "12px", position: "sticky", top: "90px" }}>
              <Card.Body className="p-4">
                <h5 className="fw-bold border-bottom pb-3 mb-4" style={{ color: goldenColor, borderColor: goldenColor }}>
                  Quick Action
                </h5>

                <div className="mb-4">
                  <small className="text-uppercase fw-bold" style={{ color: secondaryTextColor, opacity: 0.8, fontSize: "0.75rem" }}>Status</small>
                  <div className="mt-1">
                    <Badge style={{ backgroundColor: event.status === "Completed" ? "#28a745" : goldenColor, color: "white", fontWeight: "600", padding: "8px 14px", borderRadius: "8px" }}>
                      <CheckCircleFill className="me-1" size={13} /> {event.status}
                    </Badge>
                  </div>
                </div>

                {event.status.toLowerCase() === "upcoming" ? (
                  <Link to={`/apply/${event.id}`} state={{ eventTitle: event.title }} className="text-decoration-none">
                    <Button style={{ backgroundColor: goldenColor, borderColor: goldenColor, color: "white", borderRadius: "20px", padding: "10px", fontWeight: "600", width: "100%" }}>
                      Register Now
                    </Button>
                  </Link>
                ) : (
                  <Button disabled style={{ backgroundColor: "#6c757d", borderColor: "#6c757d", color: "white", borderRadius: "20px", padding: "10px", fontWeight: "600", width: "100%" }}>
                    {event.compleOrNot || "Event Finished"}
                  </Button>
                )}

                {event.prizes && event.prizes.length > 0 && (
                  <div className="mt-4 pt-3 border-top" style={{ borderColor: goldenColor }}>
                    <h6 className="fw-bold mb-3 d-flex align-items-center" style={{ color: goldenColor }}>
                      <TrophyFill className="me-2" /> Rewards & Perks
                    </h6>
                    {event.prizes.map((prize, index) => (
                      <div key={index} className="p-2 mb-2 rounded-2 small fw-semibold" style={{ backgroundColor: innerCardBg, border: `1px solid ${goldenColor}`, color: textColor }}>
                        🎁 {prize}
                      </div>
                    ))}
                  </div>
                )}

                {event.contacts && event.contacts.length > 0 && (
                  <div className="mt-4 pt-3 border-top" style={{ borderColor: goldenColor }}>
                    <h6 className="fw-bold mb-3 d-flex align-items-center" style={{ color: goldenColor }}>
                      <TelephoneFill className="me-2" /> Contacts
                    </h6>
                    {event.contacts.map((contact, index) => (
                      <div key={index} className="small mb-2" style={{ color: secondaryTextColor }}>
                        <strong style={{ color: textColor }}>{contact.name}:</strong> <br /> {contact.number}
                      </div>
                    ))}
                  </div>
                )}
              </Card.Body>
            </Card>

            <Card className="shadow-sm" style={{ backgroundColor: cardBg, color: textColor, border: `2px solid ${goldenColor}`, borderRadius: "12px", marginTop: "1.5rem" }}>
              <Card.Body className="p-4 text-center">
                <h6 className="fw-bold mb-1" style={{ color: goldenColor }}>Connect with E-Cell CGEC</h6>
                <p className="small mb-3" style={{ color: secondaryTextColor, opacity: 0.8 }}>Stay updated on upcoming opportunities</p>
                <div className="d-flex justify-content-center gap-2">
                  <a href="https://www.instagram.com/_nexovate_ecell/?igsh=MTNpZTB0N3gzYXRvZg%3D%3D#" target="_blank" rel="noopener noreferrer" className="btn btn-sm rounded-circle" style={{ backgroundColor: innerCardBg, color: textColor, border: `1px solid ${goldenColor}` }}>
                    <Instagram style={{ color: "#e1306c" }} />
                  </a>
                  <a href="https://www.linkedin.com/in/nexovate-ecell-041104374" target="_blank" rel="noopener noreferrer" className="btn btn-sm rounded-circle" style={{ backgroundColor: innerCardBg, color: textColor, border: `1px solid ${goldenColor}` }}>
                    <Linkedin style={{ color: "#0a66c2" }} />
                  </a>
                  <a href="https://youtube.com/@nexovatecgec" target="_blank" rel="noopener noreferrer" className="btn btn-sm rounded-circle" style={{ backgroundColor: innerCardBg, color: textColor, border: `1px solid ${goldenColor}` }}>
                    <Youtube style={{ color: "#ff0000" }} />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EventDetail;