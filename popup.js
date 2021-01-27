chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  innerText = "";
  urls = request.urls;

  if (urls.length === 0) {
    innerText = "No Zoom URLs detected for today";
  } else {
    var list = document.createElement("ul");
    for (var url of urls) {
      var li = document.createElement("li");
      var link = document.createElement("a");
      link.textContent = url;
      link.href = url;
      link.target = "_blank";
      li.appendChild(link);
      list.appendChild(li);
    }
    document.querySelector("#urls").appendChild(list);
  }

});

chrome.tabs.query({active: true}, function(tab) {
  chrome.runtime.sendMessage({tab, openPopup: true});
});
