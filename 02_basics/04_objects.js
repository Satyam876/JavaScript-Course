const tinderUser = new Object()

// const tinderUser = {}

tinderUser.id = 123
tinderUser.name = "Satyam"
tinderUser.isLoggedIn = true

// console.log(tinderUser)

const regularUser = {
    email : "satyam@google.com",
    fullName : {
        userFullName : {
            firstName : "Satyam",
            lastName : "Kumar"
        }
    }
}

// console.log(regularUser.fullName)
// console.log(regularUser.fullName.userFullName)
// console.log(regularUser.fullName.userFullName.firstName)



//                #############        Combing Two Objects          ################

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

// const obj3 = {obj1, obj2}            // Not a good method -> objects get nested

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3)




/*         ########################     Acess Data that Comes from DataBase     #################################    */

const User = [
    {
        id : 1,
        email : "first@gmail.com"
    },

    {
        id : 2,
        email : "second@google.com"
    },

    {
        id : 3,
        email : "third@google.com"
    }
]

// console.log(User[1].email)



// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const Course = {
    courseName : "Chai aur Code JS",
    coursePrice : 999,
    courseInstructor : "Hitesh"
}

// console.log(Course.courseInstructor)

const {courseInstructor} = Course                       // {courseInstructor} -> destructuring
console.log(courseInstructor)

const {courseInstructor : instructor} = Course
console.log(instructor)