import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Person, 
  Share, 
  Facebook, 
  Twitter, 
  Linkedin,
} from "react-bootstrap-icons";
import { useTheme } from "../contexts/ThemeContext"; 
import logo from "../assets/images/logo.jpeg";
import { getBlogById } from "../data/detailBlog";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme(); 
  
  const sectionBg = isDark ? "var(--dark-bg, #121212)" : "white";
  const cardBg = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
  const textColor = isDark ? "var(--light-text, #ffffff)" : "#2c3e50";
  const goldenColor = "rgb(189, 159, 103)";
  const borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
  
  const blog = getBlogById(id);

  const shareBlog = (platform) => {
    if (!blog) return;
    
    const url = window.location.href;
    const title = blog.title;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  if (!blog) {
    return (
      <Container className="my-5 py-5" style={{ backgroundColor: sectionBg, color: textColor }}>
        <div className="text-center py-5">
          <h2 className="fw-bold text-muted mb-3">Blog Not Found</h2>
          <p className="text-muted mb-4">The blog post you're looking for doesn't exist.</p>
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
            onClick={() => navigate("/")}
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
            Back to Home
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <>
      <nav 
        className="navbar border-bottom py-3"
        style={{ 
          backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : "white",
          borderColor: borderColor
        }}
      >
        <Container>
          <div className="d-flex justify-content-between w-100 align-items-center">
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <img src={logo} alt="E-Cell Logo" height="40" className="me-2" />
              <span 
                className="fw-bold" 
                style={{ color: goldenColor }}
              >
                E-Cell
              </span>
            </Link>
            
            <Link to="/#blog" className="text-decoration-none">
              <Button 
                style={{
                  backgroundColor: "transparent",
                  borderColor: goldenColor,
                  color: goldenColor,
                  borderRadius: "20px",
                  padding: "6px 16px",
                  fontWeight: "600",
                  transition: "all 0.3s ease"
                }}
                className="d-flex align-items-center gap-2"
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = goldenColor;
                  e.target.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = goldenColor;
                }}
              >
                <ArrowLeft size={18} />
                Back to Blogs
              </Button>
            </Link>
          </div>
        </Container>
      </nav>

      <Container 
        className="my-5"
        style={{ 
          backgroundColor: sectionBg,
          color: textColor,
          minHeight: "100vh"
        }}
      >
        <Row className="justify-content-center">
          <Col lg={9}>
            <nav aria-label="breadcrumb" className="mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className="text-decoration-none" style={{ color: goldenColor }}>
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/#blog" className="text-decoration-none" style={{ color: goldenColor }}>
                    Blogs
                  </Link>
                </li>
                <li 
                  className="breadcrumb-item active" 
                  style={{ color: textColor }}
                >
                  {blog.title.substring(0, 30)}...
                </li>
              </ol>
            </nav>

            <div className="text-center mb-5">
              <Badge 
                style={{
                  backgroundColor: goldenColor,
                  color: "white",
                  padding: "8px 16px",
                  fontWeight: "600",
                  fontSize: "0.9rem"
                }}
                className="mb-3"
              >
                {blog.category}
              </Badge>
              <h1 className="fw-bold display-6 mb-3" style={{ color: textColor }}>
                {blog.title}
              </h1>
              
              <div className="d-flex justify-content-center align-items-center gap-4 mb-3 flex-wrap" style={{ color: textColor, opacity: "0.8" }}>
                <div className="d-flex align-items-center gap-2">
                  <Person size={16} />
                  <span>By {blog.author}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Calendar size={16} />
                  <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Clock size={16} />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>

            <div 
              className="d-flex justify-content-between align-items-center mb-5 p-3 rounded-3"
              style={{ 
                backgroundColor: cardBg,
                border: `2px solid ${goldenColor}`,
                borderRadius: "15px"
              }}
            >
              <div className="d-flex align-items-center gap-2">
                <Share size={18} style={{ color: goldenColor }} />
                <span className="fw-semibold" style={{ color: goldenColor }}>
                  Share this article:
                </span>
              </div>
              <div className="d-flex gap-2">
                <Button 
                  style={{
                    backgroundColor: "transparent",
                    borderColor: goldenColor,
                    color: goldenColor,
                    borderRadius: "20px",
                    padding: "6px 12px",
                    fontWeight: "600",
                    transition: "all 0.3s ease"
                  }}
                  size="sm"
                  onClick={() => shareBlog('facebook')}
                  className="d-flex align-items-center gap-1"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = goldenColor;
                    e.target.style.color = "white";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = goldenColor;
                  }}
                >
                  <Facebook size={16} />
                  Facebook
                </Button>
                <Button 
                  style={{
                    backgroundColor: "transparent",
                    borderColor: goldenColor,
                    color: goldenColor,
                    borderRadius: "20px",
                    padding: "6px 12px",
                    fontWeight: "600",
                    transition: "all 0.3s ease"
                  }}
                  size="sm"
                  onClick={() => shareBlog('twitter')}
                  className="d-flex align-items-center gap-1"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = goldenColor;
                    e.target.style.color = "white";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = goldenColor;
                  }}
                >
                  <Twitter size={16} />
                  Twitter
                </Button>
                <Button 
                  style={{
                    backgroundColor: "transparent",
                    borderColor: goldenColor,
                    color: goldenColor,
                    borderRadius: "20px",
                    padding: "6px 12px",
                    fontWeight: "600",
                    transition: "all 0.3s ease"
                  }}
                  size="sm"
                  onClick={() => shareBlog('linkedin')}
                  className="d-flex align-items-center gap-1"
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = goldenColor;
                    e.target.style.color = "white";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = goldenColor;
                  }}
                >
                  <Linkedin size={16} />
                  LinkedIn
                </Button>
              </div>
            </div>

            <div 
              className="blog-content mb-5"
              dangerouslySetInnerHTML={{ __html: blog.fullContent }}
              style={{ 
                lineHeight: '1.8', 
                fontSize: '1.15rem',
                fontFamily: 'Georgia, serif',
                color: textColor
              }}
            />

            <div className="mb-5">
              <h5 className="fw-semibold mb-3" style={{ color: goldenColor }}>Tags:</h5>
              <div className="d-flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <Badge 
                    key={index} 
                    style={{
                      backgroundColor: "transparent",
                      color: goldenColor,
                      border: `1px solid ${goldenColor}`,
                      padding: "6px 12px",
                      fontWeight: "600"
                    }}
                    className="px-3 py-2"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Card 
              style={{ 
                backgroundColor: cardBg,
                border: `2px solid ${goldenColor}`,
                borderRadius: "15px"
              }}
            >
              <Card.Body className="p-4">
                <Row className="align-items-center">
                  <Col xs="auto">
                    <div 
                      className="rounded-circle d-flex align-items-center justify-content-center text-white"
                      style={{ 
                        width: '60px', 
                        height: '60px',
                        backgroundColor: goldenColor
                      }}
                    >
                      <Person size={24} />
                    </div>
                  </Col>
                  <Col>
                    <h5 className="fw-bold mb-1" style={{ color: goldenColor }}>
                      {blog.author}
                    </h5>
                    <p className="mb-0" style={{ color: textColor, opacity: "0.8" }}>
                      Startup Legal Expert at CGEC ECELL
                    </p>
                    <small style={{ color: textColor, opacity: "0.7" }}>
                      Specializing in business validation and legal foundations for startups
                    </small>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <div 
              className="d-flex justify-content-between mt-5 pt-4"
              style={{ borderTop: `1px solid ${borderColor}` }}
            >
              <Button 
                style={{
                  backgroundColor: "transparent",
                  borderColor: goldenColor,
                  color: goldenColor,
                  borderRadius: "20px",
                  padding: "8px 20px",
                  fontWeight: "600",
                  transition: "all 0.3s ease"
                }}
                onClick={() => navigate(-1)}
                className="d-flex align-items-center gap-2"
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = goldenColor;
                  e.target.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = goldenColor;
                }}
              >
                <ArrowLeft size={16} />
                Previous
              </Button>
              
              <Link to="/#blog">
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
                  Back to All Blogs
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <footer 
        className="py-4 mt-5"
        style={{ 
          backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : cardBg,
          color: textColor,
          borderTop: `2px solid ${goldenColor}`
        }}
      >
        <Container>
          <Row>
            <Col md={6}>
              <div className="d-flex align-items-center mb-3">
                <img src={logo} alt="E-Cell Logo" height="30" className="me-2" />
                <span className="fw-bold" style={{ color: goldenColor }}>CGEC ECELL</span>
              </div>
              <p className="mb-0" style={{ opacity: "0.8" }}>
                Empowering entrepreneurs and fostering innovation in the community.
              </p>
            </Col>
            <Col md={6} className="text-md-end">
              <p className="mb-0" style={{ opacity: "0.8" }}>
                &copy; 2026 CGEC E-Cell. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>

      <style>
        {`
          .blog-content h3 {
            color: ${goldenColor};
            margin-top: 2.5rem;
            margin-bottom: 1.2rem;
            border-left: 4px solid ${goldenColor};
            padding-left: 1rem;
          }
          
          .blog-content h4 {
            color: ${textColor};
            margin-top: 2rem;
            margin-bottom: 1rem;
          }
          
          .blog-content h5 {
            color: ${textColor};
            margin-top: 1.5rem;
            margin-bottom: 0.8rem;
          }
          
          .blog-content ul, .blog-content ol {
            margin-bottom: 1.5rem;
            padding-left: 2rem;
            color: ${textColor};
          }
          
          .blog-content li {
            margin-bottom: 0.5rem;
            color: ${textColor};
          }
          
          .feature-point {
            background: ${cardBg};
            padding: 1.2rem;
            border-radius: 0.5rem;
            margin: 1rem 0;
            border-left: 4px solid ${goldenColor};
            color: ${textColor};
          }
          
          .benefit-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin: 1.5rem 0;
          }
          
          .benefit-item {
            background: ${sectionBg};
            padding: 1rem;
            border-radius: 0.5rem;
            border-left: 4px solid ${goldenColor};
            color: ${textColor};
          }
          
          .tip-section {
            background: ${cardBg};
            padding: 1rem;
            border-radius: 0.5rem;
            margin: 1rem 0;
            border-left: 4px solid ${goldenColor};
            color: ${textColor};
          }
          
          .compliance-tips {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1rem;
            margin: 1.5rem 0;
          }
          
          .compliance-item {
            background: ${sectionBg};
            padding: 1rem;
            border-radius: 0.5rem;
            border-left: 4px solid ${goldenColor};
            color: ${textColor};
          }
          
          .conclusion {
            background: ${sectionBg};
            padding: 1.5rem;
            border-radius: 0.5rem;
            margin: 2rem 0;
            border: 2px solid ${goldenColor};
            color: ${textColor};
          }
          
          .key-points {
            background: ${cardBg};
            padding: 1.5rem;
            border-radius: 0.5rem;
            margin: 2rem 0;
            border-left: 4px solid ${goldenColor};
            color: ${textColor};
          }
          
          .highlight-box {
            background: ${sectionBg};
            padding: 1.5rem;
            border-radius: 0.5rem;
            border-left: 4px solid ${goldenColor};
            font-weight: 600;
            font-size: 1.1rem;
            margin: 2rem 0;
            color: ${textColor};
          }
          
          .lead {
            font-size: 1.25rem;
            font-weight: 300;
            line-height: 1.7;
            color: ${textColor};
            background: ${cardBg};
            padding: 1.5rem;
            border-radius: 0.5rem;
            border-left: 4px solid ${goldenColor};
          }
          
          .blog-content img {
            max-width: 100%;
            height: auto;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin: 1.5rem 0;
            border: 2px solid ${goldenColor};
          }
          
          .text-center.my-5 {
            background: ${cardBg};
            padding: 1.5rem;
            border-radius: 0.5rem;
            margin: 2rem 0;
            border: 2px solid ${goldenColor};
          }
          
          .blog-content strong {
            color: ${textColor};
            font-weight: 600;
          }

          .breadcrumb-item.active {
            color: ${textColor} !important;
          }
          
          .breadcrumb-item a {
            color: ${goldenColor} !important;
          }
        `}
      </style>
    </>
  );
};

export default BlogDetails;