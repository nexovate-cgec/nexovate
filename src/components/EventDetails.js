import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import {
  ArrowLeft,
  Calendar,
  GeoAlt,
  Share,
  Youtube,
  Linkedin,
  Instagram,
  Link45deg,
  Clipboard,
} from "react-bootstrap-icons";
import Eureca from "../assets/images/eurecaa.jpg";
import Nec from "../assets/images/nec.jpeg";
import Entrepreneurship from "../assets/images/Entrepreneurship.jpg";
import social from "../assets/images/social.png";

const eventsData = [
  {
    id: 1,
    title: "NEC 2025",
    date: "July 27, 2025",
    description:
      "A tech-based ideation competition to bring ideas into action.",
    image: Nec,
    status:"Event Finished !",
    color:"danger",
    src: "",
    fullDescription: `
                              <p><strong>NEC 2025</strong> is our flagship tech-based ideation competition designed to transform innovative ideas into actionable solutions. This event brings together the brightest minds to tackle real-world challenges through technology.</p>
                              
                              <h5>Event Highlights:</h5>
                              <ul>
                                <li>Ideation workshops and mentoring sessions</li>
                                <li>Prototype development guidance</li>
                                <li>Networking with industry experts</li>
                                <li>Prize distribution for top innovations</li>
                              </ul>
                              
                              <h5>Who should participate?</h5>
                              <p>Students, aspiring entrepreneurs, and tech enthusiasts who want to bring their ideas to life.</p>
                            `,
    venue: "CGEC Campus Auditorium",
    time: "",
    category: "Tech Competition",
    socialLinks: {
      instagram:
        "https://www.instagram.com/_nexovate_ecell/?igsh=MTNpZTB0N3gzYXRvZg%3D%3D#",
      linkedin:
        "https://www.linkedin.com/in/nexovate-ecell-041104374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      youtube: "https://youtube.com/@nexovatecgec?si=hyPLtxqmlvG-AScf",
    },
    hashtags: ["#NEC2025", "#TechCompetition", "#Innovation"],
  },
  {
    id: 2,
    title: "EUREKA 2025",
    date: "Aug 16, 2025",
    description: "Eureca is conducted by CGEC",
    status:"Event Finished !",
    color:"danger",
    image: Eureca,
    src: "",
    fullDescription: `
                              <p><strong>EUREKA 2025</strong> is an annual innovation fest conducted by CGEC that celebrates creativity and problem-solving.</p>
                              
                              <h5>Event Features:</h5>
                              <ul>
                                <li>Innovation challenges across multiple domains</li>
                                <li>Expert keynote sessions</li>
                                <li>Hands-on workshops</li>
                                <li>Project exhibition and demo sessions</li>
                              </ul>
                            `,
    venue: "Main Conference Hall",
    time: "9:00 AM - 6:00 PM",
    category: "Innovation Fest",
    socialLinks: {
      instagram:
        "https://www.instagram.com/_nexovate_ecell/?igsh=MTNpZTB0N3gzYXRvZg%3D%3D#",
      linkedin:
        "https://www.linkedin.com/in/nexovate-ecell-041104374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      youtube: "https://youtube.com/@nexovatecgec?si=hyPLtxqmlvG-AScf",
    },
    hashtags: ["#EUREKA2025", "#InnovationFest", "#CGEC"],
  },
  {
    id: 3,
    title: "Solving Entrepreneurship Challenge 2025 🧠✨",
    date: "September 3, 2025",
    description:
      "💡 Aspiring entrepreneurs, innovators & problem solvers—this is YOUR stage! Let's solve big problems together.",
      status:"Event Finished !",
    color:"danger",
    image: Entrepreneurship,
    src: "",
    fullDescription: `
                              <p><strong>Got ideas? Let’s solve big problems together!</strong> This challenge is the stage for aspiring entrepreneurs, innovators, and problem solvers from CGEC. It's your opportunity to transform ideas into actionable solutions and make a real impact.</p>
                              
                              <h5>What to Expect:</h5>
                              <ul>
                                <li>Showcase your innovative ideas to a panel of experts</li>
                                <li>Connect with like-minded problem solvers and potential co-founders</li>
                                <li>Receive valuable feedback to refine your startup concept</li>
                                <li>Learn how to take the first steps in your entrepreneurial journey</li>
                              </ul>
                              
                              <p>This event is perfect for student founders looking to make their mark. Whether you have a fully-formed business plan or just a spark of an idea, this challenge will help you take the next step.</p>
                            `,
    venue: "CGEC Campus, Academic Building",
    time: "1:30 PM – 3:00 PM",
    category: "Entrepreneurship Challenge",
    socialLinks: {
      instagram:
        "https://www.instagram.com/_nexovate_ecell/?igsh=MTNpZTB0N3gzYXRvZg%3D%3D#",
      linkedin:
        "https://www.linkedin.com/in/nexovate-ecell-041104374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      youtube: "https://youtube.com/@nexovatecgec?si=hyPLtxqmlvG-AScf",
    },
    hashtags: [
      "#Entrepreneurship",
      "#Innovation",
      "#StartupChallenge",
      "#ProblemSolvers",
      "#StudentFounders",
      "#CGEC",
      "#Nexovate",
      "#NEC2025",
      "#CampusEvents",
      "#IdeasIntoAction",
    ],
    contacts: [
      { name: "Trishan Banik", number: "8293545101" },
      { name: "Adityava Gangopadhyay", number: "8240309052" },
    ],
  },
  {
    id: 4,
    title: "SOCIAL MEDIA EVENT: 3 Random Words to Startup Chaos 🚀",
    date: "September 6, 2025",
    description:
      "Who knew 3 random words could make you the next Elon Musk? 🤯 Drop your wildest startup mashups & let the madness begin!",
      status:"Event Finished !",
    color:"danger",
    image: social,
    src: "",
    fullDescription: `
                              <p><strong>Who knew 3 random words could make you the next Elon Musk? 🤯✨</strong> This unique social media event turns creativity into entrepreneurship in the most chaotic and fun way possible!</p>
                              
                              <h5>Event Concept:</h5>
                              <ul>
                                <li>Combine 3 random words to create outrageous startup ideas</li>
                                <li>Pitch your wildest business mashups in a fast-paced, high-energy environment</li>
                                <li>Compete for the most innovative, hilarious, and potentially brilliant concepts</li>
                                <li>Engage with the community through social media challenges and polls</li>
                              </ul>
                              
                              <p>This event is all about thinking outside the box, breaking conventional rules, and discovering how creativity can lead to serious innovation. No experience needed—just bring your imagination and sense of humor!</p>
                            `,
    venue: "Academic Building",
    time: "11:00 AM to 2:00 PM",
    category: "Social Media Challenge",
    socialLinks: {
      instagram:
        "https://www.instagram.com/_nexovate_ecell/?igsh=MTNpZTB0N3gzYXRvZg%3D%3D#",
      linkedin:
        "https://www.linkedin.com/in/nexovate-ecell-041104374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      youtube: "https://youtube.com/@nexovatecgec?si=hyPLtxqmlvG-AScf",
    },
    hashtags: [
      "#StartupChaos",
      "#NEC2025",
      "#Nexovate",
      "#3RandomWords",
      "#Entrepreneurship",
    ],
    contacts: [
      { name: "Trishan Banik", number: "8293545101" },
      { name: "Adityava Gangopadhyay", number: "8240309052" },
    ],
  },
];

const EventDetails = () => {
  const { eventId } = useParams();
  const event = eventsData.find((e) => e.id === parseInt(eventId));

  const shareOnYoutube = () => {
    window.open("https://www.youtube.com/upload", "_blank");
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        window.location.href
      )}`,
      "_blank"
    );
  };

  const copyEventLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Event link copied to clipboard!");
  };

  if (!event) {
    return (
      <Container className="my-5">
        <div className="text-center" style={{ marginTop: "10rem" }}>
          <h2>Event not found!</h2>
          <Link to="/">
            <Button variant="primary" className="mt-3">
              Back to Home
            </Button>
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <>
      {/* Enhanced Header with Social Media */}
      <nav className="navbar navbar-light bg-light">
        <Container>
          <div className="d-flex justify-content-between w-100 align-items-center">
            <Link to="/" className="navbar-brand">
              <ArrowLeft className="me-2" />
              Back to Home
            </Link>

            {/* Social Media Links */}
            <div className="d-flex gap-3">
              <a
                href={event.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <Instagram size={20} />
              </a>
              <a
                href={event.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={event.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </Container>
      </nav>

      <Container className="my-5">
        <Row className="justify-content-center">
          <Col lg={10}>
            <article>
              {/* Header Section */}
              <div className="d-flex justify-content-between align-items-start mb-4">
                <Link to="/#events" className="text-decoration-none">
                  <Button variant="outline-primary">
                    <ArrowLeft className="me-2" />
                    Back to Events
                  </Button>
                </Link>

                {/* Share Button */}
                <div className="dropdown">
                  <Button
                    variant="outline-secondary"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <Share className="me-2" />
                    Share Event
                  </Button>
                  <ul className="dropdown-menu">
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={shareOnYoutube}
                      >
                        <Youtube className="me-2" />
                        Share on Youtube
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={shareOnLinkedIn}
                      >
                        <Linkedin className="me-2" />
                        Share on LinkedIn
                      </button>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={copyEventLink}>
                        <Clipboard className="me-2" />
                        Copy Event Link
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Event Header */}
              <div className="text-center mb-5">
                <Badge bg="primary" className="mb-3 fs-6">
                  {event.category}
                </Badge>
                <h1 className="fw-bold display-5">{event.title}</h1>
                <div className="text-muted d-flex justify-content-center align-items-center gap-4 flex-wrap">
                  <span>
                    <Calendar className="me-2" />
                    {event.date}
                  </span>
                  <span>
                    <GeoAlt className="me-2" />
                    {event.venue}
                  </span>
                  <span>⏰ {event.time}</span>
                </div>

                {/* Hashtags */}
                <div className="mt-3">
                  {event.hashtags.map((tag, index) => (
                    <Badge
                      key={index}
                      bg="outline-secondary"
                      className="me-2 text-dark border"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Fixed Event Image - Full Image Show */}
              <div className="text-center mb-5">
                <div
                  className="event-image-container"
                  style={{
                    maxWidth: "800px",
                    margin: "0 auto",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "1rem",
                    padding: "1rem",
                    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="img-fluid rounded-2"
                    style={{
                      maxHeight: "400px",
                      width: "auto",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>

              {/* Rest of your code remains same */}
              <Row className="mb-5">
                <Col lg={8}>
                  <div
                    className="event-content"
                    dangerouslySetInnerHTML={{ __html: event.fullDescription }}
                    style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
                  />
                </Col>

                <Col lg={4}>
                  <Card
                    className="shadow-sm sticky-top"
                    style={{ top: "20px" }}
                  >
                    <Card.Body>
                      <h5 className="border-bottom pb-2">Event Details</h5>
                      <div className="mb-3">
                        <strong>📅 Date:</strong>
                        <br />
                        {event.date}
                      </div>
                      <div className="mb-3">
                        <strong>⏰ Time:</strong>
                        <br />
                        {event.time}
                      </div>
                      <div className="mb-3">
                        <strong>📍 Venue:</strong>
                        <br />
                        {event.venue}
                      </div>

                      <Button
                        variant={event.color}
                        href={event.src}
                        target="_blank"
                        className="w-100 mb-3"
                        size="lg"
                      >
                        {event.status}
                      </Button>

                      {/* Quick Social Links */}
                      <div className="text-center">
                        <p className="text-muted small mb-2">
                          Share this event:
                        </p>
                        <div className="d-flex justify-content-center gap-3">
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={shareOnYoutube}
                          >
                            <Youtube />
                          </Button>
                          <Button
                            variant="outline-primary"
                            size="sm"
                            onClick={shareOnLinkedIn}
                          >
                            <Linkedin />
                          </Button>
                          <Button
                            variant="outline-dark"
                            size="sm"
                            onClick={copyEventLink}
                          >
                            <Link45deg />
                          </Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* Social Media Footer */}
              <Card className="bg-light border-0">
                <Card.Body className="text-center">
                  <h5>Follow us on social media</h5>
                  <p className="text-muted">
                    Stay updated with our latest events and announcements
                  </p>
                  <div className="d-flex justify-content-center gap-4">
                    <a
                      href={event.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-danger"
                    >
                      <Instagram className="me-2" />
                      Instagram
                    </a>
                    <a
                      href={event.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary"
                    >
                      <Linkedin className="me-2" />
                      LinkedIn
                    </a>
                    <a
                      href={event.socialLinks.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-danger"
                    >
                      <Youtube className="me-2" />
                      Youtube
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </article>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EventDetails;
