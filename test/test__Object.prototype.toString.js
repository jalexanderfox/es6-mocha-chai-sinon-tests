var expect = require('chai').expect;

//The toString() method returns a string representing object.
describe('Object', function() {
	describe('#prototype', function(){
		describe('#toString', function(){
			it('method returns a string representing the object.', function(){
				expect( ({}).toString() ).to.equal( '[object Object]' );
			});
			it('overriding the default toString method.', function(){
				function Dog(name, breed, color, sex) {
					this.name = name;
					this.breed = breed;
					this.color = color;
					this.sex = sex;
				}

				theDog = new Dog('Gabby', 'Lab', 'chocolate', 'female');

				expect( theDog.toString() ).to.equal( '[object Object]' );

				Dog.prototype.toString = function dogToString() {
					var ret = 'Dog ' + this.name + ' is a ' + this.sex + ' ' + this.color + ' ' + this.breed;
					return ret;
				}

				expect( theDog.toString() ).to.equal( "Dog Gabby is a female chocolate Lab" );
			});
		});
	});
});
