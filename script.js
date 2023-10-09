particlesJS.load('particles-js', 'particles-config.json', function() {
    console.log('Particles.js is loaded');
});

const typed = new Typed(".typing", {
    strings: ["Software Developer", "Pythonista", "Web Developer"],
    loop: true,
    typeSpeed: 80,
    backSpeed: 40,
});
  

const themes = [
    "#9affe0",
    "#ff9a9a",
    "#f5ff9a",
    "#9aadff",
    "#ffd270",
    "#adff7b",
    "#6bfaff",
    "#56F7DD",
    "#F770F3",
]


const root = document.querySelector(":root");
const themeToggle = document.querySelector("#name");
let currentTheme = 0;

const changeTheme = () => {
  currentTheme++;
  if (currentTheme == themes.length) {
    currentTheme = 0;
  }
  root.style.setProperty("--main-accent", themes[currentTheme]);
  console.log("Accent set to: " + themes[currentTheme]);
};
themeToggle.addEventListener("click", () => {
  changeTheme();
});

let scrolling = false;
window.addEventListener("scroll", () => {
  if (!scrolling) {
    changeTheme();
    scrolling = true;
    setTimeout(() => (scrolling = false), 5000);
  }
});