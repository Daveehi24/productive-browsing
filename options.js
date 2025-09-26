const input = document.getElementById("keywords");
const saveButton = document.getElementById("save");

// Load saved keywords
chrome.storage.sync.get("blockedKeywords", (data) => {
  if (data.blockedKeywords) {
    input.value = data.blockedKeywords.join(", ");
  }
});

// Save new keywords
saveButton.addEventListener("click", () => {
  const keywords = input.value.split(",").map(k => k.trim().toLowerCase());
  chrome.storage.sync.set({ blockedKeywords: keywords }, () => {
    alert("✅ Keywords saved!");
  });
});
