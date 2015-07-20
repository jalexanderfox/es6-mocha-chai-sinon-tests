var expect = require('chai').expect;

//The propertyIsEnumerable() method returns a Boolean indicating whether the specified property is enumerable.
describe('Object', function() {
	describe('#prototype', function(){
		describe('#propertyIsEnumerable', function(){
			it('returns a Boolean indicating whether the specified property is enumerable.', function(){
				var a = ['is enumerable'];

				expect( a.propertyIsEnumerable(0) ).to.be.true;
				expect( a.propertyIsEnumerable('length') ).to.be.false;

				expect( Math.propertyIsEnumerable('random') ).to.be.false;
				expect( this.propertyIsEnumerable('Math') ).to.be.false;
			});

			it('Direct versus inherited properties', function(){
				var a = [];
				expect( a.propertyIsEnumerable('constructor') ).to.be.false;

				function firstConstructor() {
				  this.property = 'is not enumerable';
				}

				firstConstructor.prototype.firstMethod = function() {};

				function secondConstructor() {
				  this.method = function method() { return 'is enumerable'; };
				}

				secondConstructor.prototype = new firstConstructor;
				secondConstructor.prototype.constructor = secondConstructor;

				var o = new secondConstructor();
				o.arbitraryProperty = 'is enumerable';

				expect( o.propertyIsEnumerable('arbitraryProperty') ).to.be.true;
				expect( o.propertyIsEnumerable('method') ).to.be.true;
				expect( o.propertyIsEnumerable('property') ).to.be.false;

				o.property = 'is enumerable';

				expect( o.propertyIsEnumerable('property') ).to.be.true;

				// These return false as they are on the prototype which
				// propertyIsEnumerable does not consider (even though the last two
				// are iteratable with for-in)
				expect( o.propertyIsEnumerable('prototype') ).to.be.false; // (as of JS 1.8.1/FF3.6)
				expect( o.propertyIsEnumerable('constructor') ).to.be.false;
				expect( o.propertyIsEnumerable('firstMethod') ).to.be.false;
			});
		});
	});
});
