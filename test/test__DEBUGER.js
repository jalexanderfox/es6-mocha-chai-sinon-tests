// DEBUGGING TUTORIAL: https://greenido.wordpress.com/2013/08/27/debug-nodejs-like-a-pro/
// THIS FILE SOURCE: https://github.com/mochajs/mocha/issues/247

// INSPECTOR URL: http://127.0.0.1:8080/?ws=127.0.0.1:8080&port=5858

/*global debugger,v8debug,before,after */
/*jslint debug:true, node:true */

// call the debugger in case we are in debug mode
before(function (done) {
    if (typeof(v8debug) !== undefined) {
        debugger;
    }
    done();
});