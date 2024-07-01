//   IIFE -> (Immediately Invoked Function Expressions)
// It is used sometimes when we want the database to connect as soon as the program starts or sometimes to protect the program from global scope pollutions.

// Only works when in global scope 

(function chai(){
    console.log("DB Connected")
})();

(function chai2(){
    console.log("DB-2 Connected")
})();

( () => {
    console.log('Arrow Function DB Connected')
})();


( (name) => {
    console.log(`${name} Connected`)
})('satyam');
