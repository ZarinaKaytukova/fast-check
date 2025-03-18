const fc = require('fast-check');
const {
  removeDuplicates,
  sortNumbers,
  sumPositiveNumbers,
  groupByParity,
  findCommonElements,
} = require('./arrayUtils.js');


describe('removeDuplicates', () => {
  it('should remove duplicates from an array', () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), (arr) => {
        const result = removeDuplicates(arr);
        const uniqueSet = new Set(result);
        expect(uniqueSet.size).toBe(result.length);
      })
    );
  });
});

describe('sortNumbers', () => {
  it('should sort an array of numbers in ascending order', () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), (arr) => {
        const result = sortNumbers(arr);
        for (let i = 1; i < result.length; i++) {
          expect(result[i - 1]).toBeLessThanOrEqual(result[i]);
        }
      })
    );
  });
});

describe('sumPositiveNumbers', () => {
  it('should sum only positive numbers in an array', () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), (arr) => {
        const result = sumPositiveNumbers(arr);
        const expectedSum = arr.filter((num) => num > 0).reduce((sum, num) => sum + num, 0);
        expect(result).toBe(expectedSum);
      })
    );
  });
});

describe('groupByParity', () => {
  it('should group numbers by parity', () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), (arr) => {
        const result = groupByParity(arr);
        expect(result.even.every((num) => num % 2 === 0)).toBe(true);
        expect(result.odd.every((num) => num % 2 !== 0)).toBe(true);
      })
    );
  });
});

describe('findCommonElements', () => {
  it('should find common elements between two arrays', () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), fc.array(fc.integer()), (arr1, arr2) => {
        const result = findCommonElements(arr1, arr2);
        const commonElements = arr1.filter((item) => arr2.includes(item));
        expect(result).toEqual(commonElements);
      })
    );
  });
});