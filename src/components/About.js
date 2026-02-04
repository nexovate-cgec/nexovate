import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import "./About.css";
import aboutImg from '../assets/images/about.png';
import NoticeSlider from "../components/NoticeSlider";


const socialLinks = [
  { icon: <FaInstagram />, url: "https://www.instagram.com/_nexovate_ecell/?igsh=MTNpZTB0N3gzYXRvZg%3D%3D#" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/nexovate-ecell-041104374" },
  { icon: <FaEnvelope />, url: "mailto:nexovatecgec@gmail.com" },
  { icon: <FaYoutube />, url: "https://youtube.com/@nexovatecgec" },
];

const About = () => (
  <>
   <NoticeSlider />

    <section id="about" className="py-5" style={{ backgroundColor: 'white' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <Image
              src={aboutImg}
              alt="About CGEC ECELL"
              fluid
              rounded
              className="shadow"
              style={{
                maxHeight: '400px',
                objectFit: 'cover',
                width: '100%',
                border: '3px solid rgb(189, 159, 103)'
              }}
            />
          </Col>

          <Col md={6}>
            <div className="ps-md-4">
              <h2 className="fw-bold mb-3" style={{ fontSize: '2.2rem', color: 'rgb(189, 159, 103)' }}>
                About <span style={{ color: '#2c3e50' }}>CGEC E-Cell</span>
              </h2>

              <p className="lead" style={{ fontWeight: '500', color: '#2c3e50' }}>
                CGEC Entrepreneurship Cell (E-Cell) is the hub of innovation at
                Cooch Behar Government Engineering College.
              </p>

              <p style={{ color: '#2c3e50' }}>
                It nurtures and empowers students by providing the right ecosystem,
                mentorship, and industry exposure needed to turn ideas into impactful ventures.
              </p>

              <p style={{ color: '#2c3e50' }}>
                With a mission to <strong style={{ color: 'rgb(189, 159, 103)' }}>
                  Ignite, Innovate, and Inspire
                </strong>, CGEC E-Cell bridges the gap between students and the startup ecosystem.
              </p>

              <p style={{ color: '#2c3e50' }}>
                Through events, workshops, and ideation support, the E-Cell equips
                aspiring entrepreneurs with leadership and problem-solving skills.
              </p>

              <div className="mt-4 d-flex flex-wrap align-items-center">
                <h5 className="me-3 mb-3" style={{ color: 'rgb(189, 159, 103)', fontWeight: 600 }}>
                  Follow us:
                </h5>

                <div className="d-flex flex-wrap">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-circle me-3 mb-3"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
);

export default About;
