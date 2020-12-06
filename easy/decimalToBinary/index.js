function decimalToBinary(inputNum) {
  let binary = []

  while (inputNum > 0) {
    if (inputNum % 2 === 1) {
      binary.splice(0, 0, 1)
      inputNum = (inputNum - 1) / 2
    } else {
      binary.splice(0, 0, 0)
      inputNum /= 2
    }
  }

  binary = binary.join('')

  return binary
}

// Using toString
function decToBin(dec){
  return (dec >>> 0).toString(2)
}

module.exports = decimalToBinary
