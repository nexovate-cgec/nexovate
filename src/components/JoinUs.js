import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "CGEC",
    otherCollege: "",
    year: "",
    department: "",
    otherDepartment: "",
    interests: [],
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { isDark } = useTheme(); 

  const sectionBg = isDark ? "var(--dark-bg, #121212)" : "white";
  const cardBg = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
  const textColor = isDark ? "var(--light-text, #ffffff)" : "#2c3e50";
  const goldenColor = "rgb(189, 159, 103)";
  const borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";

  const interestsList = [
    "Graphics",
    "Video Editing", 
    "Tech Member",
    "Content Writer",
    "Social Media Handling",
    "Technical Workshops",
    "Business Planning",
    "Marketing & Networking",
    "Competitions & Events",
    "Mentorship Programs",
  ];

  const popularColleges = [
    "Cooch Behar Government Engineering College",
    "Jalpaiguri Government Engineering College", 
    "Kalyani Government Engineering College",
    "Academy of Technology",
    "Institute of Engineering & Management",
    "Techno India Group",
    "Heritage Institute of Technology",
    "OTHER"
  ];

  const currentYear = new Date().getFullYear();
  const academicYears = [
    { value: "1st", label: `1st Year (${currentYear}-${currentYear + 1})` },
    { value: "2nd", label: `2nd Year (${currentYear - 1}-${currentYear})` },
    { value: "3rd", label: `3rd Year (${currentYear - 2}-${currentYear - 1})` },
    { value: "4th", label: `4th Year (${currentYear - 3}-${currentYear - 2})` },
    { value: "5th", label: `5th Year (${currentYear - 4}-${currentYear - 3})` },
    { value: "Postgraduate", label: "Postgraduate" }
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
    setIsSubmitting(true);

    try {
      const finalData = {
        ...formData,
        college: formData.college === "OTHER" ? formData.otherCollege : formData.college,
        department: formData.department === "OTHER" ? formData.otherDepartment : formData.department,
        submissionDate: new Date().toLocaleString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        _subject: `New E-Cell Application from ${formData.name}`
      };

      // Formspree submission
      const formspreeResponse = await fetch("https://formspree.io/f/xanppake", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(finalData),
      });

      if (formspreeResponse.ok) {
        // Send confirmation email using Netlify Function
        const emailSent = await sendConfirmationEmail(finalData);
        
        if (emailSent) {
          setShowSuccess(true);
          resetForm();
          setTimeout(() => setShowSuccess(false), 8000);
        } else {
          // Form submitted but email failed - still show success but with warning
          setShowSuccess(true);
          resetForm();
          setTimeout(() => setShowSuccess(false), 8000);
          console.warn("Form submitted but confirmation email failed");
        }
      } else {
        alert("❌ Failed to submit the form. Try again later.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("⚠️ Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Netlify Function for sending confirmation email
  const sendConfirmationEmail = async (data) => {
    try {
      const response = await fetch('/.netlify/functions/send-confirmation-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: data.email,
          name: data.name,
          year: data.year,
          college: data.college,
          department: data.department,
          submissionDate: data.submissionDate
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        console.log('✅ Confirmation email sent successfully');
        return true;
      } else {
        console.error('❌ Failed to send email:', result.error);
        return false;
      }
    } catch (error) {
      console.error('⚠️ Email sending failed:', error);
      return false;
    }
  };

  const resetForm = () => {
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
  };

  return (
    <section 
      id="join" 
      className="py-5"
      style={{ 
        backgroundColor: sectionBg,
        color: textColor,
        minHeight: "100vh"
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={9}>
            {/* Success Alert */}
            {showSuccess && (
              <Alert 
                variant="success" 
                className="mb-4 text-center animate__animated animate__fadeInDown"
                style={{
                  backgroundColor: "rgba(25, 135, 84, 0.1)",
                  borderColor: "#198754",
                  color: "#198754",
                  borderRadius: "15px",
                  border: "2px solid #198754",
                  padding: "20px"
                }}
              >
                <div className="d-flex align-items-center justify-content-center mb-3">
                  <i className="fas fa-check-circle me-3" style={{ fontSize: "2rem" }}></i>
                  <h4 className="mb-0 fw-bold">Application Submitted Successfully!</h4>
                </div>
                <p className="mb-2 fs-5">
                  Thank you <strong>{formData.name}</strong> for your interest in CGEC E-Cell!
                </p>
                <p className="mb-3">
                  We have received your application and will contact you at <strong className="text-dark">{formData.email}</strong> soon.
                </p>
                <p className="mb-0 text-muted">
                  <small>You will receive a confirmation email shortly.</small>
                </p>
              </Alert>
            )}

            {/* Rest of your JSX remains exactly the same */}
            <Card 
              className="shadow-lg border-0 animate__animated animate__fadeInUp"
              style={{ 
                backgroundColor: cardBg,
                color: textColor,
                border: `2px solid ${goldenColor}`,
                borderRadius: "20px",
                overflow: "hidden"
              }}
            >
              <Card.Body className="p-4 p-md-5">
                <div className="text-center mb-5">
                  <h1 
                    className="display-5 fw-bold mb-3"
                    style={{ color: goldenColor }}
                  >
                    Join CGEC E-Cell
                  </h1>
                  <p 
                    className="lead mb-2 fs-4"
                    style={{ color: textColor, opacity: "0.9" }}
                  >
                    Open to students from all colleges
                  </p>
                  <p 
                    className="lead mb-0 fs-5"
                    style={{ color: textColor, opacity: "0.8" }}
                  >
                    Be part of the innovation revolution. Let's build the future together!
                  </p>
                </div>

                <Row className="g-4">
                  <Col lg={6} className="mb-4">
                    <div className="h-100">
                      <h4 
                        className="fw-semibold mb-4 pb-2 border-bottom"
                        style={{ color: goldenColor, borderColor: `${goldenColor}40 !important` }}
                      >
                        <i className="fas fa-star me-2"></i>
                        Why Join E-Cell?
                      </h4>
                      <ul className="list-unstyled mb-4">
                        <li className="mb-3 p-3 rounded" style={{ backgroundColor: isDark ? 'rgba(189, 159, 103, 0.1)' : 'rgba(189, 159, 103, 0.05)', color: textColor }}>
                          <i className="fas fa-rocket me-3" style={{ color: goldenColor }}></i>
                          <strong>Startup Support</strong> - Incubation and mentorship programs
                        </li>
                        <li className="mb-3 p-3 rounded" style={{ backgroundColor: isDark ? 'rgba(189, 159, 103, 0.1)' : 'rgba(189, 159, 103, 0.05)', color: textColor }}>
                          <i className="fas fa-users me-3" style={{ color: goldenColor }}></i>
                          <strong>Networking</strong> - Connect with industry leaders and alumni
                        </li>
                        <li className="mb-3 p-3 rounded" style={{ backgroundColor: isDark ? 'rgba(189, 159, 103, 0.1)' : 'rgba(189, 159, 103, 0.05)', color: textColor }}>
                          <i className="fas fa-wrench me-3" style={{ color: goldenColor }}></i>
                          <strong>Workshops</strong> - Hands-on technical and business training
                        </li>
                        <li className="mb-3 p-3 rounded" style={{ backgroundColor: isDark ? 'rgba(189, 159, 103, 0.1)' : 'rgba(189, 159, 103, 0.05)', color: textColor }}>
                          <i className="fas fa-trophy me-3" style={{ color: goldenColor }}></i>
                          <strong>Competitions</strong> - Showcase your innovations and win prizes
                        </li>
                        <li className="mb-3 p-3 rounded" style={{ backgroundColor: isDark ? 'rgba(189, 159, 103, 0.1)' : 'rgba(189, 159, 103, 0.05)', color: textColor }}>
                          <i className="fas fa-briefcase me-3" style={{ color: goldenColor }}></i>
                          <strong>Internships</strong> - Industry exposure and career opportunities
                        </li>
                        <li className="mb-3 p-3 rounded" style={{ backgroundColor: isDark ? 'rgba(189, 159, 103, 0.1)' : 'rgba(189, 159, 103, 0.05)', color: textColor }}>
                          <i className="fas fa-graduation-cap me-3" style={{ color: goldenColor }}></i>
                          <strong>Inter-College Collaboration</strong> - Connect with students from other colleges
                        </li>
                      </ul>

                      <div 
                        className="p-4 rounded position-relative"
                        style={{ 
                          backgroundColor: isDark ? 'rgba(189, 159, 103, 0.15)' : 'rgba(189, 159, 103, 0.1)',
                          border: `2px solid ${goldenColor}40`,
                          color: textColor
                        }}
                      >
                        <i 
                          className="fas fa-quote-left position-absolute"
                          style={{ 
                            color: `${goldenColor}40`, 
                            fontSize: '3rem', 
                            top: '10px', 
                            left: '15px' 
                          }}
                        ></i>
                        <p className="mb-3 fs-5 position-relative" style={{ zIndex: 1 }}>
                          "E-Cell provided amazing opportunities to collaborate with students from different colleges and work on real startup projects!"
                        </p>
                        <small className="fw-semibold" style={{ color: goldenColor }}>
                          - Student from Partner College
                        </small>
                      </div>
                    </div>
                  </Col>

                  <Col lg={6}>
                    <Form onSubmit={handleSubmit} className="h-100">
                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: textColor }} className="fw-semibold">
                          <i className="fas fa-user me-2" style={{ color: goldenColor }}></i>
                          Full Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                          style={{
                            backgroundColor: isDark ? "var(--dark-bg, #121212)" : "white",
                            color: textColor,
                            border: `2px solid ${borderColor}`,
                            borderRadius: "10px",
                            padding: "12px 15px",
                            fontSize: "1rem"
                          }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: textColor }} className="fw-semibold">
                          <i className="fas fa-envelope me-2" style={{ color: goldenColor }}></i>
                          Email Address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email address"
                          required
                          style={{
                            backgroundColor: isDark ? "var(--dark-bg, #121212)" : "white",
                            color: textColor,
                            border: `2px solid ${borderColor}`,
                            borderRadius: "10px",
                            padding: "12px 15px",
                            fontSize: "1rem"
                          }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label style={{ color: textColor }} className="fw-semibold">
                          <i className="fas fa-university me-2" style={{ color: goldenColor }}></i>
                          College Name
                        </Form.Label>
                        <Form.Select
                          name="college"
                          value={formData.college}
                          onChange={handleChange}
                          required
                          style={{
                            backgroundColor: isDark ? "var(--dark-bg, #121212)" : "white",
                            color: textColor,
                            border: `2px solid ${borderColor}`,
                            borderRadius: "10px",
                            padding: "12px 15px",
                            fontSize: "1rem"
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
                        <Form.Group className="mb-3 animate__animated animate__fadeIn">
                          <Form.Label style={{ color: textColor }} className="fw-semibold">
                            <i className="fas fa-edit me-2" style={{ color: goldenColor }}></i>
                            Specify Your College
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="otherCollege"
                            value={formData.otherCollege}
                            onChange={handleChange}
                            placeholder="Enter your college name"
                            required
                            style={{
                              backgroundColor: isDark ? "var(--dark-bg, #121212)" : "white",
                              color: textColor,
                              border: `2px solid ${borderColor}`,
                              borderRadius: "10px",
                              padding: "12px 15px",
                              fontSize: "1rem"
                            }}
                          />
                        </Form.Group>
                      )}

                      <Row className="g-3">
                        <Col sm={6}>
                          <Form.Group className="mb-3">
                            <Form.Label style={{ color: textColor }} className="fw-semibold">
                              <i className="fas fa-calendar-alt me-2" style={{ color: goldenColor }}></i>
                              Academic Year
                            </Form.Label>
                            <Form.Select
                              name="year"
                              value={formData.year}
                              onChange={handleChange}
                              required
                              style={{
                                backgroundColor: isDark ? "var(--dark-bg, #121212)" : "white",
                                color: textColor,
                                border: `2px solid ${borderColor}`,
                                borderRadius: "10px",
                                padding: "12px 15px",
                                fontSize: "1rem"
                              }}
                            >
                              <option value="">Select Year</option>
                              {academicYears.map((year, index) => (
                                <option key={index} value={year.value}>
                                  {year.label}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>
                        </Col>

                        <Col sm={6}>
                          <Form.Group className="mb-3">
                            <Form.Label style={{ color: textColor }} className="fw-semibold">
                              <i className="fas fa-book me-2" style={{ color: goldenColor }}></i>
                              Department
                            </Form.Label>
                            <Form.Select
                              name="department"
                              value={formData.department}
                              onChange={handleChange}
                              required
                              style={{
                                backgroundColor: isDark ? "var(--dark-bg, #121212)" : "white",
                                color: textColor,
                                border: `2px solid ${borderColor}`,
                                borderRadius: "10px",
                                padding: "12px 15px",
                                fontSize: "1rem"
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
                              <option value="OTHER">Other Department</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>

                      {formData.department === "OTHER" && (
                        <Form.Group className="mb-3 animate__animated animate__fadeIn">
                          <Form.Label style={{ color: textColor }} className="fw-semibold">
                            <i className="fas fa-edit me-2" style={{ color: goldenColor }}></i>
                            Specify Your Department
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="otherDepartment"
                            value={formData.otherDepartment}
                            onChange={handleChange}
                            placeholder="Enter your department name"
                            required
                            style={{
                              backgroundColor: isDark ? "var(--dark-bg, #121212)" : "white",
                              color: textColor,
                              border: `2px solid ${borderColor}`,
                              borderRadius: "10px",
                              padding: "12px 15px",
                              fontSize: "1rem"
                            }}
                          />
                        </Form.Group>
                      )}

                      <Form.Group className="mb-4">
                        <Form.Label style={{ color: textColor }} className="fw-semibold">
                          <i className="fas fa-heart me-2" style={{ color: goldenColor }}></i>
                          Areas of Interest (Select multiple)
                        </Form.Label>
                        <div 
                          className="border rounded p-3"
                          style={{ 
                            border: `2px solid ${borderColor}`,
                            backgroundColor: isDark ? "var(--dark-bg, #121212)" : "#f8f9fa",
                            borderRadius: "10px",
                            maxHeight: "200px",
                            overflowY: "auto"
                          }}
                        >
                          <Row>
                            {interestsList.map((interest, index) => (
                              <Col sm={6} key={index}>
                                <Form.Check
                                  type="checkbox"
                                  id={`interest-${index}`}
                                  label={interest}
                                  checked={formData.interests.includes(interest)}
                                  onChange={() => handleInterestToggle(interest)}
                                  className="mb-2"
                                  style={{ color: textColor }}
                                />
                              </Col>
                            ))}
                          </Row>
                        </div>
                      </Form.Group>

                      <Button
                        style={{
                          backgroundColor: goldenColor,
                          borderColor: goldenColor,
                          color: "white",
                          borderRadius: "15px",
                          padding: "15px 30px",
                          fontWeight: "700",
                          fontSize: "1.1rem",
                          transition: "all 0.3s ease",
                          width: "100%",
                          border: "none",
                          boxShadow: `0 4px 15px ${goldenColor}40`
                        }}
                        type="submit"
                        className="py-3 fw-bold position-relative overflow-hidden"
                        disabled={isSubmitting}
                        onMouseOver={(e) => {
                          if (!isSubmitting) {
                            e.target.style.backgroundColor = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
                            e.target.style.color = goldenColor;
                            e.target.style.transform = "translateY(-2px)";
                            e.target.style.boxShadow = `0 8px 25px ${goldenColor}60`;
                          }
                        }}
                        onMouseOut={(e) => {
                          if (!isSubmitting) {
                            e.target.style.backgroundColor = goldenColor;
                            e.target.style.color = "white";
                            e.target.style.transform = "translateY(0)";
                            e.target.style.boxShadow = `0 4px 15px ${goldenColor}40`;
                          }
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Submitting Your Application...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-paper-plane me-2"></i>
                            Submit Application
                          </>
                        )}
                      </Button>

                      <div className="text-center mt-4 pt-3 border-top" style={{ borderColor: `${borderColor} !important` }}>
                        <p style={{ color: textColor, opacity: "0.8" }} className="mb-3 fw-semibold">
                          Or connect with us on social media
                        </p>
                        <div className="d-flex justify-content-center gap-3">
                          <Button
                            as="a"
                            href="https://www.linkedin.com/in/nexovate-ecell-041104374"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : "white",
                              borderColor: goldenColor,
                              color: goldenColor,
                              borderRadius: "10px",
                              padding: "10px 20px",
                              fontWeight: "600",
                              transition: "all 0.3s ease",
                              border: `2px solid ${goldenColor}`
                            }}
                            size="sm"
                            onMouseOver={(e) => {
                              e.target.style.backgroundColor = goldenColor;
                              e.target.style.color = "white";
                              e.target.style.transform = "translateY(-2px)";
                            }}
                            onMouseOut={(e) => {
                              e.target.style.backgroundColor = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
                              e.target.style.color = goldenColor;
                              e.target.style.transform = "translateY(0)";
                            }}
                          >
                            <i className="fab fa-linkedin me-2"></i> LinkedIn
                          </Button>

                          <Button
                            as="a"
                            href="https://www.instagram.com/_nexovate_ecell/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : "white",
                              borderColor: goldenColor,
                              color: goldenColor,
                              borderRadius: "10px",
                              padding: "10px 20px",
                              fontWeight: "600",
                              transition: "all 0.3s ease",
                              border: `2px solid ${goldenColor}`
                            }}
                            size="sm"
                            onMouseOver={(e) => {
                              e.target.style.backgroundColor = goldenColor;
                              e.target.style.color = "white";
                              e.target.style.transform = "translateY(-2px)";
                            }}
                            onMouseOut={(e) => {
                              e.target.style.backgroundColor = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
                              e.target.style.color = goldenColor;
                              e.target.style.transform = "translateY(0)";
                            }}
                          >
                            <i className="fab fa-instagram me-2"></i> Instagram
                          </Button>
                        </div>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Additional Info Section */}
            <div className="text-center mt-5">
              <p style={{ color: textColor, opacity: "0.7" }} className="mb-2">
                <i className="fas fa-clock me-2" style={{ color: goldenColor }}></i>
                We typically respond within 24-48 hours
              </p>
              <p style={{ color: textColor, opacity: "0.7" }} className="mb-0">
                <i className="fas fa-shield-alt me-2" style={{ color: goldenColor }}></i>
                Your information is secure and will not be shared with third parties
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JoinUs;