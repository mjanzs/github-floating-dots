import Store from "./store/store";

global.browser = require('webextension-polyfill');

let store = new Store('settings', {
  'accessToken': ''
});

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    sendResponse({
      accessToken: store.get('accessToken')
    });
  });

