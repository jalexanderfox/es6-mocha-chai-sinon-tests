
(function(dirname) {
	exports.getPolyfill = function(name) {
		console.error(typeof process.env.NOPOLYFILLS);
		if(process.env.NOPOLYFILLS && process.env.NOPOLYFILLS === 'true'){
			console.log('polyfills are turned off.');
			return this;
		} else {
			return require( dirname + '/' + name);
		}
	}
})(__dirname);