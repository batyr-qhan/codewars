function snail (array) {
  if(array.length === 0) {
    return resultArr
  } else {
    snail(array)
  }
  let resultArr = []


  // while(array.length > 0 ) {
  //
  // }

  let reversedArr = []

  for (let i = 0; i < array.length; i++) {
    if(i === 0) {
      resultArr.push(...array[i])
      // array.splice(i,1)
    }
    else if(i === array.length - 1) {
      resultArr.push(...array[i].reverse())
      resultArr.push(...reversedArr.reverse())
      array.splice(i, 1)
      array.splice(0, 1)
    } else if(i >= 0 && i < array.length - 1) {
      resultArr.push(array[i].pop())
      reversedArr.push(array[i].shift())
    }
  }
}

console.log(snail([
  [1, 2, 3, 4, 5, 6],
  [20, 21, 22, 23, 24, 7],
  [19, 32, 33, 34, 25, 8],
  [18, 31, 36, 35, 26, 9],
  [17, 30, 29, 28, 27, 10],
  [16, 15, 14, 13, 12, 11]
]))

// код работает, только тесты не проходит. Решение на codewars
