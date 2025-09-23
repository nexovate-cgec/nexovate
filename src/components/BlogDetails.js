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
  Linkedin 
} from "react-bootstrap-icons";

// Image imports
import Blog1 from "../assets/Blogs/1blog.jpg";
import Blog2 from "../assets/Blogs/blog2.jpeg";
import logo from "../assets/images/logo.png";

const blogData = [
  {
    id: 1,
    title: "Nykaa: From a Pharmacy to a Billion-Dollar Beauty Empire",
    img: Blog1,
    desc: "In 2012, Falguni Nayar, a former investment banker in her late 40s, took a bold leap into entrepreneurship by launching Nykaa, an online beauty and wellness platform.",
    fullContent: `
      <p>In 2012, Falguni Nayar, a former investment banker in her late 40s, took a bold leap into entrepreneurship by launching Nykaa, an online beauty and wellness platform.</p>
      
      <p>At a time when e-commerce in India was still nascent and beauty products were largely sold through physical stores, Nykaa stood out by offering a wide range of genuine products with a focus on customer experience.</p>
      
      <h3>The Early Days</h3>
      <p>What started as an online marketplace soon expanded into a multi-brand retail chain, with Nykaa opening physical stores across the country. The company's omni-channel approach, combined with its private label offerings, helped it build a loyal customer base.</p>
      
      <h3>The IPO Success</h3>
      <p>In 2021, Nykaa went public with a blockbuster IPO, making Falguni Nayar one of India's richest self-made women. The company's valuation crossed $13 billion, cementing its position as a beauty and fashion powerhouse.</p>
      
      <p>Nykaa's success story demonstrates the power of identifying market gaps, building a strong brand, and adapting to changing consumer preferences.</p>
    `,
    author: "Nexovate Team",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Success Stories",
    tags: ["E-commerce", "Beauty", "Entrepreneurship"]
  },
  {
    id: 2,
    title: "Scalability vs. Sustainability: The Entrepreneur's Dilemma",
    img: Blog2,
    desc: "One of the biggest challenges every entrepreneur faces is deciding between scaling fast and building sustainably.",
    fullContent: `
      <p>One of the biggest challenges every entrepreneur faces is deciding between scaling fast and building sustainably. Scalability is about rapid expansion with minimal additional cost.</p>
      
      <h3>Understanding the Balance</h3>
      <p>While scalability focuses on growth, sustainability emphasizes long-term viability. Finding the right balance between these two is crucial for business success.</p>
      
      <h3>Key Strategies</h3>
      <p>Successful entrepreneurs often adopt a phased approach, focusing on sustainability in the early stages and scaling once a solid foundation is established.</p>
    `,
    author: "Nexovate Team",
    date: "2024-01-10",
    readTime: "4 min read",
    category: "Business Strategy",
    tags: ["Growth", "Sustainability", "Planning"]
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find(b => b.id === parseInt(id));

  const shareBlog = (platform) => {
    const url = window.location.href;
    const title = blog.title;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  if (!blog) {
    return (
      <Container className="my-5 py-5">
        <div className="text-center py-5">
          <h2 className="fw-bold text-muted mb-3">Blog Not Found</h2>
          <p className="text-muted mb-4">The blog post you're looking for doesn't exist.</p>
          <Button variant="primary" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <>
      {/* Enhanced Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3">
        <Container>
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src={logo} alt="ECELL Logo" height="40" className="me-2" />
            <span className="fw-bold text-dark">CGEC ECELL</span>
          </Link>
          
          <div className="navbar-nav ms-auto">
            <Link to="/#blog" className="nav-link">
              <Button variant="outline-primary" className="d-flex align-items-center gap-2">
                <ArrowLeft size={18} />
                Back to Blogs
              </Button>
            </Link>
          </div>
        </Container>
      </nav>

      <Container className="my-5">
        <Row className="justify-content-center">
          <Col lg={9}>
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className="text-decoration-none">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/#blog" className="text-decoration-none">Blogs</Link>
                </li>
                <li className="breadcrumb-item active">{blog.title.substring(0, 30)}...</li>
              </ol>
            </nav>

            {/* Blog Header */}
            <div className="text-center mb-5">
              <Badge bg="light" text="dark" className="mb-3 px-3 py-2">
                {blog.category}
              </Badge>
              <h1 className="fw-bold display-6 mb-3">{blog.title}</h1>
              
              <div className="d-flex justify-content-center align-items-center gap-4 text-muted mb-3 flex-wrap">
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

            {/* Featured Image */}
            <Card.Img
              variant="top"
              src={blog.img}
              alt={blog.title}
              className="rounded-4 mb-4 shadow-sm"
              style={{ 
                width: '100%', 
                height: '450px', 
                objectFit: 'cover' 
              }}
            />

            {/* Share Buttons */}
            <div className="d-flex justify-content-between align-items-center mb-5 p-3 bg-light rounded-3">
              <div className="d-flex align-items-center gap-2">
                <Share size={18} />
                <span className="fw-semibold">Share this article:</span>
              </div>
              <div className="d-flex gap-2">
                <Button 
                  variant="outline-primary" 
                  size="sm"
                  onClick={() => shareBlog('facebook')}
                  className="d-flex align-items-center gap-1"
                >
                  <Facebook size={16} />
                  Facebook
                </Button>
                <Button 
                  variant="outline-info" 
                  size="sm"
                  onClick={() => shareBlog('twitter')}
                  className="d-flex align-items-center gap-1"
                >
                  <Twitter size={16} />
                  Twitter
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="sm"
                  onClick={() => shareBlog('linkedin')}
                  className="d-flex align-items-center gap-1"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </Button>
              </div>
            </div>

            {/* Blog Content */}
            <div 
              className="blog-content mb-5"
              dangerouslySetInnerHTML={{ __html: blog.fullContent }}
              style={{ 
                lineHeight: '1.8', 
                fontSize: '1.15rem',
                fontFamily: 'Georgia, serif'
              }}
            />

            {/* Tags */}
            <div className="mb-5">
              <h5 className="fw-semibold mb-3">Tags:</h5>
              <div className="d-flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <Badge key={index} bg="outline-secondary" text="dark" className="px-3 py-2 border">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Author Info */}
            <Card className="border-0 bg-light rounded-4">
              <Card.Body className="p-4">
                <Row className="align-items-center">
                  <Col xs="auto">
                    <div 
                      className="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white"
                      style={{ width: '60px', height: '60px' }}
                    >
                      <Person size={24} />
                    </div>
                  </Col>
                  <Col>
                    <h5 className="fw-bold mb-1">{blog.author}</h5>
                    <p className="text-muted mb-0">Content Writer at CGEC ECELL</p>
                    <small className="text-muted">Sharing insights about entrepreneurship and innovation</small>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Navigation Buttons */}
            <div className="d-flex justify-content-between mt-5 pt-4 border-top">
              <Button 
                variant="outline-secondary" 
                onClick={() => navigate(-1)}
                className="d-flex align-items-center gap-2"
              >
                <ArrowLeft size={16} />
                Previous
              </Button>
              
              <Link to="/#blog">
                <Button variant="primary">
                  Back to All Blogs
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-light py-4 mt-5">
        <Container>
          <Row>
            <Col md={6}>
              <div className="d-flex align-items-center mb-3">
                <img src={logo} alt="ECELL Logo" height="30" className="me-2" />
                <span className="fw-bold">CGEC ECELL</span>
              </div>
              <p className="text-light mb-0">
                Empowering entrepreneurs and fostering innovation in the community.
              </p>
            </Col>
            <Col md={6} className="text-md-end">
              <p className="text-light mb-0">
                &copy; 2024 CGEC ECELL. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default BlogDetails;