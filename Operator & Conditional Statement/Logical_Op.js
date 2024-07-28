//Logical Operators

let a = 6;
let b = 5;
let c = 6;

//Logical AND (&&)
let cond1 = a>b;
let cond2 = a===6;

console.log("cond1 a>b",a>b);
console.log("cond2 b<a",b<a);
console.log("cond1 && cond2",cond1 && cond2);

//Logical OR (||)
console.log(a>b || a===c); // true

//Logical NOT (!)

console.log(! a>b);