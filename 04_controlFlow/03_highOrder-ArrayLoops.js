// FOR OF LOOPS                                   

const myArray = [1, 2, 3, 4, 5]

for(const num of myArray)                                // const iterator of object      -> general form inside loop
    {
        // console.log(num)
    }

const greetings = ["hello", "welcome", "thanks", "come again"]

for(const greet of greetings)
    {
        // console.log(greet)
    }


// MAPS -> Maps are used to store values in {key, value} pairs where main point is 1. (uniqueness i.e duplicates are not allowed). 2. (Order is preserved)

const map = new Map();

map.set('IN', 'India')
map.set('USA', 'United States Of America')
map.set('UK', 'United Kingdom')

// console.log(map)


for(const key of map)               // This type stores in array format i.e [ ]
    {
        // console.log(key)
    }


for(const [key,value] of map)          // This format shows in alag alag format i.e key and value seperately 
    {
        // console.log(`${key} :- ${value}`)
    }


const myObj = {
    game1 : "NFS",
    game2 : "Assassins's Creed",
    game3 : "GTA"
}

// for(const [key, value] of myObj)                 // ** This FOR-OF Loop doesn't work on OBJECTS
//     {
//         // console.log(`${key} :- ${value}`)
//     }


// To access Object using loops we use FOR-IN Loop

for (const key in myObj) {
//    console.log(`${key} :- ${myObj[key]}`)
}




// FOR-EACH LOOP

const codingLanguages = ['javaScript', 'python', 'sql', 'cpp', 'html']

codingLanguages.forEach( function (items) {
    // console.log(items)
})

codingLanguages.forEach( (items) =>{
    // console.log(items)
} )

codingLanguages.forEach( (item, index, arrList)=> {
    // console.log(item, index,  arrList)
})


const myCoding = [
    {
        languageName : "cpp",
        questions : '67'
    },
    {
        languageName : "javascript",
        questions : '100'
    },
    {
        languageName : "python",
        questions : '88'
    }]

myCoding.forEach( (item) => {
    console.log(`${item.questions} questions done in ${item.languageName} language.`)
})