console.log("i am a backgeound runner file");

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    const url = activeTab.url;

    console.log("User opened the extension on:", url);

    // You can now send the URL to the popup, save it, or process it
  });
});
