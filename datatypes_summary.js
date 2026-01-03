//*** Objects and web events are really important topics of js if you can master these 2 you are half way there */



//datatypes are of 2 types - Primitive and Non-Primitive

//Primitive Data Types
//1. String
let name = "John Doe"; // String literal
console.log(typeof name); // Output: string
//2. Number
let age = 30; // Number literal
console.log(typeof age); // Output: number
//3. Boolean
let isStudent = false; // Boolean literal
console.log(typeof isStudent); // Output: boolean
//4. Undefined
let address; // Undefined variable
console.log(typeof address); // Output: undefined
//5. Null
let phoneNumber = null;
console.log(typeof phoneNumber); // Output: object (this is a known quirk in JavaScript)
//6. Symbol
let uniqueId = Symbol("id");
console.log(typeof uniqueId); // Output: symbol
//7. BigInt
let bigNumber = 9007199254740991n; // BigInt literal
console.log(typeof bigNumber); // Output: bigint

//Non-Primitive Data Types(reference types)
//1. Objects
let person = {
    name: "Alice",
    age: 25
}
console.log(typeof person); // Output: object

//2. Arrays
let numbers = [1,2,3,4,5]
console.log(typeof numbers , numbers); // Output: object , [ 1, 2, 3, 4, 5 ]

//3. Functions
function greet() {
    console.log("Hello!");
}
console.log(typeof greet); // Output: function

//how is javascript typed is it dynamically typed or statically typed?
//Javascript is dynamically typed language because we dont have to specify the data type of variable at the time of declaration 