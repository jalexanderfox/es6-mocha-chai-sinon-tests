// Source: http://blog.scottlogic.com/2015/07/02/surprising-things-about-js.html

var a;
(a) = 1;
console.log(a === 1);

//
//  this does not work... yet in node, but works in firefox/spidermonkey
function pullOutInParams({a}, [b]) {
  console.log(a, b);
}
pullOutInParams({a: "Hello" }, ["World"]);


function pullOutInLet(obj, arr) {
  let {a} = obj;
  let [b] = arr;
  console.log(a, b);
}

pullOutInLet({a: "Hello" }, ["World"]);


// With arrays you can just write it as you expect…
var a;
[a] = array;

// But with objects you must surround the whole assignment in parenthsis…
var a;
({a} = obj);