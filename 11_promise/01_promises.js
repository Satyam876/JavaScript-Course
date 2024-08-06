/*const promiseOne = new Promise((resolve, reject)=>{
    // Do an async task
    // DB Calls, Network Calls

    setTimeout(()=>{
        console.log("Async Task is completed.")
        resolve()
    } ,1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed\n\n")
})





// PROMISE 2 -> SAME IMPLEMENTATION BUT WITHOUT USING A VARIABLE

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async Task-2 is completed")
        resolve()
    }, 1000)
})
.then(()=>{
    console.log("Promise-2 Consumed\n\n")
})



// PROMISE -3 -> Passing Parameters through Promise Resolve 

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async Task-3 is completed.")
        resolve({username : "satyam123", email : "satyam@gmail.com"})                    // We can pass data through resolve() 
    },1000)                                                                                   // resolve() -> takes params in the form of object.
})

promiseThree.then((user)=>{
    console.log(user)
    console.log("Promise-3 Consumed.\n\n")
})




// PROMISE - 4 -> Chaining and Passing Parameters from Resolve & Reject

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username : "satyam123", email : "satyam@gmail.com"})
        }else{
            reject('ERROR : Something went Wrong !')
        }
    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user)
    console.log(user.username)
    return user.username
})
.then((myUsername)=>{                                              // Chaining -> It takes parameter as the return value which is coming from above
    console.log(myUsername)
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{
    console.log("The Promise is either rejected or resolved !\n\n")
})



// PROMISE - 5 -> Async & await

const promiseFive = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        let error = false;

        if(!error){
            resolve({courseName : "javaScript", courseID : "123"})
        }
        else{
            reject('ERROR ! Course Not Found.')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response) 
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive();        */





// FETCH 


// Method-1 : Using Async & await


async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        // console.log(response)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log('Error : ', error)
    }
}

// getAllUsers()



// Method-2 : Using then and catch block

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{
    console.log("Fetch method using then & catch block is concluded.")
})