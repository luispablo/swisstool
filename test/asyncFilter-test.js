
const test = require("ava");

const { asyncFilter } = require("../swisstool");

test("filter even numbers", async function (t) {
  const items = [1, 2, 3, 4];
  const isEven = n => new Promise(res => res(n % 2 === 0));
  t.deepEqual(await asyncFilter(items, isEven), [2, 4]);
});
