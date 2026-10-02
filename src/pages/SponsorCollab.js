import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Alert, Row, Col, Table } from "react-bootstrap";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./SponsorCollab.css";

import eventQr from "../assets/Events/colab1.png";
import associateQr from "../assets/Events/colab2.png";
import supportingQr from "../assets/Events/colab3.png";
import inkindQr from "../assets/Events/colab4.png";

import illuminateLogo from "../assets/Events/illuminate_logo.png";
import ecellCgecLogo from "../assets/Events/ecell_cgec.png";
import nexovateLogo from "../assets/Events/nexovate.png";
import ecellIitbLogo from "../assets/Events/ecell_iitb.png";
import cgecLogo from "../assets/Events/cgec_logo.png";

const GOOGLE_SHEET_WEB_APP_URL = "https://script.google.com/macros/s/AKfycby427VFiwpq7jHRor1zhYfHfI3Qgm282QfZMxZUqzvr4s0GbF2NbQus_CBrDPdujobY/exec";

const qrCodes = {
  "EVENT PARTNER": eventQr,
  "ASSOCIATE PARTNER": associateQr,
  "SUPPORTING PARTNER": supportingQr,
  "IN-KIND PARTNER": inkindQr,
};

const SponsorCollab = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedTier = location.state?.tierTitle || "EVENT PARTNER";

  const [formData, setFormData] = useState({
    category: "START UP",
    name: "",
    companyName: "",
    companyWebsite: "",
    companyDescription: "",
  });

  const [screenshot, setScreenshot] = useState(null);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [message, setMessage] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  const receiptRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File size is too large! Please select an image under 2MB.");
        e.target.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result.split(",")[1];
        setScreenshot({
          base64: base64Data,
          type: file.type,
          name: file.name,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const payload = {
      sponsorshipType: selectedTier,
      ...formData,
      paymentScreenshot: screenshot,
    };

    try {
      await fetch(GOOGLE_SHEET_WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      setSubmittedData({
        ...formData,
        sponsorshipType: selectedTier,
        transactionId: "SPN-" + Date.now().toString().slice(-8),
        date: new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      });

      setMessage({
        type: "success",
        text: "Details and payment screenshot submitted successfully! Here is your acknowledgement receipt.",
      });
    } catch (error) {
      console.error(error);
      setMessage({
        type: "danger",
        text: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = async () => {
    const element = receiptRef.current;
    if (!element) return;

    setDownloading(true);

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Receipt_${submittedData?.transactionId || "Illuminate"}.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
      alert("Failed to download PDF. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <Container className="py-5 my-5 sponsor-collab-wrapper">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          {!submittedData ? (
            <Card className="p-4 shadow-lg golden-border collab-card">
              <h3 className="text-center fw-bold golden-text mb-3">
                Sponsorship Collaboration
              </h3>
              <p className="text-center subtext-styled small mb-4">
                Tier Selected: <strong className="golden-text">{selectedTier}</strong>
              </p>

              {message && <Alert variant={message.type}>{message.text}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold form-label-styled">Category *</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      label="START UP"
                      name="category"
                      value="START UP"
                      checked={formData.category === "START UP"}
                      onChange={handleChange}
                      className="radio-styled"
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="BUSINESS"
                      name="category"
                      value="BUSINESS"
                      checked={formData.category === "BUSINESS"}
                      onChange={handleChange}
                      className="radio-styled"
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold form-label-styled">Full Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="input-styled"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold form-label-styled">Company Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    required
                    className="input-styled"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold form-label-styled">Company Website Link (Optional)</Form.Label>
                  <Form.Control
                    type="url"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    placeholder="https://example.com"
                    className="input-styled"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold form-label-styled">Company Description (for Advertisement) *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="companyDescription"
                    value={formData.companyDescription}
                    onChange={handleChange}
                    placeholder="Tell us briefly about your business for promotional use..."
                    required
                    className="input-styled"
                  />
                </Form.Group>

                <div className="text-center p-3 mb-4 qr-box golden-border rounded">
                  <h6 className="fw-bold golden-text mb-2">
                    Scan QR Code for Payment
                  </h6>
                  <h6 className="text-center fw-bold mb-3 name-header-styled">
                    <u><strong>Mr. Rishav Prasad</strong></u>
                  </h6>
                  <img
                    src={qrCodes[selectedTier] || eventQr}
                    alt={`${selectedTier} QR Code`}
                    className="img-fluid rounded border mb-2"
                    style={{ maxWidth: "200px" }}
                  />
                  <p className="small subtext-styled mb-0">
                    Payment QR for: <strong>{selectedTier}</strong>
                  </p>
                </div>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold form-label-styled">Upload Payment Screenshot *</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                    className="input-styled"
                  />
                </Form.Group>

                <div className="text-center p-3 mb-4 contact-support-box rounded">
                  <h6 className="fw-bold golden-text mb-2">For Any Queries or Assistance, Contact:</h6>
                  <div className="d-flex flex-wrap justify-content-center gap-3 contact-numbers font-monospace fw-bold">
                    <span>📞 +91 98765 43210</span>
                    <span>📞 +91 91234 56789</span>
                    <span>📞 +91 90123 45678</span>
                  </div>
                </div>

                <div className="d-flex gap-2">
                  <Button
                    variant="outline-secondary"
                    className="w-50 back-btn-styled"
                    onClick={() => navigate("/")}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-50 collab-submit-btn golden-border fw-bold"
                  >
                    {loading ? "Submitting..." : "Submit Collab"}
                  </Button>
                </div>
              </Form>
            </Card>
          ) : (
            <div>
              {message && <Alert variant={message.type} className="no-print">{message.text}</Alert>}

              <Card ref={receiptRef} className="p-4 shadow-lg border-secondary receipt-card printable-receipt bg-white text-dark">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 pb-3 mb-3 border-bottom">
                  <img src={illuminateLogo} alt="Illuminate Logo" style={{ height: "45px" }} />
                  <img src={ecellCgecLogo} alt="E-Cell CGEC Logo" style={{ height: "45px" }} />
                  <img src={nexovateLogo} alt="Nexovate Logo" style={{ height: "45px" }} />
                  <img src={ecellIitbLogo} alt="E-Cell IITB Logo" style={{ height: "45px" }} />
                  <img src={cgecLogo} alt="CGEC Logo" style={{ height: "45px" }} />
                </div>

                <div className="text-center mb-4">
                  <h4 className="fw-bold text-uppercase tracking-wide mb-1 text-dark">Sponsorship Acknowledgement Receipt</h4>
                  <p className="text-muted small mb-0">Receipt Ref: {submittedData.transactionId} | Date: {submittedData.date}</p>
                </div>

                <div className="mb-4 p-3 rounded bg-light border">
                  <h6 className="fw-bold mb-3 border-bottom pb-2 text-primary">Event Information</h6>
                  <Row className="gy-2 text-dark">
                    <Col sm={4} className="fw-bold">Event:</Col>
                    <Col sm={8}>Illuminate — Entrepreneurship Workshop</Col>
                    
                    <Col sm={4} className="fw-bold">Date:</Col>
                    <Col sm={8}>7 October 2026</Col>
                    
                    <Col sm={4} className="fw-bold">Organiser:</Col>
                    <Col sm={8}>E-Cell, Cooch Behar Government Engineering College</Col>
                    
                    <Col sm={4} className="fw-bold">In Collaboration With:</Col>
                    <Col sm={8}>IIT Bombay</Col>
                    
                    <Col sm={4} className="fw-bold">Expected Participants:</Col>
                    <Col sm={8}>Approximately 70</Col>
                  </Row>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold mb-3 border-bottom pb-2 text-primary">Sponsor Details</h6>
                  <Table bordered responsive size="sm" className="text-dark">
                    <tbody>
                      <tr>
                        <td className="fw-bold bg-light text-dark" style={{ width: "35%" }}>Sponsor Name</td>
                        <td className="text-dark">{submittedData.name}</td>
                      </tr>
                      <tr>
                        <td className="fw-bold bg-light text-dark">Company Name</td>
                        <td className="text-dark">{submittedData.companyName}</td>
                      </tr>
                      <tr>
                        <td className="fw-bold bg-light text-dark">Category</td>
                        <td className="text-dark">{submittedData.category}</td>
                      </tr>
                      <tr>
                        <td className="fw-bold bg-light text-dark">Sponsorship Tier</td>
                        <td className="text-dark"><strong>{submittedData.sponsorshipType}</strong></td>
                      </tr>
                      {submittedData.companyWebsite && (
                        <tr>
                          <td className="fw-bold bg-light text-dark">Company Website</td>
                          <td className="text-dark">{submittedData.companyWebsite}</td>
                        </tr>
                      )}
                      <tr>
                        <td className="fw-bold bg-light text-dark">Company Description</td>
                        <td className="text-dark">{submittedData.companyDescription}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <div className="mt-4 pt-3 border-top d-flex justify-content-between align-items-end text-dark">
                  <div className="small text-muted">
                    <p className="mb-0">Status: <strong>Payment Pending Verification</strong></p>
                    <p className="mb-0">Thank you for supporting Illuminate!</p>
                  </div>
                  <div className="text-center">
                    <p className="small mb-0 font-monospace text-dark">Authorized Signatory</p>
                    <p className="fw-bold mb-0 text-dark">E-Cell CGEC</p>
                  </div>
                </div>
              </Card>

              <div className="d-flex gap-2 mt-4 no-print">
                <Button variant="outline-primary" className="w-50 fw-bold" onClick={handleDownloadPDF} disabled={downloading}>
                  {downloading ? "Generating PDF..." : "Download PDF Receipt"}
                </Button>
                <Button variant="secondary" className="w-50 fw-bold" onClick={() => navigate("/")}>
                  Back to Home
                </Button>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SponsorCollab;