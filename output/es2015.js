function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.map.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.set.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// ES2015 / ES6

var es6Let = 1;
var es6Const = 2;
var arrowFn = function arrowFn(a, b) {
  return a + b;
};
var arrowReturn = function arrowReturn() {
  return {
    foo: "bar"
  };
};
var ES6Class = /*#__PURE__*/function () {
  "use strict";

  function ES6Class(name) {
    _classCallCheck(this, ES6Class);
    this.name = name;
  }
  return _createClass(ES6Class, [{
    key: "greet",
    value: function greet() {
      return "Hello, ".concat(this.name);
    }
  }]);
}();
var templateLiteral = "Value: ".concat(es6Let + es6Const);
var multiLine = "Line 1\nLine 2";
var first = 1,
  second = 2,
  rest = [3, 4, 5];
var _name = {
    name: "Alice"
  },
  userName = _name.name,
  _name$age = _name.age,
  age = _name$age === void 0 ? 18 : _name$age;
function defaultParams() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return a + b;
}
function restParams() {
  return arguments.length;
}
var spreadArray = [1, 2, 3].concat([4, 5]);
var symbol = Symbol("id");
var map = new Map([["a", 1], ["b", 2]]);
var set = new Set([1, 2, 2, 3]);
var promise = new Promise(function (resolve) {
  return resolve(42);
});
for (var _i = 0, _arr = [1, 2, 3]; _i < _arr.length; _i++) {
  var item = _arr[_i];
  console.log(item);
}