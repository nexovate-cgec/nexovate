// import React from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import logo from '../assets/images/logo.png';
// import Blog1 from "../assets/Blogs/1blog.jpg";
// import Blog2 from "../assets/Blogs/blog2.jpeg";
// import Blog3 from "../assets/Blogs/blog3.jpeg";
// import Blog4 from "../assets/Blogs/blog4.jpeg";

// const blogData = [
//   {
//     id: 1,
//     title: "Nykaa: From a Pharmacy to a Billion-Dollar Beauty Empire",
//     img: Blog1,
//     desc: "In 2012, Falguni Nayar, a former investment banker in her late 40s, took a bold leap into entrepreneurship by launching Nykaa, an online beauty and wellness platform.",
//     link: "https://www.linkedin.com/posts/nexovate-cgec_nykaa-from-a-pharmacy-to-a-billion-dollar-activity-7368829355424239617-NRKj?utm_source=share&utm_medium=member_android&rcm=ACoAAFyQZzEBENoE50hDfGiNDhRm_WitodC4Xeg"
//   }, 
//   {
//     id: 2,
//     title: "Scalability vs. Sustainability: The Entrepreneur’s Dilemma",
//     img: Blog2,
//     desc: "One of the biggest challenges every entrepreneur faces is deciding between scaling fast and building sustainably. Scalability is about rapid expansion with minimal additional cost.",
//     link: "https://www.linkedin.com/posts/nexovate-cgec_scalability-vs-sustainability-the-entrepreneur-activity-7368144343850823681-FFd0?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFyQZzEBENoE50hDfGiNDhRm_WitodC4Xeg"
//   }, 
//   {
//     id: 3,
//     title: "Angel Investors in Entrepreneurship",
//     img: Blog3,
//     desc: "Entrepreneurship often begins with innovative ideas but limited financial resources. In the early stages, when banks hesitate to lend and venture capitalists are unwilling to invest in untested businesses, angel investors emerge as crucial supporters. An angel investor is typically a wealthy individual who invests personal funds into startups in exchange for equity or convertible debt. Unlike institutional investors, angels take decisions based on trust in the entrepreneur’s vision, potential of the business model, and personal interest in innovation.",
//     link: "https://www.linkedin.com/posts/nexovate-cgec_angel-investors-in-entrepreneurship-entrepreneurship-activity-7367740158927970304-gywx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFyQZzEBENoE50hDfGiNDhRm_WitodC4Xeg"
//   }, 
//   {
//     id: 4,
//     title: "Disruptive Innovation: Why Entire Industries Get Flipped Upside Down",
//     img: Blog4,
//     desc: "When industries collapse, it’s rarely because the leaders didn’t work hard enough. It’s usually because they failed to recognize disruption until it was too late.",
//     link: "https://www.linkedin.com/posts/nexovate-cgec_disruptive-innovation-why-entire-industries-activity-7369731446388711426-_uEG?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFyQZzEBENoE50hDfGiNDhRm_WitodC4Xeg"
//   }, 
// ];

// const truncateWords = (text, wordLimit) => {
//   const words = text.split(" ");
//   return words.length > wordLimit
//     ? words.slice(0, wordLimit).join(" ") + "..."
//     : text;
// };

// const BlogSection = () => {
//   return (
//     <section id="blog" style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
//       <Container>
//         <h2 className="text-center fw-bold mb-5">
//           Latest <span className="text-primary">Blogs</span>
//         </h2>
//         <Row>
//           {blogData.map((blog) => (
//             <Col md={4} className="mb-4" key={blog.id}>
//               <Card className="h-100 shadow-sm border-0 rounded-4 position-relative">
//                 <img
//                   src={logo}
//                   alt="Logo"
//                   style={{
//                     position: "absolute",
//                     borderRadius: "50%",
//                     top: "12px",
//                     right: "12px",
//                     width: "40px",
//                     height: "40px",
//                     objectFit: "contain",
//                     opacity: 0.9,
//                   }}
//                 />

//                 <Card.Img
//                   variant="top"
//                   src={blog.img}
//                   alt={blog.title}
//                   style={{
//                     borderTopLeftRadius: "1rem",
//                     borderTopRightRadius: "1rem",
//                     height: "200px",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <Card.Body>
//                   <Card.Title className="fw-semibold">{blog.title}</Card.Title>
//                   <Card.Text>{truncateWords(blog.desc, 15)}</Card.Text>
//                   <Button
//                     variant="dark"
//                     className="rounded-pill"
//                     target="_blank"
//                     href={blog.link}
//                   >
//                     Read More
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default BlogSection;



import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Change this import
import logo from '../assets/images/logo.png';
import Blog1 from "../assets/Blogs/1blog.jpg";
import Blog2 from "../assets/Blogs/blog2.jpeg";
import Blog3 from "../assets/Blogs/blog3.jpeg";
import Blog4 from "../assets/Blogs/blog4.jpeg";

const blogData = [
  {
    id: 1,
    title: "Nykaa: From a Pharmacy to a Billion-Dollar Beauty Empire",
    img: Blog1,
    desc: "In 2012, Falguni Nayar, a former investment banker in her late 40s, took a bold leap into entrepreneurship by launching Nykaa, an online beauty and wellness platform.",
    fullContent: "Full blog content here...", // Add full content
    author: "Author Name",
    date: "2024-01-15"
  }, 
  {
    id: 2,
    title: "Scalability vs. Sustainability: The Entrepreneur's Dilemma",
    img: Blog2,
    desc: "One of the biggest challenges every entrepreneur faces is deciding between scaling fast and building sustainably.",
    fullContent: "Full blog content here...",
    author: "Author Name", 
    date: "2024-01-10"
  },
  // ... other blogs with fullContent added
];

const truncateWords = (text, wordLimit) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const BlogSection = () => {
  return (
    <section id="blog" style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
      <Container>
        <h2 className="text-center fw-bold mb-5">
          Latest <span className="text-primary">Blogs</span>
        </h2>
        <Row>
          {blogData.map((blog) => (
            <Col md={4} className="mb-4" key={blog.id}>
              <Card className="h-100 shadow-sm border-0 rounded-4 position-relative">
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
                    opacity: 0.9,
                  }}
                />

                <Card.Img
                  variant="top"
                  src={blog.img}
                  alt={blog.title}
                  style={{
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body>
                  <Card.Title className="fw-semibold">{blog.title}</Card.Title>
                  <Card.Text>{truncateWords(blog.desc, 15)}</Card.Text>
                  
                  {/* Change Button to Link */}
                  <Link to={`/blog/${blog.id}`}>
                    <Button variant="dark" className="rounded-pill">
                      Read More
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;