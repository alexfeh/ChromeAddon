/**
 * Created by Gaming on 15.01.2016.
 */
/*chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
    suggest([
        {content: text + " one", description: "the first one"},
        {content: text + " number two", description: "the second entry"}
    ]);
});
chrome.omnibox.onInputEntered.addListener(function(text) {
    alert('You just typed "' + text + '"');
});*/

/*
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "dom-loaded":
            //alert(request.data.myProperty);
            //console.log(request.data.myProperty);
            var result = request.data.myProperty;
            //result.click();

            chrome.tabs.create({"url": result});

            chrome.extension.getBackgroundPage().console.log(request.data.myProperty);

            //chrome.extension.getBackgroundPage().console.log(result[0].toString())

            break;
    }
    return true;
});*/

function openLinks(){
    chrome.extension.getBackgroundPage().console.log("Try to open all links from this page");

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.extension.getBackgroundPage().console.log("send Message");
        chrome.tabs.sendMessage(activeTab.id, {"message": "open_links"});
    });
}

function clickLinks(){
    chrome.extension.getBackgroundPage().console.log("Trying to click all links on this page");

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.extension.getBackgroundPage().console.log("send Message");
        chrome.tabs.sendMessage(activeTab.id, {"message": "click_links"});
    });
}


// This block is new!
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "open_new_tab" ) {

            //chrome.extension.getBackgroundPage().console.log(request.url);
            var links = request.url;
            var count = links.length;

            for(i = 0; i < count; i++) {
                chrome.tabs.create({"url": links[i], active: false});
            }

        }
    }
);