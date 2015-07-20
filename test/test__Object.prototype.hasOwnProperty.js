var expect = require('chai').expect;

//The hasOwnProperty() method returns a boolean indicating whether the object has the specified property.
describe('Object', function() {
	describe('#prototype', function(){
		describe('#hasOwnProperty', function(){
			it('returns a boolean indicating whether the object has the specified property.', function(){
				var buz = {
					fog: 'stack'
				};

				for (var name in buz) {
					if (buz.hasOwnProperty(name)) {
						console.log('this is fog (' + name + ') for sure. Value: ' + buz[name]);
					}
					else {
				    	console.log(name); // toString or something else
					}
				}

				expect( buz.hasOwnProperty('fog') ).to.be.true;
			});

			it('JavaScript does not protect the property name hasOwnProperty; thus, if the possibility exists that an object might have a property with this name, it is necessary to use an external hasOwnProperty to get correct results', function(){
				var foo = {
				  hasOwnProperty: function() {
				    return false;
				  },
				  bar: 'Here be dragons'
				};

				expect( foo.hasOwnProperty('bar') ).to.be.false; // always returns false

				// Use another Object's hasOwnProperty and call it with 'this' set to foo
				expect( ({}).hasOwnProperty.call(foo, 'bar') ).to.be.true;

				// It's also possible to use the hasOwnProperty property from the Object prototype for this purpose
				expect( Object.prototype.hasOwnProperty.call(foo, 'bar') ).to.be.true;
			});
		});
	});
});
