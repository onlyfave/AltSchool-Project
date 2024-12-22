// script.js
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Add active class to current section in navigation
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
      let current = '';
        
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
            
          if (pageYOffset >= sectionTop - 60) {
              current = section.getAttribute('id');
          }
      });

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === current) {
              link.classList.add('active');
          }
      });
  });
});

// Optional: Smooth scroll with offset for mobile
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = 60; // Adjust based on your navbar height
        
      window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
      });
  });
});
