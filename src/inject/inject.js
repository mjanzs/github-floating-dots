import vueInit from "./functions/vueInit";
import materializeCssInit from "./functions/materializeCssInit";
import attachElement from "./functions/attachElement";
import Store from "../store/store";
import PullRequest from "./classes/gh/PullRequest";

import reverseElements from './functions/reverseElements'

const store = new Store('settings', {
  'accessToken': ''
});

function ready(callbackFunc) {
  if (document.readyState !== 'loading') {
    // Document is already ready, call the callback directly
    callbackFunc();
  } else if (document.addEventListener) {
    // All modern browsers to register DOMContentLoaded
    document.addEventListener('DOMContentLoaded', callbackFunc);
  } else {
    // Old IE browsers
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState === 'complete') {
        callbackFunc();
      }
    });
  }
}

function reverseTimeline() {
  ready(() => {
    reverseElements(document.querySelector('.js-pull-discussion-timeline'))
    reverseElements(document.querySelector('.js-pull-discussion-timeline .js-discussion'))
  });
}

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

        reverseTimeline();
        materializeCssInit();
        attachElement('github-floating-dots');
        vueInit('github-floating-dots', pullRequest);
      }
    }
  }, 10);
});
