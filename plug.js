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
		$.ajax({
			url: url,
			dataType: 'text',
			success: function(data){
				callback(data);
			}
		});
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