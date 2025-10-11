import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    year: "",
    department: "",
    interests: [],
  });

  const interestsList = [
    "Startup Incubation",
    "Technical Workshops",
    "Business Planning",
    "Marketing & Networking",
    "Competitions & Events",
    "Mentorship Programs",
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
      const response = await fetch("https://formspree.io/f/xanppake", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          year: "",
          department: "",
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
    <section id="join" className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="shadow-lg border-0">
              <Card.Body className="p-5">
                {/* Header Section */}
                <div className="text-center mb-5">
                  <h1 className="display-5 fw-bold text-primary">Join CGEC E-Cell</h1>
                  <p className="lead text-muted">
                    Be part of the innovation revolution at Cooch Behar Government
                    Engineering College. Let's build the future together!
                  </p>
                </div>

                <Row>
                  <Col md={6} className="mb-4">
                    <h4 className="fw-semibold mb-4">Why Join E-Cell?</h4>
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <i className="fas fa-rocket text-primary me-2"></i>
                        <strong>Startup Support</strong> - Incubation and mentorship
                      </li>
                      <li className="mb-3">
                        <i className="fas fa-users text-primary me-2"></i>
                        <strong>Networking</strong> - Connect with industry leaders
                      </li>
                      <li className="mb-3">
                        <i className="fas fa-wrench text-primary me-2"></i>
                        <strong>Workshops</strong> - Hands-on technical training
                      </li>
                      <li className="mb-3">
                        <i className="fas fa-trophy text-primary me-2"></i>
                        <strong>Competitions</strong> - Showcase your innovations
                      </li>
                      <li className="mb-3">
                        <i className="fas fa-briefcase text-primary me-2"></i>
                        <strong>Internships</strong> - Industry exposure opportunities
                      </li>
                    </ul>

                    <div className="mt-4 p-3 bg-primary text-white rounded">
                      <p className="mb-2">
                        "E-Cell transformed my college experience and helped launch my startup!"
                      </p>
                      <small>- Alumni Entrepreneur</small>
                    </div>
                  </Col>

                  <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                        />
                      </Form.Group>

                      <Row>
                        <Col sm={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Academic Year</Form.Label>
                            <Form.Select
                              name="year"
                              value={formData.year}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select Year</option>
                              <option value="1st">1st Year</option>
                              <option value="2nd">2nd Year</option>
                              <option value="3rd">3rd Year</option>
                              <option value="4th">4th Year</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>

                        <Col sm={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Department</Form.Label>
                            <Form.Select
                              name="department"
                              value={formData.department}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Select Department</option>
                              <option value="CSE">Computer Science and Engineering</option>
                              <option value="ECE">Electronics and Communication Engineering</option>
                              <option value="EE">Electrical Engineering</option>
                              <option value="ME">Mechanical Engineering</option>
                              <option value="CE">Civil Engineering</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-4">
                        <Form.Label>Areas of Interest</Form.Label>
                        <div className="border rounded p-3">
                          {interestsList.map((interest, index) => (
                            <Form.Check
                              key={index}
                              type="checkbox"
                              id={`interest-${index}`}
                              label={interest}
                              checked={formData.interests.includes(interest)}
                              onChange={() => handleInterestToggle(interest)}
                              className="mb-2"
                            />
                          ))}
                        </div>
                      </Form.Group>

                      <Button
                        variant="danger"
                        type="submit"
                        className="w-100 py-2 fw-bold bg-danger"
                        style={{ cursor: "pointer" }}
                        size="lg"
                      >
                        Submit
                      </Button>
                    </Form>

                    <div className="text-center mt-4">
                      <p className="text-muted mb-3">Or connect with us</p>
                      <div className="d-flex justify-content-center gap-3">
                        <Button
                          as="a"
                          href="https://www.linkedin.com/in/nexovate-ecell-041104374"
                          target="_blank"
                          variant="outline-primary"
                          size="sm"
                        >
                          <i className="fab fa-linkedin me-2"></i> LinkedIn
                        </Button>

                        <Button
                          as="a"
                          href="https://www.instagram.com/_nexovate_ecell/"
                          target="_blank"
                          variant="outline-danger"
                          size="sm"
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
