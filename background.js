chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.openPopup) {
    // programmatic execution because Outlook takes a bit to load
    script = `
      urls = [];

      for (var span of document.getElementsByClassName("bidi")) {
        if (span.innerText.match(/https:[^z]+zoom/)) {
          urls.push(span.innerText);
        }
      }

      chrome.runtime.sendMessage({ urls: urls, tab: ` + request.tab.id + `});
    `;

    chrome.tabs.executeScript({code: script});
  }
});

// find URLs on click of browserAction
// send as a message to popup.js, who will have a listener
// popup.js will modify the content of popup.html with the urls found in browserAction
