var expect = require('chai').expect;

//The call() method calls a function with a given this value and arguments provided individually.
describe('Function', function() {
	describe('#prototype', function(){
		describe('#apply', function(){
			it('calls a function with a given this value and arguments provided individually.', function(){
				var argumentsToArray = function(){
					return Array.prototype.slice.call(arguments);
				};

				expect( argumentsToArray.apply(null, ['test', 1, {}]) ).to.eql( ['test', 1, {}] );
			});

			it('use: to chain constructors', function(){

				function Product(name, price) {
				  this.name = name;
				  this.price = price;

				  if (price < 0) {
				    throw RangeError('Cannot create product ' +
				                      this.name + ' with a negative price');
				  }

				  return this;
				}

				function Food(name, price) {
				  Product.call(this, name, price);
				  this.category = 'food';
				}

				Food.prototype = Object.create(Product.prototype);
				Food.prototype.constructor = Food; // Reset the constructor from Product to Food

				function Toy(name, price) {
				  Product.call(this, name, price);
				  this.category = 'toy';
				}

				Toy.prototype = Object.create(Product.prototype);
				Toy.prototype.constructor = Toy; // Reset the constructor from Product to Toy

				var cheese = new Food('feta', 5);
				var fun = new Toy('robot', 40);

				expect( cheese.name ).to.equal( 'feta' );
				expect( cheese instanceof Product ).to.be.true;
				expect( cheese.constructor ).to.equal( Food );

			});

			it('use: can invoke an anonymous function', function(){
				var animals = [
				  { species: 'Lion', name: 'King' },
				  { species: 'Whale', name: 'Fail' }
				];

				for (var i = 0; i < animals.length; i++) {
				  (function(i) {
				    this.print = function() {
				      console.log('#' + i + ' ' + this.species
				                  + ': ' + this.name);

				      expect( this ).to.eql( animals[i] );
				    }
				    this.print();
				  }).call(animals[i], i);
				}


			});
		});
	});
});
