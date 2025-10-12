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

import logo from "../assets/images/logo.png";
import Startup1 from "../assets/Blogs/2.jpg";
import Startup2 from "../assets/Blogs/2.jpg";
import Startup3 from "../assets/Blogs/2.jpg";
import Startup4 from "../assets/Blogs/2.jpg";
import blog31 from "../assets/Blogs/blog31.png";
import blog32 from "../assets/Blogs/blog32.png";
import blog33 from "../assets/Blogs/blog33.png";
import blog34 from "../assets/Blogs/blog34.png";
import blog41 from "../assets/Blogs/blog41.png";
import blog42 from "../assets/Blogs/blog42.png";
import blog43 from "../assets/Blogs/blog43.png";
import blog44 from "../assets/Blogs/blog44.png";
import blog51 from "../assets/Blogs/blog51.png";
import blog52 from "../assets/Blogs/blog52.png";
import blog53 from "../assets/Blogs/blog53.png";
import blog61 from "../assets/Blogs/blog61.png";
import blog62 from "../assets/Blogs/blog62.png";
import blog63 from "../assets/Blogs/blog63.png";
import blog64 from "../assets/Blogs/blog64.png";
import blog65 from "../assets/Blogs/blog65.png";
import blog66 from "../assets/Blogs/blog66.png";


const blogData = [

  {
    id: 1,
    title: "From Spark to Startup: Validating Your Idea and Getting the Legal Basics Right",
    img: Startup1,
    desc: "Great businesses don't begin with a full bank account—they begin with a tested idea and a solid foundation. Whether you're planning an app, a café, or a niche service, two early steps can save you time, money, and stress: validate the idea and cover your legal bases.",
    fullContent: `
      <p class="lead">Great businesses don't begin with a full bank account—they begin with a tested idea and a solid foundation. Whether you're planning an app, a café, or a niche service, two early steps can save you time, money, and stress: validate the idea and cover your legal bases.</p>
       <div class="text-center my-5">
      <img src="${Startup1}" alt="Micro-entrepreneur working from small home-based setup" class="img-fluid rounded shadow" style="max-height: 400px; width: auto; max-width: 100%;" />
      <p class="text-muted mt-2"><small>Micro-entrepreneurs operate with minimal staff and serve specific markets</small></p>
    </div>

      <h3>1. Validate Before You Invest</h3>
      <p>A brilliant concept means little unless customers actually pay for it.</p>

      <div class="feature-point">
        <h5>💡 Talk to Real Users</h5>
        <p>Skip the friends-and-family echo chamber. Interview potential buyers about their pain points and willingness to pay.</p>
      </div>

      <div class="feature-point">
        <h5>🚀 Build a Minimum Viable Product (MVP)</h5>
        <p>This could be a simple landing page, a prototype, or a pilot service. Track sign-ups, pre-orders, or paid trials.</p>
      </div>

      <div class="feature-point">
        <h5>📊 Measure Behavior, Not Compliments</h5>
        <p>Likes and verbal praise aren't proof; only actions—clicks, purchases, subscriptions—show true demand.</p>
      </div>

      <p class="highlight-box">This lean approach prevents you from sinking savings into something the market doesn't want.</p>

      <h3>2. Choose the Right Business Structure</h3>
      <p>Once your idea shows traction, give it a legal identity. The structure you pick affects taxes, liability, and funding options.</p>
      
      <div class="benefit-grid">
        <div class="benefit-item">
          <h5>🏢 Sole Proprietorship</h5>
          <p><strong>Easiest to start</strong> with minimal compliance, but personal assets are exposed to business risks.</p>
        </div>
        <div class="benefit-item">
          <h5>🤝 Partnership/LLP</h5>
          <p><strong>Good for multiple founders</strong>, offers liability protection with moderate paperwork.</p>
        </div>
        <div class="benefit-item">
          <h5>🏛️ Private Limited Company</h5>
          <p><strong>Preferred if you plan to raise venture capital</strong>; more compliance but higher credibility.</p>
        </div>
      </div>

      <h3>3. Register and Protect</h3>
      <p>Proper registration and protection are essential for long-term success.</p>
      
      <div class="tip-section">
        <h5>📋 Licences & GST</h5>
        <p>Depending on turnover and industry, you may need GST registration, local trade licences, or sector-specific permits.</p>
      </div>

      <div class="tip-section">
        <h5>📝 Contracts</h5>
        <p>Draft clear agreements with suppliers, clients, and freelancers to avoid disputes.</p>
      </div>

      <div class="tip-section">
        <h5>🛡️ Intellectual Property</h5>
        <p>File trademarks or copyrights to protect your brand, product designs, or content.</p>
      </div>

      <h3>4. Keep It Lean and Compliant</h3>
      <p>Use affordable digital tools for bookkeeping, invoicing, and tax filing. Staying organised early prevents legal or financial headaches as you scale.</p>

      <div class="conclusion">
        <h4>🎯 Takeaway</h4>
        <p><strong>Validate first, legalise next.</strong> Testing market demand before investing heavily saves money; building the right legal framework protects what you create.</p>
        <p>Combine these two steps and you'll launch not just a business, but a business that's built to last.</p>
      </div>
    `,
    author: "Startup Legal Team",
    date: "2025-09-27",
    readTime: "6 min read",
    category: "Startup Guide",
    tags: ["Startup", "Validation", "Legal", "Business Structure", "MVP", "Compliance"],
    additionalImages: [Startup1, Startup2, Startup3, Startup4]
  },
{
  id: 2,
  title: "The Rise of Solopreneurs: Building a Business of One",
  img: blog31, // This is your main featured image
  desc: "Entrepreneurship is no longer defined by large teams, big offices, or heavy investment. A growing wave of solopreneurs—founders who launch and run businesses entirely on their own—is reshaping the startup landscape worldwide.",
  fullContent: `
    <p class="lead">Entrepreneurship is no longer defined by large teams, big offices, or heavy investment. A growing wave of solopreneurs—founders who launch and run businesses entirely on their own—is reshaping the startup landscape worldwide.</p>



    <h3>🚀 Why Solopreneurship is Booming</h3>
    <p>Three powerful forces are driving this shift toward one-person businesses :cite[1]:</p>
    
    <div class="feature-point">
      <h5>💻 Digital Tools & The Power of the Internet</h5>
      <p>Affordable, user-friendly platforms for payments, marketing, and customer support mean you don't need a full staff to look professional. The digital economy has removed traditional barriers to entry, allowing individuals to launch and scale businesses from anywhere in the world :cite[1].</p>
    </div>

    <div class="feature-point">
      <h5>🌐 Remote Work Culture & Normalization</h5>
      <p>Clients and collaborators are comfortable working virtually, lowering the barrier for solo operators. The widespread shift toward remote work made professionals realize they could operate independently with greater autonomy :cite[1].</p>
    </div>

    <div class="feature-point">
      <h5>⚖️ Lifestyle Flexibility & Desire for Freedom</h5>
      <p>Many professionals crave autonomy over schedules, projects, and income rather than traditional corporate hierarchies. Today's workforce values lifestyle design as much as financial success, seeking freedom from the 9-to-5 grind :cite[1].</p>
    </div>

    <h3>✅ Advantages of Going Solo</h3>
    <p>Operating alone offers unique benefits that traditional businesses can't match :cite[1]:</p>
    
    <div class="benefit-grid">
      <div class="benefit-item">
        <h5>Speed and Agility</h5>
        <p>Decisions are instant because you are the decision-maker. No committees, no approval processes—just rapid execution and adaptation to market changes.</p>
      </div>
      <div class="benefit-item">
        <h5>Low Overhead</h5>
        <p>With no payroll or office lease, expenses stay lean. This financial efficiency means you can achieve profitability faster with lower revenue thresholds.</p>
      </div>
      <div class="benefit-item">
        <h5>Creative Freedom</h5>
        <p>You can pivot your product or service without internal negotiations. Follow your vision and make changes based on customer feedback, not office politics.</p>
      </div>
    </div>

    <!-- IMAGE 2: Place here to maintain visual interest -->
    <div class="text-center my-5">
            <pics style="display: flex;">
            <img src="${blog32}" alt="Solopreneur working remotely from a cafe with laptop" class="img-fluid rounded shadow" style="max-height: 200px; width: auto; max-width: 100%;" />
            <img src="${blog33}" alt="Solopreneur managing multiple business tasks and automation" class="img-fluid rounded shadow" style="max-height: 200px; width: auto; max-width: 100%;" />
            <img src="${blog34}" alt="Successful solopreneur achieving work-life balance" class="img-fluid rounded shadow" style="max-height: 200px; width: auto; max-width: 100%;" />
            
            </pics>
      <p class="text-muted mt-2"><small>Effective solopreneurs use systems and automation to scale their efforts</small></p>
    </div>

    <h3>⚠️ Key Challenges</h3>
    <p>Of course, being a one-person startup is not effortless. Solopreneurs face several unique challenges :cite[1]:</p>
    
    <div class="challenge-item">
      <h5>Wearing All the Hats</h5>
      <p>Solopreneurs juggle marketing, finances, customer service, and strategy themselves. This requires continuous learning and rapid context switching throughout each day, with burnout being a real risk without boundaries.</p>
    </div>

    <div class="challenge-item">
      <h5>Isolation and Loneliness</h5>
      <p>Working alone can feel lonely. Without colleagues or collaborators, you may lack emotional and creative support that traditional office environments provide.</p>
    </div>

    <div class="challenge-item">
      <h5>Income Variability and Scaling Limitations</h5>
      <p>Unlike a salaried job, income as a solopreneur can be inconsistent. Without a team, your growth depends heavily on your own time and energy unless you leverage automation or digital products.</p>
    </div>

    <h3>💡 Tips for Aspiring Solopreneurs</h3>
    
    <div class="tip-section">
      <h5>1. Validate Your Idea & Define Your Niche</h5>
      <p>Run small tests—landing pages, pre-orders, or pilot projects—to confirm real demand. Don't try to serve everyone; focus on a specific audience and problem you can solve exceptionally well :cite[1].</p>
    </div>

    <div class="tip-section">
      <h5>2. Automate, Delegate & Build Systems</h5>
      <p>Use tools for accounting, scheduling, and email marketing; delegate specialized tasks to freelancers. You don't need a team to scale; you need systems that make your work repeatable and efficient :cite[1].</p>
    </div>

    <div class="tip-section">
      <h5>3. Protect Your Business & Choose the Right Model</h5>
      <p>Choose the right legal structure, register trademarks, and keep contracts in writing. Consider business models that suit your skills and goals beyond just hourly work, such as productized services or digital products :cite[1].</p>
    </div>

    <div class="tip-section">
      <h5>4. Invest in Yourself & Build Your Brand</h5>
      <p>Continuous learning—new skills, emerging tech, market trends—keeps you competitive. As a solopreneur, you are the face of your business, so building a strong personal brand is crucial for attracting ideal clients :cite[1].</p>
    </div>



    <h3>🌟 Real-World Inspiration</h3>
    <p>From independent app developers to single-founder consultancies and boutique e-commerce brands, solopreneurs are proving that one person with the right systems can compete with traditional startups. Many intentionally stay small, enjoying high profit margins and personal freedom over rapid scaling :cite[1].</p>

    <div class="success-story">
      <h5>Inspiring Examples</h5>
      <p>Individuals like Ali Abdaal (former doctor turned productivity YouTuber) and Pat Flynn (Smart Passive Income) have built multi-million dollar businesses as solopreneurs, demonstrating that a business of one can create massive value and legacy :cite[1].</p>
    </div>

    <div class="conclusion">
      <h4>🎯 Bottom Line</h4>
      <p><strong>The one-person startup isn't just a stopgap before hiring—it's a legitimate, sustainable business model.</strong> With digital infrastructure and global markets at your fingertips, building a business of one may be the most entrepreneurial move of all.</p>
      <p>Solopreneurship is more than a business model; it's a lifestyle, a mindset, and a statement of independence. It reflects a world where individuals have the power to carve their path, build on their terms, and serve a global audience without ever hiring a team :cite[1].</p>
    </div>
  `,
  author: "Entrepreneurship Team",
  date: "2025-10-01",
  readTime: "6 min read",
  category: "Entrepreneurship",
  tags: ["Solopreneur", "Startup", "Digital Nomad", "Business", "Remote Work", "Automation"],
  additionalImages: [blog31, blog32, blog33, blog34]
},
{
  id: 3,
  title: "Building a Business Plan That Investors Will Actually Read",
  img: blog44,
  desc: "A business plan isn't a 50-page homework assignment—it's a sales document. Its job is to convince busy investors that your idea is real, scalable, and worth their time. Here's how to craft a plan they'll actually finish reading.",
  fullContent: `
    <p class="lead">A business plan isn't a 50-page homework assignment—it's a sales document. Its job is to convince busy investors that your idea is real, scalable, and worth their time. Here's how to craft a plan they'll actually finish reading.</p>

   
 

    <h3>1. Start with a Clear, One-Page Executive Summary</h3>
    <p>Investors often read only the first page before deciding whether to continue.</p>
    
    <div class="feature-point">
      <h5>📝 Key Elements</h5>
      <p>State the problem and your solution in plain language.</p>
      <p>Highlight market size, traction (if any), and the funding you seek.</p>
      <p>Include a crisp call to action: the amount of capital and how you'll use it.</p>
    </div>
      <div class="text-center my-5">
      <img src="${blog41}" alt="Financial projections chart showing revenue growth and milestones" class="img-fluid rounded shadow" style="max-height: 400px; width: auto; max-width: 100%;" />
      <p class="text-muted mt-2"><small>Realistic financial projections demonstrate business viability</small></p>
    </div>

    <h3>2. Define the Market Opportunity</h3>
    <p>Show you've done your homework.</p>
    
    <div class="feature-point">
      <h5>📊 Market Research</h5>
      <p>Provide credible data on total addressable market (TAM) and target segments.</p>
      <p>Identify trends or pain points that make this the right time for your product.</p>
      <p>Keep charts simple and sources reputable.</p>
    </div>

    <!-- IMAGE 2: Market Analysis Visual -->
    <div class="text-center my-5">
      <img src="${blog42}" alt="Market analysis charts showing TAM and growth trends" class="img-fluid rounded shadow" style="max-height: 400px; width: auto; max-width: 100%;" />
      <p class="text-muted mt-2"><small>Clear market data builds credibility and shows opportunity size</small></p>
    </div>

    <h3>3. Present a Differentiated Solution</h3>
    <p>Explain what sets you apart.</p>
    
    <div class="benefit-grid">
      <div class="benefit-item">
        <h5>Unique Value Proposition</h5>
        <p>Technology, brand, or business model that differentiates you.</p>
      </div>
      <div class="benefit-item">
        <h5>Competitive Landscape</h5>
        <p>Who else is solving this problem and why you'll win.</p>
      </div>
      <div class="benefit-item">
        <h5>Proof of Traction</h5>
        <p>Early customers, pilots, or partnerships that validate your approach.</p>
      </div>
    </div>
       <div class="text-center my-5">
      <img src="${blog43}" alt="Executive summary example with clear problem-solution structure" class="img-fluid rounded shadow" style="max-height: 400px; width: auto; max-width: 100%;" />
      <p class="text-muted mt-2"><small>A compelling executive summary grabs investor attention immediately</small></p>
    </div>

    <h3>4. Detail Your Business Model</h3>
    <p>Investors care about how you make money.</p>
    
    <div class="tip-section">
      <h5>💰 Revenue Strategy</h5>
      <p>Pricing strategy and revenue streams.</p>
      <p>Customer acquisition plans and key channels.</p>
      <p>Basic unit economics: cost to acquire a customer (CAC) vs. lifetime value (LTV).</p>
    </div>

   


    <h3>5. Introduce the Team</h3>
    <p>People fund people.</p>
    
    <div class="feature-point">
      <h5>👥 Team Highlights</h5>
      <p>Highlight founders' relevant skills and past successes.</p>
      <p>Mention advisors or key hires who strengthen credibility.</p>
    </div>

    <h3>6. Show a Realistic Financial Roadmap</h3>
    <p>Three- to five-year projections with clear assumptions.</p>
    
    <div class="tip-section">
      <h5>📈 Financial Planning</h5>
      <p>Break-even point and anticipated milestones.</p>
      <p>Funding ask: amount, use of funds, and runway it provides.</p>
    </div>

    <!-- IMAGE 4: Financial Projections Visual -->
  

    <h3>7. Keep the Design Investor-Friendly</h3>
    <p>Make your plan easy to digest.</p>
    
    <div class="benefit-grid">
      <div class="benefit-item">
        <h5>📄 Concise Format</h5>
        <p>Limit the main plan to 15–20 pages.</p>
      </div>
      <div class="benefit-item">
        <h5>🎨 Visual Appeal</h5>
        <p>Use visuals—charts, infographics, product screenshots—over dense text.</p>
      </div>
      <div class="benefit-item">
        <h5>📁 Organized Structure</h5>
        <p>Provide an appendix for deeper details so the main story stays concise.</p>
      </div>
      
    </div>
        <div class="text-center my-5">
      <img src="${blog44}" alt="Business model canvas showing revenue streams and cost structure" class="img-fluid rounded shadow" style="max-height: 400px; width: auto; max-width: 100%;" />
      <p class="text-muted mt-2"><small>A clear business model shows how you'll generate revenue and profit</small></p>
    </div>

    <div class="conclusion">
      <h4>🎯 Key Takeaway</h4>
      <p><strong>A great business plan is focused, data-backed, and easy to skim.</strong> Investors don't need a novel; they need proof that you understand the market, can execute, and will generate returns. Nail the executive summary, highlight traction, and make every section earn its place.</p>
    </div>
  `,
  author: "Investment Strategy Team",
  date: "2025-10-08",
  readTime: "6 min read",
  category: "Business Planning",
  tags: ["Business Plan", "Investors", "Funding", "Startup", "Pitching", "Executive Summary"],
  additionalImages: [blog41, blog42, blog43, blog44]
},
{
  id: 4,
  title: "Micro-Entrepreneurship: The Big Impact of Small Ventures",
  img: blog51, 
  desc: "Gone are the days when 'entrepreneur' meant a large startup with hefty funding. Across towns and neighbourhoods, micro-entrepreneurs—people running hyper-focused businesses with minimal staff and capital—are quietly transforming local economies.",
  fullContent: `
    <p class="lead">Gone are the days when "entrepreneur" meant a large startup with hefty funding. Across towns and neighbourhoods, micro-entrepreneurs—people running hyper-focused businesses with minimal staff and capital—are quietly transforming local economies.</p>

   

    <h3>What Is Micro-Entrepreneurship?</h3>
    <p>A micro-entrepreneur typically operates with one to five employees (often solo) and serves a highly specific market. Think home-based bakers, boutique digital marketers, hyper-local delivery services, or artisans selling via Instagram. Low overhead and targeted offerings let them thrive in niches larger companies overlook.</p>
     <!-- IMAGE 1: What Is Micro-Entrepreneurship -->
    <div class="text-center my-5">
      <img src="${blog51}" alt="Micro-entrepreneur working from small home-based setup" class="img-fluid rounded shadow" style="max-height: 400px; width: auto; max-width: 100%;" />
      <p class="text-muted mt-2"><small>Micro-entrepreneurs operate with minimal staff and serve specific markets</small></p>
    </div>

    <h3>Why It's Growing</h3>
    <p>Several forces fuel the movement:</p>
    
    <div class="feature-point">
      <h5>💻 Accessible digital tools</h5>
      <p>Social media, e-commerce platforms, and mobile payment apps make marketing and transactions simple and cheap.</p>
    </div>

    <div class="feature-point">
      <h5>🛍️ Changing consumer habits</h5>
      <p>Customers value personalised, authentic products—whether organic skincare or handcrafted décor.</p>
    </div>

    <div class="feature-point">
      <h5>🌍 Pandemic lessons</h5>
      <p>Remote work and side hustles proved that small, flexible businesses can survive economic shocks.</p>
    </div>

    <!-- IMAGE 2: Economic Impact -->
    <div class="text-center my-5">
      <img src="${blog52}" alt="Local community market with micro-entrepreneurs" class="img-fluid rounded shadow" style="max-height: 400px; width: auto; max-width: 100%;" />
      <p class="text-muted mt-2"><small>Micro-enterprises create jobs and support local economies</small></p>
    </div>

    <h3>Economic and Social Impact</h3>
    <p>Micro-enterprises generate more than pocket money. They:</p>
    
    <div class="benefit-grid">
      <div class="benefit-item">
        <h5>Create jobs locally</h5>
        <p>Especially for women and youth.</p>
      </div>
      <div class="benefit-item">
        <h5>Circulate money within communities</h5>
        <p>Supporting neighbourhood suppliers and services.</p>
      </div>
      <div class="benefit-item">
        <h5>Preserve culture and craft</h5>
        <p>From regional textiles to traditional foods.</p>
      </div>
    </div>
       <div class="text-center my-5">
      <img src="${blog53}" alt="Micro-entrepreneur using digital tools and smartphone" class="img-fluid rounded shadow" style="max-height: 400px; width: auto; max-width: 100%;" />
      <p class="text-muted mt-2"><small>Digital platforms enable micro-entrepreneurs to reach customers efficiently</small></p>
    </div>

    <p>In countries like India, these ventures collectively contribute billions to GDP while revitalising rural and semi-urban markets.</p>

    <h3>Keys to Success for Micro-Entrepreneurs</h3>
    
    <div class="tip-section">
      <h5>1. Start lean, test fast.</h5>
      <p>Use small batches or pilot services to gauge demand.</p>
    </div>

    <div class="tip-section">
      <h5>2. Leverage digital platforms.</h5>
      <p>Free tools like Instagram Shops, WhatsApp Business, and UPI payments reduce setup costs.</p>
    </div>

 

    <div class="tip-section">
      <h5>3. Focus on customer relationships.</h5>
      <p>Personalised service and quick responses build loyalty.</p>
    </div>

    <div class="tip-section">
      <h5>4. Mind the basics.</h5>
      <p>Even tiny businesses need proper bookkeeping, necessary licences, and clear contracts.</p>
    </div>

    <h3>Challenges to Watch</h3>
    
    <div class="challenge-item">
      <h5>Scaling vs. staying niche</h5>
      <p>Growth may strain the personal touch that makes these ventures unique.</p>
    </div>

    <div class="challenge-item">
      <h5>Competition</h5>
      <p>Low barriers invite imitators. Protect your brand with trademarks and consistent quality.</p>
    </div>

    <div class="challenge-item">
      <h5>Access to finance</h5>
      <p>Micro-loans and government schemes can bridge gaps, but awareness is key.</p>
    </div>

 

    <div class="conclusion">
      <h4>🎯 Bottom Line</h4>
      <p><strong>Micro-entrepreneurship proves that "small" can be mighty.</strong> With creativity, digital savvy, and strong community ties, one person or a tiny team can boost local economies—and craft a fulfilling livelihood—without chasing venture capital or building a massive organisation.</p>
    </div>
  `,
  author: "Entrepreneurship Team",
  date: "2025-10-11",
  readTime: "6 min read",
  category: "Micro-Entrepreneurship",
  tags: ["Micro-Entrepreneurship", "Small Business", "Local Economy", "Digital Tools", "Community"],
  additionalImages: [blog51, blog52, blog53]
},
{
  id: 5,
  title: "Smart Ways to Build Brand Trust as a New Company",
  img: blog61, 
  desc: "In a crowded marketplace, customers don't just buy products—they buy confidence. For a young business, earning trust can feel like climbing a mountain, but the right strategies can accelerate the climb. Here's how to establish credibility from day one.",
  fullContent: `
    <p class="lead">In a crowded marketplace, customers don't just buy products—they buy confidence. For a young business, earning trust can feel like climbing a mountain, but the right strategies can accelerate the climb. Here's how to establish credibility from day one.</p>

    <!-- IMAGE 1: Transparency Section -->
  

    <h3>1. Be Transparent from the Start</h3>
    <p>Honesty is the quickest path to trust.</p>
    
    <div class="feature-point">
      <h5>Transparency Practices</h5>
      <p>Share clear pricing with no hidden fees.</p>
      <p>Communicate openly about timelines, delays, or product limitations.</p>
      <p>Admit mistakes promptly and show how you're fixing them.</p>
    </div>

    <p>Transparency signals that you value customers more than short-term gain.</p>
      <div class="text-center my-5">
      <img src="${blog61}" alt="Transparent business practices and honest communication" class="img-fluid rounded shadow" style="max-height: 400px; width: auto; max-width: 100%;" />
      <p class="text-muted mt-2"><small>Transparency signals that you value customers more than short-term gain.</small></p>
    </div>

    <h3>2. Deliver Consistently</h3>
    <p>Promises mean little without follow-through.</p>
    
    <div class="feature-point">
      <h5>Consistency Standards</h5>
      <p>Maintain product quality even as you scale.</p>
      <p>Provide timely responses to customer queries.</p>
      <p>Ensure your website, packaging, and service experience all reflect the same standards.</p>
    </div>

    <p>Consistency tells customers they can rely on you every time.</p>
      <div class="text-center my-5">
      <img src="${blog62}" alt="Transparent business practices and honest communication" class="img-fluid rounded shadow" style="max-height: 400px; width: auto; max-width: 100%;" />
      <p class="text-muted mt-2"><small>Consistency tells customers they can rely on you every time.</small></p>
    </div>



    <h3>3. Showcase Social Proof</h3>
    <p>People trust people more than marketing copy.</p>
    
    <div class="benefit-grid">
      <div class="benefit-item">
        <h5>Collect Testimonials</h5>
        <p>Collect testimonials and reviews from your earliest users.</p>
      </div>
      <div class="benefit-item">
        <h5>Highlight Media Mentions</h5>
        <p>Highlight media mentions or partnerships.</p>
      </div>
      <div class="benefit-item">
        <h5>Use Case Studies</h5>
        <p>Use case studies or before-and-after stories to demonstrate results.</p>
      </div>
    </div>

    <p>Even a handful of authentic endorsements carries weight.</p>
      <div class="text-center my-5">
      <img src="${blog63}" alt="Transparent business practices and honest communication" class="img-fluid rounded shadow" style="max-height: 400px; width: auto; max-width: 100%;" />
      <p class="text-muted mt-2"><small>Even a handful of authentic endorsements carries weight</small></p>
    </div>

    <h3>4. Build a Human Brand Voice</h3>
    <p>Customers connect with people, not faceless entities.</p>
    
    <div class="tip-section">
      <h5>Human Connection Strategies</h5>
      <p>Use approachable, conversational language in emails and on social media.</p>
      <p>Share behind-the-scenes content: your team, your process, your mission.</p>
      <p>Engage in two-way dialogue—reply to comments and messages promptly.</p>
    </div>

    <p>A relatable personality makes your brand memorable and trustworthy.</p>

    <!-- IMAGE 3: Customer Support Section -->
    <div class="text-center my-5">
      <img src="${blog64}" alt="Excellent customer support and multiple support channels" class="img-fluid rounded shadow" style="max-height: 400px; width: auto; max-width: 100%;" />
      <p class="text-muted mt-2"><small>Responsive customer service turns buyers into loyal advocates</small></p>
    </div>

    <h3>5. Prioritise Customer Support</h3>
    <p>Excellent service can turn a first-time buyer into a loyal advocate.</p>
    
    <div class="feature-point">
      <h5>Support Excellence</h5>
      <p>Offer multiple support channels (chat, email, phone) and respond quickly.</p>
      <p>Empower your team to solve problems without excessive bureaucracy.</p>
      <p>Follow up after issues are resolved to ensure satisfaction.</p>
    </div>

    <p>A single great support experience often leads to repeat business.</p>
     <div class="text-center my-5">
      <img src="${blog65}" alt="Transparent business practices and honest communication" class="img-fluid rounded shadow" style="max-height: 400px; width: auto; max-width: 100%;" />
      <p class="text-muted mt-2"><small>A single great support experience often leads to repeat business.</small></p>
    </div>

    <h3>6. Secure and Protect Data</h3>
    <p>In an age of cyber risks, privacy matters.</p>
    
    <div class="tip-section">
      <h5>Data Protection Measures</h5>
      <p>Use HTTPS, secure payment gateways, and clear data policies.</p>
      <p>Comply with local data-protection regulations (e.g., GDPR or India's Digital Personal Data Protection Act).</p>
      <p>Communicate your security practices so customers know their information is safe.</p>
    </div>

    <!-- IMAGE 4: Brand Trust Conclusion -->
    <div class="text-center my-5">
      <img src="${blog66}" alt="Long-term brand trust and customer relationships" class="img-fluid rounded shadow" style="max-height: 400px; width: auto; max-width: 100%;" />
      <p class="text-muted mt-2"><small>Building lasting confidence through genuine relationships</small></p>
    </div>

    <div class="conclusion">
      <h4>Bottom Line</h4>
      <p><strong>Brand trust isn't built overnight—it's earned through transparency, reliability, and genuine relationships.</strong> By being open, consistent, and customer-centric from day one, your new company can inspire confidence that lasts for years.</p>
    </div>
  `,
  author: "Brand Strategy Team",
  date: "2025-10-15",
  readTime: "6 min read",
  category: "Brand Building",
  tags: ["Brand Trust", "Customer Confidence", "Transparency", "Social Proof", "Customer Support", "Data Security"],
  additionalImages: [Startup1, Startup2, Startup3, Startup4]
}
];


const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme(); 
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
    <nav 
      className="navbar border-bottom py-3"
      style={{ 
        backgroundColor: "var(--navbar-bg)",
        borderColor: "var(--border-color)"
      }}
    >
      <Container>
        <div className="d-flex justify-content-between w-100 align-items-center">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src={logo} alt="NEXOVATE Logo" height="40" className="me-2" />
            <span 
              className="fw-bold" 
              style={{ color: "var(--text-color)" }}
            >
              NEXOVATE
            </span>
          </Link>
          
          <Link to="/#blog" className="text-decoration-none">
            <Button 
              variant={isDark ? "outline-light" : "outline-primary"} 
              className="d-flex align-items-center gap-2"
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
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)",
    minHeight: "100vh"
  }}
>
  <Row className="justify-content-center">
    <Col lg={9}>
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none" style={{ color: "var(--text-color)" }}>
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/#blog" className="text-decoration-none" style={{ color: "var(--text-color)" }}>
              Blogs
            </Link>
          </li>
          <li 
            className="breadcrumb-item active" 
            style={{ color: "var(--text-color)" }}
          >
            {blog.title.substring(0, 30)}...
          </li>
        </ol>
      </nav>

      <div className="text-center mb-5">
        <Badge 
          bg={isDark ? "secondary" : "light"} 
          text={isDark ? "light" : "dark"} 
          className="mb-3 px-3 py-2"
        >
          {blog.category}
        </Badge>
        <h1 className="fw-bold display-6 mb-3" style={{ color: "var(--text-color)" }}>
          {blog.title}
        </h1>
        
        <div className="d-flex justify-content-center align-items-center gap-4 mb-3 flex-wrap">
          <div className="d-flex align-items-center gap-2" style={{ color: "var(--text-color)" }}>
            <Person size={16} />
            <span>By {blog.author}</span>
          </div>
          <div className="d-flex align-items-center gap-2" style={{ color: "var(--text-color)" }}>
            <Calendar size={16} />
            <span>{new Date(blog.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="d-flex align-items-center gap-2" style={{ color: "var(--text-color)" }}>
            <Clock size={16} />
            <span>{blog.readTime}</span>
          </div>
        </div>
      </div>

      {/* Share section update */}
      <div 
        className="d-flex justify-content-between align-items-center mb-5 p-3 rounded-3"
        style={{ 
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--border-color)"
        }}
      >
        <div className="d-flex align-items-center gap-2">
          <Share size={18} style={{ color: "var(--text-color)" }} />
          <span className="fw-semibold" style={{ color: "var(--text-color)" }}>
            Share this article:
          </span>
        </div>
        <div className="d-flex gap-2">
          <Button 
            variant={isDark ? "outline-light" : "outline-primary"} 
            size="sm"
            onClick={() => shareBlog('facebook')}
            className="d-flex align-items-center gap-1"
          >
            <Facebook size={16} />
            Facebook
          </Button>
          <Button 
            variant={isDark ? "outline-light" : "outline-info"} 
            size="sm"
            onClick={() => shareBlog('twitter')}
            className="d-flex align-items-center gap-1"
          >
            <Twitter size={16} />
            Twitter
          </Button>
          <Button 
            variant={isDark ? "outline-light" : "outline-primary"} 
            size="sm"
            onClick={() => shareBlog('linkedin')}
            className="d-flex align-items-center gap-1"
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
    color: "var(--text-color)"
  }}
/>

{/* Tags section update */}
<div className="mb-5">
  <h5 className="fw-semibold mb-3" style={{ color: "var(--text-color)" }}>Tags:</h5>
  <div className="d-flex flex-wrap gap-2">
    {blog.tags.map((tag, index) => (
      <Badge 
        key={index} 
        bg={isDark ? "dark" : "outline-secondary"} 
        text={isDark ? "light" : "dark"} 
        className="px-3 py-2 border"
        style={{ borderColor: "var(--border-color)" }}
      >
        #{tag}
      </Badge>
    ))}
  </div>
</div>

{/* Author card update */}
<Card 
  className="border-0 rounded-4"
  style={{ backgroundColor: "var(--card-bg)" }}
>
  <Card.Body className="p-4">
    <Row className="align-items-center">
      <Col xs="auto">
        <div 
          className="rounded-circle d-flex align-items-center justify-content-center text-white"
          style={{ 
            width: '60px', 
            height: '60px',
            backgroundColor: "var(--primary-color)"
          }}
        >
          <Person size={24} />
        </div>
      </Col>
      <Col>
        <h5 className="fw-bold mb-1" style={{ color: "var(--text-color)" }}>
          {blog.author}
        </h5>
        <p className="mb-0" style={{ color: "var(--secondary-color)" }}>
          Startup Legal Expert at CGEC ECELL
        </p>
        <small style={{ color: "var(--secondary-color)" }}>
          Specializing in business validation and legal foundations for startups
        </small>
      </Col>
    </Row>
  </Card.Body>
</Card>

<div 
  className="d-flex justify-content-between mt-5 pt-4"
  style={{ borderTop: "1px solid var(--border-color)" }}
>
  <Button 
    variant={isDark ? "outline-light" : "outline-secondary"} 
    onClick={() => navigate(-1)}
    className="d-flex align-items-center gap-2"
  >
    <ArrowLeft size={16} />
    Previous
  </Button>
  
  <Link to="/#blog">
    <Button variant={isDark ? "outline-light" : "primary"}>
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
    backgroundColor: "var(--footer-bg)",
    color: "var(--footer-text)"
  }}
>
  <Container>
    <Row>
      <Col md={6}>
        <div className="d-flex align-items-center mb-3">
          <img src={logo} alt="NEXOVATE Logo" height="30" className="me-2" />
          <span className="fw-bold">NEXOVATE - CGEC ECELL</span>
        </div>
        <p className="mb-0">
          Empowering entrepreneurs and fostering innovation in the community.
        </p>
      </Col>
      <Col md={6} className="text-md-end">
        <p className="mb-0">
          &copy; 2024 NEXOVATE. All rights reserved.
        </p>
      </Col>
    </Row>
  </Container>
</footer>

   <style>
  {`
    .blog-content h3 {
      color: var(--text-color);
      margin-top: 2.5rem;
      margin-bottom: 1.2rem;
      border-left: 4px solid var(--primary-color);
      padding-left: 1rem;
    }
    
    .blog-content h4 {
      color: var(--text-color);
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    
    .blog-content h5 {
      color: var(--text-color);
      margin-top: 1.5rem;
      margin-bottom: 0.8rem;
    }
    
    .blog-content ul, .blog-content ol {
      margin-bottom: 1.5rem;
      padding-left: 2rem;
      color: var(--text-color);
    }
    
    .blog-content li {
      margin-bottom: 0.5rem;
      color: var(--text-color);
    }
    
    .feature-point {
      background: var(--card-bg);
      padding: 1.2rem;
      border-radius: 0.5rem;
      margin: 1rem 0;
      border-left: 4px solid var(--primary-color);
      color: var(--text-color);
    }
    
    .benefit-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      margin: 1.5rem 0;
    }
    
    .benefit-item {
      background: var(--section-bg);
      padding: 1rem;
      border-radius: 0.5rem;
      border-left: 4px solid var(--primary-color);
      color: var(--text-color);
    }
    
    .tip-section {
      background: var(--card-bg);
      padding: 1rem;
      border-radius: 0.5rem;
      margin: 1rem 0;
      border-left: 4px solid var(--secondary-color);
      color: var(--text-color);
    }
    
    .compliance-tips {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1rem;
      margin: 1.5rem 0;
    }
    
    .compliance-item {
      background: var(--section-bg);
      padding: 1rem;
      border-radius: 0.5rem;
      border-left: 4px solid var(--primary-color);
      color: var(--text-color);
    }
    
    .conclusion {
      background: var(--section-bg);
      padding: 1.5rem;
      border-radius: 0.5rem;
      margin: 2rem 0;
      border: 1px solid var(--primary-color);
      color: var(--text-color);
    }
    
    .key-points {
      background: var(--card-bg);
      padding: 1.5rem;
      border-radius: 0.5rem;
      margin: 2rem 0;
      border-left: 4px solid var(--primary-color);
      color: var(--text-color);
    }
    
    .highlight-box {
      background: var(--section-bg);
      padding: 1.5rem;
      border-radius: 0.5rem;
      border-left: 4px solid var(--primary-color);
      font-weight: 600;
      font-size: 1.1rem;
      margin: 2rem 0;
      color: var(--text-color);
    }
    
    .lead {
      font-size: 1.25rem;
      font-weight: 300;
      line-height: 1.7;
      color: var(--text-color);
      background: var(--card-bg);
      padding: 1.5rem;
      border-radius: 0.5rem;
      border-left: 4px solid var(--primary-color);
    }
    
    .blog-content img {
      max-width: 100%;
      height: auto;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      margin: 1.5rem 0;
    }
    
    .text-center.my-5 {
      background: var(--card-bg);
      padding: 1.5rem;
      border-radius: 0.5rem;
      margin: 2rem 0;
    }
    
    .blog-content strong {
      color: var(--text-color);
      font-weight: 600;
    }

    /* Breadcrumb customization */
    .breadcrumb-item.active {
      color: var(--text-color) !important;
    }
    
    .breadcrumb-item a {
      color: var(--primary-color) !important;
    }
  `}
</style>
    </>
  );
};

export default BlogDetails;
