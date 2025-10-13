import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import { useTheme } from "../contexts/ThemeContext"; 
import logo from '../assets/images/logo.png';
import { blogData } from "../data/blog";

const truncateWords = (text, wordLimit) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const BlogSection = () => {
  const { isDark } = useTheme(); 
  
  const sectionBg = isDark ? "var(--dark-bg, #121212)" : "white";
  const cardBg = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
  const textColor = isDark ? "var(--light-text, #ffffff)" : "#2c3e50";
  const goldenColor = "rgb(189, 159, 103)";
  const logoBg = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";

  const displayedBlogs = blogData.slice(0, 3);
  const totalBlogs = blogData.length;

  return (
    <section 
      id="blog" 
      style={{ 
        backgroundColor: sectionBg, 
        padding: "60px 0",
        color: textColor
      }}
    >
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ color: goldenColor }}>
            Latest <span style={{ color: textColor }}>Blogs</span>
          </h2>
          <p className="lead mb-4" style={{ color: textColor, opacity: "0.8" }}>
            Discover our most recent articles and insights
          </p>
          
          <Link to="/blogs" className="text-decoration-none">
            <Button
              style={{
                backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : "white",
                borderColor: goldenColor,
                color: goldenColor,
                borderRadius: "25px",
                padding: "8px 20px",
                fontWeight: "600",
                transition: "all 0.3s ease"
              }}
              size="sm"
              className="rounded-pill px-4"
              onMouseOver={(e) => {
                e.target.style.backgroundColor = goldenColor;
                e.target.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
                e.target.style.color = goldenColor;
              }}
            >
              View All Blogs ({totalBlogs})
            </Button>
          </Link>
        </div>
        
        {displayedBlogs.length === 0 ? (
          <div className="text-center py-5">
            <h5 style={{ color: textColor, opacity: "0.7" }}>
              No blogs available at the moment. Check back soon!
            </h5>
          </div>
        ) : (
          <Row>
            {displayedBlogs.map((blog) => (
              <Col lg={4} md={6} className="mb-4" key={blog.id}>
                <Card 
                  className="h-100 shadow-sm border-0"
                  style={{ 
                    backgroundColor: cardBg,
                    color: textColor,
                    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
                    borderRadius: "12px",
                    border: `2px solid ${goldenColor}`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = isDark 
                      ? "0 10px 25px rgba(0, 0, 0, 0.4)" 
                      : "0 10px 25px rgba(189, 159, 103, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <div className="position-relative">
                    <Card.Img
                      variant="top"
                      src={blog.img}
                      alt={blog.title}
                      style={{
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
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
                        backgroundColor: logoBg,
                        padding: "4px",
                        border: `2px solid ${goldenColor}`
                      }}
                    />
                  </div>
                  
                  <Card.Body className="p-4 d-flex flex-column">
                    <div className="mb-2">
                      <small style={{ 
                        color: textColor, 
                        opacity: "0.7",
                        fontSize: "0.85rem"
                      }}>
                        {blog.date} • {blog.readTime}
                      </small>
                    </div>
                    
                    <Card.Title 
                      className="fw-semibold h5" 
                      style={{ color: textColor }}
                    >
                      {blog.title}
                    </Card.Title>
                    
                    <div className="mb-2">
                      <span 
                        className="badge px-3 py-2 bg-primary"
                        style={{ 
                          
                          color: "white",
                          fontSize: "0.8rem",
                          fontWeight: "600",
                          borderRadius: "15px"
                        }}
                      >
                        {blog.category}
                      </span>
                    </div>
                    
                    <Card.Text 
                      style={{ color: textColor, opacity: "0.9" }}
                      className="flex-grow-1"
                    >
                      {truncateWords(blog.desc, 20)}
                    </Card.Text>
                    
                    <Link to={`/blog/${blog.id}`}>
                      <Button 
                        style={{
                          backgroundColor: goldenColor,
                          borderColor: goldenColor,
                          color: "white",
                          borderRadius: "25px",
                          padding: "10px 25px",
                          fontWeight: "600",
                          transition: "all 0.3s ease"
                        }}
                        className="rounded-pill px-4"
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
                          e.target.style.color = goldenColor;
                          e.target.style.borderColor = goldenColor;
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = goldenColor;
                          e.target.style.color = "white";
                          e.target.style.borderColor = goldenColor;
                        }}
                      >
                        Read More
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default BlogSection;