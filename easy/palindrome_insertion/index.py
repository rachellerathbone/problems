def min_insertion(str):
  reversed = str[::-1]

  if str == reversed:
    return 0

  str.split(' ')
  n = len(str)

  if str[0] != str[n - 1]:
    return n - 1

  start = 0
  end = n - 1

  while str[start] == str[end]:
    start += 1
    end -= 1

  return end - start

print(min_insertion('a'))
print(min_insertion('ab'))
print(min_insertion('aa'))
print(min_insertion('abcda'))
print(min_insertion('abcbcdba'))
