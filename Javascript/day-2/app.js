/*
==> Functions + Arrays & Objects:
    1) Function declarations vs expressions
    2) Arrow functions
    3) Parameters, return values
    4) Higher-order functions & callbacks
    5) Arrays: creation, access, methods (push, pop, map, filter, reduce)
    6) Objects: creation, access, modification
    7) Looping through arrays & objects:
*/


/*
    1) Function declarations vs expressions
*/

// Normal function declaration
// function getName(name){  // 'name' parameter
//     console.log("My name is: ",name);
// }
// const n = "Amit";
// const res = getName(n); // 'n' is an argument
// console.log("Hello World",res) 

// Function Expression:
// const myAge = function(age){
//     return age
// }
// console.log("My age is: ",myAge(27));


// console.log("test is : ",test);
// test();
// function test(){
//     console.log("This is test function");
// }
/*
==> Js code execution:

1) Memory creation phase:
    test : undefined -> 
            function test(){
                console.log("This is test function");
            }
2) Execution phase:
        -> "test is : ", function test(){
            console.log("This is test function");
        }
        -> test(); -> This is test function"
*/

// console.log("test function is: ",test); // 
// const test = function(){
//     console.log("This is test function");
// }


// function testNormal(num){
//     var age = 20;
//     console.log("normal function ");
// }

// testNormal(20);
// // Arrow function : fat function
// const test = (num)=>{
//     var age = 30;
//     return;
// }
// num = 10
// test(num);


//Higher-order functions & callbacks
// const person = { 
//     name:"ravi",
//     age:27,
//     email:"ravi@gmail.com"
// }

// Higher order function:
// function personDetails(getAge,getName,getEmail){

//     console.log("The name of the function is : ",person.name);
//     const age = getAge(); // a callback function
//     const email = getEmail(); //
//     const name   = getName(); //

//     return {age,email,name};
// }

// const res = personDetails(getAge, getName, getEmail);
// const callAge = res.getAge(person.age)
// const callName = res.getAge(person.name)
// const callEmail = res.getAge(person.email)

// console.log("res: ",);

// function getAge(){
//     return 20;
// }

// function getName(){
//     return "Ravi";
// }

// function getEmail(){
//     return "test@gmail.com";
// }

setTimeout(()=>{
    console.log("Execute after  2 second")
}, 2 * 1000)


// function getData(cal1, cal2){
//     cal1(); 
//     cal2(); 
//     // ==> 3
// }


/*
    Arrays: creation, access, methods (push, pop, map, filter, reduce)
    -> Array and their properties:
*/ 

// Method - 1:
const arr = [];
const arr1 = [10,"string",true,10.89,{},[]];


// Method - 2 :
// const new_array = new Array(10);
// console.log("New array: ",new_array);

/*
    Methods used in array:
    1) push: it will add item to the end of the array
    2) pop: it will popped out the last element
    3) access element:

    const nums = [];
    // push
    nums.push(10);
    nums.push(20);
    nums.push(30);
    nums.push(40,50,60,70);

    // pop: 
    const item = nums.pop();
    console.log("Popped item is: ",item)

    // Access the element :
    const index = 5;
    const first = nums[index];
    console.log(`nums[${index}] value is: ${first}`);
    console.log("Num array: ",nums)
*/ 



/*
==> Important methods of  array:
    1) map
    2) filter
    3) reduce
    4) forEach

    // let new_array = [11, 21, 30, 42, 53];
    // console.log("Original array:",new_array);

    // new_array = new_array.map((item,index)=>{
    //     return Math.floor(item / 2)
    // })

    // console.log("Mapped array: ",new_array)

    // console.log("Mapped array: ",new_array)
    // Filter:
    // new_array = new_array.filter((item,index)=>{
    //     if(item % 2 == 0){
    //         return item;
    //     }
    // })
    // console.log("Array after filter: ",new_array);

    // reduce: 
    let new_array = [11, 21, 30, 42, 53, 0];

    // const result = new_array.reduce((acc,item)=>{
    //     return acc + item;
    // },0);

    // let new_array = [11, 21, 30, 42, 53, 0];
    // const result = new_array.reduce((acc, item) => {
    //     acc[item] = item;
    //     return acc;
    // }, {});

    // output: [10, 20, 29, 41, 52, -1]

    /*
    ==> initial value = {}
    11=> initial value = {11:11} => 
    21 => initial value = {11:11} => {11:11, 21:21}
    */

    /*
        const obj = 
        {
            11: 11,
            21:21,
            30:30,
            42:42,
            53:53,
            0:0
        }
    */

    /*
        11=> 0 + 11 => acc: 11
        21 => 11+ 21 => acc: 32 
    */

    // ForEach:
    // new_array.forEach((item,index)=>{
    //     console.log("Item is: ",item,index);
    // });
    // const len = new_array.length;
    // console.log("length: ",len)
    // console.log("Sum is: ",result); 



const nums = [1,2,3,1,2,3,1,1,2,4];
/*
==> find the occurrence of each item in the array:
    1 =>  4
    2 =>  3
    3 =>  2
    4 =>  1 
*/
