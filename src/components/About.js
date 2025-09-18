import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import {  FaInstagram, FaLinkedin, FaYoutube,FaEnvelope } from "react-icons/fa"; 
// FaFacebook, FaTwitter
import "./About.css";
import aboutImg from '../assets/images/about-ecell.jpeg';

// Social media icons list
const socialLinks = [
  // { icon: <FaFacebook />, url: "https://facebook.com/nexovate" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/_nexovate_ecell/?igsh=MTNpZTB0N3gzYXRvZg%3D%3D#" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/nexovate-ecell-041104374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  // { icon: <FaTwitter />, url: "https://twitter.com/nexovate" },
  { icon: <FaEnvelope />, url: "https://twitter.com/nexovate" },
  { icon: <FaYoutube />, url: "https://youtube.com/@nexovatecgec?si=hyPLtxqmlvG-AScf" },
];

const About = () => (
  <section id="about" className="py-5 bg-light">
    <Container>
      <Row className="align-items-center">
        <Col md={6} className="mb-4 mb-md-0">
          <Image
            src={aboutImg}
            alt="About CGEC ECELL"
            fluid
            rounded
            className="shadow"
            style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
          />
        </Col>
        <Col md={6}>
          <div className="ps-md-4">
            <h2 className="fw-bold mb-3" style={{ fontSize: '2.2rem', color: '#2c3e50' }}>
              About <span className="text-primary">CGEC E-Cell</span>
            </h2>
            <p className="lead" style={{ fontWeight: '500' }}>
              CGEC Entrepreneurship Cell (E-Cell) is the hub of innovation at Cooch Behar Government Engineering College.
            </p>
            <p>
              It nurtures and empowers students by providing the right ecosystem, mentorship, and industry exposure needed to turn ideas into impactful ventures.
            </p>
            <p>
              E-Cell focuses on fostering the spirit of entrepreneurship by bridging the gap between students and the startup ecosystem. With a mission to <strong>Ignite, Innovate, and Inspire</strong>, it creates a platform where creativity meets execution.
            </p>
            <p>
              Through events, workshops, and ideation support, CGEC E-Cell equips aspiring entrepreneurs with skills to transform their vision into reality while building leadership, problem-solving, and collaboration abilities.
            </p>

            {/* Social Media Section */}
            <div className="mt-4 d-flex flex-wrap align-items-center">
              <h5 className="me-3 mb-3" style={{ fontWeight: '600', color: '#2c3e50' }}>
                Follow us:
              </h5>
              <div className="d-flex flex-wrap">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center me-3 mb-3"
                    style={{
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      backgroundColor: '#f1f1f1',
                      color: '#0d6efd',
                      fontSize: '1.3rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#0d6efd";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#f1f1f1";
                      e.currentTarget.style.color = "#0d6efd";
                    }}
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
);

export default About;