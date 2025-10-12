import gallery1 from "../assets/Events/eureka25/1.jpeg";
import gallery2 from "../assets/Events/eureka25/2.jpeg";
import gallery3 from "../assets/Events/eureka25/3.jpeg";
import gallery4 from "../assets/Events/eureka25/4.jpeg";
import gallery5 from "../assets/Events/eureka25/15.jpeg";
import gallery6 from "../assets/Events/eureka25/6.jpeg";
import gallery7 from "../assets/Events/eureka25/7.jpeg";
import gallery8 from "../assets/Events/eureka25/8.jpeg";
import gallery9 from "../assets/Events/eureka25/9.jpeg";
import gallery10 from "../assets/Events/eureka25/10.jpeg";
import gallery11 from "../assets/Events/eureka25/11.jpeg";
import gallery12 from "../assets/Events/eureka25/12.jpeg";
import gallery13 from "../assets/Events/eureka25/13.jpeg";
import gallery14 from "../assets/Events/eureka25/14.jpeg";
import gallery16 from "../assets/Events/eureka25/16.jpeg";
import gallery17 from "../assets/Events/eureka25/17.jpeg";
import gallery18 from "../assets/Events/eureka25/18.jpeg";


export const galleryDataEureka = [
  {
    id: 1,
    src: gallery2,
    caption: "Winning Team",
    event: "EUREKA-2K25",
    category: "competition",
    date: "2025-08-16"
  },
  {
    id: 2,
    src: gallery1,
    caption: "2nd position holder",
    event: "EUREKA-2K25",
    category: "competition", 
    date: "2025-08-16"
  },
  {
    id: 3,
    src: gallery3,
    caption: "Prize Distribution",
    event: "EUREKA-2K25",
    category: "ceremony",
    date: "2025-08-16"
  },
  {
    id: 4,
    src: gallery4,
    caption: "Prize Distribution", 
    event: "EUREKA-2K25",
    category: "ceremony",
    date: "2025-08-16"
  },
  {
    id: 5,
    src: gallery5,
    caption: "Lecture Session",
    event: "EUREKA-2K25",
    category: "workshop",
    date: "2025-08-16"
  },
  {
    id: 6,
    src: gallery6,
    caption: "Lecture Session",
    event: "EUREKA-2K25", 
    category: "workshop",
    date: "2025-08-16"
  },
  {
    id: 7,
    src: gallery7,
    caption: "Lecture Session",
    event: "EUREKA-2K25",
    category: "workshop",
    date: "2025-08-16"
  },
  {
    id: 8,
    src: gallery11,
    caption: "Judges Panel",
    event: "EUREKA-2K25",
    category: "judges",
    date: "2025-08-16"
  },
  {
    id: 9,
    src: gallery18,
    caption: "Team 1 Presentation",
    event: "EUREKA-2K25",
    category: "teams",
    date: "2025-08-16"
  },
  {
    id: 10,
    src: gallery17,
    caption: "Team 2 Presentation",
    event: "EUREKA-2K25",
    category: "teams",
    date: "2025-08-16"
  },
  {
    id: 11,
    src: gallery16,
    caption: "Team 3 Presentation",
    event: "EUREKA-2K25",
    category: "teams",
    date: "2025-08-16"
  },
  {
    id: 12,
    src: gallery14,
    caption: "Team 4 Presentation",
    event: "EUREKA-2K25",
    category: "teams",
    date: "2025-08-16"
  },
  {
    id: 13,
    src: gallery13,
    caption: "Team 5 Presentation",
    event: "EUREKA-2K25",
    category: "teams",
    date: "2025-08-16"
  },
  {
    id: 14,
    src: gallery12,
    caption: "Team 6 Presentation",
    event: "EUREKA-2K25",
    category: "teams",
    date: "2025-08-16"
  },
  {
    id: 15,
    src: gallery10,
    caption: "Team 7 Presentation",
    event: "EUREKA-2K25",
    category: "teams",
    date: "2025-08-16"
  },
  {
    id: 16,
    src: gallery9,
    caption: "Team 8 Presentation",
    event: "EUREKA-2K25",
    category: "teams",
    date: "2025-08-16"
  },
  {
    id: 17,
    src: gallery8,
    caption: "Team 9 Presentation",
    event: "EUREKA-2K25",
    category: "teams",
    date: "2025-08-16"
  }
];

export const galleryDataNEC = [
 
];

export const galleryDataEntrepreneurship = [
 
];

export const galleryDataETalk = [
  
];


export const allEvents = [
  {
    name: "EUREKA-2K25",
    data: galleryDataEureka,
    featuredImage: gallery2,
    totalImages: galleryDataEureka.length,
    date: "2025-08-16"
  },
  
];

// Helper functions
export const getAllEvents = () => {
  return allEvents;
};

export const getEventByName = (eventName) => {
  return allEvents.find(event => event.name === eventName);
};

export const getEventImages = (eventName) => {
  const event = getEventByName(eventName);
  return event ? event.data : [];
};

export const getFeaturedEvents = (limit = null) => {
  return limit ? allEvents.slice(0, limit) : allEvents;
};

export default allEvents;