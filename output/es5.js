// ES5 (2009)

"use strict";

require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.to-string.js");
var es5Array = [1, 2, 3].map(function (x) {
  return x * 2;
});
var es5Filtered = [1, 2, 3, 4].filter(function (x) {
  return x > 2;
});
var es5Reduce = [1, 2, 3].reduce(function (a, b) {
  return a + b;
}, 0);
var es5Keys = Object.keys({
  a: 1,
  b: 2
});