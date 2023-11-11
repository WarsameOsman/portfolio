// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Responsive Design Improvements
    window.addEventListener("resize", function () {
      adjustResponsiveDesign();
    });
  
    // Dynamic Content Loading
    const projectCards = document.querySelectorAll(".project");
  
    projectCards.forEach((card) => {
      card.addEventListener("click", function () {
        loadProjectDetails(card);
      });
    });
  });
  
  function adjustResponsiveDesign() {
    const screenWidth = window.innerWidth;
  
    // Example: Adjust layout based on screen width
    if (screenWidth < 600) {
      projectCards.forEach((card) => {
        card.classList.add("responsive-layout");
      });
    } else {
      projectCards.forEach((card) => {
        card.classList.remove("responsive-layout");
      });
    }
  }
  
  function loadProjectDetails(card) {
    // Example: Display simple alert for additional project details
    const projectName = card.querySelector("h3").innerText;
    alert(`Details for ${projectName}:\nThis is a placeholder for additional project details.`);
  }
  