function validParentheses (parens) {
  let validPar = 0
  let parensArr = parens.split('')

  for (let i = 0; i < parensArr.length; i++) {
    if (parensArr[i] === '(') {
      for (let j = i; j < parensArr.length; j++) {
        if (parensArr[j] === ')') {
          parensArr.splice(j, 1)
          validPar += 1
          break
        }
      }
    }
  }

  if (parens.length / 2 === validPar) {
    return true
  } else {
    return false
  }
}

console.log(validParentheses('()()()(())()()()()()()()()()()()()()(()('))

// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
