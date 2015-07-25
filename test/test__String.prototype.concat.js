var expect = require('chai').expect;

//str.concat(string2, string3[, ..., stringN])
//The concat() method combines the text of two or more strings and returns a new string.
describe('String', function() {
	describe('#prototype', function(){
		describe('#concat', function(){
			var hello = 'Hello, ';
			it('combines the text of two or more strings and returns a new string.', function(){
				expect( hello.concat('Kevin', ' have a nice day.') ).to.equal('Hello, Kevin have a nice day.');
			});

			it('it is considerably less performant than assignment operators (+, +=)', function(){
				expect( hello + 'Kevin' + ' have a nice day.' ).to.equal('Hello, Kevin have a nice day.');
			});
		});
	});
});

