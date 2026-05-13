import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Spinner,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";
import { supabase } from "../supabase";

const VerifyCertificate = () => {
  const { isDark } = useTheme();

  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const [mode, setMode] = useState("id");

  const [isVerifying, setIsVerifying] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const [result, setResult] = useState(null);
  const [certificateFile, setCertificateFile] = useState(null);
  const [allCertificates, setAllCertificates] = useState([]);

  const [formData, setFormData] = useState({
    certificateId: "",
    name: "",
    college: "",
    issueDate: "",
    roll: "",
    department: "",
    year: "",
    event: "",
  });

  useEffect(() => {
    if (isAdmin) {
      fetchCertificates();
    }
  }, [isAdmin]);

  const fetchCertificates = async () => {
    const { data } = await supabase
      .from("certificates")
      .select("*")
      .order("id", { ascending: false });

    if (data) {
      setAllCertificates(data);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    setIsVerifying(true);
    setResult(null);

    try {
      let query = supabase.from("certificates").select("*");

      if (mode === "id") {
        query = query.eq(
          "certificateId",
          formData.certificateId
        );
      } else {
        query = query.ilike(
          "name",
          `%${formData.name}%`
        );
      }

      const { data, error } = await query.single();

      if (error || !data) {
        setResult({
          status: "invalid",
        });
      } else {
        setResult({
          status: "valid",
          data,
        });
      }
    } catch {
      setResult({
        status: "invalid",
      });
    }

    setIsVerifying(false);
  };

  const handleAddCertificate = async () => {
  if (!certificateFile) {
    alert("Upload certificate");
    return;
  }

  setIsAdding(true);

  try {
    const fileExt =
      certificateFile.name.split(".").pop();

    const fileName = `${Date.now()}-${formData.certificateId}.${fileExt}`;

    const { error: uploadError } =
      await supabase.storage
        .from("certificates")
        .upload(fileName, certificateFile);

    if (uploadError) {
      console.log(uploadError);
      alert(uploadError.message);
      setIsAdding(false);
      return;
    }

    const { data: publicData } =
      supabase.storage
        .from("certificates")
        .getPublicUrl(fileName);

    const { error } = await supabase
      .from("certificates")
      .insert([
        {
          certificateId:
            formData.certificateId,
          name: formData.name,
          college: formData.college,
          issueDate: formData.issueDate,
          roll: formData.roll,
          department: formData.department,
          year: formData.year,
          event: formData.event,
          file: publicData.publicUrl,
        },
      ]);

    if (error) {
      console.log(error);
      alert(error.message);
      setIsAdding(false);
      return;
    }

    alert("Certificate Added Successfully");

    fetchCertificates();

    setFormData({
      certificateId: "",
      name: "",
      college: "",
      issueDate: "",
      roll: "",
      department: "",
      year: "",
      event: "",
    });

    setCertificateFile(null);
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }

  setIsAdding(false);
};

  const handleDelete = async (id, fileUrl) => {
    const fileName = fileUrl.split("/").pop();

    await supabase.storage
      .from("certificates")
      .remove([fileName]);

    await supabase
      .from("certificates")
      .delete()
      .eq("id", id);

    fetchCertificates();
  };

  const handleEdit = (cert) => {
    setFormData({
      certificateId: cert.certificateId,
      name: cert.name,
      college: cert.college || "",
      issueDate: cert.issueDate,
      roll: cert.roll || "",
      department: cert.department || "",
      year: cert.year || "",
      event: cert.event,
    });
  };

  const handleUpdate = async () => {
    setIsUpdating(true);

    try {
      let publicUrl = null;

      if (certificateFile) {
        const fileExt = certificateFile.name
          .split(".")
          .pop();

        const fileName = `${formData.certificateId}.${fileExt}`;

        await supabase.storage
          .from("certificates")
          .upload(fileName, certificateFile, {
            upsert: true,
          });

        const { data } = supabase.storage
          .from("certificates")
          .getPublicUrl(fileName);

        publicUrl = data.publicUrl;
      }

      const updateData = {
        ...formData,
      };

      if (publicUrl) {
        updateData.file = publicUrl;
      }

      await supabase
        .from("certificates")
        .update(updateData)
        .eq(
          "certificateId",
          formData.certificateId
        );

      alert("Updated Successfully");

      fetchCertificates();
    } catch (error) {
      console.log(error);
      alert(error.message);
    }

    setIsUpdating(false);
  };

  return (
    <Container
      style={{
        maxWidth: "1100px",
        marginTop: "120px",
        marginBottom: "50px",
      }}
    >
      <Card
        className="p-4 shadow-lg"
        style={{
          backgroundColor: isDark
            ? "#1e1e1e"
            : "#ffffff",
          color: isDark
            ? "#ffffff"
            : "#000000",
          border:
            "2px solid rgb(189,159,103)",
          borderRadius: "15px",
        }}
      >
        <h3 className="text-center mb-4">
          🎓 Certificate Verification
        </h3>

        <div className="d-flex justify-content-center mb-4 gap-2">
          <Button
            variant={
              mode === "id"
                ? "warning"
                : "outline-warning"
            }
            onClick={() => setMode("id")}
          >
            Enter Certificate ID
          </Button>

          <Button
            variant={
              mode === "search"
                ? "warning"
                : "outline-warning"
            }
            onClick={() =>
              setMode("search")
            }
          >
            Search Your Certificate
          </Button>
        </div>

        <Form onSubmit={handleVerify}>
          {mode === "id" ? (
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  color: isDark
                    ? "#ffffff"
                    : "#000000",
                  fontWeight: "600",
                }}
              >
                Certificate ID
              </Form.Label>

              <Form.Control
                name="certificateId"
                placeholder="Enter Certificate ID"
                onChange={handleChange}
                required
                className="custom-dark-input"
              />
            </Form.Group>
          ) : (
            <Row>
              <Col
                md={6}
                className="mb-3"
              >
                <Form.Label>
                  Full Name
                </Form.Label>

                <Form.Control
                  name="name"
                  placeholder="Enter Your Name"
                  onChange={handleChange}
                  required
                  className="custom-dark-input"
                />
              </Col>
            </Row>
          )}

          <Button
            className="w-100 mt-2"
            type="submit"
            variant="warning"
            disabled={isVerifying}
          >
            {isVerifying ? (
              <>
                <Spinner
                  size="sm"
                  className="me-2"
                />
                Verifying...
              </>
            ) : (
              "Verify Certificate"
            )}
          </Button>
        </Form>

        {!isVerifying && result && (
          <div className="mt-4">
            {result.status === "valid" ? (
              <div
                className="p-4 rounded border"
                style={{
                  background: isDark
                    ? "#12372a"
                    : "#e9f7ef",
                  color: isDark
                    ? "#b6f2d6"
                    : "#155724",
                }}
              >
                <h5 className="border-bottom pb-2 mb-3">
                  ✅ Certificate Verified
                </h5>

                <Row>
                  <Col sm={6}>
                    <p>
                      <strong>Name:</strong>{" "}
                      {result.data.name}
                    </p>
                  </Col>

                  {result.data.college && (
                    <Col sm={6}>
                      <p>
                        <strong>
                          College:
                        </strong>{" "}
                        {
                          result.data
                            .college
                        }
                      </p>
                    </Col>
                  )}

                  {result.data.roll && (
                    <Col sm={6}>
                      <p>
                        <strong>
                          Roll:
                        </strong>{" "}
                        {
                          result.data
                            .roll
                        }
                      </p>
                    </Col>
                  )}

                  {result.data.department && (
                    <Col sm={6}>
                      <p>
                        <strong>
                          Department:
                        </strong>{" "}
                        {
                          result.data
                            .department
                        }
                      </p>
                    </Col>
                  )}

                  {result.data.year && (
                    <Col sm={6}>
                      <p>
                        <strong>
                          Year:
                        </strong>{" "}
                        {
                          result.data
                            .year
                        }
                      </p>
                    </Col>
                  )}

                  <Col sm={6}>
                    <p>
                      <strong>
                        Event:
                      </strong>{" "}
                      {result.data.event}
                    </p>
                  </Col>

                  <Col sm={6}>
                    <p>
                      <strong>
                        Issue Date:
                      </strong>{" "}
                      {
                        result.data
                          .issueDate
                      }
                    </p>
                  </Col>

                  <Col sm={12}>
                    <p>
                      <strong>
                        Certificate ID:
                      </strong>{" "}
                      {
                        result.data
                          .certificateId
                      }
                    </p>
                  </Col>
                </Row>

                <a
                  href={result.data.file}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-success mt-3 w-100"
                >
                  ⬇ Download Certificate
                </a>
              </div>
            ) : (
              <div className="alert alert-danger text-center">
                ❌ No certificate found.
              </div>
            )}
          </div>
        )}

        {isAdmin && (
          <div className="mt-5">
            <hr />

            <h3 className="mb-4">
              Admin Certificate Panel
            </h3>

            <Form>
              <Row>
                <Col
                  md={6}
                  className="mb-3"
                >
                  <Form.Control
                    name="certificateId"
                    placeholder="Certificate ID"
                    value={
                      formData.certificateId
                    }
                    onChange={
                      handleChange
                    }
                    className="custom-dark-input"
                  />
                </Col>

                <Col
                  md={6}
                  className="mb-3"
                >
                  <Form.Control
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={
                      handleChange
                    }
                    className="custom-dark-input"
                  />
                </Col>

                <Col
                  md={6}
                  className="mb-3"
                >
                  <Form.Control
                    name="college"
                    placeholder="College"
                    value={
                      formData.college
                    }
                    onChange={
                      handleChange
                    }
                    className="custom-dark-input"
                  />
                </Col>

                <Col
                  md={6}
                  className="mb-3"
                >
                  <Form.Control
                    name="issueDate"
                    placeholder="Issue Date"
                    value={
                      formData.issueDate
                    }
                    onChange={
                      handleChange
                    }
                    className="custom-dark-input"
                  />
                </Col>

                <Col
                  md={6}
                  className="mb-3"
                >
                  <Form.Control
                    name="roll"
                    placeholder="Roll"
                    value={formData.roll}
                    onChange={
                      handleChange
                    }
                    className="custom-dark-input"
                  />
                </Col>

                <Col
                  md={6}
                  className="mb-3"
                >
                  <Form.Control
                    name="department"
                    placeholder="Department"
                    value={
                      formData.department
                    }
                    onChange={
                      handleChange
                    }
                    className="custom-dark-input"
                  />
                </Col>

                <Col
                  md={6}
                  className="mb-3"
                >
                  <Form.Control
                    name="year"
                    placeholder="Year"
                    value={formData.year}
                    onChange={
                      handleChange
                    }
                    className="custom-dark-input"
                  />
                </Col>

                <Col
                  md={6}
                  className="mb-3"
                >
                  <Form.Control
                    name="event"
                    placeholder="Event"
                    value={formData.event}
                    onChange={
                      handleChange
                    }
                    className="custom-dark-input"
                  />
                </Col>

                <Col
                  md={12}
                  className="mb-3"
                >
                  <Form.Control
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={(e) =>
                      setCertificateFile(
                        e.target.files[0]
                      )
                    }
                    className="custom-dark-input"
                  />
                </Col>
              </Row>

              <div className="d-flex gap-3">
                <Button
                  type="button"
                  variant="success"
                  onClick={
                    handleAddCertificate
                  }
                  disabled={isAdding}
                >
                  {isAdding ? (
                    <>
                      <Spinner
                        size="sm"
                        className="me-2"
                      />
                      Adding...
                    </>
                  ) : (
                    "Add Certificate"
                  )}
                </Button>

                <Button
                  type="button"
                  variant="primary"
                  onClick={handleUpdate}
                  disabled={isUpdating}
                >
                  {isUpdating ? (
                    <>
                      <Spinner
                        size="sm"
                        className="me-2"
                      />
                      Updating...
                    </>
                  ) : (
                    "Update Certificate"
                  )}
                </Button>
              </div>
            </Form>

            <div className="mt-5 table-responsive">
              <Table
                bordered
                hover
                responsive
                style={{
                  backgroundColor: isDark
                    ? "#1a1a1a"
                    : "#ffffff",
                  color: isDark
                    ? "#ffffff"
                    : "#000000",
                }}
              >
                <thead>
                  <tr>
                    <th>
                      Certificate ID
                    </th>
                    <th>Name</th>
                    <th>Event</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {allCertificates.map(
                    (cert) => (
                      <tr key={cert.id}>
                        <td>
                          {
                            cert.certificateId
                          }
                        </td>

                        <td>
                          {cert.name}
                        </td>

                        <td>
                          {cert.event}
                        </td>

                        <td>
                          <div className="d-flex gap-2 justify-content-center">
                            <Button
                              size="sm"
                              variant="warning"
                              onClick={() =>
                                handleEdit(
                                  cert
                                )
                              }
                            >
                              Edit
                            </Button>

                            <Button
                              size="sm"
                              variant="danger"
                              onClick={() =>
                                handleDelete(
                                  cert.id,
                                  cert.file
                                )
                              }
                            >
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </Table>
            </div>
          </div>
        )}
      </Card>
    </Container>
  );
};

export default VerifyCertificate;