import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useTheme } from '../contexts/ThemeContext'; 
import logo from '../assets/images/logo.png';
import './Navbar.css';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme(); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);

      const sections = ['home', 'initiatives', 'events', 'gallery', 'blog', 'team', 'testimonials'];
      
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
    } else {
      setActiveSection('');
    }
  }, [location.pathname]);

  const handleSectionClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // নতুন function: Specific pages এ navigate করার জন্য
  const handlePageNavigation = (page) => {
    if (page === 'events') {
      navigate('/events');
    } else if (page === 'gallery') {
      navigate('/gallery');
    } else if (page === 'blog') {
      navigate('/blogs');
    }
  };

  return (
    <Navbar expand="lg" fixed="top" className={`main-navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <img src={logo} alt="ECELL Logo" height="36" />
          <span className="fw-bold" style={{ color: 'var(--text-color)' }}>CGEC ECELL</span>
          <button 
            className="btn btn-outline-secondary ms-2"
            onClick={toggleTheme}
            style={{
              borderColor: 'var(--primary-color)',
              color: 'var(--text-color)'
            }}
          >
            {isDark ? '☀️Bright' : '🌙Dark'}
          </button>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            {/* Home */}
            <Nav.Link
              onClick={() => handleSectionClick('home')}
              className={`nav-link-custom ${activeSection === 'home' ? 'active-section' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              Home
            </Nav.Link>

            {/* Initiatives */}
            <Nav.Link
              onClick={() => handleSectionClick('initiatives')}
              className={`nav-link-custom ${activeSection === 'initiatives' ? 'active-section' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              Initiatives
            </Nav.Link>

            {/* Events - All Events page এ navigate করবে */}
            <Nav.Link
              onClick={() => handlePageNavigation('events')}
              className={`nav-link-custom ${location.pathname === '/events' ? 'active-section' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              Events
            </Nav.Link>

            {/* Gallery - Gallery page এ navigate করবে */}
            <Nav.Link
              onClick={() => handlePageNavigation('gallery')}
              className={`nav-link-custom ${location.pathname === '/gallery' ? 'active-section' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              Gallery
            </Nav.Link>

            {/* Blog - All Blogs page এ navigate করবে */}
            <Nav.Link
              onClick={() => handlePageNavigation('blog')}
              className={`nav-link-custom ${location.pathname === '/blogs' ? 'active-section' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              Blog
            </Nav.Link>

            {/* Team */}
            <Nav.Link
              onClick={() => handleSectionClick('team')}
              className={`nav-link-custom ${activeSection === 'team' ? 'active-section' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              Team
            </Nav.Link>

            {/* Testimonials */}
            <Nav.Link
              onClick={() => handleSectionClick('testimonials')}
              className={`nav-link-custom ${activeSection === 'testimonials' ? 'active-section' : ''}`}
              style={{ cursor: 'pointer' }}
            >
              Testimonials
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;