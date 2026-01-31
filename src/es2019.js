// ES2019

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
