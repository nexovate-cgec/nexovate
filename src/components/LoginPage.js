import React, { useState } from "react";
import {
  Container,
  Card,
  Form,
  Button,
  Nav,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { studentData } from "../data/studentData";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ADMIN_SESSION_KEY = "adminSessionActive";
  const LAST_ACTIVITY_KEY = "lastAdminActivity";

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "admin") {
      if (localStorage.getItem(ADMIN_SESSION_KEY) === "true") {
        alert("Admin already logged in.");
        return;
      }

      if (
        email === "nexovatecgec@gmail.com" &&
        password === "CgecEcell2026"
      ) {
        localStorage.setItem("isAdmin", "true");
        localStorage.setItem(ADMIN_SESSION_KEY, "true");
        localStorage.setItem(LAST_ACTIVITY_KEY, Date.now().toString());

        alert("Admin Login Successful");
        navigate("/");
        window.location.reload();
      } else {
        alert("Invalid Admin Credentials");
      }
    } else {
      const foundStudent = studentData.find(
        (student) =>
          student.email.toLowerCase() === email.toLowerCase().trim() &&
          student.password === password
      );

      if (foundStudent) {
        localStorage.setItem("isStudent", "true");
        localStorage.setItem("studentEmail", foundStudent.email);
        localStorage.setItem("studentData", JSON.stringify(foundStudent));

        alert(`Welcome, ${foundStudent.name}! Login Successful`);
        navigate("/student-profile");
      } else {
        alert("Invalid Student Credentials");
      }
    }
  };

  return (
    <Container
      style={{
        maxWidth: "500px",
        marginTop: "130px",
      }}
    >
      <Card
        className="shadow-lg border-0 p-4"
        style={{
          backgroundColor: isDark ? "#1e1e1e" : "#ffffff",
          color: isDark ? "#ffffff" : "#000000",
          borderRadius: "20px",
          border: "2px solid rgb(189,159,103)",
        }}
      >
        <Nav
          variant="pills"
          activeKey={role}
          onSelect={(selectedKey) => {
            setRole(selectedKey);
            setEmail("");
            setPassword("");
          }}
          className="justify-content-center mb-4"
        >
          <Nav.Item>
            <Nav.Link eventKey="admin" className="fw-bold">
              Admin Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="student" className="fw-bold">
              Student Login
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="text-center mb-4">
          <h2 className="fw-bold">
            {role === "admin" ? "Admin Login" : "Student Login"}
          </h2>
          <p className="text-muted">
            {role === "admin"
              ? "Login to manage certificates"
              : "Login to view your profile and certificates"}
          </p>
        </div>

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button
            type="submit"
            variant="warning"
            className="w-100 fw-bold"
          >
            Login as {role === "admin" ? "Admin" : "Student"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default LoginPage;