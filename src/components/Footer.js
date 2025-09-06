
import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-dark text-white py-4">
    <Container className="text-center">
      <div className="mb-3">
        <a href="https://www.linkedin.com/in/nexovate-ecell-041104374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white me-3">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.instagram.com/_nexovate_ecell/?igsh=MTNpZTB0N3gzYXRvZg%3D%3D#" target="_blank" rel="noopener noreferrer" className="text-white me-3">
          <FaInstagram size={24} />
        </a>
        <a href="mailto:nexovatecgec@gmail.com" className="text-white">
          <FaEnvelope size={24} />
        </a>
      </div>
      <p className="mb-0">&copy; {new Date().getFullYear()} CGEC ECELL. All rights reserved.| Made by React with ❤️</p>
    </Container>
  </footer>
);

export default Footer;
