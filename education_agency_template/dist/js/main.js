// Mobile Navigation

const mobileNav = document.querySelector(".navigation-mobile");
const menuIcon = document.querySelector(".menu-icon");
const mobileMenuItems = document.querySelectorAll(".navigation-mobile ul li");

menuIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

mobileMenuItems.forEach(item => {
  item.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
});

// Desktop Navigation
const options = {
  threshold: 0.4
};

function addActiveSection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let currentActiveSection = document.querySelector(".navigation a.active");
      currentActiveSection.classList.remove("active");

      let newActiveSection = document.querySelector(
        `.navigation a[href="#${entry.target.getAttribute("id")}"]`
      );
      newActiveSection.classList.add("active");
    }
  });
}

const observer = new IntersectionObserver(addActiveSection, options);

sections = document.querySelectorAll("section");

sections.forEach(sectionentry => {
  observer.observe(sectionentry);
});
