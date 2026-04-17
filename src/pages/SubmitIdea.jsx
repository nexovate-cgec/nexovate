import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const SubmitIdea = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Idea submitted successfully");
    setForm({ title: "", description: "", name: "", email: "" });
  };

  return (
    <Container style={{ maxWidth: "700px", marginTop: "120px" }}>
      <Card className="p-4 shadow">
        <h3 className="text-center mb-3">💡 Submit Your Startup Idea</h3>

        <Form onSubmit={handleSubmit}>
          <Form.Control
            className="mb-3"
            name="title"
            placeholder="Idea Title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <Form.Control
            as="textarea"
            rows={4}
            className="mb-3"
            name="description"
            placeholder="Describe your idea in detail"
            value={form.description}
            onChange={handleChange}
            required
          />

          <Form.Control
            className="mb-3"
            name="name"
            placeholder="Your Name (optional)"
            value={form.name}
            onChange={handleChange}
          />

          <Form.Control
            className="mb-3"
            name="email"
            type="email"
            placeholder="Email (optional)"
            value={form.email}
            onChange={handleChange}
          />

          <Button type="submit" className="w-100">
            Submit Idea
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default SubmitIdea;
