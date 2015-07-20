var expect = require('chai').expect;

//The Object.isSealed() method determines if an object is sealed.
describe('Object', function() {
	describe('#isSealed', function(){

		var oneProp = { p: 42 };
		var sealed = { s: 'yes' };

		it('determines if an object is sealed.', function(){
			// A new object is extensible, so it is not sealed.
			expect( Object.isSealed({}) ).to.be.false;

			// A new object with one property is also extensible, ergo not sealed.
			expect( Object.isSealed(oneProp) ).to.be.false;

		});

		it('returns true for non-extensible objects that are vacuously sealed', function(){
			// An empty object which is not extensible is vacuously sealed.
			var vacuouslysealed = Object.preventExtensions({});
			expect( Object.isSealed(vacuouslysealed) ).to.be.true;
		});

		it('not true of a non-empty object, unless its properties are all non-configurable', function(){
			// The same is not true of a non-empty object, unless its properties are all non-configurable.
			var hasProp = { fee: 'fie foe fum' };
			Object.preventExtensions(hasProp);
			expect( Object.isSealed(hasProp) ).to.be.false;

			// But make them all non-configurable and the object becomes sealed.
			Object.defineProperty(hasProp, 'fee', { configurable: false });
			expect( Object.isSealed(hasProp) ).to.be.true;
		});

		it('preventing extension does not make it sealed, properties are still writable', function(){
			// Preventing extensions to the object still doesn't make it sealed,
			// because the property is still configurable (and writable).
			Object.preventExtensions(oneProp);
			expect( Object.isSealed(oneProp) ).to.be.false;

			// ...but then deleting that property makes the object vacuously sealed.
			delete oneProp.p;
			expect( Object.isSealed(oneProp) ).to.be.true;
		});


		it('non-extensible object with non-writable but still configurable property is not sealed', function(){
			// A non-extensible object with a non-writable but still configurable property is not sealed.
			var nonWritable = { e: 'plep' };
			Object.preventExtensions(nonWritable);
			Object.defineProperty(nonWritable, 'e', { writable: false }); // make non-writable
			expect( Object.isSealed(nonWritable) ).to.be.false;

			// Changing that property to non-configurable then makes the object sealed.
			Object.defineProperty(nonWritable, 'e', { configurable: false }); // make non-configurable
			expect( Object.isSealed(nonWritable) ).to.be.true;

		});

		it('non-extensible object with a configurable accessor property is not sealed', function(){
			// A non-extensible object with a configurable accessor property isn't sealed.
			var accessor = { get food() { return 'yum'; } };
			Object.preventExtensions(accessor);
			expect( Object.isSealed(accessor) ).to.be.false;

			// ...but make that property non-configurable and it becomes sealed.
			Object.defineProperty(accessor, 'food', { configurable: false });
			expect( Object.isSealed(accessor) ).to.be.true;
		});

		it('objects that have had Object.seal method called on them are sealed', function(){
			// But the easiest way for an object to be sealed is if Object.freeze has been called on it.
			// The easiest way to seal an object, of course, is Object.seal.
			var sealed = { s: 'yes' };
			expect ( Object.isSealed(sealed) ).to.be.false;
			Object.seal(sealed);
			expect ( Object.isSealed(sealed) ).to.be.true;
		});

		it('By definition, a sealed object is non-extensible', function(){
			var sealedObject = Object.seal({});
			// By definition, a sealed object is non-extensible.
			expect( Object.isExtensible(sealedObject) ).to.be.false;
		});

		it('By definition, a sealed object might be frozen but does not have to be', function(){
			var sealedObject = Object.seal({});
			// Also by definition, a sealed object is sealed.
			expect( Object.isFrozen(sealedObject) ).to.be.true;

			var s2 = Object.seal({ p: 3 });
			expect( Object.isFrozen(s2) ).to.be.false; // === false ('p' is still writable)

			var s3 = Object.seal({ get p() { return 0; } });
			expect( Object.isFrozen(s3) ).to.be.true; // === true (only configurability matters for accessor properties)
		});
	});
});

