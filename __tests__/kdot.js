// test('adds 1 + 2 to equal 3', () => {
//   const sum = require('../src/Tribonacci');
//   expect(sum(1, 2)).toBe(3);
// });
const dbl = require('../src/DblLinear');

test('dblLinear 10 is 22', () => {
  expect(dbl(10)).toBe(22);
})
