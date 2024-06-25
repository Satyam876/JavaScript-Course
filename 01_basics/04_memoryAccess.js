// STACK & HEAP MEMORY ACCESS IMPLEMENTATION

// Stack -> Primitive Datatypes

let courseName = "JavaScript by Chai aur Code"

let anotherCourseName = courseName

// console.log(courseName)
// console.log(anotherCourseName)

anotherCourseName = "DSA by LeetCode"

// console.log(courseName)
// console.log(anotherCourseName)


// HEAP -> Non Primitive Datatypes

let userOne = {
    email : "userOne@gmail.com",
    upi : "userOne@oksbi"
}

let userTwo = userOne;

// console.log(userOne)
// console.log(userTwo)

userTwo.email = "satyam@yahoo.mail"

console.log(userOne)
console.log(userTwo)