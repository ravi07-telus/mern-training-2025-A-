/* 
    1) Introduction to JavaScript: history, where it runs:
    2) Variables Declaration (let, const, var)
    3) Data types (String, Number, Boolean, Null, Undefined, Array, Object)
    4) Operators (Arithmetic, Comparison, Logical)
    5) if, else, switch
    6) Loops: for, while, do...while, for...of, for...in
    7) break and continue
*/

// 1) Introduction to JavaScript: history, where it runs:


//

/*
    2) Variables Declaration (let, const, var):
    let num = 100; 
    // let na = "Amit"

    function sayName(){
        let num = 10;
        // let na = "Sumit";
        // console.log("Name is: ",num);
        console.log("Number is: ",num) // 10
    }

    console.log("Line 25: ",num); // 100
    sayName();



    console.log("Age is: 29:", age) // 
    let age = 25;
    console.log("Age is: 31",age)

    1) Memory Part:
        age: undefined  => 25
    2) Execution part:
        line 30:

    // const email = 'test@getnada.com';
    // email = 'test123@gmail.com';
    // console.log("Email is: ",email);
*/

/*
Home work:
    -> How js program is executed ?
*/

/*
    ==> Data types (String, Number, Boolean, Null, Undefined, Array, Object):
*/

/*
// Primitive Data type:
    1) String : 'ravi', "sumit", "mohan"
    2) Number: 1, -1, 0.8
    3) Boolean: true, false
    4) Null : null
    5) undefined
*/

/*
==> User defined:
    1) Array: [1, -2,true, "amit",undefined,null]
    2) Object: 
        const obj = { 
            full_name: "Sumit",
            'age': 25,
            'email': "sumit@getnada.com"
        }
*/

/*
==> Operators (Arithmetic, Comparison, Logical):
*/

/*

*/
// Arithmetic Operators:
/*

let a = 10;
let b = 20;

// + 
console.log("Sum : ", a+b);

// -
console.log("Subtraction : ", a-b);

// * 
console.log("Multiplication : ", a*b);

// '/' 
console.log("Division : ", a/b); // 0.5

// % 
console.log("Modular: ",a % b)

// ++ (increment operator)
console.log("++", ++a) // 11

// -- (decrement operator)
console.log("--: ",--a); 10
*/


/*
    ==> Comparison:
    a = 10;
    b = 30
    // >
    console.log("a>b: ", a>b)  // false

    // <
    console.log("a>b: ", a<b)  // true

    // >=
    a= 10;
    b=20
    console.log("a>=b: ", a>=b)  // false

    // <=
    console.log("a<=b: ", a<=b)  // tru
    a=10
    b=10
    console.log("a<=b: ", a<=b)  // true

    // ==
    a = 10;
    b = 10;
    console.log("a==b: line 129", a == b) // true

    // ===
    console.log("a === b: line 133", a === b) // false
*/




/*
==> Logical Operators:
    1) &&
    2) ||
    3) !


    let a = 10;
    let b = 20;

    console.log("a && b", a && b); // 20

    console.log(" a || b",a || b) // 10

    console.log("!",!a) //
*/ 

/*
    ==> Conditional Statement:
    1) if, else, switch, if..else if...else
    2) Ternary operator: 
*/ 


let a = 40;
let b = 30;

// if(a>b){
//     console.log("a is greater",a)
// }else if(a == b){
//     console.log("a and b is equal")
// }else{
//     console.log("b is greater",b)
// }

/*

    if(a>b) console.log("Hello World");


    let count = 2;
    switch(count){
        case 0:{
            console.log("Case 0");
            break;
        }
        case 1:{
            console.log("Case 1");
            break
        }
        case 2:{
            console.log("Case 2");
            break;
        }
        case 3:{
            console.log("Case 3");
            break;
        }
        default:{
            console.log("Default block is called")
        }
    }

    // Ternary operators:
    let x = a>b ? a : b // condition ? true : false
*/

/*
    let n1 = "ravi"
    let n2 = "sumit"
    let n3 = "pawan"
*/

/*
    let n1 = "ravi Kumar"
    let n2 = "sumit"
    let n3 = "pawan"

    if(n1.length > n2.length && n1.length > n3.length){
        console.log(`${n1} is greater among all`)
    }else if( n2.length > n1.length && n2.length > n3.length){
        console.log(`${n2} is greater among all`)
    }else{
        console.log(`${n3} is greater among all`)
    }
*/


//  Loops: for, while, do...while, for...of, for...in: 
// for(let i=0; i<=10; i++){
//     console.log("Value of i is: ",i);
// }

// let i = 0;
// while(i<=10){
//     console.log("Value of i is in while loop ",i++);
// }

// let i = 12;
// do{
//     console.log("Value of i:",i)
// }while(i<=10);


const arr = ["Ravi","Pawan","Dilip","Sumit"];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for..of:
for(let item of arr){
    console.log("Item is: ",item);
}


// for..in
const person = {
    name:"Pawan",
    age:29,
    email:"pawan@gmail.com"
}

for(let item in person){
    console.log("Item is: ",item);
}

// let count = 10;
// while(1){
//     if(count == 20){
//         break;
//     }
//     count++
// }
// console.log("Count is: ",count);

// for(let i=0;i<20;i++){
//     if( i%2 !=0){
//         continue;
//     }
//     console.log("Value of i is: ",i);  // 0,2,4,6,8,10,......18
// }

/*
    const nums = [10,3,10,12,90,11,2,8,0]
    find the greater among all the numbers:
*/