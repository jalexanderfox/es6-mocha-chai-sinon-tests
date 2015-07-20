

// the iife way
// (function(dirname) {
// 	exports.getPolyfill = function(name) {
// 		if(process.env.NOPOLYFILLS && process.env.NOPOLYFILLS === 'true'){
// 			console.log('polyfills are turned off.');
// 			return this;
// 		} else {
// 			return require( dirname + '/' + name);
// 		}
// 	}
// })(__dirname);

// the curry way
var getPolyfillFrom = function(dirname) {
	return function(name) {
		if(process.env.NOPOLYFILLS && process.env.NOPOLYFILLS === 'true'){
			console.log('polyfills are turned off.');
			return this;
		} else {
			return require( dirname + '/' + name);
		}
	};
};

exports.getPolyfill = getPolyfillFrom(__dirname);


// partial function/curry with bind
var getPolyfill = function(dirname, name) {
	if(process.env.NOPOLYFILLS && process.env.NOPOLYFILLS === 'true'){
		console.log('polyfills are turned off.');
		return this;
	} else {
		return require( dirname + '/' + name);
	}
};

exports.getPolyfill = getPolyfill.bind(undefined, __dirname);

