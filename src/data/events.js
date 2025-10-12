import Eureca from "../assets/images/eurecaa.jpg";
import Nec from "../assets/images/nec.jpeg";
import Entrepreneurship from "../assets/images/Entrepreneurship.jpg";
import social from "../assets/images/social.png";
export const events = [
  {
    id: 1,
    title: "NEC 2025",
    date: "July 27, 2025",
    description: "A tech-based ideation competition to bring ideas into action.",
    fullDescription: "A tech-based ideation competition to bring ideas into action.",
    image: Nec,
    category: "competition",
    venue: "Main Auditorium",
    time: "10:00 AM",
    compleOrNot:"Event Finished..!",
    src: "#",
    status: "upcoming",
    color:"danger"
  },
  {
    id: 2,
    title: "EUREKA 2025",
    date: "Aug 16, 2025",
    description: "Eureca is conducted by CGEC featuring innovative projects and research presentations.",
    image: Eureca,
    category: "exhibition",
    venue: "Tech Park",
    time: "9:30 AM",
    compleOrNot:"Event Finished..!",
    src: "#",
    status: "upcoming",
    color:"danger"
  },
  {
    id: 3,
    title: "Entrepreneurship Challenge 2025 🧠",
    date: "Sept 3, 2025",
    description: "🚀 Got ideas? Let's solve big problems together! Pitch your startup ideas to industry experts.",
    image: Entrepreneurship,
    category: "workshop",
    venue: "Business Incubator",
    time: "2:00 PM",
    compleOrNot:"Event Finished..!",
    src: "#",
    status: "upcoming",
    color:"danger"
  },
  {
    id: 4,
    title: "SOCIAL MEDIA EVENT 🧠✨",
    date: "Sept 6, 2025",
    description: "Who knew 3 random words could make you the next Elon Musk? 🤯✨ Drop your wildest startup mashups & let the madness begin! 🚀🤣",
    image: social,
    category: "social",
    venue: "Online",
    time: "6:00 PM",
    compleOrNot:"Event Finished..!",
    src: "#",
    status: "upcoming",
    color:"danger"
  },

];

// Helper functions
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