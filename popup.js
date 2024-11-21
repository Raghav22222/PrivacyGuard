document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get('warnings', function(data) {
    var warnings = data.warnings || [];
    var warningDiv = document.getElementById('warnings');
    var noWarningsMessage = document.getElementById('no-warnings');

    if (warnings.length > 0) {
      warningDiv.innerHTML = ''; // Clear previous content
      warnings.forEach(function(warning) {
        var para = document.createElement('p');
        para.textContent = warning;
        para.classList.add('warning');
        warningDiv.appendChild(para);
      });
    } else {
      noWarningsMessage.textContent = 'No privacy risks detected.';
    }
  });
});
