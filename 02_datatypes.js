"use strict";//treat all JS code as newer version  

alert("hello")//this will display hello in alert box //alert gives popup in browser

//alert(3+3) //we are using nodejs so alert will not work here , not browser environment

console.log(2+3)//this will print 5 in console 

//code readilibility should be your first priority
//for documentation refer mdn web docs
//for original documentation refer ecma script documentation which is tc39.es standard
//https://tc39.es/ecma262/

//data types in js
let name = "prakhar"
let age = 21
let isLoggedIn = false

//number in js ranges from 2 to the power of 53

//bigint is used for larger numbers
let bigNumber = 1234567890123456789012345678901234567890n

//string
let str1 = "this is a string"
let str2 = 'this is also a string'
let str3 = `this is also a string`

//boolean
let isLoggedIn1 = true
let isLoggedIn2 = false

//null
let nullVar = null

//undefined
let undefVar = undefined

//symbol
let sym1 = Symbol("mySymbol")
let sym2 = Symbol("mySymbol")
//sym1 and sym2 are different even though they have same description 

//object
let user = {
    name: "prakhar",
    age: 21,
    isLoggedIn: true
}
console.log(user)

//typeof operator
console.log(typeof name) //string
console.log(typeof age) //number

//when we check typeof null it gives object which is a bug in js
console.log(typeof nullVar) //object
//but we want to know typeof undefined variable it gives undefined
console.log(typeof undefVar) //undefined

