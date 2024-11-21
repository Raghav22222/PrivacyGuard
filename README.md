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


## 🚀 How to Use PrivacyGuard

1. **Clone the Repository:**
   - Clone the repository from GitHub to your local machine.

2. **Set up the Flask Server:**
   - Go to the `server/` directory.
   - Install Python dependencies by running `pip install -r requirements.txt` in the command line.

3. **Run the Flask Server:**
   - Start the Flask server by running `python app.py` in the command line. This will begin handling requests to fetch external links.

4. **Install the Chrome Extension:**
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" at the top-right corner.
   - Click on "Load unpacked" and select the `extension/` folder from the cloned repository.

5. **Start Browsing:**
   - Once the extension is installed, it will automatically scan websites as you browse.
   - The extension will notify you if it detects any privacy-related links or risks.

## 👨‍💻 Contributing

### If you'd like to contribute to PrivacyGuard:

- Fork the repository.
- Create a new branch for your changes.
- Submit a pull request with a detailed description of your work.
