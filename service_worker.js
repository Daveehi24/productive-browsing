chrome.runtime.onInstalled.addListener(() => {
  console.log("✅ Focus Lock Extension Installed");
});

// Expanded default blocked keywords
let blockedKeywords = [
  "porn", "sex", "xxx", "nsfw", "hentai", "blue film",
  "redtube", "xnxx", "xvideos", "xhamster", "youjizz",
  "adult", "escort", "camgirl", "chaturbate", "onlyfans",
  "fleshlight", "playboy", "nude", "erotic", "brazzers",
  "stripclub", "lust", "hot girl", "bdsm",  "Chuhai Lips", "http://repack-games.com/category/3d-comics/","hianime","nyaa.si",
];

// Load saved keywords if available
chrome.storage.sync.get("blockedKeywords", (data) => {
  if (data.blockedKeywords) {
    blockedKeywords = data.blockedKeywords;
  }
});

// Listen to navigation events
chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  if (details.url) {
    let lowerUrl = details.url.toLowerCase();
    for (let word of blockedKeywords) {
      if (lowerUrl.includes(word)) {
        chrome.tabs.update(details.tabId, { url: "https://www.bible.com/bible/111/JHN.1.NIV" });
        return;
      }
    }
  }
});
