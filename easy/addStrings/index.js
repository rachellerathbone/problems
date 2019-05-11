const addStrings = (num1, num2) => {
  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0
  let sum = ''

  for (i && j; i >= 0 || j >= 0 || carry > 0; i--, j--) {
    // Minus the ASCII code of '0' to get the value of the charAt(i/j)
    const digit1 = i < 0 ? 0 : num1.charAt(i) - '0'
    const digit2 = j < 0 ? 0 : num2.charAt(j) - '0'

    const digitsSum = digit1 + digit2 + carry
    sum = `${digitsSum % 10}${sum}`
    carry = Math.floor(digitsSum / 10)
  }

  return sum
};

module.exports = addStrings