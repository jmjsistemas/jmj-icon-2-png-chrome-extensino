
callme = function (element) {
      
  chrome.tabs.executeScript(null, {
    file: "icon.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });

    chrome.tabs.getSelected(null, function(tab) {
  chrome.tabs.sendMessage(tab.id, { action: "getDOM" }, function(response) {
    console.log(response);
  });
});

  var message = document.querySelector('#message');

    
    
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };