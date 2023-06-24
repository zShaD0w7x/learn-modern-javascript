let x;

let fruits = ['apple','pear','orange']
let berries = ['strawberry','blueberry','rasberry']

fruits.push(berries)

x = fruits[3][1]



let allFruits = [fruits,berries]

x  = allFruits;

// Spread Operator
x = [... fruits,... berries];

//Flatten Arrays

const arr = [1,2,[3,4],5,[6,7],8];
x = arr.flat()


// Static Methos on Array Object

x = Array.isArray(fruits) // return true if elements is in array 

x = Array.from('12345') // Creates an array from an iterable object.

const a = 1
const b = 2
const c = 3

x = Array.of(a,b,c)
console.log(x)