gsap.registerPlugin(ScrollTrigger);

// Hero animation
gsap.from(".hero-content > *", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2
});

// Cards animation
gsap.from(".value-card, .work-card, .project, .timeline-item", {
  scrollTrigger: {
    trigger: "section",
    start: "top 85%"
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.1
});

// Scroll progress
window.addEventListener("scroll", () => {
  const progress = (window.scrollY /
    (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById("scroll-progress").style.width = progress + "%";
});
