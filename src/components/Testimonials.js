import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

const testimonials = [
  {
    quote:
      "Being a part of CGEC ECELL helped me turn my ideas into reality. The support and environment were amazing.",
    name: "Arya Ghosh",
    position: "Batch of 2023",
  },
  {
    quote:
      "The workshops and networking events organized by ECELL helped me build industry connections early.",
    name: "Satyajit Roy",
    position: "Batch of 2024",
  },
  {
    quote:
      "ECELL taught me how to pitch, build, and lead. It was the most transformative part of my college life.",
    name: "Debojit Sarkar",
    position: "Batch of 2024",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-5 bg-light">
    <Container>
      <h2 className="text-center fw-bold mb-5">
        Hear from <span className="text-primary">Our Members</span>
      </h2>

      <Carousel indicators={false} controls={true} interval={6000} fade>
        {testimonials.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              <div
                className="bg-white rounded-4 shadow p-1 p-md-5 position-relative text-center"
                style={{
                  maxWidth: '700px',
                  width: '100%',
                  borderTop: '5px solid #0d6efd',
                }}
              >
                <svg
                 
                  width="40"
                  height="40"
                  fill="#0d6efd"
                  className="bi bi-chat-quote-fill mb-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 0a2 2 0 0 0-2 2v11.586l2.293-2.293A1 1 0 0 1 3 11h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm5.354 5.354a.5.5 0 0 1 .146.354v1a.5.5 0 0 1-.5.5H6v.5a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5h1V6a.5.5 0 0 1 .146-.354zM11.354 5.354a.5.5 0 0 1 .146.354v1a.5.5 0 0 1-.5.5H10v.5a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5h1V6a.5.5 0 0 1 .146-.354z" />
                </svg>

                <p className="fs-5 fst-italic text-dark mb-4" style={{ lineHeight: '1.75' }}>
                  “{item.quote}”
                </p>

                <div className="border-top pt-3">
                  <h5 className="fw-semibold mb-0">{item.name}</h5>
                  <small className="text-muted">{item.position}</small>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  </section>
);

export default Testimonials;
