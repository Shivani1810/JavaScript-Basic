const marvel_heros = ["thor", "IronMan", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)         //Adds 2nd array as 3rd element
// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)       //Combines two or more arrays
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]    //Spread Operator - Combines multiple arrays
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)     //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));

console.log(Array.from({name: "Shivani"}));     //here we have given the object, so it will give empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
