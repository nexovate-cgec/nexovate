
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import startup_bootcamp from '../assets/images/startup-bootcamp.png';
import ideathon from '../assets/images/ideathon.jpeg';
import etalk from '../assets/images/etalk.png';


const initiatives = [
  {
    title: "Startup Bootcamp",
    description: "A hands-on bootcamp to guide budding entrepreneurs from idea to MVP.",
    image: startup_bootcamp
  },
  {
    title: "Ideathon",
    description: "A 24-hour challenge encouraging innovative thinking among students.",
    image:ideathon
  },
  {
    title: "E-Talks",
    description: "Interactive sessions with founders, VCs, and domain experts.",
    image: etalk
  }
];

const Initiatives = () => (
  <section id="initiatives" className="py-5">
    <Container>
      <h2 className="text-center fw-bold mb-5">Our <span className="text-warning">Initiatives</span></h2>
      <Row>
        {initiatives.map((item, index) => (
          <Col md={4} sm={6} className="mb-4" key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={item.image} alt={item.title} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Initiatives;
