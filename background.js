// https://developer.chrome.com/docs/extensions/reference/browsingData/
chrome.tabs.onActivated.addListener(info => {
  chrome.browsingData.remove({
    "since": 0,  // From the beginning of time
  }, {
    "cache": false,
    "cookies": false,
    "history": true,
  }, () => {
  });
});
