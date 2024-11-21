# PrivacyGuard

## 📖 Description

**PrivacyGuard** is a Chrome extension designed to analyze websites for privacy risks. It identifies potential risks by analyzing "Terms of Service" or "Privacy Policy" pages for keywords associated with data sharing, selling, or third-party usage. The extension automatically scans websites and displays notifications if risks are found.

---

## 🌟 Features

- **Automatic Website Scanning**: The extension works in the background, scanning websites without user input.
- **Keyword-Based Risk Detection**: Looks for specific keywords in privacy-related pages.
- **Real-Time Notifications**: Alerts users about privacy risks directly via browser notifications.

---


## 🛠️ How It Works
#### Content Script (content.js):
- Scans the page for links to "Terms of Service" or "Privacy Policy."
- Sends these links to the Flask server for analysis.
#### Flask Server (server/app.py):
- Fetches the content of the links provided by the content script.
- Passes the content back to the extension for keyword analysis.
#### Background Script (background.js):
- Analyzes the fetched content for keywords like "data sharing" or "third parties."
- Displays a notification if any risks are identified.
#### Popup (popup.html, popup.js, popup.css):
- Displays a summary of the analysis (optional for manual checks).

## 👨‍💻 Contributing

### If you'd like to contribute to PrivacyGuard:

- Fork the repository.
- Create a new branch for your changes.
- Submit a pull request with a detailed description of your work.
