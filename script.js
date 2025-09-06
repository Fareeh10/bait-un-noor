document.addEventListener('DOMContentLoaded', function () {
  // 🔹 DOM Elements
  const toggleBtn = document.getElementById('menu-toggle');
  const sideMenu = document.getElementById('side-menu');
  const closeBtn = document.getElementById('close-button');
  const overlay = document.getElementById('menu-overlay');
  const exploreButton = document.getElementById('Explore-button');
  const enrollBtn = document.querySelector('.enroll-btn2');
  const menuLinks = document.querySelectorAll('#side-menu a');

  // Smooth Scroll to #section2
  enrollBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector('#section2');
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 2000; // Adjust for slower scroll
    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const ease = easeInOutQuad(progress / duration);
      window.scrollTo(0, startPosition + distance * ease);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    window.requestAnimationFrame(step);
  });

  // 🔹 Menu Toggle Logic
  toggleBtn.addEventListener('click', () => {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
  });

  // 🔹 Close Menu on Link Click
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      sideMenu.classList.remove('active');
      overlay.classList.remove('active');
    });
  });
});


 
/*Characteristics of a NodeList
✅ It contains multiple elements selected from the document.
✅ It is not a true array, but you can loop through it like one.
✅ Some array methods don’t work on a NodeList (e.g., map() and filter(), unless converted to an array).
✅ It can be live or static depending on how it’s created.*/
