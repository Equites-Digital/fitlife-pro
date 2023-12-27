const elements = {
  left: document.querySelector("#classes-left"),
  right: document.querySelector("#classes-right"),
  monday: document.querySelector("#classes-monday"),
  tuesday: document.querySelector("#classes-thuesday"),
  thursday: document.querySelector("#classes-thursday"),
  friday: document.querySelector("#classes-friday"),
  container: document.querySelector("#classes-schedules"),
  title: document.querySelector("#classes-schedules-navigation-header"),
};

let currentIndex = 0;

const rotation = ["Monday", "Tuesday", "Thursday", "Friday"];

elements.monday.style.left = "0%";
elements.tuesday.style.left = "100%";
elements.thursday.style.left = "200%";
elements.friday.style.left = "300%";

const moveToStart = () => {
  elements.monday.style.left = "0%";
  elements.tuesday.style.left = "100%";
  elements.thursday.style.left = "200%";
  elements.friday.style.left = "300%";
};

const moveToEnd = () => {
  elements.monday.style.left = "-300%";
  elements.tuesday.style.left = "-200%";
  elements.thursday.style.left = "-100%";
  elements.friday.style.left = "0%";
};

const moveLeft = () => {
  if (currentIndex === 0) {
    currentIndex = rotation.length - 1;
  } else {
    currentIndex--;
  }

  if (currentIndex === rotation.length - 1) {
    moveToEnd();
  } else {
    for (const day of rotation) {
      const element = elements[day.toLowerCase()];
      element.style.left = `${parseInt(element.style.left) + 100}%`;
    }
  }

  elements.title.textContent = rotation[currentIndex];
};

const moveRight = () => {
  if (currentIndex === rotation.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  if (currentIndex === 0) {
    moveToStart();
  } else {
    for (const day of rotation) {
      const element = elements[day.toLowerCase()];
      element.style.left = `${parseInt(element.style.left) - 100}%`;
    }
  }

  elements.title.textContent = rotation[currentIndex];
};

elements.left.addEventListener("click", moveLeft);
elements.right.addEventListener("click", moveRight);
