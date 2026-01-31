// ES2018

const promise = new Promise((resolve) => resolve(42));

const spreadObj = { ...{ a: 1 }, b: 2 };
const { x, ...restObj } = { x: 1, y: 2, z: 3 };

const promiseFinally = promise.finally(() => {});
