

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

// Image imports - add your new blog images here
import logo from "../assets/images/logo.png";
import RemoteWork1 from "../assets/Blogs/blog11.png";
import RemoteWork2 from "../assets/Blogs/blog12.png";
import RemoteWork3 from "../assets/Blogs/blog13.png";

import Startup1 from "../assets/Blogs/2.jpg";
import Startup2 from "../assets/Blogs/2.jpg";
import Startup3 from "../assets/Blogs/2.jpg";
import Startup4 from "../assets/Blogs/2.jpg";

// import Legal1 from "../assets/Blogs/blog11.png";
// import Legal2 from "../assets/Blogs/blog12.png";
// import Legal3 from "../assets/Blogs/blog12.png";
// import Legal4 from "../assets/Blogs/blog13.png";

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
 },
  {
    id: 2,
    title: "The Future of Remote Work: Redefining How We Live and Work",
    img: Startup1, // Using first startup image as featured
    desc: "The workplace is no longer tied to cubicles, long commutes, or fixed hours. Remote work has shifted from being a temporary solution to a long-term, mainstream way of working.",
    fullContent: `
      <p class="lead">Great businesses don't begin with a full bank account—they begin with a tested idea and a solid foundation. Whether you're planning an app, a café, or a niche service, two early steps can save you time, money, and stress: validate the idea and cover your legal bases.</p>

    

      <h3>1. Validate Before You Invest</h3>
      <p>A brilliant concept means little unless customers actually pay for it.</p>
      
      <div class="feature-point">
        <h5>💡 Talk to Real Users</h5>
        <p>Skip the friends-and-family echo chamber. Interview potential buyers about their pain points and willingness to pay. Conduct surveys, one-on-one interviews, and focus groups to gather genuine feedback.</p>
      </div>

     

      <div class="feature-point">
        <h5>🚀 Build a Minimum Viable Product (MVP)</h5>
        <p>This could be a simple landing page, a prototype, or a pilot service. Track sign-ups, pre-orders, or paid trials to gauge real interest before building the full product.</p>
      </div>

      <div class="feature-point">
        <h5>📊 Measure Behavior, Not Compliments</h5>
        <p>Likes and verbal praise aren't proof; only actions—clicks, purchases, subscriptions—show true demand. Use analytics tools to track user behavior and conversion rates.</p>
      </div>

      

      <p class="highlight-box">This lean approach prevents you from sinking savings into something the market doesn't want.</p>

      <h3>2. Choose the Right Business Structure</h3>
      <p>Once your idea shows traction, give it a legal identity. The structure you pick affects taxes, liability, and funding options.</p>
      
      <div class="benefit-grid">
        <div class="benefit-item">
          <h5>🏢 Sole Proprietorship</h5>
          <p><strong>Easiest to start</strong> with minimal compliance, but personal assets are exposed to business risks. Best for low-risk businesses and solo entrepreneurs.</p>
        </div>
        <div class="benefit-item">
          <h5>🤝 Partnership/LLP</h5>
          <p><strong>Good for multiple founders</strong>, offers liability protection with moderate paperwork. Ideal for professional services and small teams.</p>
        </div>
        <div class="benefit-item">
          <h5>🏛️ Private Limited Company</h5>
          <p><strong>Preferred if you plan to raise venture capital</strong>; more compliance but higher credibility. Best for growth-focused startups seeking investment.</p>
        </div>
      </div>

     

      <h3>3. Register and Protect</h3>
      <p>Proper registration and protection are essential for long-term success.</p>
      
      <div class="tip-section">
        <h5>📋 Licences & GST</h5>
        <p>Depending on turnover and industry, you may need GST registration, local trade licences, or sector-specific permits. Research your industry requirements thoroughly.</p>
      </div>

      <div class="tip-section">
        <h5>📝 Contracts</h5>
        <p>Draft clear agreements with suppliers, clients, and freelancers to avoid disputes. Well-drafted contracts protect your interests and set clear expectations.</p>
      </div>

      <div class="tip-section">
        <h5>🛡️ Intellectual Property</h5>
        <p>File trademarks or copyrights to protect your brand, product designs, or content. IP protection prevents others from copying your unique assets.</p>
      </div>

      <h3>4. Keep It Lean and Compliant</h3>
      <p>Use affordable digital tools for bookkeeping, invoicing, and tax filing. Staying organised early prevents legal or financial headaches as you scale.</p>
      
      <div class="compliance-tips">
        <div class="compliance-item">
          <h5>💻 Digital Tools</h5>
          <p>Leverage cloud-based accounting software, project management tools, and automated compliance solutions to streamline operations.</p>
        </div>
        <div class="compliance-item">
          <h5>📈 Regular Audits</h5>
          <p>Conduct periodic legal and financial reviews to ensure ongoing compliance as your business grows and regulations change.</p>
        </div>
        <div class="compliance-item">
          <h5>🔍 Stay Updated</h5>
          <p>Keep abreast of changing regulations in your industry and location to maintain compliance and avoid penalties.</p>
        </div>
      </div>

      <div class="conclusion">
        <h4>🎯 Takeaway</h4>
        <p><strong>Validate first, legalise next.</strong> Testing market demand before investing heavily saves money; building the right legal framework protects what you create.</p>
        <p>Combine these two steps and you'll launch not just a business, but a business that's built to last. Remember, successful entrepreneurship is about smart validation and solid foundations.</p>
      </div>

      <div class="key-points">
        <h5>💡 Key Success Factors:</h5>
        <ul>
          <li><strong>Customer validation</strong> before major investment</li>
          <li><strong>Appropriate legal structure</strong> for your goals</li>
          <li><strong>Proper registration</strong> and compliance</li>
          <li><strong>IP protection</strong> for your unique assets</li>
          <li><strong>Lean operations</strong> with digital tools</li>
        </ul>
      </div>
    `,
    author: "Startup Legal Team",
    date: "2025-09-27",
    readTime: "6 min read",
    category: "Startup Guide",
    tags: ["Startup", "Validation", "Legal", "Business Structure", "MVP", "Compliance"],
    additionalImages: [Startup1, Startup2, Startup3, Startup4]
  },

  //   {
  //   id: 3,
  //   title: "Legal Basics for First-Time Founders: Start Your Business on Solid Ground",
  //   img: Legal1, // Using first legal image as featured
  //   desc: "Many startups fail not because of weak ideas but because they overlook the legal groundwork. Whether you're opening an online shop or launching a tech venture, these steps will help you stay compliant and protect what you build.",
  //   fullContent: `
  //     <p class="lead">Many startups fail not because of weak ideas but because they overlook the legal groundwork. Whether you're opening an online shop or launching a tech venture, these steps will help you stay compliant and protect what you build.</p>

  //     <div class="text-center my-5">
  //       <img src="${Legal1}" alt="Legal foundation for startups" class="img-fluid rounded shadow" style="max-height: 400px; width: auto; max-width: 100%;" />
  //       <p class="text-muted mt-2"><small>Building a solid legal foundation for your business</small></p>
  //     </div>

  //     <h3>⚖️ 1. Choose the Right Business Structure</h3>
  //     <p>Your legal identity determines taxes, liability, and funding options. This decision is about <strong>power, not just paperwork</strong>, as it lays down the rules for ownership, decision-making, and profit-sharing.</p>
      
  //     <div class="benefit-grid">
  //       <div class="benefit-item">
  //         <h5>🏢 Sole Proprietorship</h5>
  //         <p><strong>Easiest to start</strong> with minimal compliance, but your personal assets are exposed to business debts. Best for low-risk businesses and solo entrepreneurs testing the waters.</p>
  //       </div>
  //       <div class="benefit-item">
  //         <h5>🤝 Partnership/LLP</h5>
  //         <p><strong>Ideal for multiple founders</strong>; a Limited Liability Partnership shields personal assets while keeping compliance moderate. Perfect for professional services firms.</p>
  //       </div>
  //       <div class="benefit-item">
  //         <h5>🏛️ Private Limited Company</h5>
  //         <p><strong>Best if you plan to raise venture capital</strong> or attract serious investors, though it demands more reporting and costs. Offers the highest credibility and protection.</p>
  //       </div>
  //     </div>

  //     <div class="text-center my-5">
  //       <img src="${Legal2}" alt="Business structure comparison" class="img-fluid rounded shadow" style="max-height: 350px; width: auto; max-width: 100%;" />
  //       <p class="text-muted mt-2"><small>Choosing the right legal structure for your startup goals</small></p>
  //     </div>

  //     <h3>📝 2. Register Your Business</h3>
  //     <p>After selecting a structure, complete the necessary filings to make your business official.</p>
      
  //     <div class="feature-point">
  //       <h5>🏷️ Name Approval</h5>
  //       <p>Reserve a unique business name through your country's corporate affairs ministry (e.g., India's MCA portal). Ensure the name isn't trademarked by another company.</p>
  //     </div>

  //     <div class="feature-point">
  //       <h5>📊 PAN/GST/Tax IDs</h5>
  //       <p>Apply for a Permanent Account Number, GST registration (if turnover exceeds the threshold), and other tax numbers as required. Consult a tax professional for your specific situation.</p>
  //     </div>

  //     <div class="feature-point">
  //       <h5>📑 Local Permits</h5>
  //       <p>Obtain Shops & Establishments licence, trade licence, or sector-specific approvals depending on your industry. Requirements vary by location and business type.</p>
  //     </div>

  //     <div class="text-center my-5">
  //       <img src="${Legal3}" alt="Business registration process" class="img-fluid rounded shadow" style="max-height: 350px; width: auto; max-width: 100%;" />
  //       <p class="text-muted mt-2"><small>Navigating the business registration process</small></p>
  //     </div>

  //     <h3>🛡️ 3. Protect Your Intellectual Property</h3>
  //     <p>Your brand is an asset worth protecting from day one.</p>
      
  //     <div class="tip-section">
  //       <h5>🔖 Trademarks</h5>
  //       <p>Secure your logo, name, and taglines to prevent copycats. Conduct a thorough trademark search before finalizing your brand identity to avoid infringement issues.</p>
  //     </div>

  //     <div class="tip-section">
  //       <h5>📄 Copyrights & Patents</h5>
  //       <p>Safeguard original content, software code, or inventions. Filing early establishes priority and ensures you own what you create, including employee and contractor work.</p>
  //     </div>

  //     <h3>📋 4. Draft Solid Contracts</h3>
  //     <p>Handshake deals can cause disputes. Use clear, written agreements for all business relationships.</p>
      
  //     <div class="compliance-tips">
  //       <div class="compliance-item">
  //         <h5>🤝 Client Agreements</h5>
  //         <p>Define project scope, deliverables, payment terms, and intellectual property ownership. Clear contracts prevent scope creep and payment delays.</p>
  //       </div>
  //       <div class="compliance-item">
  //         <h5>👥 Team Contracts</h5>
  //         <p>Establish employee or freelancer engagements including confidentiality clauses, non-compete agreements, and work-for-hire provisions.</p>
  //       </div>
  //       <div class="compliance-item">
  //         <h5>📦 Vendor Relationships</h5>
  //         <p>Set clear service-level expectations, delivery timelines, and quality standards with suppliers and service providers.</p>
  //       </div>
  //     </div>

  //     <div class="text-center my-5">
  //       <img src="${Legal4}" alt="Contract management for startups" class="img-fluid rounded shadow" style="max-height: 350px; width: auto; max-width: 100%;" />
  //       <p class="text-muted mt-2"><small>Essential contracts every startup needs</small></p>
  //     </div>

  //     <h3>📊 5. Keep Accurate Records</h3>
  //     <p>Maintain updated financial statements, invoices, and compliance documents. Digital bookkeeping tools simplify tax filing and keep you audit-ready from day one.</p>

  //     <h3>⚡ 6. Understand Your Obligations</h3>
  //     <p>Labour laws, data protection rules, and industry regulations vary by region. Even a small startup must stay informed—penalties for non-compliance can be steep and damaging to your reputation.</p>

  //     <div class="conclusion">
  //       <h4>🎯 Key Takeaway</h4>
  //       <p><strong>Legal work may not feel exciting, but it's the safety net that lets you focus on growth.</strong> Investing a little time and money in these steps early on protects your idea, builds credibility with customers and investors, and saves you from costly surprises later.</p>
  //       <p>Remember: Proper legal foundations prevent problems before they start, allowing you to scale with confidence and security.</p>
  //     </div>

  //     <div class="key-points">
  //       <h5>💡 Essential Legal Checklist for Founders:</h5>
  //       <ul>
  //         <li><strong>Choose the right business structure</strong> for your goals</li>
  //         <li><strong>Complete all registrations</strong> and obtain necessary licenses</li>
  //         <li><strong>Protect your IP</strong> through trademarks and copyrights</li>
  //         <li><strong>Draft comprehensive contracts</strong> for all relationships</li>
  //         <li><strong>Maintain accurate records</strong> from the beginning</li>
  //         <li><strong>Stay informed</strong> about regulatory obligations</li>
  //       </ul>
  //     </div>
  //   `,
  //   author: "Legal Advisory Team",
  //   date: "2025-09-24",
  //   readTime: "7 min read",
  //   category: "Legal Guide",
  //   tags: ["Legal", "Startup", "Business Structure", "Compliance", "IP Protection", "Contracts"],
  //   additionalImages: [Legal1, Legal2, Legal3, Legal4]
  // }
 
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
                    <p className="text-muted mb-0">Startup Legal Expert at CGEC ECELL</p>
                    <small className="text-muted">Specializing in business validation and legal foundations for startups</small>
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
          
          .tip-section {
            background: #f0f0f0;
            padding: 1rem;
            border-radius: 0.5rem;
            margin: 1rem 0;
            border-left: 4px solid #6c757d;
          }
          
          .compliance-tips {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1rem;
            margin: 1.5rem 0;
          }
          
          .compliance-item {
            background: #fff3cd;
            padding: 1rem;
            border-radius: 0.5rem;
            border-left: 4px solid #ffc107;
          }
          
          .conclusion {
            background: #e8f5e8;
            padding: 1.5rem;
            border-radius: 0.5rem;
            margin: 2rem 0;
            border: 1px solid #28a745;
          }
          
          .key-points {
            background: #e8f4fd;
            padding: 1.5rem;
            border-radius: 0.5rem;
            margin: 2rem 0;
            border-left: 4px solid #007bff;
          }
          
          .highlight-box {
            background: #fff3cd;
            padding: 1.5rem;
            border-radius: 0.5rem;
            border-left: 4px solid #ffc107;
            font-weight: 600;
            font-size: 1.1rem;
            margin: 2rem 0;
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
          
          .blog-content strong {
            color: #2c3e50;
            font-weight: 600;
          }
        `}
      </style>
    </>
  );
};

export default BlogDetails;