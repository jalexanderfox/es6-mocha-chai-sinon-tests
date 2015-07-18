// Javascript Array methods tests including ES6
var expect = require('chai').expect;

//The keys() method returns a new Array Iterator that contains the keys for each index in the array.
describe('Array', function() {
	describe('#prototype', function(){
		describe('#keys', function(){
			it('returns a new Array Iterator that contains the keys for each index in the array.', function(){
				var arr = ["a", "b", "c"];
				var iterator = arr.keys();

				expect( iterator.next() ).to.eql( { value: 0, done: false } );
				expect( iterator.next() ).to.eql( { value: 1, done: false } );
				expect( iterator.next() ).to.eql( { value: 2, done: false } );
				expect( iterator.next() ).to.eql( { value: undefined, done: true } );
			});
			it('does not ignore holes', function(){
				var arr = ["a", , "c"];
				var sparseKeys = Object.keys(arr);
				// rest parameters not supported yet in node...
				//var denseKeys = [...arr.keys()];
				expect( sparseKeys ).to.eql( ['0', '2'] );
				//expect( denseKeys ).to.eql( [0, 1, 2] );
			});
		})

	})
}

);