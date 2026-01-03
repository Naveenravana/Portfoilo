/* =====================================
   GSAP SETUP
===================================== */
gsap.registerPlugin(ScrollTrigger);

/* =====================================
   HERO ANIMATION (CONFIDENCE INTRO)
===================================== */
gsap.from(".hero-content > *", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out"
});

gsap.from(".hero-visual img", {
  opacity: 0,
  scale: 0.95,
  duration: 1,
  delay: 0.4,
  ease: "power3.out"
});

/* =====================================
   ABOUT SECTION (WAVING INTRO FEEL)
===================================== */
gsap.from(".about-title", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 70%",
    once: true
  },
  opacity: 0,
  y: 20,
  duration: 0.8,
  ease: "power3.out"
});

gsap.from(".about-card", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 70%",
    once: true
  },
  opacity: 0,
  y: 40,
  duration: 1,
  delay: 0.15,
  ease: "power3.out"
});

/* =====================================
   SKILLS SECTION (GROWTH + ARROW)
===================================== */
gsap.to(".growth-arrow", {
  scrollTrigger: {
    trigger: ".tech-skills",
    start: "top 70%",
    once: true
  },
  opacity: 1,
  y: -30,
  duration: 0.8,
  ease: "power3.out"
});

gsap.from(".tech-bar span", {
  scrollTrigger: {
    trigger: ".tech-skills",
    start: "top 70%",
    once: true
  },
  width: 0,
  duration: 1.2,
  stagger: 0.15,
  ease: "power3.out"
});

gsap.from(".tech-card", {
  scrollTrigger: {
    trigger: ".tech-skills",
    start: "top 75%",
    once: true
  },
  opacity: 0,
  y: 30,
  duration: 0.9,
  stagger: 0.1,
  ease: "power3.out"
});

/* =====================================
   PROJECTS (CASE STUDY REVEAL)
===================================== */
gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".projects-section",
    start: "top 75%",
    once: true
  },
  opacity: 0,
  y: 40,
  duration: 0.9,
  stagger: 0.2,
  ease: "power3.out"
});

/* =====================================
   CTA / CONTACT (DECISION MOMENT)
===================================== */
gsap.from(".cta h2", {
  scrollTrigger: {
    trigger: ".cta",
    start: "top 80%",
    once: true
  },
  opacity: 0,
  y: 20,
  duration: 0.7,
  ease: "power3.out"
});

gsap.from(".cta p", {
  scrollTrigger: {
    trigger: ".cta",
    start: "top 80%",
    once: true
  },
  opacity: 0,
  y: 20,
  duration: 0.7,
  delay: 0.15,
  ease: "power3.out"
});

gsap.from(".cta-actions a", {
  scrollTrigger: {
    trigger: ".cta",
    start: "top 80%",
    once: true
  },
  opacity: 0,
  y: 20,
  duration: 0.6,
  stagger: 0.15,
  delay: 0.3,
  ease: "power3.out"
});
