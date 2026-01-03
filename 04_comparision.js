console.log("Comparison Operators in JavaScript");
console.log(2>1) // true
console.log(2<1) // false
console.log(2>=2) // true
console.log(2<=1) // false
console.log(2==2) // true
console.log(2!=1) // true

console.log(2< "2")// false

console.log(null < 0);// false
console.log(null == 0);// false
console.log(null >= 0);//true

// in comparison with null and undefined only == and != work as expected
//null is converted to 0 in >=, <=, >, < comparisons
//thats why null >=0 is true but null >0 is false

console.log(undefined > 0);// false
console.log(undefined < 0);// false
console.log(undefined == 0);// false

// in comparison with null and undefined only == and != work as expected
// all other comparisons return false because undefined is not converted to any number

// Strict equality operator
console.log(2 === "2") // false
console.log(2 !== "2") // true
console.log(2 === 2) // true
// === checks for both value and type without any type conversion



