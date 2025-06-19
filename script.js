document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Your message was sent successfully!");
  this.reset();
});
