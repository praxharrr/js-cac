let score = "33"

console.log(typeof score);
console.log(typeof (score))

// convert string to number 
let valueinNumber = Number(score)
console.log(typeof valueinNumber)
console.log(valueinNumber)

// "33" >= 33
//"33abc" >= NaN
// true >= 1 && false >= 0
let isLoggedIn = "true"

let isLoggedIn2 =1
console.log(typeof isLoggedIn2)
let booleanIsLoggedIn = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn)

// Boolean("") => false
// Boolean("Prakhar") => true
// Boolean(0) => false
// Boolean(33) => true
// Boolean(null) => false
// Boolean(undefined) => false
// Boolean(NaN) => false