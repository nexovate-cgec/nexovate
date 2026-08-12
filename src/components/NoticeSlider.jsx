import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaBullhorn } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NoticeSlider.css";

const notices = [
  {
    title: "🚀 Upcoming Event",
    message: "EUREKA! 2026.",
    linkText: "Register Now",
    linkUrl: "/eureka-2026",
  },
];

const NoticeSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (notices.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % notices.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="notice-slider-wrapper">
      <div className="notice-viewport">
        <div
          className="notice-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {notices.map((notice, i) => (
            <div className="notice-slide" key={i}>
              <div className="notice-card">
                <div className="notice-icon">
                  <FaBullhorn />
                </div>

                <div className="notice-content">
                  <h6>{notice.title}</h6>
                  <p>{notice.message}</p>
                </div>

                <div className="notice-action">
                  <Link to={notice.linkUrl}>{notice.linkText}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default NoticeSlider;


























// import React, { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";
// import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import "./NoticeSlider.css";

// // এখানে আপনার পোস্টারের ছবি, টাইটেল, মেসেজ এবং লিঙ্ক দিন
// const notices = [
//   {
//     image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
//     title: "EUREKA! 2026",
//     message: "Pitch your innovative ideas and win incubation support.",
//     date: "Coming Soon",
//     linkText: "Register Now",
//     linkUrl: "/eureka-2026",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1591123044064-63b49c636c3e?q=80&w=800&auto=format&fit=crop",
//     title: "Startup Bootcamp",
//     message: "Learn directly from top industry founders this weekend.",
//     date: "This Weekend",
//     linkText: "Join Session",
//     linkUrl: "/bootcamp",
//   },
// ];

// const NoticeSlider = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (notices.length <= 1) return;

//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % notices.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Container className="notice-slider-wrapper">
//       <div className="notice-viewport">
//         <div
//           className="notice-track"
//           style={{ transform: `translateX(-${index * 100}%)` }}
//         >
//           {notices.map((notice, i) => (
//             <div className="notice-slide" key={i}>
//               <div className="notice-card poster-ad-card">
                
//                 {/* বামপাশে পোস্টারের ছবি */}
//                 <div className="notice-poster-img-box">
//                   <img src={notice.image} alt={notice.title} />
//                 </div>

//                 {/* মাঝে টেক্সট এবং ডিটেইলস */}
//                 <div className="notice-content">
//                   <span className="notice-date-badge">
//                     <FaCalendarAlt /> {notice.date}
//                   </span>
//                   <h6>{notice.title}</h6>
//                   <p>{notice.message}</p>
//                 </div>

//                 {/* ডানে অ্যাকশন বাটন */}
//                 <div className="notice-action">
//                   <Link to={notice.linkUrl} className="ad-action-btn">
//                     {notice.linkText} <FaArrowRight className="ms-1" />
//                   </Link>
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default NoticeSlider;