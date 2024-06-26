let myDate = new Date()

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate)

const myCreatedDate = new Date(2024, 0, 6)
// console.log(myCreatedDate.toDateString())

const anotherDate = new Date(2024, 10, 6, 5, 30)
// console.log(anotherDate.toLocaleString())

let newDate3 = new Date("2024-06-26")
// console.log(newDate3.toDateString())


/*              *******************  TIMESTAMP *********************************************        */

let myTimeStamp = Date.now()
// console.log(myTimeStamp)

// console.log(myCreatedDate.getTime())         // This gives timestamp in milliseconds from the Date that is January specificed in the docs.
                                                // used for comparing time stamps like in hotel websites (AirBnB)


// console.log(Math.floor(Date.now()/1000))      // Get time in seconds



let newDate = new Date()

console.log(newDate.getDate())
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

console.log(newDate.toLocaleString('default', {
    weekday : "long"
}))

