#Javascript + ES6 + mocha.js + chai.js + sinon.js
This is a project for testing Javascript + ES6, with [mocha.js](https://github.com/mochajs/mocha), [chai.js](https://github.com/chaijs/chai) and [sinon.js](https://github.com/cjohansen/Sinon.JS)

Many of the examples and much of the wording in the tests come from [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/)

This project is primarily a learning tool, however it could be used for testing whether certain features exist within a particular environment.

Useful links:
* [ES6 features](https://github.com/lukehoban/es6features)
* [www.es6fiddle.net](http://www.es6fiddle.net/)

##Setup
###Install mocha
Get the project then, make sure you have mocha installed globally or run:
run:
```bash
npm install mocha -g
```

###Setup the project

run:
```bash
npm install
```

To run the tests and watch for changes in the 'test' directory:
```bash
mocha -w test/**/**.js
```

OR

This does the same as above:
```bash
npm test
```

####NOTE:
Wondering where the flags are for the mocha command? check the following file:
```bash
mocha.opts
```
Wondering why I didn't put the _--harmony_ flag in the mocha.opts? It is because it doesn't work that way.

####NOTE:
by default, the tests are run with polyfills if available, to turn off polyfills run your tests like this:
```bash
NOPOLYFILLS=true mocha -w test/**/**.js --harmony
```

To run node REPL with full ES6 features:
```bash
node --harmony
```

###Run Object specific tests
There are a few ways to run object specific tests.

The package.json has tests configured for several bultin objects which includes their subsequent methods/properties.
```json
  "scripts": {
    "test": "mocha -w --harmony",
    "test__Array" : "mocha -w test/test__Array**.js --harmony",
    "test__Function" : "mocha -w test/test__Function**.js --harmony",
    "test__Math" : "mocha -w test/test__Math**.js --harmony",
    "test__Number" : "mocha -w test/test__Number**.js --harmony",
    "test__Object" : "mocha -w test/test__Object**.js --harmony",
    "test__Promise" : "mocha -w test/test__Promise**.js --harmony",
    "test__String" : "mocha -w test/test__String**.js --harmony"
  },
```

These scripts can be run in the project root with the following command pattern example for Array:
```bash
npm run-script test__Array
```

OR, of course you can just run the mocha script itself:
```bash
mocha -w test/test__Array**.js
```

###Run file specific tests
```bash
mocha -w test/test__Array.js
```

##TO DO
* go back through and clean up tests, add all conditions for return values in descriptions (Array, Object)
* Built-In objects
	* Date
	* Intl
	* Math
	* RegExp
	* Intl
	* JSON
	* GeneratorFunction
	* ArrayBuffer
	* DataView
	* Reflect
	* Proxy
	* Map
	* Set
	* WeakMap
	* WeakSet
	* SIMD
	* Int8Array
	* Uint8Array
	* Uint8ClampedArray
	* Int16Array
	* Uint16Array
	* Int32Array
	* Uint32Array
	* Float32Array
	* Float64Array

* add shim support
* setup for browser (Karma)

* benchmarks
String.prototype.localeCompare()
Performance
When comparing large numbers of strings, such as in sorting large arrays, it is better to create an Intl.Collator object and use the function provided by its compare property.



