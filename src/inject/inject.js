import vueInit from "./vueInit";

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

      vueInit(id);
    }
  }, 10);
});
