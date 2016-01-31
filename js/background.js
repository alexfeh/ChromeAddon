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
        chrome.extension.getBackgroundPage().console.log("send Message for loading");
        chrome.tabs.sendMessage(activeTab.id, {"message": "open_links"});

    });
}

function clickLinks(){
    chrome.extension.getBackgroundPage().console.log("Trying to click all links on this page");

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.extension.getBackgroundPage().console.log("send Message for clicking links");
        chrome.tabs.sendMessage(activeTab.id, {"message": "click_links"});
    });
}

function closeTabs(){
    chrome.extension.getBackgroundPage().console.log("Trying to close tabs");

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var allTabs = tabs;

        chrome.extension.getBackgroundPage().console.log("send Message");

        var count = tabs.length;
        chrome.extension.getBackgroundPage().console.log("count: " + count);

        for(i = 0; i < count; i++) {
            //chrome.tabs.remove(allTabs[i].id);
            chrome.extension.getBackgroundPage().console.log(allTabs[i].toString() + " id: " + allTabs[i].id);
        }
    });
}

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

var myVar;

function runDuration(){
    chrome.extension.getBackgroundPage().console.log("Started duration");

    chrome.storage.sync.get(function(items) {
        durationActivated = items.activateClicking;

        if(durationActivated) {
            myVar = setInterval(function () {
                // method to be executed;
                openRandomLinkFromCurrentSite();
            }, 5000);
        }
    });
}

var count = 0;
function openRandomLinkFromCurrentSite(){

    chrome.storage.sync.get(function(items) {
        durationActivated = items.activateClicking;

        if(!durationActivated) {
            clearInterval(myVar);
        }else{
            chrome.extension.getBackgroundPage().console.log("Try to open on random Link on this page");
            chrome.extension.getBackgroundPage().console.log(count++);
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                var activeTab = tabs[0];
                chrome.extension.getBackgroundPage().console.log("send Message for loading");
                chrome.tabs.sendMessage(activeTab.id, {"message": "open_one_random_link"});

            });
        }
    });
}

function openRandomLinkFromRandomSite(){
    chrome.extension.getBackgroundPage().console.log("Try to open all links from this page");

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.extension.getBackgroundPage().console.log("send Message for loading");
        chrome.tabs.sendMessage(activeTab.id, {"message": "open_one_random_link_from_random_site"});

    });
}