import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Button, Badge, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const StudentProfilePage = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [student, setStudent] = useState(null);
  const [foodChoice, setFoodChoice] = useState("");
  const [submittedChoice, setSubmittedChoice] = useState("");
  const [loading, setLoading] = useState(false);

  const GOOGLE_SHEET_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

  useEffect(() => {
    const isStudent = localStorage.getItem("isStudent");
    const storedData = localStorage.getItem("studentData");

    if (isStudent === "true" && storedData) {
      const parsedStudent = JSON.parse(storedData);
      setStudent(parsedStudent);

      const savedFoodChoice = localStorage.getItem(`foodChoice_${parsedStudent.rollNumber}`);
      if (savedFoodChoice) {
        setFoodChoice(savedFoodChoice);
        setSubmittedChoice(savedFoodChoice);
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleSubmitFoodChoice = async (e) => {
    e.preventDefault();

    if (submittedChoice) {
      alert("You have already submitted your food preference. Changes are not allowed.");
      return;
    }

    if (!foodChoice) {
      alert("Please select a food option first!");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        rollNumber: student.rollNumber,
        name: student.name,
        email: student.email,
        department: student.department,
        year: student.year,
        contact: student.contact,
        foodChoice: foodChoice,
        submittedAt: new Date().toLocaleString(),
      };

      await fetch(GOOGLE_SHEET_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      localStorage.setItem(`foodChoice_${student.rollNumber}`, foodChoice);
      setSubmittedChoice(foodChoice);
      alert("Food preference submitted & saved to Google Sheet successfully!");
    } catch (error) {
      alert("Failed to submit data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isStudent");
    localStorage.removeItem("studentEmail");
    localStorage.removeItem("studentData");
    navigate("/login");
  };

  if (!student) {
    return null;
  }

  return (
    <Container style={{ maxWidth: "800px", marginTop: "100px", marginBottom: "50px" }}>
      <Card
        className="shadow-lg border-0 p-4"
        style={{
          backgroundColor: isDark ? "#1e1e1e" : "#ffffff",
          color: isDark ? "#ffffff" : "#000000",
          borderRadius: "20px",
          border: "2px solid rgb(189,159,103)",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold m-0">Student Profile</h2>
          <Button variant="danger" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        <Row className="align-items-center">
          <Col md={4} className="text-center mb-4 mb-md-0">
            <img
              src={student.profilePic}
              alt={student.name}
              className="rounded-circle img-fluid shadow"
              style={{
                width: "180px",
                height: "180px",
                objectFit: "cover",
                border: "4px solid rgb(189,159,103)",
              }}
            />
            <h4 className="fw-bold mt-3 mb-1">{student.name}</h4>
            <Badge bg="warning" text="dark" className="px-3 py-2">
              ID / Roll: {student.rollNumber}
            </Badge>
          </Col>

          <Col md={8}>
            <div
              className="p-3 rounded"
              style={{
                backgroundColor: isDark ? "#2a2a2a" : "#f8f9fa",
                border: "1px solid rgba(189,159,103,0.3)",
              }}
            >
              <div className="mb-3">
                <span className="text-muted d-block small">College</span>
                <span className="fw-bold">{student.college}</span>
              </div>

              <Row className="mb-3">
                <Col sm={6}>
                  <span className="text-muted d-block small">Department</span>
                  <span className="fw-bold">{student.department}</span>
                </Col>
                <Col sm={6} className="mt-2 mt-sm-0">
                  <span className="text-muted d-block small">Year</span>
                  <span className="fw-bold">{student.year}</span>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col sm={6}>
                  <span className="text-muted d-block small">Email Address</span>
                  <span className="fw-bold">{student.email}</span>
                </Col>
                <Col sm={6} className="mt-2 mt-sm-0">
                  <span className="text-muted d-block small">Contact Number</span>
                  <span className="fw-bold">{student.contact}</span>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <hr className="my-4" style={{ borderColor: "rgba(189,159,103,0.5)" }} />

        <div
          className="p-3 rounded"
          style={{
            backgroundColor: isDark ? "#2a2a2a" : "#f8f9fa",
            border: "1px solid rgba(189,159,103,0.3)",
          }}
        >
          <h5 className="fw-bold mb-3 text-warning">Event Food Preference</h5>

          <Form onSubmit={handleSubmitFoodChoice}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">
                Select your food preference for the upcoming event:
              </Form.Label>
              <div className="d-flex gap-4 mt-2">
                <Form.Check
                  type="radio"
                  id="veg-option"
                  label="Veg 🥦"
                  name="foodChoice"
                  value="Veg"
                  checked={foodChoice === "Veg"}
                  onChange={(e) => setFoodChoice(e.target.value)}
                  disabled={Boolean(submittedChoice)}
                  className="fw-bold"
                />
                <Form.Check
                  type="radio"
                  id="non-veg-option"
                  label="Non-Veg 🍗"
                  name="foodChoice"
                  value="Non-Veg"
                  checked={foodChoice === "Non-Veg"}
                  onChange={(e) => setFoodChoice(e.target.value)}
                  disabled={Boolean(submittedChoice)}
                  className="fw-bold"
                />
              </div>
            </Form.Group>

            <Button
              type="submit"
              variant={submittedChoice ? "secondary" : "warning"}
              className="fw-bold px-4"
              disabled={loading || Boolean(submittedChoice)}
            >
              {loading ? (
                <Spinner animation="border" size="sm" />
              ) : submittedChoice ? (
                "Submitted"
              ) : (
                "Submit Food Preference"
              )}
            </Button>
          </Form>

          {submittedChoice && (
            <p className="mt-3 mb-0 text-success fw-bold">
              Submitted Choice: {submittedChoice} (Cannot be changed)
            </p>
          )}
        </div>
      </Card>
    </Container>
  );
};

export default StudentProfilePage;