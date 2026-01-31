// ES2020

const promise = new Promise((resolve) => resolve(42));

const optionalChaining = { a: { b: 1 } }?.a?.b;
const nullishCoalescing = null ?? "default";
const bigInt = 9007199254740991n + 1n;
const allSettled = Promise.allSettled([promise]);
