import React, { useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { Container, Card, Form, Button, Alert, Row, Col } from "react-bootstrap";
import {
  ArrowLeft,
  CheckCircleFill,
  PersonFill,
  EnvelopeFill,
  TelephoneFill,
  BookHalf,
  MortarboardFill,
  BuildingFill,
  SendFill,
  ShieldCheck,
  CreditCardFill,
  CloudUploadFill,
  Download
} from "react-bootstrap-icons";
import { jsPDF } from "jspdf";
import { useTheme } from "../contexts/ThemeContext";
import { getEventById } from "../data/events";
import qrCodeImg from "../assets/Events/image.png";

import logoEcell from "../assets/Events/illuu2.jpeg"; 
import logoNec from "../assets/Events/illuu1.png"; 

const EventApply = () => {
  const { id } = useParams();
  const location = useLocation();
  const { isDark } = useTheme();

  const event = getEventById(id);
  const selectedEventTitle = location.state?.eventTitle || event?.title || "Event Registration";

  const [formData, setFormData] = useState({
    eventName: selectedEventTitle,
    name: "",
    roll: "",
    yr: "",
    dept: "",
    contact: "",
    email: "",
    isIlluminate: "Yes",
    paymentMethod: "UPI",
    txnId: "",
    fileData: "",
    fileName: "",
    fileType: ""
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [fileNameDisplay, setFileNameDisplay] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzne2gvqEC8ebcgPFlXkiEgBouF48cBec2nQcKiRJ-riXhwHZo4OqsH2YAvcvbVWq9-yQ/exec";

  const primaryAccent = "rgb(189, 159, 103)";
  const pageBg = isDark ? "#080a0f" : "#f1f5f9";
  const cardBg = isDark ? "#111622" : "#ffffff";
  const textColor = isDark ? "#f3f4f6" : "#0f172a";
  const subTextColor = isDark ? "#94a3b8" : "#64748b";
  const inputBg = isDark ? "#182030" : "#f8fafc";
  const inputBorder = isDark ? "#283348" : "#e2e8f0";
  const iconBadgeBg = isDark ? "rgba(189, 159, 103, 0.12)" : "rgba(189, 159, 103, 0.15)";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setErrorMsg("File size exceeds 10 MB limit.");
      return;
    }

    setFileNameDisplay(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prev) => ({
        ...prev,
        fileData: reader.result,
        fileName: file.name,
        fileType: file.type
      }));
    };
    reader.readAsDataURL(file);
  };

  const generatePDFReceipt = (data) => {
    const doc = new jsPDF();
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    // Top Header Background
    doc.setFillColor(15, 23, 42); // Dark Navy Blue Background
    doc.rect(0, 0, 210, 42, "F");

    // Left Logo: E-CELL CGEC
    try {
      doc.addImage(logoEcell, "JPEG", 12, 6, 30, 30);
    } catch (err) {
      console.log("Error loading E-Cell Logo", err);
    }

    // Right Logo: NEC 2026
    try {
      doc.addImage(logoNec, "JPEG", 163, 8, 35, 26);
    } catch (err) {
      console.log("Error loading NEC Logo", err);
    }

    // Header Text (Centered)
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("REGISTRATION RECEIPT", 105, 20, { align: "center" });

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(189, 159, 103);
    doc.text("ILLUMINATE 2026", 105, 28, { align: "center" });

    // Event Info Section
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("Event Name:", 20, 54);
    doc.setFont("helvetica", "normal");
    doc.text(data.eventName || selectedEventTitle, 60, 54);

    doc.setFont("helvetica", "bold");
    doc.text("Date:", 20, 62);
    doc.setFont("helvetica", "normal");
    doc.text(currentDate, 60, 62);

    // Separator Line
    doc.setDrawColor(226, 232, 240);
    doc.line(20, 68, 190, 68);

    // Participant Details Table Header
    doc.setFillColor(241, 245, 249);
    doc.rect(20, 74, 170, 10, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text("PARTICIPANT DETAILS", 25, 81);

    // Details Rows
    const startY = 94;
    const lineSpacing = 9;

    const details = [
      { label: "Full Name:", value: data.name },
      { label: "Roll Number:", value: data.roll },
      { label: "Department:", value: data.dept },
      { label: "Academic Year:", value: data.yr },
      { label: "Email Address:", value: data.email },
      { label: "Contact Number:", value: data.contact },
      { label: "Payment Method:", value: data.paymentMethod },
      { label: "Transaction / UTR ID:", value: data.txnId || "N/A (Cash)" }
    ];

    details.forEach((item, index) => {
      const yPos = startY + index * lineSpacing;
      doc.setFont("helvetica", "bold");
      doc.setTextColor(100, 116, 139);
      doc.text(item.label, 25, yPos);

      doc.setFont("helvetica", "normal");
      doc.setTextColor(15, 23, 42);
      doc.text(String(item.value), 75, yPos);
    });

    // Outer Box Border
    doc.setDrawColor(200, 200, 200);
    doc.rect(20, 74, 170, 98);

    // Status Banner
    doc.setFillColor(240, 253, 244);
    doc.setDrawColor(34, 197, 94);
    doc.roundedRect(20, 182, 170, 14, 3, 3, "FD");

    doc.setFont("helvetica", "bold");
    doc.setTextColor(22, 101, 52);
    doc.setFontSize(10.5);
    doc.text("Status: Application Received & Pending Verification", 105, 191, { align: "center" });

    // Footer Text
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.setTextColor(148, 163, 184);
    doc.text("This is an official computer-generated receipt for event registration.", 105, 210, { align: "center" });

    doc.save(`Receipt_${data.roll || "Registration"}.pdf`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    if (formData.paymentMethod === "UPI" && (!formData.txnId || !formData.fileData)) {
      setErrorMsg("Please enter Transaction ID and upload Payment Screenshot.");
      setLoading(false);
      return;
    }

    const submittedEmails = JSON.parse(localStorage.getItem("registered_emails") || "[]");
    const submittedContacts = JSON.parse(localStorage.getItem("registered_contacts") || "[]");

    if (submittedEmails.includes(formData.email.toLowerCase().trim())) {
      setErrorMsg("This Email address has already been registered from this device.");
      setLoading(false);
      return;
    }

    if (submittedContacts.includes(formData.contact.trim())) {
      setErrorMsg("This Contact Number has already been registered from this device.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(formData)
      });

      const resData = await response.json();

      if (resData.status === "error") {
        setErrorMsg(resData.message);
      } else {
        submittedEmails.push(formData.email.toLowerCase().trim());
        submittedContacts.push(formData.contact.trim());
        localStorage.setItem("registered_emails", JSON.stringify(submittedEmails));
        localStorage.setItem("registered_contacts", JSON.stringify(submittedContacts));

        setSubmittedData({ ...formData });
        setSubmitted(true);

        setFormData({
          eventName: selectedEventTitle,
          name: "",
          roll: "",
          yr: "",
          dept: "",
          contact: "",
          email: "",
          isIlluminate: "Yes",
          paymentMethod: "UPI",
          txnId: "",
          fileData: "",
          fileName: "",
          fileType: ""
        });
        setFileNameDisplay("");
      }
    } catch (err) {
      setErrorMsg("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: pageBg, color: textColor, minHeight: "100vh", padding: "3rem 0" }}>
      <Container style={{ maxWidth: "920px" }}>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <Link
            to={id ? `/events/${id}` : "/events"}
            className="text-decoration-none d-inline-flex align-items-center fw-semibold px-3 py-2 rounded-3"
            style={{ color: textColor, backgroundColor: cardBg, border: `1px solid ${inputBorder}` }}
          >
            <ArrowLeft className="me-2" style={{ color: primaryAccent }} size={18} />
            Back to Event Details
          </Link>

          <span
            className="badge px-3 py-2 rounded-pill fw-semibold text-uppercase d-inline-flex align-items-center gap-2"
            style={{ backgroundColor: iconBadgeBg, color: primaryAccent, fontSize: "0.75rem" }}
          >
            <ShieldCheck size={15} /> Verified Registration Form
          </span>
        </div>

        <Card
          className="border-0 rounded-4 overflow-hidden"
          style={{ backgroundColor: cardBg, boxShadow: isDark ? "0 25px 50px -12px rgba(0,0,0,0.8)" : "0 20px 30px -10px rgba(0,0,0,0.05)" }}
        >
          <div style={{ height: "6px", background: `linear-gradient(90deg, ${primaryAccent}, #d4af37, #e67e22)` }} />

          <Card.Body className="p-4 p-md-5">
            <div className="mb-4 pb-3 border-bottom" style={{ borderColor: inputBorder }}>
              <h2 className="fw-bold mb-1" style={{ color: textColor }}>
                Event Application Form
              </h2>
              <p className="mb-0 fw-medium" style={{ color: primaryAccent, fontSize: "1.1rem" }}>
                {selectedEventTitle}
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-4 my-2">
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                  style={{ width: "80px", height: "80px", backgroundColor: "rgba(40, 167, 69, 0.12)", color: "#28a745" }}
                >
                  <CheckCircleFill size={48} />
                </div>
                <h3 className="fw-bold mb-2" style={{ color: textColor }}>
                  Registration Successful!
                </h3>
                <p className="mb-4 mx-auto" style={{ color: subTextColor, maxWidth: "460px" }}>
                  Thank you for submitting your details for <strong>{selectedEventTitle}</strong>. We have received your application.
                </p>

                {submittedData && (
                  <div
                    className="p-3 rounded-3 text-start mb-4 mx-auto"
                    style={{ backgroundColor: inputBg, border: `1px solid ${inputBorder}`, maxWidth: "480px", fontSize: "0.95rem" }}
                  >
                    <div className="d-flex justify-content-between py-1 border-bottom" style={{ borderColor: inputBorder }}>
                      <span className="fw-semibold" style={{ color: subTextColor }}>Name:</span>
                      <span className="fw-bold" style={{ color: textColor }}>{submittedData.name}</span>
                    </div>
                    <div className="d-flex justify-content-between py-1 border-bottom" style={{ borderColor: inputBorder }}>
                      <span className="fw-semibold" style={{ color: subTextColor }}>Roll Number:</span>
                      <span className="fw-bold" style={{ color: textColor }}>{submittedData.roll}</span>
                    </div>
                    <div className="d-flex justify-content-between py-1">
                      <span className="fw-semibold" style={{ color: subTextColor }}>Transaction / UTR ID:</span>
                      <span className="fw-bold" style={{ color: primaryAccent }}>{submittedData.txnId || "N/A (Cash)"}</span>
                    </div>
                  </div>
                )}

                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <Button
                    onClick={() => generatePDFReceipt(submittedData)}
                    className="px-4 py-2.5 fw-semibold rounded-3 border-0 d-inline-flex align-items-center gap-2"
                    style={{ backgroundColor: "#28a745", color: "#ffffff" }}
                  >
                    <Download size={18} /> Download Receipt (PDF)
                  </Button>

                  <Button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2.5 fw-semibold rounded-3 border-0"
                    style={{ backgroundColor: primaryAccent, color: "#ffffff" }}
                  >
                    Register Another Participant
                  </Button>
                </div>
              </div>
            ) : (
              <Form onSubmit={handleSubmit}>
                {errorMsg && (
                  <Alert variant="danger" className="rounded-3 mb-4 border-0 shadow-sm">
                    {errorMsg}
                  </Alert>
                )}

                <Row className="g-4">
                  <Col md={12}>
                    <Form.Group className="p-3 rounded-3" style={{ backgroundColor: inputBg, border: `1px solid ${inputBorder}` }}>
                      <Form.Label className="fw-semibold mb-2 d-block" style={{ color: textColor }}>
                        Are you registering for ILLUMINATE 2026? <span className="text-danger">*</span>
                      </Form.Label>
                      <div className="d-flex gap-4">
                        <Form.Check
                          type="radio"
                          id="illuminate-yes"
                          label="Yes"
                          name="isIlluminate"
                          value="Yes"
                          checked={formData.isIlluminate === "Yes"}
                          onChange={handleChange}
                        />
                        <Form.Check
                          type="radio"
                          id="illuminate-no"
                          label="No"
                          name="isIlluminate"
                          value="No"
                          checked={formData.isIlluminate === "No"}
                          onChange={handleChange}
                        />
                      </div>
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="fw-semibold small d-flex align-items-center gap-2" style={{ color: textColor }}>
                        <div className="p-1.5 rounded" style={{ backgroundColor: iconBadgeBg, color: primaryAccent }}>
                          <PersonFill size={15} />
                        </div>
                        Full Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        style={{ backgroundColor: inputBg, color: textColor, borderColor: inputBorder, padding: "13px 16px", borderRadius: "10px" }}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-semibold small d-flex align-items-center gap-2" style={{ color: textColor }}>
                        <div className="p-1.5 rounded" style={{ backgroundColor: iconBadgeBg, color: primaryAccent }}>
                          <EnvelopeFill size={15} />
                        </div>
                        Email Address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@gmail.com"
                        required
                        style={{ backgroundColor: inputBg, color: textColor, borderColor: inputBorder, padding: "13px 16px", borderRadius: "10px" }}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-semibold small d-flex align-items-center gap-2" style={{ color: textColor }}>
                        <div className="p-1.5 rounded" style={{ backgroundColor: iconBadgeBg, color: primaryAccent }}>
                          <TelephoneFill size={15} />
                        </div>
                        Contact Number
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="WhatsApp / Phone Number"
                        required
                        style={{ backgroundColor: inputBg, color: textColor, borderColor: inputBorder, padding: "13px 16px", borderRadius: "10px" }}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-semibold small d-flex align-items-center gap-2" style={{ color: textColor }}>
                        <div className="p-1.5 rounded" style={{ backgroundColor: iconBadgeBg, color: primaryAccent }}>
                          <BookHalf size={15} />
                        </div>
                        Roll Number
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="roll"
                        value={formData.roll}
                        onChange={handleChange}
                        placeholder="Class or University Roll"
                        required
                        style={{ backgroundColor: inputBg, color: textColor, borderColor: inputBorder, padding: "13px 16px", borderRadius: "10px" }}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-semibold small d-flex align-items-center gap-2" style={{ color: textColor }}>
                        <div className="p-1.5 rounded" style={{ backgroundColor: iconBadgeBg, color: primaryAccent }}>
                          <MortarboardFill size={15} />
                        </div>
                        Academic Year
                      </Form.Label>
                      <Form.Select
                        name="yr"
                        value={formData.yr}
                        onChange={handleChange}
                        required
                        style={{ backgroundColor: inputBg, color: textColor, borderColor: inputBorder, padding: "13px 16px", borderRadius: "10px" }}
                      >
                        <option value="">Select Year</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="fw-semibold small d-flex align-items-center gap-2" style={{ color: textColor }}>
                        <div className="p-1.5 rounded" style={{ backgroundColor: iconBadgeBg, color: primaryAccent }}>
                          <BuildingFill size={15} />
                        </div>
                        Department
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="dept"
                        value={formData.dept}
                        onChange={handleChange}
                        placeholder="e.g. CSE, ECE, ME"
                        required
                        style={{ backgroundColor: inputBg, color: textColor, borderColor: inputBorder, padding: "13px 16px", borderRadius: "10px" }}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <div className="p-4 rounded-4 mt-3" style={{ backgroundColor: inputBg, border: `1px solid ${inputBorder}` }}>
                      <h5 className="fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: textColor }}>
                        <CreditCardFill style={{ color: primaryAccent }} /> Payment :- <span className="text-danger">*</span>
                      </h5>

                      <div className="text-center p-3 rounded-3 mb-4 bg-white shadow-sm" style={{ maxWidth: "340px", margin: "0 auto" }}>
                        <div className="fw-bold text-dark mb-1 fs-5">Mr. Satyajit Roy</div>
                        <div className="p-2 border rounded-3 bg-light d-inline-block">
                          <div className="d-flex flex-column align-items-center justify-content-center p-3" style={{ border: "2px dashed #cbd5e1", borderRadius: "8px" }}>
                            <div className="p-2 border rounded-3 bg-light d-inline-block">
                              <img 
                                src={qrCodeImg} 
                                alt="Payment QR Code" 
                                style={{ width: "180px", height: "180px", objectFit: "contain" }} 
                              />
                            </div>
                            <span className="small text-muted fw-semibold">Scan QR Code</span>
                          </div>
                        </div>
                        <div className="mt-2 fw-semibold text-primary" style={{ fontSize: "0.9rem" }}>
                          UPI ID: satyajitroy19599@okicici
                        </div>
                        <div className="small text-muted mt-1">Scan to pay with any UPI app</div>
                      </div>

                      <div className="d-flex gap-4 mb-3 justify-content-center">
                        <Form.Check
                          type="radio"
                          id="pay-upi"
                          label="UPI"
                          name="paymentMethod"
                          value="UPI"
                          checked={formData.paymentMethod === "UPI"}
                          onChange={handleChange}
                          className="fw-semibold"
                        />
                        <Form.Check
                          type="radio"
                          id="pay-cash"
                          label="Cash"
                          name="paymentMethod"
                          value="Cash"
                          checked={formData.paymentMethod === "Cash"}
                          onChange={handleChange}
                          className="fw-semibold"
                        />
                      </div>

                      {formData.paymentMethod === "UPI" && (
                        <Row className="g-3 mt-2">
                          <Col md={12}>
                            <Form.Group>
                              <Form.Label className="fw-semibold small" style={{ color: textColor }}>
                                UPI Transaction ID / UTR Number :- <span className="text-danger">*</span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                name="txnId"
                                value={formData.txnId}
                                onChange={handleChange}
                                placeholder="Enter 12-digit UTR or Txn ID"
                                required={formData.paymentMethod === "UPI"}
                                style={{ backgroundColor: cardBg, color: textColor, borderColor: inputBorder, padding: "12px", borderRadius: "8px" }}
                              />
                            </Form.Group>
                          </Col>

                          <Col md={12}>
                            <Form.Group>
                              <Form.Label className="fw-semibold small" style={{ color: textColor }}>
                                Upload Payment Screenshot :- <span className="text-danger">*</span>
                              </Form.Label>
                              <div
                                className="border border-dashed p-3 rounded-3 text-center position-relative"
                                style={{ backgroundColor: cardBg, borderColor: inputBorder, cursor: "pointer" }}
                              >
                                <CloudUploadFill size={28} style={{ color: primaryAccent }} className="mb-2" />
                                <div className="small fw-semibold" style={{ color: textColor }}>
                                  {fileNameDisplay ? fileNameDisplay : "Click to upload Payment Screenshot"}
                                </div>
                                <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                                  Supported files: PDF or Image (Max 10 MB)
                                </div>
                                <Form.Control
                                  type="file"
                                  accept="image/*,application/pdf"
                                  onChange={handleFileChange}
                                  required={formData.paymentMethod === "UPI"}
                                  className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
                                  style={{ cursor: "pointer" }}
                                />
                              </div>
                            </Form.Group>
                          </Col>
                        </Row>
                      )}
                    </div>
                  </Col>
                </Row>

                <div className="mt-5">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-100 py-3 fw-bold rounded-3 border-0 d-flex align-items-center justify-content-center gap-2"
                    style={{ backgroundColor: primaryAccent, color: "#ffffff", fontSize: "1.05rem", boxShadow: "0 6px 20px rgba(189, 159, 103, 0.35)" }}
                  >
                    {loading ? "Submitting Registration & Uploading..." : <><SendFill size={16} /> Complete Registration</>}
                  </Button>
                </div>
              </Form>
            )}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default EventApply;