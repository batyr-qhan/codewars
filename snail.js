// snail = function (array) {
//   // enjoy
//   let resultArr = []
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       // console.log(array[i][j])
//       if (i === 0) {
//         resultArr.push(array[0][j])
//       } else if(i > 0){
//         resultArr.push(array[i][array[i].length - 1])
//         break
//       } else if(i === array.length) {
//         resultArr.push(array[i][j])
//       }
//
//     }
//   }
//   console.log(resultArr)
// }

const snail = (array) => {

  let resultArr = []

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (i === 0) {
        resultArr.push(array[i][j])
        continue
      } else {
        resultArr.push(array[i][array[i].length - 1])
      }
      break
    }
  }

  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = array[i].length - 1; j >= 0; j--) {
      // console.log(array[i][j])
      if (i === array.length - 1) {
        resultArr.push(array[i][j])
        continue
      } else {
        resultArr.push(array[i][0])
      }
      break

    }
  }

  console.log(resultArr)
  console.log(array)

}

snail([
  [1, 2, 3, 4, 5, 6],
  [20, 21, 22, 23, 24, 7],
  [19, 32, 33, 34, 25, 8],
  [18, 31, 36, 35, 26, 9],
  [17, 30, 29, 28, 27, 10],
  [16, 15, 14, 13, 12, 11]
])
