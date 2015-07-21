#ES6 + mocha.js + chai.js + sinon.js
This project is a playground for ES6, [mocha.js](https://github.com/mochajs/mocha), [chai.js](https://github.com/chaijs/chai) and [sinon.js](https://github.com/cjohansen/Sinon.JS)

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
mocha -w test/**/**.js --harmony --recursive --reporter list
```

OR

This does the same as above:
```bash
npm test
```

####NOTE:
by default, the tests are run with polyfills if available, to turn off polyfills run your tests like this:
```bash
NOPOLYFILLS=true mocha -w test/**/**.js --harmony --recursive --reporter list
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
    "test": "mocha -w --harmony --recursive --reporter list",
    "test__Array" : "mocha -w test/test__Array**.js --harmony --recursive --reporter list",
    "test__Function" : "mocha -w test/test__Function**.js --harmony --recursive --reporter list",
    "test__Math" : "mocha -w test/test__Math**.js --harmony --recursive --reporter list",
    "test__Object" : "mocha -w test/test__Object**.js --harmony --recursive --reporter list",
    "test__Promise" : "mocha -w test/test__Promise**.js --harmony --recursive --reporter list",
    "test__String" : "mocha -w test/test__String**.js --harmony --recursive --reporter list"
  },
```

These scripts can be run in the project root with the following command pattern example for Array:
```bash
npm run-script test__Array
```

OR, of course you can just run the mocha script itself:
```bash
mocha -w test/test__Array**.js --harmony --recursive --reporter list
```

###Run file specific tests
```bash
mocha -w test/test__Array.js --harmony --recursive --reporter list
```

##TO DO
* add shim support
* setup for browser (Karma)

