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
        mode: "connect", 
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

    color: {
      value: ["#82E0AA", "#5DADE2", "#BB8FCE"], 
    },
    
    
    links: {
      color: "#ffffff",
      distance: 250, 
      enable: true,
      opacity: 0.2, 
      width: 1,
    },
    
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: true, 
      speed: 0.2, 
      straight: false,
    },
    
    number: {
      density: { enable: true, area: 2000 },
      value: 30, 
    },
    
    opacity: {
      value: { min: 0.1, max: 0.8 },
      random: true,
      anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false },
    },
    
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