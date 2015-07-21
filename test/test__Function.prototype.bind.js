var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

//The bind() method creates a new function that, when called, has its this keyword set to the provided value,
//with a given sequence of arguments preceding any provided when the new function is called.
describe('Function', function() {
	describe('#prototype', function(){
		describe('#bind', function(){
			var wait = 500;

			it('creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.', function(){

				var objContext = function() {
					this.x = 9;
					expect( this.x ).to.equal( 9 );

					var module = {
						x: 81,
						getX: function() { return this.x; }
					};

					expect( module.getX() ).to.equal( 81 );

					var getX = module.getX;

					expect( getX() ).to.equal( 9 ); // 9, because in this case, "this" refers to the global object

					// Create a new function with 'this' bound to module
					var boundGetX = getX.bind(module);
					expect( boundGetX() ).to.equal( 81 );
				};

				objContext();

			});

			it('use: partial functions (curry)', function(){
				function list() {
					return Array.prototype.slice.call(arguments);
				}

				var list1 = list(1, 2, 3); // [1, 2, 3]
				expect( list1 ).to.eql( [1, 2, 3] );

				// Create a function with a preset leading argument
				var leadingThirtysevenList = list.bind(undefined, 37);

				var list2 = leadingThirtysevenList(); // [37]
				expect( list2 ).to.eql( [37] );
				var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]
				expect( list3 ).to.eql( [37, 1, 2, 3] );
			});

			it('use: timeout', function(done){
				var wait = 300;

				function LateBloomer() {
				  this.petalCount = Math.ceil(Math.random() * 12) + 1;
				}

				LateBloomer.prototype.getMsg = function() {
					return 'I am a beautiful flower with ' + this.petalCount + ' petals!';
				}

				// Declare bloom after a delay of 1 second
				LateBloomer.prototype.bloom = function() {
				  setTimeout(this.declare.bind(this), wait);
				};

				LateBloomer.prototype.declare = function() {
					var msg = this.getMsg();
					this.declared = msg;
					console.log(msg);
				};

				var flower = new LateBloomer();
				flower.bloom();  // after 1 second, triggers the 'declare' method

				setTimeout(function() {
					expect( flower.declared ).to.equal( flower.getMsg() );
					done();
				}, wait+10);

			});

			it('bound functions with new operator construct new instances created by the target function', function(){
				function Point(x, y) {
					this.x = x;
					this.y = y;
				}

				Point.prototype.toString = function() {
					return this.x + ',' + this.y;
				};

				var p = new Point(1, 2);
				expect( p.toString() ).to.equal( '1,2' );


				var emptyObj = {};
				var YAxisPoint = Point.bind(emptyObj, 0/*x*/);
				// not supported in the polyfill below,
				// works fine with native bind:
				var YAxisPoint = Point.bind(null, 0/*x*/);

				var axisPoint = new YAxisPoint(5);
				expect( axisPoint.toString() ).to.equal( '0,5' );

				expect( axisPoint instanceof Point ).to.be.true;
				expect( axisPoint instanceof YAxisPoint ).to.be.true;
				expect( new Point(17, 42) instanceof YAxisPoint ).to.be.true;
			});

			it('use: creating shortcuts', function(){

				unbound:{
					var slice = Array.prototype.slice;

					var list = function() {
						return slice.apply(arguments);
					};

					expect(list(1, 2, 3)).to.eql([1, 2, 3]);
				}

				bound:{
					// same as "slice" in the previous example
					var unboundSlice = Array.prototype.slice;
					var slice = Function.prototype.apply.bind(unboundSlice);

					var list = function() {
						return slice(arguments);
					}

					expect(list(1, 2, 3)).to.eql([1, 2, 3]);
				}
			});
		});
	});
});
