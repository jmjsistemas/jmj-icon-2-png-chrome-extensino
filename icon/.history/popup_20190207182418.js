 
  let btnnn = document.getElementById('copyBtn');
btnnn.addEventListener('click', function () {
       console.log(click);
         chrome.tabs.getSelected(null, function(tab) {
  chrome.tabs.sendMessage(tab.id, { action: "getDOM" }, function(response) {
    console.log(response);
  });
});
     
      });