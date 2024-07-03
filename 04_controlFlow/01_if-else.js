//  IF - ELSE Statements

// const temp = 41

// if(temp >= 41)
//     console.log("less than 50")
// else
//     console.log("greater than 50")


let userLoggedIn = true
let debitCard = true

let loggedInFromGoogle = true;
let loggenInFromEmail = false;

if(userLoggedIn && debitCard)
    console.log("Allow to buy")

if(loggedInFromGoogle || loggenInFromEmail)
    console.log("User logged In !")


const emptyObject = {}

if(Object.keys(emptyObject).length === 0)
    console.log("Object is Empty")


// Nullish Coalescing Operator (??) : null undefined

let val1 = 5 ?? 10
console.log(val1)

let val2 = null ?? 20
console.log(val2)