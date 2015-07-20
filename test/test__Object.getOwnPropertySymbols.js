var expect = require('chai').expect;

//The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object.
describe('Object', function() {
	describe('#getOwnPropertySymbols', function(){
		it('returns an array of all symbol properties found directly upon a given object.', function(){
			var obj = {};
			var a = Symbol('a');
			var b = Symbol.for('b');

			obj[a] = 'localSymbol';
			obj[b] = 'globalSymbol';

			var objectSymbols = Object.getOwnPropertySymbols(obj);

			expect( objectSymbols.length ).to.equal( 2 ); // 2
			console.log(objectSymbols);        // [Symbol(a), Symbol(b)]
			console.log(objectSymbols[0]);      // Symbol(a)
			// these throw type errors
			// expect( objectSymbols ).to.eql( [Symbol(a), Symbol(b)] );
			// expect( objectSymbols[0].toString() ).to.eql( 'Symbol(a)' );
		});
	});
});
