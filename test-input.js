/**
 * ECMAScript features by version — демонстрация возможностей для Babel
 */

// =============================================================================
// ES5 (2009)
// =============================================================================

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

// =============================================================================
// ES2015 / ES6
// =============================================================================

let es6Let = 1;
const es6Const = 2;

const arrowFn = (a, b) => a + b;
const arrowReturn = () => ({ foo: "bar" });

class ES6Class {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}`;
  }
}

const templateLiteral = `Value: ${es6Let + es6Const}`;
const multiLine = `Line 1
Line 2`;

const [first, second, ...rest] = [1, 2, 3, 4, 5];
const { name: userName, age = 18 } = { name: "Alice" };

function defaultParams(a = 1, b = 2) {
  return a + b;
}

function restParams(...args) {
  return args.length;
}

const spreadArray = [...[1, 2, 3], 4, 5];

const symbol = Symbol("id");
const map = new Map([
  ["a", 1],
  ["b", 2],
]);
const set = new Set([1, 2, 2, 3]);

const promise = new Promise((resolve) => resolve(42));

for (const item of [1, 2, 3]) {
  console.log(item);
}

// =============================================================================
// ES2016
// =============================================================================

const includes = [1, 2, 3].includes(2);
const exponent = 2 ** 10;

// =============================================================================
// ES2017
// =============================================================================

async function asyncFn() {
  const result = await promise;
  return result;
}

const entries = Object.entries({ a: 1, b: 2 });
const values = Object.values({ a: 1, b: 2 });
const padded = "5".padStart(2, "0");

// =============================================================================
// ES2018
// =============================================================================

const spreadObj = { ...{ a: 1 }, b: 2 };
const { x, ...restObj } = { x: 1, y: 2, z: 3 };

const promiseFinally = promise.finally(() => {});

// =============================================================================
// ES2019
// =============================================================================

const flat = [1, [2, [3]]].flat(2);
const flatMap = [1, 2, 3].flatMap((x) => [x, x * 2]);
const fromEntries = Object.fromEntries([
  ["a", 1],
  ["b", 2],
]);
const trimmed = "  hello  ".trimStart().trimEnd();

try {
  throw new Error("test");
} catch {
  // optional catch binding
}

// =============================================================================
// ES2020
// =============================================================================

const optionalChaining = { a: { b: 1 } }?.a?.b;
const nullishCoalescing = null ?? "default";
const bigInt = 9007199254740991n + 1n;
const allSettled = Promise.allSettled([promise]);

// =============================================================================
// ES2021
// =============================================================================

let logicalAssign = 0;
logicalAssign ??= 42;
const numericSeparator = 1_000_000;
const replaceAll = "a-b-c".replaceAll("-", "_");

// =============================================================================
// ES2022
// =============================================================================

class ES2022Class {
  field = 42;
  static staticField = "static";
  #privateField = "secret";

  #privateMethod() {
    return this.#privateField;
  }

  getPrivate() {
    return this.#privateMethod();
  }
}
