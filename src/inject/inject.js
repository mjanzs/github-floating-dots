import vueInit from "./functions/vueInit";
import materializeCssInit from "./functions/materializeCssInit";
import attachElement from "./functions/attachElement";
import Store from "../store/store";
import PullRequest from "./classes/gh/PullRequest";

const store = new Store('settings', {
  'accessToken': ''
});

chrome.extension.sendMessage({}, function(settings) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      // ----------------------------------------------------------
      // This part of the script triggers when page is done loading
      console.log("Connection to Github ...");
      // ----------------------------------------------------------

      const pullRequest = PullRequest.fromGhUri(window.location.href);

      if (pullRequest) {
        store.set('accessToken', settings.accessToken);

        materializeCssInit();
        attachElement('github-floating-dots');
        vueInit('github-floating-dots', pullRequest);
      }
    }
  }, 10);
});
