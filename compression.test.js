// Test cases for repeating characters
const sumAllRepeatingCharacters = require('./compression')

test('Sum repeating characters', () => {
  expect(sumAllRepeatingCharacters('')).toStrictEqual([])
  expect(sumAllRepeatingCharacters('abcd')).toStrictEqual([[1, 'a'], [1, 'b'], [1, 'c'], [1, 'd']])
  expect(sumAllRepeatingCharacters('aaaaaaaabaaaa')).toStrictEqual([[8,'a'], [1,'b'], [4,'a']])
})