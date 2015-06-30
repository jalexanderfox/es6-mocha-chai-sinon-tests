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

To run node REPL with full ES6 features:
```bash
node --harmony
```

