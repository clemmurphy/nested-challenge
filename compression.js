// Compression
// Write a function that takes a string as an argument and generates an array that sums all the repeating characters.

const sumAllRepeatingCharacters = (string) => {
  // Initialise empty array
  const result = []

  // Loop over string and put character count into array
  for (let i = 0; i < string.length; i++) {

    // Initialise subarray with first instance of character
    const charCountArray = [1, string[i]]

    // Loop while characters are the same increasing counter
    while (string[i] === string[i + 1]) {
      charCountArray[0]++
      i++
    }

    // Add to result array
    result.push(charCountArray)
  }

  return result
}

module.exports = sumAllRepeatingCharacters