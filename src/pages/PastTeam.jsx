import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";
import { pastTeamData } from "../data/pastMember";
import member3 from "../assets/member/3.jpg";
import "./PastTeam.css";

const PastTeam = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={`past-team-page ${isDark ? "dark-theme" : "light-theme"}`}>
      <Container className="py-5 mt-5">
        
        <div className="text-center mb-5">
          <h1 className="fw-bold golden-text display-4">Past Teams & Creators</h1>
          <p className="text-muted lead">
            Honoring the visionaries who built the legacy and the minds behind the platform.
          </p>
          <div className="header-line mx-auto"></div>
        </div>

        <div className="developer-banner golden-border mb-5 p-4 rounded-4 text-center text-md-start">
          <Row className="align-items-center">
            <Col md={3} className="text-center mb-3 mb-md-0">
              <div className="developer-img-container mx-auto">
                <img
                  src={member3}
                  alt="Satyajit Roy"
                  className="rounded-circle developer-avatar"
                />
              </div>
            </Col>
            <Col md={9}>
              <div className="badge bg-warning text-dark mb-2 px-3 py-1 fw-bold">
                Platform Architect & Developer
              </div>
              <h2 className="fw-bold golden-text mb-1">Satyajit Roy (CSE'28)</h2>
              <p className="text-muted mb-3">
                Designed, built, and deployed the official full-stack web platform for CGEC E-Cell.
              </p>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <a
                  href="https://www.linkedin.com/in/satyajit--roy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn golden-border px-3 py-1 rounded-pill"
                >
                  LinkedIn Profile
                </a>
                <a
                  href="https://github.com/satya-dr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn golden-border px-3 py-1 rounded-pill"
                >
                  GitHub Repository
                </a>
              </div>
            </Col>
          </Row>
        </div>

        {pastTeamData.map((group, index) => (
          <div key={index} className="mb-5">
            <h3 className="year-title fw-bold mb-4 ps-3 border-start border-4 border-warning">
              Tenure: <span className="golden-text">{group.year}</span>
            </h3>
            
            <div className="team-slider-container">
              {group.members.map((member) => (
                <div className="team-slide-item" key={member.id}>
                  <Card className="team-card golden-border h-100 text-center p-3">
                    <div className="member-img-container mx-auto mt-3">
                      <Card.Img
                        variant="top"
                        src={member.image}
                        alt={member.name}
                        className="rounded-circle member-img"
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="fw-bold member-name">
                        {member.name}
                      </Card.Title>
                      <Card.Text className="text-warning fw-semibold mb-1">
                        {member.designation}
                      </Card.Text>
                      <Card.Text className="text-muted small mb-1">
                        Role: {member.role}
                      </Card.Text>
                      <Card.Text className="text-muted small mb-3">
                        Dept: {member.dept} ({member.batchYear} Year)
                      </Card.Text>

                      {/* Social & Resume Links */}
                      <div className="social-links d-flex justify-content-center flex-wrap gap-2 mt-3">
                        {member.linkedin && (
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                            LinkedIn
                          </a>
                        )}
                        {member.insta && (
                          <a href={member.insta} target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                            Instagram
                          </a>
                        )}
                        {member.resume && (
                          <a href={member.resume} target="_blank" rel="noopener noreferrer" className="social-icon-btn">
                            Resume
                          </a>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default PastTeam;