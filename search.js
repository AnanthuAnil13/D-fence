//Set browser for Firefox extensions to be chrome
if (typeof browser !== 'undefined') {
	self.chrome = browser;
}

//Redirect after Install - Thank You for installing page
if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.onInstalled) {
	chrome.runtime.onInstalled.addListener(function (details) {
		if (details.reason == 'install') {
			chrome.tabs.create({
				url: 'https://arcanesociety.in/',
			});
		} else if (details.reason == 'update') {
		}
	});
}

//Redirect after Uninstall - Form
if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.setUninstallURL) {
	chrome.runtime.setUninstallURL('https://arcanesociety.in/');
}

//Identifying and sending Link to Server
function GuardzConnect(info, tab) {
	if (info.linkUrl) {
		var linkurl = info.linkUrl;
		// console.log(linkurl);
		// console.log("linkurl");
	} else if (info.srcUrl) {
		var linkurl = info.srcUrl;
		// console.log(linkurl);
		// console.log("srcurl");
	} else if (info.pageUrl) {
		var linkurl = info.pageUrl;
		// console.log(linkurl);
		// console.log("pageurl");
	} else if (info.frameUrl) {
		var linkurl = info.frameUrl;
		// console.log(linkurl);
		// console.log("frameurl");
	} else {
		console.log("Link Parsing Error");
	}

	//Sending the URL to your server
	try {
		$.getJSON('https://api.ipify.org?format=json', function(data) {  
			// console.log(JSON.stringify(data, null, 2));

			const xhttp = new XMLHttpRequest();
			xhttp.open('GET', 'http://25.9.115.112/index.php?senturl='+linkurl+'&sentip'+data);
			// xhttp.open("GET", "http://hrace.xyz/index.php?senturl="+linkurl);
			xhttp.send();

			xhttp.onload = function() {
				// console.log(this.responseText);
				var output = this.responseText;
				console.log(output);

				//open link in new tab (change ip to domain for a bit of added security)
				chrome.tabs.create({
					url: 'http://25.9.115.112:'+output
					// url: 'http://hrace.xyz:'+output
				});
			}
		});
	} catch(err) {
		alert(err);
	}
}

//User Interface Section
(function() {
	var id = chrome.contextMenus.create({
		title: 'Open link in safe mode',
		contexts: ['all', 'selection', 'link', 'page', 'image'],
		onclick: GuardzConnect
	});
})();
