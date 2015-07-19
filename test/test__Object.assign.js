var expect = require('chai').expect;

// Polyfill
require('../polyfills/polyfills').getPolyfill('Object.assign');

//The Object.assign() method is used to copy the values of all enumerable own properties
//from one or more source objects to a target object. It will return the target object.
describe('Object', function() {
	describe('#assign', function(){
		it('copies the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.', function(){

		});
		it('clone an object', function(){
			var obj = { a: 1 };
			var copy = Object.assign({}, obj);
			expect( copy ).to.eql( { a: 1 } );
		});
		it('merge objects', function(){
			var o1 = { a: 1 };
			var o2 = { b: 2 };
			var o3 = { c: 3 };

			var obj = Object.assign(o1, o2, o3);
			expect( obj ).to.eql( { a: 1, b: 2, c: 3 } );
			expect( o1 ).to.eql( { a: 1, b: 2, c: 3 } ); //target object itself is changed.
		});

		// rest argument not supported yet ie. ...sources
		// it('copy accessors', function(){
		// 	var obj = {
		// 	  foo: 1,
		// 	  get bar() {
		// 	    return 2;
		// 	  }
		// 	};

		// 	var copy = Object.assign({}, obj); 
		// 	console.log(copy); 
		// 	// { foo: 1, bar: 2 }, the value of copy.bar is obj.bar's getter's return value.

		// 	// This is an assign function which can copy accessors.
		// 	function myAssign(target, ...sources) {
		// 	  sources.forEach(source => {
		// 	    Object.defineProperties(target, Object.keys(source).reduce((descriptors, key) => {
		// 	      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
		// 	      return descriptors;
		// 	    }, {}));
		// 	  });
		// 	  return target;
		// 	}

		// 	var copy = myAssign({}, obj);
		// 	expect( copy ).to.eql( { foo:1, get bar() { return 2 } } );
		// });

		// it.skip('copy symbol types', function(){
		// 	var o1 = { a: 1 };
		// 	var o2 = { [Symbol('foo')]: 2 };

		// 	var obj = Object.assign({}, o1, o2);
		// 	expect( obj ).to.eql( { a: 1, [Symbol("foo")]: 2 } );
		// });

	});
});
