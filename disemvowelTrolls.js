function disemVowell (str) {
  let strArr = str.split('')
  let vowelArr = ['a', 'e', 'i', 'o', 'u']

  for (let i = 0; i < strArr.length; i++) {
    let iEl = strArr[i]
    console.log(strArr[i])
    for (let j = 0; j < vowelArr.length; j++) {
      let jEl = vowelArr[j]
      // if (iEl.toLowerCase() === jEl.toLowerCase()) {
      //   strArr.splice(i, 1)
      // }
    }
  }
  // return strArr.join('')
}

console.log(disemVowell('What are you, communist?'))

// Trolls are attacking your comment section!
//
//   A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
//   For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//
//   Note: for this kata y isn't considered a vowel.
