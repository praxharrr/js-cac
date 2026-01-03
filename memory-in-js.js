//Stack and Heap Memory in JavaScript

// In JavaScript, memory is managed in two main areas: the stack and the heap.

// DEFINATION- 
// Stack Memory:(PRIMITIVE VALUES)
// The stack is a region of memory that stores primitive values (like numbers, strings, booleans) and references to objects. 
// It operates in a last-in, first-out (LIFO) manner, meaning the last item added to the stack is the first one to be removed. 
// Stack memory is typically faster to access and is automatically managed by the JavaScript engine.


let myYoutubeChannel = "Codevolution"; // Stored in Stack
let anotherChannel = myYoutubeChannel; // anotherChannel gets a copy of the value
console.log(anotherChannel) // Output: Codevolution

anotherChannel = "Techsith"; // Changing anotherChannel does not affect myYoutubeChannel 
console.log(myYoutubeChannel) // Output: Codevolution
console.log(anotherChannel) // Output: Techsith
// In this example, myYoutubeChannel and anotherChannel are stored in stack memory.
// Changing anotherChannel does not affect myYoutubeChannel because they are independent copies of the primitive value.


// Heap Memory:(NON-PRIMITIVE VALUES)
// The heap is a larger region of memory used for storing objects, arrays, and functions. 
// Unlike the stack, the heap does not have a strict order for allocation and deallocation of memory. 
// Memory in the heap is managed through a process called garbage collection, which automatically frees up memory that is no longer in use.''


let userOne = { name: "Alice", age : 25 } // Stored in Heap
let userTwo = userOne; // userTwo gets a reference to the same object in Heap
console.log(userTwo) // Output: { name: "Alice", age: 25 }
userTwo.age = 30; // Modifying userTwo also affects userOne
console.log(userOne) // Output: { name: "Alice", age: 30 }
console.log(userTwo) // Output: { name: "Alice", age: 30 }
// In this example, userOne and userTwo reference the same object in heap memory.
// Changing the age property through userTwo also affects userOne because they point to the same object.