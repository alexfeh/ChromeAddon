
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
             chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
         }

         if(request.message === "click_links"){

             console.log("click ELEMENT");

             var elements = document.getElementsByTagName("a");

             var firstHref = [];
             for(i = 0; i < elements.length; i++){
                 console.log("i: " + i + "elements: " + elements[i].toString());
                 firstHref.push(elements[i].toString());
                 //links[i].setAttribute("target", "_blank");
                 //elements[i].click();
             }

             chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
             console.log("Element clicked");
         }

         if( request.message === "open_one_random_link" ) {

             console.log("getting random Link");

             chrome.runtime.sendMessage({"message": "open_new_tab", "url": "http://www.randomwebsite.com/cgi-bin/random.pl"});
         }
     }
 );
