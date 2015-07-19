var expect = require('chai').expect;

//The sort() method sorts the elements of an array in place and returns the array.
//The sort is not necessarily stable. The default sort order is according
//to string Unicode code points.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#sort', function(){
			function isBigEnough(element, index, array) {
				return element >= 10;
			}
			it('sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.', function(){
				var fruit = ['cherries', 'apples', 'bananas'];
				fruit.sort();
				expect( fruit ).to.eql( ['apples', 'bananas', 'cherries'] );

				var scores = [1, 10, 2, 21];
				scores.sort(); // [1, 10, 2, 21]
				// Watch out that 10 comes before 2,
				// because '10' comes before '2' in Unicode code point order.
				expect( scores ).to.eql( [1, 10, 2, 21] );

				var things = ['word', 'Word', '1 Word', '2 Words'];
				things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
				// In Unicode, numbers come before upper case letters,
				// which come before lower case letters.
				expect( things ).to.eql( ['1 Word', '2 Words', 'Word', 'word'] );


				var numbers = [4, 2, 5, 1, 3];
				numbers.sort(function(a, b) {
				  return a - b;
				});
				expect( numbers ).to.eql( [1, 2, 3, 4, 5] );
			});
			it('can sort arrays of objects.', function(){
				var items = [
				  { name: 'Edward', value: 21 },
				  { name: 'Sharpe', value: 37 },
				  { name: 'And', value: 45 },
				  { name: 'The', value: -12 },
				  { name: 'Magnetic' },
				  { name: 'Zeros', value: 37 }
				];
				items.sort(function (a, b) {
				  if (a.name > b.name) {
				    return 1;
				  }
				  if (a.name < b.name) {
				    return -1;
				  }
				  // a must be equal to b
				  return 0;
				});

				expect( items ).to.eql([
				  { name: 'And', value: 45 },
				  { name: 'Edward', value: 21 },
				  { name: 'Magnetic' },
				  { name: 'Sharpe', value: 37 },
				  { name: 'The', value: -12 },
				  { name: 'Zeros', value: 37 }
				]);
			});
			it('non-ASCII characters', function(){
				var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
				items.sort(function (a, b) {
				  return a.localeCompare(b);
				});

				expect( items ).to.eql( ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé'] );
			});
			it('can be used with map for better sorting', function(){
				// the array to be sorted
				var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

				// temporary array holds objects with position and sort-value
				var mapped = list.map(function(el, i) {
				  return { index: i, value: el.toLowerCase() };
				})

				// sorting the mapped array containing the reduced values
				mapped.sort(function(a, b) {
				  return +(a.value > b.value) || +(a.value === b.value) - 1;
				});

				// container for the resulting order
				var result = mapped.map(function(el){
				  return list[el.index];
				});

				expect( result ).to.eql( ['alpha', 'bravo', 'CHARLIE', 'Delta'] );

			});

		});
	});
});



