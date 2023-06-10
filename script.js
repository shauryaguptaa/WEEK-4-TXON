const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = document.querySelector(e.target.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(navLink => navLink.classList.remove("active"));
    link.classList.add("active");
  });
});

window.addEventListener("scroll", () => {
  const scrollPos = window.pageYOffset;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (
      section.offsetTop <= scrollPos + 100 &&
      section.offsetTop + section.offsetHeight > scrollPos + 100
    ) {
      navLinks.forEach(navLink => navLink.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileNav = document.getElementById("mobile-nav");

mobileMenuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});
