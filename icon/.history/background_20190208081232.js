chrome.browserAction.onClicked.addListener(function(tab) {
     chrome.tabs.executeScript(null, {file: "copyme.js"});
});

chrome.extension.onMessage.addListener(
  function (request, sender, sendResponse) {
    //console.log("addListener ok", document.querySelector(".main-icon[data-type='img'] > im"))
    console.log("addListener ok", document.body.innertHTML);
    
    chrome.tabs.executeScript(tab.id, { file: "main.js" });
    
    console.log(document.body.innertHTML);
    if (request.text && (request.text == "getDOM")) {
      sendResponse({ dom: document.body.innertHTML });
    }
  }
);

chrome.browserAction.onClicked.addListener(function(tab) {
    var button = document.getElementByClass("main-icon");
    if(button == null){
        alert("null!");
    }
    else{
        alert("found!");
    }
});