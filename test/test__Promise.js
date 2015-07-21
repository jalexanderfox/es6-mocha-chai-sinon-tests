var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);


//The Promise object is used for deferred and asynchronous computations.
//A Promise represents an operation that hasn't completed yet, but is expected to in the future.
describe('Promise', function() {
	it('represents an operation that has not completed yet, but is expected to in the future.', function(){
		'use strict';
		var promiseCount = 0;
		var wait = 300;

		function testPromise() {
			var thisPromiseCount = ++promiseCount;

		    // We make a new promise: we promise the string 'result' (after waiting 300ms)
		    var p1 = new Promise(

		        function(resolve, reject) {
		            // This only is an example to create asynchronism
		            setTimeout(
		            	function() {
		                    console.log('We fulfill the promise !');
		                    resolve(thisPromiseCount);
		                }, wait);
		        });

		    // // We define what to do when the promise is fulfilled
		    // // but we only call this if the promise is resolved/fulfilled
		    // p1.then(
		    //     // Just log the message and a value
		    //     function(val) {
		    //     	expect( val ).to.equal( thisPromiseCount );
		    // 	}
		    // ).catch(function() { console.log('promise was rejected');});

		    return p1;
		}

		return expect(testPromise()).to.eventually.equal( promiseCount );
	});

	it.skip('using new XMLHttpRequest()', function( done ){
		'use strict';

		// A-> $http function is implemented in order to follow the standard Adapter pattern
		function $http(url){

		  // A small example of object
		  var core = {

		    // Method that performs the ajax request
		    ajax : function (method, url, args) {

		      // Creating a promise
		      var promise = new Promise( function (resolve, reject) {

		        // Instantiates the XMLHttpRequest
		        var client = new XMLHttpRequest();
		        var uri = url;

		        if (args && (method === 'POST' || method === 'PUT')) {
		          uri += '?';
		          var argcount = 0;
		          for (var key in args) {
		            if (args.hasOwnProperty(key)) {
		              if (argcount++) {
		                uri += '&';
		              }
		              uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
		            }
		          }
		        }

		        client.open(method, uri);
		        client.send();

		        client.onload = function () {
		          if (this.status == 200) {
		            // Performs the function "resolve" when this.status is equal to 200
		            resolve(this.response);
		          } else {
		            // Performs the function "reject" when this.status is different than 200
		            reject(this.statusText);
		          }
		        };
		        client.onerror = function () {
		          reject(this.statusText);
		        };
		      });

		      // Return the promise
		      return promise;
		    }
		  };

		  // Adapter pattern
		  return {
		    'get' : function(args) {
		      return core.ajax('GET', url, args);
		    },
		    'post' : function(args) {
		      return core.ajax('POST', url, args);
		    },
		    'put' : function(args) {
		      return core.ajax('PUT', url, args);
		    },
		    'delete' : function(args) {
		      return core.ajax('DELETE', url, args);
		    }
		  };
		};
		// End A

		// B-> Here you define its functions and its payload
		var mdnAPI = 'https://developer.mozilla.org/en-US/search.json';
		var payload = {
		  'topic' : 'js',
		  'q'     : 'Promise'
		};

		var callback = {
		  success : function(data){
		  	console.log('!!!!!!!!!!!!!!!!!');
		     console.log(1, 'success', JSON.parse(data));
		  },
		  error : function(data){
		     console.log(2, 'error', JSON.parse(data));
		  }
		};
		// End B

		// Executes the method call
		$http(mdnAPI)
		  .get(payload)
		  .then(callback.success)
		  .catch(callback.error);

		// Executes the method call but an alternative way (1) to handle Promise Reject case
		$http(mdnAPI)
		  .get(payload)
		  .then(callback.success, callback.error);

		// Executes the method call but an alternative way (2) to handle Promise Reject case
		$http(mdnAPI)
		  .get(payload)
		  .then(callback.success)
		  .then(undefined, callback.error);
	});

});
