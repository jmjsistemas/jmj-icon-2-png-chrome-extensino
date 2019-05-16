chrome.runtime.onInstalled.addListener(function() {
    console.log("extension ok")
});

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.text && (request.text == "getDOM")) {
      sendResponse({ dom: document.body.innertHTML });
    }
  }
);