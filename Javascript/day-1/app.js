/*
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

// Arithmetic Operators:
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

/*
    ==> Comparison:
*/
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