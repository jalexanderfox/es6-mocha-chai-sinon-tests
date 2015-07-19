var expect = require('chai').expect;

//The map() method creates a new array with the results of calling a provided function on every element in this array.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#map', function(){
			it('creates a new array with the results of calling a provided function on every element in this array.', function(){
				var numbers = [1, 4, 9];
				var roots = numbers.map(Math.sqrt);
				expect(roots).to.eql([1, 2, 3]);
				expect(numbers).to.eql([1, 4, 9]);
				// roots is now [1, 2, 3], numbers is still [1, 4, 9]

			});

			it('reformat objects in an array', function(){
				var kvArray = [{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}];
				var reformattedArray = kvArray.map(function(obj){ 
				   var rObj = {};
				   rObj[obj.key] = obj.value;
				   return rObj;
				});

				expect( reformattedArray ).to.eql( [{1:10}, {2:20}, {3:30}] );
				expect( kvArray ).to.eql( [{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}] );
				// reformattedArray is now [{1:10}, {2:20}, {3:30}],
				// kvArray is still [{key:1, value:10}, {key:2, value:20}, {key:3, value: 30}]

			});
			it('generically', function(){
				var map = Array.prototype.map;
				var a = map.call('Hello World', function(x) { return x.charCodeAt(0); });
				expect( a ).to.eql( [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100] );
				// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]

			});

			it('to reverse a string', function(){

				var str = '12345';
				var rts = [].map.call(str, function(x) {
				  return x;
				}).reverse().join('');

				expect( rts ).to.equal('54321');
				// Output: '54321'
				// Bonus: use '===' to test if original string was a palindrome

			});

			it('tricky use cases', function(){
				// Consider:
				expect( ['1', '2', '3'].map(parseInt) ).to.eql( [1, NaN, NaN] );
				// While one could expect [1, 2, 3]
				// The actual result is [1, NaN, NaN]

				// parseInt is often used with one argument, but takes two.
				// The first is an expression and the second is the radix.
				// To the callback function, Array.prototype.map passes 3 arguments: 
				// the element, the index, the array
				// The third argument is ignored by parseInt, but not the second one,
				// hence the possible confusion. See the blog post for more details

				function returnInt(element) {
				  return parseInt(element, 10);
				}

				expect( ['1', '2', '3'].map(returnInt) ).to.eql( [1, 2, 3] );
				// Actual result is an array of numbers (as expected)

				// A simpler way to achieve the above, while avoiding the "gotcha":
				expect( ['1', '2', '3'].map(Number) ).to.eql( [1, 2, 3] );

			});
		});
	});
});



// Example: using map generically querySelectorAll

// This example shows how to iterate through a collection of objects collected by querySelectorAll. In this case we get all selected options on the screen and printed on the console:

// var elems = document.querySelectorAll('select option:checked');
// var values = [].map.call(elems, function(obj) {
//   return obj.value;
// });