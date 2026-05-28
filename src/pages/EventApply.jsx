import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Spinner
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getEventById } from "../data/events";
import { useTheme } from "../contexts/ThemeContext";

const EventApply = () => {

  const { id } = useParams();
  const event = getEventById(id);
  const { isDark } = useTheme();

  const goldenColor = "rgb(189, 159, 103)";

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    year: "",
    department: "",
    contact: "",
    email: "",
    attendedWorkshop: "",
    workshopPart: "",
    entrepreneurshipIdea: "",
    startupInterest: "",
    workshopExpectation: "",
    entrepreneurGoal: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      await fetch(
        "YOUR_GOOGLE_SCRIPT_URL",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      setTimeout(() => {

        alert("Application Submitted Successfully!");

        setFormData({
          name: "",
          roll: "",
          year: "",
          department: "",
          contact: "",
          email: "",
          attendedWorkshop: "",
          workshopPart: "",
          entrepreneurshipIdea: "",
          startupInterest: "",
          workshopExpectation: "",
          entrepreneurGoal: ""
        });

        setLoading(false);

      }, 1500);

    } catch (error) {

      setLoading(false);
      alert("Something went wrong!");

    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>

          <Card
            style={{
              backgroundColor: isDark ? "#1a1a1a" : "#fff",
              color: isDark ? "#fff" : "#000",
              border: `2px solid ${goldenColor}`,
              borderRadius: "20px"
            }}
          >

            <Card.Body className="p-4">

              <h2
                className="text-center fw-bold mb-4"
                style={{ color: goldenColor }}
              >
                Apply For {event?.title}
              </h2>

              <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>

                  <Form.Control
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Roll Number</Form.Label>

                  <Form.Control
                    type="text"
                    name="roll"
                    required
                    value={formData.roll}
                    onChange={handleChange}
                    placeholder="Enter your roll number"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Year</Form.Label>

                  <Form.Select
                    name="year"
                    required
                    value={formData.year}
                    onChange={handleChange}
                  >
                    <option value="">Select Year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Department</Form.Label>

                  <Form.Control
                    type="text"
                    name="department"
                    required
                    value={formData.department}
                    onChange={handleChange}
                    placeholder="Enter your department"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Contact Number</Form.Label>

                  <Form.Control
                    type="tel"
                    name="contact"
                    required
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Enter your contact number"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Gmail</Form.Label>

                  <Form.Control
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your gmail"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>
                    Have you attended the Think Like An Entrepreneur session earlier?
                  </Form.Label>

                  <Form.Check
                    type="radio"
                    label="Yes, full attendance"
                    name="attendedWorkshop"
                    value="Yes, full attendance"
                    checked={formData.attendedWorkshop === "Yes, full attendance"}
                    onChange={handleChange}
                    required
                  />

                  <Form.Check
                    type="radio"
                    label="Could not attend the whole session"
                    name="attendedWorkshop"
                    value="Could not attend the whole session"
                    checked={formData.attendedWorkshop === "Could not attend the whole session"}
                    onChange={handleChange}
                  />

                  <Form.Check
                    type="radio"
                    label="No"
                    name="attendedWorkshop"
                    value="No"
                    checked={formData.attendedWorkshop === "No"}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>
                    If yes, which part did you attend?
                  </Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="workshopPart"
                    value={formData.workshopPart}
                    onChange={handleChange}
                    placeholder="Write here..."
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>
                    What does entrepreneurship mean to you?
                  </Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="entrepreneurshipIdea"
                    value={formData.entrepreneurshipIdea}
                    onChange={handleChange}
                    placeholder="Write your thoughts..."
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>
                    Are you interested in building your own startup?
                  </Form.Label>

                  <Form.Select
                    name="startupInterest"
                    required
                    value={formData.startupInterest}
                    onChange={handleChange}
                  >
                    <option value="">Select Option</option>
                    <option value="Yes">Yes</option>
                    <option value="Maybe">Maybe</option>
                    <option value="No">No</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>
                    What expectations do you have from this E-Cell event?
                  </Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="workshopExpectation"
                    value={formData.workshopExpectation}
                    onChange={handleChange}
                    placeholder="Write here..."
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>
                    What is your future entrepreneurial goal?
                  </Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="entrepreneurGoal"
                    value={formData.entrepreneurGoal}
                    onChange={handleChange}
                    placeholder="Write here..."
                    required
                  />
                </Form.Group>

                <Button
                  type="submit"
                  disabled={loading}
                  style={{
                    backgroundColor: goldenColor,
                    borderColor: goldenColor,
                    width: "100%",
                    padding: "10px",
                    borderRadius: "30px",
                    fontWeight: "600"
                  }}
                >
                  {loading ? (
                    <>
                      <Spinner
                        animation="border"
                        size="sm"
                        className="me-2"
                      />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>

              </Form>

            </Card.Body>

          </Card>

        </Col>
      </Row>
    </Container>
  );
};

export default EventApply;