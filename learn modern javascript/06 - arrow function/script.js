// Arrow function sintax

const add = (a,b) =>{
    return a + b;
};

console.log(add(1,2));


// Implicit Return
const subtract = (a,b) => a - b;


console.log(subtract(10,5))

// Can leave of () with a single param
const double = (a) => a*2;


console.log(double(6))


// Returning a object
const createObj = () =>({
    name :"Emiya",
});

console.log(createObj())

const numbers = [1,2,3,4,5];

numbers.forEach(function (n) {
    console.log(n);
});

numbers.forEach((n) => console.log(n));