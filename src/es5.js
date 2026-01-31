// ES5 (2009)

"use strict";

var es5Array = [1, 2, 3].map(function (x) {
  return x * 2;
});
var es5Filtered = [1, 2, 3, 4].filter(function (x) {
  return x > 2;
});
var es5Reduce = [1, 2, 3].reduce(function (a, b) {
  return a + b;
}, 0);
var es5Keys = Object.keys({ a: 1, b: 2 });
