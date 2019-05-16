/* Regex-pattern to check URLs against. 
   It matches URLs like: http[s]://[...]stackoverflow.com[...] */
var urlRegex = 'https://www.flaticon.com';

/* A function creator for callbacks */
function doStuffWithDOM(element) {
  console.log(element);
    alert("I received the following DOM content:\n" + element);
}

/* When the browser-action button is clicked... */
chrome.browserAction.onClicked.addListener(function(tab) {
    /*...check the URL of the active tab against our pattern and... */
    if (tab.url.substring(urlRegex) != -1) {
        /* ...if it matches, send a message specifying a callback too */
        chrome.tabs.sendMessage(tab.id, { text: "report_back" },
                                doStuffWithDOM);
    }
});