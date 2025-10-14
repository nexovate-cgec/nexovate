

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaEnvelope, FaRocket, FaHeart, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="footer-wrapper">
    <div className="footer-main py-5">
      <Container>
        <Row className="g-4">
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-brand">
              <div className="brand-logo mb-3">
                <FaRocket className="rocket-icon" />
                <span className="brand-text">CGEC E-CELL</span>
              </div>
              <p className="brand-description">
                Empowering entrepreneurs and fostering innovation at Cooch Behar Government Engineering College. 
                Join us in building the next generation of tech leaders and innovators.
              </p>
              <div className="social-links">
                <a 
                  href="https://www.linkedin.com/in/nexovate-ecell-041104374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link linkedin"
                >
                  <FaLinkedin size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/_nexovate_ecell/?igsh=MTNpZTB0N3gzYXRvZg%3D%3D#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a 
                  href="mailto:nexovatecgec@gmail.com" 
                  className="social-link email"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#initiatives">Initiatives</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </Col>
          <Col lg={2} md={6} className="mb-4">
            <h5 className="footer-heading">Resources</h5>
            <ul className="footer-links">
              <li><a href="#team">Our Team</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#join">Join Us</a></li>
            </ul>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <h5 className="footer-heading">Get In Touch</h5>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Cooch Behar Government Engineering College, West Bengal, India</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>nexovatecgec@gmail.com</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+91 8240309052</span>
              </div>
            </div>
            
          
          </Col>
        </Row>
      </Container>
    </div>

    <div className="footer-bottom py-3">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0 copyright-text">
              &copy; {new Date().getFullYear()} CGEC E-CELL. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="mb-0 made-with">
              Made with <FaHeart className="heart-icon" /> using React & Bootstrap
            </p>
          </Col>
        </Row>
      </Container>
    </div>

   
  </footer>
);

export default Footer;