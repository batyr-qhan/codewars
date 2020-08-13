function add (a, b) {

  function toFixed (x) {
    if (Math.abs(x) < 1.0) {
      var e = parseInt(x.toString().split('e-')[1])
      if (e) {
        x *= Math.pow(10, e - 1)
        x = '0.' + (new Array(e)).join('0') + x.toString().substring(2)
      }
    } else {
      var e = parseInt(x.toString().split('+')[1])
      if (e > 20) {
        e -= 20
        x /= Math.pow(10, e)
        x += (new Array(e + 1)).join('0')
      }
    }
    return x
  }

  let aNum = toFixed(a)
  let bNum = toFixed(b)


  // for (let i = 0; i < a.length; i++) {
  //   aArr.push(Number(a[i]))
  // }
  //
  // for (let i = 0; i < b.length; i++) {
  //   bArr.push(Number(b[i]))
  // }

  let result = Number(a) + Number(b)

  console.log(result)

  for (let i = 0; i < result.length; i++) {
    console.log(result[i])
  }

  // console.log((Number(a) + Number(b)))
}

console.log(add('63829983432984289347293874', '90938498237058927340892374089'))


