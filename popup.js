function renderStatus(statusText) {
    document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mybutton1').addEventListener('click', function() {
        renderStatus('clicked!!');
        //chrome.extension.getBackgroundPage().console.log("hello");

        //myStuff();
        chrome.extension.getBackgroundPage().openLinks();
    });

    document.getElementById('mybutton2').addEventListener('click', function() {
        renderStatus('clicked!!');
        //chrome.extension.getBackgroundPage().console.log("hello");

        //myStuff();
        chrome.extension.getBackgroundPage().clickLinks();
    });

    document.getElementById('mybutton3').addEventListener('click', function() {
        renderStatus('clicked!!');
        chrome.tabs.create({ url: "options.html" });
    });


});

function myStuff(){
    chrome.extension.getBackgroundPage().console.log("hello from my Stuff");
}