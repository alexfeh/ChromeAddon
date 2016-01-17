function renderStatus(statusText) {
    document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mybuttonOpenLinks').addEventListener('click', function() {
        renderStatus('clicked!!');
        //chrome.extension.getBackgroundPage().console.log("hello");

        //myStuff();
        chrome.extension.getBackgroundPage().openLinks();
    });

    document.getElementById('mybuttonClickLinks').addEventListener('click', function() {
        renderStatus('clicked!!');
        //chrome.extension.getBackgroundPage().console.log("hello");

        //myStuff();
        chrome.extension.getBackgroundPage().clickLinks();
    });

    document.getElementById('mybuttonOptions').addEventListener('click', function() {
        renderStatus('clicked!!');
        chrome.tabs.create({ url: "options.html" });
    });

    document.getElementById('mybuttonCloseTabs').addEventListener('click', function() {
        renderStatus('clicked!!');
        //chrome.extension.getBackgroundPage().console.log("hello");

        //myStuff();
        chrome.extension.getBackgroundPage().closeTabs();
    });

});

function myStuff(){
    chrome.extension.getBackgroundPage().console.log("hello from my Stuff");
}