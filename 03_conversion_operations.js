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

//**************OPERATIONS******************/
let value = 3
let negValue = -value
console.log(negValue)
// -3

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2**2) // exponentiation operator
console.log(5%2) //modulus operator

let str1 = "Hello"
let str2 = "Teesha"
let str3 = str1 +" "+ str2
console.log(str3) // Hello Teesha'

// concatenation operator

console.log("2" + 2) // "22"
console.log("2" + "2") // "22"
console.log(2  +"2") // "22"
console.log(2 + 2 + "2") // "42"
console.log("2" + 2 + 2) // "222"

console.log("Prakhar" + "Teesha") // "PrakharTeesha"

//prefix and postfix increment and decrement operators
let increment = 5
console.log(++increment) //6
console.log(increment) //6
console.log(increment++) //6
console.log(increment) //7

let decrement = 5
console.log(--decrement) //4
console.log(decrement) //4
console.log(decrement--) //4
console.log(decrement) //3
//prefix increments/decrements the value first and then uses it
//postfix uses the value first and then increments/decrements it
