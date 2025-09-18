import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import logo from '../assets/images/logo.png';
import Blog1 from "../assets/Blogs/1blog.jpg";

const blogData = [
  {
    id: 1,
    title: "E-Cell Alums in Forbes 30 under 30",
    img: Blog1,
    desc: "Two alumni featured in Forbes 30 under 30 list.",
    link: "https://www.linkedin.com/posts/nexovate-cgec_nykaa-from-a-pharmacy-to-a-billion-dollar-activity-7368829355424239617-NRKj?utm_source=share&utm_medium=member_android&rcm=ACoAAFyQZzEBENoE50hDfGiNDhRm_WitodC4Xeg"
  }, 
];

const BlogSection = () => {
  return (
    <section id="blog" style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
      <Container>
        <h2 className="text-center mb-5 fw-bold">Latest Blogs</h2>
        <Row>
          {blogData.map((blog) => (
            <Col md={4} className="mb-4" key={blog.id}>
              <Card className="h-100 shadow-sm border-0 rounded-4 position-relative">
                
               
                <img 
                  src={logo} 
                  alt="Logo" 
                  style={{
                    position: "absolute",
                    borderRadius:"50%",
                    top: "12px",
                    right: "12px",
                    width: "40px",
                    height: "40px",
                    objectFit: "contain",
                    opacity: 0.9
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
                    objectFit: "cover"
                  }}
                />
                <Card.Body>
                  <Card.Title className="fw-semibold">{blog.title}</Card.Title>
                  <Card.Text>{blog.desc}</Card.Text>
                  <Button
                    variant="dark"
                    className="rounded-pill"
                    target="_blank"
                    href={blog.link}
                  >
                    Read More
                  </Button>
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
