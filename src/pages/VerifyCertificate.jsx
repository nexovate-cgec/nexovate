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
            cert.year === formData.year &&
            cert.department.toLowerCase() ===
              formData.department.toLowerCase()
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
    <Container style={{ maxWidth: "800px", marginTop: "120px" }}>
      <Card
        className="p-4 shadow"
        style={{
          backgroundColor: isDark ? "#1e1e1e" : "#ffffff",
          color: isDark ? "#ffffff" : "#000000",
          border: "2px solid rgb(189,159,103)",
        }}
      >
        <h3 className="text-center mb-3">🎓 Certificate Verification</h3>

        <div className="d-flex justify-content-center mb-4 gap-2">
          <Button
            variant={mode === "id" ? "warning" : "outline-warning"}
            onClick={() => setMode("id")}
          >
            Enter Certificate ID
          </Button>
          <Button
            variant={mode === "search" ? "warning" : "outline-warning"}
            onClick={() => setMode("search")}
          >
            Search Your Certificate
          </Button>
        </div>

        <Form onSubmit={handleVerify}>
          {mode === "id" ? (
            <Form.Group className="mb-3">
              <Form.Label>Certificate ID</Form.Label>
              <Form.Control
                name="certificateId"
                placeholder="e.g. CGEC2026-001"
                onChange={handleChange}
                required
              />
            </Form.Group>
          ) : (
            <Row>
              <Col md={6} className="mb-3">
                <Form.Control
                  name="name"
                  placeholder="Your Name"
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col md={3} className="mb-3">
                <Form.Control
                  name="year"
                  placeholder="Year(1st/2nd/3rd/4th/pass out)"
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col md={3} className="mb-3">
                <Form.Control
                  name="department"
                  placeholder="Department (CE/ME/EE/ECE/CSE)"
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>
          )}

          <Button className="w-100" type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Spinner size="sm" className="me-2" />
                Verifying...
              </>
            ) : (
              "Verify Certificate"
            )}
          </Button>
        </Form>

        {isLoading && (
          <div
            className={`text-center mt-4 ${
              isDark ? "text-light opacity-75" : "text-muted"
            }`}
          >
            Checking certificate records, please wait...
          </div>
        )}

        {!isLoading && result && (
          <div className="mt-4">
            {result.status === "valid" ? (
              <div
                className="p-3 rounded"
                style={{
                  background: isDark ? "#12372a" : "#e9f7ef",
                  color: isDark ? "#b6f2d6" : "#155724",
                }}
              >
                <h5>✅ Certificate Verified</h5>

                <p><strong>Name:</strong> {result.data.name}</p>
                <p><strong>Event:</strong> {result.data.event}</p>
                <p><strong>Certificate ID :</strong> {result.data.certificateId}</p>
                <p><strong>Issue Date:</strong> {result.data.issueDate}</p>

               
                <a
                  href={`/certificate_down/${result.data.file}`}
                  download
                  className="btn btn-success mt-2"
                >
                  ⬇ Download Certificate
                </a>
              </div>
            ) : (
              <div
                className="p-3 rounded text-center"
                style={{
                  background: isDark ? "#3a1c1c" : "#f8d7da",
                  color: isDark ? "#ffb3b3" : "#721c24",
                }}
              >
                ❌ No certificate found
              </div>
            )}
          </div>
        )}
      </Card>
    </Container>
  );
};

export default VerifyCertificate;
