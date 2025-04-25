/*
==> Scope, Hoisting & Closures + Asynchronous JavaScript
    Closures
    setTimeout, setInterval
    Promises
    async/await
*/

/*
==> Closures:
    ->  A closure is created when a function is defined inside another function, and the inner function 
        remembers variables from the outer function even after the outer function has finished executing
    
==> Why are Closures Important?
    ->  They preserve the scope of outer functions.
    ->  Enable data privacy.
*/


// Closure basic syntax:
function outerFunction() {
    let outerVar = "I am outside!";

    function innerFunction() {
      console.log(outerVar);  // Accessing outerVar
    }    
    return innerFunction;
}
  
const myFunc = outerFunction();  // outerFunction is called
myFunc(); // Logs: "I am outside!"


/*
==> setTimeout, setInterval:
    -> setTimeout executes a function once after a specified delay.
    -> setInterval executes a function repeatedly with a fixed delay between each call.
*/

/*
==> Promises:
    ->  A Promise in JavaScript is an object representing the eventual completion or failure of an 
        asynchronous operation.
    
==> States of a Promise:
    -> pending
    -> fulfilled
    -> rejected

==> Why Promises are used:
    -> Handle asynchronous operations (like API calls, file reading)
    -> Avoid "callback hell"
    -> Improve code readability
    -> to perform asynchronous work
*/

// Creation of promise:
// const promise = new Promise((resolve,reject)=>{
//     const success = true;
//     if(success){
//         return resolve("Promise resolved")
//     }else{
//         reject("Promise rejected");
//     }
// })

// promise.then(res=>{
//     console.log("Res is: ",res);
// });

// Chaining Promises


/*
==> async/await:
    ->  async/await is syntactic sugar over Promises that makes asynchronous code look and behave more 
        like synchronous code—improving readability and error handling.
    -> An async function always returns a Promise.
    -> 'await' pauses the execution of the async function until the Promise is resolved or rejected.

==> Points to Remember:
    ->  await can only be used inside async functions
    ->  Helps avoid .then() chains
    ->  Makes asynchronous code easier to read and debug
*/