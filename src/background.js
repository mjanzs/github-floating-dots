global.browser = require('webextension-polyfill');

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.pageAction.show(sender.tab.id);
    sendResponse({
      access_token: store.get('accessToken')
    });
  });

