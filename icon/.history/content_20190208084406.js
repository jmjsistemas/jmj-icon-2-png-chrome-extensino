/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    /* If the received message has the expected format... */
    if (msg.text && (msg.text == "report_back")) {
        debugger;
        alert('Olá')
        sendResponse(document.querySelector('.main-icon[data-type="img"] > img').src);
    }
});