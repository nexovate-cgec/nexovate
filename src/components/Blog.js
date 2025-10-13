import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import { useTheme } from "../contexts/ThemeContext"; 
import logo from '../assets/images/logo.png';
import { getRecentBlogs } from "../data/blog";

const truncateWords = (text, wordLimit) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const BlogSection = () => {
  const { isDark } = useTheme(); 
  const recentBlogs = getRecentBlogs(3);
  const allBlogs = getRecentBlogs();

  return (
    <section 
      id="blog" 
      style={{ 
        backgroundColor: "var(--section-bg)", 
        padding: "60px 0",
        color: "var(--text-color)"
      }}
    >
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ color: "var(--text-color)" }}>
            Latest <span style={{ color: "var(--primary-color)" }}>Blogs</span>
          </h2>
          <p className="lead mb-4" style={{ color: "var(--secondary-color)" }}>
            Discover our most recent articles and insights
          </p>
          
          <Link to="/blogs" className="text-decoration-none">
            <Button
              variant={isDark ? "outline-light" : "outline-primary"}
              size="sm"
              className="rounded-pill px-4"
            >
              View All Blogs ({allBlogs.length})
            </Button>
          </Link>
        </div>
        
        <Row>
          {recentBlogs.map((blog) => (
            <Col lg={4} md={6} className="mb-4" key={blog.id}>
              <Card 
                className="h-100 shadow-sm border-0"
                style={{ 
                  backgroundColor: "var(--card-bg)",
                  color: "var(--text-color)",
                  transition: "transform 0.2s ease-in-out",
                  borderRadius: "12px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div className="position-relative">
                  <Card.Img
                    variant="top"
                    src={blog.img}
                    alt={blog.title}
                    style={{
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
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
                      backgroundColor: "white",
                      padding: "4px",
                    }}
                  />
                </div>
                
                <Card.Body className="p-4 d-flex flex-column">
                  <div className="mb-2">
                    <small className="text-muted">{blog.date} • {blog.readTime}</small>
                  </div>
                  
                  <Card.Title 
                    className="fw-semibold h5" 
                    style={{ color: "var(--text-color)" }}
                  >
                    {blog.title}
                  </Card.Title>
                  
                  <div className="mb-2">
                    <span className="badge bg-primary">{blog.category}</span>
                  </div>
                  
                  <Card.Text 
                    style={{ color: "var(--text-color)" }}
                    className="flex-grow-1"
                  >
                    {truncateWords(blog.desc, 20)}
                  </Card.Text>
                  
                  <Link to={`/blog/${blog.id}`}>
                    <Button 
                      variant={isDark ? "outline-light" : "primary"} 
                      className="rounded-pill px-4"
                    >
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