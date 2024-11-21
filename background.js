// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Received message:", message);

  if (message.termsText) {
    console.log("Processing terms text");
    const warnings = [];
    if (message.termsText.includes("sell your data")) {
      warnings.push("This website may sell your data.");
    } else if (message.termsText.includes("share your data")) {
      warnings.push("This website may share your data.");
    }

    console.log("Storing warnings:", warnings);

    chrome.storage.local.set({ warnings }, () => {
      console.log("Warnings stored successfully:", warnings);
    });
  }
});
