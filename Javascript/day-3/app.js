/*
==> ES6+ Features:
    Destructuring
    Spread & Rest
    Template literals
    Optional chaining
    try...catch
    classes and inheritance
*/

/*
==> Destructuring:
    -> Array destructuring
    -> Object destructuring
*/


// Array destructuring:
// const arr = [1,2,3,4,5];
// [a, b, _,d] = arr;
// console.log("a,b and c",a,b,d,_); // 1, 2, 4
// [p, ,q] = arr
// console.log("P and q: ",p,q) // 1 3


// Object destructuring:
const person = {name:"Amit", age:25, email:'amit@gmail.com', city:"Delhi"}
// const {name, age}  = person;
// console.log("Name and age: ",name,age);

// rename variable
// const {name : person_name} = person;
// console.log("Renamed variable is: ", person_name);

// default value if variable does not found:
// const {city = 'Noida'} = person;
// console.log("City is: ", city); 

// *Function Parameters Destructuring
// function getDetails( {name, age, email} ){ // destructuring on fly
//     console.log("Person name and age is: ",name,age); // Amit, 25
// }
// getDetails(person);


/*
Spread & Rest operators:
    -> Spread(...) operator used to unpack elements from the array, string and object.
    -> The rest operator collects the remaining elements into an array or object.
    -> Both spread and rest operators shared the same syntax.
*/

//Spread(...): 
// Unpacking elements from the array:
// const arr1 = [1,2,3,4,5];
// const str = "HelloWorld";
// const new_arr = [ 10, 20, 30, ...arr1, ...str];
// console.log("updated array: ", new_arr); // [1, 2, 3, 4, 5, 10, 20, 30]


// unpacking elements from the object:
// const book = { title:"Atomic habits", price:500, currency: 'INR'};
// const new_book = {author:"James clear", ...book};
// console.log("updated book details is: ",new_book);


// unpacking elements from the string;
// const str = "HelloWorldThisIsAmitFromIndia";
// const str_arr = [...str];
// console.log("Unpacked string in the array is: ",str_arr);

//Rest(...):
// Rest in array:
// const rest_arr = [1,2,3,4]
// const [i,j, ...rest_item] = rest_arr
// console.log("First element is: ", i) // 1
// console.log("Second value: ",j) // 2
// console.log("Rest items are: ", rest_item) // [3,4]



// Rest in object:
// const cellphone = {model:'iphone 16', price: 800, currency:"USD"}
// const {model,...rest_obj} = cellphone;
// console.log("Model is: ", model) // 'iphone 16'
// console.log("rest cellphone object is: ",rest_obj); // 800, USED


//Rest in Function Parameters:
// function sum(...nums){ 
//     // nums => [1,2,3,4,5,6,7]
//     let s = 0;
//     nums.forEach(item=>{
//         s += item;
//     })
//     return s;
// }
// const r = sum(1,2,3,4,5,6,7);
// console.log();


/*
==> Template Literals:
    -> Template literals use backticks (``) instead of quotes
    -> Actions you can perform using template literals:
        -> String Interpolation
        -> Multiline Strings
        -> Expressions Inside
        -> Function Calls Inside
*/

// String Interpolation: 
// const name = "Ravi";
// const message = `Hello, ${name}!`;
// console.log(message);

// Multiline Strings:
// const msg = `
// This is line 1
// This is line 2
// line 3
// line 4`;
// console.log(msg);

//Expressions Inside
// const a = 5, b = 10;
// console.log(`Sum is ${a + b}`);


//Function Calls Inside
// function greet(name) {
//     return `Hi, ${name}`; // Hi, Amit
// }
// console.log(`${greet("Amit")}`);



/*
==> Optional Chaining (?.):
    ->  It lets you safely access deeply nested properties without having to check if each level 
        exists.
    -> syntax: '?.'
*/

// const p = {person:{name:"Ravi",city:"Noida",country:{name:"India"}}}
// // console.log(p.person.country) // undefined
// console.log(p.person?.country?.name?.pin?.location); //  undefined

// General use:
// const user = { profile: { name: 'Amit' } };
// console.log(user?.profile?.name); 
// console.log(user?.address?.city); 


// With functions
// const user = {
//     greet: () => "Hello",
// };
// console.log(user.greet?.());  //Hello
// console.log(user.sayBye?.()?.()); // undefined
  

//With Arrays:
// const data = [{id:1,name:"Amit"}];
// console.log(data?.[0]?.name) // Amit


/*
==> try...catch in JavaScript
    -> Used to handle errors gracefully during runtime without crashing your code.

    // Syntax:
    try{
        // call some risky function that may and may not crash
    }catch(err){
        console.log("Catch the error here",err)
    }finally{ // this is optional
        console.log("No matter what, i will run")
    }
*/


// Example
// try{
//     const j = JSON.parse('{invalid json}');
//     console.log(j);
// }catch(err){
//     console.log("Error while parsing invalid json: ",err);
// }

/*
==> Classes and Inheritance:
    -> Used to create blueprints for objects and enable code reuse via inheritance.
*/ 

// class Person{
//     constructor(name,age,phone_no){
//         this.name = name;
//         this.age = age;
//         this.phone_no = phone_no;
//     }

//     getName(){
//         console.log("Person name is: ",this.name);
//     }
// }

// const person = new Person("Amit", 25, 1234567890);
// person.getName();


//Inheritance with extends:

// class Developer extends Person{
//     constructor(name,age,phone_no,profile){
//         super(name,age,phone_no); // to use Person class
//         this.profile = profile;
//     }

//     getDetails(){
//         console.log(this) 
//     }
// }

// const developer = new Developer("Amit", 25, 1234567890,"MERN");
// developer.getDetails();
