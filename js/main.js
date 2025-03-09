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

  loadContent("publications", "publications.html", () => {
    addToggleFunctionality("publications-item", "publications-header");
  });
});

function copyEmailToClipboard() {
  const email = "gyeonggeun@kaist.ac.kr";

  // 임시 텍스트 입력 요소 생성
  const tempInput = document.createElement("input");
  tempInput.value = email;
  document.body.appendChild(tempInput);

  // 텍스트 복사
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // 모바일 대응
  document.execCommand("copy");

  // 임시 요소 제거
  document.body.removeChild(tempInput);

  // 알림 표시
  alert("Email address copied!");
}