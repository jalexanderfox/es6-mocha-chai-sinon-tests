var expect = require('chai').expect;

//The length property specifies the number of arguments expected by the function.
describe('Function', function() {
	describe('#length', function(){
		it('property specifies the number of arguments expected by the function.', function(){
			expect( Function.length ).to.equal( 1 ); /* 1 */

			expect( (function()        {}).length ).to.equal( 0 ); /* 0 */
			expect( (function(a)       {}).length ).to.equal( 1 ); /* 1 */
			expect( (function(a, b)    {}).length ).to.equal( 2 ); /* 2 etc. */
			// rest parameters are not working yet
			// expect( (function(...args) {}).length ).to.equal( 0 ); /* 0, rest parameter is not counted */
		});
	});
});
