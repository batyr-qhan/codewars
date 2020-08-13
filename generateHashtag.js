function generateHashtag (str) {
  function capitalizeLetter(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  let strArr = str.trim().split(' ')
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = capitalizeLetter(strArr[i])
  }

  let result = `#${strArr.join('')}`

  if(result.length > 140) {
    return false
  }
  else if(result === '') {
    return false
  }
  else if(str === '') {
    return false
  }
  else return result
}

// console.log(generateHashtag(' '.repeat(200)))

console.log(' '.repeat(200).length)
