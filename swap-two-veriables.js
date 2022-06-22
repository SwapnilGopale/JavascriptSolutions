let a = 15;
let b = 30;

// using third variable
let c = a;
a =  b;
b=c;

console.log("Now a is ",a," and b is ", b);

// ES6
a = 15;
b = 30;
[a,b]=[b,a]

console.log("Now a is ",a," and b is ", b);

// math
a = 15;
b = 30;
a = a+b
b = a-b
a = a-b

console.log("Now a is ",a," and b is ", b);

// Simplified Math
a = 15;
b = 30;
a = a+b-(b=a)
console.log("Now a is ",a," and b is ", b);