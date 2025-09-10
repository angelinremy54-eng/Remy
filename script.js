// Typing effect
const typingElement = document.querySelector(".typing");
const text = "Hi, I'm Angelin Remy";
let index = 0;

function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
type();

// Dark Mode Toggle
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});
