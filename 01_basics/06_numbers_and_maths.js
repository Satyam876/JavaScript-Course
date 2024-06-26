const score = 50
// console.log(score)

const newScore = new Number('299')
// console.log(newScore)

// console.log(newScore.toString().length)

// console.log(newScore.toFixed(2))


const anotherNumber = 23.897
// console.log(anotherNumber.toPrecision(3))

const newNumber = 123.897
// console.log(newNumber.toPrecision(3))

const anotherNewNumber = 1223.897
// console.log(anotherNewNumber.toPrecision(3))

const hundreds = 100000
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-IN'))



/*                *****************    MATH     **********************************                        */

// console.log(Math.random())

// console.log((Math.random()*10) + 1)           // So that O is not included like if 0.004*10 = 0.04 + 1 = 1.04

// console.log(Math.floor((Math.random()*10) + 1))

//Generic Formula to get a Random Number between a Range

let min = 10
let max = 20

let randomValue = Math.floor(Math.random() * (max - min + 1) + min)
console.log(randomValue)