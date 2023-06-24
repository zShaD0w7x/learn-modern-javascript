let arr = [1,2,3,4,5,6,7,8,9];

console.log(arr.__proto__);


let x = "";

x = arr.concat([9,32,13,214,121]); // Combines two or more arrays

x = arr.join('-'); // Adds all the elements of an array into a string, separated by the specified separator string.

x = arr.indexOf(2); // Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

x = arr.pop(); // Removes the last element from an array and returns it

x = arr.unshift(99); // Inserts new elements at the start of an array, and returns the new length of the array.

x = arr.shift(); // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

x = arr.reverse(); // Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

x = arr.includes(8); // Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

x = arr.indexOf(15); // Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

x = arr.slice(1,4); // Returns a copy of a section of an array. 

x = arr.splice(1,4); // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.


 
console.log(x);