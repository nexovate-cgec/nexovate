import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Eureca from "../assets/images/eurecaa.jpg";
import Nec from "../assets/images/nec.jpeg";
import Entrepreneurship from "../assets/images/Entrepreneurship.jpg";
import social from "../assets/images/social.png";

const events = [
  {
    title: "NEC  2025",
    date: "July 27, 2025",
    description:
      "A tech-based ideation competition to bring ideas into action.",
    image: Nec,
    src: "https://www.instagram.com/p/DL7em9yyGx_/?igsh=NDc3eWZha2g4eG8x",
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
    src: "https://www.instagram.com/p/DN4kiXOEqf3/?igsh=Z3kzcW9md3IxcGVz",
  },
  {
    title: "SOCIAL MEDIA EVENT 🧠✨",
    date: "Sept 6, 2025",
    description:
      "Who knew 3 random words could make you the next Elon Musk? 🤯✨ Drop your wildest startup mashups & let the madness begin! 🚀🤣",
    image: social,
    src: "https://www.instagram.com/p/DN7UgdikqCy/?igsh=Nm81N2FsZjV0N3E2",
  },
];

const Events = () => (
  <section id="events" className="py-5 bg-light">
    <Container>
      <h2 className="text-center fw-bold mb-5">
        Our <span className="text-primary">Events</span>
      </h2>
      <Row>
        {events.map((event, index) => (
          <Col md={3} sm={6} className="mb-4" key={index}>
            <Card
              className="h-100 shadow-sm border-0"
              style={{ borderRadius: "12px" }}
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
              <Card.Body className="p-3">
                <Card.Title className="fs-6 fw-semibold">
                  {event.title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "0.8rem" }}>
                  {event.date}
                </Card.Subtitle>
                <Card.Text style={{ fontSize: "0.85rem" }}>
                  {event.description}
                </Card.Text>
                <Button
                  variant="primary"
                  href={event.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  disabled={event.src === "#"}
                  className="rounded-pill px-3"
                >
                  View
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
