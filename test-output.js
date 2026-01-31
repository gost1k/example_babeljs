/**
 * ECMAScript features by version — демонстрация возможностей для Babel
 */

// =============================================================================
// ES5 (2009)
// =============================================================================

"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _a, _ref;
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.flat.js");
require("core-js/modules/es.array.flat-map.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.index-of.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.array.unscopables.flat.js");
require("core-js/modules/es.array.unscopables.flat-map.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.map.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.entries.js");
require("core-js/modules/es.object.from-entries.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.object.values.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.promise.finally.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.set.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.string.pad-start.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.string.trim-end.js");
require("core-js/modules/es.string.trim-start.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/es.weak-set.js");
require("core-js/modules/esnext.promise.all-settled.js");
require("core-js/modules/esnext.string.replace-all.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
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

// =============================================================================
// ES2015 / ES6
// =============================================================================

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

// =============================================================================
// ES2016
// =============================================================================

var includes = [1, 2, 3].includes(2);
var exponent = Math.pow(2, 10);

// =============================================================================
// ES2017
// =============================================================================
function asyncFn() {
  return _asyncFn.apply(this, arguments);
}
function _asyncFn() {
  _asyncFn = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var result;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return promise;
        case 1:
          result = _context.v;
          return _context.a(2, result);
      }
    }, _callee);
  }));
  return _asyncFn.apply(this, arguments);
}
var entries = Object.entries({
  a: 1,
  b: 2
});
var values = Object.values({
  a: 1,
  b: 2
});
var padded = "5".padStart(2, "0");

// =============================================================================
// ES2018
// =============================================================================

var spreadObj = _objectSpread(_objectSpread({}, {
  a: 1
}), {}, {
  b: 2
});
var _x$y$z = {
    x: 1,
    y: 2,
    z: 3
  },
  x = _x$y$z.x,
  restObj = _objectWithoutProperties(_x$y$z, ["x"]);
var promiseFinally = promise["finally"](function () {});

// =============================================================================
// ES2019
// =============================================================================

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

// =============================================================================
// ES2020
// =============================================================================

var optionalChaining = (_a = {
  a: {
    b: 1
  }
}) === null || _a === void 0 || (_a = _a.a) === null || _a === void 0 ? void 0 : _a.b;
var nullishCoalescing = (_ref = null) !== null && _ref !== void 0 ? _ref : "default";
var bigInt = 9007199254740991n + 1n;
var allSettled = Promise.allSettled([promise]);

// =============================================================================
// ES2021
// =============================================================================

var logicalAssign = 0;
logicalAssign !== null && logicalAssign !== void 0 ? logicalAssign : logicalAssign = 42;
var numericSeparator = 1000000;
var replaceAll = "a-b-c".replaceAll("-", "_");

// =============================================================================
// ES2022
// =============================================================================
var _privateField = /*#__PURE__*/new WeakMap();
var _ES2022Class_brand = /*#__PURE__*/new WeakSet();
var ES2022Class = /*#__PURE__*/function () {
  function ES2022Class() {
    _classCallCheck(this, ES2022Class);
    _classPrivateMethodInitSpec(this, _ES2022Class_brand);
    _defineProperty(this, "field", 42);
    _classPrivateFieldInitSpec(this, _privateField, "secret");
  }
  return _createClass(ES2022Class, [{
    key: "getPrivate",
    value: function getPrivate() {
      return _assertClassBrand(_ES2022Class_brand, this, _privateMethod).call(this);
    }
  }]);
}();
function _privateMethod() {
  return _classPrivateFieldGet(_privateField, this);
}
_defineProperty(ES2022Class, "staticField", "static");
