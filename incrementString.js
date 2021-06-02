function incrementString(strng) {
  let stringPart = "";
  let numberPart = "";
  let result = "";

  let arr = strng.split("");
  for (let i = 0; i < arr.length; i++) {
    isNaN(arr[i]) ? (stringPart += arr[i]) : (numberPart += arr[i]);
  }

  let number = parseInt(numberPart) + 1;
  let slicedNumPart = numberPart.slice(0, -number.toString().length);
  slicedNumPart += number.toString()

  return numberPart.length === 0 ? stringPart + "1" : stringPart + slicedNumPart;
}