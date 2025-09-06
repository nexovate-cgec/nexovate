
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Eureca from "../assets/images/eurecaa.jpg";
import Nec from "../assets/images/nec.jpeg";
import Entrepreneurship from "../assets/images/Entrepreneurship.jpg";
import social from "../assets/images/social.png";

const events = [
  {
    title: "NEC  2025",
    date: "july 27, 2025",
    description:
      "A tech-based ideation competition to bring ideas into action.",
    image: Nec,
    src: "https://www.instagram.com/p/DMK5HUDS4VE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    title: "EUREKA 2025",
    date: "Aug 16, 2025",
    description: "Eureca is conducted by CGEC",
    image: Eureca,
    src: "https://www.instagram.com/p/DNA86MbS093/?igsh=MTdxMnpzamVycXVrdg==",
  },
  {
    title: "Entrepreneurship Challenge 2025 🧠✨",
    date: "Sept 3, 2025",
    description: "🚀 Got ideas? Let’s solve big problems together!",
    image: Entrepreneurship,
    src: "https://docs.google.com/forms/d/e/1FAIpQLSdsepz_32xhRAHm7178TTUDOSBsrErk1D7BwLmdGhUDq8Vt0g/viewform?pli=1",
  },
  {
    title: "SOCIAL MEDIA EVENT🧠✨",
    date: "Sept 6, 2025",
    description: "Who knew 3 random words could make you the next Elon Musk? 🤯✨ Drop your wildest startup mashups & let the madness begin! 🚀🤣",
    image: social,
    src: "https://qr.me-qr.com/PiQ5rXDQ",
  },
];

const Events = () => (
  <section id="events" className="py-5 bg-light">
    <Container>
      <h2 className="text-center fw-bold mb-5" >
        Our <span className="text-primary ">Events</span>
      </h2>
      <Row>
        {events.map((event, index) => (
          <Col md={4} sm={6} className="mb-4" key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={event.image} alt={event.title} />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {event.date}
                </Card.Subtitle>
                <Card.Text>{event.description}</Card.Text>
                <Button
                  variant="primary"
                  href={event.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  disabled={event.src === "#"}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Events;
