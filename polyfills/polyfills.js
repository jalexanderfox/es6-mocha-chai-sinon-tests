
(function(dirname) {
	exports.getPolyfill = function(name) {
		if(process.env.NOPOLYFILLS && process.env.NOPOLYFILLS === 'true'){
			console.log('polyfills are turned off.');
			return this;
		} else {
			return require( dirname + '/' + name);
		}
	}
})(__dirname);