// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Simple form alert
const form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent! (Dummy form)");
  form.reset();
});
