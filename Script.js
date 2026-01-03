gsap.registerPlugin(ScrollTrigger);

/* HERO */
gsap.from(".hero-content > *", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2
});

/* ABOUT */
gsap.from(".about-title, .about-card", {
  scrollTrigger: { trigger: ".about-section", start: "top 70%", once: true },
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2
});

/* SKILLS */
gsap.to(".growth-arrow", {
  scrollTrigger: { trigger: ".tech-skills", start: "top 70%", once: true },
  opacity: 1,
  y: -30,
  duration: 0.8
});

gsap.from(".tech-bar span", {
  scrollTrigger: { trigger: ".tech-skills", start: "top 70%", once: true },
  width: 0,
  duration: 1.2,
  stagger: 0.15
});

/* PROJECTS */
gsap.from(".project-card", {
  scrollTrigger: { trigger: ".projects-section", start: "top 75%", once: true },
  opacity: 0,
  y: 40,
  duration: 0.9,
  stagger: 0.2
});

gsap.from(".cta-card", {
  scrollTrigger: {
    trigger: ".cta",
    start: "top 80%",
    once: true
  },
  opacity: 0,
  y: 30,
  duration: 0.8
});

/* ================= GLOBAL SECTION POP-UP ================= */

gsap.utils.toArray(".reveal-section").forEach(section => {
  gsap.to(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      once: true
    },
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.9,
    ease: "power3.out"
  });
});


/* ACTIVE NAV LINK */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (pageYOffset >= top) current = section.id;
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
});
