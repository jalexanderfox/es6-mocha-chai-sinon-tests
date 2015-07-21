var expect = require('chai').expect;

//The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).
describe('Function', function() {
	describe('#prototype', function(){
		describe('#apply', function(){
			it('calls a function with a given this value and arguments provided as an array (or an array-like object).', function(){
				var argumentsToArray = function(){
					return Array.prototype.slice.call(arguments);
				};

				expect( argumentsToArray.apply(null, ['test', 1, {}]) ).to.eql( ['test', 1, {}] );
			});

			it('use: to chain constructors', function(){
				Function.prototype.construct = function (aArgs) {
					var oNew = Object.create(this.prototype);
					this.apply(oNew, aArgs);
					return oNew;
				};

				// Function.prototype.construct = function(aArgs) {
				//   var fConstructor = this, fNewConstr = function() { fConstructor.apply(this, aArgs); };
				//   fNewConstr.prototype = fConstructor.prototype;
				//   return new fNewConstr();
				// };

				function MyConstructor() {
					for (var nProp = 0; nProp < arguments.length; nProp++) {
						this['property' + nProp] = arguments[nProp];
					}
				}

				var myArray = [4, 'Hello world!', false];
				var myInstance = MyConstructor.construct(myArray);

				expect( myInstance.property1 ).to.equal( 'Hello world!' );
				expect( myInstance instanceof MyConstructor ).to.be.true;
				expect( myInstance.constructor ).to.equal( MyConstructor );
			});

			it('use: with builtin functions', function(){
				/* min/max number in an array */
				var numbers = [5, 6, 2, 3, 7];

				/* using Math.min/Math.max apply */
				var max = Math.max.apply(null, numbers); /* This about equal to Math.max(numbers[0], ...)
				or Math.max(5, 6, ...) */
				var min = Math.min.apply(null, numbers);

				expect( max ).to.equal( 7 );
				expect( min ).to.equal( 2 );

				/* vs. simple loop based algorithm */
				max = -Infinity, min = +Infinity;

				for (var i = 0; i < numbers.length; i++) {
					if (numbers[i] > max) {
						max = numbers[i];
					}
					if (numbers[i] < min) {
						min = numbers[i];
					}
				}

				expect( max ).to.equal( 7 );
				expect( min ).to.equal( 2 );


				function minOfArray(arr) {
					var min = Infinity;
					var QUANTUM = 32768;

					for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
						var submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
						min = Math.min(submin, min);
					}

					return min;
				}

				var min = minOfArray([5, 6, 2, 3, 7]);

				expect( min ).to.equal( 2 );

			});

			it('use: can monkey-patch built-in functions', function(){
				var someobject = { foo: function(){ return 'original foo'; }};
				var originalfoo = someobject.foo;
				someobject.foo = function() {
				  // Do stuff before calling function
				  console.log(arguments);
				  // Call the function as it would have been called normally:
				  return originalfoo.apply(this, arguments);
				  // Run stuff after, here.
				};

				expect( someobject.foo('argument') ).to.equal('original foo');
			});


		});
	});
});
