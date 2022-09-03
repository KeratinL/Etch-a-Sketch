function getInput() {
    let promptInput = prompt('Enter a whole number between 1 and 100', '');
    return promptInput;
}

function createArray(promptInput){
    const square = [];

    for(i = 0; i < promptInput; i++) {
        square[i] += `${i}`;
    }
    return square;
}

const container = document.querySelector('#container');

container.setAttribute('style', 'display: flex; flex: 1 1 0; height: 960px; width: 960px; margin: auto; border: solid black 2px;');
container.style.flexWrap = 'wrap';

function removeAllChildNodes(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function addOpacity(element) {
    console.log(element);
    element.style.opacity += '0.10';
    console.log(element.style.opacity);
}

let uniqueClass = 0;
function createUniqueClass(){
    
    uniqueClass += 1;
    return uniqueClass;
    
}

console.log(Math.floor(Math.random()*16777215).toString(16));


let promptInput = '';
let array = [''];
const button = document.querySelector('button');
    
button.addEventListener('click', () => {
    removeAllChildNodes(container);
    promptInput = getInput();
    array = createArray(promptInput * promptInput);
    array.forEach(() => {
    const div = document.createElement('div');
    div.setAttribute('style', 'background: grey; opacity: 0;')
    //div.classList.add('box');
    div.classList.add(`box${createUniqueClass()}`); // Create a unique class name for each div
    container.appendChild(div);
    div.style.height = `${960 / promptInput + 0.01}px`;
    div.style.width = `${960 / promptInput}px`;    
    div.addEventListener('mouseenter', (event) => {
        const element = document.getElementsByClassName(event.target.classList);
        //addOpacity(element[0]);
        element[0].style.opacity += 0.40;
        console.log(event);
    })

    /*
    div.addEventListener('transitionend', () => {
        div.style.opacity = '0';
    });
    */

    });
});









