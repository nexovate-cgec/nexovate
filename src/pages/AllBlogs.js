import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Breadcrumb, Badge } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import { useTheme } from "../contexts/ThemeContext"; 
import { getRecentBlogs, getBlogsByCategory } from "../data/blog";
import logo from '../assets/images/logo.png';

const AllBlogs = () => {
  const { isDark } = useTheme(); 
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const allBlogs = getRecentBlogs();
  const categories = ["all", ...new Set(allBlogs.map(blog => blog.category))];
  
  // Filter blogs based on selected category
  const filteredBlogs = selectedCategory === "all" 
    ? allBlogs 
    : getBlogsByCategory(selectedCategory);

  return (
    <section 
      style={{ 
        backgroundColor: isDark ? "var(--bg-color)" : "var(--section-bg)", 
        padding: "40px 0",
        color: isDark ? "white" : "var(--text-color)",
        minHeight: "100vh"
      }}
    >
      <Container>
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} style={{ color: isDark ? "white" : "inherit" }}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active style={{ color: isDark ? "white" : "inherit" }}>
            All Blogs
          </Breadcrumb.Item>
        </Breadcrumb>

        {/* Page Header */}
        <div className="text-center mb-4">
          <h1 className="fw-bold h3 mb-2" style={{ color: isDark ? "white" : "var(--text-color)" }}>
            Our <span style={{ color: "var(--primary-color)" }}>Blogs</span>
          </h1>
          <p className="mb-3" style={{ color: isDark ? "#ccc" : "var(--secondary-color)" }}>
            Discover insights, stories and updates from E-Cell
          </p>
        </div>

        {/* Category Filter */}
        <div className="text-center mb-4">
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={
                  selectedCategory === category 
                    ? "primary" 
                    : isDark ? "outline-light" : "outline-dark"
                }
                size="sm"
                className="rounded-pill text-capitalize"
                onClick={() => setSelectedCategory(category)}
                style={{ fontSize: "0.8rem" }}
              >
                {category === "all" ? "All Blogs" : category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-4">
          <p style={{ color: isDark ? "#ccc" : "var(--secondary-color)", fontSize: "0.9rem" }}>
            Showing {filteredBlogs.length} blog{filteredBlogs.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Blog Grid - 3 cards per row */}
        <Row>
          {filteredBlogs.map((blog) => (
            <Col lg={4} md={6} className="mb-4" key={blog.id}>
              <Card 
                className="h-100 shadow-sm border-0 blog-card"
                style={{ 
                  backgroundColor: isDark ? "var(--card-bg)" : "var(--card-bg)",
                  color: isDark ? "white" : "var(--text-color)",
                  transition: "all 0.3s ease",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: isDark ? "1px solid #444" : "none"
                }}
              >
                {/* Blog Image */}
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
                  {/* Category Badge */}
                  <div className="position-absolute top-0 start-0 m-2">
                    <Badge 
                      bg={"primary"} 
                      text={isDark ? "dark" : "white"}
                      style={{ fontSize: "0.7rem" }}
                    >
                      {blog.category}
                    </Badge>
                  </div>
                </div>
                
                <Card.Body className="p-3 d-flex flex-column">
                  {/* Blog Title */}
                  <Card.Title 
                    className="fw-semibold h6 mb-2" 
                    style={{ 
                      color: isDark ? "white" : "var(--text-color)",
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
                  
                  {/* Blog Description */}
                  <Card.Text 
                    style={{ 
                      color: isDark ? "#ccc" : "var(--text-color)",
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
                  
                  {/* E-Cell Logo and Name */}
                  <div className="d-flex align-items-center mb-2 pt-2" style={{ borderTop: isDark ? "1px solid #444" : "1px solid #dee2e6" }}>
                    <img
                      src={logo}
                      alt="E-Cell Logo"
                      style={{
                        width: "24px",
                        height: "24px",
                        objectFit: "contain",
                        marginRight: "8px",
                        backgroundColor: isDark ? "white" : "transparent",
                        padding: "2px",
                        borderRadius: "4px"
                      }}
                    />
                    <div>
                      <small className="fw-semibold" style={{ fontSize: "0.8rem", color: isDark ? "white" : "inherit" }}>
                        E-Cell CGEC
                      </small>
                      <br />
                      <small style={{ 
                        fontSize: "0.7rem", 
                        color: isDark ? "#999" : "var(--secondary-color)" 
                      }}>
                        {new Date(blog.date).toLocaleDateString('en-US', { 
                          day: 'numeric',
                          month: 'short', 
                          year: 'numeric'
                        })} • {blog.readTime}
                      </small>
                    </div>
                  </div>
                  
                  {/* Read More Button */}
                  <Link to={`/blog/${blog.id}`} className="mt-auto">
                    <Button 
                      variant={isDark ? "outline-light" : "outline-primary"} 
                      className="w-100 rounded-pill"
                      size="sm"
                      style={{ fontSize: "0.8rem" }}
                    >
                      Read More
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* No Blogs Message */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-5">
            <h5 style={{ color: isDark ? "#ccc" : "var(--secondary-color)" }}>
              No blogs found in this category.
            </h5>
            <Button
              variant={isDark ? "outline-light" : "primary"}
              onClick={() => setSelectedCategory("all")}
              className="mt-3 rounded-pill"
              size="sm"
            >
              Show All Blogs
            </Button>
          </div>
        )}

        {/* Footer Section */}
        <div className="text-center mt-4">
          <div className="p-4 rounded-3" style={{ 
            backgroundColor: isDark ? "var(--card-bg)" : "var(--card-bg)",
            border: isDark ? "1px solid #444" : "none"
          }}>
            <h6 className="fw-bold mb-2" style={{ color: isDark ? "white" : "inherit" }}>
              More Content Coming Soon
            </h6>
            <p className="mb-3" style={{ 
              fontSize: "0.9rem", 
              color: isDark ? "#ccc" : "var(--secondary-color)" 
            }}>
              Stay tuned for more exciting blogs from E-Cell
            </p>
            <div className="d-flex justify-content-center gap-2 flex-wrap">
              <Link to="/">
                <Button
                  variant={isDark ? "outline-light" : "outline-primary"}
                  className="rounded-pill px-3"
                  size="sm"
                >
                  ← Home
                </Button>
              </Link>
              <Button
                variant={isDark ? "outline-light" : "dark"}
                className="rounded-pill px-3"
                size="sm"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                ↑ Top
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Custom styles for hover effects */}
      <style jsx>{`
        .blog-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12) !important;
        }
        .blog-card:hover .blog-image {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
};

export default AllBlogs;