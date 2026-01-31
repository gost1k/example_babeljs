var _a, _ref;
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/esnext.promise.all-settled.js");
require("core-js/modules/web.dom-collections.iterator.js");
// ES2020

var promise = new Promise(function (resolve) {
  return resolve(42);
});
var optionalChaining = (_a = {
  a: {
    b: 1
  }
}) === null || _a === void 0 || (_a = _a.a) === null || _a === void 0 ? void 0 : _a.b;
var nullishCoalescing = (_ref = null) !== null && _ref !== void 0 ? _ref : "default";
var bigInt = 9007199254740991n + 1n;
var allSettled = Promise.allSettled([promise]);