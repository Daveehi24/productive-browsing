# Focus-Lock Chrome Extension  

## 📌 Overview  
**Focus-Lock** is a Chrome Extension that helps users stay focused and avoid distractions.  
It blocks **specific websites or keywords** in URLs and redirects the user to a **safe motivational page**.  

This project uses:  
- **HTML** → Custom motivational block page  
- **CSS** → Styling the block page  
- **JSON** → Chrome extension manifest and configuration  

---

## ✨ Features  
- Blocks websites by domain name (e.g., `facebook.com`).  
- Blocks search queries containing user-defined keywords.  
- Redirects users to a safe motivational page (`block.html`).  
- Lightweight and runs directly in Chrome.  

---

## 📂 Project Structure  
focus-lock-extension/
│── manifest.json # Extension configuration, 
── background.js # Handles blocking & redirects
── content.js # Detects keywords in URLs
── block.html # Motivational message page
── block.css # Styling for block page
── icons/ # Extension icons

 🚀 Installation  
1. Clone this repository:  
   ```bash
   git clone https://github.com/YOUR-USERNAME/focus-lock-extension.git
Open Chrome and go to:

arduino
Copy code
chrome://extensions/
Enable Developer Mode.

Click Load unpacked → Select the focus-lock-extension folder.

Done ✅ — the extension is now active.

🔮 Future Improvements
Add settings page to manage blocked keywords and websites.

Add time-based blocking.

Dark mode for block page.

📜 License
MIT License © 2025
