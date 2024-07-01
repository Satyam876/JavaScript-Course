const user = {
    username : "satyam",
    price : 999,

    welcomeMessage : function(){
        console.log(`Hello ${this.username} ! Welcome to Website`)
        // console.log(this)          // gives the refernce of an instance
    }
}

// user.welcomeMessage()

// user.username = "Sam"
// user.welcomeMessage()

//console.log(this)

function useOfThis(){
    let username = "satyam"
    console.log(this)
    console.log(this.username)        // undefined -> b/c this doesn't work inside functions only inside objects
}

// useOfThis()


const newFunction = function(){
    let username = "satyammmmmmmm"
    console.log(this.username)             // undefined
    console.log(this)
}

// newFunction()



//  ###############                       ARROW FUNCTION                ################################

const arrowFunction = () =>{
    let user = "anonymous11"
    console.log(this.user)               // undefined
}

// arrowFunction()

const addTwoNum = (num1, num2) =>{
    return num1 + num2
}

// console.log(addTwoNum(3, 4))

const addNum = (num1, num2) => (num1 + num2)                     // IMPLICIT RETURN  -> if using () -> then no need of return statement

console.log(addNum(3, 9))
