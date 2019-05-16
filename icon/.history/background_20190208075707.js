chrome.runtime.onInstalled.addListener(function() {
    console.log("extension ok")
});
chrome.browserAction.onClicked.addListener(function(tab) {
     chrome.tabs.executeScript(null, {file: "copyme.js"});
});

chrome.extension.onMessage.addListener(
  function (request, sender, sendResponse) {
      console.log("addListener ok")
    if (request.text && (request.text == "getDOM")) {
      sendResponse({ dom: document.body.innertHTML });
    }
  }
);