import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "CGEC", // Default value
    otherCollege: "",
    year: "",
    department: "",
    otherDepartment: "",
    interests: [],
  });
  
  const { isDark } = useTheme(); 

  const sectionBg = isDark ? "var(--dark-bg, #121212)" : "white";
  const cardBg = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
  const textColor = isDark ? "var(--light-text, #ffffff)" : "#2c3e50";
  const goldenColor = "rgb(189, 159, 103)";
  const borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";

  const interestsList = [
    "Startup Incubation",
    "Technical Workshops",
    "Business Planning",
    "Marketing & Networking",
    "Competitions & Events",
    "Mentorship Programs",
  ];

  const popularColleges = [
    "CGEC - Cooch Behar Government Engineering College",
    "Jalpaiguri Government Engineering College",
    "Kalyani Government Engineering College",
    "Academy of Technology",
    "Institute of Engineering & Management",
    "Techno India Group",
    "Heritage Institute of Technology",
    "OTHER"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInterestToggle = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const finalData = {
        ...formData,
        college: formData.college === "OTHER" ? formData.otherCollege : formData.college,
        department: formData.department === "OTHER" ? formData.otherDepartment : formData.department
      };

      const response = await fetch("https://formspree.io/f/xanppake", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(finalData),
      });

      if (response.ok) {
        alert("✅ Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          college: "CGEC",
          otherCollege: "",
          year: "",
          department: "",
          otherDepartment: "",
          interests: [],
        });
      } else {
        alert("❌ Failed to submit the form. Try again later.");
      }
    } catch (error) {
      alert("⚠️ Something went wrong. Please check your connection.");
    }
  };

  return (
    <section 
      id="join" 
      className="py-5"
      style={{ 
        backgroundColor: sectionBg,
        color: textColor
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card 
              className="shadow-lg border-0"
              style={{ 
                backgroundColor: cardBg,
                color: textColor,
                border: `2px solid ${goldenColor}`,
                borderRadius: "15px"
              }}
            >
              <Card.Body className="p-5">
                <div className="text-center mb-5">
                  <h1 
                    className="display-5 fw-bold"
                    style={{ color: goldenColor }}
                  >
                    Join CGEC E-Cell
                  </h1>
                  <p 
                    className="lead mb-2"
                    style={{ color: textColor, opacity: "0.8" }}
                  >
                    Open to students from all colleges
                  </p>
                  <p 
                    className="lead"
                    style={{ color: textColor, opacity: "0.8" }}
                  >
                    Be part of the innovation revolution. Let's build the future together!
                  </p>
                </div>

                <Row>
                  <Col md={6} className="mb-4">
                    <h4 
                      className="fw-semibold mb-4"
                      style={{ color: goldenColor }}
                    >
                      Why Join E-Cell?
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-3" style={{ color: textColor }}>
                        <i className="fas fa-rocket me-2" style={{ color: goldenColor }}></i>
                        <strong>Startup Support</strong> - Incubation and mentorship
                      </li>
                      <li className="mb-3" style={{ color: textColor }}>
                        <i className="fas fa-users me-2" style={{ color: goldenColor }}></i>
                        <strong>Networking</strong> - Connect with industry leaders
                      </li>
                      <li className="mb-3" style={{ color: textColor }}>
                        <i className="fas fa-wrench me-2" style={{ color: goldenColor }}></i>
                        <strong>Workshops</strong> - Hands-on technical training
                      </li>
                      <li className="mb-3" style={{ color: textColor }}>
                        <i className="fas fa-trophy me-2" style={{ color: goldenColor }}></i>
                        <strong>Competitions</strong> - Showcase your innovations
                      </li>
                      <li className="mb-3" style={{ color: textColor }}>
                        <i className="fas fa-briefcase me-2" style={{ color: goldenColor }}></i>
                        <strong>Internships</strong> - Industry exposure opportunities
                      </li>
                      <li className="mb-3" style={{ color: textColor }}>
                        <i className="fas fa-graduation-cap me-2" style={{ color: goldenColor }}></i>
                        <strong>Inter-College Collaboration</strong> - Connect with students from other colleges
                      </li>
                    </ul>

                    <div 
                      className="mt-4 p-3 rounded"
                      style={{ 
                        backgroundColor: goldenColor,
                        color: "white",
                        border: `1px solid ${goldenColor}`
                      }}
                    >
                      <p className="mb-2">
                        "E-Cell provided amazing opportunities to collaborate with students from different colleges!"
                      </p>
                      <small>- Student from Partner College</small>
                    </div>
                  </Col>

                  <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: textColor }}>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                          style={{
                            backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : "white",
                            color: textColor,
                            border: `1px solid ${borderColor}`,
                            borderRadius: "8px"
                          }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: textColor }}>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                          style={{
                            backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : "white",
                            color: textColor,
                            border: `1px solid ${borderColor}`,
                            borderRadius: "8px"
                          }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: textColor }}>College Name</Form.Label>
                        <Form.Select
                          name="college"
                          value={formData.college}
                          onChange={handleChange}
                          required
                          style={{
                            backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : "white",
                            color: textColor,
                            border: `1px solid ${borderColor}`,
                            borderRadius: "8px"
                          }}
                        >
                          <option value="">Select Your College</option>
                          {popularColleges.map((college, index) => (
                            <option key={index} value={college}>
                              {college}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>

                      {formData.college === "OTHER" && (
                        <Form.Group className="mb-3">
                          <Form.Label style={{ color: textColor }}>Specify Your College</Form.Label>
                          <Form.Control
                            type="text"
                            name="otherCollege"
                            value={formData.otherCollege}
                            onChange={handleChange}
                            placeholder="Enter your college name"
                            required
                            style={{
                              backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : "white",
                              color: textColor,
                              border: `1px solid ${borderColor}`,
                              borderRadius: "8px"
                            }}
                          />
                        </Form.Group>
                      )}

                      <Row>
                        <Col sm={6}>
                          <Form.Group className="mb-3">
                            <Form.Label style={{ color: textColor }}>Academic Year</Form.Label>
                            <Form.Select
                              name="year"
                              value={formData.year}
                              onChange={handleChange}
                              required
                              style={{
                                backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : "white",
                                color: textColor,
                                border: `1px solid ${borderColor}`,
                                borderRadius: "8px"
                              }}
                            >
                              <option value="">Select Year</option>
                              <option value="1st">1st Year</option>
                              <option value="2nd">2nd Year</option>
                              <option value="3rd">3rd Year</option>
                              <option value="4th">4th Year</option>
                              <option value="5th">5th Year</option>
                              <option value="Postgraduate">Postgraduate</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>

                        <Col sm={6}>
                          <Form.Group className="mb-3">
                            <Form.Label style={{ color: textColor }}>Department</Form.Label>
                            <Form.Select
                              name="department"
                              value={formData.department}
                              onChange={handleChange}
                              required
                              style={{
                                backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : "white",
                                color: textColor,
                                border: `1px solid ${borderColor}`,
                                borderRadius: "8px"
                              }}
                            >
                              <option value="">Select Department</option>
                              <option value="CSE">Computer Science and Engineering</option>
                              <option value="ECE">Electronics and Communication Engineering</option>
                              <option value="EE">Electrical Engineering</option>
                              <option value="ME">Mechanical Engineering</option>
                              <option value="CE">Civil Engineering</option>
                              <option value="IT">Information Technology</option>
                              <option value="AIML">AI & Machine Learning</option>
                              <option value="CSBS">Computer Science & Business Systems</option>
                              <option value="OTHER">Other</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
                      {formData.department === "OTHER" && (
                        <Form.Group className="mb-3">
                          <Form.Label style={{ color: textColor }}>Specify Your Department</Form.Label>
                          <Form.Control
                            type="text"
                            name="otherDepartment"
                            value={formData.otherDepartment}
                            onChange={handleChange}
                            placeholder="Enter your department name"
                            required
                            style={{
                              backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : "white",
                              color: textColor,
                              border: `1px solid ${borderColor}`,
                              borderRadius: "8px"
                            }}
                          />
                        </Form.Group>
                      )}

                      <Form.Group className="mb-4">
                        <Form.Label style={{ color: textColor }}>Areas of Interest</Form.Label>
                        <div 
                          className="border rounded p-3"
                          style={{ 
                            border: `1px solid ${borderColor}`,
                            backgroundColor: isDark ? "var(--dark-bg, #121212)" : "#f8f9fa",
                            borderRadius: "8px"
                          }}
                        >
                          {interestsList.map((interest, index) => (
                            <Form.Check
                              key={index}
                              type="checkbox"
                              id={`interest-${index}`}
                              label={interest}
                              checked={formData.interests.includes(interest)}
                              onChange={() => handleInterestToggle(interest)}
                              className="mb-2"
                              style={{ color: textColor }}
                            />
                          ))}
                        </div>
                      </Form.Group>

                      <Button
                        style={{
                          backgroundColor: goldenColor,
                          borderColor: goldenColor,
                          color: "white",
                          borderRadius: "25px",
                          padding: "12px",
                          fontWeight: "600",
                          fontSize: "1.1rem",
                          transition: "all 0.3s ease",
                          width: "100%"
                        }}
                        type="submit"
                        className="py-2 fw-bold"
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
                          e.target.style.color = goldenColor;
                          e.target.style.borderColor = goldenColor;
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = goldenColor;
                          e.target.style.color = "white";
                          e.target.style.borderColor = goldenColor;
                        }}
                        
                      >
                        Submit Application
                      </Button>
                    </Form>

                    <div className="text-center mt-4">
                      <p style={{ color: textColor, opacity: "0.8" }} className="mb-3">Or connect with us</p>
                      <div className="d-flex justify-content-center gap-3">
                        <Button
                          as="a"
                          href="https://www.linkedin.com/in/nexovate-ecell-041104374"
                          target="_blank"
                          style={{
                            backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : "white",
                            borderColor: goldenColor,
                            color: goldenColor,
                            borderRadius: "20px",
                            padding: "8px 16px",
                            fontWeight: "600",
                            transition: "all 0.3s ease"
                          }}
                          size="sm"
                          onMouseOver={(e) => {
                            e.target.style.backgroundColor = goldenColor;
                            e.target.style.color = "white";
                          }}
                          onMouseOut={(e) => {
                            e.target.style.backgroundColor = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
                            e.target.style.color = goldenColor;
                          }}
                        >
                          <i className="fab fa-linkedin me-2"></i> LinkedIn
                        </Button>

                        <Button
                          as="a"
                          href="https://www.instagram.com/_nexovate_ecell/"
                          target="_blank"
                          style={{
                            backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : "white",
                            borderColor: goldenColor,
                            color: goldenColor,
                            borderRadius: "20px",
                            padding: "8px 16px",
                            fontWeight: "600",
                            transition: "all 0.3s ease"
                          }}
                          size="sm"
                          onMouseOver={(e) => {
                            e.target.style.backgroundColor = goldenColor;
                            e.target.style.color = "white";
                          }}
                          onMouseOut={(e) => {
                            e.target.style.backgroundColor = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
                            e.target.style.color = goldenColor;
                          }}
                        >
                          <i className="fab fa-instagram me-2"></i> Instagram
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JoinUs;