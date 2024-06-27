//  SINGLETON - Single Instance of Object -> It happens whenever we create object through Constructor
//  Object.create()


// Object Literal

const mySymbol = Symbol("key1")

const User = {
    name : "Satyam",
    "full name" : "Satyam Kumar",
    age : 21,
    location : "Bokaro",
    email : "satyam@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monnday", "Wednesday","Saturday"],
    [mySymbol] : "myKey1"                      // We have to use mySymbol in [] otherwise its type will be "string". 
 }

// console.log(User.email);
// console.log(User["email"])

// console.log(User["full name"])

// console.log(User[mySymbol])

User.location = "Bhubaneswar"
// Object.freeze(User)                      // Object.freeze() -> doesn't allow changes

// User.location = "Sydney"

// console.log(User)


User.greeting = function(){
    console.log("Hello JS User !")
}

User.greetingTwo = function(){
    console.log(`Hello JS User ! ${this["full name"]}`)
}


User.greeting()
User.greetingTwo()