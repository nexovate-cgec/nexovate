

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Change this import
import logo from '../assets/images/logo.png';
// import Blog1 from "../assets/Blogs/1blog.jpg";
import Blog2 from "../assets/Blogs/blog11.jpg";
import Blog21 from "../assets/Blogs/blog21.png";
// import Blog3 from "../assets/Blogs/blog3.jpeg";
// import Blog4 from "../assets/Blogs/blog4.jpeg";

const blogData = [
  {
    id: 1,
    title: "The Rise of Solopreneurs: Building a Business of One ",
    img: Blog2,
    desc: "Entrepreneurship is no longer defined by large teams, big offices, or heavy investment. A growing wave of solopreneurs—founders who launch and run businesses entirely on their own—is reshaping the startup landscape worldwide.",
    fullContent: "Entrepreneurship is no longer defined by large teams, big offices, or heavy investment. A growing wave of solopreneurs—founders who launch and run businesses entirely on their own—is reshaping the startup landscape worldwide.",
    author: "Author Name", 
    date: "2025-09-23"
  },
  {
    id: 2,
    title: "Legal Basics for First-Time Founders: Start Your Business on Solid Ground ",
    img: Blog21,
    desc: "Many startups fail not because of weak ideas but because they overlook the legal groundwork. Whether you’re opening an online shop or launching a tech venture, these steps will help you stay compliant and protect what you build.",
    fullContent: "Many startups fail not because of weak ideas but because they overlook the legal groundwork. Whether you’re opening an online shop or launching a tech venture, these steps will help you stay compliant and protect what you build.",
    author: "Author Name", 
    date: "2025-09-23"
  },
  
];

const truncateWords = (text, wordLimit) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const BlogSection = () => {
  return (
    <section id="blog" style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
      <Container>
        <h2 className="text-center fw-bold mb-5">
          Latest <span className="text-primary">Blogs</span>
        </h2>
        <Row>
          {blogData.map((blog) => (
            <Col md={4} className="mb-4" key={blog.id}>
              <Card className="h-100 shadow-sm border-0 rounded-4 position-relative">
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    position: "absolute",
                    borderRadius: "50%",
                    top: "12px",
                    right: "12px",
                    width: "40px",
                    height: "40px",
                    objectFit: "contain",
                    opacity: 0.9,
                  }}
                />

                <Card.Img
                  variant="top"
                  src={blog.img}
                  alt={blog.title}
                  style={{
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body>
                  <Card.Title className="fw-semibold">{blog.title}</Card.Title>
                  <Card.Text>{truncateWords(blog.desc, 15)}</Card.Text>
                  
                  {/* Change Button to Link */}
                  <Link to={`/blog/${blog.id}`}>
                    <Button variant="dark" className="rounded-pill">
                      Read More
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;