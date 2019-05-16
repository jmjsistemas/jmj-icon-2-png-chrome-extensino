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

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  });