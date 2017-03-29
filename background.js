chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if(changeInfo.status == 'complete' && tab.active) {
		chrome.tabs.executeScript(null, {file: "jquery-2.2.4.min.js"});
		chrome.tabs.executeScript(null, {file: "findAndReplaceDOMText.js"});
		chrome.tabs.executeScript(null, {file: "onionGatherer.js"});	
	}
})