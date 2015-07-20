var expect = require('chai').expect;

//The Object.getOwnPropertyNames() method returns an array
//of all properties (enumerable or not) found directly upon a given object.
describe('Object', function() {
	describe('#getOwnPropertyNames', function(){
		it('returns an array of all properties (enumerable or not) found directly upon a given object.', function(){
			var arr = ['a', 'b', 'c'];
			expect( Object.getOwnPropertyNames(arr).sort().toString() ).to.equal( '0,1,2,length' )

			// Array-like object
			var obj = { 0: 'a', 1: 'b', 2: 'c' };
			expect( Object.getOwnPropertyNames(obj).sort().toString() ).to.equal( '0,1,2' );

			// Logging property names and values using Array.forEach
			Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
				console.log(val + ' -> ' + obj[val]);
			});
			// logs
			// 0 -> a
			// 1 -> b
			// 2 -> c

			// non-enumerable property
			var my_obj = Object.create({}, {
				getFoo: {
					value: function() { return this.foo; },
					enumerable: false
				}
			});
			my_obj.foo = 1;

			expect( Object.getOwnPropertyNames(my_obj).sort().toString() ).to.equal( 'foo,getFoo' );
		});
		it('items on the prototype chain are not listed', function(){
			function ParentClass() {}
			ParentClass.prototype.inheritedMethod = function() {};

			function ChildClass() {
				this.prop = 5;
				this.method = function() {};
			}
			ChildClass.prototype = new ParentClass;
			ChildClass.prototype.prototypeMethod = function() {};

			expect(
				Object.getOwnPropertyNames(
					new ChildClass()
					)
				).to.eql(['prop', 'method']);
		});

		it('array methods to get non-enumerable properties', function() {
			var target = { a:'avalue' };
			Object.defineProperty(target, 'b', {
				value: 1,
				writable: true,
				configurable: true,
				enumerable: false
			});

			var enum_and_nonenum = Object.getOwnPropertyNames(target);
			var enum_only = Object.keys(target);
			var nonenum_only = enum_and_nonenum.filter(function(key) {
				var indexInEnum = enum_only.indexOf(key);
				if (indexInEnum == -1) {
			    // not found in enum_only keys mean the key is non-enumerable,
			    // so return true so we keep this in the filter
			    return true;
			} else {
				return false;
			}
		});

			expect( nonenum_only ).to.eql( ['b'] );
		});
	});
});