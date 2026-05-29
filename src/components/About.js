import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import "./About.css";
import aboutImg from '../assets/images/about.png';
import cgecLogo from '../assets/images/cgec.jpeg';
import ecellLogo from '../assets/images/logo.jpeg';
import iicLogo from '../assets/images/iic-logo.jpeg';
import NoticeSlider from "../components/NoticeSlider";

const socialLinks = [
  { icon: <FaInstagram />, url: "https://www.instagram.com/_ecell_cgec?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/nexovate-ecell-041104374" },
  { icon: <FaEnvelope />, url: "mailto:nexovatecgec@gmail.com" },
  { icon: <FaYoutube />, url: "https://youtube.com/@nexovatecgec" },
];

const About = () => (
  <>
    <NoticeSlider />

    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <Image
              src={aboutImg}
              alt="About CGEC ECELL"
              fluid
              rounded
              className="shadow about-image"
            />
          </Col>

          <Col md={6}>
            <div className="ps-md-4">

              <div className="collab-section">
                <div className="collab-badge">
                  Official Collaboration
                </div>

                <div className="collab-wrapper">
                  <div className="logo-card">
                    <img src={cgecLogo} alt="CGEC" />
                    <span>CGEC</span>
                  </div>

                  <div className="collab-x">×</div>

                  <div className="logo-card">
                    <img src={ecellLogo} alt="CGEC E-Cell" />
                    <span>CGEC E-Cell</span>
                  </div>

                  <div className="collab-x">×</div>

                  <div className="logo-card">
                    <img src={iicLogo} alt="IIC CGEC" />
                    <span>IIC CGEC</span>
                  </div>
                </div>
              </div>

              <h2 className="about-heading">
                About <span>CGEC E-Cell</span>
              </h2>

              <p className="about-lead">
                CGEC Entrepreneurship Cell (E-Cell) is the hub of innovation at
                Cooch Behar Government Engineering College.
              </p>

              <p className="about-text">
                It nurtures and empowers students by providing the right ecosystem,
                mentorship, and industry exposure needed to turn ideas into impactful ventures.
              </p>

              <p className="about-text">
                With a mission to <strong>Ignite, Innovate, and Inspire</strong>,
                CGEC E-Cell bridges the gap between students and the startup ecosystem.
              </p>

              <p className="about-text">
                Through events, workshops, and ideation support, the E-Cell equips
                aspiring entrepreneurs with leadership and problem-solving skills.
              </p>

              <div className="mt-4 d-flex flex-wrap align-items-center">
                <h5 className="follow-text">
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