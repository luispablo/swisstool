
const asyncFilter = async function asyncFilter (items, fn) {
  const results = await Promise.all(items.map(fn));
  return items.filter((_, index) => results[index]);
};

module.exports = asyncFilter;
