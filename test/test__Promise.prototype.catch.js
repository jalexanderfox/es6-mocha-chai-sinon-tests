var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

//The catch() method returns a Promise and deals with rejected cases only.
//It behaves the same as calling Promise.prototype.then(undefined, onRejected).
describe('Promise', function() {
	describe('#prototype', function(){
		describe('#catch', function(){
			it('returns a Promise and deals with rejected cases only', function(done){
				var p1 = new Promise(function(resolve, reject) {
					resolve("Success");
				});

				var caught = '';

				p1.then(function(value) {
					console.log(value); // "Success!"
					throw "Promise.prototype.catch::thrown error";
				}).catch(function(e) {
					console.log(e);
					caught = e;
				});

				setTimeout(function() {
					expect( caught ).to.equal( "Promise.prototype.catch::thrown error" );
					done();
				}, 10);
			});
		});
	});
});
