document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('menu-toggle');
  const sideMenu = document.getElementById('side-menu');
  const closeBtn = document.getElementById('close-button');
  const overlay = document.getElementById('menu-overlay');
  const exploreButton = document.getElementById('Explore-button');
  
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

  document.querySelectorAll("#side-menu a").forEach(menuLink => {//queryselector returns all the elements within an element as nodelist
    menuLink.addEventListener("click", () => {
        document.getElementById("side-menu").classList.remove("active");
        document.getElementById("menu-overlay").classList.remove("active");
    });
  });
});

 
/*Characteristics of a NodeList
✅ It contains multiple elements selected from the document.
✅ It is not a true array, but you can loop through it like one.
✅ Some array methods don’t work on a NodeList (e.g., map() and filter(), unless converted to an array).
✅ It can be live or static depending on how it’s created.*/
