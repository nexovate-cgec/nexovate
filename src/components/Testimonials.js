import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

import member1 from "../assets/member/1.jpg";
import member2 from "../assets/member/2.jpg";
import member3 from "../assets/member/3.jpg";

const testimonials = [
  {
    quote:"Being a part of CGEC ECELL helped me turn my ideas into reality. The support and environment were amazing.",
    name: "Arya Ghosh",
    position: "Batch of 2023",
    img: member1,
  },
  {
    quote:"The workshops and networking events organized by ECELL helped me build industry connections early.",
    name: "Satyajit Roy",
    position: "Batch of 2024",
    img: member3,
  },
  {
    quote:"e-CELL taught me how to pitch, build, and lead. It was the most transformative part of my college life.",
    name: "Adripta Ghosh",
    position: "Batch of 2023",
    img: member2,
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-5 bg-light">
    <Container>
      <h2 className="text-center fw-bold mb-5">
        Hear from <span className="text-primary">Our Members</span>
      </h2>

      <Carousel indicators={false} controls={true} interval={6000}  fade>
        {testimonials.map((item, index) => (
          <Carousel.Item style={{color:"red"}} key={index}>
            <div className="d-flex justify-content-center">
              <div
                className="bg-white rounded-4 shadow p-4 p-md-5 position-relative text-center"
                style={{
                  maxWidth: "700px",
                  width: "100%",
                  borderTop: "5px solid #0d6efd",
                }}
              >
                <div className="mb-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="rounded-circle shadow"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      border: "3px solid #0d6efd",
                    }}
                  />
                </div>

                <p
                  className="fs-5 fst-italic text-dark mb-4"
                  style={{ lineHeight: "1.75" }}
                >
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
