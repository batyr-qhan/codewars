function findOutlier (integers) {
  let oddNumbersCount = 0
  let evenNumbersCount = 0
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenNumbersCount += 1
    } else {
      oddNumbersCount += 1
    }
  }

  let resultNumber

  if (oddNumbersCount === 1) {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 !== 0) {
        resultNumber = integers[i]
      }
    }
  } else if (oddNumbersCount > 1) {
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === 0) {
        resultNumber = integers[i]
      }
    }
  }
  return resultNumber
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))

