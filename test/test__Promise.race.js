var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);


//The Promise.race(iterable) method returns a promise that resolves or rejects
//as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.
describe('Promise', function() {
	describe('#race', function() {
		it('returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.', function(){

			// variables for testing purposes
			var race1Result = '';
			var race2Result = '';
			var race3Result = '';


			var p1 = new Promise(function(resolve, reject) {
			    setTimeout(resolve, 500, "one");
			});
			var p2 = new Promise(function(resolve, reject) {
			    setTimeout(resolve, 100, "two");
			});

			Promise.race([p1, p2]).then(function(value) {
			  console.log(value); // "two"
			  race1Result = value;
			  // Both resolve, but p2 is faster
			});

			var p3 = new Promise(function(resolve, reject) {
			    setTimeout(resolve, 100, "three");
			});
			var p4 = new Promise(function(resolve, reject) {
			    setTimeout(reject, 500, "four");
			});


			Promise.race([p3, p4]).then(function(value) {
			  console.log(value); // "three"
			  race2Result = value;
			  // p3 is faster, so it resolves
			}, function(reason) {
			  // Not called
			});


			var p5 = new Promise(function(resolve, reject) {
			    setTimeout(resolve, 500, "five");
			});
			var p6 = new Promise(function(resolve, reject) {
			    setTimeout(reject, 100, "six");
			});

			Promise.race([p5, p6]).then(function(value) {
			  // Not called
			}, function(reason) {
			  console.log(reason); // "six"
			  race3Result = reason;
			  // p6 is faster, so it rejects
			});

			setTimeout(function(){
				expect( race1Result ).to.equal( "two" );
				expect( race2Result ).to.equal( "three" );
				expect( race3Result ).to.equal( "six" );
			}, 510);

		});
	});
});
