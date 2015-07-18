var expect = require('chai').expect;

require('../polyfills/polyfills').getPolyfill('Object.defineProperties');

//The Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.
describe('Object', function() {
	describe.skip('#defineProperties', function(){
		it('defines new or modifies existing properties directly on an object, returning the object.', function(){
			var obj = {};
			Object.defineProperties(obj, {
			  "property1": {
			    value: true,
			    writable: true
			  },
			  "property2": {
			    value: "Hello",
			    writable: false
			  }
			  // etc. etc.
			});

			expect( obj ).to.eql( { "property1": { value:true, writable:true }, "property2": { value:"Hello", writable: false}} );
		});

	})
}

);