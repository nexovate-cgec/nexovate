import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import './Initiatives.css';
import startup_bootcamp from '../assets/images/startup-bootcamp.png';
import ideathon from '../assets/images/ideathon.jpeg';
import etalk from '../assets/images/etalk.png';

const Initiatives = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedInitiative, setSelectedInitiative] = useState(null);

  const handleShow = (initiative) => {
    setSelectedInitiative(initiative);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedInitiative(null);
  };

  const initiatives = [
    {
      title: "Startup Bootcamp",
      description: "A hands-on bootcamp to guide budding entrepreneurs from idea to MVP.",
      image: startup_bootcamp,
      fullDescription: "The Startup Bootcamp is a hands-on learning experience designed to guide budding entrepreneurs from ideation to creating their first Minimum Viable Product (MVP).",
      highlights: [
        "Understand the fundamentals of startups.",
        "Build business models and validate ideas.",
        "Learn essential skills like pitching, team-building, and product design.",
        "Get exposure to case studies and real-world startup stories."
      ],
      outcome: "By the end of the bootcamp, participants walk away with practical knowledge, a validated business concept, and the confidence to pursue their entrepreneurial goals."
    },
    {
      title: "Ideathon",
      description: "A 24-hour challenge encouraging innovative thinking among students.",
      image: ideathon,
      fullDescription: "Ideathon is a 24-hour innovation marathon that challenges students to think creatively, solve problems, and develop groundbreaking ideas.",
      highlights: [
        "Brainstorming sessions on pressing issues.",
        "Team-based collaboration to combine diverse skills.",
        "Guidance from mentors and industry experts.",
        "Final pitch presentations before a jury."
      ],
      outcome: "The event cultivates critical thinking, teamwork, and design-thinking approaches while encouraging students to transform raw ideas into potential solutions. It's the perfect platform to unleash creativity and fuel innovation."
    },
    {
      title: "E-Talks",
      description: "Interactive sessions with founders, VCs, and domain experts.",
      image: etalk,
      fullDescription: "E-Talks (Empowering Talks) are interactive sessions where founders, venture capitalists, and domain experts share their entrepreneurial journeys, challenges, and insights with students.",
      highlights: [
        "First-hand knowledge from successful entrepreneurs.",
        "Inspiration and motivation to pursue entrepreneurship.",
        "Exposure to real-world startup ecosystems.",
        "Networking opportunities with industry leaders and innovators."
      ],
      outcome: "These sessions bridge the gap between theory and practice, helping students understand what it takes to thrive in the entrepreneurial world."
    }
  ];

  return (
    <>
      <section id="initiatives" className="py-5 bg-light">
        <Container>
          <Row className="mb-4">
            <Col className="text-center">
              <h2 className="display-5 fw-bold mb-3">Our <span className="text-warning">Initiatives</span></h2>
              <p className="lead text-muted">Discover how we foster entrepreneurship through hands-on programs and events</p>
            </Col>
          </Row>
          
          <Row className="g-4">
            {initiatives.map((item, index) => (
              <Col lg={4} md={6} className="mb-4" key={index}>
                <Card className="h-100 shadow initiative-card border-0" style={{ maxWidth: '320px', margin: '0 auto' }}>
                  <div className="initiative-img-container">
                    <Card.Img 
                      variant="top" 
                      src={item.image} 
                      alt={item.title}
                      className="initiative-image"
                    />
                    <div className="initiative-overlay"></div>
                  </div>
                  
                  <Card.Body className="d-flex flex-column p-3">
                    <div className="mb-2">
                      <div className="initiative-icon mb-2">
                        {index === 0 && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"/>
                            <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4 4 0 0 0 1 7h8a4 4 0 0 0-4-4h-2V1.866ZM14 7A5 5 0 0 1 2 7a5 5 0 0 1 10 0Z"/>
                          </svg>
                        )}
                        {index === 1 && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                          </svg>
                        )}
                        {index === 2 && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                          </svg>
                        )}
                      </div>
                      <Card.Title className="h5 fw-bold mb-1">{item.title}</Card.Title>
                      <Card.Text className="mb-2" style={{ fontSize: '0.9rem' }}>{item.description}</Card.Text>
                    </div>
                    
                    <Button 
                      variant="outline-warning" 
                      className="mt-auto align-self-start"
                      onClick={() => handleShow(item)}
                      size="sm"
                    >
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="fw-bold">{selectedInitiative?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-0">
          {selectedInitiative && (
            <>
              <p className="lead">{selectedInitiative.fullDescription}</p>
              
              <h6 className="fw-bold mt-4">Program Highlights:</h6>
              <ul className="list-unstyled">
                {selectedInitiative.highlights.map((highlight, idx) => (
                  <li key={idx} className="mb-2">
                    <span className="text-warning me-2">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
              
              <div className="bg-light p-3 rounded mt-4">
                <h6 className="fw-bold mb-2">Outcome:</h6>
                <p className="mb-0">{selectedInitiative.outcome}</p>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Register Interest
          </Button>
        </Modal.Footer>
      </Modal>

     
    </>
  );
};
// 
export default Initiatives;