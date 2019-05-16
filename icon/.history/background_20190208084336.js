/* Regex-pattern to check URLs against. 
   It matches URLs like: http[s]://[...]stackoverflow.com[...] */
var urlRegex = 'https://www.flaticon.com';

/* A function creator for callbacks */
function doStuffWithDOM(element) {
  console.log(element);
    alert("Link do SVG" + element);
}

/* When the browser-action button is clicked... */
chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.sendMessage(tab.id, { text: "report_back" },
                                doStuffWithDOM);
});