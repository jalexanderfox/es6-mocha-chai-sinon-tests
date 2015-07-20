var expect = require('chai').expect;

// Polyfill
require('../polyfills/polyfills').getPolyfill('Object.setPrototypeOf');

//The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.
describe('Object', function() {
	describe('#setPrototypeOf', function(){
		it('sets the prototype of a specified object to another object or null.', function(){
			var dict = Object.setPrototypeOf({}, null);
		});


		/**
		*** Object.appendChain(@object, @prototype)
		*
		* Appends the first non-native prototype of a chain to a new prototype.
		* Returns @object (if it was a primitive value it will transformed into an object).
		*
		*** Object.appendChain(@object [, "@arg_name_1", "@arg_name_2", "@arg_name_3", "..."], "@function_body")
		*** Object.appendChain(@object [, "@arg_name_1, @arg_name_2, @arg_name_3, ..."], "@function_body")
		*
		* Appends the first non-native prototype of a chain to the native Function.prototype object, then appends a
		* new Function(["@arg"(s)], "@function_body") to that chain.
		* Returns the function.
		*
		**/

		Object.appendChain = function(oChain, oProto) {
			if (arguments.length < 2) {
				throw new TypeError('Object.appendChain - Not enough arguments');
			}
			if (typeof oProto === 'number' || typeof oProto === 'boolean') {
				throw new TypeError('second argument to Object.appendChain must be an object or a string');
			}

			var oNewProto = oProto,
			oReturn = o2nd = oLast = oChain instanceof this ? oChain : new oChain.constructor(oChain);

			for (var o1st = this.getPrototypeOf(o2nd);
				o1st !== Object.prototype && o1st !== Function.prototype;
				o1st = this.getPrototypeOf(o2nd)
				) {
				o2nd = o1st;
			}

			if (oProto.constructor === String) {
				oNewProto = Function.prototype;
				oReturn = Function.apply(null, Array.prototype.slice.call(arguments, 1));
				this.setPrototypeOf(oReturn, oLast);
			}

			this.setPrototypeOf(o2nd, oNewProto);
			return oReturn;
		}


		it('use: appending a chain to a scope', function(){
			function Mammal() {
			  this.isMammal = 'yes';
			}

			function MammalSpecies(sMammalSpecies) {
			  this.species = sMammalSpecies;
			}

			MammalSpecies.prototype = new Mammal();
			MammalSpecies.prototype.constructor = MammalSpecies;

			var oCat = new MammalSpecies('Felis');

			expect( oCat.isMammal ).to.equal( 'yes');

			function Animal() {
			  this.breathing = 'yes';
			}

			Object.appendChain(oCat, new Animal());

			expect( oCat.breathing ).to.equal( 'yes');
		});

		it('use: Transforming a primitive value into an instance of its constructor and append its chain to a prototype', function(){
			function Symbol() {
			  this.isSymbol = 'yes';
			}

			var nPrime = 17;

			console.log(typeof nPrime); // 'number'

			var oPrime = Object.appendChain(nPrime, new Symbol());

			expect( oPrime ).to.eql( { isSymbol: 'yes' } );
			expect( oPrime.isSymbol ).to.equal( 'yes' );
			expect( typeof oPrime ).to.equal( 'object' );
		});

		it('use: Appending a chain to the Function.prototype object and appending a new function to that chain', function(){
			function Person(sName) {
			  this.identity = sName;
			}

			var george = Object.appendChain(new Person('George'),
			                                'console.log("Hello guys!!");');

			expect( george.identity ).to.equal( 'George' );
			george(); // 'Hello guys!!'
		});
	});
});
