chrome.browserAction.onClicked.addListener(function(tab) {
     chrome.tabs.executeScript(null, {file: "copyme.js"});
});

chrome.extension.onMessage.addListener(
  function (request, sender, sendResponse) {
    //console.log("addListener ok", document.querySelector(".main-icon[data-type='img'] > im"))
    console.log("addListener ok", document.querySelector(".main-icon[data-type='img'] > img"))
    console.log(document.body.innertHTML);
    if (request.text && (request.text == "getDOM")) {
      sendResponse({ dom: document.body.innertHTML });
    }
  }
);
