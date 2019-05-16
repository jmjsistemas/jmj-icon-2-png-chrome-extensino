//background script is always running unless extension
//is disabled

//Wait for some one connect to it
let contentPort
chrome.runtime.onConnect.addListener(function(portFrom) {
   if(portFrom.name === 'background-content') {
      //This is how you add listener to a port.
      portFrom.onMessage.addListener(function(message) {
         //Do something to this message(offsetheight and width)
      });
   }
});

//Send a message to a tab which has your content script injected. 
//You should able to use postMessage here as well.
chrome.tabs.sendMessage(YOUR_TARGET_TAB_ID, {action: 'GET_DIMENSION'});