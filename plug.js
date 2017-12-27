(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
	
	ext.redirect = function(url){
		window.location = url;
	}
	
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
			[' ', 'Redirect to %s', 'redirect', 'http://www.google.com']
        ]
    };

    // Register the extension
    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});