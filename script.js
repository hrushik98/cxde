// Add animations on scroll
window.addEventListener("scroll", function () {
  const heroSection = document.querySelector(".hero");
  const featuredSection = document.querySelector(".featured");

  const heroPosition = heroSection.getBoundingClientRect().top;
  const featuredPosition = featuredSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (heroPosition < screenPosition) {
    heroSection.classList.add("slide-up");
  }

  if (featuredPosition < screenPosition) {
    featuredSection.classList.add("slide-up");
  }
});
