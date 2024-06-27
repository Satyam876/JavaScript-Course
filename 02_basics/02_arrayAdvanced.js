const marvelHeroes = ["Thor", "Ironman", "Captain America", "Doctor Strange"]
const dcHeroes = ["Batman", "Spiderman", "Flash"]

// marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes)
// console.log(marvelHeroes[4][2])

const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes)

const combinedHeroes = [...marvelHeroes, ...dcHeroes]             // (...) -> SPREAD OPERATOR -> Spread all elements of array individually & then combine them.
// console.log(combinedHeroes)


const anotherArray = [1, 2, 3, [[4, 5, 6], 7, [6, 7, [4, 5]]]]

const usableAnotherArray = anotherArray.flat(Infinity)
// console.log(usableAnotherArray)


console.log(Array.isArray("Satyam"))
console.log(Array.from("Satyam"))                      // Array.from(param) -> convert the parameter into array
console.log(Array.from({name : "Satyam"}))             // Here it returns an empty array b/c we have to specify whether it should make array from key or value.


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))