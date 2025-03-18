const removeDuplicates = (arr) => [...new Set(arr)];

const sortNumbers = (arr) => [...arr].sort((a, b) => a - b);

const sumPositiveNumbers = (arr) =>
  arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);

const groupByParity = (arr) => {
  return arr.reduce((acc, num) => {
    const key = num % 2 === 0 ? 'even' : 'odd';
    acc[key].push(num);
    return acc;
  }, { even: [], odd: [] });
};

const findCommonElements = (arr1, arr2) => {
  const set2 = new Set(arr2);
  return arr1.filter(item => set2.has(item));
};

module.exports = {
  removeDuplicates,
  sortNumbers,
  sumPositiveNumbers,
  groupByParity,
  findCommonElements,
};