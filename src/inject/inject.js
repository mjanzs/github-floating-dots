import vueInit from "./functions/vueInit";
import materializeCssInit from "./functions/materializeCssInit";
import attachElement from "./functions/attachElement";
import checkFixup from "./functions/checkFixup";
import Store from "../store/store";
import PullRequest from "./classes/gh/PullRequest";

import reverseElements from './functions/reverseElements'

const store = new Store('settings', {
  'accessToken': '',
  'reverseTimeline': false,
  'pullMergeOnTop': false
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
    if (store.get('reverseTimeline')) {
      reverseElements(document.querySelector('.js-pull-discussion-timeline .js-discussion'))
    }
    if (store.get('pullMergeOnTop')) {
      reverseElements(document.querySelector('.js-pull-discussion-timeline'))
    }
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
        store.set('reverseTimeline', settings.reverseTimeline);
        store.set('pullMergeOnTop', settings.pullMergeOnTop);

        reverseTimeline();
        materializeCssInit();
        checkFixup(pullRequest);
        attachElement('github-floating-dots');
        vueInit('github-floating-dots', pullRequest);
      }
    }
  }, 10);
});
