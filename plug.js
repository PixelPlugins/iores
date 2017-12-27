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
	
	ext.install = function(url, name){
		window.location = 'http://localhost:9111/install~'+url+'~'+name;
	}
	
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
			[' ', 'Redirect to %s', 'redirect', 'http://www.google.com'],
			[' ', 'Install app - Zip file URL: %s , Program name: %s', 'install']
        ]
    };

    // Register the extension
    ScratchExtensions.register('Plexicraft API', descriptor, ext);
})({});