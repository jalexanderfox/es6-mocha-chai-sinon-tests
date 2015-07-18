var expect = require('chai').expect;

//The Object.create() method creates a new object with the specified prototype object and properties.
describe('Object', function() {
	describe('#create', function(){
		it('creates a new object with the specified prototype object and properties.', function(){

			// Shape - superclass
			function Shape() {
			  this.x = 0;
			  this.y = 0;
			}

			// superclass method
			Shape.prototype.move = function(x, y) {
			  this.x += x;
			  this.y += y;
			  return('Shape moved.');
			};

			// Rectangle - subclass
			function Rectangle() {
			  Shape.call(this); // call super constructor.
			}

			// subclass extends superclass
			Rectangle.prototype = Object.create(Shape.prototype);
			Rectangle.prototype.constructor = Rectangle;

			var rect = new Rectangle();

			expect( rect instanceof Rectangle ).to.be.true; // true
			expect( rect instanceof Shape ).to.be.true; // true
			expect( rect.move(1, 1) ).to.equal('Shape moved.'); // Outputs, 'Shape moved.'

		});

	})
}

);