var expect = require('chai').expect;

//The isPrototypeOf() method tests for an object in another object's prototype chain.
describe('Object', function() {
	describe('#prototype', function(){
		describe('#isPrototypeOf', function(){
			it('tests for an object in another object\'s prototype chain.', function(){
				function Fee() {
				  // ...
				}

				function Fi() {
				  // ...
				}
				Fi.prototype = new Fee();

				function Fo() {
				  // ...
				}
				Fo.prototype = new Fi();

				function Fum() {
				  // ...
				}
				Fum.prototype = new Fo();


				//Later on down the road, if you instantiate Fum and need to check if
				//Fi's prototype exists within the Fum prototype chain, you could do this:
				var fum = new Fum();
				// ...

				if (Fi.prototype.isPrototypeOf(fum)) {
				  // do something safe
				}

				function Fiddle() {
					// not in the chain
				}

				expect( Fee.prototype.isPrototypeOf(fum) ).to.be.true;
				expect( Fi.prototype.isPrototypeOf(fum) ).to.be.true;
				expect( Fo.prototype.isPrototypeOf(fum) ).to.be.true;
				expect( Fum.prototype.isPrototypeOf(fum) ).to.be.true;
				expect( Object.prototype.isPrototypeOf(fum) ).to.be.true;
				expect( Fiddle.prototype.isPrototypeOf(fum) ).to.be.false;

			});
		});
	});
});
