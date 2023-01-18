// 1. Splitting
Splitting();

// 2. AOS
AOS.init({
  delay: 500,
  duration: 900,
});

// 3. gsap
gsap.from(".mainImg-txt-sub .char", {
  opacity: 0,
  y: 80,
  duration: 1,
  stagger: 0.01,
  ease: "power4",
});

// 4. swiper

// 5. JS Functions
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

nav.addEventListener("mouseenter", () => {
  header.classList.add("on");
});

nav.addEventListener("mouseleave", () => {
  header.classList.remove("on");
});
