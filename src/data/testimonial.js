import member1 from "../assets/Testmonials/1test.jpg";
import member2 from "../assets/Testmonials/2test.jpg";
import member3 from "../assets/Testmonials/3test.jpg";
import member4 from "../assets/Testmonials/4test.jpg";
import member5 from "../assets/Testmonials/5test.jpg";
import member6 from "../assets/Testmonials/6test.jpg";

export const testimonialsData = [
  {
    quote: "Being a part of CGEC ECELL helped me turn my ideas into reality. The support and environment were amazing.",
    name: "Nabajyoti Nag",
    position: "Batch of 2023",
    img: member1,
  },
  {
    quote: "E-Cell's sessions and interactive workshops helped me gain practical insights into entrepreneurship and innovation. I am grateful for the platform, especially because Eureka 2025 gave me a chance to showcase my ideas to a wide audience.",
    name: "Shubham Mondal",
    position: "Batch of 2023",
    img: member2,
  },
  {
    quote: "Joining E-Cell was one of the best decisions in my college life. The supportive atmosphere and engaging activities helped me develop valuable skills and broaden my perspective on innovation. I truly appreciate how E-Cell motivated me to think differently and take initiative for my own growth.",
    name: "Shirsak Roy",
    position: "Batch of 2023",
    img: member3,
  },
  {
    quote: "Being part of E-Cell inspired me to push my creative boundaries and explore new opportunities in entrepreneurship. The Social Media Challenge was a wonderful platform to share my ideas and connect with other motivated students. It boosted my confidence and made my experience with E-Cell truly memorable",
    name: "Joydeep Mitra",
    position: "Batch of 2023",
    img: member4,
  },
  {
    quote: "E-Cell not only connected me to the right people through its networking events but also gave me the courage to think bold. The experience reached another level when I got the chance to participate in Eureka 2025, which was an amazing milestone.",
    name: "Dibyendu Koley",
    position: "Batch of 2023",
    img: member5,
  },
  {
    quote: "Being a part of E-Cell has been a transformative experience. The events and mentorship programs provided me with practical knowledge and inspired me to pursue my entrepreneurial goals with confidence. E-Cell truly fosters a community where ideas can grow and thrive",
    name: "Bhargabi Mukherjee",
    position: "Batch of 2024",
    img: member6,
  },
];

export const getTestimonials = () => testimonialsData;
export const getTestimonialByName = (name) => {
  return testimonialsData.find(testimonial => testimonial.name === name);
};
export default testimonialsData;