 let btn = document.getElementById('copyBtn');
btn.addEventListener('click', function () {
     
    alert('copy');

    chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response);
    });

    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  console.log(tabs[0]);
    });
    
});