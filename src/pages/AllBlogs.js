import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Breadcrumb, Badge } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import { useTheme } from "../contexts/ThemeContext"; 
import { getRecentBlogs, getBlogsByCategory } from "../data/blog";
import logo from '../assets/images/logo.png';

const AllBlogs = () => {
  const { isDark } = useTheme(); 
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Dark mode colors
  const sectionBg = isDark ? "var(--dark-bg, #121212)" : "white";
  const cardBg = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
  const textColor = isDark ? "var(--light-text, #ffffff)" : "#2c3e50";
  const goldenColor = "rgb(189, 159, 103)";
  const borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
  
  const allBlogs = getRecentBlogs();
  const categories = ["all", ...new Set(allBlogs.map(blog => blog.category))];
  
  const filteredBlogs = selectedCategory === "all" 
    ? allBlogs 
    : getBlogsByCategory(selectedCategory);

  return (
    <section 
      style={{ 
        backgroundColor: sectionBg,
        padding: "40px 0",
        color: textColor,
        minHeight: "100vh"
      }}
    >
      <Container>
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item 
            linkAs={Link} 
            linkProps={{ to: "/" }} 
            style={{ color: goldenColor }}
          >
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active style={{ color: textColor }}>
            All Blogs
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="text-center mb-4">
          <h1 className="fw-bold h3 mb-2" style={{ color: goldenColor }}>
            Our <span style={{ color: textColor }}>Blogs</span>
          </h1>
          <p className="mb-3" style={{ color: textColor, opacity: "0.8" }}>
            Discover insights, stories and updates from E-Cell
          </p>
        </div>

        <div className="text-center mb-4">
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {categories.map(category => (
              <Button
                key={category}
                style={{
                  backgroundColor: selectedCategory === category ? goldenColor : "transparent",
                  borderColor: goldenColor,
                  color: selectedCategory === category ? "white" : goldenColor,
                  borderRadius: "20px",
                  padding: "6px 16px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  fontSize: "0.8rem"
                }}
                size="sm"
                className="rounded-pill text-capitalize"
                onClick={() => setSelectedCategory(category)}
                onMouseOver={(e) => {
                  if (selectedCategory !== category) {
                    e.target.style.backgroundColor = goldenColor;
                    e.target.style.color = "white";
                  }
                }}
                onMouseOut={(e) => {
                  if (selectedCategory !== category) {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = goldenColor;
                  }
                }}
              >
                {category === "all" ? "All Blogs" : category}
              </Button>
            ))}
          </div>
        </div>

        <div className="text-center mb-4">
          <p style={{ color: textColor, opacity: "0.8", fontSize: "0.9rem" }}>
            Showing {filteredBlogs.length} blog{filteredBlogs.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
          </p>
        </div>

        <Row>
          {filteredBlogs.map((blog) => (
            <Col lg={4} md={6} className="mb-4" key={blog.id}>
              <Card 
                className="h-100 shadow-sm border-0 blog-card"
                style={{ 
                  backgroundColor: cardBg,
                  color: textColor,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  borderRadius: "12px",
                  overflow: "hidden",
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
                      height: "180px",
                      objectFit: "cover",
                      transition: "transform 0.3s ease"
                    }}
                    className="blog-image"
                  />
                  <div className="position-absolute top-0 start-0 m-2">
                    <Badge 
                      style={{ 
                        backgroundColor: goldenColor,
                        color: "white",
                        fontSize: "0.7rem",
                        fontWeight: "600"
                      }}
                    >
                      {blog.category}
                    </Badge>
                  </div>
                </div>
                
                <Card.Body className="p-3 d-flex flex-column">
                  <Card.Title 
                    className="fw-semibold h6 mb-2" 
                    style={{ 
                      color: textColor,
                      lineHeight: "1.4",
                      minHeight: "42px",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}
                  >
                    {blog.title}
                  </Card.Title>
                  
                  <Card.Text 
                    style={{ 
                      color: textColor,
                      opacity: "0.9",
                      lineHeight: "1.5",
                      fontSize: "0.85rem",
                      flexGrow: 1,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}
                  >
                    {blog.desc}
                  </Card.Text>
                  
                  <div className="d-flex align-items-center mb-2 pt-2" style={{ 
                    borderTop: `1px solid ${borderColor}` 
                  }}>
                    <img
                      src={logo}
                      alt="E-Cell Logo"
                      style={{
                        width: "24px",
                        height: "24px",
                        objectFit: "contain",
                        marginRight: "8px",
                        backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : "white",
                        padding: "2px",
                        borderRadius: "4px",
                        border: `1px solid ${goldenColor}`
                      }}
                    />
                    <div>
                      <small className="fw-semibold" style={{ 
                        fontSize: "0.8rem", 
                        color: textColor 
                      }}>
                        E-Cell CGEC
                      </small>
                      <br />
                      <small style={{ 
                        fontSize: "0.7rem", 
                        color: textColor,
                        opacity: "0.7"
                      }}>
                        {new Date(blog.date).toLocaleDateString('en-US', { 
                          day: 'numeric',
                          month: 'short', 
                          year: 'numeric'
                        })} • {blog.readTime}
                      </small>
                    </div>
                  </div>
                  
                  <Link to={`/blog/${blog.id}`} className="mt-auto">
                    <Button 
                      style={{
                        backgroundColor: goldenColor,
                        borderColor: goldenColor,
                        color: "white",
                        borderRadius: "20px",
                        padding: "6px 16px",
                        fontWeight: "600",
                        transition: "all 0.3s ease",
                        fontSize: "0.8rem",
                        width: "100%"
                      }}
                      size="sm"
                      className="rounded-pill"
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

        {filteredBlogs.length === 0 && (
          <div className="text-center py-5">
            <h5 style={{ color: textColor, opacity: "0.8" }}>
              No blogs found in this category.
            </h5>
            <Button
              style={{
                backgroundColor: goldenColor,
                borderColor: goldenColor,
                color: "white",
                borderRadius: "20px",
                padding: "8px 20px",
                fontWeight: "600",
                transition: "all 0.3s ease"
              }}
              onClick={() => setSelectedCategory("all")}
              className="mt-3 rounded-pill"
              size="sm"
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
              Show All Blogs
            </Button>
          </div>
        )}

        <div className="text-center mt-4">
          <div className="p-4 rounded-3" style={{ 
            backgroundColor: cardBg,
            border: `2px solid ${goldenColor}`,
            borderRadius: "15px"
          }}>
            <h6 className="fw-bold mb-2" style={{ color: textColor }}>
              More Content Coming Soon
            </h6>
            <p className="mb-3" style={{ 
              fontSize: "0.9rem", 
              color: textColor,
              opacity: "0.8"
            }}>
              Stay tuned for more exciting blogs from E-Cell
            </p>
            <div className="d-flex justify-content-center gap-2 flex-wrap">
              <Link to="/">
                <Button
                  style={{
                    backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : "white",
                    borderColor: goldenColor,
                    color: goldenColor,
                    borderRadius: "20px",
                    padding: "6px 16px",
                    fontWeight: "600",
                    transition: "all 0.3s ease"
                  }}
                  className="rounded-pill px-3"
                  size="sm"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = goldenColor;
                    e.target.style.color = "white";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
                    e.target.style.color = goldenColor;
                  }}
                >
                  ← Home
                </Button>
              </Link>
              <Button
                style={{
                  backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : "white",
                  borderColor: goldenColor,
                  color: goldenColor,
                  borderRadius: "20px",
                  padding: "6px 16px",
                  fontWeight: "600",
                  transition: "all 0.3s ease"
                }}
                className="rounded-pill px-3"
                size="sm"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = goldenColor;
                  e.target.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
                  e.target.style.color = goldenColor;
                }}
              >
                ↑ Top
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AllBlogs;