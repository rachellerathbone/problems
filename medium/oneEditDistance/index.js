const isOneEditDistance = (s, t) => {
  const sLen = s.length
  const tLen = t.length

  if (Math.abs(sLen - tLen) > 1) {
    return false
  }

  if (sLen <= 2 && tLen <=2) {
    if (Math.abs(tLen - sLen) === 1) {
      return true
    }
  }

  let i = 0
  let j = 0
  let charCount = 0

  while (i < sLen && j < tLen) {
    if (s[i] !== t[j]) {
      charCount++
      if (sLen > tLen) {
        i++
      } else if (sLen < tLen) {
        j++
      } else {
        i++
        j++
      }
    } else {
      i++
      j++
    }
  }

  return charCount === 1 || (charCount === 0 && Math.abs(sLen - tLen) === 1)
}

module.exports = isOneEditDistance
