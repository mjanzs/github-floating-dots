import vueInit from "./vueInit";
import materializeCssInit from "./materializeCssInit";

chrome.extension.sendMessage({}, function(settings) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      // ----------------------------------------------------------
      // This part of the script triggers when page is done loading
      console.log("Connection to Github ...");
      // ----------------------------------------------------------

      const id = 'github-floating-dots';

      const div = document.createElement('div');
      div.id = id

      document.body.append(div)

      materializeCssInit();
      vueInit(id);
    }
  }, 10);
});
