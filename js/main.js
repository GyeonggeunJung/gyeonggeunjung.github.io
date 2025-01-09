// Load external content into specific sections
function loadContent(sectionId, filePath, callback) {
  fetch(filePath)
    .then(response => response.text())
    .then(data => {
      document.querySelector(`#${sectionId}`).innerHTML += data;
      if (callback) callback(); // Apply toggle functionality
    })
    .catch(error => console.error(`Error loading ${filePath}:`, error));
}

// Add toggle functionality
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

// Load content and initialize toggle functionality
document.addEventListener("DOMContentLoaded", () => {
  loadContent("education", "education.html", () => {
    addToggleFunctionality("education-item", "school-header");
  });

  loadContent("experience", "experience.html", () => {
    addToggleFunctionality("experience-item", "job-header");
  });

  loadContent("honors", "honor.html", () => {
    addToggleFunctionality("honor-item", "honor-header");
  });
});