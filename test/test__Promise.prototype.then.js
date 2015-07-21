var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

//The then() method returns a Promise. It takes two arguments, both are callback functions for the success and failure cases of the Promise.
describe('Promise', function() {
	describe('#prototype', function(){
		describe('#catch', function(){
			it('returns a Promise. It takes two arguments, both are callback functions for the success and failure cases of the Promise.', function(){
				var p1 = new Promise(function(resolve, reject) {
				  // setTimeout(function(){ resolve("Success!"); }, 10);
				  resolve("Success!");
				  // or
				  // reject ("Error!");
				});

				p1.then(function(value) {
				  console.log(value); // Success!
				}, function(reason) {
				  console.log(reason); // Error!
				});

				return expect( p1 ).to.eventually.equal( "Success!" );
			});

			it('can chain next callbacks', function(done){
				var p2 = new Promise(function(resolve, reject) {
				  resolve(1);
				});

				// variables for testing purposes
				var firstThen = 0;
				var secondThen = 0;

				p2.then(function(value) {
					firstThen =  value;
				  console.log(value); // 1
				  return value + 1;
				}).then(function(value) {
					secondThen = value;
				  console.log(value); // 2
				});

				setTimeout(function(){
					expect( firstThen ).to.equal( 1 );
					expect( secondThen ).to.equal( 2 );
					done();
				}, 10);

			});
		});
	});
});
