const language=['html','javascript','css','angular','react','node.js','java','c++','c#']

const users = [{name:'Emiya'},{name:'ShaD0w'},{name:'Delskyer'},{name: 'RedPanda'}];
// FOR 

// for(let i = 0 ; i < items.length;i++){
//     console.log(items[i]);
// }


// FOR OF

// for(const items of users){
//     console.log(items.name);
// }


// FOR IN


// const colorObj = {
//     color1 : 'Red',
//     color2 : 'Blue',
//     color3 : 'green',
//     color4 : 'yellow'

// };

// for(const key in colorObj){
//     console.log(key,colorObj[key]);
// }

const colorArr = ['red','green','yellow','orange','blue'];

// for(const key in colorArr){
//     console.log(colorArr[key]);
// }


// colorArr.forEach((item)=>{  // Performs the specified action for each element in an array.
//     console.log(item);
// })

// filter short version

// const numArr = [1,2,3,4,5,6,7,8,9,10]
// const num = numArr.filter((number)=>number % 2 === 0);

// console.log(num)

// ARRAY Map 

const array1 = [1,5,9,16,24];

let doubledNumbers= array1.map( (numb) =>numb * 2);

console.log(doubledNumbers);


// Array Reduce

const cart = [];