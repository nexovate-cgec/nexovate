import React, { useState } from "react";
import {
  Container,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const LoginPage = () => {

  const navigate = useNavigate();

  const { isDark } = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ADMIN_SESSION_KEY = "adminSessionActive";
  const LAST_ACTIVITY_KEY = "lastAdminActivity";

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      localStorage.getItem(ADMIN_SESSION_KEY) ===
      "true"
    ) {
      alert(
        "Admin already logged in."
      );
      return;
    }

    if (
      email === "nexovatecgec@gmail.com" &&
      password === "NexovateCgec123"
    ) {

      localStorage.setItem(
        "isAdmin",
        "true"
      );

      localStorage.setItem(
        ADMIN_SESSION_KEY,
        "true"
      );

      localStorage.setItem(
        LAST_ACTIVITY_KEY,
        Date.now().toString()
      );

      alert("Login Successful");

      navigate("/");

      window.location.reload();

    } else {

      alert("Invalid Credentials");

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
          backgroundColor: isDark
            ? "#1e1e1e"
            : "#ffffff",
          color: isDark
            ? "#ffffff"
            : "#000000",
          borderRadius: "20px",
          border: "2px solid rgb(189,159,103)",
        }}
      >

        <div className="text-center mb-4">

          <h2 className="fw-bold">
            Admin Login
          </h2>

          <p className="text-muted">
            Login to manage certificates
          </p>

        </div>

        <Form onSubmit={handleLogin}>

          <Form.Group className="mb-3">

            <Form.Label>
              Email
            </Form.Label>

            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

          </Form.Group>

          <Form.Group className="mb-4">

            <Form.Label>
              Password
            </Form.Label>

            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

          </Form.Group>

          <Button
            type="submit"
            variant="warning"
            className="w-100 fw-bold"
          >
            Login
          </Button>

        </Form>

      </Card>

    </Container>
  );
};

export default LoginPage;