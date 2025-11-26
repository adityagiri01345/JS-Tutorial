const mar_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["duperman", "flash", "batman"]


//dc_heros.push(mar_heros)

// console.log(dc_heros);
// console.log(dc_heros[3][1]);

// const allHeros = mar_heros.concat(dc_heros)
// console.log(allHeros);

//spread
// const all_new_bros = [...mar_heros, ...dc_heros]
// console.log(all_new_bros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]] ]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Aditya"));
console.log(Array.from("Aditya"));


console.log(Array.from({name:"Aditya"})); // intresting for interview


let score1 = 400
let score2 = 500
let score3 = 700

console.log(Array.of(score1, score2, score3));

