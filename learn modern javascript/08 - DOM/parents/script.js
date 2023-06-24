document.addEventListener('DOMContentLoaded', (event) => {
    function addEventListeners() {
        document.querySelectorAll('.up').forEach((button) => {
            button.addEventListener('click', (event) => {
                const listItem = event.target.parentNode;
                const previousListItem = listItem.previousElementSibling;
                if (previousListItem) {
                    listItem.parentNode.insertBefore(listItem, previousListItem);
                }
            });
        });

        document.querySelectorAll('.down').forEach((button) => {
            button.addEventListener('click', (event) => {
                const listItem = event.target.parentNode;
                const nextListItem = listItem.nextElementSibling;
                if (nextListItem) {
                    listItem.parentNode.insertBefore(nextListItem, listItem);
                }
            });
        });

        document.querySelectorAll('.remove').forEach((button) => {
            button.addEventListener('click', (event) => {
                const listItem = event.target.parentNode;
                listItem.parentNode.removeChild(listItem);
            });
        });
    }

    addEventListeners();

    document.querySelector('#addItemButton').addEventListener('click', (event) => {
        const newItemInput = document.querySelector('#newItemInput');
        const newListItem = document.createElement('li');
        newListItem.className = 'listItem';

        const newSpan = document.createElement('span');
        newSpan.textContent = newItemInput.value;
        newListItem.appendChild(newSpan);

        ['UP', 'DOWN', 'REMOVE'].forEach((value) => {
            const newButton = document.createElement('button');
            newButton.textContent = value;
            newButton.className = value.toLowerCase();
            newListItem.appendChild(newButton);
        });

        document.querySelector('#listContainer').appendChild(newListItem);
        newItemInput.value = '';
        addEventListeners();
    });
});

let ul = document.querySelector("ul");

output = ul.children;

output = ul.children[0].innerText;
output = ul.children[0].className;
output = ul.children[0].nodeName;

// Get parent elements from a child

const child = document.querySelector(".listItem");

output = child.parentElement;

child.parentElement.style.border = '1px solid red';

//Sibling elements

let secondItem = document.querySelector('.listItem:nth-child(1)')

output = secondItem;

output = secondItem.nextElementSibling
// console.log(output);


// Create & Append Elements

const div = document.createElement('div')

div.className = 'my-element';
div.id = 'my-element'
div.setAttribute('title','My Element');

div.innerText = 'Hello World';

document.body.append(div)



// Clean & Performant

function createNewItem(item){

    const li = document.createElement('li');

    li.appendChild(document.createTextNode(item));


    const icon = document.createElement('i');

    icon.className = 'fa-solid fa-xmark';

    li.appendChild(button);


    document.querySelector('.items').appendChild(li);

}

function createButton(classes){
    const button= document.createElement('button');
    button.className = classes;

    const icon = createIcon(classes);

    button.appendChild(icon);

    return button;
    
}

function createIcon(classes){
    const icon = document.createElement('i');

    icon.className = 'fa-solid fa-xmark';

}

// Replace Elements

function replaceFirstItem(){
    const firstItem = document.querySelector("li:first-child");

    const li = document.createElement('li');
    li.textContent = 'Replaced First';

    firstItem.replaceWith(li);


}

// replaceFirstItem();

function replaceSecondItem(){
    const secondItem = document.querySelector("li:nth-child(2)")

    secondItem.textContent= "Replaced Second";
}



// Remove Elements

function removeFirstItem(){
    const ul = document.querySelector("ul");

    const li = document.querySelector("li:first-child");

    ul.removeChild(li);
}



function removeItem1(itemNumber){

    const ul = document.querySelector('ul');

    const li = document.querySelector(`li:nth-child(${itemNumber})`);

    ul.removeChild(li);
}

// removeItem1(4);


function removeItem2(itemNumber){

    const ul = document.querySelector('ul');

    const li = document.querySelectorAll('li')[itemNumber - 1];

    ul.removeChild(li);
    
}

removeItem2(4);

