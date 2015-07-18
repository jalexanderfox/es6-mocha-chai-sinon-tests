// Javascript Array methods tests including ES6
var expect = require('chai').expect;

//Arrow functions
describe('arrow functions', function() {


	// this doesn't seem to work right now in node --harmony...
	it.skip('lexical this', function(done){

		this.timeout(500);
		function Person(){
			this.age = 0;
			this.timedout = false;
			setTimeout(() => {
				this.timedout = true;
		    	this.age++; // |this| properly refers to the person object
		    // console.log('!!!!!!!!! - - - - - !!!!!!!!!', this.age);
		}, 200);
		}

		var p = new Person();

		setTimeout(function(){
			expect(p.age).to.equal(1);
			expect(p.timedout).to.be.true;
			done();
		}, 400);

	});
}

);


// Lexical this


