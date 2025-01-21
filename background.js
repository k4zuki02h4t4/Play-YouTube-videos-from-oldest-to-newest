chrome.action.onClicked.addListener((tab) => {
  if (tab.url.match(/^https:\/\/www\.youtube\.com\/watch\?v=[^&]+/)) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: runBookmarklet
    });
  }
});

function runBookmarklet() {
  window.location.href=window.document.URL+'&list=ULcxqQ59vzyTk';
}
