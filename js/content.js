/**
 * Created by Gaming on 15.01.2016.
 */
/*window.addEventListener("load", function() {
    chrome.extension.sendMessage({
        type: "dom-loaded",
        data: {
            //myProperty: document.getElementsByTagName("a")[0]
            //myProperty: document.all[0].outerHTML
            //myProperty: document.links
            //myProperty: $("a")
            myProperty: $("a[href^='http']").eq(0).attr("href")
        }
    });
}, true);*/

 chrome.runtime.onMessage.addListener(
     function(request, sender, sendResponse) {
         if( request.message === "open_links" ) {

             console.log("getting DOM");

             var count = $("a[href^='http']").length;

             var firstHref = [];
             for (i = 0; i < count; i++) {
                 firstHref.push($("a[href^='http']").eq(i).attr("href"));
                 //history.pushState({foo:"bar"},"page 2",$("a[href^='http']").eq(i).attr("href") );
             }
             //console.log(firstHref);

             chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
         }

         if(request.message === "click_links"){

             console.log("click ELEMENT");

             var links = $("a[href^='http']");//.eq(0)
             var count = links.length;
             console.log("count: " + count);

             /*$("a").click(function(event) {
                 event.preventDefault();
             });*/

             for(i = 0; i < count; i++){
                 console.log("i: " + i + "link: " + links[i]);
                 links[i].setAttribute("target", "_blank");
                 links[i].click();
             }
             console.log("Element clicked");
         }

         if( request.message === "open_one_random_link" ) {

             console.log("getting random Link");

             var count = $("a[href^='http']").length;

             var firstHref = [];
             for (i = 0; i < count; i++) {
                 firstHref.push($("a[href^='http']").eq(i).attr("href"));
                 //history.pushState({foo:"bar"},"page 2",$("a[href^='http']").eq(i).attr("href") );
             }
             //console.log(firstHref);

             var randomLink = firstHref[Math.floor(Math.random() * count) +1];
             console.log("open random link: " + randomLink);

             chrome.runtime.sendMessage({"message": "open_new_tab", "url": randomLink});
         }
     }
 );
