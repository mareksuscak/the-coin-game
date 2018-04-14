const fs = require('fs');
const canWin = require('./index');

// Read the input file and convert each non-empty line into a Number
const Ns = fs.readFileSync('coins.in')
  .toString()
  .split(/\r?\n/)
  .filter((line) => line !== '')
  .map(Number)

test('computes the result correctly for all Ns', () => {
  expect(Ns.map(canWin)).toMatchSnapshot();
});
