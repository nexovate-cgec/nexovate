import Eureca from "../assets/images/eurecaa.jpg";
import Nec from "../assets/images/nec.jpeg";
import Entrepreneurship from "../assets/images/Entrepreneurship.jpg";
import social from "../assets/images/social.png";
import thinkLikeEnt from "../assets/Events/Think_Like_an_Entrepreneur/1.jpeg";


export const events = [
  {
    id: 1,
    title: "NEC 2025",
    date: "July 27, 2025",
    description: "A tech-based ideation competition to bring ideas into action.",
    fullDescription: "National Entrepreneurship Challenge (NEC) 2025 is a premier tech-based competition where participants transform innovative ideas into actionable business solutions. Teams compete through ideation, prototype development, and final pitching to industry experts for cash prizes and incubation opportunities.",
    image: Nec,
    category: "competition",
    venue: "Update In Group",
    time: "10:00 AM",
    compleOrNot: "Event Finished!",
    src: "#",
    status: "Completed",
    color: "danger"
  },
  {
    id: 2,
    title: "EUREKA 2025",
    date: "Aug 16, 2025",
    description: "Eureca is conducted by CGEC featuring innovative projects and research presentations.",
    fullDescription: "EUREKA 2025 is CGEC's annual innovation exhibition showcasing student projects across AI, IoT, robotics, and renewable energy. Features live demonstrations, technical workshops, industry interactions, and awards for the most innovative projects presented.",
    image: Eureca,
    category: "exhibition",
    venue: "Update In Group",
    time: "9:30 AM",
    compleOrNot: "Event Finished!",
    src: "#",
    status: "Completed",
    color: "danger"
  },
  {
    id: 3,
    title: "Group discussion What's the Problem?🧠",
    date: "Sept 3, 2025",
    description: "🚀 Got ideas? Let's solve big problems together! Pitch your startup ideas to industry experts.",
    fullDescription: "An intensive workshop and pitching competition helping aspiring entrepreneurs transform ideas into viable businesses. Includes sessions on business modeling, pitch creation, funding strategies, and live pitching to investors for mentorship and support opportunities.",
    image: Entrepreneurship,
    category: "workshop",
    venue: "Update In Group",
    time: "2:00 PM",
    compleOrNot: "Event Finished!",
    src: "#",
    status: "Completed",
    color: "danger"
  },
  {
    id: 4,
    title: "SOCIAL MEDIA EVENT 🧠✨",
    date: "Sept 6, 2025",
    description: "Who knew 3 random words could make you the next Elon Musk? 🤯✨ Drop your wildest startup mashups & let the madness begin! 🚀🤣",
    fullDescription: "A fun and creative online event where participants combine random words to generate unique startup ideas. Showcase your creativity, build innovative concepts, and compete for the most original business mashup in this engaging social media competition.",
    image: social,
    category: "social",
    venue: "Update In Group",
    time: "6:00 PM",
    compleOrNot: "Event Finished!",
    src: "#",
    status: "Completed",
    color: "danger"
  },
  {
    id: 5,
    title: "✨🚀Think Like An Entrepreneur 💡",
    date: "May 10th, 2026",
    description: "🚀✨ E-CELL CGEC PRESENTS ✨🚀Think Like An Entrepreneur 💡Every successful startup begins with a single idea — and every entrepreneur begins with a different way of thinking.",
    fullDescription: "🚀✨ E-CELL CGEC PRESENTS ✨🚀Think Like An Entrepreneur 💡Every successful startup begins with a single idea — and every entrepreneur begins with a different way of thinking. E-Cell CGEC invites all newcomers to join an exciting interactive session where you will:⚡ Test your entrepreneurial thinking through fun quiz rounds⚡ Learn the basics of entrepreneurship and innovation⚡ Explore how entrepreneurs identify problems and create solutions⚡ Develop a mindset that helps you think beyond the ordinary This event is not just a competition — it is the first step of your entrepreneurial journey. 🌱",
    image: thinkLikeEnt,
    category: "social",
    venue: "Google Meet",
    time: "6:00 PM",
    compleOrNot: "Event Finished!",
    src: "#",
    status: "Completed",
    color: "danger"
  },
];

export const getEventById = (id) => {
  return events.find(event => event.id === parseInt(id));
};

export const getUpcomingEvents = () => {
  return events.filter(event => event.status === "upcoming");
};

export const getCompletedEvents = () => {
  return events.filter(event => event.status === "Completed");
};

export const getEventsByCategory = (category) => {
  return events.filter(event => event.category === category);
};

export default events;