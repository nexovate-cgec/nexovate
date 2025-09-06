
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import './Navbar.css';

const sections = ['about', 'initiatives', 'events', 'team', 'testimonials', 'gallery', 'contact'];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <Navbar expand="lg" fixed="top" className={`main-navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <img src={logo} alt="ECELL Logo" height="36" />
          <span className="fw-bold text-dark">CGEC ECELL</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            {sections.map((id, index) => (
              <Nav.Link
                key={index}
                href={`#${id}`}
                className={`nav-link-custom ${activeSection === id ? 'active-section' : ''}`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Nav.Link>
            ))}
            <Button
              href="#join"
              variant="warning"
              className="ms-2 px-3 fw-semibold rounded-pill"
            >
              Join Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
