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

      const sections = ['about', 'initiatives', 'events', 'gallery', 'blog', 'team', 'testimonials', 'contact'];
      
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

  const formatSectionName = (id) => {
    if (id === 'ecell') return 'ECELL';
    return id.charAt(0).toUpperCase() + id.slice(1);
  };

  const sections = ['about', 'initiatives', 'events', 'gallery', 'blog', 'team', 'testimonials'];

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
            {sections.map((id) => (
              <Nav.Link
                key={id}
                onClick={() => handleSectionClick(id)}
                className={`nav-link-custom ${activeSection === id ? 'active-section' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                {formatSectionName(id)}
              </Nav.Link>
            ))}
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;