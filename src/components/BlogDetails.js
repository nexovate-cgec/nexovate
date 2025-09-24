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

// Image imports
import logo from "../assets/images/logo.png";
import RemoteWork1 from "../assets/Blogs/blog11.png";
import RemoteWork2 from "../assets/Blogs/blog12.png";
import RemoteWork3 from "../assets/Blogs/blog13.png";

const blogData = [
  {
    id: 1,
    title: "The Future of Remote Work: Redefining How We Live and Work",
    img: RemoteWork1,
    desc: "The workplace is no longer tied to cubicles, long commutes, or fixed hours. Remote work has shifted from being a temporary solution to a long-term, mainstream way of working.",
    fullContent: `
      <p class="lead">The workplace is no longer tied to cubicles, long commutes, or fixed hours. Remote work has shifted from being a temporary solution during the pandemic to a long-term, mainstream way of working. Around the world, companies and individuals are embracing flexibility, productivity, and balance in new ways.</p>

      <div class="text-center my-5">
        <img src="${RemoteWork1}" alt="Remote work lifestyle" class="img-fluid rounded shadow" style="max-height: 400px; width: auto; max-width: 100%;" />
        <p class="text-muted mt-2"><small>The new era of remote work - working from anywhere</small></p>
      </div>

      <h3>🌍 Why Remote Work is Here to Stay</h3>
      <p>Three major forces are cementing this trend:</p>
      
      <div class="feature-point">
        <h5>💻 Technology Upgrades</h5>
        <p>Video conferencing, project management apps, and cloud collaboration tools make working from anywhere seamless. Platforms like Zoom, Slack, and Asana have become essential workplace infrastructure.</p>
      </div>

      <div class="text-center my-5">
        <img src="${RemoteWork2}" alt="Remote work technology" class="img-fluid rounded shadow" style="max-height: 350px; width: auto; max-width: 100%;" />
        <p class="text-muted mt-2"><small>Essential tools for remote collaboration</small></p>
      </div>

      <div class="feature-point">
        <h5>🌐 Global Talent Pool</h5>
        <p>Companies are tapping into diverse, international talent without relocation costs. This allows businesses to hire the best people regardless of geographical boundaries.</p>
      </div>

      <div class="feature-point">
        <h5>🏠 Work-Life Priorities</h5>
        <p>Employees value time, mental health, and flexibility more than traditional office perks. The modern workforce prioritizes autonomy and work-life integration.</p>
      </div>

      <div class="text-center my-5">
        <img src="${RemoteWork3}" alt="Work-life balance" class="img-fluid rounded shadow" style="max-height: 350px; width: auto; max-width: 100%;" />
        <p class="text-muted mt-2"><small>Achieving perfect work-life integration</small></p>
      </div>

      <h3>✅ Advantages of Remote Work</h3>
      <p>This model offers clear benefits to both companies and workers:</p>
      
      <div class="benefit-grid">
        <div class="benefit-item">
          <h5>Flexibility</h5>
          <p>Choose when and where to work, aligning professional and personal life. No more rigid 9-to-5 schedules.</p>
        </div>
        <div class="benefit-item">
          <h5>Cost Savings</h5>
          <p>Lower expenses on commuting, office rent, and relocation. Employees save money while companies reduce overhead.</p>
        </div>
        <div class="benefit-item">
          <h5>Increased Productivity</h5>
          <p>Many professionals report higher focus when given autonomy. Fewer office distractions lead to better output.</p>
        </div>
      </div>

      <h3>⚠️ Challenges to Address</h3>
      <p>Remote work isn't perfect—there are pitfalls to watch for:</p>
      
      <div class="challenge-item">
        <h5>Isolation</h5>
        <p>Limited social interaction can affect mental health. Virtual water cooler chats and regular team building are essential.</p>
      </div>

      <div class="challenge-item">
        <h5>Blurred Boundaries</h5>
        <p>Work hours often spill into personal time. Setting clear start and end times helps maintain balance.</p>
      </div>

      <div class="challenge-item">
        <h5>Team Cohesion</h5>
        <p>Building culture and collaboration virtually requires extra effort. Regular video calls and virtual events foster connection.</p>
      </div>

      <h3>💡 Tips for Thriving Remotely</h3>
      
      <div class="tip-section">
        <h5>1. Set Clear Boundaries</h5>
        <p>Define your workspace and working hours. Create physical and mental separation between work and personal life.</p>
      </div>

      <div class="tip-section">
        <h5>2. Leverage Digital Tools</h5>
        <p>Use platforms for time tracking, communication, and collaboration. Tools like Trello, Notion, and Google Workspace streamline workflows.</p>
      </div>

      <div class="tip-section">
        <h5>3. Prioritize Communication</h5>
        <p>Regular check-ins help maintain connection and clarity. Over-communicate rather than under-communicate in virtual settings.</p>
      </div>

      <div class="tip-section">
        <h5>4. Invest in Ergonomics</h5>
        <p>A good chair, desk, and internet setup enhance productivity. Don't underestimate the importance of a comfortable workspace.</p>
      </div>

      <h3>🚀 Real-World Inspiration</h3>
      <p>From startups hiring across continents to freelancers building global client bases, remote work is empowering millions. Entire companies now operate without physical offices, proving that productivity isn't tied to location.</p>

      <div class="success-story">
        <h5>Case Study: GitLab</h5>
        <p>GitLab, with over 1,300 employees across 65+ countries, has been fully remote since its inception. Their success demonstrates that distributed teams can outperform traditional office-based organizations.</p>
      </div>

      <div class="conclusion">
        <h4>🎯 Bottom Line</h4>
        <p><strong>Remote work is not just a temporary trend—it's the blueprint for the modern workplace.</strong> For many, the future of work is already here, and it's happening at home, in cafés, and across borders.</p>
        <p>The companies that embrace this shift will attract top talent, reduce costs, and build more resilient organizations. The future of work is flexible, distributed, and human-centric.</p>
      </div>
    `,
    author: "Future of Work Team",
    date: "2025-09-24",
    readTime: "8 min read",
    category: "Future of Work",
    tags: ["Remote Work", "Future", "Productivity", "Flexibility", "Digital Nomad"],
    additionalImages: [RemoteWork1, RemoteWork2, RemoteWork3]
  }
];

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find(b => b.id === parseInt(id));

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
      {/* Fixed Navbar */}
      <nav className="navbar navbar-light bg-white border-bottom py-3">
        <Container>
          <div className="d-flex justify-content-between w-100 align-items-center">
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <img src={logo} alt="NEXOVATE Logo" height="40" className="me-2" />
              <span className="fw-bold text-dark">NEXOVATE</span>
            </Link>
            
            <Link to="/#blog" className="text-decoration-none">
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
            {/* Fixed Breadcrumb */}
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

            {/* Featured Image - Fixed with proper styling */}
            <div className="text-center mb-5">
              <img
                src={blog.img}
                alt={blog.title}
                className="rounded-4 shadow-sm img-fluid"
                style={{ 
                  maxHeight: '500px',
                  width: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>

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

            {/* Blog Content Section */}
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
                <img src={logo} alt="NEXOVATE Logo" height="30" className="me-2" />
                <span className="fw-bold">NEXOVATE - CGEC ECELL</span>
              </div>
              <p className="text-light mb-0">
                Empowering entrepreneurs and fostering innovation in the community.
              </p>
            </Col>
            <Col md={6} className="text-md-end">
              <p className="text-light mb-0">
                &copy; 2024 NEXOVATE. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Custom CSS for blog content */}
      <style>
        {`
          .blog-content h3 {
            color: #2c3e50;
            margin-top: 2.5rem;
            margin-bottom: 1.2rem;
            border-left: 4px solid #007bff;
            padding-left: 1rem;
          }
          
          .blog-content h4 {
            color: #34495e;
            margin-top: 2rem;
            margin-bottom: 1rem;
          }
          
          .blog-content h5 {
            color: #2c3e50;
            margin-top: 1.5rem;
            margin-bottom: 0.8rem;
          }
          
          .blog-content ul, .blog-content ol {
            margin-bottom: 1.5rem;
            padding-left: 2rem;
          }
          
          .blog-content li {
            margin-bottom: 0.5rem;
          }
          
          .feature-point {
            background: #e8f4fd;
            padding: 1.2rem;
            border-radius: 0.5rem;
            margin: 1rem 0;
            border-left: 4px solid #17a2b8;
          }
          
          .benefit-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin: 1.5rem 0;
          }
          
          .benefit-item {
            background: #f0f8f0;
            padding: 1rem;
            border-radius: 0.5rem;
            border-left: 4px solid #28a745;
          }
          
          .challenge-item {
            background: #fff3cd;
            padding: 1rem;
            border-radius: 0.5rem;
            margin: 1rem 0;
            border-left: 4px solid #ffc107;
          }
          
          .tip-section {
            background: #f0f0f0;
            padding: 1rem;
            border-radius: 0.5rem;
            margin: 1rem 0;
            border-left: 4px solid #6c757d;
          }
          
          .success-story {
            background: #e8f5e8;
            padding: 1.5rem;
            border-radius: 0.5rem;
            margin: 2rem 0;
            border: 1px solid #28a745;
          }
          
          .conclusion {
            background: #fff3cd;
            padding: 1.5rem;
            border-radius: 0.5rem;
            margin: 2rem 0;
            border-left: 4px solid #ffc107;
          }
          
          .lead {
            font-size: 1.25rem;
            font-weight: 300;
            line-height: 1.7;
            color: #495057;
            background: #f8f9fa;
            padding: 1.5rem;
            border-radius: 0.5rem;
            border-left: 4px solid #007bff;
          }
          
          .blog-content img {
            max-width: 100%;
            height: auto;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin: 1.5rem 0;
          }
          
          .text-center.my-5 {
            background: #f8f9fa;
            padding: 1.5rem;
            border-radius: 0.5rem;
            margin: 2rem 0;
          }
        `}
      </style>
    </>
  );
};

export default BlogDetails;