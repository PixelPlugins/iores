(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
	
	ext.httpreq = function(url, callback){
		console.log(url);
		xhr = new XMLHttpRequestRequest();
		xhr.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				console.log(this.responseText);
				callback(this.responseText);
			}
		}
		xhr.open('GET', url, false);
		xhr.send();
	}
	
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
			['R', 'Send HTTP Request to %s', 'httpreq', 'http://www.google.com']
        ]
    };

    // Register the extension
    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});