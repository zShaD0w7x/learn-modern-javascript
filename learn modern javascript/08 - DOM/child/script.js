let output;

const parent = document.querySelector('.parent');

output = parent.childNodes[0];
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = 'Child one';
output = parent.childNodes[5].style.color = 'red';

output = parent.firstChild

output = parent.lastChild

// Parent node

const child = document.querySelector(".child")

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = 'gray';
child.parentNode.style.padding = '10px';

const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem.nextSibling

output = secondItem.previousSibling

console.log(output);