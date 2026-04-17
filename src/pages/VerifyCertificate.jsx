import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Spinner,
  Row,
  Col,
} from "react-bootstrap";
import certificates from "../data/certificates";
import { useTheme } from "../contexts/ThemeContext";

const VerifyCertificate = () => {
  const { isDark } = useTheme();
  const [mode, setMode] = useState("id");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const [formData, setFormData] = useState({
    certificateId: "",
    name: "",
    year: "",
    department: "",
    college: "",
    roll: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    setTimeout(() => {
      let found;
      if (mode === "id") {
        found = certificates.find(
          (cert) =>
            cert.certificateId.toLowerCase() ===
            formData.certificateId.trim().toLowerCase()
        );
      } else {
        found = certificates.find(
          (cert) =>
            cert.name.toLowerCase().includes(formData.name.toLowerCase()) &&
            (formData.roll ? cert.roll === formData.roll : true) &&
            (formData.college ? cert.college?.toLowerCase().includes(formData.college.toLowerCase()) : true)
        );
      }

      if (found) {
        setResult({ status: "valid", data: found });
      } else {
        setResult({ status: "invalid" });
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Container style={{ maxWidth: "850px", marginTop: "120px", marginBottom: "50px" }}>
      <Card
        className="p-4 shadow-lg"
        style={{
          backgroundColor: isDark ? "#1e1e1e" : "#ffffff",
          color: isDark ? "#ffffff" : "#000000",
          border: "2px solid rgb(189,159,103)",
          borderRadius: "15px"
        }}
      >
        <h3 className="text-center mb-4">🎓 Certificate Verification</h3>

        <div className="d-flex justify-content-center mb-4 gap-2">
          <Button
            variant={mode === "id" ? "warning" : "outline-warning"}
            onClick={() => setMode("id")}
          >
            By Certificate ID
          </Button>
          <Button
            variant={mode === "search" ? "warning" : "outline-warning"}
            onClick={() => setMode("search")}
          >
            By Student Details
          </Button>
        </div>

        <Form onSubmit={handleVerify}>
          {mode === "id" ? (
            <Form.Group className="mb-3">
              <Form.Label>Certificate ID</Form.Label>
              <Form.Control
                name="certificateId"
                placeholder="e.g. EC26SM001"
                onChange={handleChange}
                required
                className={isDark ? "bg-dark text-white border-secondary" : ""}
              />
            </Form.Group>
          ) : (
            <Row>
              <Col md={6} className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control name="name" placeholder="Enter Name" onChange={handleChange} required />
              </Col>
              <Col md={6} className="mb-3">
                <Form.Label>College / University</Form.Label>
                <Form.Control name="college" placeholder="College Name" onChange={handleChange} />
              </Col>
              <Col md={4} className="mb-3">
                <Form.Label>Roll Number</Form.Label>
                <Form.Control name="roll" placeholder="Roll No" onChange={handleChange} />
              </Col>
              <Col md={4} className="mb-3">
                <Form.Label>Year</Form.Label>
                <Form.Control name="year" placeholder="e.g. 2nd Year" onChange={handleChange} />
              </Col>
              <Col md={4} className="mb-3">
                <Form.Label>Department</Form.Label>
                <Form.Control name="department" placeholder="e.g. CSE" onChange={handleChange} />
              </Col>
            </Row>
          )}

          <Button className="w-100 mt-2" type="submit" variant="warning" disabled={isLoading}>
            {isLoading ? (
              <><Spinner size="sm" className="me-2" />Verifying...</>
            ) : (
              "Verify Certificate"
            )}
          </Button>
        </Form>

        {!isLoading && result && (
          <div className="mt-4">
            {result.status === "valid" ? (
              <div
                className="p-4 rounded border"
                style={{
                  background: isDark ? "#12372a" : "#e9f7ef",
                  color: isDark ? "#b6f2d6" : "#155724",
                  borderColor: isDark ? "#1b4d3e" : "#c3e6cb"
                }}
              >
                <h5 className="border-bottom pb-2 mb-3">✅ Certificate Verified</h5>
                <Row>
                  <Col sm={6}><p><strong>Name:</strong> {result.data.name}</p></Col>
                  
                  {result.data.roll && (
                    <Col sm={6}><p><strong>Roll No:</strong> {result.data.roll}</p></Col>
                  )}

                  {result.data.college && (
                    <Col sm={12}><p><strong>College:</strong> {result.data.college}</p></Col>
                  )}

                  {result.data.department && (
                    <Col sm={6}><p><strong>Department:</strong> {result.data.department}</p></Col>
                  )}

                  {result.data.year && (
                    <Col sm={6}><p><strong>Year:</strong> {result.data.year}</p></Col>
                  )}

                  <Col sm={6}><p><strong>Event:</strong> {result.data.event}</p></Col>
                  <Col sm={6}><p><strong>Issue Date:</strong> {result.data.issueDate}</p></Col>
                  <Col sm={12}><p><strong>Certificate ID:</strong> {result.data.certificateId}</p></Col>
                </Row>
                
                <a
                  href={`/certificate_down/${result.data.file}`}
                  download
                  className="btn btn-success mt-3 w-100"
                >
                  ⬇ Download Certificate
                </a>
              </div>
            ) : (
              <div
                className="p-3 rounded text-center border"
                style={{
                  background: isDark ? "#3a1c1c" : "#f8d7da",
                  color: isDark ? "#ffb3b3" : "#721c24",
                  borderColor: isDark ? "#5c2b2b" : "#f5c6cb"
                }}
              >
                ❌ No certificate found.
              </div>
            )}
          </div>
        )}
      </Card>
    </Container>
  );
};

export default VerifyCertificate;