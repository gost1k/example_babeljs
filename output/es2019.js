require("core-js/modules/es.array.flat.js");
require("core-js/modules/es.array.flat-map.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.unscopables.flat.js");
require("core-js/modules/es.array.unscopables.flat-map.js");
require("core-js/modules/es.object.from-entries.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.trim-end.js");
require("core-js/modules/es.string.trim-start.js");
// ES2019

var flat = [1, [2, [3]]].flat(2);
var flatMap = [1, 2, 3].flatMap(function (x) {
  return [x, x * 2];
});
var fromEntries = Object.fromEntries([["a", 1], ["b", 2]]);
var trimmed = "  hello  ".trimStart().trimEnd();
try {
  throw new Error("test");
} catch (_unused) {
  // optional catch binding
}