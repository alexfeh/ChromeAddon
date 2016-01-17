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
             }
             //console.log(firstHref);

             chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
         }

         if(request.message === "click_links"){

             console.log("click ELEMENT");

             var link = $("a[href^='http']").eq(0).attr("href");

             link.dispatchEvent(new MouseEvent("click"));
         }
     }
 );
