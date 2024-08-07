// 1. OBJECT LITERAL

const User = {
    userName : "Satyam",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log("Getting User Details : ");
        console.log(`Username : ${this.userName}`)
        console.log(this)
    }
}

// console.log(User.userName)
// console.log(User.getUserDetails())



// 2. CONSTRUCTORS

function myUser(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = new myUser("satyam", 12, true)            // "new" keyword creates an instance
const userTwo = new myUser("sakshi", 8, false)

console.log(userOne)
console.log(userTwo)