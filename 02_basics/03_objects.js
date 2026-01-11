// JavaScript Objects Tutorial: From Start to End

// Objects in JavaScript are collections of key-value pairs.
// They are fundamental for storing and organizing data.

// 1. Creating Objects

// Method 1: Object Literal Syntax (most common)
const person = {
    name: "Alice",
    age: 30,
    location: "New York",
    isStudent: false
};

// Method 2: Using Object Constructor
const person2 = new Object();
person2.name = "Bob";
person2.age = 25;
person2.location = "Los Angeles";

// Method 3: Using Object.create() (for inheritance)
const personProto = {
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
};
const person3 = Object.create(personProto);
person3.name = "Charlie";
person3.age = 35;

// 2. Accessing Properties

// Dot notation
console.log(person.name); // Alice
console.log(person.age);  // 30

// Bracket notation (useful for dynamic keys)
console.log(person["location"]); // New York

const key = "age";
console.log(person[key]); // 30

// 3. Modifying Objects

// Adding new properties
person.email = "alice@example.com";
person["phone"] = "123-456-7890";

// Modifying existing properties
person.age = 31;
person.location = "Boston";

// Deleting properties
delete person.isStudent;

// 4. Object Methods

// Adding methods to objects
person.introduce = function() {
    return `Hi, I'm ${this.name}, ${this.age} years old from ${this.location}.`;
};

console.log(person.introduce()); // Hi, I'm Alice, 31 years old from Boston.

// 5. Nested Objects

const company = {
    name: "Tech Corp",
    address: {
        street: "123 Main St",
        city: "San Francisco",
        zipCode: "94105"
    },
    employees: [person, person2],
    ceo: person3
};

// Accessing nested properties
console.log(company.address.city); // San Francisco
console.log(company.employees[0].name); // Alice

// 6. Object Destructuring

const { name, age, location } = person;
console.log(name, age, location); // Alice 31 Boston

// Destructuring with alias
const { name: fullName, age: years } = person;
console.log(fullName, years); // Alice 31

// 7. Object Spread Operator

const personCopy = { ...person };
personCopy.name = "David";
console.log(person.name); // Alice (original unchanged)
console.log(personCopy.name); // David

// Merging objects
const additionalInfo = { salary: 50000, department: "Engineering" };
const completePerson = { ...person, ...additionalInfo };

// 8. Object Methods (built-in)

// Object.keys() - returns array of keys
console.log(Object.keys(person)); // ["name", "age", "location", "email", "phone", "introduce"]

// Object.values() - returns array of values
console.log(Object.values(person)); // ["Alice", 31, "Boston", "alice@example.com", "123-456-7890", function]

// Object.entries() - returns array of [key, value] pairs
console.log(Object.entries(person));

// Object.assign() - copies properties from source to target
const target = {};
Object.assign(target, person);
console.log(target);

// Object.freeze() - prevents modifications
Object.freeze(person);
// person.age = 32; // This will not work in strict mode

// Object.seal() - allows property modification but not addition/deletion
const sealedObj = { a: 1 };
Object.seal(sealedObj);
sealedObj.a = 2; // OK
// sealedObj.b = 3; // Not allowed

// 9. Prototypes and Inheritance

// Every object has a prototype
console.log(person.__proto__); // Object prototype

// Constructor functions
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

const john = new Person("John", 28);
console.log(john.greet()); // Hello, I'm John

// ES6 Classes (syntactic sugar for prototypes)
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    speak() {
        return `${this.name} makes a sound`;
    }
}

const dog = new Animal("Buddy", "Dog");
console.log(dog.speak()); // Buddy makes a sound

// Inheritance with classes
class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog");
        this.breed = breed;
    }

    speak() {
        return `${this.name} barks!`;
    }
}

const golden = new Dog("Max", "Golden Retriever");
console.log(golden.speak()); // Max barks!

// 10. JSON and Objects

// Converting object to JSON string
const jsonString = JSON.stringify(person);
console.log(jsonString);

// Parsing JSON string back to object
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);

// Note: Functions are not included in JSON serialization

// 11. Common Patterns and Best Practices

// Factory functions
function createCar(make, model, year) {
    return {
        make,
        model,
        year,
        getInfo() {
            return `${this.year} ${this.make} ${this.model}`;
        }
    };
}

const myCar = createCar("Toyota", "Camry", 2020);
console.log(myCar.getInfo()); // 2020 Toyota Camry

// Object composition
const canEat = {
    eat() {
        return "Eating...";
    }
};

const canWalk = {
    walk() {
        return "Walking...";
    }
};

const personWithAbilities = Object.assign({}, person, canEat, canWalk);
console.log(personWithAbilities.eat()); // Eating...

// 12. Advanced Topics

// Getters and Setters
const temperature = {
    _celsius: 0,

    get celsius() {
        return this._celsius;
    },

    set celsius(value) {
        if (value < -273.15) {
            throw new Error("Temperature below absolute zero!");
        }
        this._celsius = value;
    },

    get fahrenheit() {
        return this._celsius * 9/5 + 32;
    }
};

temperature.celsius = 25;
console.log(temperature.fahrenheit); // 77

// Symbols as property keys
const symbolKey = Symbol("uniqueKey");
const objWithSymbol = {
    [symbolKey]: "secret value"
};
console.log(objWithSymbol[symbolKey]); // secret value

// WeakMap and WeakSet for memory management
const weakMap = new WeakMap();
const keyObj = {};
weakMap.set(keyObj, "value");
console.log(weakMap.get(keyObj)); // value
// keyObj can be garbage collected even if referenced in WeakMap

// This covers the basics to advanced concepts of JavaScript objects.
// Practice by running this code and experimenting with different scenarios!
