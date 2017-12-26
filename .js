(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
	
	ext.waitonesec = function(callback){
		windows.setTimeout(function(){callback()}, 1000);
	}
	
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
			['w', 'waits one second', 'waitonesec']
        ]
    };

    // Register the extension
    ScratchExtensions.register('My Extension That Does Nothing Much', descriptor, ext);
})({});