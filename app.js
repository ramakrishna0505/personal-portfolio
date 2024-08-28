const burgerMenu = document.querySelector(".lines");
const navItems = document.querySelector(".nav-items");
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("toggle");
  navItems.classList.toggle("toggle-bar");
});

const navbarListItems = [
  ...document.querySelectorAll(".navbar-list-item"),
].reverse();

navbarListItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    navbarListItems.forEach((listItem) => {
      if (
        e.currentTarget.getAttribute("name") === listItem.getAttribute("name")
      ) {
        listItem.classList.add("active");
        const element = document.querySelector(
          `#${listItem.getAttribute("name").toLowerCase()}`
        );
        window.scrollTo({
          top: element.offsetTop + 2,
        });
      } else {
        listItem.classList.remove("active");
      }
    });
  });
});

const projects = document.querySelector(".projects");
const home = document.querySelector(".home");
const about = document.querySelector(".about");

window.addEventListener("scroll", () => {
  const windowOffset = window.pageYOffset;
  let target = null;
  if (windowOffset >= home.offsetTop) {
    target = home;
  }
  if (windowOffset >= projects.offsetTop) {
    target = projects;
  }
  if (windowOffset >= about.offsetTop) {
    target = about;
  }
  navbarListItems.forEach((item) => {
    if (item.getAttribute("name") === target.getAttribute("name")) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

function navigateToCoforge() {
  location.href = 'https://www.linkedin.com/company/coforge-tech/';
}
