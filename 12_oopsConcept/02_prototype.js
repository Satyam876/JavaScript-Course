// Prototype is basicaly a behaviour that always tries to find more and more information.

function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 9

// console.log(multiplyBy5(5))             // 25
// console.log(multiplyBy5.power)         // 2
// console.log(multiplyBy5.prototype)    // {}


function createUser(userName, price){
    this.userName = userName
    this.price = price
}

createUser.prototype.increment = function(){
    this.price++;
}

createUser.prototype.printMe = function(){
    console.log(`Price of ${this.userName} is ${this.price}`)
}

const userOne = new createUser("Chai", 25);
const userTwo = new createUser("Tea", 250);

// userOne.printMe()
// userTwo.printMe()




// PROTOTYPES -> Everything in JavaScript is an object whether its an Array or string.

const heroes = ['thor', 'spiderman', 'hulk']

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpidermanPower : function(){
        console.log(`Spiderman Power is ${this.spiderman}`)
    }
}

// heroPower.getSpidermanPower()

Object.prototype.satyam = function(){
    console.log(`Satyam is present in all Objects.`)
}

heroPower.satyam()



// PROTOTYPICAL INHERITANCE

const Teacher = {
    makeVideos : true
}

const TeachingSupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : "JS Assignment",
    fullTime : true,
    __proto__ : TeachingSupport                 // It inherits the TeachingSupport Object
}

// ** modern approach **

Object.setPrototypeOf(TAsupport, TeachingSupport)




let anotherUserName = "ChaiaurCode             "

String.prototype.trueLength = function(){
    console.log(this)
    console.log(`True Length : ${this.trim().length}`)
}

anotherUserName.trueLength()