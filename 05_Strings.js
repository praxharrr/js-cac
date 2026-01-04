const name = "Prakhar"
const lastName = "Sharma"
console.log(name +" "+ lastName)

console.log(`My first name is ${name} and my last name is ${lastName}`);
// this is known as string interpolation

console.log(`My first name is ${name.toUpperCase()} and my last name is ${lastName}`);
// you can also use expressions inside ${} like i used uppercase method here 
//so output will be "My first name is PRAKHAR and my last name is Sharma"

const gameName = new String("Chess")
console.log(gameName)
// this is another way of creating string using String constructor
// but this is not recommended as it creates a string object rather than a string primitive
// and string primitives are faster and use less memory than string objects
// hence always prefer using string literals (double quotes, single quotes or backticks)
console.log(gameName[0]) // C
console.log(gameName.length) // 5
console.log(gameName.toUpperCase()) // CHESS
console.log(gameName.includes("ess")) // true
console.log(gameName.__proto__) 

// String {}
// __proto__ is a property that points to the prototype of the object
// here it points to String prototype which contains all the methods available for string objects
// there are many more string methods available in javascript
// you can check them out in the official documentation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String



// Strings are immutable in javascript
let str = "Hello"
str[0] = "h" // this will not change the string
console.log(str) // Hello
console.log(gameName.length)// 5
console.log(gameName.charAt(2))// e
console.log(gameName.indexOf("e"))// 2
console.log(gameName.slice(1,4))// hes
console.log(gameName.replace("Chess", "Checkers"))// Checkers
const str2 = gameName.substring(1,4)
console.log(str2)// hes
const str3 = gameName.slice(1,4)
console.log(str3)// hes
// substring and slice are similar but there are some differences
// substring does not accept negative indices while slice does
const str4 = gameName.slice(-4,-1)
console.log(str4)// ess

const str5 = "   Hello World!   "
console.log(str5.trim())// "Hello World!"
// trim removes whitespace from both ends of the string

console.log(str5.split(" "))// [ '', '', '', 'Hello', 'World!', '', '', '' ]
// split splits the string into an array of substrings based on the separator provided

const str6 = "apple,banana,cherry"
const fruits = str6.replace("apple", "mango")
console.log(fruits)// mango,banana,cherry

console.log(str6.includes("banana"))// true
console.log(str6.startsWith("apple"))// true
console.log(str6.endsWith("cherry"))// true
console.log(str6.endsWith("sundar"))// false
