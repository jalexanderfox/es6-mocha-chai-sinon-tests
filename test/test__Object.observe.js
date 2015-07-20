var expect = require('chai').expect;

//The Object.observe() method is used for asynchronously observing the changes to an object.
//It provides a stream of changes in the order in which they occur.
describe('Object', function() {
	describe('#observe', function(){
		it('is used for asynchronously observing the changes to an object', function(){

			var obj = {
			  foo: 0,
			  bar: 1
			};

			var changesArray = [];

			Object.observe(obj, function(changes) {
			  console.log(changes);
			  expect( changes ).to.eql(changesArray);
			});

			changesArray = [{name: 'baz', object: obj, type: 'add'}];
			obj.baz = 2;
			// [{name: 'baz', object: <obj>, type: 'add'}]

			changesArray = [{name: 'foo', object: obj, type: 'update', oldValue: 0}];
			obj.foo = 'hello';
			// [{name: 'foo', object: <obj>, type: 'update', oldValue: 0}]

			changesArray = [{name: 'baz', object: obj, type: 'delete', oldValue: 2}];
			delete obj.baz;
			// [{name: 'baz', object: <obj>, type: 'delete', oldValue: 2}]

			changesArray = [{name: 'foo', object: obj, type: 'reconfigure'}];
			Object.defineProperty(obj, 'foo', {writable: false});
			// [{name: 'foo', object: <obj>, type: 'reconfigure'}]

			changesArray = [{name: '__proto__', object: obj, type: 'setPrototype', oldValue: (function(){ return obj.prototype; }()) }];
			Object.setPrototypeOf(obj, {});
			// [{name: '__proto__', object: <obj>, type: 'setPrototype', oldValue: <prototype>}]

			changesArray = [
			  {name: 'foo', object: obj, type: 'reconfigure'},
			  {name: 'bar', object: obj, type: 'reconfigure'},
			  {object: obj, type: 'preventExtensions'}
			]
			Object.seal(obj);
			// [
			//   {name: 'foo', object: <obj>, type: 'reconfigure'},
			//   {name: 'bar', object: <obj>, type: 'reconfigure'},
			//   {object: <obj>, type: 'preventExtensions'}
			// ]
		});
	});
});
