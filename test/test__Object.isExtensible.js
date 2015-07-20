var expect = require('chai').expect;

//The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it).
describe('Object', function() {
	describe('#isExtensible', function(){
		it('determines if an object is extensible (whether it can have new properties added to it).', function(){
			// New objects are extensible.
			var empty = {};
			expect( Object.isExtensible(empty) ).to.be.true; // === true

			// ...but that can be changed.
			Object.preventExtensions(empty);
			expect( Object.isExtensible(empty) ).to.be.false; // === false

			// Sealed objects are by definition non-extensible.
			var sealed = Object.seal({});
			expect( Object.isExtensible(sealed) ).to.be.false; // === false

			// Frozen objects are also by definition non-extensible.
			var frozen = Object.freeze({});
			expect( Object.isExtensible(frozen) ).to.be.false; // === false
		});
	});
});
