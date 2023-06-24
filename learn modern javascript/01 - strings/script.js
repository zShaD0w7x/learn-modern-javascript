// Template Literals

let name = 'Raul';
let age = 22;
x = `Hello,my name is ${name} and I am ${age} years old`;

//String Proprietes and Methods

const s = new String('Hello World');

x = "";

x = typeof s; // show type of variable

x = s[0]; // show first letter of string 

//  x = s.length(); // return length of string 

x = s.__proto__; // show all prototypes 

x = s.toUpperCase();//transform all leters in upper case

x = s.toLowerCase(); // transform all leter in lower case

x = s.charAt(0); // get first letter from string 

x = s.indexOf('d'); //search and return letter position

x = s.substring(0,4); // Returns  substring at the specified location within a String object.


x = s.substring(7); // get the rest of the string from position 7

x = s.slice(0,5); // Returns a section of a string.

x = '       Hello World         xd    ';

x = x.trim(); // removes whitespace from both ends of a string and returns a new string, 

x = s.replace('World','Emiya'); // Replaces text in a string, using a regular expression or search string.

x = s.includes('Hello'); // Returns true if searchString appears as a substring of the result

x = s.valueOf(); // Returns the primitive value of the specified object.

x = s.split(''); // Split a string into substrings 
console.log(x);
