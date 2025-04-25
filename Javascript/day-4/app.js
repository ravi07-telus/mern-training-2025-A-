/*
==> Closures + Asynchronous JavaScript
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

// const num = 10;
// // Closure basic syntax:
// function outerFunction() {
//     let outerVar = "I am outside!";

//     function innerFunction() {
//         let test = "Test"
//         console.log(outerVar,num);  // Accessing outerVar
//     }
//     return innerFunction;
// }
  
// const myFunc = outerFunction();  // outerFunction is called
// myFunc(); // Logs: "I am outside!"

 // num =10 => 
// function calculate(){
//     let obj = {};

//     function sum(num){
//         if(obj[num]){
//             return obj[num];
//         }
//         let s = 0;
//         for(let i=1;i<=num;i++){
//             s +=i;
//         }
//         obj[num] = s;
//         return s;
//     }

//     return sum;
// }

// const num = 10;
// const s = calculate()
// console.log("Calculate: ",s(10));
// console.log("Calculate: ",s(20));
// console.log("Calculate: ",s(10));




/*
==> setTimeout, setInterval:
    -> setTimeout executes a function once after a specified delay.
    -> setInterval executes a function repeatedly with a fixed delay between each call.
*/

// const timer = setTimeout(()=>{
//     console.log("Hello World")
// }, 10 * 1000)

// setTimeout(()=>{
//     clearTimeout(timer);
// },2*1000)

// const timer = setInterval(()=>{
//     console.log("In setInterval: ");
// },2 * 1000);


// setTimeout(()=>{
//     clearInterval(timer);
// }, 10 * 1000)


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
//     const success = false;
//     if(success){
//         setTimeout(()=>{
//             resolve("Promise resolved")
//         },4 * 1000)
//          // promise will fulfilled
//     }else{
//         setTimeout(()=>{
//             reject(10+881); // rejected
//         },4 * 1000);
//     }
// })

// console.log("Promise initial state: ",promise);
// promise
// .then((res)=>{
//     console.log("promise is resolved: ",res);
// })
// .catch(err=>{
//     console.log("Promise is rejected",err);
// })
// .finally(()=>{
//     console.log("Finally can run")
// })

// Promise chaining:
// const promise2 = new Promise((res,rej)=>{
//     const success = true;
//     if(success){
//         res(10);
//     }else{
//         rej(false);
//     }
// });

// promise2
// .then(res=>{
//     return res + 20;
// })
// .then(res=>{
//     const s = res + 30;
//     return s;
// })
// .then(sum=>{
//     console.log("Sum is: ", sum);
// })


/*
==> async/await:
    ->  async/await is syntactic sugar over Promises that makes asynchronous code look and behave more 
        like synchronous code—improving readability and error handling.
    ->  An async function always returns a Promise.
    ->  'await' pauses the execution of the async function until the Promise is resolved or rejected.

==> Points to Remember:
    ->  await can only be used inside async functions
    ->  Helps avoid .then() chains
    ->  Makes asynchronous code easier to read and debug
*/


async function sum(a,b){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(a+b);
        },5000)
    })
}

async function test(){
    const s = await sum(10,20);
    console.log("Test function is called");
    console.log("Sum is: ", s); // 
}

test();