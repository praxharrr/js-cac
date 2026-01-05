//Arrays

const myArr= [0 ,1 ,2 ,3 ,4 ,5 ,true , "prakhar"];
// arrays are mutable which means we can change the elements of the array and have diffrent data types in a single array
console.log(myArr[0]);// accessing elements of array using index
// arrays are zero indexed

// in arrays javascript array - copy operations create shallow copies
const newArr= myArr; // this is a shallow copy
//so shallow copy means if we change any element in newArr it will also reflect in myArr
newArr[0]= 100;
console.log(myArr); // [ 100, 1, 2, 3, 4, 5, true, 'prakhar' ]

//deep copy of array are those which create a new array in memory
// we can create deep copy using slice() method
const deepArr= myArr.slice(); // this is a deep copy
deepArr[1]= 200;
console.log(myArr); // [ 100, 1, 2, 3, 4, 5, true, 'prakhar' ]  // myArr remains unchanged  
console.log(deepArr); // [ 100, 200, 2, 3, 4, 5, true, 'prakhar' ] 
// deepArr is changed and the difference between the output is that  myArr[1] is 1 and deepArr[1] is 200

const myHero = ["thor" , "spiderman" , "ironman"];
const myArr2 = new Array(1,2,3,4,5); // another way to create array using Array constructor
console.log(myHero);// [ 'thor', 'spiderman', 'ironman' ]
console.log(myArr2[1]) //2
console.log(typeof myHero); // object


//Array MethodS

myArr.push(6) // adds element at the end of the array
console.log(myArr); // [ 100, 1, 2, 3, 4, 5, true, 'prakhar', 6 ]

myArr.pop() // removes element from the end of the array
console.log(myArr); // [ 100, 1, 2, 3, 4, 5, true, 'prakhar' ] // 6 is removed

// we can also use unshift and shift methods

myArr.unshift(-1) // adds element at the beginning of the array
console.log(myArr); // [ -1, 100, 1, 2, 3, 4, 5, true, 'prakhar' ]

myArr.shift() // removes element from the beginning of the array
console.log(myArr); // [ 100, 1, 2, 3, 4, 5, true, 'prakhar' ] // -1 is removed

// we can also use indexOf method to find the index of an element in the array
console.log(myArr.indexOf(3)); // 3

// includes method to check if an element is present in the array or not
consol.log(myArr.includes(4))  // true
console.log(myArr.includes(10)) // false

const newArr2 = myArr.join("-"); // join all elements of the array into a string


console.log(myArr.join("-")); // 100-1-2-3-4-5-true-prakhar
console.log(typeof newArr2); // string
