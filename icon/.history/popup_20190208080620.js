 let btn = document.getElementById('copyBtn');
btn.addEventListener('click', function () {
     
    alert('copy');

    chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response);
});
    
/*     chrome.tabs.getCurrent(function (tab) {
        console.log
    alert(tab.title);
    }); */
    
    chrome.tabs.executeScript({
    code: `alert(document.querySelector(".main-icon[data-type="img"] > img").src)`
    })
    
})

 /*
 
    console.log('click');
    
     function modifyDOM() {
        //You can play with your DOM here or check URL against your regex
        console.log('Tab script:');
        console.log(document.body);
        return document.body.innerHTML;
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:')
        console.log(results);
    });
         chrome.tabs.getSelected(null, function(tab) {
  chrome.tabs.sendMessage(tab.id, { action: "getDOM" }, function(response) {
    console.log(response);
  });
});
*/