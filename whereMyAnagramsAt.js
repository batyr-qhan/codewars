function anagrams (word, words) {
  let resultArr = []
  let sortedWord = word.split('').sort().join('')
  // console.log('sorted', sortedWord)
  for (let i = 0; i < words.length; i++) {
    (words[i].split('').sort().join('') === sortedWord) &&
    resultArr.push(words[i])
    // console.log(words[i].split('').sort().join(''))
  }
  return resultArr
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))