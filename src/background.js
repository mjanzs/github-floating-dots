import Store from "./store/store";

global.browser = require('webextension-polyfill');

let store = new Store('settings', {
  'accessToken': '',
  'reverseTimeline': false,
  'pullMergeOnTop': false
});

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    sendResponse({
      accessToken: store.get('accessToken'),
      reverseTimeline: store.get('reverseTimeline'),
      pullMergeOnTop: store.get('pullMergeOnTop')
    });
  });

