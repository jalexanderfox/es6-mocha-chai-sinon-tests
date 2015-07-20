var expect = require('chai').expect;

//The Object.isFrozen() determines if an object is frozen.
describe('Object', function() {
	describe('#isFrozen', function(){

		var oneProp = { p: 42 };
		var frozen = { 1: 81 };

		it('determines if an object is frozen: a new object is extensible so it is not frozen', function(){
			// A new object is extensible, so it is not frozen.
			expect( Object.isFrozen({}) ).to.be.false;

			// A new object with one property is also extensible, ergo not frozen.
			expect( Object.isFrozen(oneProp) ).to.be.false;

		});

		it('returns true for non-extensible objects that are vacuously frozen', function(){
			// An empty object which is not extensible is vacuously frozen.
			var vacuouslyFrozen = Object.preventExtensions({});
			expect( Object.isFrozen(vacuouslyFrozen) ).to.be.true;
		});

		it('preventing extension does not make it frozen, properties are still writable', function(){
			// Preventing extensions to the object still doesn't make it frozen,
			// because the property is still configurable (and writable).
			Object.preventExtensions(oneProp);
			expect( Object.isFrozen(oneProp) ).to.be.false;

			// ...but then deleting that property makes the object vacuously frozen.
			delete oneProp.p;
			expect( Object.isFrozen(oneProp) ).to.be.true;
		});


		it('non-extensible object with non-writable but still configurable property is not frozen', function(){
			// A non-extensible object with a non-writable but still configurable property is not frozen.
			var nonWritable = { e: 'plep' };
			Object.preventExtensions(nonWritable);
			Object.defineProperty(nonWritable, 'e', { writable: false }); // make non-writable
			expect( Object.isFrozen(nonWritable) ).to.be.false;

			// Changing that property to non-configurable then makes the object frozen.
			Object.defineProperty(nonWritable, 'e', { configurable: false }); // make non-configurable
			expect( Object.isFrozen(nonWritable) ).to.be.true;

		});


		it('non-extensible object with a non-configurable but still writable property also is not frozen', function(){
			// A non-extensible object with a non-configurable but still writable property also isn't frozen.
			var nonConfigurable = { release: 'the kraken!' };
			Object.preventExtensions(nonConfigurable);
			Object.defineProperty(nonConfigurable, 'release', { configurable: false });
			expect( Object.isFrozen(nonConfigurable) ).to.be.false;

			// Changing that property to non-writable then makes the object frozen.
			Object.defineProperty(nonConfigurable, 'release', { writable: false });
			expect( Object.isFrozen(nonConfigurable) ).to.be.true;
		});


		it('non-extensible object with a configurable accessor property is not frozen', function(){
			// A non-extensible object with a configurable accessor property isn't frozen.
			var accessor = { get food() { return 'yum'; } };
			Object.preventExtensions(accessor);
			expect( Object.isFrozen(accessor) ).to.be.false;

			// ...but make that property non-configurable and it becomes frozen.
			Object.defineProperty(accessor, 'food', { configurable: false });
			expect( Object.isFrozen(accessor) ).to.be.true;
		});

		it('objects that have had Object.freeze method called on them are frozen', function(){
			// But the easiest way for an object to be frozen is if Object.freeze has been called on it.
			expect ( Object.isFrozen(frozen) ).to.be.false;
			Object.freeze(frozen);
			expect ( Object.isFrozen(frozen) ).to.be.true;
		});

		it('// By definition, a frozen object is non-extensible', function(){
			// By definition, a frozen object is non-extensible.
			expect( Object.isExtensible(frozen) ).to.be.false;
		});

		it('// By definition, a frozen object is sealed', function(){
			// Also by definition, a frozen object is sealed.
			expect( Object.isSealed(frozen) ).to.be.true;
		});
	});
});
