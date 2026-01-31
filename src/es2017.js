// ES2017

const promise = new Promise((resolve) => resolve(42));

async function asyncFn() {
  const result = await promise;
  return result;
}

const entries = Object.entries({ a: 1, b: 2 });
const values = Object.values({ a: 1, b: 2 });
const padded = "5".padStart(2, "0");
