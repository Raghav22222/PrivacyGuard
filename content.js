// content.js
const proxyUrl = 'http://localhost:5000/proxy?url=';
const termsKeywords = ["terms", "conditions", "privacy policy", "data usage"];

function fetchTermsAndConditions(link) {
  fetch(proxyUrl + encodeURIComponent(link.href))
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.text();
    })
    .then(text => {
      console.log(`Fetched T&Cs text from ${link.href}`);
      chrome.runtime.sendMessage({ termsText: text });
    })
    .catch(error => console.error("Error fetching T&Cs:", error));
}

function checkPageForTermsLinks() {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    termsKeywords.forEach(keyword => {
      if (link.innerText.toLowerCase().includes(keyword)) {
        console.log(`Found link with keyword "${keyword}": ${link.href}`);
        fetchTermsAndConditions(link);
      }
    });
  });
}

// Run initially on page load
checkPageForTermsLinks();

// Listen for DOM changes (if needed)
document.addEventListener('DOMContentLoaded', checkPageForTermsLinks);
