import Blog1 from "../assets/Blogs/2.jpg";
import Blog2 from "../assets/Blogs/blog31.png";
import Blog3 from "../assets/Blogs/blog44.png";
import Blog4 from "../assets/Blogs/blog51.png";

export const blogData = [
  {
    id: 1,
    title: "From Spark to Startup: Validating Your Idea and Getting the Legal Basics Right",
    img: Blog1,
    desc: "Great businesses don't begin with a full bank account—they begin with a tested idea and a solid foundation. Whether you're planning an app, a café, or a niche service, two early steps can save you time, money, and stress: validate the idea and cover your legal bases.",
    fullContent: `
      <p>Great businesses don't begin with a full bank account—they begin with a tested idea and a solid foundation. Whether you're planning an app, a café, or a niche service, two early steps can save you time, money, and stress: validate the idea and cover your legal bases.</p>
      
      <h3>Why Validate Your Idea?</h3>
      <p>Before investing significant time and resources, it's crucial to test whether your business idea solves a real problem for potential customers. Many entrepreneurs skip this step and end up building products that nobody wants to buy.</p>
      
      <h3>Legal Foundations</h3>
      <p>Setting up the proper legal structure from the beginning can protect your personal assets and make your business more attractive to investors later on.</p>
    `,
    author: "Author Name",
    date: "2025-09-24",
    category: "Startup Basics",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Rise of Solopreneurs: Building a Business of One",
    img: Blog2,
    desc: "Entrepreneurship is no longer defined by large teams, big offices, or heavy investment. A growing wave of solopreneurs—founders who launch and run businesses entirely on their own—is reshaping the startup landscape worldwide.",
    fullContent: `
      <p>Entrepreneurship is no longer defined by large teams, big offices, or heavy investment. A growing wave of solopreneurs—founders who launch and run businesses entirely on their own—is reshaping the startup landscape worldwide.</p>
      
      <h3>What is a Solopreneur?</h3>
      <p>Unlike traditional entrepreneurs who build teams and seek funding, solopreneurs prefer to maintain full control and operate independently using modern tools and automation.</p>
      
      <h3>Tools for Success</h3>
      <p>From project management to marketing automation, today's solopreneur has access to powerful tools that make solo operation not just possible but profitable.</p>
    `,
    author: "Author Name",
    date: "2025-10-01",
    category: "Solopreneurship",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Building a Business Plan That Investors Will Actually Read",
    img: Blog3,
    desc: "A business plan isn't a 50-page homework assignment—it's a sales document. Its job is to convince busy investors that your idea is real, scalable, and worth their time. Here's how to craft a plan they'll actually finish reading.",
    fullContent: "A business plan isn't a 50-page homework assignment—it's a sales document. Its job is to convince busy investors that your idea is real, scalable, and worth their time. Here's how to craft a plan they'll actually finish reading.",
    author: "Author Name",
    date: "2025-10-09",
    category: "Funding",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Micro-Entrepreneurship: The Big Impact of Small Ventures",
    img: Blog4,
    desc: "Gone are the days when 'entrepreneur' meant a large startup with hefty funding. Across towns and neighbourhoods, micro-entrepreneurs—people running hyper-focused small businesses—are making significant impacts.",
    fullContent:"Gone are the days when 'entrepreneur' meant a large startup with hefty funding. Across towns and neighbourhoods, micro-entrepreneurs—people running hyper-focused small businesses—are making significant impacts.",
    author: "Author Name",
    date: "2025-10-11",
    category: "Micro Business",
    readTime: "3 min read"
  },
  {
    id: 5,
    title: "Smart Ways to Build Brand Trust as a New Company",
    img: Blog4,
    desc: "In a crowded marketplace, customers don't just buy products—they buy confidence. For a young business, earning trust can feel like climbing a mountain, but the right strategies can accelerate the climb.",
    fullContent:"In a crowded marketplace, customers don't just buy products—they buy confidence. For a young business, earning trust can feel like climbing a mountain, but the right strategies can accelerate the climb.",
    author: "Author Name",
    date: "2025-10-15",
    category: "Branding",
    readTime: "5 min read"
  }
];

export const getBlogById = (id) => {
  return blogData.find(blog => blog.id === parseInt(id));
};

export const getRecentBlogs = (limit = null) => {
  const sortedBlogs = [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date));
  return limit ? sortedBlogs.slice(0, limit) : sortedBlogs;
};

export const getBlogsByCategory = (category) => {
  return blogData.filter(blog => blog.category === category);
};

export default blogData;