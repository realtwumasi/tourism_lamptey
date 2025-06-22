document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Your message was sent successfully!");
  this.reset();
});
document.querySelectorAll('.accordion-header').forEach(btn => {
      btn.addEventListener('click', function() {
        const content = this.nextElementSibling;
        this.classList.toggle('active');
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });