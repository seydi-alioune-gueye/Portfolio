// ===== AOS INIT =====
AOS.init({
  once: true,
  duration: 600,
  easing: "ease-out-cubic",
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById("mainNav");
const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Navbar glass effect on scroll
  if (scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Scroll to top button visibility
  if (scrollY > 400) {
    scrollTop.classList.add("visible");
  } else {
    scrollTop.classList.remove("visible");
  }

  // Active nav link based on scroll position
  updateActiveNav();
});

// ===== SCROLL TO TOP =====
scrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== ACTIVE NAV LINK =====
function updateActiveNav() {
  const sections = document.querySelectorAll("header[id], section[id], footer[id]");
  const navLinks = document.querySelectorAll(".navbar-custom .nav-link");
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

// ===== CLOSE MOBILE NAV ON LINK CLICK =====
const navbarCollapse = document.getElementById("navbarNav");
const navLinks = document.querySelectorAll(".navbar-custom .nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) bsCollapse.hide();
    }
  });
});

// ===== TYPING EFFECT =====
const typingElement = document.getElementById("typingText");
const phrases = [
  "Développeur Web Full-Stack",
  "Développeur Mobile & Logiciel",
  "Passionné par le code & l'innovation",
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 80;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 40;
  } else {
    typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 80;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    typeSpeed = 2000; // Pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typeSpeed = 400; // Pause before next phrase
  }

  setTimeout(typeEffect, typeSpeed);
}

// Start typing effect
typeEffect();
