const palindromeInsertion = (str) => {
  let i = 0
  let j = str.length - 1
  let mismatchCounter = 0

  while(i <= j) {
    if (str.charAt(i) === str.charAt(j)) {
        i++
        j--
        continue
    } else if(str.charAt(i) !== str.charAt(j)) {
      i++
      mismatchCounter++
    }
  }

  return mismatchCounter
}

module.exports = palindromeInsertion
