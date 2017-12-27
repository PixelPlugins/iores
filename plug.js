(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
	
	ext.httpreq = function(url){
		console.log(url);
		var retval = 'Err';
		xhr = new XMLHttpRequestRequest();
		xhr.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				retval = this.responseText;
				console.log(this.responseText);
			}
		}
		xhr.open('GET', url, false);
		xhr.send();
		return retval;
	}
	
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
			['r', 'Send HTTP Request to %s', 'httpreq', 'http://www.google.com']
        ]
    };

    // Register the extension
    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});