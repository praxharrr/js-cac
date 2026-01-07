const marvel_heroes = ["Iron Man", "Captain America", "Thor"];
const dc_heroes =["Batman", "Superman", "Wonder Woman"];

//marvel_heroes.push(dc_heroes) // adds the entire dc_heroes array as a single element at the end of marvel_heroes

//console.log(marvel_heroes) // [ 'Iron Man', 'Captain America', 'Thor', [ 'Batman', 'Superman', 'Wonder Woman' ] ]

marvel_heroes.concat(dc_heroes) // merges the dc_heroes array into marvel_heroes without modifying either array

console.log(marvel_heroes) // [ 'Iron Man', 'Captain America', 'Thor' ]
console.log(dc_heroes) // [ 'Batman', 'Superman', 'Wonder  ]
// concat combines two or more arrays and returns a new array 