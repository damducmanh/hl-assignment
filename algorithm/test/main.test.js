const mathOperations = require('../main');
const simpleArray = "1 2 3 4 5".split(" ").map(num => parseInt(num));
it(`Min Max sum array ${simpleArray} to equals 14,10`, () => {
  expect(mathOperations.miniMaxSum(simpleArray)).toBe("14 10");
});
it(`Total array ${simpleArray} to equals 15`, () => {
  expect(mathOperations.totalArray(simpleArray)).toBe(15);
});
it(`Min in array ${simpleArray} to equals 1`, () => {
  expect(mathOperations.minInArray(simpleArray)).toBe(1);
});
it(`Max in array ${simpleArray} to equals 5`, () => {
  expect(mathOperations.maxInArray(simpleArray)).toBe(5);
});
it(`Even element ${simpleArray} to equals 0,2,4`, () => {
  expect(mathOperations.findEvenElements(simpleArray)).toEqual(expect.arrayContaining(([2,4])));
});
it(`Odd element ${simpleArray} to equals 1,3,5`, () => {
  expect(mathOperations.findOddElements(simpleArray)).toEqual(expect.arrayContaining(([1,3,5])));
});
