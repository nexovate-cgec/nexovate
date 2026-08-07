import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import "./ComingSoon.css";

const ComingSoon = () => {
  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    teamName: "",
    leaderName: "",
    leaderRoll: "",
    leaderDept: "",
    leaderContact: "",
    leaderEmail: "",
    m2Name: "",
    m2Roll: "",
    m2Dept: "",
    m2Contact: "",
    m2Email: "",
    track: "Healthcare",
    otherTrack: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const finalData = {
      ...formData,
      track: formData.track === "Others" ? `Others: ${formData.otherTrack}` : formData.track,
    };

    const scriptURL = "https://script.google.com/macros/s/AKfycbxooD5HFPuRTai0PcU9YQfoJUEWwEzR1LYJHXfcLPnPIubh4aQ-5jW6XLfbnSNKCHBzmw/exec";
    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      setLoading(false);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong! Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className={`coming-soon-container ${isDark ? "dark-mode" : "light-mode"}`}>
      <Container className={`coming-soon-wrapper ${isDark ? "dark-wrapper" : ""}`}>
        <h2 className="coming-soon-title text-center">TEAM REGISTRATION FOR EUREKA! 2026</h2>
        <p className={`text-center mb-4 ${isDark ? "text-light" : "text-muted"}`}>
          Fill up the details below to register your team (2 Members).
        </p>

        {submitted ? (
          <Alert variant="success" className="text-center">
            <h4>Registration Successful!</h4>
            <p>Thank you for registering. We will get back to you soon.</p>
            <Button as={Link} to="/" variant="dark" className="mt-3">
              Back to Home
            </Button>
          </Alert>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={12} className="mb-4">
                <Form.Group>
                  <Form.Label className={isDark ? "text-light fw-semibold" : "form-label"}>Team Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your team name"
                    className={isDark ? "bg-dark text-light border-secondary custom-input-dark" : "form-control"}
                  />
                </Form.Group>
              </Col>
            </Row>

            <h4 className={`section-heading mb-3 ${isDark ? "dark-heading text-light" : ""}`}>Team Leader Information</h4>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group>
                  <Form.Label className={isDark ? "text-light fw-semibold" : "form-label"}>Leader Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="leaderName"
                    value={formData.leaderName}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className={isDark ? "bg-dark text-light border-secondary custom-input-dark" : "form-control"}
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group>
                  <Form.Label className={isDark ? "text-light fw-semibold" : "form-label"}>Roll Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="leaderRoll"
                    value={formData.leaderRoll}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 210xxxx"
                    className={isDark ? "bg-dark text-light border-secondary custom-input-dark" : "form-control"}
                  />
                </Form.Group>
              </Col>
              <Col md={4} className="mb-3">
                <Form.Group>
                  <Form.Label className={isDark ? "text-light fw-semibold" : "form-label"}>Department</Form.Label>
                  <Form.Control
                    type="text"
                    name="leaderDept"
                    value={formData.leaderDept}
                    onChange={handleChange}
                    required
                    placeholder="e.g. CSE"
                    className={isDark ? "bg-dark text-light border-secondary custom-input-dark" : "form-control"}
                  />
                </Form.Group>
              </Col>
              <Col md={4} className="mb-3">
                <Form.Group>
                  <Form.Label className={isDark ? "text-light fw-semibold" : "form-label"}>Contact Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="leaderContact"
                    value={formData.leaderContact}
                    onChange={handleChange}
                    required
                    placeholder="Phone number"
                    className={isDark ? "bg-dark text-light border-secondary custom-input-dark" : "form-control"}
                  />
                </Form.Group>
              </Col>
              <Col md={4} className="mb-4">
                <Form.Group>
                  <Form.Label className={isDark ? "text-light fw-semibold" : "form-label"}>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="leaderEmail"
                    value={formData.leaderEmail}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className={isDark ? "bg-dark text-light border-secondary custom-input-dark" : "form-control"}
                  />
                </Form.Group>
              </Col>
            </Row>

            <hr className={`mb-4 ${isDark ? "border-secondary" : ""}`} />

            <h4 className={`section-heading mb-3 ${isDark ? "dark-heading text-light" : ""}`}>Team Member Information</h4>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group>
                  <Form.Label className={isDark ? "text-light fw-semibold" : "form-label"}>Member Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="m2Name"
                    value={formData.m2Name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className={isDark ? "bg-dark text-light border-secondary custom-input-dark" : "form-control"}
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group>
                  <Form.Label className={isDark ? "text-light fw-semibold" : "form-label"}>Roll Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="m2Roll"
                    value={formData.m2Roll}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 210xxxx"
                    className={isDark ? "bg-dark text-light border-secondary custom-input-dark" : "form-control"}
                  />
                </Form.Group>
              </Col>
              <Col md={4} className="mb-3">
                <Form.Group>
                  <Form.Label className={isDark ? "text-light fw-semibold" : "form-label"}>Department</Form.Label>
                  <Form.Control
                    type="text"
                    name="m2Dept"
                    value={formData.m2Dept}
                    onChange={handleChange}
                    required
                    placeholder="e.g. EEE"
                    className={isDark ? "bg-dark text-light border-secondary custom-input-dark" : "form-control"}
                  />
                </Form.Group>
              </Col>
              <Col md={4} className="mb-3">
                <Form.Group>
                  <Form.Label className={isDark ? "text-light fw-semibold" : "form-label"}>Contact Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="m2Contact"
                    value={formData.m2Contact}
                    onChange={handleChange}
                    required
                    placeholder="Phone number"
                    className={isDark ? "bg-dark text-light border-secondary custom-input-dark" : "form-control"}
                  />
                </Form.Group>
              </Col>
              <Col md={4} className="mb-4">
                <Form.Group>
                  <Form.Label className={isDark ? "text-light fw-semibold" : "form-label"}>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="m2Email"
                    value={formData.m2Email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className={isDark ? "bg-dark text-light border-secondary custom-input-dark" : "form-control"}
                  />
                </Form.Group>
              </Col>
            </Row>

            <hr className={`mb-4 ${isDark ? "border-secondary" : ""}`} />

            <Row>
              <Col md={12} className="mb-3">
                <Form.Group>
                  <Form.Label className={isDark ? "text-light fw-semibold" : "form-label"}>Select Track</Form.Label>
                  <Form.Select
                    name="track"
                    value={formData.track}
                    required
                    onChange={handleChange}
                    className={isDark ? "bg-dark text-light border-secondary custom-input-dark" : "form-select"}
                  >
                    <option value="Healthcare" className={isDark ? "bg-dark text-light" : ""}>1. Healthcare</option>
                    <option value="Logistics and Supply Chain Management" className={isDark ? "bg-dark text-light" : ""}>2. Logistics and Supply Chain Management</option>
                    <option value="Energy and Sustainability" className={isDark ? "bg-dark text-light" : ""}>3. Energy and Sustainability</option>
                    <option value="Business" className={isDark ? "bg-dark text-light" : ""}>4. Business</option>
                    <option value="AI and DeepTech" className={isDark ? "bg-dark text-light" : ""}>5. AI and DeepTech</option>
                    <option value="Social Track" className={isDark ? "bg-dark text-light" : ""}>6. Social Track</option>
                    <option value="Cooling Innovation" className={isDark ? "bg-dark text-light" : ""}>7. Cooling Innovation</option>
                    <option value="Others" className={isDark ? "bg-dark text-light" : ""}>8. Others</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              {formData.track === "Others" && (
                <Col md={12} className="mb-4">
                  <Form.Group>
                    <Form.Label className={isDark ? "text-light fw-semibold" : "form-label"}>Please specify your track</Form.Label>
                    <Form.Control
                      type="text"
                      name="otherTrack"
                      value={formData.otherTrack}
                      onChange={handleChange}
                      required
                      placeholder="Write your track name here..."
                      className={isDark ? "bg-dark text-light border-secondary custom-input-dark" : "form-control"}
                    />
                  </Form.Group>
                </Col>
              )}
            </Row>

            <div className="text-center">
              <Button
                type="submit"
                className="coming-soon-btn"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Registration"}
              </Button>
            </div>
          </Form>
        )}
      </Container>
    </div>
  );
};

export default ComingSoon;