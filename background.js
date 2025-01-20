chrome.action.onClicked.addListener((tab) => {
  if (tab.url && tab.url.match(/^https:\/\/www\.youtube\.com\/watch\?v=[^&]+/)) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: runBookmarklet
    });
  } else {
    console.log("This extension only works on YouTube.");
  }
});

function runBookmarklet() {
    const url=window.document.URL;
    const videoMatch=url.match(/^https:\/\/www\.youtube\.com\/watch\?v=([^&]+)/);

    if(videoMatch){window.location.href=url+'&list=ULcxqQ59vzyTk';}else{console.log("This extension only works on YouTube.")};
}
