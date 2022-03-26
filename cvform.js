/*========================== SHOW MENU ===========================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*========================== REMOVE MENU MOBILE ===========================*/
const navLink = document.querySelectorAll(".nav_link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*========================== Scroll Sections Active Link ===========================*/
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*========================== Show Scroll Top ===========================*/
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 200) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

function scrollTop1() {
  const scrollTop1 = document.getElementById("scroll-top1");
  if (this.scrollY >= 200) scrollTop1.classList.add("show-scroll");
  else scrollTop1.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop1);

/*========================== Dark Light Theme ===========================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*========================== Reduve the sixe and print on an a4 sheet ===========================*/
function scaleCv() {
  document.body.classList.add("scale-cv");
}
/*========================== Remove the size when the cv is downloaded ===========================*/
function removeScale() {
  document.body.classList.remove("scale-cv");
}
/*========================== Generate PDF ===========================*/
let areaCv = document.getElementById("area-cv");

let resumeButton = document.getElementById("resume-button");

let opt = {
  margin: 0,
  filename: "myResume.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 4 },
  jsPDF: { format: "a4", orientation: "portrait" },
};

function generateResume() {
  html2pdf(areaCv, opt);
}
resumeButton.addEventListener("click", () => {
  scaleCv();
  generateResume();
  setTimeout(removeScale, 5000);
});
