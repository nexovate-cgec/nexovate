import Eureca from "../assets/images/eurecaa.jpg";
import Eureca2026 from "../assets/Events/eureka-2026/eurekA.jpeg";
import Nec from "../assets/images/nec.jpeg";
import Entrepreneurship from "../assets/images/Entrepreneurship.jpg";
import social from "../assets/images/social.png";
import thinkLikeEnt from "../assets/Events/Think_Like_an_Entrepreneur/1.jpeg";
import bPlane from "../assets/Events/bPlane.jpeg";
import illu from "../assets/Events/illuu.png";

export const events = [
  {
    id: "nec2k25",
    title: "NEC 2025",
    subtitle: "National Entrepreneurship Challenge - Turn Vision into Action",
    date: "July 27, 2025",
    time: "10:00 AM - 04:00 PM",
    venue: "Main Auditorium (Seminar Hall)",
    category: "Competition",
    status: "Completed",
    compleOrNot: "Event Finished!",
    src: "#",
    image: Nec,
    overview: "National Entrepreneurship Challenge (NEC) 2025 is an intensive ideation and business modeling challenge where teams build scalable business models around disruptive tech ideas.",
    highlights: [
      "National Level Pitching Stage",
      "Direct Incubation Opportunities for Winners",
      "Mentorship Round with Startup Founders",
      "Comprehensive Investor Deck Evaluation"
    ],
    timeline: [
      { time: "10:00 AM", title: "Orientation & Problem Briefing" },
      { time: "11:30 AM", title: "Pitch Deck Preparation Session" },
      { time: "02:00 PM", title: "Final Pitch Deck Presentations" },
      { time: "03:30 PM", title: "Winner Announcement" }
    ],
    prizes: ["Funding Mentorship", "Direct Entry to State Incubation Program"],
    contacts: [{ name: "E-Cell Lead", number: "+91 747 905 9885" }]
  },
  {
    id: "eureka2k25",
    title: "EUREKA 2025",
    subtitle: "Annual Student Innovation & Tech Expo",
    date: "Aug 16, 2025",
    time: "09:30 AM - 04:30 PM",
    venue: "Central Library Lab",
    category: "Exhibition",
    status: "Completed",
    compleOrNot: "Event Finished!",
    src: "#",
    image: Eureca,
    overview: "The 2025 edition of EUREKA brought over 50+ hardware and software projects to light, ranging from automated agritech sensors to smart healthcare robotics.",
    highlights: [
      "Hardware & Software Working Demos",
      "Student Research Paper Poster Presentations",
      "Interactive Q&A Session with Academic Jury"
    ],
    timeline: [
      { time: "09:30 AM", title: "Exhibition Opening" },
      { time: "12:00 PM", title: "Jury Project Reviews" },
      { time: "03:30 PM", title: "Felicitation Ceremony" }
    ],
    prizes: ["Best Hardware Project", "Best Software Solution"],
    contacts: [{ name: "Event Desk", number: "+91 747 905 9885" }]
  },
  {
    id: "whats-problem",
    title: "What's the Problem? 🧠",
    subtitle: "Startup Problem Identification & Pitch Workshop",
    date: "Sept 3, 2025",
    time: "02:00 PM - 05:00 PM",
    venue: "Seminar Room AC102",
    category: "Workshop",
    status: "Completed",
    compleOrNot: "Event Finished!",
    src: "#",
    image: Entrepreneurship,
    overview: "Got an idea? Learn how to spot real market problems, structure business hypotheses, and pitch your startup ideas effectively to angel investors.",
    highlights: [
      "Interactive Problem Identification Frameworks",
      "Elevator Pitch Training",
      "Live Mock Pitching Sessions"
    ],
    timeline: [
      { time: "02:00 PM", title: "Workshop Keynote: Finding Pain Points" },
      { time: "03:15 PM", title: "Group Discussion & Strategy Building" },
      { time: "04:30 PM", title: "Lightning Pitches & Feedback" }
    ],
    prizes: ["Certificate of Merit", "Exclusive Mentorship Voucher"],
    contacts: [{ name: "Workshop Host", number: "+91 747 905 9885" }]
  },
  {
    id: "social-media",
    title: "Social Media Mashup 🧠✨",
    subtitle: "3-Word Startup Ideation Madness",
    date: "Sept 6, 2025",
    time: "06:00 PM - 08:00 PM",
    venue: "Online (Discord & Instagram)",
    category: "Social Event",
    status: "Completed",
    compleOrNot: "Event Finished!",
    src: "#",
    image: social,
    overview: "A fun and quirky event where participants receive 3 completely random words and have 30 minutes to create a wildly creative startup concept and meme pitch.",
    highlights: [
      "Gamified Ideation Format",
      "Community Voting on Social Media",
      "Viral Startup Elevator Pitches"
    ],
    timeline: [
      { time: "06:00 PM", title: "Random Word Prompt Release" },
      { time: "06:45 PM", title: "Submissions Deadline" },
      { time: "07:30 PM", title: "Live Streaming & Audience Voting" }
    ],
    prizes: ["Fun Startup Swag Kit", "Social Media Spotlight Feature"],
    contacts: [{ name: "Social Media Team", number: "+91747 905 9885" }]
  },
  {
    id: "think-like-entrepreneur",
    title: "Think Like An Entrepreneur 💡",
    subtitle: "Unlocking The Founders Mindset",
    date: "May 10th, 2026",
    time: "06:00 PM - 08:00 PM",
    venue: "Google Meet (Online)",
    category: "Session",
    status: "Completed",
    compleOrNot: "Event Finished!",
    src: "#",
    image: thinkLikeEnt,
    overview: "An engaging introductory session designed to reshape how young innovators perceive market challenges, risk analysis, and business scalability.",
    highlights: [
      "Entrepreneurial Thinking Quiz Rounds",
      "Real-World Case Study Analysis",
      "Interactive Q&A on Scaling Early Stage Ideas"
    ],
    timeline: [
      { time: "06:00 PM", title: "Welcome & Speaker Intro" },
      { time: "06:20 PM", title: "Interactive Mindset Quiz Round" },
      { time: "07:10 PM", title: "Case Study Breakdown" },
      { time: "07:45 PM", title: "Open Floor Q&A" }
    ],
    prizes: ["Participation E-Certificates"],
    contacts: [{ name: "E-Cell CGEC", number: "+91747 905 9885" }]
  },
  {
    id: "b-plan",
    title: "B-Plan Workshop & Pitching 🚀",
    subtitle: "Think Fast. Plan Smart. Pitch Sharp.",
    date: "Jun 8th, 2026",
    time: "04:00 PM - 07:00 PM",
    venue: "Room No. : AC112",
    category: "Workshop",
    status: "Completed",
    compleOrNot: "Event Finished!",
    src: "#",
    image: bPlane,
    overview: "B-Plan is an intensive entrepreneurship challenge where participants are given surprise business scenarios and must engineer a complete business plan under strict time constraints.",
    highlights: [
      "Real-time problem statement reveal",
      "Instant business model canvas building",
      "Financial projection & go-to-market strategy exercises",
      "Live pitching to a panel of expert judges"
    ],
    timeline: [
      { time: "04:00 PM", title: "Problem Statement Reveal (5 Mins)" },
      { time: "04:05 PM", title: "Business Plan Building Phase (45 Mins)" },
      { time: "05:00 PM", title: "Pitch Deck Submission Deadline" },
      { time: "05:15 PM", title: "Final Pitch Presentations (15 Mins / Team)" },
      { time: "06:45 PM", title: "Jury Feedback & Results Declaration" }
    ],
    prizes: ["Winner & Runner-up Trophies", "Mentorship Incubation Seat", "Certificates of Excellence"],
    contacts: [
      { name: "Event Lead", number: "+91 747 905 9885" },
      { name: "Registration Coordinator", number: "+91 9733091268" }
    ]
  },
  {
    id: "eureka2k26",
    title: "EUREKA 2026",
    subtitle: "CGEC's Flagship Innovation Showcase & Research Expo",
    date: "Aug 22, 2026",
    time: "09:30 AM - 05:00 PM",
    venue: "Central Library Lab",
    category: "Exhibition",
    status: "Completed",
    compleOrNot: "Event Finished!",
    src: "#",
    image: Eureca2026,
    overview: "EUREKA 2026 brings together the brightest minds of CGEC to demonstrate transformative engineering innovations, AI-driven solutions, and prototype models to industry veterans.",
    highlights: [
      "Live Prototype Demos across AI, IoT, Robotics & Clean Energy",
      "Keynote sessions by renowned Tech Entrepreneurs",
      "High-stakes Innovation Pitch Challenge with Cash Prizes",
      "Networking Hub with Industry Leaders & Incubation Centers"
    ],
    timeline: [
      { time: "09:30 AM", title: "Inauguration & Keynote Address" },
      { time: "10:30 AM", title: "Project Exhibition Round 1" },
      { time: "01:30 PM", title: "Networking Lunch & Interactive Demos" },
      { time: "03:00 PM", title: "Final Pitching & Jury Evaluation" },
      { time: "04:30 PM", title: "Award Ceremony & Closing Note" }
    ],
    prizes: ["Grand Champion Trophy + Cash Prize", "Runner Up Award", "Best Sustainable Innovation Special Prize"],
    contacts: [
      { name: "Student Coordinator", number: "+91 747 905 9885" },
      { name: "Tech Lead", number: "+91 9733091268" }
    ]
  },
  
    {
  id: "illuminate",
  title: "Illuminate Workshop 2026",
  subtitle: "In Association with E-Cell, IIT Bombay & Nexovate",
  category: "Workshop & Entrepreneurship",
  date: "TBD (To Be Notified Later)",
  time: "To Be Announced",
  venue: "TBD (To Be Notified Later)",
  status: "Upcoming",
  compleOrNot: "Register Now",
  src: "/apply/illuminate",
  image: illu,
  fee: "₹800 ONLY",
  goodies: "Exciting Goodies Worth ₹600",
  overview: "Illuminate is a national flagship one-day immersive entrepreneurship workshop organized by E-Cell, IIT Bombay. Designed to take you 'From Ideas to Impact', it provides hands-on practical training, insights from real entrepreneurs, startup toolkits, and certification.",
  highlights: [
    "Introduction to Entrepreneurship & Team Formation",
    "Idea Generation & Problem Identification",
    "Business Model Canvas (BMC) Workshop",
    "Finance for Entrepreneurs & Insights into Startup Development",
    "Pitching Workshop & QnA",
    "Official Certification by E-Cell, IIT Bombay",
    "Startup Kit (Includes Business Model Canvas & more)",
    "Exciting Goodies worth ₹600 for all registered participants"
  ],
  timeline: [
    { time: "Session 1", title: "Introduction & Team Formation" },
    { time: "Session 2", title: "Idea Generation & Business Model Canvas (BMC)" },
    { time: "Session 3", title: "Finance & Startup Development Insights" },
    { time: "Session 4", title: "Pitching Workshop, QnA & Certification" }
  ],
  rules: [
    "Registration fee is ₹800 per participant.",
    "Open to all students interested in entrepreneurship and startup building.",
    "Participants must complete registration with valid contact details."
  ],
  prizes: [
    "Official Certificate from E-Cell, IIT Bombay",
    "Exclusive Startup Kit containing Business Model Canvas & resources",
    "Goodies worth ₹600 for all participants",
    "Direct learning and mentorship from experts and real entrepreneurs"
  ],
  contacts: [
    { name: "E-Cell IIT Bombay Desk", number: "+91 747 905 9885" },
    { name: "E-Cell CGEC Coordinator", number: "+91 9733091268" }
  ]
}
];

export const getEventById = (id) => events.find((event) => String(event.id) === String(id));
export const getUpcomingEvents = () => events.filter((event) => event.status.toLowerCase() === "upcoming");
export const getCompletedEvents = () => events.filter((event) => event.status.toLowerCase() === "completed");
export const getEventsByCategory = (category) => events.filter((event) => event.category.toLowerCase() === category.toLowerCase());

export default events;