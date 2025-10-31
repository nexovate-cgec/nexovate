const particlesConfig = {
  fullScreen: { enable: false },
  background: {
    color: { value: "transparent" },
    opacity: 0,
  },
  
  fpsLimit: 60,
  
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "connect", // Mouse hover করলে কণাগুলো সংযুক্ত হবে
      },
      resize: true,
    },
    modes: {
      connect: {
        distance: 100,
        links: { opacity: 0.5 },
      },
    },
  },

  particles: {
    // Neon Color Palette: Pale Blue/Green/Purple
    color: {
      value: ["#82E0AA", "#5DADE2", "#BB8FCE"], 
    },
    
    // Links (Lines) Configuration
    links: {
      color: "#ffffff",
      distance: 250, // বড় নেটওয়ার্ক
      enable: true,
      opacity: 0.2, // খুবই হালকা
      width: 1,
    },
    
    // Movement: Very Slow and Random
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: true, 
      speed: 0.2, // ⭐️ স্লো ফ্লো অ্যানিমেশন
      straight: false,
    },
    
    number: {
      density: { enable: true, area: 2000 },
      value: 30, // কম ঘনত্বের নেটওয়ার্ক
    },
    
    opacity: {
      value: { min: 0.1, max: 0.8 },
      random: true,
      anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false },
    },
    
    // Particle Shape
    shape: {
      type: ["circle", "triangle", "polygon"], 
    },
    size: {
      value: { min: 1, max: 5 },
      random: true,
    },
  },
  detectRetina: true,
};

export default particlesConfig;