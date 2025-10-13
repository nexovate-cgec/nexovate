// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useTheme } from '../contexts/ThemeContext'; 
import logo from '../assets/images/logo.png';
import './Navbar.css';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme(); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
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

      return () => observer.disconnect();
    } else {
      setActiveSection('');
    }
  }, [location.pathname]);

  const handleSectionClick = (sectionId) => {
    setIsExpanded(false);
    
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

  const handlePageNavigation = (page) => {
    setIsExpanded(false);
    
    if (page === 'events') {
      navigate('/events');
    } else if (page === 'gallery') {
      navigate('/gallery');
    } else if (page === 'blog') {
      navigate('/blogs');
    } else if (page === 'join') {
      navigate('/join');
    }
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };

  const handleNavbarToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleNavLinkClick = () => {
    setIsExpanded(false);
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      expanded={isExpanded}
      className={`main-navbar ${scrolled ? 'navbar-scrolled' : ''} ${isDark ? 'navbar-dark' : 'navbar-light'}`}
    >
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="d-flex align-items-center gap-2"
          onClick={handleNavLinkClick}
        >
          <img 
            src={logo} 
            alt="ECELL Logo" 
            height="36" 
            className="navbar-logo"
          />
          <span className="fw-bold navbar-brand-text golden-text">CGEC ECELL</span>
        </Navbar.Brand>

        <div className="d-flex align-items-center">
          <button 
            className="theme-toggle-btn me-3 golden-border"
            onClick={handleThemeToggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <div className="theme-toggle-inner">
              <span className="theme-icon">{isDark ? '☀️' : '🌙'}</span>
              <span className="theme-text">{isDark ? 'Light' : 'Dark'}</span>
            </div>
          </button>

          <Navbar.Toggle 
            aria-controls="navbar-nav" 
            onClick={handleNavbarToggle}
            className="navbar-toggler-custom golden-border"
          />
        </div>
        
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => {
                handleNavLinkClick();
                handleSectionClick('home');
              }}
              className={`nav-link-custom ${activeSection === 'home' ? 'active-section' : ''}`}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/"
              onClick={() => {
                handleNavLinkClick();
                handleSectionClick('initiatives');
              }}
              className={`nav-link-custom ${activeSection === 'initiatives' ? 'active-section' : ''}`}
            >
              Initiatives
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/events"
              onClick={() => {
                handleNavLinkClick();
                handlePageNavigation('events');
              }}
              className={`nav-link-custom ${location.pathname === '/events' ? 'active-section' : ''}`}
            >
              Events
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/gallery"
              onClick={() => {
                handleNavLinkClick();
                handlePageNavigation('gallery');
              }}
              className={`nav-link-custom ${location.pathname === '/gallery' ? 'active-section' : ''}`}
            >
              Gallery
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/blogs"
              onClick={() => {
                handleNavLinkClick();
                handlePageNavigation('blog');
              }}
              className={`nav-link-custom ${location.pathname === '/blogs' ? 'active-section' : ''}`}
            >
              Blog
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/"
              onClick={() => {
                handleNavLinkClick();
                handleSectionClick('team');
              }}
              className={`nav-link-custom ${activeSection === 'team' ? 'active-section' : ''}`}
            >
              Team
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/"
              onClick={() => {
                handleNavLinkClick();
                handleSectionClick('testimonials');
              }}
              className={`nav-link-custom ${activeSection === 'testimonials' ? 'active-section' : ''}`}
            >
              Testimonials
            </Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
      
      <div className="navbar-golden-border"></div>
    </Navbar>
  );
};

export default NavBar;