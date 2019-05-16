/* Listen for messages */
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    /* If the received message has the expected format... */
    if (msg.text && (msg.text == "report_back")) {
        var source = document.querySelector('.main-icon-without-slide[data-type="img"] > img').src;


        var copyFrom = document.createElement('textarea');
        copyFrom.setAttribute("style", "position:fixed;opacity:0;top:100px;left:100px;");
        copyFrom.value = source;
        document.body.appendChild(copyFrom);
        copyFrom.select();
        document.execCommand('copy');

        setTimeout(function () {
            document.body.removeChild(copyFrom);
        }, 1500);

        alert("Link do copiado para sua Área de transferência!");
        sendResponse(document.querySelector('.main-icon-without-slide[data-type="img"] > img').src);
    }
});