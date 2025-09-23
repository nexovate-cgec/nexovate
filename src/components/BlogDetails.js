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
import logo from "../assets/images/logo.png";
import Blog11 from "../assets/Blogs/blog11.jpg";
import Blog12 from "../assets/Blogs/blog12.jpg";
import Blog13 from "../assets/Blogs/blog13.jpg";
import Blog21 from "../assets/Blogs/blog21.png";

const blogData = [
  {
    id: 1,
    title: "The Rise of Solopreneurs: Building a Business of One",
    img: Blog11,
    desc: "Entrepreneurship is no longer defined by large teams, big offices, or heavy investment. A growing wave of solopreneurs is reshaping the startup landscape worldwide.",
    fullContent: `
      <p>Entrepreneurship is no longer defined by large teams, big offices, or heavy investment. A growing wave of solopreneurs—founders who launch and run businesses entirely on their own—is reshaping the startup landscape worldwide.</p>
      
      <h3>Why Solopreneurship is Booming</h3>
      <p>Three forces are driving this shift:</p>
      <ul>
        <li><strong>Digital tools:</strong> Affordable, user-friendly platforms for payments, marketing, and customer support mean you don't need a full staff to look professional.</li>
        <li><strong>Remote work culture:</strong> Clients and collaborators are comfortable working virtually, lowering the barrier for solo operators.</li>
        <li><strong>Lifestyle flexibility:</strong> Many professionals crave autonomy over schedules, projects, and income rather than traditional corporate hierarchies.</li>
      </ul>
      
      <h3>Advantages of Going Solo</h3>
      <p>Operating alone offers unique benefits:</p>
      <ul>
        <li><strong>Speed and agility:</strong> Decisions are quick because you are the decision-maker.</li>
        <li><strong>Low overhead:</strong> With no payroll or office lease, expenses stay lean.</li>
        <li><strong>Creative freedom:</strong> You can pivot your product or service without internal negotiations.</li>
      </ul>
      
      <h3>Key Challenges</h3>
      <p>Of course, being a one-person startup is not effortless. Solopreneurs juggle marketing, finances, customer service, and strategy themselves. Burnout and isolation can creep in if boundaries aren't set. Building a network of mentors, freelancers, or peer communities helps maintain balance.</p>
      
      <h3>Tips for Aspiring Solopreneurs</h3>
      <ol>
        <li><strong>Validate your idea:</strong> Run small tests—landing pages, pre-orders, or pilot projects—to confirm real demand.</li>
        <li><strong>Automate and outsource:</strong> Use tools for accounting, scheduling, and email marketing; delegate specialized tasks to freelancers.</li>
        <li><strong>Protect your business:</strong> Choose the right legal structure (sole proprietorship, LLP, or private limited), register trademarks, and keep contracts in writing.</li>
        <li><strong>Invest in yourself:</strong> Continuous learning—new skills, emerging tech, market trends—keeps you competitive.</li>
      </ol>
      
      <h3>Real-World Inspiration</h3>
      <p>From independent app developers to single-founder consultancies and boutique e-commerce brands, solopreneurs are proving that one person with the right systems can compete with traditional startups. Many intentionally stay small, enjoying high profit margins and personal freedom over rapid scaling.</p>
      
      <p><strong>Bottom line:</strong> The one-person startup isn't just a stopgap before hiring—it's a legitimate, sustainable business model. With digital infrastructure and global markets at your fingertips, building a business of one may be the most entrepreneurial move of all.</p>
    `,
    author: "Nexovate Team",
    date: "2025-09-23",
    readTime: "6 min read",
    category: "Entrepreneurship",
    tags: ["Solopreneurs", "Startup", "Digital Business", "Remote Work"],
    additionalImages: [Blog12, Blog13]
  },
  {
    id: 2,
    title: "Legal Basics for First-Time Founders: Start Your Business on Solid Ground",
    img: Blog21,
    desc: "Many startups fail not because of weak ideas but because they overlook the legal groundwork. Learn the essential legal steps every first-time founder must take to protect your business.",
    fullContent: `
      <p class="lead">Many startups fail not because of weak ideas but because they overlook the legal groundwork. Whether you're opening an online shop or launching a tech venture, these steps will help you stay compliant and protect what you build.</p>

      <h3>1. Choose the Right Business Structure</h3>
      <p>Your legal identity determines taxes, liability, and funding options. This is one of the most critical decisions you'll make as a founder.</p>
      
      <div class="legal-points">
        <h5>✓ Sole Proprietorship</h5>
        <p><strong>Best for:</strong> Solo entrepreneurs testing ideas with minimal risk<br>
        <strong>Pros:</strong> Easiest to start, minimal paperwork<br>
        <strong>Cons:</strong> Your personal assets are exposed to business debts</p>
      </div>

      <div class="legal-points">
        <h5>✓ Partnership/LLP</h5>
        <p><strong>Best for:</strong> Businesses with multiple founders<br>
        <strong>Pros:</strong> Limited Liability Partnership shields personal assets while keeping compliance moderate<br>
        <strong>Cons:</strong> Requires partnership agreement and formal registration</p>
      </div>

      <div class="legal-points">
        <h5>✓ Private Limited Company</h5>
        <p><strong>Best for:</strong> Startups planning to raise venture capital or scale rapidly<br>
        <strong>Pros:</strong> Best liability protection, easier to attract investors<br>
        <strong>Cons:</strong> Demands more reporting, compliance, and higher costs</p>
      </div>

      <h3>2. Register Your Business Properly</h3>
      <p>After selecting a structure, complete these essential filings:</p>
      <ul>
        <li><strong>Name Approval:</strong> Reserve a unique business name through your country's corporate affairs ministry</li>
        <li><strong>PAN/GST/Tax IDs:</strong> Apply for Permanent Account Number, GST registration, and other required tax numbers</li>
        <li><strong>Local Permits:</strong> Shops & Establishments license, trade license, or sector-specific approvals</li>
      </ul>

      <h3>3. Protect Your Intellectual Property</h3>
      <p>Your brand and creations are valuable assets worth protecting from day one.</p>
      <ul>
        <li><strong>Trademarks:</strong> Secure your logo, business name, and taglines to prevent copycats</li>
        <li><strong>Copyrights:</strong> Protect original content, website copy, marketing materials, and software code</li>
        <li><strong>Patents:</strong> Safeguard unique inventions or proprietary technology</li>
      </ul>
      <p><em>Filing early ensures you own what you create and prevents costly legal battles later.</em></p>

      <h3>4. Draft Solid Contracts and Agreements</h3>
      <p>Handshake deals can lead to serious disputes. Always use clear, written agreements for:</p>
      <ul>
        <li>Client projects and payment terms</li>
        <li>Employee or freelancer engagements</li>
        <li>Vendor relationships and service-level expectations</li>
        <li>Co-founder agreements and equity distribution</li>
      </ul>

      <h3>5. Maintain Accurate Business Records</h3>
      <p>Proper documentation is not just good practice—it's often legally required.</p>
      <ul>
        <li>Keep updated financial statements and tax records</li>
        <li>Maintain organized invoices and expense tracking</li>
        <li>Use digital bookkeeping tools to simplify tax filing</li>
        <li>Stay audit-ready with proper documentation</li>
      </ul>

      <h3>6. Understand Your Ongoing Legal Obligations</h3>
      <p>Compliance doesn't end with registration. Stay informed about:</p>
      <ul>
        <li>Labour laws and employee rights</li>
        <li>Data protection and privacy regulations</li>
        <li>Industry-specific regulations and licensing requirements</li>
        <li>Tax filing deadlines and compliance requirements</li>
      </ul>
      <p><strong>Remember:</strong> Penalties for non-compliance can be steep and potentially business-ending for startups.</p>

      <div class="key-takeaway">
        <h4>🎯 Key Takeaway</h4>
        <p>Legal work may not feel as exciting as product development or marketing, but it's the safety net that lets you focus on growth. Investing a little time and money in these foundational steps early on:</p>
        <ul>
          <li>Protects your personal assets from business liabilities</li>
          <li>Builds credibility with customers and investors</li>
          <li>Prevents costly legal disputes down the road</li>
          <li>Creates a solid foundation for sustainable growth</li>
        </ul>
      </div>

      <div class="pro-tip">
        <h5>💡 Professional Tip</h5>
        <p>Consider consulting with a business attorney for at least an initial consultation. Many offer startup packages at reduced rates, and this small investment can save you from major legal headaches later.</p>
      </div>
    `,
    author: "Legal Team @ CGEC ECELL",
    date: "2024-01-25",
    readTime: "7 min read",
    category: "Legal Guide",
    tags: ["Legal", "Startup", "Compliance", "Business Law", "IP Protection"],
    additionalImages: [Blog12, Blog13]
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

            {/* Additional Images for any blog that has them */}
            {blog.additionalImages && blog.additionalImages.length > 0 && (
              <Row className="mb-4">
                {blog.additionalImages.slice(0, 2).map((image, index) => (
                  <Col md={6} key={index}>
                    <img
                      src={image}
                      alt={`Visual content for ${blog.title}`}
                      className="rounded-3 shadow-sm w-100 mb-3"
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                  </Col>
                ))}
              </Row>
            )}

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

            {/* Additional single image if available */}
            {blog.additionalImages && blog.additionalImages.length > 2 && (
              <div className="text-center mb-5">
                <img
                  src={blog.additionalImages[2]}
                  alt={`Additional content for ${blog.title}`}
                  className="rounded-4 shadow-sm"
                  style={{ maxWidth: '600px', height: '300px', objectFit: 'cover', width: '100%' }}
                />
                <p className="text-muted mt-2">
                  <small>Visual content related to {blog.title}</small>
                </p>
              </div>
            )}

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

      {/* Custom CSS for blog content */}
      <style>
        {`
          .blog-content h3 {
            color: #2c3e50;
            margin-top: 2rem;
            margin-bottom: 1rem;
            border-left: 4px solid #007bff;
            padding-left: 1rem;
          }
          
          .blog-content ul, .blog-content ol {
            margin-bottom: 1.5rem;
            padding-left: 2rem;
          }
          
          .blog-content li {
            margin-bottom: 0.5rem;
          }
          
          .legal-points {
            background: #f8f9fa;
            padding: 1rem;
            border-radius: 0.5rem;
            margin: 1rem 0;
            border-left: 4px solid #28a745;
          }
          
          .key-takeaway {
            background: #fff3cd;
            padding: 1.5rem;
            border-radius: 0.5rem;
            margin: 2rem 0;
            border: 1px solid #ffeaa7;
          }
          
          .pro-tip {
            background: #d1ecf1;
            padding: 1rem;
            border-radius: 0.5rem;
            margin: 1.5rem 0;
            border-left: 4px solid #17a2b8;
          }
          
          .lead {
            font-size: 1.25rem;
            font-weight: 300;
            line-height: 1.7;
            color: #495057;
          }
        `}
      </style>
    </>
  );
};

export default BlogDetails;