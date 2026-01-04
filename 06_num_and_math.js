const score = 100;

const balance =new Number(1000);
console.log(typeof score);    // "number"
console.log(typeof balance);  // "object"
console.log(balance) // [Number: 1000]

console.log(balance.toString()) // "1000"
console.log(balance.toString().length) // 4
console.log(balance.toFixed(2)) // "1000.00"

const num = 9.6567;
console.log(num.toPrecision())    // "9.6567"
console.log(num.toPrecision(2))  // "9.7"
console.log(num.toPrecision(4))  // "9.657"
console.log(num.toPrecision(1))  // "10"
// why is the amswer 1e+1 ?
// because toPrecision(1) means we want only 1 significant digit
// so it rounds 9.6567 to 10, and represents it in exponential notation as 1e+1

const hundreds = 10000000
console.log(hundreds.toLocaleString()) // "10,000,000" in en-US locale
console.log(hundreds.toLocaleString('en-IN')) // "1,00,00,000" in en-IN locale

//NUMBERS PROPERTIES AND METHODS
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
console.log(Number.MIN_VALUE) // 5e-324
console.log(Number.POSITIVE_INFINITY) // Infinity
console.log(Number.NEGATIVE_INFINITY) // -Infinity
console.log(Number.NaN) // NaN
console.log(Number.isFinite(100)) // true
console.log(Number.isFinite(Infinity)) // false
console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN(100)) // false
console.log(Number.parseFloat("10.5")) // 10.5
console.log(Number.parseInt("10.5")) // 10
console.log(Number.parseInt("10 years")) // 10
console.log(Number.parseInt("years 10")) // NaN
console.log(Number.isInteger(10)) // true
console.log(Number.isInteger(10.5)) // false
console.log(Number.isInteger(NaN)) // false
console.log(Number.isInteger(Infinity)) // false



//********************MATH***********************************//

console.log(Math);//logs all the Math methods and properties

//MATH OBJECT
console.log(Math.PI) // 3.141592653589793
console.log(Math.E) // 2.718281828459045
console.log(Math.round(4.7)) // 5
console.log(Math.round(4.4)) // 4
console.log(Math.ceil(4.4)) // 5
console.log(Math.floor(4.7)) // 4
console.log(Math.trunc(4.7)) // 4
console.log(Math.sign(-10)) // -1
console.log(Math.sign(0)) // 0
console.log(Math.sign(10)) // 1
console.log(Math.pow(2, 3)) // 8
console.log(Math.sqrt(16)) // 4
console.log(Math.abs(-10)) // 10
console.log(Math.min(10, 20, -5, 0)) // -5
console.log(Math.max(10, 20, -5, 0)) // 20
console.log(Math.random()) // random number between 0 and 1
console.log(Math.floor(Math.random() * 100)) // random integer between 0 and 99
console.log(Math.floor(Math.random() * 100) + 1) // random integer between 1 and 100
console.log(Math.min(30, 10, 20) + Math.max(5, 15, 25)) // 35
