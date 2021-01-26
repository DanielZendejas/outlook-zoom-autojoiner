chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  innerText = "";

  if (urls.length === 0) {
    innerText = "No Zoom URLs detected for today";
  } else {
    for (var url of request.urls) {
      innerText += "<a href='" + url + ">" + url + "</ a>";
    }
  }

  document.querySelector("#urls").innerText = innerText;
});

chrome.tabs.query({active: true}, function(tab) {
  chrome.runtime.sendMessage({tab, openPopup: true});
});
