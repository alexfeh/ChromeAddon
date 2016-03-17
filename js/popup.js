function renderStatus(statusText) {
    document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
    /*document.getElementById('mybuttonOpenLinks').addEventListener('click', function() {
        //renderStatus('clicked!!');
        chrome.extension.getBackgroundPage().openLinks();
    });*/

    document.getElementById('mybuttonClickLinks').addEventListener('click', function() {
        //renderStatus('clicked!!');
        chrome.extension.getBackgroundPage().clickLinks();
    });

    document.getElementById('mybuttonOptions').addEventListener('click', function() {
        //renderStatus('clicked!!');
        chrome.tabs.create({ url: "options.html" });
    });

    /*document.getElementById('mybuttonCloseTabs').addEventListener('click', function() {
        //renderStatus('clicked!!');
        chrome.extension.getBackgroundPage().closeTabs();
    });*/

    document.getElementById('mybuttonStartDuration').addEventListener('click', function() {
        //renderStatus('clicked!!');
        chrome.extension.getBackgroundPage().runDuration();
    });

    document.getElementById('mybuttonStopDuration').addEventListener('click', function() {
        //renderStatus('clicked!!');
        chrome.extension.getBackgroundPage().stopDuration();
    });
});