// Function to load external content into a specific section
function loadContent(sectionId, filePath, callback) {
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        document.querySelector(`#${sectionId}`).innerHTML += data;
  
        // Apply callback after content is loaded
        if (callback) callback();
      })
      .catch(error => console.error(`Error loading ${sectionId} content:`, error));
  }
  
  // Function to add toggle functionality
  function addToggleFunctionality(itemClass, headerClass) {
    const items = document.querySelectorAll(`.${itemClass}`);
  
    items.forEach(item => {
      const header = item.querySelector(`.${headerClass}`);
      if (header) {
        header.addEventListener("click", () => {
          item.classList.toggle("open");
        });
      }
    });
  }
  
  // Load external HTML files and apply toggle functionality
  document.addEventListener("DOMContentLoaded", () => {
    // Load Education section and add toggle functionality
    loadContent("education", "education.html", () => {
      addToggleFunctionality("education-item", "school-header");
    });
  
    // Load Experience section and add toggle functionality
    loadContent("experience", "experience.html", () => {
      addToggleFunctionality("experience-item", "job-header");
    });
  
    // Load Contact section (if any, adjust accordingly)
    loadContent("contact", "contact.html");
  });