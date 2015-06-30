// Javascript Array methods tests including ES6
expect = require('chai').expect;

// Pollyfill
// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else      
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}

//The Array.from() method creates a new Array instance from an array-like or iterable object.
describe('Array', function() {
	describe('#from', function(){
		it.skip('returns a new Array insance from an array-like or iterable object', function(){
			// Array-like object (arguments) to Array
			function f() {
			  return Array.from(arguments);
			}

			expect( f(1, 2, 3) ).to.equal([1,2,3]);
			// [1, 2, 3]


			// Any iterable object...
			// Set
			var s = new Set(["foo", global]);
			expect(Array.from(s)).to.equal(["foo", global]);
			// ["foo", window]

			// Map
			var m = new Map([[1, 2], [2, 4], [4, 8]]);
			expect(Array.from(m)).to.equal([[1, 2], [2, 4], [4, 8]]);
			// [[1, 2], [2, 4], [4, 8]]


			// String
			expect(Array.from("foo")).to.equal(["f", "o", "o"]);
			// ["f", "o", "o"]


			// Using an arrow function as the map function to
			// manipulate the elements
			expect(Array.from([1, 2, 3], x => x + x)).to.equal([2, 4, 6]);
			// [2, 4, 6]


			// Generate a sequence of numbers
			expect(Array.from({length: 5}, (v, k) => k)).to.equal([0, 1, 2, 3, 4]);
			// [0, 1, 2, 3, 4]

		});
	})
}

);