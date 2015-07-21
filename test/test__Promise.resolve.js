var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);


//The Promise.resolve(value) method returns a Promise object that is resolved with the given value.
//If the value is a thenable (i.e. has a then method), the returned promise will "follow" that thenable,
//adopting its eventual state; otherwise the returned promise will be fulfilled with the value.
describe('Promise', function() {
	describe('#resolve', function() {
		it('returns a Promise object that is resolved with the given value.', function(done){

			var test1 = '';
			var test2 = '';

			Promise.resolve("Testing static resolve").then(function(value) {
			  console.log(value); // "Success"
			  test1=value;
			}, function(value) {
			  // not called
			});

			//resolving an array
			var p = Promise.resolve([1,2,3]);
			p.then(function(v) {
				console.log(v[0]); // 1
				test2=v;
			});

			setTimeout(function() {
				expect( test1 ).to.equal( "Testing static resolve" );
				expect( test2 ).to.eql( [1,2,3] );
				done();
			}, 10);

		});

		it('it resolves other promises', function(done){

			var test1 = '';
			var test2 = '';

			var original = Promise.resolve(true);
			var cast = Promise.resolve(original);
			cast.then(function(v) {
			  console.log(v); // true
			  test1 = v;
			});

			setTimeout(function() {
				expect( test1 ).to.be.true;
				done();
			}, 10);

		});

		it('it resolves other promises', function(done){

			var test1 = '';
			var test2 = '';

			// Resolving a thenable object
			var p1 = Promise.resolve({ 
			  then: function(onFulfill, onReject) { onFulfill("fulfilled!"); }
			});
			expect(p1 instanceof Promise).to.be.true; // true, object casted to a Promise

			p1.then(function(v) {
			    console.log(v); // "fulfilled!"
			    test1 = v;
			  }, function(e) {
			    // not called
			});

			// Thenable throws before callback
			// Promise rejects
			var thenable = { then: function(resolve) {
			  throw new TypeError("Throwing");
			  resolve("Resolving");
			}};

			var p2 = Promise.resolve(thenable);
			p2.then(function(v) {
			  // not called
			}, function(e) {
			  console.log(e); // TypeError: Throwing
			  test2 = e;
			});

			// Thenable throws after callback
			// Promise resolves
			var thenable = { then: function(resolve) {
			  resolve("Resolving");
			  throw new TypeError("Throwing");
			}};

			var p3 = Promise.resolve(thenable);
			p3.then(function(v) {
			  console.log(v); // "Resolving"
			  test3 = v;
			}, function(e) {
			  // not called
			});

			setTimeout(function() {
				expect( test1 ).to.equal("fulfilled!");
				expect( test2 instanceof TypeError ).to.be.true;
				expect( test3 ).to.equal("Resolving");
				done();
			}, 10);

		});
	});
});



