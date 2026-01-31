// ES2015 / ES6

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
