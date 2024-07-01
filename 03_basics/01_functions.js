function sayMyName(){           // Function declaration
    console.log("S");
    console.log("A");
    console.log("T");
    console.log("Y");
    console.log("A");
    console.log("M");
}

// sayMyName()             // Function Execution


function addTwoNumbers(num1, num2){
    console.log(num1 + num2)
}

// addTwoNumbers(3,4)          //  3 + 4 = 7
// addTwoNumbers(3, "4")       //  3 + "4" = 34
// addTwoNumbers(3, "a")       //  3 + "a" = 3a
// addTwoNumbers(3, null)      //  3 + null = 3

function addNum(num1, num2){
    return num1 + num2
}

const result = addNum(5,8)
// console.log("Result : ", result)


function userLoggedIn(username){
    if(username === undefined)
        {
            console.log("Please enter username")
            return
        }
    return `${username} just logged in !`
}

// console.log(userLoggedIn("satyam1789"))





//                   **********************      REST OPEARTOR  *******************************                  

function calculateCartPrice(...num){                   //  (...) -> Rest opeartor -> when multiple arguments are there so to access it we use rest operator 
    return num
}

// console.log(calculateCartPrice(100, 200, 3000, 50000))



// Pssing Object in a Function

const user = {
    username : "Satyam",
    price : 1999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`)
}

// handleObject(user)