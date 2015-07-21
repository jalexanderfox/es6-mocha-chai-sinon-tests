var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);


//The Promise.reject(reason) method returns a Promise object that is rejected with the given reason.
describe('Promise', function() {
	describe('#reject', function() {
		it('method returns a Promise object that is rejected with the given reason.', function(done){


			var test1 = '';
			var test2 = '';

			Promise.reject("Testing static reject").then(function(reason) {
			  // not called
			}, function(reason) {
			  console.log(reason); // "Testing static reject"
			  test1 = reason;
			});

			Promise.reject(new Error("fail")).then(function(error) {
			  // not called
			}, function(error) {
			  console.log(error); // Stacktrace
			  test2 = error;
			});

			setTimeout(function() {
				expect( test1 ).to.equal( "Testing static reject" );
				expect( test2 ).to.eql( new Error("fail") );
				done();
			}, 10);

		});
	});
});
