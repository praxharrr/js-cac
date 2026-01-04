//Dates 
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)   // object
// Getting specific date
console.log("Getting specific date")
console.log("Date: ", myDate.getDate())
console.log("Day: ", myDate.getDay())
console.log("Month: ", myDate.getMonth())
console.log("Year: ", myDate.getFullYear())
console.log("Hours: ", myDate.getHours())
console.log("Minutes: ", myDate.getMinutes())
console.log("Seconds: ", myDate.getSeconds())

//What is toDateString() and toLocaleString()
let newDate = new Date("2024-06-15T10:20:30Z");
console.log("toDateString(): ", newDate.toDateString());
console.log("toLocaleString(): ", newDate.toLocaleString());
// locales String is used to format date according to region
console.log("toLocaleString() with locales: ", newDate.toLocaleString('en-GB')); // DD/MM/YYYY format
console.log("toLocaleString() with locales: ", newDate.toLocaleString('en-US')); // MM/DD/YYYY format

let myTimestamp = Date.now();
console.log("Current Timestamp: ", myTimestamp);// milliseconds since January 1, 1970

//Creating date with specific date
let specificDate = new Date('2023-12-25T09:30:00');
console.log("Specific Date: ", specificDate.toString()); 
console.log(specificDate.getTime()) // timestamp of specific date
// Modifying date
specificDate.setDate(31);
specificDate.setMonth(11); // December (0-indexed)
specificDate.setFullYear(2024);
console.log("Modified Specific Date: ", specificDate.toString());

