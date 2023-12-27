function animateOnScroll(elements, cssClass = "animate") {
  const intersectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(cssClass);
      } else {
        entry.target.classList.remove(cssClass);
      }
    });
  });

  elements.forEach((element) => {
    intersectObserver.observe(element);
  });
}

const slideUp = document.querySelectorAll(".slide-up");
const slideLeft = document.querySelectorAll(".slide-left");
const slideRight = document.querySelectorAll(".slide-right");
const slideDown = document.querySelectorAll(".slide-down");

animateOnScroll(slideUp);
animateOnScroll(slideLeft);
animateOnScroll(slideRight);
animateOnScroll(slideDown);