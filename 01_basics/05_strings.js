const name = "Satyam"
const pageCount = 5;

// console.log(name + " Value : " + pageCount)

// console.log(`My name is ${name} and this page count is ${pageCount}`)

const gameName = new String(`Assassin's Creed`);
// console.log(gameName)
// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(7))


const gameNameSubstring = gameName.substring(0,8)
// console.log(gameNameSubstring)

const anotherGameString = gameName.slice(-16, 12)
// console.log(anotherGameString)


const spacedString = "       spacedName      "
// console.log(spacedString)
// console.log(spacedString.trim())
// console.log(spacedString.trimEnd())



const url = "https://facebook.com/satyam%20kumar"
console.log(url)
console.log(url.replace('%20', '-'))

console.log(gameName.split(' '))